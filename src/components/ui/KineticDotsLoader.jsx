import React from 'react';

import './KineticDotsLoader.css';

export default function KineticDotsLoader() {
  const dots = 4; // Increased to 4 for better rhythm

  return (
    <div className="fixed inset-0 z-[200] flex min-h-screen w-full items-center justify-center bg-black">
      <div className="flex gap-5">
        {[...Array(dots)].map((_, i) => (
          <div key={i} className="relative flex h-20 w-6 flex-col items-center justify-end">
            {/* 1. THE BOUNCING DOT */}
            <div
              className="relative z-10 h-5 w-5"
              style={{
                animation: 'gravity-bounce 1.4s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite',
                animationDelay: `${i * 0.15}s`,
                willChange: 'transform',
              }}
            >
              <div
                className="h-full w-full rounded-full bg-gradient-to-b from-cyan-300 to-blue-600 shadow-[0_0_15px_rgba(6,182,212,0.6)]"
                style={{
                  animation: 'rubber-morph 1.4s linear infinite',
                  animationDelay: `${i * 0.15}s`,
                  willChange: 'transform',
                }}
              />

              {/* Specular highlight for liquid look */}
              <div className="absolute top-1 left-1 h-1.5 w-1.5 rounded-full bg-white/60 blur-[0.5px]" />
            </div>

            {/* 2. FLOOR RIPPLE (Shockwave on impact) */}
            <div
              className="absolute bottom-0 h-3 w-10 rounded-[100%] border border-cyan-500/30 opacity-0"
              style={{
                animation: 'ripple-expand 1.4s linear infinite',
                animationDelay: `${i * 0.15}s`,
              }}
            />

            {/* 3. REFLECTIVE SHADOW */}
            <div
              className="absolute -bottom-1 h-1.5 w-5 rounded-[100%] bg-cyan-500/40 blur-sm"
              style={{
                animation: 'shadow-breathe 1.4s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite',
                animationDelay: `${i * 0.15}s`,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
