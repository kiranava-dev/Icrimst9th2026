import React from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';

export function Magnetic({ children, className, ...props }: any) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const shouldReduceMotion = useReducedMotion();

  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  function handleMouse(event: React.MouseEvent<HTMLDivElement>) {
    if (shouldReduceMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const clientX = event.clientX;
    const clientY = event.clientY;
    x.set((clientX - (rect.left + rect.width / 2)) * 0.2);
    y.set((clientY - (rect.top + rect.height / 2)) * 0.2);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      style={{ x: springX, y: springY, display: 'inline-block' }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
