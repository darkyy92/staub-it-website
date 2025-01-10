import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ServiceCTAProps {
  text: string;
}

const ServiceCTA = ({ text }: ServiceCTAProps) => {
  return (
    <div className="mt-16 flex justify-center">
      <motion.a
        href="https://tripetto.app/run/GRRE4Y34LY"
        whileHover={{ scale: 1.05, backgroundColor: '#c65f2a' }}
        whileTap={{ scale: 0.95 }}
        className="group bg-primary hover:bg-primary-dark text-light px-8 py-4 rounded-full transition-all duration-300 flex items-center gap-2 text-lg glass-button shadow-lg hover:shadow-xl hover:shadow-primary/20"
      >
        {text}
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </motion.a>
    </div>
  );
};

export default ServiceCTA;