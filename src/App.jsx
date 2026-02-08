import React, { useEffect, useState } from 'react';

import { NavBarDemo } from './components/NavBarDemo';
import KineticDotsLoader from './components/ui/KineticDotsLoader';
import Home from './pages/Home';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <KineticDotsLoader />;
  }

  return (
    <>
      <NavBarDemo />
      <Home />
    </>
  );
}

export default App;
