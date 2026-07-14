import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import collegeImg from '@/assets/college.webp';
import { TiltCard } from '@/components/ui/tilt-card';

export function About() {
  const ref = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [30, -30]);

  return (
    <section id="about" className="py-32 relative z-10" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Unveiling the Future <span className="text-gradient">of Materials</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto font-light"
          >
            A world-class gathering of researchers, scientists, and innovators shaping tomorrow's scientific landscape.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <motion.div 
            style={{ y: y1 }}
            className="h-full"
          >
            <TiltCard className="h-full">
              <div className="glass-card p-8 md:p-12 rounded-3xl h-full flex flex-col justify-center">
                <div className="text-primary text-sm font-bold tracking-widest mb-8 uppercase flex items-center gap-4">
                  <span className="w-8 h-px bg-primary" />
                  01 — About the Conference
                </div>
                <p className="text-white/80 leading-relaxed mb-10 text-lg">
                  ICRIMST 2026 is the 9th edition of the annual flagship event organized by Elavenil-ISTA, proudly hosted at Sacred Heart College to celebrate its 75th Platinum Jubilee. This prestigious gathering brings together visionaries, researchers, and pioneers to highlight groundbreaking advances in Materials Science, Applied Sciences, and Technology, featuring keynote addresses, plenary lectures, oral presentations, and poster sessions.
                </p>
                <blockquote className="border-l-4 border-secondary pl-6 italic text-white/60 font-serif text-xl relative">
                  <span className="absolute -left-3 top-[-10px] text-5xl text-secondary/20 font-sans">"</span>
                  Science knows no country, because knowledge belongs to humanity, and is the torch which illuminates the world.
                </blockquote>
              </div>
            </TiltCard>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-full"
          >
            <TiltCard className="h-full">
              <div className="glass-card p-8 md:p-12 rounded-3xl flex flex-col h-full">
                <div className="text-secondary text-sm font-bold tracking-widest mb-8 uppercase flex items-center gap-4">
                  <span className="w-8 h-px bg-secondary" />
                  02 — About the College
                </div>
                <div className="mb-8 rounded-2xl overflow-hidden aspect-[4/3] relative group">
                  <img src={collegeImg} alt="Sacred Heart College" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                </div>
                <p className="text-white/80 leading-relaxed text-lg">
                  Established in 1951, Sacred Heart College (Autonomous), Tirupattur, is a minority institution administered by the Salesians of Don Bosco. Since gaining autonomy in 1987, it has stood as a center of academic excellence. The college's Platinum Jubilee year marks 75 years of transformational education, innovation, and community impact.
                </p>
              </div>
            </TiltCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
