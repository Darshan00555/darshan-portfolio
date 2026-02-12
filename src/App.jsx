import { Suspense, lazy, useEffect, useState } from 'react';

import PortfolioFooter from './components/Footer';
import { NavBarDemo } from './components/NavBarDemo';
import KineticDotsLoader from './components/ui/KineticDotsLoader';
import Home from './pages/Home';

// Lazy load other non-critical sections
const Projects = lazy(() => import('./components/Projects'));
const Resume = lazy(() => import('./components/Resume'));

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState('light'); // Default to light theme

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  if (isLoading) {
    return <KineticDotsLoader theme={theme} />;
  }

  return (
    <>
      <NavBarDemo theme={theme} onThemeToggle={toggleTheme} />
      <div id="Home">
        <Home theme={theme} />
      </div>

      <Suspense fallback={<div className="min-h-screen"></div>}>
        <div id="Projects">
          <Projects theme={theme} />
        </div>
        <div id="Resume">
          <Resume theme={theme} />
        </div>
      </Suspense>

      <PortfolioFooter theme={theme} />
    </>
  );
}

export default App;
