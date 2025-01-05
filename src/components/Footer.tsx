import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark-secondary mt-32 border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-primary"
              >
                <path
                  d="M22 12.5C22 17.194 17.966 21 13 21C8.034 21 4 17.194 4 12.5C4 7.806 8.034 4 13 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M16 12.5C16 14.985 14.757 17 13 17C11.243 17 10 14.985 10 12.5C10 10.015 11.243 8 13 8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path d="M2 12H4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M19 12H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <h3 className="text-2xl font-bold text-gradient">Staub IT</h3>
            </div>
            <p className="text-light-secondary">
              Dein zuverlässiger Partner für innovative IT-Lösungen und erstklassigen Service.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold text-light">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-light-secondary hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-light-secondary hover:text-primary transition-colors">
                  Über uns
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-light-secondary hover:text-primary transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold text-light">Services</h3>
            <ul className="space-y-2">
              <li className="text-light-secondary">IT-Outsourcing</li>
              <li className="text-light-secondary">Cybersecurity</li>
              <li className="text-light-secondary">Cloud Backup</li>
              <li className="text-light-secondary">Webdesign</li>
              <li className="text-light-secondary">AI-Lösungen</li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold text-light">Kontakt</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-light-secondary">
                <MapPin size={20} className="text-primary" />
                <span>Frauenfelderstrasse 39, CH-8370 Sirnach</span>
              </div>
              <div className="flex items-center space-x-3 text-light-secondary">
                <Phone size={20} className="text-primary" />
                <span>+41 52 347 11 80</span>
              </div>
              <div className="flex items-center space-x-3 text-light-secondary">
                <Mail size={20} className="text-primary" />
                <span>hello@staub-it.ch</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-light-secondary">
            © {currentYear} Staub IT. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;