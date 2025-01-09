/**
 * LogoScroll Component
 * 
 * Displays a continuously scrolling row of customer logos.
 * Features:
 * - Smooth horizontal scrolling animation
 * - Fade effects on left and right edges
 * - Responsive design
 * - Hover effects on logos
 * - Grid texture background
 */

import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useRef } from "react";
import { LogoRow } from "./logo/LogoRow";
import { logos } from "@/constants/logos";

const LogoScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();

  useEffect(() => {
    const updateAnimation = () => {
      if (containerRef.current) {
        const scrollWidth = containerRef.current.scrollWidth;
        const viewportWidth = containerRef.current.offsetWidth;
        
        // Calculate the distance needed to scroll one full set of logos
        const scrollDistance = -(scrollWidth / 5); // Divide by 5 as we have 5 sets

        controls.start({
          x: [0, scrollDistance],
          transition: {
            duration: 30,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          },
        });
      }
    };

    updateAnimation();
    window.addEventListener('resize', updateAnimation);
    
    return () => {
      window.removeEventListener('resize', updateAnimation);
    };
  }, [controls]);

  return (
    <section className="py-40 relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-white">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0,0,0,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0,0,0,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Logo scroll section */}
      <div className="relative">
        {/* Fade overlay left */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10" />
        
        {/* Fade overlay right */}
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10" />

        {/* Scrolling container */}
        <div className="flex overflow-hidden" ref={containerRef}>
          <motion.div
            className="flex gap-16 items-center py-4"
            animate={controls}
            style={{
              width: "fit-content",
              minWidth: "100%"
            }}
          >
            <LogoRow logos={logos} />
            <LogoRow logos={logos} />
            <LogoRow logos={logos} />
            <LogoRow logos={logos} />
            <LogoRow logos={logos} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LogoScroll;