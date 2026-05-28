import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ScrollVideo3D({ src }) {
  const { scrollYProgress } = useScroll();

  // Rotate the entire video smoothly as the user scrolls
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 120]);
  
  // Scale it up significantly so when it rotates, the corners don't reveal the background
  const scale = useTransform(scrollYProgress, [0, 1], [1.5, 2.0]);
  
  // Optional: subtle parallax or drift
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);

  return (
    <div className="fixed inset-0 z-0 bg-slate-950 overflow-hidden pointer-events-none">
      <motion.div
        style={{
          width: '100%',
          height: '100%',
          rotate,
          scale,
          y,
        }}
        className="flex items-center justify-center"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            minWidth: '100vw',
            minHeight: '100vh',
            objectFit: 'cover',
            maxWidth: 'none',
          }}
          src={src}
        />
      </motion.div>
      
      {/* Dark overlay to ensure text remains readable */}
      <div className="absolute inset-0 bg-slate-950/40 z-10" />
    </div>
  );
}
