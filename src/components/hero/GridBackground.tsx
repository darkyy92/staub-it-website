import { motion } from "framer-motion";

const GridBackground = () => {
  return (
    <>
      {/* Grid background with slightly lighter shade */}
      <div className="absolute inset-0 bg-dark-secondary">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Dark overlay with gradient - adjusted for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-secondary/80 via-dark/95 to-primary/5" />
      
      {/* Animated circles in background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-primary/30 to-primary-light/30 rounded-full blur-[100px]"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-primary-dark/30 to-primary/30 rounded-full blur-[100px]"
        />
      </div>
    </>
  );
};

export default GridBackground;