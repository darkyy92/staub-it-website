import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-secondary to-primary/10" />
      
      {/* Animated circles in background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float delay-1000" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
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
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gradient">Dein Partner</span>{" "}
              <span className="text-light">für innovative</span>{" "}
              <span className="text-gradient">IT-Lösungen</span>
            </h1>
            <p className="text-xl md:text-2xl text-light-secondary leading-relaxed">
              Wir bringen dein Unternehmen mit modernster Technologie und
              persönlicher Beratung voran.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              className="group bg-primary hover:bg-primary-dark text-light px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2 text-lg"
            >
              Jetzt beraten lassen
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              className="text-light border-2 border-light/20 hover:border-primary px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
            >
              Unsere Services
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;