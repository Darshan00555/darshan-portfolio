import { Suspense, lazy, useEffect, useState } from 'react';

import About from './components/About';
import PortfolioFooter from './components/Footer';
import { NavBarDemo } from './components/NavBarDemo';
// Direct import
import { InfiniteLoopSlider } from './components/ui/InfiniteLoopSlider';
import KineticDotsLoader from './components/ui/KineticDotsLoader';
import Home from './pages/Home';

// Lazy load other non-critical sections
const Projects = lazy(() => import('./components/Projects'));
const Resume = lazy(() => import('./components/Resume'));

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
      <div id="Home">
        <Home />
      </div>

      <div id="About">
        <About />
      </div>

      <div id="Roles-Slider">
        <InfiniteLoopSlider />
      </div>

      <Suspense fallback={<div className="min-h-screen"></div>}>
        <div id="Projects">
          <Projects />
        </div>
        <div id="Resume">
          <Resume />
        </div>
      </Suspense>

      <PortfolioFooter />
    </>
  );
}

export default App;
