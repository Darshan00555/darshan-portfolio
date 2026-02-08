'use client';

import { useGSAP } from '@gsap/react';

import { useRef } from 'react';
import React from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { cn } from '@/lib/utils';

// Ensure plugins are registered
gsap.registerPlugin(ScrollTrigger);

export default function TextBlockAnimation({
  children,
  animateOnScroll = true,
  delay = 0,
  blockColor = '#000',
  stagger = 0.1,
  duration = 0.6,
  className,
}) {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const lines = gsap.utils.toArray('.text-block-line', containerRef.current);
      const blocks = gsap.utils.toArray('.text-block-revealer', containerRef.current);

      // 3. Create the Master Timeline
      const tl = gsap.timeline({
        defaults: { ease: 'expo.inOut' },
        scrollTrigger: animateOnScroll
          ? {
              trigger: containerRef.current,
              start: 'top 70%', // Trigger when top of element hits 70% of viewport
              toggleActions: 'play none none reverse',
            }
          : null,
        delay: delay,
      });

      // 4. Build the Animation Sequence
      // Step A: Scale Block 0 -> 1 (Left to Right)
      tl.to(blocks, {
        scaleX: 1,
        duration: duration,
        stagger: stagger,
        transformOrigin: 'left center',
      })
        // Step B: Reveal Text (Instant)
        .set(
          lines,
          {
            opacity: 1,
            stagger: stagger,
          },
          `<${duration / 2}`
        )
        // Step C: Scale Block 1 -> 0 (Left to Right)
        .to(
          blocks,
          {
            scaleX: 0,
            duration: duration,
            stagger: stagger,
            transformOrigin: 'right center',
          },
          `<${duration * 0.4}`
        );
    },
    {
      scope: containerRef,
      dependencies: [animateOnScroll, delay, blockColor, stagger, duration],
    }
  );

  // Helper to wrap children if they are strings, or valid elements
  // We assume the user passes a list of <div>Line text</div> or similar
  // OR we can verify if children is a string and wrap it.
  // For simplicity with this strict animation requirement, we ask the user (or the consuming component)
  // to pass "lines" as direct children divs.

  return (
    <div ref={containerRef} className={cn('relative', className)}>
      {React.Children.map(children, (child, index) => (
        <div key={index} className="relative block overflow-hidden">
          <div className="text-block-line opacity-0">{child}</div>
          <div
            className="text-block-revealer absolute top-0 left-0 z-[2] h-full w-full origin-left scale-x-0"
            style={{ backgroundColor: blockColor }}
          />
        </div>
      ))}
    </div>
  );
}
