"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Geometry, Base, Subtraction } from '@react-three/csg';
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";
import { Bloom, N8AO, SMAA, EffectComposer } from '@react-three/postprocessing';
import { useRef, useState, useEffect } from "react";
import { KernelSize } from "postprocessing";

// More aggressive performance detection
function useDeviceCapabilities() {
  const [capabilities, setCapabilities] = useState({
    isMobile: false,
    isLowEnd: false,
    shouldRender3D: false // Default to false until checked
  });

  useEffect(() => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;
    
    // More aggressive low-end detection
    const cores = navigator.hardwareConcurrency || 2;
    const isLowEnd = cores <= 6 || isMobile; // Increased threshold
    
    // Enable 3D on all devices - use quality settings for performance optimization
    const shouldRender3D = true;
    
    setCapabilities({
      isMobile,
      isLowEnd,
      shouldRender3D
    });
  }, []);

  return capabilities;
}

function Shape({ quality, theme }) {
  const meshRef = useRef(null);
  const innerSphereRef = useRef(null);

  useFrame((_, delta) => {
    const speed = quality === 'low' ? 0.2 : 0.4; // Slower animation
    
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * speed;
      meshRef.current.rotation.y += delta * (speed * 0.6);
      meshRef.current.rotation.z += delta * (speed * 0.4);
    }
    if (innerSphereRef.current) {
      innerSphereRef.current.rotation.x += delta * (speed * 0.6);
      innerSphereRef.current.rotation.y += delta * speed;
      innerSphereRef.current.rotation.z += delta * (speed * 0.2);
    }
  });

  const sphereDetail = quality === 'low' ? 32 : 48; // Increased for better quality
  const innerSphereDetail = quality === 'low' ? 16 : 24; // Increased for better quality

  // Inverted colors: white box, black sphere
  const boxColor = theme === 'dark' ? '#000000' : '#ffffff';
  const sphereColor = theme === 'dark' ? '#ffffff' : '#000000';

  return (
    <>
      <mesh ref={meshRef}>
        <meshPhysicalMaterial 
          roughness={0}
          metalness={0.95}
          clearcoat={1}
          clearcoatRoughness={0.1}
          color={boxColor}
        />

        <Geometry>
          <Base>
            <primitive
              object={new RoundedBoxGeometry(2, 2, 2, 7, 0.2)}
            />
          </Base>

          <Subtraction>
            <sphereGeometry args={[1.25, sphereDetail, sphereDetail]} />
          </Subtraction>
        </Geometry>
      </mesh>
      
      <mesh ref={innerSphereRef}>
        <sphereGeometry args={[0.8, innerSphereDetail, innerSphereDetail]} />
        <meshPhysicalMaterial 
          color={sphereColor}
          emissive={sphereColor}
          emissiveIntensity={theme === 'dark' ? 1 : 0.3}
        />
      </mesh>
    </>
  );
}

function Environment({ theme }) {
  const lightIntensity = theme === 'dark' ? 0.2 : 0.5;
  const ambientIntensity = theme === 'dark' ? 0.8 : 1.2;

  return (
    <>
      <directionalLight 
        position={[-5, 5, -5]} 
        intensity={lightIntensity} 
        color="#e6f3ff"
      />
      
      <directionalLight 
        position={[0, -5, 10]} 
        intensity={lightIntensity * 2} 
        color="#fff5e6"
      />
      
      <ambientLight intensity={ambientIntensity} color="#ffffff" />
      
      <pointLight 
        position={[8, 3, 8]} 
        intensity={lightIntensity} 
        color="#ffeecc"
        distance={20}
      />
      
      <pointLight 
        position={[-8, 3, -8]} 
        intensity={lightIntensity} 
        color="#ccf0ff"
        distance={20}
      />
      
      <directionalLight 
        position={[0, -10, 0]} 
        intensity={lightIntensity} 
        color="#f0f0f0"
      />
    </>
  );
}

function Scene({ quality, theme }) {
  return (
    <Canvas
      className="w-full h-full"
      camera={{ position: [5, 5, 5], fov: 50 }}
      dpr={[1, 2]} // Adaptive DPR for sharp rendering on all devices
      performance={{ min: 0.5 }}
      gl={{ 
        antialias: true, // Enable for smooth edges
        powerPreference: 'high-performance',
        alpha: true
      }}
    >
      <Environment theme={theme} />
      <Shape quality={quality} theme={theme} />
      {( // Enable effects on all devices for better quality
        <EffectComposer multisampling={0}>
          <N8AO 
            halfRes 
            color="black" 
            aoRadius={2} 
            intensity={0.5} 
            aoSamples={3} 
            denoiseSamples={2} 
          />
          <Bloom
            kernelSize={3}
            luminanceThreshold={0}
            luminanceSmoothing={0.4}
            intensity={0.4}
          />
          <SMAA />
        </EffectComposer>
      )}
    </Canvas>
  );
}

// Fallback component for low-end devices - light theme by default
function FallbackHero({ title, description, theme }) {
  const bgColor = theme === 'dark' 
    ? 'bg-gradient-to-br from-[#0A0A0A] via-[#1a1a1a] to-[#0A0A0A]'
    : 'bg-gradient-to-br from-[#f5f5f5] via-[#ffffff] to-[#f0f0f0]';
  
  const textColor = theme === 'dark' ? 'text-white' : 'text-black';
  const descColor = theme === 'dark' ? 'text-white/50' : 'text-black/50';

  return (
    <div className={`h-svh w-screen relative ${bgColor}`}>
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 via-transparent to-blue-500/5"></div>
      <div className="absolute bottom-4 left-4 md:bottom-10 md:left-10 z-20 max-w-md">
        <h1 className={`text-2xl md:text-3xl font-light tracking-tight mb-3 ${textColor}`}>
          {title}
        </h1>
        <p className={`font-mono text-xs md:text-sm leading-relaxed font-light tracking-tight ${descColor}`}>
          {description}
        </p>
      </div>
    </div>
  );
}

export const Hero = ({ title, description, theme = 'light' }) => {
  const { isMobile, isLowEnd, shouldRender3D } = useDeviceCapabilities();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 200);
    return () => clearTimeout(timer);
  }, []);

  // Use fallback on mobile or low-end devices
  if (!shouldRender3D) {
    return <FallbackHero title={title} description={description} theme={theme} />;
  }

  const quality = isMobile || isLowEnd ? 'low' : 'medium';

  const bgColor = theme === 'dark' ? 'bg-[#0A0A0A]' : 'bg-[#f5f5f5]';
  const textColor = theme === 'dark' ? 'text-white' : 'text-black';
  const descColor = theme === 'dark' ? 'text-white/50' : 'text-black/50';

  return (
    <div className={`h-svh w-screen relative overflow-hidden ${bgColor}`}>
      {/* Radial glow effect */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: theme === 'dark' 
            ? 'radial-gradient(circle at center, rgba(255,255,255,0.08) 0%, transparent 60%)'
            : 'radial-gradient(circle at center, rgba(0,0,0,0.06) 0%, transparent 60%)'
        }}
      />
      <div className="absolute inset-0">
        {isLoaded && <Scene quality={quality} theme={theme} />}
      </div>
      <div className="absolute bottom-16 sm:bottom-20 left-4 md:bottom-10 md:left-10 z-20 max-w-md px-2">
        <h1 className={`text-2xl md:text-3xl font-light tracking-tight mb-3 ${textColor}`}>
          {title}
        </h1>
        <p className={`font-mono text-xs md:text-sm leading-relaxed font-light tracking-tight ${descColor}`}>
          {description}
        </p>
      </div>
    </div>
  );
};
