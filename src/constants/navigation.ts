import { NavigationLink, Service } from "@/types/navigation";
import { Server, Cloud, Shield } from "lucide-react";

export const navigationLinks: NavigationLink[] = [
  { path: "/", label: "Home" },
  { path: "/about", label: "Über uns" },
  { path: "/contact", label: "Kontakt" },
];

export const services: Service[] = [
  {
    title: "IT Support",
    description: "Professionelle IT-Betreuung und Support für Ihr Unternehmen",
    href: "/services#it-support",
    icon: Server
  },
  {
    title: "Cloud Services",
    description: "Sichere Cloud-Lösungen und Backup-Systeme",
    href: "/services#cloud",
    icon: Cloud
  },
  {
    title: "Cybersecurity",
    description: "Umfassender Schutz vor digitalen Bedrohungen",
    href: "/services#security",
    icon: Shield
  },
];