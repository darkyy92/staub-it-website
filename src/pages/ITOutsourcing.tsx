import { motion } from "framer-motion";
import ServiceCard from "@/components/ServiceCard";
import { Server, Shield, Brain } from "lucide-react";
import ServicePageLayout from "@/components/layout/ServicePageLayout";

const ITOutsourcing = () => {
  return (
    <ServicePageLayout>
      <div className="container mx-auto px-6 sm:px-4 pt-40 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto relative z-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-light mb-6 px-4">
            IT-Outsourcing
          </h1>
          <p className="text-xl text-light-secondary mb-12 leading-relaxed px-4">
            Professionelle IT-Betreuung, Support und Schulungen für KMUs und Schulen. Wir kümmern uns um deine gesamte IT-Infrastruktur, damit du dich auf dein Kerngeschäft konzentrieren kannst.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 mb-8">
            <ServiceCard
              icon={Server}
              title="IT-Support"
              description="Persönlicher Support mit schnellen Reaktionszeiten. Unser erfahrenes Team steht dir mit individueller Betreuung zur Seite - kein anonymes Callcenter, sondern echte Menschen, die dein Unternehmen kennen und verstehen."
            />
            <ServiceCard
              icon={Shield}
              title="IT-Sicherheit"
              description="Umfassender Schutz deiner IT-Systeme vor Cyberangriffen, Viren und Datenverlust. Regelmässige Updates und Backups inklusive."
            />
            <ServiceCard
              icon={Brain}
              title="IT-Beratung"
              description="Strategische Beratung für die Optimierung deiner IT-Infrastruktur. Wir analysieren deine Anforderungen und entwickeln passende Lösungen."
            />
            <ServiceCard
              icon={Server}
              title="IT-Wartung"
              description="Regelmässige Wartung und Pflege deiner IT-Systeme. Proaktive Überwachung und Fehlerbehebung für einen reibungslosen Betrieb."
            />
          </div>
        </motion.div>
      </div>
    </ServicePageLayout>
  );
};

export default ITOutsourcing;
