import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { navigationLinks, services } from "@/constants/navigation";

interface MobileMenuProps {
  isOpen: boolean;
  currentPath: string;
  onClose: () => void;
}

export const MobileMenu = ({ isOpen, currentPath, onClose }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="fixed inset-x-0 top-[calc(100%+1rem)] mx-4 p-4 rounded-xl md:hidden z-50"
      style={{
        backgroundColor: 'rgba(26, 26, 26, 0.98)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
      }}
    >
      <div className="flex flex-col gap-4">
        <Link
          to="/"
          onClick={onClose}
          className={`text-lg font-semibold transition-all duration-300 ${
            currentPath === "/" ? "text-primary" : "text-light hover:text-primary"
          }`}
        >
          Home
        </Link>
        
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-lg font-semibold text-light">
            Dienstleistungen
          </div>
          <div className="pl-7 space-y-2">
            {services.map((service) => (
              <Link
                key={service.title}
                to={service.href}
                onClick={onClose}
                className="block text-light-secondary hover:text-primary transition-colors"
              >
                {service.title}
              </Link>
            ))}
          </div>
        </div>

        {navigationLinks.slice(1).map((link) => (
          <Link
            key={link.path}
            to={link.path}
            onClick={onClose}
            className={`text-lg font-semibold transition-all duration-300 ${
              currentPath === link.path
                ? "text-primary"
                : "text-light hover:text-primary"
            }`}
          >
            {link.label}
          </Link>
        ))}

        <div className="flex flex-col gap-3 pt-3 border-t border-gray-700">
          <Button 
            variant="outline"
            className="bg-transparent text-white hover:bg-primary-dark w-full"
            onClick={() => {
              window.open('https://drive.google.com/file/d/1LJwv1QGD2tOrEnxB5QcT7FDTQhB2FnhZ/view?usp=sharing', '_blank');
              onClose();
            }}
          >
            AnyDesk
          </Button>
          <Button 
            variant="default"
            className="text-white hover:bg-primary-dark w-full"
            onClick={() => {
              window.location.href = 'tel:0523471180';
              onClose();
            }}
          >
            <Phone className="mr-2 h-4 w-4 text-white" />
            052 347 11 80
          </Button>
        </div>
      </div>
    </motion.div>
  );
};