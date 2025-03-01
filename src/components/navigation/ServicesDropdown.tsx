import { Link } from "react-router-dom";
import { services } from "@/constants/navigation";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export const ServicesDropdown = () => {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="bg-transparent text-lg font-semibold text-light hover:text-primary hover:bg-transparent">
        Dienstleistungen
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul 
          className="grid w-[400px] gap-4 p-6 rounded-xl arc-blur-element chrome-blur glass-dropdown transition-all duration-100 ease-in-out data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:duration-100 data-[motion^=to-]:duration-75 data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52"
          style={{ 
            backgroundColor: "rgba(28, 26, 24, 0.97)", 
            position: "relative",
            border: "none",
            boxShadow: "0 25px 80px -15px rgba(0, 0, 0, 1), 0 15px 40px -10px rgba(0, 0, 0, 0.85)"
          }}>
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <li key={service.title}>
                <NavigationMenuLink asChild>
                  <Link
                    to={service.href}
                    className="block select-none rounded-md p-4 leading-none no-underline outline-none transition-all duration-300 hover:bg-dark-secondary/80 hover:text-primary group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-dark-secondary/80 backdrop-blur-sm group-hover:bg-primary/10 transition-all duration-300 shadow-md group-hover:shadow-lg group-hover:shadow-primary/10">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-base font-semibold leading-none text-light/90 group-hover:text-primary transition-all duration-300">
                          {service.title}
                        </div>
                        <p className="mt-2 line-clamp-2 text-sm leading-snug text-light/50 group-hover:text-light/70 transition-all duration-300">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
            );
          })}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};