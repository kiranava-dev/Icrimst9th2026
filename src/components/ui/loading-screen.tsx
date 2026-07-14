import { motion, useReducedMotion } from 'framer-motion';
import logo from '@/assets/icrimst-logo.png';
import { useEffect, useState } from 'react';

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: 1.2, ease: 'easeInOut' }}
      onAnimationComplete={() => document.body.style.overflow = 'auto'}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
    >
      <motion.div
        initial={{ scale: shouldReduceMotion ? 1 : 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.5, ease: 'easeOut' }}
        className="flex flex-col items-center gap-6"
      >
        <img src={logo} alt="ICRIMST Logo" className="w-24 h-24 object-contain filter brightness-200" />
        <div className="flex flex-col items-center gap-3">
          <h1 className="font-display font-bold text-3xl tracking-tight text-white">ICRIMST <span className="text-gradient">2026</span></h1>
          <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: shouldReduceMotion ? 0 : 1, delay: 0.2, ease: 'easeInOut' }}
              className="h-full bg-primary"
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
