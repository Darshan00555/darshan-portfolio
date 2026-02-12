import React from 'react';

import { ArrowRight, Crown, Play, Star, Target } from 'lucide-react';

import { BeamsBackground } from './beams-background';

// --- BRAND ICONS (Custom SVGs for accuracy) ---
const BrandIcon = ({ path, viewBox = '0 0 24 24' }) => (
  <svg
    viewBox={viewBox}
    className="h-8 w-8 fill-current text-white"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d={path} />
  </svg>
);

const TECH_STACK = [
  {
    name: 'React',
    // React Logo
    icon: () => (
      <BrandIcon
        viewBox="0 0 24 24"
        path="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
      />
    ),
  },
  {
    name: 'Node.js',
    // Node.js Hexagon
    icon: () => (
      <BrandIcon
        viewBox="0 0 24 24"
        path="M12 2L4 6.5V17.5L12 22L20 17.5V6.5L12 2ZM12 4.5L17.5 7.5V16.5L12 19.5L6.5 16.5V7.5L12 4.5Z"
      />
    ),
  },
  {
    name: 'MongoDB',
    // Leaf shape
    icon: () => (
      <BrandIcon
        viewBox="0 0 24 24"
        path="M12 22C12 22 20 18 20 12C20 6 12 2 12 2C12 2 4 6 4 12C4 18 12 22 12 22ZM12 18C12 18 14 16 14 12C14 8 12 6 12 6C12 6 10 8 10 12C10 16 12 18 12 18Z"
      />
    ),
  },
  {
    name: 'Express',
    // Simple E/X representation or Terminal
    icon: () => (
      <BrandIcon viewBox="0 0 24 24" path="M4 17L9 12L4 7H6L11 12L6 17H4ZM12 15H20V17H12V15Z" />
    ),
  },
  {
    name: 'Git',
    // Git Branch
    icon: () => (
      <BrandIcon
        viewBox="0 0 24 24"
        path="M6 3V15C6 15.55 6.45 16 7 16H10C10.55 16 11 15.55 11 15V9C11 8.45 11.45 8 12 8H15C15.55 8 16 8.45 16 9V12M18 13.5L16 11.5L14 13.5M6 19.5C6 20.33 6.67 21 7.5 21C8.33 21 9 20.33 9 19.5C9 18.67 8.33 18 7.5 18C6.67 18 6 18.67 6 19.5ZM18 13.5C18 14.33 17.33 15 16.5 15C15.67 15 15 14.33 15 13.5C15 12.67 15.67 12 16.5 12C17.33 12 18 12.67 18 13.5Z"
      />
    ),
  },
  {
    name: 'WordPress',
    // W shape
    icon: () => (
      <BrandIcon
        viewBox="0 0 24 24"
        path="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM3.7 12.9L6 19.2C4.5 17.3 3.5 14.9 3.5 12.3C3.5 11.9 3.5 11.6 3.6 11.2L3.7 12.9ZM12 16L14.2 9H13L11.5 14L10 9H8.8L11 16H12ZM16.2 16L18.4 9.8L18.5 12.9C18.6 13.3 18.6 13.6 18.6 14C18.6 16.6 17.6 19 16.1 20.9L13.8 14.6L16.2 16Z"
      />
    ),
  },
  {
    name: 'Shopify',
    // Bag/S shape
    icon: () => (
      <BrandIcon
        viewBox="0 0 24 24"
        path="M4 8L6 20H18L20 8M8 8V6C8 4 10 2 12 2C14 2 16 4 16 6V8M9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12"
      />
    ),
  },
  {
    name: 'Framer',
    // F frame shape
    icon: () => <BrandIcon viewBox="0 0 24 24" path="M5 2H19V8H12V15H19V22L5 8V2Z" />,
  },
  {
    name: 'Wix',
    // W shape (simplified)
    icon: () => (
      <BrandIcon
        viewBox="0 0 24 24"
        path="M3 5H5L8 16L11 5H13L16 16L19 5H21L17 20H15L12 9L9 20H7L3 5Z"
      />
    ),
  },
];

// --- SUB-COMPONENTS ---
const StatItem = ({ value, label }) => (
  <div className="flex cursor-default flex-col items-center justify-center transition-transform hover:-translate-y-1">
    <span className="text-xl font-bold text-white sm:text-2xl">{value}</span>
    <span className="text-[10px] font-medium tracking-wider text-zinc-500 uppercase sm:text-xs">
      {label}
    </span>
  </div>
);

// --- MAIN COMPONENT ---
export default function HeroSection() {
  return (
    <BeamsBackground className="min-h-screen font-sans">
      {/* 
        SCOPED ANIMATIONS 
      */}
      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-fade-in {
          animation: fadeSlideIn 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-marquee {
          animation: marquee 40s linear infinite; /* Slower for readability */
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
      `}</style>

      {/* No Static Image - BeamsBackground handles visuals */}

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-24 pb-12 sm:px-6 md:pt-28 md:pb-20 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-8">
          {/* --- LEFT COLUMN --- */}
          <div className="flex flex-col justify-center space-y-8 pt-8 text-left lg:col-span-7">
            {/* Badge */}
            <div className="animate-fade-in delay-100">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-md transition-colors hover:bg-white/10">
                <span className="flex items-center gap-2 text-[10px] font-semibold tracking-wider text-zinc-300 uppercase sm:text-xs">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                  </span>
                  Available for Work
                </span>
              </div>
            </div>

            {/* Heading - Adjusted for responsiveness to keep name together */}
            <h1
              className="animate-fade-in leading-[0.9] font-medium tracking-tighter delay-200"
              style={{
                fontSize: 'clamp(3rem, 5vw, 6rem)', // Dynamic sizing to prevent wrapping
                maskImage: 'linear-gradient(180deg, black 0%, black 80%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(180deg, black 0%, black 80%, transparent 100%)',
              }}
            >
              Darshan
              <br />
              <span className="block bg-gradient-to-br from-white via-white to-[#ffcd75] bg-clip-text text-transparent md:inline-block">
                Singh
              </span>
              <span className="mt-4 block text-2xl font-normal tracking-wide text-zinc-400 sm:text-3xl lg:text-4xl">
                (Darshan Dev)
              </span>
            </h1>

            {/* Description */}
            <p className="animate-fade-in max-w-xl text-lg leading-relaxed text-zinc-400 delay-300">
              Professional <strong className="text-white">MERN Stack Developer</strong> specializing
              in MongoDB, Express, React, and Node.js. Review my skills in{' '}
              <span className="text-zinc-200">WordPress, Shopify, Wix, Framer, and Git</span>.
            </p>

            {/* CTA Buttons - Fixed visibility */}
            <div className="animate-fade-in flex flex-col gap-4 delay-400 sm:flex-row">
              <a
                href="#Projects"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white hover:text-zinc-950 active:scale-[0.98]"
              >
                View Projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                style={{ color: '#000000' }}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-[#000000] shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] active:scale-[0.98]"
              >
                Contact Me
                <ArrowRight
                  className="h-4 w-4 text-[#000000] transition-transform group-hover:translate-x-1"
                  style={{ color: '#000000' }}
                />
              </a>
            </div>
          </div>

          {/* --- RIGHT COLUMN --- */}
          <div className="space-y-6 lg:col-span-5 lg:mt-12">
            {/* Stats Card */}
            <div className="animate-fade-in relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl delay-500">
              {/* Card Glow Effect */}
              <div className="pointer-events-none absolute top-0 right-0 -mt-16 -mr-16 h-64 w-64 rounded-full bg-white/5 blur-3xl" />

              <div className="relative z-10">
                <div className="mb-8 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold tracking-tight text-white">100+</div>
                    <div className="text-sm text-zinc-400">Projects Delivered</div>
                  </div>
                </div>

                {/* Progress Bar Section */}
                <div className="mb-8 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-400">Client Satisfaction</span>
                    <span className="font-medium text-white">99%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-800/50">
                    <div className="h-full w-[99%] rounded-full bg-gradient-to-r from-white to-zinc-400" />
                  </div>
                </div>

                <div className="mb-6 h-px w-full bg-white/10" />

                {/* Mini Stats Grid */}
                <div className="grid grid-cols-3 gap-4 text-center">
                  <StatItem value="4+" label="Years" />
                  <div className="mx-auto h-full w-px bg-white/10" />
                  <StatItem value="24/7" label="Support" />
                  <div className="mx-auto h-full w-px bg-white/10" />
                  <StatItem value="100%" label="Success" />
                </div>

                {/* Tag Pills */}
                <div className="mt-8 flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium tracking-wide text-zinc-300">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                    </span>
                    AVAILABLE
                  </div>
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium tracking-wide text-zinc-300">
                    <Crown className="h-3 w-3 text-yellow-500" />
                    EXPERT
                  </div>
                </div>
              </div>
            </div>

            {/* Marquee Card */}
            <div className="animate-fade-in relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 py-8 backdrop-blur-xl delay-500">
              <h3 className="mb-6 px-8 text-sm font-medium text-zinc-400">Technologies I Use</h3>

              <div
                className="relative flex overflow-hidden"
                style={{
                  maskImage:
                    'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
                  WebkitMaskImage:
                    'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
                }}
              >
                <div className="animate-marquee flex gap-12 px-4 whitespace-nowrap">
                  {/* Triple list for seamless loop */}
                  {[...TECH_STACK, ...TECH_STACK, ...TECH_STACK].map((tech, i) => (
                    <div
                      key={i}
                      className="group flex cursor-default items-center gap-3 opacity-60 transition-all hover:scale-105 hover:opacity-100"
                    >
                      {/* Tech Icon */}
                      <tech.icon />
                      {/* Tech Name */}
                      <span className="text-lg font-bold tracking-tight text-white transition-colors group-hover:text-amber-300">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BeamsBackground>
  );
}
