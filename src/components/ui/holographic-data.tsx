import { useEffect, useRef } from 'react';

interface Reading {
  label: string;
  top: string;
  left: string;
  delay: number;
  mono?: boolean;
}

const SYMBOLS: Reading[] = [
  { label: '∫', top: '10%', left: '8%', delay: 0 },
  { label: '∑', top: '78%', left: '6%', delay: 0.4 },
  { label: 'π', top: '30%', left: '90%', delay: 0.8 },
  { label: '∇', top: '60%', left: '92%', delay: 1.2 },
  { label: '√', top: '48%', left: '3%', delay: 1.6 },
  { label: '∞', top: '15%', left: '55%', delay: 2 },
];

const EQUATIONS: Reading[] = [
  { label: 'E = mc²', top: '18%', left: '78%', delay: 0.2, mono: true },
  { label: 'F = ma', top: '68%', left: '82%', delay: 0.9, mono: true },
  { label: 'λ = h / p', top: '84%', left: '38%', delay: 1.4, mono: true },
  { label: '∇ · E = ρ / ε₀', top: '38%', left: '10%', delay: 1.9, mono: true },
  { label: '∇ × B = μ₀J', top: '8%', left: '34%', delay: 2.4, mono: true },
];

export function HolographicData() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cleanup: (() => void) | undefined;
    let cancelled = false;

    import('gsap').then(({ default: gsap }) => {
      if (cancelled || !containerRef.current) return;
      const nodes = containerRef.current.querySelectorAll<HTMLElement>('.holo-node');
      const tweens = Array.from(nodes).map((node, i) =>
        gsap.to(node, {
          opacity: 0.32,
          duration: 2.4,
          delay: i * 0.15,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
        }),
      );
      cleanup = () => tweens.forEach((tw) => tw.kill());
    });

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none" aria-hidden="true">
      {SYMBOLS.map((item, i) => (
        <span
          key={`sym-${i}`}
          className="holo-node absolute font-display text-2xl md:text-3xl text-primary opacity-0"
          style={{ top: item.top, left: item.left, textShadow: '0 0 12px rgba(0,212,255,0.6)' }}
        >
          {item.label}
        </span>
      ))}
      {EQUATIONS.map((item, i) => (
        <span
          key={`eq-${i}`}
          className="holo-node absolute font-mono text-[11px] md:text-xs tracking-widest text-secondary opacity-0 border border-secondary/20 rounded px-2 py-1 bg-secondary/[0.03] backdrop-blur-[1px]"
          style={{ top: item.top, left: item.left, textShadow: '0 0 10px rgba(167,139,250,0.55)' }}
        >
          {item.label}
        </span>
      ))}
    </div>
  );
}
