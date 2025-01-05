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

import { motion } from "framer-motion";
import { LogoRow } from "./logo/LogoRow";
import { logos } from "@/constants/logos";

const LogoScroll = () => {
  return (
    <section className="py-2 relative overflow-hidden">
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
        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-16 items-center py-8"
            animate={{
              x: [0, -1920],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
            style={{
              width: "fit-content",
              minWidth: "100%"
            }}
          >
            {/* Multiple sets of logos for seamless loop */}
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