import React, { useEffect, useRef, useState } from 'react';

import './InfiniteLoopSlider.css';

const PROJECT_DATA = [
  {
    title: 'Wordpress Developer',
    image:
      'https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=2070&auto=format&fit=crop',
    category: 'CMS Development',
    year: '2024',
    description: 'Custom themes & plugins',
  },
  {
    title: 'Shopify Developer',
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=2070&auto=format&fit=crop',
    category: 'E-Commerce',
    year: '2024',
    description: 'Store setup & Liquid coding',
  },
  {
    title: 'React Developer',
    image:
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop',
    category: 'Modern Frontend',
    year: '2025',
    description: 'SPA & Complex Applications',
  },
  {
    title: 'Wix Studio Developer',
    image:
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2055&auto=format&fit=crop',
    category: 'No-Code / Low-Code',
    year: '2023',
    description: 'Rapid deployment & design',
  },
  {
    title: 'Framer Developer',
    image:
      'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop',
    category: 'Interactive Design',
    year: '2024',
    description: 'High-fidelity prototypes & sites',
  },
];

const CONFIG = {
  SCROLL_SPEED: 0.75,
  LERP_FACTOR: 0.05,
  BUFFER_SIZE: 5,
  MAX_VELOCITY: 150,
  SNAP_DURATION: 500,
};

// Utility functions
const lerp = (start, end, factor) => start + (end - start) * factor;

const getProjectData = (index) => {
  const i = ((Math.abs(index) % PROJECT_DATA.length) + PROJECT_DATA.length) % PROJECT_DATA.length;
  return PROJECT_DATA[i];
};

const getProjectNumber = (index) => {
  return (
    (((Math.abs(index) % PROJECT_DATA.length) + PROJECT_DATA.length) % PROJECT_DATA.length) +
    1
  )
    .toString()
    .padStart(2, '0');
};

export function InfiniteLoopSlider() {
  const [visibleRange, setVisibleRange] = useState({
    min: -CONFIG.BUFFER_SIZE,
    max: CONFIG.BUFFER_SIZE,
  });

  // Refs for state that changes frequently (animation loop)
  const state = useRef({
    currentY: 0,
    targetY: 0,
    isDragging: false,
    isSnapping: false,
    snapStart: { time: 0, y: 0, target: 0 },
    lastScrollTime: 0, // Will be set in useEffect
    dragStart: { y: 0, scrollY: 0 },
    projectHeight: 0, // Will be set on mount
    minimapHeight: 250, // Fixed height from CSS
  });

  // Refs to store DOM elements
  const projectsRef = useRef(new Map());
  const minimapRef = useRef(new Map());
  const infoRef = useRef(new Map());
  const requestRef = useRef();

  // Container ref for scoped events
  const containerRef = useRef(null);

  // Helper to update parallax for a single item
  const updateParallax = (img, scroll, index, height) => {
    if (!img) return;

    if (!img.dataset.parallaxCurrent) {
      img.dataset.parallaxCurrent = '0';
    }

    let current = parseFloat(img.dataset.parallaxCurrent);
    const target = (-scroll - index * height) * 0.2;
    current = lerp(current, target, 0.1);

    // Optimization: only update if changed significantly
    if (Math.abs(current - target) > 0.01) {
      img.style.transform = `translateY(${current}px) scale(1.5)`;
      img.dataset.parallaxCurrent = current.toString();
    }
  };

  const updateSnap = () => {
    const s = state.current;
    const progress = Math.min((Date.now() - s.snapStart.time) / CONFIG.SNAP_DURATION, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    s.targetY = s.snapStart.y + (s.snapStart.target - s.snapStart.y) * eased;
    if (progress >= 1) s.isSnapping = false;
  };

  const snapToProject = () => {
    const s = state.current;
    const current = Math.round(-s.targetY / s.projectHeight);
    const target = -current * s.projectHeight;
    s.isSnapping = true;
    s.snapStart = {
      time: Date.now(),
      y: s.targetY,
      target: target,
    };
  };

  const updatePositions = () => {
    const s = state.current;
    const minimapY = (s.currentY * s.minimapHeight) / s.projectHeight;

    // Update Projects
    projectsRef.current.forEach((el, index) => {
      const y = index * s.projectHeight + s.currentY;
      el.style.transform = `translateY(${y}px)`;
      const img = el.querySelector('img');
      updateParallax(img, s.currentY, index, s.projectHeight);
    });

    // Update Minimap Images
    minimapRef.current.forEach((el, index) => {
      const y = index * s.minimapHeight + minimapY;
      el.style.transform = `translateY(${y}px)`;
      const img = el.querySelector('img');
      if (img) {
        // Minimap parallax uses minimapHeight
        updateParallax(img, minimapY, index, s.minimapHeight);
      }
    });

    // Update Info
    infoRef.current.forEach((el, index) => {
      const y = index * s.minimapHeight + minimapY;
      el.style.transform = `translateY(${y}px)`;
    });
  };

  const animate = () => {
    const s = state.current;
    const now = Date.now();

    if (!s.isSnapping && !s.isDragging && now - s.lastScrollTime > 100) {
      const snapPoint = -Math.round(-s.targetY / s.projectHeight) * s.projectHeight;
      if (Math.abs(s.targetY - snapPoint) > 1) snapToProject();
    }

    if (s.isSnapping) updateSnap();
    if (!s.isDragging) {
      s.currentY += (s.targetY - s.currentY) * CONFIG.LERP_FACTOR;
    }

    updatePositions();
  };

  const renderedRange = useRef({ min: -CONFIG.BUFFER_SIZE, max: CONFIG.BUFFER_SIZE });

  const animationLoop = React.useCallback(() => {
    animate();

    const s = state.current;
    if (s.projectHeight === 0) {
      // Safety check
      requestRef.current = requestAnimationFrame(animationLoop);
      return;
    }

    const currentIndex = Math.round(-s.targetY / s.projectHeight);
    const min = currentIndex - CONFIG.BUFFER_SIZE;
    const max = currentIndex + CONFIG.BUFFER_SIZE;

    if (min !== renderedRange.current.min || max !== renderedRange.current.max) {
      renderedRange.current = { min, max };
      setVisibleRange({ min, max });
    }

    requestRef.current = requestAnimationFrame(animationLoop);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    state.current.projectHeight = window.innerHeight;
    state.current.lastScrollTime = Date.now(); // Initialize here to avoid purity violation

    // IMPORTANT: Scoped event listeners to the container to avoid hijacking global scroll
    const container = containerRef.current;
    if (!container) return;

    const onWheel = (e) => {
      e.preventDefault();
      const s = state.current;
      s.isSnapping = false;
      s.lastScrollTime = Date.now();
      const delta = Math.max(
        Math.min(e.deltaY * CONFIG.SCROLL_SPEED, CONFIG.MAX_VELOCITY),
        -CONFIG.MAX_VELOCITY
      );
      s.targetY -= delta;
    };

    const onTouchStart = (e) => {
      const s = state.current;
      s.isDragging = true;
      s.isSnapping = false;
      s.dragStart = { y: e.touches[0].clientY, scrollY: s.targetY };
      s.lastScrollTime = Date.now();
    };

    const onTouchMove = (e) => {
      const s = state.current;
      if (!s.isDragging) return;
      // e.preventDefault(); // Optional: prevent page scroll while dragging this
      s.targetY = s.dragStart.scrollY + (e.touches[0].clientY - s.dragStart.y) * 1.5;
      s.lastScrollTime = Date.now();
    };

    const onTouchEnd = () => {
      state.current.isDragging = false;
    };

    const onResize = () => {
      state.current.projectHeight = window.innerHeight;
      // Sync container height to match JS logic exactly (if needed)
      // const container = document.querySelector('.parallax-container');
      // if (container) {
      //     container.style.height = `${window.innerHeight}px`;
      // }
    };

    container.addEventListener('wheel', onWheel, { passive: false });
    container.addEventListener('touchstart', onTouchStart);
    container.addEventListener('touchmove', onTouchMove);
    container.addEventListener('touchend', onTouchEnd);
    window.addEventListener('resize', onResize);

    // Initial size sync
    onResize();

    // Start Loop
    requestRef.current = requestAnimationFrame(animationLoop);

    return () => {
      container.removeEventListener('wheel', onWheel);
      container.removeEventListener('touchstart', onTouchStart);
      container.removeEventListener('touchmove', onTouchMove);
      container.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('resize', onResize);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  // Generate range of indices
  const indices = [];
  for (let i = visibleRange.min; i <= visibleRange.max; i++) {
    indices.push(i);
  }

  return (
    <div className="parallax-container" ref={containerRef}>
      <ul className="project-list">
        {indices.map((i) => {
          const data = getProjectData(i);
          return (
            <div
              key={i}
              className="project"
              ref={(el) => {
                if (el) projectsRef.current.set(i, el);
                else projectsRef.current.delete(i);
              }}
            >
              <img src={data.image} alt={data.title} />
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/40">
                <h2 className="text-4xl font-bold tracking-widest text-white uppercase opacity-90 md:text-6xl">
                  {data.title}
                </h2>
              </div>
            </div>
          );
        })}
      </ul>

      <div className="minimap">
        <div className="minimap-wrapper">
          <div className="minimap-img-preview">
            {indices.map((i) => {
              const data = getProjectData(i);
              return (
                <div
                  key={i}
                  className="minimap-img-item"
                  ref={(el) => {
                    if (el) minimapRef.current.set(i, el);
                    else minimapRef.current.delete(i);
                  }}
                >
                  <img src={data.image} alt={data.title} />
                </div>
              );
            })}
          </div>
          <div className="minimap-info-list" style={{ overflow: 'hidden' }}>
            {indices.map((i) => {
              const data = getProjectData(i);
              const num = getProjectNumber(i);
              return (
                <div
                  key={i}
                  className="minimap-item-info"
                  ref={(el) => {
                    if (el) infoRef.current.set(i, el);
                    else infoRef.current.delete(i);
                  }}
                >
                  <div className="minimap-item-info-row">
                    <p>{num}</p>
                    <p>{data.title}</p>
                  </div>
                  <div className="minimap-item-info-row">
                    <p>{data.category}</p>
                    <p>{data.year}</p>
                  </div>
                  <div className="minimap-item-info-row">
                    <p>{data.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
