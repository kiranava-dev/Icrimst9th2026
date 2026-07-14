import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface BurstSlot {
  center: THREE.Vector3;
  period: number;
  offset: number;
  color: THREE.Color;
}

/** Continuous, deterministic particle-collision pings — small bursts that expand and fade on a loop. */
export function ParticleCollisions({ count = 4 }: { count?: number }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const refs = useRef<any[]>([]);
  const perBurst = 22;

  const slots: BurstSlot[] = useMemo(() => {
    const colors = ['#00d4ff', '#a78bfa', '#34d399', '#60a5fa'];
    return Array.from({ length: count }).map((_, i) => ({
      center: new THREE.Vector3((Math.random() - 0.5) * 6, (Math.random() - 0.5) * 3.5, (Math.random() - 0.5) * 3),
      period: 5 + Math.random() * 3,
      offset: Math.random() * 5,
      color: new THREE.Color(colors[i % colors.length]),
    }));
  }, [count]);

  const geometries = useMemo(() => {
    return slots.map((slot) => {
      const dirs: THREE.Vector3[] = [];
      for (let i = 0; i < perBurst; i++) {
        const phi = Math.acos(2 * Math.random() - 1);
        const theta = Math.random() * Math.PI * 2;
        dirs.push(new THREE.Vector3(Math.sin(phi) * Math.cos(theta), Math.sin(phi) * Math.sin(theta), Math.cos(phi)));
      }
      return dirs;
    });
  }, [slots, perBurst]);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    slots.forEach((slot, si) => {
      const points = refs.current[si];
      if (!points) return;
      const phase = ((t + slot.offset) % slot.period) / slot.period; // 0..1
      const expand = phase < 0.5 ? phase / 0.5 : 1;
      const fade = phase < 0.5 ? 1 : 1 - (phase - 0.5) / 0.5;
      const radius = expand * 0.9;
      const posAttr = points.geometry.getAttribute('position') as THREE.BufferAttribute;
      geometries[si].forEach((dir, i) => {
        const p = slot.center.clone().add(dir.clone().multiplyScalar(radius));
        posAttr.setXYZ(i, p.x, p.y, p.z);
      });
      posAttr.needsUpdate = true;
      const mat = points.material as THREE.PointsMaterial;
      mat.opacity = Math.max(0, fade) * 0.7;
    });
  });

  return (
    <>
      {slots.map((slot, si) => (
        <points key={si} ref={(el) => { if (el) refs.current[si] = el; }}>
          <bufferGeometry>
            <bufferAttribute attach="attributes-position" args={[new Float32Array(perBurst * 3), 3]} />
          </bufferGeometry>
          <pointsMaterial color={slot.color} size={0.05} transparent opacity={0} depthWrite={false} toneMapped={false} />
        </points>
      ))}
    </>
  );
}
