import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  const links = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/about", label: "Über uns" },
    { path: "/contact", label: "Kontakt" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-[80%] xl:max-w-[1280px]"
    >
      <div className="glass-card rounded-full px-8 py-4 border-gray-800/50">
        <div className="flex items-center justify-center space-x-12">
          <Link 
            to="/" 
            className="text-2xl font-bold text-light hover:text-primary transition-colors"
          >
            Staub IT
          </Link>
          <div className="hidden md:flex items-center space-x-10">
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
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;