import { motion } from "framer-motion";
import ServiceCard from "@/components/ServiceCard";
import { Brain, Bot, LineChart, Workflow } from "lucide-react";
import ServicePageLayout from "@/components/layout/ServicePageLayout";

const AISolutions = () => {
  return (
    <ServicePageLayout>
      <div className="container mx-auto px-6 sm:px-4 pt-32 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto relative z-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-light mb-6">
            AI-Lösungen
          </h1>
          <p className="text-xl text-light-secondary mb-12 leading-relaxed">
            Innovative KI-Integrationen für optimierte Geschäftsprozesse. Nutze die Kraft der künstlichen Intelligenz für dein Unternehmen.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceCard
              icon={Brain}
              title="KI-Integration"
              description="Integration von KI-Lösungen in deine bestehenden Systeme für automatisierte Prozesse und bessere Entscheidungen."
            />
            <ServiceCard
              icon={Bot}
              title="Chatbots"
              description="Intelligente Chatbots für Kundenservice und Support, die rund um die Uhr verfügbar sind."
            />
            <ServiceCard
              icon={LineChart}
              title="Predictive Analytics"
              description="Vorhersagemodelle für bessere Geschäftsentscheidungen basierend auf deinen Daten."
            />
            <ServiceCard
              icon={Workflow}
              title="Prozessautomatisierung"
              description="Automatisiere wiederkehrende Aufgaben mit KI und spare Zeit und Ressourcen."
            />
          </div>
        </motion.div>
      </div>
    </ServicePageLayout>
  );
};

export default AISolutions;