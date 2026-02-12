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
  // brandIcon,
  className,
  theme = 'light',
}) => {
  const footerRef = useRef(null);
  const brandTextRef = useRef(null);
  const logoRef = useRef(null);
  const socialRef = useRef(null);
  const navRef = useRef(null);

  // Theme-aware colors (Forced Dark for Portfolio Match)
  const bgColor = 'bg-zinc-950';
  const borderColor = 'border-white/10';
  const textColor = 'text-zinc-300';
  const mutedTextColor = 'text-zinc-500';
  const subtleTextColor = 'text-zinc-600';
  const iconBg = 'bg-white/5';
  const iconBorder = 'border-white/10';
  const iconColor = 'text-zinc-400';
  // const logoBg = 'bg-zinc-900/90';
  // const logoBorder = 'border-white/10';

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
      <div className="relative w-full px-4 py-6 sm:px-6 sm:py-8 md:py-10">
        {/* Content */}
        <div className="flex flex-col justify-between">
          <div className="mb-6 flex w-full flex-col sm:mb-8 md:mb-10">
            <div className="flex w-full flex-col items-center">
              <div
                ref={brandTextRef}
                className="mb-2 flex max-w-full flex-1 flex-col items-center space-y-2"
              >
                <p
                  className={`w-full max-w-xs px-2 text-center text-sm leading-relaxed font-normal ${textColor} sm:max-w-sm sm:text-base md:max-w-xl md:text-lg`}
                >
                  {brandDescription}
                </p>
              </div>

              {/* Social Links - FULLY CLICKABLE */}
              {socialLinks.length > 0 && (
                <div
                  ref={socialRef}
                  className="mt-4 mb-4 flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-5"
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
                      <div
                        className={`relative flex h-8 w-8 transform items-center justify-center rounded-full border-2 ${iconBorder} ${iconBg} transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110 group-hover:border-blue-400 sm:h-9 sm:w-9 md:h-10 md:w-10`}
                      >
                        {/* Glow effect behind */}
                        <div className="pointer-events-none absolute -inset-2 -z-10 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-50"></div>

                        <div
                          className={`h-3 w-3 ${iconColor} transition-colors duration-300 group-hover:text-blue-500 sm:h-4 sm:w-4 md:h-5 md:w-5`}
                        >
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
                      <span
                        className={`relative transition-colors duration-300 ${theme === 'dark' ? 'group-hover:text-white' : 'group-hover:text-black'}`}
                      >
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
          <div className="mt-6 flex flex-col items-center justify-center gap-2 text-xs sm:mt-8 sm:text-sm md:mt-10 md:flex-row md:items-center md:justify-between">
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
      </div>
    </footer>
  );
};
