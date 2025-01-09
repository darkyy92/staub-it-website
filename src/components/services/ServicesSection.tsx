import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { services } from "@/constants/services";
import ServiceCard from "@/components/ServiceCard";

/**
 * ServicesSection Component
 * 
 * Displays a grid of service cards with animations and responsive layout.
 * Each card represents a different service offering with an icon, title,
 * and description.
 */
const ServicesSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="py-32 container mx-auto px-6"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-gradient">Unser Angebot</span>
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
            <Link 
              to={`/services/${service.path}`} 
              className="block h-full"
            >
              <ServiceCard {...service} />
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default ServicesSection;