import { NavigationLink, Service } from "@/types/navigation";

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
  },
  {
    title: "Cloud Services",
    description: "Sichere Cloud-Lösungen und Backup-Systeme",
    href: "/services#cloud",
  },
  {
    title: "Cybersecurity",
    description: "Umfassender Schutz vor digitalen Bedrohungen",
    href: "/services#security",
  },
];