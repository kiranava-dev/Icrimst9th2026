import { motion } from 'framer-motion';
import { UserPlus, Mail, CheckCircle2, CalendarDays } from 'lucide-react';
import { TiltCard } from '@/components/ui/tilt-card';

const milestones = [
  { date: "July 16, 2026", title: "Registration Opens", desc: "Early bird registration begins for all participant categories.", icon: UserPlus },
  { date: "August 27, 2026", title: "Abstract Deadline", desc: "Last date to submit abstracts to icrimst2026@gmail.com.", icon: Mail },
  { date: "August 30, 2026", title: "Acceptance Notification", desc: "Authors will be notified of abstract acceptance status.", icon: CheckCircle2 },
  { date: "Sep 16–18, 2026", title: "Conference", desc: "The 3-day ICRIMST 2026 event at Sacred Heart College, Tirupattur.", icon: CalendarDays },
];

export function Dates() {
  return (
    <section id="dates" className="py-32 relative z-10">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Important <span className="text-gradient">Dates</span>
          </motion.h2>
        </div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/0 via-primary/30 to-primary/0 md:-translate-x-1/2" />
          
          {milestones.map((m, i) => {
            const Icon = m.icon;
            const isEven = i % 2 === 0;
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative flex items-center justify-between mb-12 md:mb-24 ${isEven ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="hidden md:block w-5/12" />
                
                <div className="absolute left-0 md:left-1/2 w-16 h-16 rounded-full glass-card flex items-center justify-center md:-translate-x-1/2 z-10 text-primary shadow-[0_0_20px_rgba(0,212,255,0.2)]">
                  <Icon className="w-6 h-6" />
                </div>

                <div className="w-full md:w-5/12 pl-24 md:pl-0">
                  <TiltCard>
                    <div className={`glass-card p-8 rounded-3xl ${isEven ? 'md:text-right' : 'md:text-left'} group hover:border-primary/40 transition-colors`}>
                      <div className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-mono font-semibold mb-4 border border-accent/20 group-hover:scale-105 transition-transform">{m.date}</div>
                      <h3 className="font-display text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{m.title}</h3>
                      <p className="text-white/60 text-base leading-relaxed">{m.desc}</p>
                    </div>
                  </TiltCard>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
