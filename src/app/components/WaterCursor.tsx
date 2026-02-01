'use client';
import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function WaterCursor() {
  // We removed the "Spring" physics entirely so there is no "laggy circle"

  // State for the "Paint" (The Trail)
  const [trail, setTrail] = useState<{ x: number; y: number; id: string; size: number }[]>([]);
  const idCounter = useRef(0);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      idCounter.current += 1;
      const uniqueId = `paint-${idCounter.current}`;

      // Randomize size slightly for a natural "organic" water feel
      const randomSize = Math.random() * 15 + 25; // Between 20px and 35px

      const newDroplet = { 
        x: e.clientX, 
        y: e.clientY, 
        id: uniqueId,
        size: randomSize
      };

      setTrail((prev) => {
        // Keep the trail longer (40 points) so it feels like a continuous stroke
        const newTrail = [...prev, newDroplet];
        if (newTrail.length > 70) return newTrail.slice(-70);
        return newTrail;
      });
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <div 
      style={{ 
        position: 'fixed', 
        inset: 0, 
        pointerEvents: 'none', 
        zIndex: 999999999, 
        overflow: 'hidden'
      }}
    >
      <AnimatePresence>
        {trail.map((droplet) => (
          <motion.div
            key={droplet.id}
            initial={{ opacity: 0.8, scale: 0.8 }}
            animate={{ opacity: 0, scale: 1 }} // Stays relatively stable like wet paint
            exit={{ opacity: 0, scale: 0.5 }}  // "Dries" (shrinks and fades)
            transition={{ duration: 0.8, ease: "linear" }}
            style={{
              left: droplet.x,
              top: droplet.y,
              x: '-50%', 
              y: '-50%',
              position: 'absolute',
              width: droplet.size,
              height: droplet.size,
              borderRadius: '50%',
              
              // PAINT AESTHETIC:
              // Radial gradient gives it a "soft core" look, like ink on wet paper
              background: 'radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 70%)',
              
              // Blurs the video BEHIND the paint, making it look like water refracting light
              backdropFilter: 'blur(2px)',
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}