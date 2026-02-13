'use client';
import '../../index.css';

import React, { useCallback, useEffect, useRef, useState } from 'react';

import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    title: 'MERN Stack Excellence',
    subtitle: 'Modern Web Development',
    description:
      'Building scalable, high-performance applications with MongoDB, Express, React, and Node.js. Experience seamless full-stack integration.',
    accent: '#61DAFB', // React Blue
    imageUrl:
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=800&fit=crop&q=80', // React Logo/Code
  },
  {
    title: 'Shopify Solutions',
    subtitle: 'E-commerce Expert',
    description:
      'Custom Shopify themes and apps that drive sales. optimize your online store for speed, conversion, and user experience.',
    accent: '#96bf48', // Shopify Green
    imageUrl:
      'https://images.unsplash.com/photo-1556740758-90de374c12ad?w=1200&h=800&fit=crop&q=80', // Payment/Checkout - reliable
  },
  {
    title: 'CMS Mastery',
    subtitle: 'WordPress, Wix & Framer',
    description:
      'Empowering content creators with robust, user-friendly CMS solutions. From custom WordPress themes to stunning Framer sites.',
    accent: '#21759b', // WordPress Blue
    imageUrl:
      'https://images.unsplash.com/photo-1542744094-24638eff58bb?w=1200&h=800&fit=crop&q=80', // Web Design / CMS
  },
  {
    title: 'UI/UX Design',
    subtitle: 'Visual Aesthetics',
    description:
      'Creating intuitive and beautiful user interfaces. Focusing on user journey, accessibility, and modern design trends.',
    accent: '#ff6b6b', // Design Red/Pink
    imageUrl:
      'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=1200&h=800&fit=crop&q=80', // Abstract Design
  },
];

export default function ElegantCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);
  const progressRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const SLIDE_DURATION = 6000;
  const TRANSITION_DURATION = 800;

  const goToSlide = useCallback(
    (index) => {
      if (isTransitioning || index === currentIndex) return;
      setIsTransitioning(true);
      setProgress(0);

      setTimeout(() => {
        setCurrentIndex(index);
        setTimeout(() => {
          setIsTransitioning(false);
        }, 50);
      }, TRANSITION_DURATION / 2);
    },
    [isTransitioning, currentIndex]
  );

  const goNext = useCallback(() => {
    const nextIndex = (currentIndex + 1) % slides.length;
    goToSlide(nextIndex);
  }, [currentIndex, goToSlide]);

  const goPrev = useCallback(() => {
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    goToSlide(prevIndex);
  }, [currentIndex, goToSlide]);

  useEffect(() => {
    if (isPaused) return;

    progressRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + 100 / (SLIDE_DURATION / 50);
      });
    }, 50);

    intervalRef.current = setInterval(() => {
      goNext();
    }, SLIDE_DURATION);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [currentIndex, isPaused, goNext]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 60) {
      if (diff > 0) goNext();
      else goPrev();
    }
  };

  const currentSlide = slides[currentIndex];

  return (
    <div
      className="carousel-wrapper relative h-[600px] w-full overflow-hidden rounded-3xl bg-zinc-900 text-white shadow-2xl"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background accent wash */}
      <div
        className="carousel-bg-wash absolute inset-0 transition-all duration-1000 ease-in-out"
        style={{
          background: `radial-gradient(circle at 70% 50%, ${currentSlide.accent}22 0%, transparent 70%)`,
        }}
      />

      <div className="carousel-inner flex h-full items-center justify-between px-8 md:px-16">
        {/* Left: Text Content */}
        <div className="carousel-content relative z-10 w-full max-w-lg md:w-1/2">
          <div className="carousel-content-inner space-y-6">
            {/* Collection number */}
            <div
              className={`carousel-collection-num flex items-center gap-3 text-sm font-medium tracking-widest text-zinc-400 transition-all duration-500 ${isTransitioning ? 'translate-y-4 opacity-0' : 'translate-y-0 opacity-100'}`}
            >
              <span className="carousel-num-line h-px w-8 bg-zinc-600" />
              <span className="carousel-num-text">
                {String(currentIndex + 1).padStart(2, '0')} /{' '}
                {String(slides.length).padStart(2, '0')}
              </span>
            </div>

            {/* Text Content Container with fixed minimum height to prevent layout shifts */}
            <div className="flex min-h-[180px] flex-col justify-center">
              {/* Title */}
              <h2
                className={`carousel-title text-4xl font-light tracking-tight transition-all delay-100 duration-500 md:text-5xl lg:text-6xl ${isTransitioning ? 'translate-y-4 opacity-0' : 'translate-y-0 opacity-100'}`}
              >
                {currentSlide.title}
              </h2>

              {/* Subtitle */}
              <p
                className={`carousel-subtitle mt-2 text-lg font-medium transition-all delay-200 duration-500 ${isTransitioning ? 'translate-y-4 opacity-0' : 'translate-y-0 opacity-100'}`}
                style={{ color: currentSlide.accent }}
              >
                {currentSlide.subtitle}
              </p>

              {/* Description */}
              <p
                className={`carousel-description mt-4 max-w-md text-base leading-relaxed text-zinc-400 transition-all delay-300 duration-500 ${isTransitioning ? 'translate-y-4 opacity-0' : 'translate-y-0 opacity-100'}`}
              >
                {currentSlide.description}
              </p>
            </div>

            {/* Navigation Arrows */}
            <div className="carousel-nav-arrows flex gap-4 pt-4">
              <button
                onClick={goPrev}
                className="carousel-arrow-btn rounded-full bg-white/5 p-3 text-white transition-all hover:bg-white/10 active:scale-95"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={goNext}
                className="carousel-arrow-btn rounded-full bg-white/5 p-3 text-white transition-all hover:bg-white/10 active:scale-95"
                aria-label="Next slide"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Right: Image */}
        <div className="carousel-image-container relative hidden h-[450px] w-[350px] md:block lg:w-[450px]">
          <div
            className={`carousel-image-frame relative h-full w-full overflow-hidden rounded-2xl shadow-2xl transition-all duration-700 ease-out ${isTransitioning ? 'translate-x-8 scale-95 opacity-0' : 'translate-x-0 scale-100 opacity-100'}`}
          >
            <img
              src={currentSlide.imageUrl}
              alt={currentSlide.title}
              className="carousel-image h-full w-full object-cover transition-transform duration-[6000ms] ease-linear hover:scale-110"
              style={{ transform: isPaused ? 'scale(1.05)' : 'scale(1.0)' }}
            />
            <div
              className="carousel-image-overlay absolute inset-0 mix-blend-overlay"
              style={{
                background: `linear-gradient(135deg, ${currentSlide.accent}44 0%, transparent 50%)`,
              }}
            />
          </div>

          {/* Decorative frame corner */}
          <div
            className="carousel-frame-corner absolute -top-4 -left-4 h-16 w-16 border-t-2 border-l-2 opacity-50 transition-colors duration-500"
            style={{ borderColor: currentSlide.accent }}
          />
          <div
            className="carousel-frame-corner absolute -right-4 -bottom-4 h-16 w-16 border-r-2 border-b-2 opacity-50 transition-colors duration-500"
            style={{ borderColor: currentSlide.accent }}
          />
        </div>
      </div>

      {/* Progress Indicators */}
      <div className="carousel-progress-bar absolute right-0 bottom-8 left-0 flex justify-center gap-4 px-8">
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`carousel-progress-item group flex flex-col items-start gap-2 focus:outline-none`}
            aria-label={`Go to slide ${index + 1}`}
          >
            <div className="carousel-progress-track relative h-1 w-16 overflow-hidden rounded-full bg-white/10 transition-all hover:bg-white/20">
              <div
                className="carousel-progress-fill h-full rounded-full transition-all duration-100 ease-linear"
                style={{
                  width:
                    index === currentIndex ? `${progress}%` : index < currentIndex ? '100%' : '0%',
                  backgroundColor:
                    index === currentIndex
                      ? currentSlide.accent
                      : index < currentIndex
                        ? '#71717a'
                        : 'transparent',
                }}
              />
            </div>
            <span
              className={`carousel-progress-label text-xs font-medium transition-colors ${index === currentIndex ? 'text-white' : 'text-zinc-600 group-hover:text-zinc-400'}`}
            >
              {slide.subtitle}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
