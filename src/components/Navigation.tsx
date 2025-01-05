import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const location = useLocation();

  const links = [
    { path: "/", label: "Home" },
    { path: "/about", label: "Über uns" },
    { path: "/contact", label: "Kontakt" },
  ];

  const serviceLinks = [
    { path: "/services/it-outsourcing", label: "IT-Outsourcing" },
    { path: "/services/cybersecurity", label: "Cybersecurity" },
    { path: "/services/cloud-backup", label: "Cloud Backup" },
    { path: "/services/webdesign", label: "Webdesign" },
    { path: "/services/ai-solutions", label: "AI-Lösungen" },
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
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-lg font-semibold text-light hover:text-primary transition-all duration-300">
                Services <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white/95 backdrop-blur-md border-none rounded-lg shadow-lg min-w-[200px] p-2">
                {serviceLinks.map((service) => (
                  <DropdownMenuItem key={service.path} className="focus:bg-gray-50">
                    <Link
                      to={service.path}
                      className="text-dark hover:text-primary transition-colors w-full py-2 px-3 rounded-md text-sm font-medium"
                    >
                      {service.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;