/**
 * LogoScroll Component
 * 
 * Displays a continuously scrolling row of customer logos with fade effects on the edges.
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
    <section className="py-32 relative overflow-hidden bg-white">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Section header */}
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Unsere Kunden</span>
          </h2>
          <p className="text-xl text-dark max-w-2xl mx-auto">
            Vertrauen auf unsere Expertise
          </p>
        </motion.div>
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
          >
            {/* First set of logos */}
            <LogoRow logos={logos} />
            
            {/* Duplicate set for seamless loop */}
            <LogoRow logos={logos} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LogoScroll;