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
      className="glass-card p-6 sm:p-8 rounded-xl hover:border-primary/50 transition-colors duration-300 group min-h-[224px] w-full"
    >
      <div className="flex flex-col h-full">
        <div className="flex items-start sm:items-center gap-4 sm:gap-6">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
            <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-light break-words">{title}</h3>
        </div>
        <div className="mt-4 sm:mt-6 flex-1">
          <p className="text-base sm:text-lg text-light-secondary leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;