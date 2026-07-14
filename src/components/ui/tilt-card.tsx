import React from 'react';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion';

export function TiltCard({ children, className }: { children: React.ReactNode, className?: string }) {
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  
  const shouldReduceMotion = useReducedMotion();
  const springX = useSpring(x, { stiffness: 400, damping: 30 });
  const springY = useSpring(y, { stiffness: 400, damping: 30 });

  const rotateX = useTransform(springY, [0, 1], shouldReduceMotion ? [0, 0] : [5, -5]);
  const rotateY = useTransform(springX, [0, 1], shouldReduceMotion ? [0, 0] : [-5, 5]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width);
    y.set(mouseY / height);
  }

  function handleMouseLeave() {
    x.set(0.5);
    y.set(0.5);
  }

  return (
    <div style={{ perspective: 1000 }} className={className}>
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          height: '100%'
        }}
      >
        <div style={{ transform: shouldReduceMotion ? "none" : "translateZ(20px)", height: '100%' }}>
          {children}
        </div>
      </motion.div>
    </div>
  );
}
