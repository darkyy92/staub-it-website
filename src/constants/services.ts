import { Service } from "@/types/service";
import { Server, Shield, FileText, Cloud, Code, Brain } from "lucide-react";

export const services: Service[] = [
  {
    icon: Server,
    title: "IT-Outsourcing",
    description:
      "Professionelle IT-Betreuung, Support und Schulungen für dein Unternehmen.",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description:
      "Umfassender Schutz deiner Systeme vor modernen Bedrohungen.",
  },
  {
    icon: FileText,
    title: "Google Workspace",
    description:
      "Professionelle E-Mail, Kalender und Dokumentenverwaltung für dein Team.",
  },
  {
    icon: Cloud,
    title: "Cloud Backup",
    description: "Sichere und zuverlässige Datensicherung in der Cloud.",
  },
  {
    icon: Code,
    title: "Webdesign",
    description:
      "Moderne und responsive Webseiten für deinen professionellen Auftritt.",
  },
  {
    icon: Brain,
    title: "AI-Lösungen",
    description:
      "Innovative KI-Integrationen für optimierte Geschäftsprozesse.",
  },
];