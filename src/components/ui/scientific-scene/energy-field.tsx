import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function EnergyField({ position, color = '#a78bfa' }: { position: [number, number, number]; color?: string }) {
  const ring1 = useRef<THREE.Mesh>(null);
  const ring2 = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (ring1.current) {
      const s = 1 + Math.sin(t * 0.6) * 0.15;
      ring1.current.scale.setScalar(s);
      ring1.current.rotation.z = t * 0.15;
      (ring1.current.material as THREE.Material & { opacity: number }).opacity = 0.18 + Math.sin(t * 0.6) * 0.08;
    }
    if (ring2.current) {
      const s = 1.3 + Math.cos(t * 0.4) * 0.2;
      ring2.current.scale.setScalar(s);
      ring2.current.rotation.z = -t * 0.1;
    }
  });

  return (
    <group position={position}>
      <mesh ref={ring1}>
        <torusGeometry args={[0.9, 0.02, 16, 100]} />
        <meshBasicMaterial color={color} transparent opacity={0.2} toneMapped={false} />
      </mesh>
      <mesh ref={ring2} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[1.1, 0.012, 16, 100]} />
        <meshBasicMaterial color={color} transparent opacity={0.12} toneMapped={false} />
      </mesh>
    </group>
  );
}
