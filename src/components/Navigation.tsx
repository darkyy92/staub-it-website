import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, Phone, X, Briefcase } from "lucide-react";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { path: "/", label: "Home" },
    { path: "/about", label: "Über uns" },
    { path: "/contact", label: "Kontakt" },
  ];

  const services = [
    {
      title: "IT Support",
      description: "Professionelle IT-Betreuung und Support für Ihr Unternehmen",
      href: "/services#it-support",
    },
    {
      title: "Cloud Services",
      description: "Sichere Cloud-Lösungen und Backup-Systeme",
      href: "/services#cloud",
    },
    {
      title: "Cybersecurity",
      description: "Umfassender Schutz vor digitalen Bedrohungen",
      href: "/services#security",
    },
  ];

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
              src="/lovable-uploads/03c9638f-4310-4299-921f-e2fbce62352d.png" 
              alt="Staub IT Logo" 
              className="h-8 w-auto"
            />
            <span className="text-xl sm:text-2xl font-bold text-light hover:text-primary transition-colors">
              Staub IT
            </span>
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
            <div className="flex items-center gap-10">
              <Link
                to="/"
                className={`text-lg font-semibold transition-all duration-300 ${
                  location.pathname === "/"
                    ? "text-primary scale-105"
                    : "text-light hover:text-primary hover:scale-105"
                }`}
              >
                Home
              </Link>

              {/* Services Navigation Menu */}
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent text-lg font-semibold text-light hover:text-primary hover:bg-transparent">
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-5 h-5" />
                        Dienstleistungen
                      </div>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 bg-dark-secondary/95 backdrop-blur-md">
                        {services.map((service) => (
                          <li key={service.title}>
                            <NavigationMenuLink asChild>
                              <Link
                                to={service.href}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary/20 hover:text-primary"
                              >
                                <div className="text-sm font-medium leading-none text-light">
                                  {service.title}
                                </div>
                                <p className="line-clamp-2 text-sm leading-snug text-light-secondary">
                                  {service.description}
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              {links.slice(1).map((link) => (
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
                className="bg-transparent text-white hover:bg-primary-dark whitespace-nowrap"
                onClick={() => window.open('https://anydesk.com/download', '_blank')}
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
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 mt-4 p-4 glass-card rounded-xl border-gray-800/50 md:hidden"
            >
              <div className="flex flex-col gap-4">
                <Link
                  to="/"
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-lg font-semibold transition-all duration-300 ${
                    location.pathname === "/"
                      ? "text-primary"
                      : "text-light hover:text-primary"
                  }`}
                >
                  Home
                </Link>
                
                {/* Mobile Services Menu */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-lg font-semibold text-light">
                    <Briefcase className="w-5 h-5" />
                    Dienstleistungen
                  </div>
                  <div className="pl-7 space-y-2">
                    {services.map((service) => (
                      <Link
                        key={service.title}
                        to={service.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-light-secondary hover:text-primary transition-colors"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                </div>

                {links.slice(1).map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-lg font-semibold transition-all duration-300 ${
                      location.pathname === link.path
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
                      window.open('https://anydesk.com/download', '_blank');
                      setIsMenuOpen(false);
                    }}
                  >
                    AnyDesk
                  </Button>
                  <Button 
                    variant="default"
                    className="text-white hover:bg-primary-dark w-full"
                    onClick={() => {
                      window.location.href = 'tel:0523471180';
                      setIsMenuOpen(false);
                    }}
                  >
                    <Phone className="mr-2 h-4 w-4 text-white" />
                    052 347 11 80
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;