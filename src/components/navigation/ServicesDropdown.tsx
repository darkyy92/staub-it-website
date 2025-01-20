import { useState } from "react";
import { Link } from "react-router-dom";
import { services } from "@/constants/navigation";
import { motion } from "framer-motion";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const ServicesDropdown = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <NavigationMenuItem 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <NavigationMenuTrigger className="bg-transparent text-lg font-semibold text-light hover:text-primary hover:bg-transparent">
        Dienstleistungen
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ 
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 0.85,
            y: isHovered ? 0 : 10 
          }}
          transition={transition}
        >
          <ul className="grid w-[400px] gap-4 p-6 bg-dark border border-dark-secondary/20 rounded-xl shadow-2xl backdrop-blur-sm">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <motion.li 
                  key={service.title}
                  layout
                >
                  <NavigationMenuLink asChild>
                    <Link
                      to={service.href}
                      className="block select-none rounded-md p-4 leading-none no-underline outline-none transition-colors hover:bg-dark-secondary hover:text-primary group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-dark-secondary group-hover:bg-primary/10 transition-colors">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <div className="text-base font-semibold leading-none text-light/90 group-hover:text-primary transition-colors">
                            {service.title}
                          </div>
                          <p className="mt-2 line-clamp-2 text-sm leading-snug text-light/50 group-hover:text-light/70 transition-colors">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </NavigationMenuLink>
                </motion.li>
              );
            })}
          </ul>
        </motion.div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};