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
        <ul className="grid w-[400px] gap-4 p-6 bg-dark border-primary/10 border rounded-xl shadow-2xl">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <li key={service.title}>
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
              </li>
            );
          })}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};