import { motion } from "framer-motion";
import { Avatar } from "@/components/ui/avatar";

interface TeamMemberProps {
  image: string;
  name: string;
  role: string;
  delay?: number;
}

export const TeamMember = ({ image, name, role, delay = 0 }: TeamMemberProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="flex flex-col items-center group"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        className="relative"
      >
        <Avatar className="w-48 h-48 mb-4 shadow-xl">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-full"
          />
        </Avatar>
        <div className="absolute inset-0 rounded-full bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </motion.div>
      <h3 className="text-xl font-semibold text-light mb-1 group-hover:text-primary transition-colors duration-300">{name}</h3>
      <p className="text-light-secondary text-sm uppercase tracking-wider">{role}</p>
    </motion.div>
  );
};