import React, { Suspense, useEffect, useState } from 'react';

import { NavBarDemo } from './components/NavBarDemo';
import KineticDotsLoader from './components/ui/KineticDotsLoader';
import Home from './pages/Home';

// Lazy load components
const About = React.lazy(() => import('./components/About'));
const Projects = React.lazy(() => import('./components/Projects'));
const Resume = React.lazy(() => import('./components/Resume'));
const Footer = React.lazy(() => import('./components/Footer'));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <KineticDotsLoader />;
  }

  return (
    <>
      <NavBarDemo />
      <Home />
      <Suspense fallback={<div className="min-h-screen"></div>}>
        <div id="About">
          <About />
        </div>
        <div id="Projects">
          <Projects />
        </div>
        <div id="Resume">
          <Resume />
        </div>
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
