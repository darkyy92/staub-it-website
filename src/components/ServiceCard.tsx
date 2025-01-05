import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const ServiceCard = ({ title, description, icon: Icon }: ServiceCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-dark-secondary p-6 rounded-lg border border-gray-800 hover:border-primary transition-colors"
    >
      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-xl font-semibold text-light mb-2">{title}</h3>
      <p className="text-light-secondary">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;