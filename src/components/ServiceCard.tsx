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
      whileHover={{ y: -5, scale: 1.02 }}
      className="glass-card p-8 rounded-xl hover:border-primary/50 transition-colors duration-300 group"
    >
      <div className="flex items-start gap-6">
        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-light mb-4">{title}</h3>
          <p className="text-light-secondary text-lg leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;