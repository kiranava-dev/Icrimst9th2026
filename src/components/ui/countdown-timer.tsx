import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const TARGET_DATE = new Date('2026-09-16T00:00:00+05:30').getTime();

function getTimeLeft() {
  const diff = Math.max(TARGET_DATE - Date.now(), 0);
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    const interval = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  const units = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <div className="flex items-center gap-3 md:gap-5" role="timer" aria-label="Countdown to ICRIMST 2026">
      {units.map((unit, i) => (
        <motion.div
          key={unit.label}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center glass-card rounded-2xl px-4 py-3 md:px-6 md:py-4 min-w-[68px] md:min-w-[84px] border-white/10"
        >
          <span className="font-display font-bold text-2xl md:text-4xl text-gradient tabular-nums">
            {String(unit.value).padStart(2, '0')}
          </span>
          <span className="text-[10px] md:text-xs text-white/50 uppercase tracking-[0.15em] font-medium mt-1">
            {unit.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
