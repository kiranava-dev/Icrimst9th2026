import { Navbar } from '@/components/layout/navbar';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Dates } from '@/components/sections/dates';
import { Topics } from '@/components/sections/topics';
import { Registration } from '@/components/sections/registration';
import { Committee } from '@/components/sections/committee';
import { Footer } from '@/components/layout/footer';
import { BackgroundEffects } from '@/components/ui/background-effects';
import { MouseSpotlight } from '@/components/ui/mouse-spotlight';
import { LoadingScreen } from '@/components/ui/loading-screen';
import { ScrollProgress } from '@/components/ui/scroll-progress';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    // Safety net: ensure scroll is always restored even if the
    // LoadingScreen's onAnimationComplete callback doesn't fire.
    const safety = setTimeout(() => {
      document.body.style.overflow = 'auto';
    }, 2200);
    return () => clearTimeout(safety);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-white relative">
      <LoadingScreen />
      <BackgroundEffects />
      <MouseSpotlight />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Dates />
        <Topics />
        <Registration />
        <Committee />
      </main>
      <Footer />
    </div>
  );
}
