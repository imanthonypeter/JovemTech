import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FadingVideo({ videos, interval = 6000, className = "" }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % videos.length);
    }, interval);
    return () => clearInterval(timer);
  }, [videos.length, interval]);

  return (
    <div className={`absolute inset-0 w-full h-full overflow-hidden bg-black z-0 pointer-events-none ${className}`}>
      <AnimatePresence mode="popLayout">
        <motion.video
          key={videos[index]}
          src={videos[index]}
          autoPlay
          muted
          loop
          playsInline
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 0.6, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-black/40 z-10" />
    </div>
  );
}
