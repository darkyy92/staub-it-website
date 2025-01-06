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
      className="flex flex-col items-center"
    >
      <Avatar className="w-48 h-48 mb-4 hover:scale-105 transition-transform duration-300">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-full"
        />
      </Avatar>
      <h3 className="text-xl font-semibold text-light mb-1">{name}</h3>
      <p className="text-light-secondary text-sm uppercase tracking-wider">{role}</p>
    </motion.div>
  );
};