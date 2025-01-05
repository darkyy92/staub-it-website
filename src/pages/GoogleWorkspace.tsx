import { motion } from "framer-motion";
import ServiceCard from "@/components/ServiceCard";
import { FileText, Mail, Calendar, Users } from "lucide-react";

const GoogleWorkspace = () => {
  return (
    <div className="container mx-auto px-6 sm:px-4 pt-32 pb-32 mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-light mb-6 px-4">
          Google Workspace
        </h1>
        <p className="text-xl text-light-secondary mb-12 leading-relaxed px-4">
          Professionelle E-Mail, Kalender und Dokumentenverwaltung für dein Team. Arbeite effizient zusammen und bleibe überall produktiv.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          <ServiceCard
            icon={Mail}
            title="Gmail für Business"
            description="Professionelle E-Mail-Adressen mit deiner Domain, Spam-Schutz und unbegrenzter Speicherplatz."
          />
          <ServiceCard
            icon={Calendar}
            title="Google Kalender"
            description="Termine einfach planen und verwalten. Teile Kalender mit deinem Team und optimiere die Zusammenarbeit."
          />
          <ServiceCard
            icon={FileText}
            title="Google Drive"
            description="Speichere und teile Dateien sicher in der Cloud. Arbeite in Echtzeit an Dokumenten zusammen."
          />
          <ServiceCard
            icon={Users}
            title="Google Meet"
            description="Professionelle Videokonferenzen mit deinem Team oder Kunden. Einfach und sicher von überall."
          />
        </div>
      </motion.div>
    </div>
  );
};

export default GoogleWorkspace;