import { NavigationLink, Service } from "@/types/navigation";
import { Server, Shield, FileText, Cloud, Code, Brain, GraduationCap } from "lucide-react";

export const navigationLinks: NavigationLink[] = [
  { path: "/prices", label: "Preise" },
  { path: "/about", label: "Über uns" },
  { path: "/contact", label: "Kontakt" },
];

export const services: Service[] = [
  {
    title: "IT-Outsourcing",
    description: "Professionelle IT-Betreuung, Support und Schulungen für KMUs und Schulen",
    href: "/services/it-outsourcing",
    icon: Server
  },
  {
    title: "Education",
    description: "IT-Lösungen für moderne Bildungseinrichtungen",
    href: "/services/education",
    icon: GraduationCap
  },
  {
    title: "Cybersecurity",
    description: "Umfassender Schutz deiner Systeme vor modernen Bedrohungen",
    href: "/services/cybersecurity",
    icon: Shield
  },
  {
    title: "Google Workspace",
    description: "Professionelle E-Mail, Kalender und Dokumentenverwaltung für dein Team",
    href: "/services/google-workspace",
    icon: FileText
  },
  {
    title: "Cloud Backup",
    description: "Sichere und zuverlässige Datensicherung in der Cloud",
    href: "/services/cloud-backup",
    icon: Cloud
  },
  {
    title: "Webdesign",
    description: "Moderne und responsive Webseiten für deinen professionellen Auftritt",
    href: "/services/webdesign",
    icon: Code
  },
  {
    title: "AI-Lösungen",
    description: "Innovative KI-Integrationen für optimierte Geschäftsprozesse",
    href: "/services/ai-solutions",
    icon: Brain
  }
];