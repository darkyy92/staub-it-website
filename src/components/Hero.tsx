import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-dark flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-dark to-dark-secondary" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-light mb-6"
          >
            Dein Partner für innovative IT-Lösungen
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-light-secondary mb-8 max-w-2xl mx-auto"
          >
            Wir bringen dein Unternehmen mit modernster Technologie und
            persönlicher Beratung voran.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary hover:bg-primary-dark text-light px-8 py-3 rounded-lg transition-colors"
          >
            Jetzt beraten lassen
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;