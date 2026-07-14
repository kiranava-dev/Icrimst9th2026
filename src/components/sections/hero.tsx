import { Calendar, MapPin } from 'lucide-react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { Magnetic } from '@/components/ui/magnetic-button';
import { CountdownTimer } from '@/components/ui/countdown-timer';
import hero3d from '@/assets/science-hero-3d.png';

export function Hero() {
  const { scrollY } = useScroll();
  const shouldReduceMotion = useReducedMotion();
  const y1 = useTransform(scrollY, [0, 500], shouldReduceMotion ? [0, 0] : [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], shouldReduceMotion ? [0, 0] : [0, -100]);

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden">
      {/* 3D Scientific Visual */}
      <motion.div 
        style={{ y: y1 }}
        animate={{ rotate: shouldReduceMotion ? 0 : 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        className="absolute z-0 opacity-40 mix-blend-screen max-w-[800px] w-[80vw]"
      >
        <img src={hero3d} alt="Science 3D Visualization" className="w-full h-auto drop-shadow-[0_0_50px_rgba(0,212,255,0.3)]" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center mt-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-[18px] md:text-[24px] font-bold text-white mb-10 shadow-[0_4px_24px_rgba(0,0,0,0.2)]"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(0,212,255,0.8)]" />
          9th Edition · Platinum Jubilee
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-bold text-5xl md:text-8xl lg:text-9xl tracking-tight mb-8 drop-shadow-2xl"
        >
          ICRIMST <span className="text-gradient">2026</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-2xl text-white/80 max-w-3xl mb-14 font-light leading-relaxed"
        >
          International Conference on Recent Innovations in Material Science and Technology
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-16"
        >
          <div className="flex items-center gap-3 px-6 py-3 rounded-2xl glass-card text-white/90">
            <Calendar className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">September 16–18, 2026</span>
          </div>
          <div className="flex items-center gap-3 px-6 py-3 rounded-2xl glass-card text-white/90">
            <MapPin className="w-5 h-5 text-secondary" />
            <span className="text-sm font-medium">Sacred Heart College (Autonomous), Tirupattur</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <div className="text-[11px] text-white/40 uppercase tracking-[0.25em] font-medium mb-4">
            Countdown to ICRIMST 2026
          </div>
          <CountdownTimer />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-6 mb-24"
        >
          <Magnetic>
            <a 
              href="https://forms.gle/ZxcrQ84kKKb7Yh5q6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-10 py-4 rounded-full bg-white text-background font-semibold hover:bg-white/90 hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-[0_0_30px_rgba(255,255,255,0.3)]"
            >
              Register Now
            </a>
          </Magnetic>
          <Magnetic>
            <a 
              href="mailto:icrimst2026@gmail.com" 
              className="inline-flex px-10 py-4 rounded-full glass-card text-white font-semibold hover:bg-white/10 hover:border-white/20 active:scale-95 transition-all"
            >
              Submit Abstract
            </a>
          </Magnetic>
        </motion.div>

        <motion.div 
          style={{ y: y2 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-12 md:gap-24 pt-10 border-t border-white/10 w-full max-w-5xl"
        >
          {[
            { label: "Edition", value: "9th" },
            { label: "Days", value: "3" },
            { label: "Legacy", value: "75+ Yrs" },
            { label: "Countries", value: "20+" }
          ].map((stat, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: shouldReduceMotion ? 0 : -5 }}
              className="flex flex-col items-center"
            >
              <span className="font-display font-bold text-4xl md:text-5xl text-white mb-2">{stat.value}</span>
              <span className="text-xs text-white/50 uppercase tracking-[0.2em] font-medium">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
