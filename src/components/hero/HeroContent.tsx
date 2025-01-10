import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

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
          className="text-5xl md:text-7xl font-bold mb-6 flex flex-col gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <motion.span 
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{
              background: 'linear-gradient(to right, #de4d34, #eea03c)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Innovative IT
          </motion.span>
          <span className="text-light">
            für KMU und{" "}
            <motion.span 
              className="inline-block text-light"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Bildung
            </motion.span>
          </span>
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl text-light-secondary leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Von der Cloud bis zur Hardware – alles aus einer Hand.
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 }}
        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
      >
        <motion.a 
          href="https://tripetto.app/run/GRRE4Y34LY"
          whileHover={{ scale: 1.05, backgroundColor: '#c65f2a' }}
          whileTap={{ scale: 0.95 }}
          className="group bg-primary hover:bg-primary-dark text-light px-8 py-4 rounded-full transition-all duration-300 flex items-center gap-2 text-lg glass-button shadow-lg hover:shadow-xl hover:shadow-primary/20"
        >
          Unverbindliche Beratung
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </motion.a>
        <motion.button 
          whileHover={{ scale: 1.05, borderColor: '#e5793a' }}
          whileTap={{ scale: 0.95 }}
          className="text-light border-2 border-light/20 hover:border-primary px-8 py-4 rounded-full transition-all duration-300 backdrop-blur-sm glass-button hover:bg-dark-secondary/50 hover:shadow-lg"
        >
          Lösungen entdecken
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;