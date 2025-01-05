import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navigation = () => {
  const location = useLocation();

  const links = [
    { path: "/", label: "Home" },
    { path: "/about", label: "Über uns" },
    { path: "/contact", label: "Kontakt" },
  ];

  const serviceLinks = [
    {
      category: "IT Services",
      items: [
        { 
          path: "/services/it-outsourcing", 
          label: "IT-Outsourcing",
          description: "Professionelle IT-Betreuung und Support für Ihr Unternehmen"
        },
        { 
          path: "/services/cybersecurity", 
          label: "Cybersecurity",
          description: "Umfassender Schutz vor digitalen Bedrohungen"
        },
      ]
    },
    {
      category: "Cloud & Backup",
      items: [
        { 
          path: "/services/cloud-backup", 
          label: "Cloud Backup",
          description: "Sichere Datenspeicherung in der Cloud"
        },
        { 
          path: "/services/webdesign", 
          label: "Webdesign",
          description: "Professionelle Webseiten für Ihren Erfolg"
        },
      ]
    },
    {
      category: "Zukunftstechnologien",
      items: [
        { 
          path: "/services/ai-solutions", 
          label: "AI-Lösungen",
          description: "Innovative KI-Lösungen für Ihr Business"
        }
      ]
    }
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
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-lg font-semibold text-light hover:text-primary transition-all duration-300 bg-transparent">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white/95 backdrop-blur-md border-none rounded-lg shadow-lg w-[600px] p-6">
                    <div className="grid grid-cols-3 gap-6">
                      {serviceLinks.map((category) => (
                        <div key={category.category}>
                          <h3 className="font-semibold text-dark mb-3">
                            {category.category}
                          </h3>
                          <ul className="space-y-2">
                            {category.items.map((service) => (
                              <li key={service.path}>
                                <Link
                                  to={service.path}
                                  className="block p-2 hover:bg-gray-50 rounded-md transition-colors"
                                >
                                  <div className="text-sm font-medium text-dark">
                                    {service.label}
                                  </div>
                                  <p className="text-xs text-gray-500 mt-1">
                                    {service.description}
                                  </p>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;