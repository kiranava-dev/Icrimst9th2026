import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { usePointerRef } from './pointer-parallax';
import { Starfield } from './starfield';
import { AtomStructure } from './atom-structure';
import { Waveform } from './waveform';
import { EnergyField } from './energy-field';
import { ParticleCollisions } from './particle-collisions';
import { MathShapes } from './math-shapes';
import { DNAHelix3D } from './dna-helix-3d';
import { NeuronNetwork } from './neuron-network';
import { CellSpheres } from './cell-spheres';
import { GlowTrails } from './glow-trails';

function ParallaxRig({ children }: { children: React.ReactNode }) {
  const group = useRef<THREE.Group>(null);
  const pointer = usePointerRef();

  useFrame(() => {
    if (!group.current) return;
    const { x, y } = pointer.current;
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, x * 0.12, 0.03);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -y * 0.08, 0.03);
    group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, x * 0.3, 0.03);
    group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, -y * 0.2, 0.03);
  });

  return <group ref={group}>{children}</group>;
}

function SceneContents() {
  return (
    <ParallaxRig>
      <Starfield />
      <ambientLight intensity={0.35} />
      <pointLight position={[4, 3, 4]} color="#00d4ff" intensity={1.2} distance={12} />
      <pointLight position={[-4, -3, 2]} color="#a78bfa" intensity={1.1} distance={12} />

      <AtomStructure position={[-3.6, 1.6, -1.2]} color="#00d4ff" electronCount={2} speed={1} />
      <AtomStructure position={[3.4, -1.4, -1.8]} color="#a78bfa" electronCount={3} speed={0.8} />
      <AtomStructure position={[0.6, 2.2, -2.4]} color="#34d399" electronCount={2} speed={1.2} scale={0.75} />

      <Waveform position={[0, 0.2, -2]} color="#00d4ff" amplitude={0.4} length={9} />
      <Waveform position={[0, -2.3, -2.6]} color="#a78bfa" amplitude={0.3} length={9} />

      <EnergyField position={[2.6, 0.4, -3]} color="#a78bfa" />
      <EnergyField position={[-2.8, -1.8, -2.4]} color="#00d4ff" />

      <ParticleCollisions count={4} />

      <MathShapes />

      <DNAHelix3D position={[3.6, 0.2, -1.6]} />

      <NeuronNetwork position={[-2.6, -0.8, -1.4]} count={14} spread={2.4} />

      <CellSpheres count={5} />

      <GlowTrails />
    </ParallaxRig>
  );
}

export function ScientificScene() {
  return (
    <Canvas
      className="!fixed !inset-0"
      style={{ zIndex: -1 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      camera={{ position: [0, 0, 6], fov: 55 }}
    >
      <Suspense fallback={null}>
        <SceneContents />
      </Suspense>
    </Canvas>
  );
}
