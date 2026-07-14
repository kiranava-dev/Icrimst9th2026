import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface AtomStructureProps {
  position: [number, number, number];
  scale?: number;
  color?: string;
  electronCount?: number;
  speed?: number;
}

export function AtomStructure({ position, scale = 1, color = '#00d4ff', electronCount = 3, speed = 1 }: AtomStructureProps) {
  const group = useRef<THREE.Group>(null);
  const orbits = useRef<THREE.Group[]>([]);

  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.05 * speed;
      group.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.3 * speed + position[0]) * 0.3;
    }
    orbits.current.forEach((orbit, i) => {
      if (orbit) orbit.rotation.z += delta * (0.4 + i * 0.15) * speed;
    });
  });

  return (
    <group ref={group} position={position} scale={scale}>
      <mesh>
        <sphereGeometry args={[0.22, 24, 24]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={2} toneMapped={false} />
      </mesh>
      <pointLight color={color} intensity={2} distance={4} />
      {Array.from({ length: electronCount }).map((_, i) => {
        const tiltX = (i * Math.PI) / electronCount;
        const orbitR = 0.7 + i * 0.28;
        return (
          <group key={i} rotation={[tiltX, i * 0.6, 0]} ref={(el) => { if (el) orbits.current[i] = el; }}>
            <mesh rotation={[Math.PI / 2, 0, 0]}>
              <torusGeometry args={[orbitR, 0.004, 8, 64]} />
              <meshBasicMaterial color={color} transparent opacity={0.25} />
            </mesh>
            <mesh position={[orbitR, 0, 0]}>
              <sphereGeometry args={[0.045, 12, 12]} />
              <meshBasicMaterial color="#ffffff" toneMapped={false} />
            </mesh>
          </group>
        );
      })}
    </group>
  );
}
