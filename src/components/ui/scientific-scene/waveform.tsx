import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface WaveformProps {
  position: [number, number, number];
  color?: string;
  amplitude?: number;
  length?: number;
}

/** A single flowing waveform line representing EM / acoustic waves. */
export function Waveform({ position, color = '#00d4ff', amplitude = 0.5, length = 8 }: WaveformProps) {
  const lineRef = useRef<THREE.Line>(null);
  const segments = 120;

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array((segments + 1) * 3);
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geo;
  }, []);

  useFrame((state) => {
    const posAttr = geometry.getAttribute('position') as THREE.BufferAttribute;
    const t = state.clock.elapsedTime;
    for (let i = 0; i <= segments; i++) {
      const x = (i / segments) * length - length / 2;
      const y = Math.sin(i * 0.35 + t * 1.2) * amplitude * Math.sin(i / segments * Math.PI);
      posAttr.setXYZ(i, x, y, 0);
    }
    posAttr.needsUpdate = true;
  });

  return (
    <group position={position}>
      <primitive object={new THREE.Line(geometry, new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.4 }))} ref={lineRef} />
    </group>
  );
}
