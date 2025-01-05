import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-dark-secondary mt-4 border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-light mb-4">Über uns</h3>
            <p className="text-light-secondary">
              Wir sind dein zuverlässiger Partner für IT-Dienstleistungen in der Schweiz.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold text-light mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="/services/it-outsourcing" className="text-light-secondary hover:text-primary transition-colors">
                  IT-Outsourcing
                </a>
              </li>
              <li>
                <a href="/services#security" className="text-light-secondary hover:text-primary transition-colors">
                  Cybersecurity
                </a>
              </li>
              <li>
                <a href="/services#cloud-backup" className="text-light-secondary hover:text-primary transition-colors">
                  Cloud Backup
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold text-light mb-4">Kontakt</h3>
            <ul className="space-y-2">
              <li className="text-light-secondary">support@company.ch</li>
              <li className="text-light-secondary">+41 123 456 789</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold text-light mb-4">Social Media</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-light-secondary hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-light-secondary hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-light-secondary hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;