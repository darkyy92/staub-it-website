import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Navigation = () => {
  const location = useLocation();

  const links = [
    { path: "/", label: "Home" },
    { path: "/about", label: "Über uns" },
    { path: "/contact", label: "Kontakt" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full px-4 pt-6"
    >
      <div className="glass-card rounded-full px-8 py-4 border-gray-800/50 w-full max-w-7xl mx-auto">
        <div className="flex items-center justify-between w-full">
          <Link 
            to="/" 
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <img 
              src="/lovable-uploads/03c9638f-4310-4299-921f-e2fbce62352d.png" 
              alt="Staub IT Logo" 
              className="h-8 w-auto"
            />
            <span className="text-2xl font-bold text-light hover:text-primary transition-colors">
              Staub IT
            </span>
          </Link>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-10">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-lg font-semibold transition-all duration-300 ${
                    location.pathname === link.path
                      ? "text-primary scale-105"
                      : "text-light hover:text-primary hover:scale-105"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <Button 
                variant="outline"
                className="bg-transparent border-2 border-primary text-primary hover:bg-primary/10 transition-colors"
                onClick={() => window.open('https://anydesk.com/download', '_blank')}
              >
                AnyDesk
              </Button>
              <Button 
                variant="default"
                onClick={() => window.location.href = 'tel:0523471180'}
              >
                <Phone className="mr-2 h-4 w-4" />
                052 347 11 80
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;