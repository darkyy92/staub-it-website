import { Service } from "@/types/service";
import { Server, Shield, FileText, Cloud, Code, Brain } from "lucide-react";

export const services: Service[] = [
  {
    icon: Server,
    title: "IT-Outsourcing",
    description:
      "Professionelle IT-Betreuung, Support und Schulungen für KMUs und Schulen.",
    path: "it-outsourcing"
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description:
      "Umfassender Schutz deiner Systeme vor modernen Bedrohungen.",
    path: "cybersecurity"
  },
  {
    icon: FileText,
    title: "Google Workspace",
    description:
      "Professionelle E-Mail, Kalender und Dokumentenverwaltung für dein Team.",
    path: "google-workspace"
  },
  {
    icon: Cloud,
    title: "Cloud Backup",
    description: "Sichere und zuverlässige Datensicherung in der Cloud.",
    path: "cloud-backup"
  },
  {
    icon: Code,
    title: "Webdesign",
    description:
      "Moderne und responsive Webseiten für deinen professionellen Auftritt.",
    path: "webdesign"
  },
  {
    icon: Brain,
    title: "AI-Lösungen",
    description:
      "Innovative KI-Integrationen für optimierte Geschäftsprozesse.",
    path: "ai-solutions"
  }
];