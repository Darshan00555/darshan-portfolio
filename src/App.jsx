import React from 'react';
import { Route, Routes } from 'react-router-dom';

import PortfolioFooter from './components/Footer';
// Removed BrowserRouter import
import Navbar from './components/Navbar';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';

// Lazy loaded components for better performance
// const Timeline = lazy(() => import('./components/Timeline'));

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-950 font-sans text-white selection:bg-cyan-500/30">
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <PortfolioFooter />
    </div>
  );
}

export default App;
