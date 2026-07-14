import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function DNAHelix3D({ position }: { position: [number, number, number] }) {
  const group = useRef<THREE.Group>(null);
  const turns = 4;
  const pointsPerTurn = 14;
  const total = turns * pointsPerTurn;
  const radius = 0.5;
  const height = 3.2;

  const { strandA, strandB, rungs } = useMemo(() => {
    const a: THREE.Vector3[] = [];
    const b: THREE.Vector3[] = [];
    const r: [THREE.Vector3, THREE.Vector3][] = [];
    for (let i = 0; i <= total; i++) {
      const t = i / total;
      const angle = t * turns * Math.PI * 2;
      const y = t * height - height / 2;
      const pa = new THREE.Vector3(Math.cos(angle) * radius, y, Math.sin(angle) * radius);
      const pb = new THREE.Vector3(Math.cos(angle + Math.PI) * radius, y, Math.sin(angle + Math.PI) * radius);
      a.push(pa);
      b.push(pb);
      if (i % 3 === 0) r.push([pa, pb]);
    }
    return { strandA: a, strandB: b, rungs: r };
  }, [total, turns, height, radius]);

  const geoA = useMemo(() => new THREE.BufferGeometry().setFromPoints(strandA), [strandA]);
  const geoB = useMemo(() => new THREE.BufferGeometry().setFromPoints(strandB), [strandB]);
  const rungGeo = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    rungs.forEach(([pa, pb]) => {
      pts.push(pa, pb);
    });
    return new THREE.BufferGeometry().setFromPoints(pts);
  }, [rungs]);

  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.12;
  });

  return (
    <group ref={group} position={position}>
      <primitive object={new THREE.Line(geoA, new THREE.LineBasicMaterial({ color: '#00d4ff', transparent: true, opacity: 0.45 }))} />
      <primitive object={new THREE.Line(geoB, new THREE.LineBasicMaterial({ color: '#a78bfa', transparent: true, opacity: 0.45 }))} />
      <primitive object={new THREE.LineSegments(rungGeo, new THREE.LineBasicMaterial({ color: '#60a5fa', transparent: true, opacity: 0.2 }))} />
      {strandA.filter((_, i) => i % 2 === 0).map((p, i) => (
        <mesh key={`a-${i}`} position={p}>
          <sphereGeometry args={[0.035, 8, 8]} />
          <meshBasicMaterial color="#00d4ff" transparent opacity={0.7} toneMapped={false} />
        </mesh>
      ))}
      {strandB.filter((_, i) => i % 2 === 0).map((p, i) => (
        <mesh key={`b-${i}`} position={p}>
          <sphereGeometry args={[0.035, 8, 8]} />
          <meshBasicMaterial color="#a78bfa" transparent opacity={0.7} toneMapped={false} />
        </mesh>
      ))}
    </group>
  );
}
