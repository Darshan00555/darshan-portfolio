import ElegantCarousel from '../components/ui/elegant-carousel';
import FeaturesSection from '../components/ui/features-section';
import HeroSection from '../components/ui/glassmorphism-trust-hero';

import React, { Suspense } from 'react';

// Loading fallback
const HeroFallback = () => (
  <div className="flex h-screen w-screen items-center justify-center bg-zinc-950">
    <div className="flex gap-3">
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="h-3 w-3 animate-bounce rounded-full bg-white"
          style={{ animationDelay: `${i * 0.15}s` }}
        />
      ))}
    </div>
  </div>
);

const Home = () => {
  return (
    <Suspense fallback={<HeroFallback />}>
      <HeroSection />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20">
        <ElegantCarousel />
      </div>
      <div className="relative z-10 w-full py-20">
        <FeaturesSection />
      </div>
    </Suspense>
  );
};

export default Home;
