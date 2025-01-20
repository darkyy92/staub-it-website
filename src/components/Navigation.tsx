import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { navigationLinks } from "@/constants/navigation";
import { MobileMenu } from "./navigation/MobileMenu";
import { MenuItem, Menu as NavMenu, HoveredLink } from "./ui/navbar-menu";

const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full px-4 pt-6"
    >
      <div className="glass-card rounded-full px-4 sm:px-8 py-4 border-gray-800/50 w-full max-w-7xl mx-auto relative">
        <div className="flex items-center justify-between w-full">
          <Link 
            to="/" 
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <img 
              src="/lovable-uploads/7d053d9e-8b9e-4cee-988c-217023ef4f57.png" 
              alt="Staub IT Logo" 
              className="h-8 w-auto"
            />
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <NavMenu setActive={setActiveItem}>
              <MenuItem setActive={setActiveItem} active={activeItem} item="Services">
                <div className="flex flex-col min-w-[200px] p-4">
                  <HoveredLink to="/it-outsourcing">IT Outsourcing</HoveredLink>
                  <HoveredLink to="/cybersecurity">Cybersecurity</HoveredLink>
                  <HoveredLink to="/cloud-backup">Cloud Backup</HoveredLink>
                  <HoveredLink to="/google-workspace">Google Workspace</HoveredLink>
                  <HoveredLink to="/webdesign">Webdesign</HoveredLink>
                  <HoveredLink to="/education">Education</HoveredLink>
                  <HoveredLink to="/ai-solutions">AI Solutions</HoveredLink>
                </div>
              </MenuItem>

              {navigationLinks.map((link) => (
                <MenuItem 
                  key={link.path}
                  setActive={setActiveItem}
                  active={activeItem}
                  item={link.label}
                >
                  {link.children && (
                    <div className="flex flex-col min-w-[200px] p-4">
                      {link.children.map((child) => (
                        <HoveredLink key={child.path} to={child.path}>
                          {child.label}
                        </HoveredLink>
                      ))}
                    </div>
                  )}
                </MenuItem>
              ))}
            </NavMenu>

            <div className="flex items-center gap-10">
              <Button 
                variant="ghost"
                className="text-light border-2 border-light/20 hover:border-primary px-8 py-4 rounded-full transition-all duration-300 backdrop-blur-sm glass-button hover:bg-dark-secondary/50 hover:text-primary"
                onClick={() => window.open('https://drive.google.com/file/d/1LJwv1QGD2tOrEnxB5QcT7FDTQhB2FnhZ/view?usp=sharing', '_blank')}
              >
                AnyDesk
              </Button>
              <Button 
                variant="default"
                className="text-white hover:bg-primary-dark whitespace-nowrap"
                onClick={() => window.location.href = 'tel:0523471180'}
              >
                <Phone className="mr-2 h-4 w-4 text-white" />
                052 347 11 80
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <MobileMenu
            isOpen={isMenuOpen}
            currentPath={location.pathname}
            onClose={() => setIsMenuOpen(false)}
          />
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;