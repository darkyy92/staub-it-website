import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center max-w-4xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-8"
      >
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <motion.span 
            className="text-gradient inline-block"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Dein Partner
          </motion.span>{" "}
          <span className="text-light">für innovative</span>{" "}
          <motion.span 
            className="text-gradient inline-block"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            IT-Lösungen
          </motion.span>
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl text-light-secondary leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Wir bringen dein Unternehmen mit modernster Technologie und
          persönlicher Beratung voran.
        </motion.p>
      </motion.div>

      <HeroButtons />
    </motion.div>
  );
};

const HeroButtons = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.8 }}
      className="flex flex-col sm:flex-row gap-4 justify-center items-center"
    >
      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="group bg-primary hover:bg-primary-dark text-light px-8 py-4 rounded-full transition-all duration-300 flex items-center gap-2 text-lg glass-button"
      >
        Jetzt beraten lassen
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </motion.button>
      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="text-light border-2 border-light/20 hover:border-primary px-8 py-4 rounded-full transition-all duration-300 backdrop-blur-sm glass-button"
      >
        Unsere Services
      </motion.button>
    </motion.div>
  );
};

export default HeroContent;