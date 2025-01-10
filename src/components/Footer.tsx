import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isServicePage = location.pathname.startsWith('/services/');

  return (
    <footer className={`bg-dark-secondary ${!isServicePage ? 'mt-8' : ''} border-t border-gray-800`}>
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
              <img 
                src="/lovable-uploads/7d053d9e-8b9e-4cee-988c-217023ef4f57.png" 
                alt="Staub IT Logo" 
                className="h-8 w-auto"
              />
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
                <Link to="/prices" className="text-light-secondary hover:text-primary transition-colors">
                  Preise
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
            <h3 className="text-xl font-semibold text-light">Angebot</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/it-outsourcing" className="text-light-secondary hover:text-primary transition-colors">
                  IT-Outsourcing
                </Link>
              </li>
              <li>
                <Link to="/services/education" className="text-light-secondary hover:text-primary transition-colors">
                  Education
                </Link>
              </li>
              <li>
                <Link to="/services/cybersecurity" className="text-light-secondary hover:text-primary transition-colors">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link to="/services/google-workspace" className="text-light-secondary hover:text-primary transition-colors">
                  Google Workspace
                </Link>
              </li>
              <li>
                <Link to="/services/cloud-backup" className="text-light-secondary hover:text-primary transition-colors">
                  Cloud Backup
                </Link>
              </li>
              <li>
                <Link to="/services/webdesign" className="text-light-secondary hover:text-primary transition-colors">
                  Webdesign
                </Link>
              </li>
              <li>
                <Link to="/services/ai-solutions" className="text-light-secondary hover:text-primary transition-colors">
                  AI-Lösungen
                </Link>
              </li>
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
                <span>Frauenfelderstrasse 39,<br />CH-8370 Sirnach</span>
              </div>
              <div className="flex items-center space-x-3 text-light-secondary">
                <Phone size={20} className="text-primary" />
                <a href="tel:+41523471180" className="hover:underline">
                  +41 52 347 11 80
                </a>
              </div>
              <div className="flex items-center space-x-3 text-light-secondary">
                <Mail size={20} className="text-primary" />
                <span>hello@staub-it.ch</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;