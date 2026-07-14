import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function WireCube({ position, color, speed = 1 }: { position: [number, number, number]; color: string; speed?: number }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.12 * speed;
      ref.current.rotation.y += delta * 0.18 * speed;
    }
  });
  return (
    <mesh ref={ref} position={position}>
      <boxGeometry args={[0.9, 0.9, 0.9]} />
      <meshBasicMaterial color={color} wireframe transparent opacity={0.28} />
    </mesh>
  );
}

function WireSphere({ position, color, speed = 1 }: { position: [number, number, number]; color: string; speed?: number }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.1 * speed;
  });
  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[0.6, 16, 16]} />
      <meshBasicMaterial color={color} wireframe transparent opacity={0.22} />
    </mesh>
  );
}

/** Icosahedron used as a stand-in for a fractal-like geometric structure. */
function WireFractal({ position, color, speed = 1 }: { position: [number, number, number]; color: string; speed?: number }) {
  const group = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.x -= delta * 0.08 * speed;
      group.current.rotation.z += delta * 0.14 * speed;
    }
  });
  return (
    <group ref={group} position={position}>
      <mesh>
        <icosahedronGeometry args={[0.55, 0]} />
        <meshBasicMaterial color={color} wireframe transparent opacity={0.25} />
      </mesh>
      <mesh scale={0.5}>
        <icosahedronGeometry args={[0.55, 0]} />
        <meshBasicMaterial color={color} wireframe transparent opacity={0.35} />
      </mesh>
    </group>
  );
}

function CoordinateGrid({ position }: { position: [number, number, number] }) {
  const ref = useRef<THREE.GridHelper>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.z += delta * 0.02;
  });
  return (
    <gridHelper
      ref={ref as any}
      args={[6, 12, '#00d4ff', '#00d4ff']}
      position={position}
      rotation={[Math.PI / 2.3, 0, 0]}
    />
  );
}

export function MathShapes() {
  return (
    <>
      <WireCube position={[-3.4, 1.4, -1.5]} color="#00d4ff" />
      <WireSphere position={[3.2, -1.1, -1]} color="#a78bfa" speed={0.8} />
      <WireFractal position={[2.6, 1.8, -2]} color="#34d399" speed={1.1} />
      <CoordinateGrid position={[0, -2.6, -3]} />
    </>
  );
}
