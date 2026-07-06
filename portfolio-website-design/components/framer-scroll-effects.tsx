'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

/**
 * High-End Framer Motion Scroll Effects
 * 
 * 1. ParallaxScaleImage: Background image moves slower than scroll and scales up.
 * 2. DarkToLightSqueeze: Dark panel squeezes down to reveal a bright section below.
 */

export function ParallaxScaleImage({ src, alt }: { src: string; alt: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  // useScroll tracks the container's position relative to the viewport
  // ['start end', 'end start'] means:
  // start tracking when the top of the container hits the bottom of the viewport
  // stop tracking when the bottom of the container hits the top of the viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Apply a spring physics smoothing to the scroll progress for buttery transitions
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Parallax: Move the image down by 20% at the start, and up by 20% at the end
  const y = useTransform(smoothProgress, [0, 1], ['-20%', '20%']);
  
  // Scale: Image starts at 0.8 scale and grows to 1.1 as it scrolls through
  const scale = useTransform(smoothProgress, [0, 1], [0.8, 1.1]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-[#1a1a14] flex items-center justify-center"
    >
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 w-full h-[140%] -top-[20%]"
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover opacity-80"
        />
      </motion.div>
      <div className="relative z-10 text-center px-6">
        <h2 
          className="text-cream text-5xl md:text-8xl font-black uppercase tracking-tighter"
          style={{ fontFamily: 'var(--font-bricolage)' }}
        >
          Parallax Reveal
        </h2>
      </div>
    </div>
  );
}

export function DarkToLightSqueeze() {
  const containerRef = useRef<HTMLDivElement>(null);

  // We track the wrapper which is 200vh tall to create a sticky scrolling effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  // The dark panel squeezes from 100% height to 0% height by clipping the bottom
  // We use clipPath because it is hardware accelerated and avoids reflows
  const clipPath = useTransform(
    smoothProgress,
    [0, 1],
    ['inset(0% 0% 0% 0%)', 'inset(0% 0% 100% 0%)']
  );

  // Scale down the dark panel content slightly as it squeezes away
  const darkContentScale = useTransform(smoothProgress, [0, 1], [1, 0.85]);
  const darkContentOpacity = useTransform(smoothProgress, [0, 0.5], [1, 0]);

  // The light section underneath scales up and fades in
  const lightScale = useTransform(smoothProgress, [0, 1], [0.9, 1]);

  return (
    <div ref={containerRef} className="relative h-[200vh]">
      <div className="sticky top-0 w-full h-screen overflow-hidden bg-[#f0ede6]">
        
        {/* LIGHT SECTION (Underneath) */}
        <motion.div 
          style={{ scale: lightScale }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 origin-bottom"
        >
          <h2 
            className="text-[#1a1a14] text-6xl md:text-9xl font-black uppercase tracking-tighter"
            style={{ fontFamily: 'var(--font-bricolage)' }}
          >
            Light Emerges
          </h2>
          <p className="text-[#1a1a14]/60 mt-4 max-w-lg text-lg" style={{ fontFamily: 'var(--font-syne)' }}>
            As the dark layer folds away, the bright layer scales up smoothly. Hardware accelerated clip-paths ensure 60fps performance.
          </p>
        </motion.div>

        {/* DARK SECTION (Overlay that squeezes away) */}
        <motion.div
          style={{ clipPath }}
          className="absolute inset-0 w-full h-full bg-[#1a1a14] z-10 flex flex-col items-center justify-center origin-top"
        >
          <motion.div 
            style={{ scale: darkContentScale, opacity: darkContentOpacity }}
            className="text-center p-8"
          >
            <h2 
              className="text-cream text-6xl md:text-9xl font-black uppercase tracking-tighter"
              style={{ fontFamily: 'var(--font-bricolage)' }}
            >
              The Squeeze
            </h2>
            <p className="text-cream-dim mt-4 max-w-lg text-lg" style={{ fontFamily: 'var(--font-syne)' }}>
              Keep scrolling to fold this dark panel upwards.
            </p>
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
}

// Export a showcase wrapper combining both
export default function FramerScrollShowcase() {
  return (
    <main className="bg-[#1a1a14]">
      {/* Spacer to allow scrolling down to the effects */}
      <div className="h-screen flex items-center justify-center">
        <p className="text-cream-dim text-xl" style={{ fontFamily: 'var(--font-syne)' }}>
          Scroll down for Framer Motion effects ↓
        </p>
      </div>

      <ParallaxScaleImage 
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favour_ranger_work-1-CD3xsDMdo6ibrxlIPWykIhVbMf35eA.jpg" 
        alt="Parallax image" 
      />

      <DarkToLightSqueeze />
    </main>
  );
}
