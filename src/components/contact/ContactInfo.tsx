import { MapPin, Phone, Mail } from "lucide-react";

export const ContactInfo = () => {
  return (
    <div className="glass-card p-8 rounded-xl border-dark-secondary/30">
      <h2 className="text-2xl font-semibold text-light mb-8">
        Kontaktinformationen
      </h2>
      <div className="space-y-6">
        <div className="flex items-center text-light/80 hover:text-light transition-colors">
          <MapPin className="w-5 h-5 mr-4 text-primary" />
          <span>Frauenfelderstrasse 39, CH-8370 Sirnach</span>
        </div>
        <div className="flex items-center text-light/80 hover:text-light transition-colors">
          <Phone className="w-5 h-5 mr-4 text-primary" />
          <a href="tel:+41523471180" className="hover:underline">
            +41 52 347 11 80
          </a>
        </div>
        <div className="flex items-center text-light/80 hover:text-light transition-colors">
          <Mail className="w-5 h-5 mr-4 text-primary" />
          <a href="mailto:hello@staub-it.ch" className="hover:underline">
            hello@staub-it.ch
          </a>
        </div>
      </div>
    </div>
  );
};