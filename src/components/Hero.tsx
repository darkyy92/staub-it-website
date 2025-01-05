import GridBackground from "./hero/GridBackground";
import HeroContent from "./hero/HeroContent";

/**
 * Hero Component
 * 
 * This component serves as the main landing section of the website.
 * It consists of:
 * - A responsive grid background with animated gradients
 * - A centered content section with animated text and CTA buttons
 * - Smooth animations and hover effects using Framer Motion
 * 
 * The component maintains a consistent visual hierarchy and responsive design
 * across all screen sizes while providing an engaging user experience through
 * interactive elements and animations.
 */
const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <GridBackground />
      <div className="container mx-auto px-6 relative z-10">
        <HeroContent />
      </div>
    </div>
  );
};

export default Hero;