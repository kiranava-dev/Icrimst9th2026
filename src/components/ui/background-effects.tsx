import { Suspense, lazy, useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import { HexLattice } from './hex-lattice';
import { HolographicData } from './holographic-data';
import { SceneErrorBoundary } from './scientific-scene/scene-error-boundary';
import { hasWebGL } from '@/lib/webgl-support';

const ScientificScene = lazy(() =>
  import('./scientific-scene/scientific-scene').then((m) => ({ default: m.ScientificScene })),
);

/**
 * Deep-space futuristic background: "Interconnection of Physics, Mathematics
 * and Life Sciences". Layers, back to front:
 * 1. animated cosmic gradient (deep space colors)
 * 2. faint crystal-lattice / coordinate grid
 * 3. React Three Fiber 3D scene — atoms, waveforms, energy fields, particle
 *    collisions, math shapes, DNA helix, neuron network, cell spheres, glow trails
 * 4. holographic floating equations & math symbols (GSAP-animated glow)
 * 5. transparent dark overlay so page content stays readable
 */
export function BackgroundEffects() {
  const shouldReduceMotion = useReducedMotion();
  const [webglOk, setWebglOk] = useState(false);

  useEffect(() => {
    setWebglOk(hasWebGL());
  }, []);

  const show3D = !shouldReduceMotion && webglOk;

  return (
    <>
      <div className="fixed inset-0 z-[-4] overflow-hidden pointer-events-none bg-background cosmic-bg" />

      <div className="fixed inset-0 z-[-3] overflow-hidden pointer-events-none">
        <HexLattice />
      </div>

      {show3D && (
        <SceneErrorBoundary>
          <Suspense fallback={null}>
            <ScientificScene />
          </Suspense>
        </SceneErrorBoundary>
      )}

      {!shouldReduceMotion && <HolographicData />}

      {/* transparent dark overlay for text readability */}
      <div className="fixed inset-0 z-[-1] pointer-events-none bg-gradient-to-b from-background/45 via-background/20 to-background/60" />
    </>
  );
}
