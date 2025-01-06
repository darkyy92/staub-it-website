import { motion } from "framer-motion";
import { Tablet, Shield, Cloud, Laptop, Brain } from "lucide-react";
import ServicePageLayout from "@/components/layout/ServicePageLayout";

const Education = () => {
  return (
    <ServicePageLayout>
      <div className="container mx-auto px-6 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-light">
            IT-Lösungen für <span className="text-gradient">Bildungseinrichtungen</span>
          </h1>
          <p className="text-xl text-light-secondary max-w-3xl mx-auto">
            Moderne Technologielösungen für zeitgemässes Lernen und effiziente Verwaltung deiner Bildungseinrichtung.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-xl"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
              <Tablet className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-light mb-4">iPad Integration</h3>
            <p className="text-light-secondary">
              Nahtlose Integration von iPads in den Unterricht mit professioneller Einrichtung und Support.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card p-8 rounded-xl"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-light mb-4">Mobile Device Management</h3>
            <p className="text-light-secondary">
              Effiziente Verwaltung aller Geräte mit Jamf Pro/School für maximale Sicherheit und Kontrolle.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="glass-card p-8 rounded-xl"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
              <Cloud className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-light mb-4">Cloud-Lösungen</h3>
            <p className="text-light-secondary">
              Sichere Cloud-Speicherung und Zusammenarbeit für Schüler und Lehrkräfte.
            </p>
          </motion.div>
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