import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function NeuronNetwork({ position, count = 16, spread = 2.6 }: { position: [number, number, number]; count?: number; spread?: number }) {
  const group = useRef<THREE.Group>(null);

  const nodes = useMemo(() => {
    return Array.from({ length: count }).map(() => new THREE.Vector3(
      (Math.random() - 0.5) * spread,
      (Math.random() - 0.5) * spread,
      (Math.random() - 0.5) * spread * 0.6,
    ));
  }, [count, spread]);

  const { lineGeo, pulseData } = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    const pulses: { a: THREE.Vector3; b: THREE.Vector3; offset: number }[] = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (nodes[i].distanceTo(nodes[j]) < spread * 0.55) {
          pts.push(nodes[i], nodes[j]);
          pulses.push({ a: nodes[i], b: nodes[j], offset: Math.random() * 4 });
        }
      }
    }
    return { lineGeo: new THREE.BufferGeometry().setFromPoints(pts), pulseData: pulses.slice(0, 10) };
  }, [nodes, spread]);

  const pulseRefs = useRef<THREE.Mesh[]>([]);

  useFrame((state, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.03;
    const t = state.clock.elapsedTime;
    pulseData.forEach((p, i) => {
      const mesh = pulseRefs.current[i];
      if (!mesh) return;
      const phase = ((t + p.offset) % 3) / 3;
      mesh.position.lerpVectors(p.a, p.b, phase);
      (mesh.material as THREE.MeshBasicMaterial).opacity = 1 - Math.abs(phase - 0.5) * 1.4;
    });
  });

  return (
    <group ref={group} position={position}>
      <primitive object={new THREE.LineSegments(lineGeo, new THREE.LineBasicMaterial({ color: '#34d399', transparent: true, opacity: 0.18 }))} />
      {nodes.map((n, i) => (
        <mesh key={i} position={n}>
          <sphereGeometry args={[0.045, 10, 10]} />
          <meshBasicMaterial color="#34d399" transparent opacity={0.55} toneMapped={false} />
        </mesh>
      ))}
      {pulseData.map((_, i) => (
        <mesh key={`pulse-${i}`} ref={(el) => { if (el) pulseRefs.current[i] = el; }}>
          <sphereGeometry args={[0.03, 8, 8]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.8} toneMapped={false} />
        </mesh>
      ))}
    </group>
  );
}
