import React, { Suspense, lazy } from 'react';

// Lazy load 3D hero for better performance
const Hero = lazy(() => import('../components/ui/void-hero').then(module => ({ default: module.Hero })));

// Loading fallback
const HeroFallback = () => (
  <div className="h-svh w-screen bg-[#f5f5f5] flex items-center justify-center">
    <div className="flex gap-3">
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="w-3 h-3 bg-black rounded-full animate-bounce"
          style={{ animationDelay: `${i * 0.15}s` }}
        />
      ))}
    </div>
  </div>
);

const Home = ({ theme = 'light' }) => {
  return (
    <Suspense fallback={<HeroFallback />}>
      <Hero 
        title="Darshan Dev - Full Stack Developer"
        description="Building modern web applications with cutting-edge technologies. Specialized in React, Node.js, and creating seamless user experiences that combine beautiful design with powerful functionality."
        theme={theme}
      />
    </Suspense>
  );
};

export default Home;
