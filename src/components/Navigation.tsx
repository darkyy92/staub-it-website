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
      className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full px-4 pt-6"
    >
      <div className="glass-card rounded-full px-8 py-4 border-gray-800/50 w-full max-w-7xl mx-auto">
        <div className="flex items-center justify-between w-full">
          <Link 
            to="/" 
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-primary"
            >
              <path
                d="M18.5 10.5C18.5 6.5 15.5 4 12 4C8.5 4 6.5 6.5 6.5 8.5C6.5 9.5 7 10 7.5 10C8.5 10 9 9 9 8.5C9 8 8.5 7.5 8 7.5C7.5 7.5 7 8 7 8.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M17 8.5C17 8 16.5 7.5 16 7.5C15.5 7.5 15 8 15 8.5C15 9 15.5 10 16.5 10C17 10 17.5 9.5 17.5 8.5C17.5 6.5 15.5 4 12 4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M12 4C8.5 4 6.5 6.5 6.5 8.5C6.5 12.5 9.5 15 12 15C14.5 15 17.5 12.5 17.5 8.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
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
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;