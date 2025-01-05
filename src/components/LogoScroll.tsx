/**
 * LogoScroll Component
 * 
 * Displays a continuously scrolling row of customer logos.
 * Features:
 * - Smooth horizontal scrolling animation
 * - Fade effects on left and right edges
 * - Responsive design
 * - Hover effects on logos
 */

import { motion } from "framer-motion";
import { LogoRow } from "./logo/LogoRow";
import { logos } from "@/constants/logos";

const LogoScroll = () => {
  return (
    <section className="py-6 relative overflow-hidden bg-white">
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
                duration: 15,
                ease: "linear",
              },
            }}
            style={{
              width: "fit-content",
              minWidth: "100%"
            }}
          >
            {/* First set of logos */}
            <LogoRow logos={logos} />
            
            {/* Duplicate sets for seamless loop */}
            <LogoRow logos={logos} />
            <LogoRow logos={logos} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LogoScroll;