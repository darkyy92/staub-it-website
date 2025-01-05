import { motion } from "framer-motion";
import { Shield, Cloud, Server, Code, Brain } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";

const Services = () => {
  const services = [
    {
      icon: Server,
      title: "IT-Outsourcing",
      description:
        "Professionelle IT-Betreuung, Support und Schulungen für dein Unternehmen. Wir kümmern uns um deine gesamte IT-Infrastruktur.",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description:
        "Schütze dein Unternehmen vor Cyberangriffen mit unseren umfassenden Sicherheitslösungen und Überwachungssystemen.",
    },
    {
      icon: Cloud,
      title: "Cloud Backup",
      description:
        "Sichere deine Daten zuverlässig in der Cloud. Automatisierte Backups und schnelle Wiederherstellung im Notfall.",
    },
    {
      icon: Code,
      title: "Webdesign",
      description:
        "Moderne und responsive Webseiten für deinen professionellen Auftritt. Von der Konzeption bis zur Umsetzung.",
    },
    {
      icon: Brain,
      title: "AI-Lösungen",
      description:
        "Nutze die Kraft der künstlichen Intelligenz für dein Unternehmen. Maßgeschneiderte KI-Lösungen für optimierte Prozesse.",
    },
  ];

  return (
    <div className="min-h-screen bg-dark pt-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-light mb-4">Unsere Services</h1>
          <p className="text-light-secondary max-w-2xl mx-auto">
            Entdecke unsere umfassenden IT-Dienstleistungen für dein Unternehmen.
            Wir bieten maßgeschneiderte Lösungen für alle deine IT-Bedürfnisse.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;