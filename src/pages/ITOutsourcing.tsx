import { motion } from "framer-motion";
import ServiceCard from "@/components/ServiceCard";
import { Server, Shield, Brain } from "lucide-react";

const ITOutsourcing = () => {
  return (
    <div className="container mx-auto px-6 sm:px-4 pt-24 pb-32 mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-light mb-6 px-4">
          IT-Outsourcing
        </h1>
        <p className="text-xl text-light-secondary mb-12 leading-relaxed px-4">
          Professionelle IT-Betreuung, Support und Schulungen für Ihr Unternehmen. Wir kümmern uns um Ihre gesamte IT-Infrastruktur, damit Sie sich auf Ihr Kerngeschäft konzentrieren können.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          <ServiceCard
            icon={Server}
            title="IT-Support"
            description="Persönlicher Support mit schnellen Reaktionszeiten. Unser erfahrenes Team steht Ihnen mit individueller Betreuung zur Seite - kein anonymes Callcenter, sondern echte Menschen, die Ihr Unternehmen kennen und verstehen."
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