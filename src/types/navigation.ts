import { LucideIcon } from "lucide-react";

export interface NavigationLink {
  path: string;
  label: string;
}

export interface Service {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
}