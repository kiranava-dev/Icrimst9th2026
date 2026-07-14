import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface CellDef {
  position: THREE.Vector3;
  scale: number;
  color: string;
  offset: number;
}

export function CellSpheres({ count = 5 }: { count?: number }) {
  const refs = useRef<THREE.Group[]>([]);

  const cells: CellDef[] = useMemo(() => {
    const colors = ['#34d399', '#00d4ff', '#a78bfa'];
    return Array.from({ length: count }).map((_, i) => ({
      position: new THREE.Vector3((Math.random() - 0.5) * 7, (Math.random() - 0.5) * 4, (Math.random() - 0.5) * 3 - 1),
      scale: 0.3 + Math.random() * 0.35,
      color: colors[i % colors.length],
      offset: Math.random() * 10,
    }));
  }, [count]);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    cells.forEach((cell, i) => {
      const g = refs.current[i];
      if (!g) return;
      g.position.y = cell.position.y + Math.sin(t * 0.25 + cell.offset) * 0.25;
      g.position.x = cell.position.x + Math.cos(t * 0.18 + cell.offset) * 0.15;
      g.rotation.y = t * 0.1 + cell.offset;
    });
  });

  return (
    <>
      {cells.map((cell, i) => (
        <group key={i} ref={(el) => { if (el) refs.current[i] = el; }} position={cell.position} scale={cell.scale}>
          <mesh>
            <icosahedronGeometry args={[1, 1]} />
            <meshStandardMaterial
              color={cell.color}
              emissive={cell.color}
              emissiveIntensity={0.6}
              transparent
              opacity={0.14}
              wireframe={false}
              toneMapped={false}
            />
          </mesh>
          <mesh>
            <icosahedronGeometry args={[1, 0]} />
            <meshBasicMaterial color={cell.color} wireframe transparent opacity={0.2} />
          </mesh>
          <mesh scale={0.35}>
            <sphereGeometry args={[1, 12, 12]} />
            <meshBasicMaterial color={cell.color} transparent opacity={0.4} toneMapped={false} />
          </mesh>
        </group>
      ))}
    </>
  );
}
