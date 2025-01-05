import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import Testimonials from "../components/Testimonials";
import { Shield, Cloud, Server, Code, Brain } from "lucide-react";
import { motion } from "framer-motion";

const Index = () => {
  const services = [
    {
      icon: Server,
      title: "IT-Outsourcing",
      description:
        "Professionelle IT-Betreuung, Support und Schulungen für dein Unternehmen.",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description:
        "Umfassender Schutz deiner Systeme vor modernen Bedrohungen.",
    },
    {
      icon: Cloud,
      title: "Cloud Backup",
      description: "Sichere und zuverlässige Datensicherung in der Cloud.",
    },
    {
      icon: Code,
      title: "Webdesign",
      description:
        "Moderne und responsive Webseiten für deinen professionellen Auftritt.",
    },
    {
      icon: Brain,
      title: "AI-Lösungen",
      description:
        "Innovative KI-Integrationen für optimierte Geschäftsprozesse.",
    },
  ];

  return (
    <div className="bg-dark min-h-screen">
      <Hero />
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="py-20 container mx-auto px-6"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-light mb-4">
            Unsere Services
          </h2>
          <p className="text-light-secondary max-w-2xl mx-auto">
            Entdecke unsere umfassenden IT-Dienstleistungen für dein Unternehmen.
          </p>
        </div>
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
      </motion.section>
      <Testimonials />
    </div>
  );
};

export default Index;