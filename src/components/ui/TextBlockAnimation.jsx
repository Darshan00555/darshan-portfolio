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
  delay = 0, // Delay provided by props, careful not to let this act as a pre-scroll delay
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
        defaults: { ease: 'power3.inOut' },
        scrollTrigger: animateOnScroll
          ? {
              trigger: containerRef.current,
              // Trigger when the TOP of the element hits 60% down the viewport.
              // This ensures the element is well within the screen (past the middle) before triggering.
              start: 'top 60%',
              // play: when entering
              // reverse: when leaving (scrolling past it down? no, 'leave' means passing the 'end' point)
              // But here 'end' defaults to bottom of viewport usually.
              // 'play reverse play reverse' mapping:
              // onEnter, onLeave, onEnterBack, onLeaveBack
              toggleActions: 'play reverse play reverse',
            }
          : null,
        delay: delay,
      });

      // 4. Build the Animation Sequence (Linear for stability)
      tl.to(blocks, {
        scaleX: 1,
        duration: duration,
        stagger: stagger,
        transformOrigin: 'left center',
        ease: 'power3.inOut',
      })
        .set(lines, { opacity: 1 }) // Reveal text while hidden
        .to(blocks, {
          scaleX: 0,
          duration: duration,
          stagger: stagger,
          transformOrigin: 'right center',
          ease: 'power3.inOut',
        });
    },
    {
      scope: containerRef,
      dependencies: [animateOnScroll, delay, blockColor, stagger, duration],
    }
  );

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
