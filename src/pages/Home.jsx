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
    </Suspense>
  );
};

export default Home;
