import GridBackground from "./hero/GridBackground";
import HeroContent from "./hero/HeroContent";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToNextSection = () => {
    const nextSection = document.querySelector('section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center">
      <GridBackground />
      <div className="container mx-auto px-6 relative z-10 flex-grow flex items-center">
        <HeroContent />
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center items-center z-20">
        <motion.button
          onClick={scrollToNextSection}
          className="glass-button rounded-full p-4 bg-primary/80 hover:bg-primary text-light group shadow-lg shadow-primary/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronDown className="w-8 h-8 animate-float" />
        </motion.button>
      </div>
    </div>
  );
};

export default Hero;