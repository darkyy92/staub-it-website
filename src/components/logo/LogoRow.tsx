import { motion } from "framer-motion";
import { Logo } from "@/types/logo";

interface LogoRowProps {
  logos: Logo[];
}

export const LogoRow = ({ logos }: LogoRowProps) => {
  return logos.map((logo, index) => (
    <motion.div
      key={`logo-${index}`}
      className="flex items-center justify-center bg-dark-secondary/30 rounded-lg p-4 backdrop-blur-sm"
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
      style={{
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      }}
    >
      <img
        src={logo.src}
        alt={logo.alt}
        className="h-[60px] w-auto object-contain opacity-70 hover:opacity-100 transition-all duration-300"
        style={{ minWidth: "160px" }}
      />
    </motion.div>
  ));
};