import { navigationLinks, siteConfig } from '../data/siteContent';

import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import {
  BookOpenText,
  BriefcaseBusiness,
  CircleDot,
  Download,
  House,
  Mail,
  Menu,
  Sparkles,
  UserRound,
  X,
} from 'lucide-react';

import ResumeModal from './ResumeModal';

const navIcons = {
  '/': House,
  '/projects': BriefcaseBusiness,
  '/blog': BookOpenText,
  '/about': UserRound,
  '/contact': Mail,
};

const menuTransition = {
  duration: 0.26,
  ease: [0.22, 1, 0.36, 1],
};

const MotionDiv = motion.div;

function getLinkClass(isActive) {
  return ['nav-pill', isActive ? 'nav-pill-active' : ''].join(' ');
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      <header className="sticky top-0 z-50 px-3 pt-2 sm:px-4 sm:pt-3">
        <div className="mx-auto max-w-7xl rounded-[1.5rem] border border-white/70 bg-[rgba(251,247,240,0.78)] px-4 py-2.5 shadow-[0_24px_60px_rgba(8,22,47,0.12)] backdrop-blur-xl sm:px-5 lg:px-6">
          <div className="flex items-center justify-between gap-3">
            <Link to="/" className="flex min-w-0 items-center gap-3">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#08162f,#143f96)] text-sm font-semibold tracking-[0.22em] text-white shadow-[0_16px_34px_rgba(20,63,150,0.26)] sm:h-11 sm:w-11">
                DS
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold tracking-[0.18em] text-[var(--color-accent)] uppercase">
                  {siteConfig.shortName}
                </p>
                <div className="flex items-center gap-2 text-sm text-[var(--color-muted)]">
                  <span className="truncate">Frontend + SEO delivery</span>
                  <span className="hidden items-center gap-1 rounded-full bg-[rgba(37,99,235,0.08)] px-2 py-1 text-[11px] font-semibold text-[var(--color-accent)] sm:inline-flex">
                    <CircleDot className="h-3.5 w-3.5" />
                    Available
                  </span>
                </div>
              </div>
            </Link>

            <nav className="nav-shell hidden items-center gap-1 rounded-full p-1.5 lg:flex">
              {navigationLinks.map((link) => {
                const Icon = navIcons[link.to];

                return (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={({ isActive }) => getLinkClass(isActive)}
                  >
                    <Icon className="h-4 w-4" />
                    {link.label}
                  </NavLink>
                );
              })}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <div className="dark-tile rounded-full px-3 py-2 text-sm font-semibold text-[var(--color-ink)]">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/[0.85] px-3 py-2 text-[var(--color-ink)]">
                  <Sparkles className="h-4 w-4 text-[var(--color-secondary)]" />
                  Premium UI + SEO
                </span>
              </div>
              <button type="button" onClick={() => setIsResumeOpen(true)} className="btn-secondary">
                <Download className="h-4 w-4" />
                Resume
              </button>
              <Link to="/contact" className="btn-primary">
                Let&apos;s Talk
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/70 bg-white/75 text-[var(--color-ink)] shadow-[0_12px_28px_rgba(8,22,47,0.08)] transition hover:border-[rgba(37,99,235,0.24)] lg:hidden"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          <AnimatePresence>
            {isMenuOpen ? (
              <MotionDiv
                initial={prefersReducedMotion ? false : { opacity: 0, y: -12 }}
                animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                exit={prefersReducedMotion ? {} : { opacity: 0, y: -10 }}
                transition={menuTransition}
                className="menu-surface mt-4 rounded-[1.5rem] p-3 lg:hidden"
              >
                <nav className="flex flex-col gap-2">
                  {navigationLinks.map((link) => {
                    const Icon = navIcons[link.to];

                    return (
                      <NavLink
                        key={link.to}
                        to={link.to}
                        onClick={() => setIsMenuOpen(false)}
                        className={({ isActive }) => getLinkClass(isActive)}
                      >
                        <Icon className="h-4 w-4" />
                        {link.label}
                      </NavLink>
                    );
                  })}
                  <button
                    type="button"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsResumeOpen(true);
                    }}
                    className="btn-secondary mt-2 w-full"
                  >
                    <Download className="h-4 w-4" />
                    Resume
                  </button>
                  <Link
                    to="/contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="btn-primary w-full"
                  >
                    Let&apos;s Talk
                  </Link>
                </nav>
              </MotionDiv>
            ) : null}
          </AnimatePresence>
        </div>
      </header>

      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </>
  );
}
