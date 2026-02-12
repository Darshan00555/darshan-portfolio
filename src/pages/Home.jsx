import '../components/ui/accordion-animations.css';
import { LandingAccordionItem } from '../components/ui/interactive-image-accordion';

import React, { Suspense } from 'react';

// Loading fallback
const HeroFallback = () => (
  <div className="flex h-screen w-screen items-center justify-center bg-white">
    <div className="flex gap-3">
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="h-3 w-3 animate-bounce rounded-full bg-black"
          style={{ animationDelay: `${i * 0.15}s` }}
        />
      ))}
    </div>
  </div>
);

const Home = ({ theme = 'light' }) => {
  return (
    <Suspense fallback={<HeroFallback />}>
      <LandingAccordionItem theme={theme} />
    </Suspense>
  );
};

export default Home;
