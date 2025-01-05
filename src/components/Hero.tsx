import GridBackground from "./hero/GridBackground";
import HeroContent from "./hero/HeroContent";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

/**
 * Hero Component
 * 
 * This component serves as the main landing section of the website.
 * It consists of:
 * - A responsive grid background with animated gradients
 * - A centered content section with animated text and CTA buttons
 * - Smooth animations and hover effects using Framer Motion
 * - A floating scroll button at the bottom
 */
const Hero = () => {
  const scrollToNextSection = () => {
    const nextSection = document.querySelector('section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <GridBackground />
      <div className="container mx-auto px-6 relative z-10">
        <HeroContent />
      </div>
      
      {/* Floating scroll button */}
      <motion.button
        onClick={scrollToNextSection}
        className="absolute bottom-8 inset-x-0 mx-auto z-20 glass-button rounded-full p-4 bg-primary/80 hover:bg-primary text-light group shadow-lg shadow-primary/20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        whileHover={{ y: -4 }}
        whileTap={{ scale: 0.95 }}
      >
        <ChevronDown className="w-8 h-8 animate-float" />
      </motion.button>
    </div>
  );
};

export default Hero;