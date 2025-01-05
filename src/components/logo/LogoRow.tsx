import { motion } from "framer-motion";
import { Logo } from "@/types/logo";

interface LogoRowProps {
  logos: Logo[];
}

export const LogoRow = ({ logos }: LogoRowProps) => {
  return logos.map((logo, index) => (
    <div
      key={`logo-${index}`}
      className="flex items-center justify-center"
    >
      <img
        src={logo.src}
        alt={logo.alt}
        className="h-[40px] w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
      />
    </div>
  ));
};