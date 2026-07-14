import { useState, useEffect } from 'react';
import logo from '@/assets/icrimst-logo.png';
import { Magnetic } from '@/components/ui/magnetic-button';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-background/60 backdrop-blur-xl border-b border-white/10 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.3)]' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo({top:0, behavior:'smooth'})}>
          <img src={logo} alt="ICRIMST Logo" className="w-10 h-10 object-contain filter brightness-200 group-hover:scale-110 transition-transform duration-300" />
          <span className="font-display font-bold text-xl tracking-tight text-white group-hover:text-primary transition-colors">ICRIMST <span className="text-gradient">2026</span></span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
          {['About', 'Dates', 'Topics', 'Registration', 'Committee', 'Contact'].map(item => (
            <button 
              key={item}
              onClick={() => scrollTo(item.toLowerCase())} 
              className="relative hover:text-white transition-colors py-2 group cursor-pointer"
            >
              {item}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full rounded-full" />
            </button>
          ))}
        </div>

        <Magnetic>
          <a 
            href="https://forms.gle/ZxcrQ84kKKb7Yh5q6"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex px-6 py-2.5 rounded-full bg-white/10 text-white border border-white/20 hover:bg-white hover:text-background hover:scale-105 transition-all font-medium text-sm backdrop-blur-md shadow-lg"
          >
            Register Now
          </a>
        </Magnetic>
      </div>
    </nav>
  );
}
