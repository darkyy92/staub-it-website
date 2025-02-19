import { motion } from "framer-motion";
import ServiceCard from "@/components/ServiceCard";
import { Shield, Lock, Eye, Bell } from "lucide-react";
import ServicePageLayout from "@/components/layout/ServicePageLayout";
import ServiceCTA from "@/components/ServiceCTA";

const Cybersecurity = () => {
  return (
    <ServicePageLayout>
      <div className="container mx-auto px-6 sm:px-4 pt-40 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto relative z-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-light mb-6">
            Cybersecurity
          </h1>
          <p className="text-xl text-light-secondary mb-12 leading-relaxed">
            Schütze dein Unternehmen vor Cyberangriffen mit unseren umfassenden Sicherheitslösungen und Überwachungssystemen. Wir bieten dir modernste Technologien und proaktiven Schutz.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceCard
              icon={Shield}
              title="Endpoint Security"
              description="Umfassender Schutz für alle deine Geräte mit modernster Antivirus-Software und Endpoint Detection and Response (EDR) Systemen."
            />
            <ServiceCard
              icon={Lock}
              title="Firewall & VPN"
              description="Sichere Netzwerkinfrastruktur mit Next-Generation Firewalls und verschlüsselten VPN-Verbindungen für sicheres Remote-Arbeiten."
            />
            <ServiceCard
              icon={Eye}
              title="Security Monitoring"
              description="24/7 Überwachung deiner Systeme mit automatischer Erkennung und Abwehr von Bedrohungen durch unser Security Operations Center."
            />
            <ServiceCard
              icon={Bell}
              title="Incident Response"
              description="Schnelle und professionelle Reaktion auf Sicherheitsvorfälle mit unserem erfahrenen Security-Team und bewährten Notfallplänen."
            />
          </div>

          <ServiceCTA text="Sicherheitsanalyse vereinbaren" />
        </motion.div>
      </div>
    </ServicePageLayout>
  );
};

export default Cybersecurity;