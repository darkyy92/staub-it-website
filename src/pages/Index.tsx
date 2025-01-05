import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import Testimonials from "../components/Testimonials";
import { motion } from "framer-motion";
import { Shield, Cloud, Server, Code, Brain } from "lucide-react";

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
    <div className="min-h-screen bg-dark flex flex-col">
      <Hero />
      
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="py-32 container mx-auto px-6 bg-dark"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Unsere Services</span>
          </h2>
          <p className="text-xl text-light-secondary max-w-2xl mx-auto">
            Entdecke unsere umfassenden IT-Dienstleistungen für dein Unternehmen.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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