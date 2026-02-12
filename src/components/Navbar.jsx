import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'About', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/10 bg-zinc-950/80 py-4 backdrop-blur-md'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-tighter text-white">
          Darshan<span className="text-zinc-400">Dev</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-md md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 ${
                isActive(link.path)
                  ? 'bg-zinc-800 text-white shadow-lg'
                  : 'text-zinc-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Resume Button */}
        <div className="hidden md:block">
          <Link
            to="/resume"
            style={{ color: '#000000' }}
            className="rounded-full bg-white px-6 py-3 text-sm font-bold text-[#000000] shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-colors hover:bg-zinc-200 hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
          >
            Resume
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-white md:hidden">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full right-0 left-0 flex flex-col gap-4 border-b border-white/10 bg-zinc-950 p-6 shadow-2xl md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`border-b border-white/5 py-2 text-base font-medium ${
                isActive(link.path) ? 'text-white' : 'text-zinc-400'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-4 rounded-lg bg-white px-5 py-3 text-center font-bold text-black"
          >
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
