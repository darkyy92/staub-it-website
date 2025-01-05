import { motion } from "framer-motion";
import ServiceCard from "@/components/ServiceCard";
import { Server, Shield, Brain } from "lucide-react";

const ITOutsourcing = () => {
  return (
    <div className="container mx-auto px-4 py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-light mb-6">
          IT-Outsourcing
        </h1>
        <p className="text-xl text-light-secondary mb-12 leading-relaxed">
          Professionelle IT-Betreuung, Support und Schulungen für Ihr Unternehmen. Wir kümmern uns um Ihre gesamte IT-Infrastruktur, damit Sie sich auf Ihr Kerngeschäft konzentrieren können.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ServiceCard
            icon={Server}
            title="IT-Support"
            description="24/7 Support für alle IT-Fragen und Probleme. Schnelle Reaktionszeiten und kompetente Hilfe durch unser erfahrenes Team."
          />
          <ServiceCard
            icon={Shield}
            title="IT-Sicherheit"
            description="Umfassender Schutz Ihrer IT-Systeme vor Cyberangriffen, Viren und Datenverlust. Regelmäßige Updates und Backups inklusive."
          />
          <ServiceCard
            icon={Brain}
            title="IT-Beratung"
            description="Strategische Beratung für die Optimierung Ihrer IT-Infrastruktur. Wir analysieren Ihre Anforderungen und entwickeln passende Lösungen."
          />
          <ServiceCard
            icon={Server}
            title="IT-Wartung"
            description="Regelmäßige Wartung und Pflege Ihrer IT-Systeme. Proaktive Überwachung und Fehlerbehebung für einen reibungslosen Betrieb."
          />
        </div>
      </motion.div>
    </div>
  );
};

export default ITOutsourcing;