import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Trail } from '@react-three/drei';
import * as THREE from 'three';

function TrailParticle({ radius, speed, color, tilt, offset }: { radius: number; speed: number; color: string; tilt: number; offset: number }) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime * speed + offset;
    if (ref.current) {
      ref.current.position.set(
        Math.cos(t) * radius,
        Math.sin(t * 0.6) * radius * 0.4,
        Math.sin(t) * radius * Math.sin(tilt),
      );
    }
  });

  return (
    <Trail width={1.4} length={5} color={color} attenuation={(w) => w * w} decay={2}>
      <mesh ref={ref}>
        <sphereGeometry args={[0.05, 8, 8]} />
        <meshBasicMaterial color={color} toneMapped={false} />
      </mesh>
    </Trail>
  );
}

/** A few particles orbiting slowly, leaving soft glowing trails — represents energetic moving particles. */
export function GlowTrails() {
  return (
    <group position={[0, 0.4, -1.5]}>
      <TrailParticle radius={3.2} speed={0.18} color="#00d4ff" tilt={0.6} offset={0} />
      <TrailParticle radius={2.4} speed={0.26} color="#a78bfa" tilt={1.1} offset={2.1} />
      <TrailParticle radius={4} speed={0.12} color="#34d399" tilt={0.3} offset={4.4} />
    </group>
  );
}
