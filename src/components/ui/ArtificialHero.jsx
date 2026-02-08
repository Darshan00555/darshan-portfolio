import React, { useEffect, useRef } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Briefcase, FileText, Home, Phone, User, Zap } from 'lucide-react';

import './ArtificialHero.css';

export const ArtificialHero = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const grainCanvasRef = useRef(null);
  const frameRef = useRef(0);
  const scrollProgressRef = useRef(0);

  const timeRef = useRef(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const canvas = canvasRef.current;
    const grainCanvas = grainCanvasRef.current;
    const ctx = canvas.getContext('2d');
    const grainCtx = grainCanvas.getContext('2d');

    const density = ' .:-=+*#%@';

    const params = {
      rotation: 0,
      atmosphereShift: 0,
      glitchIntensity: 0,
      glitchFrequency: 0,
    };

    gsap.to(params, {
      rotation: Math.PI * 2,
      duration: 20,
      repeat: -1,
      ease: 'none',
    });

    gsap.to(params, {
      atmosphereShift: 1,
      duration: 6,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    // Glitch animation
    gsap.to(params, {
      glitchIntensity: 1,
      duration: 0.1,
      repeat: -1,
      yoyo: true,
      ease: 'power2.inOut',
      repeatDelay: Math.random() * 3 + 1,
    });

    gsap.to(params, {
      glitchFrequency: 1,
      duration: 0.05,
      repeat: -1,
      yoyo: true,
      ease: 'none',
    });

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      end: 'bottom top',
      scrub: 1,
      onUpdate: (self) => {
        scrollProgressRef.current = self.progress;
      },
    });

    // Film grain generation
    const generateFilmGrain = (width, height, intensity = 0.15) => {
      const imageData = grainCtx.createImageData(width, height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const grain = (Math.random() - 0.5) * intensity * 255;
        data[i] = Math.max(0, Math.min(255, 128 + grain));
        data[i + 1] = Math.max(0, Math.min(255, 128 + grain));
        data[i + 2] = Math.max(0, Math.min(255, 128 + grain));
        data[i + 3] = Math.abs(grain) * 3;
      }

      return imageData;
    };

    // Glitch effect functions
    const drawGlitchedOrb = (centerX, centerY, radius, hue, time, glitchIntensity) => {
      // Save the current state
      ctx.save();

      // Random glitch triggers
      const shouldGlitch = Math.random() < 0.1 && glitchIntensity > 0.5;
      const glitchOffset = shouldGlitch ? (Math.random() - 0.5) * 20 * glitchIntensity : 0;
      const glitchScale = shouldGlitch ? 1 + (Math.random() - 0.5) * 0.3 * glitchIntensity : 1;

      // Apply glitch transformations
      if (shouldGlitch) {
        ctx.translate(glitchOffset, glitchOffset * 0.8);
        ctx.scale(glitchScale, 1 / glitchScale);
      }

      // Main orb gradient
      const orbGradient = ctx.createRadialGradient(
        centerX,
        centerY,
        0,
        centerX,
        centerY,
        radius * 1.5
      );

      orbGradient.addColorStop(0, `hsla(${hue + 10}, 100%, 95%, 0.9)`);
      orbGradient.addColorStop(0.2, `hsla(${hue + 20}, 90%, 80%, 0.7)`);
      orbGradient.addColorStop(0.5, `hsla(${hue}, 70%, 50%, 0.4)`);
      orbGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = orbGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Bright center circle with glitch
      const centerRadius = radius * 0.3;
      ctx.fillStyle = `hsla(${hue + 20}, 100%, 95%, 0.8)`;
      ctx.beginPath();
      ctx.arc(centerX, centerY, centerRadius, 0, Math.PI * 2);
      ctx.fill();

      // Glitch effects on the orb
      if (shouldGlitch) {
        // RGB separation effect
        ctx.globalCompositeOperation = 'screen';

        // Red channel offset
        ctx.fillStyle = `hsla(100, 100%, 50%, ${0.6 * glitchIntensity})`;
        ctx.beginPath();
        ctx.arc(centerX + glitchOffset * 0.5, centerY, centerRadius, 0, Math.PI * 2);
        ctx.fill();

        // Blue channel offset
        ctx.fillStyle = `hsla(240, 100%, 50%, ${0.5 * glitchIntensity})`;
        ctx.beginPath();
        ctx.arc(centerX - glitchOffset * 0.5, centerY, centerRadius, 0, Math.PI * 2);
        ctx.fill();

        ctx.globalCompositeOperation = 'source-over';

        // Digital noise lines
        ctx.strokeStyle = `rgba(255, 255, 255, ${0.6 * glitchIntensity})`;
        ctx.lineWidth = 1;
        for (let i = 0; i < 5; i++) {
          const y = centerY - radius + Math.random() * radius * 2;
          const startX = centerX - radius + Math.random() * 20;
          const endX = centerX + radius - Math.random() * 20;

          ctx.beginPath();
          ctx.moveTo(startX, y);
          ctx.lineTo(endX, y);
          ctx.stroke();
        }

        // Pixelated corruption blocks
        ctx.fillStyle = `rgba(255, 0, 255, ${0.4 * glitchIntensity})`;
        for (let i = 0; i < 3; i++) {
          const blockX = centerX - radius + Math.random() * radius * 2;
          const blockY = centerY - radius + Math.random() * radius * 2;
          const blockSize = Math.random() * 10 + 2;
          ctx.fillRect(blockX, blockY, blockSize, blockSize);
        }
      }

      // Outer ring with glitch distortion
      ctx.strokeStyle = `hsla(${hue + 20}, 80%, 70%, 0.6)`;
      ctx.lineWidth = 2;

      if (shouldGlitch) {
        // Distorted ring segments
        const segments = 8;
        for (let i = 0; i < segments; i++) {
          const startAngle = (i / segments) * Math.PI * 2;
          const endAngle = ((i + 1) / segments) * Math.PI * 2;
          const ringRadius = radius * 1.2 + (Math.random() - 0.5) * 10 * glitchIntensity;

          ctx.beginPath();
          ctx.arc(centerX, centerY, ringRadius, startAngle, endAngle);
          ctx.stroke();
        }
      } else {
        // Normal ring
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius * 1.2, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Data corruption effect
      if (shouldGlitch && Math.random() < 0.3) {
        ctx.globalCompositeOperation = 'difference';
        ctx.fillStyle = `rgba(255, 255, 255, ${0.8 * glitchIntensity})`;

        // Horizontal glitch bars
        for (let i = 0; i < 3; i++) {
          const barY = centerY - radius + Math.random() * radius * 2;
          const barHeight = Math.random() * 5 + 1;
          ctx.fillRect(centerX - radius, barY, radius * 2, barHeight);
        }

        ctx.globalCompositeOperation = 'source-over';
      }

      // Restore the context
      ctx.restore();
    };

    function render() {
      timeRef.current += 0.016;
      const time = timeRef.current;

      const width = (canvas.width = grainCanvas.width = window.innerWidth);
      const height = (canvas.height = grainCanvas.height = window.innerHeight);

      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height * 0.4; // Moved up to reduce gap with navbar
      const radius = Math.min(width, height) * 0.2;

      // Atmospheric background
      const bgGradient = ctx.createRadialGradient(
        centerX,
        centerY - 50,
        0,
        centerX,
        centerY,
        Math.max(width, height) * 0.8
      );

      const hue = 180 + params.atmosphereShift * 60;
      bgGradient.addColorStop(0, `hsla(${hue + 40}, 80%, 60%, 0.4)`);
      bgGradient.addColorStop(0.3, `hsla(${hue}, 60%, 40%, 0.3)`);
      bgGradient.addColorStop(0.6, `hsla(${hue - 20}, 40%, 20%, 0.2)`);
      bgGradient.addColorStop(1, 'rgba(0, 0, 0, 0.9)');

      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, width, height);

      // Draw glitched orb
      drawGlitchedOrb(centerX, centerY, radius, hue, time, params.glitchIntensity);

      // ASCII sphere particles
      ctx.font = '10px "JetBrains Mono", monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      const spacing = 9;
      const cols = Math.floor(width / spacing);
      const rows = Math.floor(height / spacing);

      for (let i = 0; i < cols && i < 150; i++) {
        for (let j = 0; j < rows && j < 100; j++) {
          const x = (i - cols / 2) * spacing + centerX;
          const y = (j - rows / 2) * spacing + centerY;

          const dx = x - centerX;
          const dy = y - centerY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < radius && Math.random() > 0.4) {
            const z = Math.sqrt(Math.max(0, radius * radius - dx * dx - dy * dy));
            const angle = params.rotation;
            const rotZ = dx * Math.sin(angle) + z * Math.cos(angle);
            const brightness = (rotZ + radius) / (radius * 2);

            if (rotZ > -radius * 0.3) {
              const charIndex = Math.floor(brightness * (density.length - 1));
              let char = density[charIndex];

              // Glitch the ASCII characters near the orb
              if (dist < radius * 0.8 && params.glitchIntensity > 0.8 && Math.random() < 0.3) {
                const glitchChars = ['█', '▓', '▒', '░', '▄', '▀', '■', '□'];
                char = glitchChars[Math.floor(Math.random() * glitchChars.length)];
              }

              const alpha = Math.max(0.2, brightness);
              ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
              ctx.fillText(char, x, y);
            }
          }
        }
      }

      // Generate and render film grain
      grainCtx.clearRect(0, 0, width, height);
      const grainIntensity = 0.22 + Math.sin(time * 10) * 0.03;
      const grainImageData = generateFilmGrain(width, height, grainIntensity);
      grainCtx.putImageData(grainImageData, 0, 0);

      // Enhanced grain during glitch
      if (params.glitchIntensity > 0.5) {
        grainCtx.globalCompositeOperation = 'screen';
        for (let i = 0; i < 200; i++) {
          const x = Math.random() * width;
          const y = Math.random() * height;
          const size = Math.random() * 3 + 0.5;
          const opacity = Math.random() * 0.5 * params.glitchIntensity;

          grainCtx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
          grainCtx.beginPath();
          grainCtx.arc(x, y, size, 0, Math.PI * 2);
          grainCtx.fill();
        }
      }

      grainCtx.globalCompositeOperation = 'screen';
      for (let i = 0; i < 100; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const size = Math.random() * 2 + 0.5;
        const opacity = Math.random() * 0.3;

        grainCtx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        grainCtx.beginPath();
        grainCtx.arc(x, y, size, 0, Math.PI * 2);
        grainCtx.fill();
      }

      grainCtx.globalCompositeOperation = 'multiply';
      for (let i = 0; i < 50; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const size = Math.random() * 1.5 + 0.5;
        const opacity = Math.random() * 0.5 + 0.5;

        grainCtx.fillStyle = `rgba(0, 0, 0, ${opacity})`;
        grainCtx.beginPath();
        grainCtx.arc(x, y, size, 0, Math.PI * 2);
        grainCtx.fill();
      }

      frameRef.current = requestAnimationFrame(render);
    }

    render();

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="artificial-hero-container"
      style={{ width: '100%', height: '100vh', background: '#000', position: 'relative' }}
    >
      {/* Large text*/}
      <div className="hero-title-container">
        <div className="hero-title">
          <span className="hero-word-primary">DARSHAN</span>
          <span className="hero-word-secondary">SINGH</span>
        </div>
      </div>

      {/* Left side text */}
      <div className="hero-info-left">
        <div className="hero-info-text">
          Darshan Singh
          <br />
          Frontend Developer
          <br />
          & UI Designer
          <br />
          <br />
        </div>
      </div>

      {/* Right side text */}
      <div className="hero-info-right">
        <div className="hero-info-text" style={{ textAlign: 'right' }}>
          Building
          <br />
          Digital
          <br />
          Experiences
        </div>
      </div>

      {/* Bottom text*/}
      <div className="hero-footer">
        <div className="hero-footer-text">
          Portfolio &copy; {new Date().getFullYear()} @darshndev
        </div>
      </div>

      {/* Canvas Container */}
      <div style={{ position: 'absolute', top: 0, width: '100%', height: '100%' }}>
        <canvas
          ref={canvasRef}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: '#000',
          }}
        />
        {/* Film Grain Overlay Canvas */}
        <canvas
          ref={grainCanvasRef}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            mixBlendMode: 'overlay',
            opacity: 0.6,
          }}
        />
      </div>
    </div>
  );
};
