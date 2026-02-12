import React, { useState } from 'react';

import { Database, FileText, Palette, ShoppingCart, TrendingUp } from 'lucide-react';

const accordionItems = [
  {
    id: 1,
    title: 'MERN Stack',
    icon: Database,
    gradient: 'from-slate-700 via-slate-800 to-slate-900',
    hoverGradient: 'from-emerald-600 via-teal-700 to-cyan-800',
    shadowColor: 'shadow-emerald-500/30',
  },
  {
    id: 2,
    title: 'Shopify',
    icon: ShoppingCart,
    gradient: 'from-slate-700 via-slate-800 to-slate-900',
    hoverGradient: 'from-purple-600 via-violet-700 to-indigo-800',
    shadowColor: 'shadow-purple-500/30',
  },
  {
    id: 3,
    title: 'WordPress',
    icon: FileText,
    gradient: 'from-slate-700 via-slate-800 to-slate-900',
    hoverGradient: 'from-blue-600 via-sky-700 to-cyan-800',
    shadowColor: 'shadow-blue-500/30',
  },
  {
    id: 4,
    title: 'Framer',
    icon: Palette,
    gradient: 'from-slate-700 via-slate-800 to-slate-900',
    hoverGradient: 'from-pink-600 via-rose-700 to-red-800',
    shadowColor: 'shadow-pink-500/30',
  },
  {
    id: 5,
    title: 'SEO',
    icon: TrendingUp,
    gradient: 'from-slate-700 via-slate-800 to-slate-900',
    hoverGradient: 'from-orange-600 via-amber-700 to-yellow-800',
    shadowColor: 'shadow-orange-500/30',
  },
];

const AccordionItem = ({ item, isActive, onMouseEnter }) => {
  const Icon = item.icon;

  const handleHover = (e) => {
    e.stopPropagation();
    onMouseEnter();
  };

  return (
    <div
      className={`relative h-[400px] cursor-pointer overflow-hidden rounded-xl transition-all duration-500 ease-in-out select-none ${isActive ? 'w-[45%]' : 'w-[13%]'} ${isActive ? item.shadowColor + ' shadow-2xl' : 'shadow-lg'} `}
      onMouseEnter={handleHover}
      onTouchStart={handleHover}
      style={{
        transform: 'translateZ(0)',
        willChange: 'width',
      }}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${isActive ? item.hoverGradient : item.gradient} transition-all duration-500`}
      ></div>

      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '20px 20px',
        }}
      ></div>

      <div
        className={`pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
          isActive ? 'scale-100 opacity-100' : 'scale-75 opacity-70'
        }`}
      >
        <Icon size={isActive ? 64 : 32} className="text-white drop-shadow-lg" strokeWidth={1.5} />
      </div>

      <div
        className={`pointer-events-none absolute flex w-full items-center justify-center font-semibold text-white drop-shadow-md transition-all duration-500 ${
          isActive ? 'bottom-8 translate-y-0 opacity-100' : 'bottom-1/2 translate-y-1/2 opacity-0'
        } `}
      >
        <span className="text-2xl tracking-wide">{item.title}</span>
      </div>

      <span
        className={`pointer-events-none absolute font-medium whitespace-nowrap text-white transition-all duration-500 ${!isActive ? 'opacity-100' : 'opacity-0'} `}
        style={{
          left: '50%',
          bottom: '2rem',
          transform: 'translateX(-50%) rotate(-90deg)',
          fontSize: '0.9rem',
          letterSpacing: '1px',
        }}
      >
        {!isActive && item.title}
      </span>
    </div>
  );
};

export function LandingAccordionItem({ theme = 'light' }) {
  const [activeIndex, setActiveIndex] = useState(2);

  const handleItemHover = (index) => {
    setActiveIndex(index);
  };

  const bgColor =
    theme === 'dark'
      ? 'bg-gradient-to-br from-[#0A0A0A] via-[#1a1a1a] to-[#0A0A0A]'
      : 'bg-gradient-to-br from-gray-50 via-white to-gray-50';

  const textColor = theme === 'dark' ? 'text-white' : 'text-gray-900';
  const descColor = theme === 'dark' ? 'text-gray-400' : 'text-gray-600';

  return (
    // Added pt-28 to push content down below navbar
    <div
      className={`${bgColor} relative flex min-h-[calc(100vh-80px)] items-center overflow-hidden py-12 pt-32`}
    >
      {/* Background Orbs - Completely Non-Interactive */}
      <div className="pointer-events-none absolute top-20 left-10 h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[100px] select-none"></div>
      <div className="pointer-events-none absolute right-10 bottom-10 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[100px] select-none"></div>

      <section className="relative z-10 container mx-auto max-w-7xl px-4 lg:px-6">
        <div className="flex flex-col items-center justify-between gap-10 lg:flex-row lg:gap-16">
          {/* Text Content - Z-Index 0 */}
          <div className="pointer-events-none relative z-0 w-full space-y-5 text-center lg:w-[40%] lg:text-left">
            <h1
              className={`text-4xl font-bold md:text-5xl lg:text-6xl ${textColor} leading-tight`}
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Darshan Singh
            </h1>

            <h2
              className={`text-lg font-normal md:text-xl ${descColor}`}
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              (Darshan Dev)
            </h2>

            <div className="relative inline-block">
              <h3
                className={`text-2xl font-semibold md:text-3xl ${textColor}`}
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                MERN Stack Developer
              </h3>
              <div className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-gradient-to-r from-slate-600 to-slate-800"></div>
            </div>

            <p
              className={`text-base md:text-lg ${descColor} mx-auto max-w-lg leading-relaxed font-normal lg:mx-0`}
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Professional MERN Stack Developer specializing in{' '}
              <span className="font-bold text-emerald-700 dark:text-emerald-400">MongoDB</span>,{' '}
              <span className="font-extrabold" style={{ color: '#111827' }}>
                Express
              </span>
              , <span className="font-bold text-blue-700 dark:text-blue-400">React</span>, and{' '}
              <span className="font-bold text-green-700 dark:text-green-400">Node.js</span>. Expert
              in Shopify, WordPress, Wix, and Framer development.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-2 lg:justify-start">
              <a
                href="#contact"
                className="pointer-events-auto inline-flex items-center justify-center rounded-lg bg-slate-900 px-6 py-3 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                <span className="text-white">Contact Me</span>
                <span className="ml-2 text-white">→</span>
              </a>

              <a
                href="#Projects"
                className="pointer-events-auto inline-flex items-center justify-center rounded-lg px-6 py-3 text-base font-semibold transition-all duration-300 hover:scale-105"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  backgroundColor: '#ffffff',
                  color: '#111827',
                  border: '2px solid #111827',
                }}
              >
                <span>View Projects</span>
              </a>
            </div>
          </div>

          {/* Accordion - Z-Index 50 (Highest) */}
          <div className="pointer-events-auto relative z-50 h-[400px] w-full lg:w-[60%]">
            <div className="flex h-full w-full items-center justify-center gap-2">
              {accordionItems.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  isActive={index === activeIndex}
                  onMouseEnter={() => handleItemHover(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
