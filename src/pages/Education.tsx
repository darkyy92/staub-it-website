import { motion } from "framer-motion";
import { Tablet, Shield, Cloud, Laptop, Brain, GraduationCap } from "lucide-react";
import ServicePageLayout from "@/components/layout/ServicePageLayout";
import ServiceCard from "@/components/ServiceCard";

const Education = () => {
  return (
    <ServicePageLayout>
      <div className="container mx-auto px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold mb-4 block">
            Bildung & Technologie
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-light">
            IT-Lösungen für <span className="text-gradient">Bildungseinrichtungen</span>
          </h1>
          <p className="text-xl text-light-secondary max-w-3xl mx-auto">
            Moderne Technologielösungen für zeitgemässes Lernen und effiziente Verwaltung deiner Bildungseinrichtung.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <ServiceCard
            icon={Tablet}
            title="iPad Integration"
            description="Nahtlose Integration von iPads in den Unterricht mit professioneller Einrichtung und Support."
          />
          <ServiceCard
            icon={Shield}
            title="Mobile Device Management"
            description="Effiziente Verwaltung aller Geräte mit Jamf Pro/School für maximale Sicherheit und Kontrolle."
          />
          <ServiceCard
            icon={Cloud}
            title="Cloud-Lösungen"
            description="Sichere Cloud-Speicherung und Zusammenarbeit für Schüler und Lehrkräfte."
          />
          <ServiceCard
            icon={GraduationCap}
            title="E-Learning Plattformen"
            description="Implementation und Betreuung von modernen Lernplattformen für interaktiven Unterricht."
          />
        </div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-xl mb-8"
          >
            <h3 className="text-2xl font-bold text-light mb-4">Warum mit uns?</h3>
            <ul className="space-y-4 text-light-secondary">
              <li className="flex items-start gap-3">
                <Laptop className="w-6 h-6 text-primary shrink-0 mt-1" />
                <span>Langjährige Erfahrung in der Implementierung von IT-Lösungen im Bildungsbereich</span>
              </li>
              <li className="flex items-start gap-3">
                <Brain className="w-6 h-6 text-primary shrink-0 mt-1" />
                <span>Massgeschneiderte Lösungen für die spezifischen Anforderungen deiner Bildungseinrichtung</span>
              </li>
              <li className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-primary shrink-0 mt-1" />
                <span>Umfassender Support und Schulungen für Lehrkräfte und IT-Personal</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </ServicePageLayout>
  );
};

export default Education;