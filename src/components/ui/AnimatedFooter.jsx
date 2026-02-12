'use client';
import { useGSAP } from '@gsap/react';

import React, { useRef } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { cn } from '@/lib/utils';

gsap.registerPlugin(ScrollTrigger);

export const Footer = ({
  brandName = 'YourBrand',
  brandDescription = 'Your description here',
  socialLinks = [],
  navLinks = [],
  creatorName,
  creatorUrl,
  brandIcon,
  className,
  theme = 'light',
}) => {
  const footerRef = useRef(null);
  const brandTextRef = useRef(null);
  const logoRef = useRef(null);
  const socialRef = useRef(null);
  const navRef = useRef(null);

  // Theme-aware colors
  const bgColor = theme === 'dark' ? 'bg-black' : 'bg-gray-50';
  const borderColor = theme === 'dark' ? 'border-gray-800' : 'border-gray-200';
  const textColor = theme === 'dark' ? 'text-gray-300' : 'text-gray-700';
  const mutedTextColor = theme === 'dark' ? 'text-gray-400' : 'text-gray-600';
  const subtleTextColor = theme === 'dark' ? 'text-gray-500' : 'text-gray-500';
  const iconBg = theme === 'dark' ? 'bg-gray-900' : 'bg-white';
  const iconBorder = theme === 'dark' ? 'border-gray-700' : 'border-gray-300';
  const iconColor = theme === 'dark' ? 'text-gray-400' : 'text-gray-600';
  const logoBg = theme === 'dark' ? 'bg-black/90' : 'bg-white/90';
  const logoBorder = theme === 'dark' ? 'border-gray-800' : 'border-gray-300';

  useGSAP(
    () => {
      if (!footerRef.current) return;

      // Animate brand text on scroll
      gsap.fromTo(
        brandTextRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Logo appears INSTANTLY
      if (logoRef.current) {
        gsap.set(logoRef.current, { opacity: 1, scale: 1 });

        // Gentle floating
        gsap.to(logoRef.current, {
          y: -6,
          duration: 2,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
        });
      }

      // Stagger animate social links
      if (socialRef.current) {
        const socialIcons = socialRef.current.querySelectorAll('.social-icon');
        gsap.fromTo(
          socialIcons,
          { y: 15, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
            stagger: 0.06,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: footerRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Animate nav links
      if (navRef.current) {
        const navItems = navRef.current.querySelectorAll('.nav-link');
        gsap.fromTo(
          navItems,
          { y: 10, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.3,
            stagger: 0.05,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: footerRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    },
    { scope: footerRef }
  );

  return (
    <footer
      ref={footerRef}
      className={cn(`relative w-full border-t ${borderColor} ${bgColor}`, className)}
    >
      <div className="relative w-full px-4 py-8 sm:px-6 sm:py-10 md:py-12">
        {/* Content */}
        <div className="flex min-h-[22rem] flex-col justify-between sm:min-h-[26rem] md:min-h-[30rem]">
          <div className="mb-10 flex w-full flex-col sm:mb-14 md:mb-16">
            <div className="flex w-full flex-col items-center">
              <div
                ref={brandTextRef}
                className="mb-2 flex max-w-full flex-1 flex-col items-center space-y-2 sm:space-y-3"
              >
                <p className={`w-full max-w-xs px-2 text-center text-sm leading-relaxed font-normal ${textColor} sm:max-w-sm sm:text-base md:max-w-xl md:text-lg`}>
                  {brandDescription}
                </p>
              </div>

              {/* Social Links - FULLY CLICKABLE */}
              {socialLinks.length > 0 && (
                <div
                  ref={socialRef}
                  className="mt-6 mb-6 flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-5"
                >
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="social-icon group relative block cursor-pointer"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ zIndex: 100, pointerEvents: 'auto' }}
                    >
                      {/* Icon container - CLICKABLE */}
                      <div className={`relative flex h-9 w-9 transform items-center justify-center rounded-full border-2 ${iconBorder} ${iconBg} transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110 group-hover:border-blue-400 sm:h-10 sm:w-10 md:h-12 md:w-12`}>
                        {/* Glow effect behind */}
                        <div className="pointer-events-none absolute -inset-2 -z-10 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-50"></div>

                        <div className={`h-4 w-4 ${iconColor} transition-colors duration-300 group-hover:text-blue-500 sm:h-5 sm:w-5 md:h-6 md:w-6`}>
                          {link.icon}
                        </div>
                      </div>

                      <span className="sr-only">{link.label}</span>
                    </a>
                  ))}
                </div>
              )}

              {/* Nav Links - FULLY CLICKABLE */}
              {navLinks.length > 0 && (
                <div
                  ref={navRef}
                  className={`flex flex-wrap justify-center gap-4 text-xs font-medium ${mutedTextColor} sm:gap-6 sm:text-sm md:gap-8 md:text-base`}
                >
                  {navLinks.map((link, index) => (
                    <a
                      key={index}
                      className="nav-link group relative inline-block cursor-pointer py-1"
                      href={link.href}
                      style={{ zIndex: 100, pointerEvents: 'auto' }}
                    >
                      <span className={`relative transition-colors duration-300 ${theme === 'dark' ? 'group-hover:text-white' : 'group-hover:text-black'}`}>
                        {link.label}
                      </span>
                      {/* Underline effect */}
                      <span className="pointer-events-none absolute -bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 transition-all duration-400 ease-out group-hover:w-full"></span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-12 flex flex-col items-center justify-center gap-2 text-xs sm:mt-16 sm:text-sm md:mt-20 md:flex-row md:items-center md:justify-between">
            <p className={`text-center ${subtleTextColor} md:text-left`}>
              ©{new Date().getFullYear()} {brandName}. All rights reserved.
            </p>
            {creatorName && creatorUrl && (
              <a
                href={creatorUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`cursor-pointer ${subtleTextColor} transition-all duration-300 ${theme === 'dark' ? 'hover:text-white' : 'hover:text-black'} hover:font-medium`}
                style={{ zIndex: 100, pointerEvents: 'auto' }}
              >
                Crafted by {creatorName}
              </a>
            )}
          </div>
        </div>

        {/* Large background text */}
        <div
          className="pointer-events-none absolute bottom-28 left-1/2 w-full -translate-x-1/2 text-center font-extrabold tracking-tighter select-none sm:bottom-32 md:bottom-36"
          style={{
            fontSize: 'clamp(2rem, 8vw, 6rem)',
            background: theme === 'dark'
              ? 'linear-gradient(to bottom, rgba(255,255,255,0.12), rgba(168,85,247,0.12), rgba(168,85,247,0.06))'
              : 'linear-gradient(to bottom, rgba(0,0,0,0.08), rgba(168,85,247,0.08), rgba(168,85,247,0.04))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            zIndex: 1,
          }}
        >
          {brandName.toUpperCase()}
        </div>

        {/* Bottom logo - INSTANT, CLICKABLE */}
        <div
          ref={logoRef}
          className={`absolute bottom-16 left-1/2 -translate-x-1/2 cursor-pointer rounded-2xl border-2 ${logoBorder} ${logoBg} p-2 shadow-2xl backdrop-blur-md transition-all duration-500 hover:border-blue-400 hover:shadow-blue-500/40 sm:bottom-18 sm:rounded-3xl sm:p-3 md:bottom-20`}
          style={{ zIndex: 100, pointerEvents: 'auto' }}
        >
          {/* Glow behind */}
          <div className="pointer-events-none absolute -inset-2 -z-10 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 blur-xl transition-opacity duration-500 hover:opacity-40 sm:-inset-3 sm:rounded-3xl"></div>

          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 shadow-lg transition-transform duration-500 hover:scale-105 sm:h-14 sm:w-14 sm:rounded-2xl md:h-20 md:w-20">
            {brandIcon}
          </div>
        </div>

        {/* Bottom line */}
        <div
          className={`pointer-events-none absolute right-0 bottom-24 left-0 h-px bg-gradient-to-r from-transparent ${theme === 'dark' ? 'via-blue-500/20' : 'via-blue-500/30'} to-transparent sm:bottom-26 md:bottom-28`}
          style={{ zIndex: 1 }}
        ></div>

        {/* Bottom shadow */}
        <div
          className={`pointer-events-none absolute right-0 bottom-20 left-0 h-16 bg-gradient-to-t ${theme === 'dark' ? 'from-black via-black/90 to-black/40' : 'from-gray-50 via-gray-50/90 to-gray-50/40'} sm:bottom-22 sm:h-20 md:bottom-24`}
          style={{ zIndex: 1 }}
        ></div>
      </div>
    </footer>
  );
};
