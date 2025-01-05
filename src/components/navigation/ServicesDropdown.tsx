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
        <ul className="grid w-[400px] gap-3 p-6 bg-dark-secondary/95 backdrop-blur-md border border-gray-800/30 rounded-xl shadow-xl">
          {services.map((service) => (
            <li key={service.title}>
              <NavigationMenuLink asChild>
                <Link
                  to={service.href}
                  className="block select-none space-y-2 rounded-md p-4 leading-none no-underline outline-none transition-colors hover:bg-primary/20 hover:text-primary"
                >
                  <div className="text-base font-medium leading-none text-light mb-2">
                    {service.title}
                  </div>
                  <p className="line-clamp-2 text-sm leading-snug text-light-secondary">
                    {service.description}
                  </p>
                </Link>
              </NavigationMenuLink>
            </li>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};