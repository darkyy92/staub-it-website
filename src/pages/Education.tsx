import { Tablet, Shield, Cloud, Laptop, Brain, GraduationCap } from "lucide-react";
import ServicePageLayout from "@/components/layout/ServicePageLayout";
import ServiceCard from "@/components/ServiceCard";
import ServiceCTA from "@/components/ServiceCTA";

const Education = () => {
  return (
    <ServicePageLayout>
      <div className="container mx-auto px-6 sm:px-4 pt-40 pb-32">
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-light mb-6 px-4">
            IT-Lösungen für Bildungseinrichtungen
          </h1>
          <p className="text-xl text-light-secondary mb-12 leading-relaxed px-4">
            Moderne Technologielösungen für zeitgemässes Lernen und effiziente Verwaltung deiner Bildungseinrichtung.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 mb-8">
            <ServiceCard
              icon={Tablet}
              title="iPad Integration"
              description="Nahtlose Integration von iPads in den Unterricht mit professioneller Einrichtung und Support."
            />
            <ServiceCard
              icon={Shield}
              title="Mobile Device Management"
              description="Effiziente Verwaltung aller Geräte mit Jamf Pro/School für maximale Sicherheit und Kontrolle."
            />
            <ServiceCard
              icon={Cloud}
              title="Cloud-Lösungen"
              description="Sichere Cloud-Speicherung und Zusammenarbeit für Schüler und Lehrkräfte."
            />
            <ServiceCard
              icon={GraduationCap}
              title="E-Learning Plattformen"
              description="Implementation und Betreuung von modernen Lernplattformen für interaktiven Unterricht."
            />
          </div>

          <div className="glass-card p-8 rounded-xl mb-8 mx-4">
            <h3 className="text-2xl font-bold text-light mb-4">Warum mit uns?</h3>
            <ul className="space-y-4 text-light-secondary">
              <li className="flex items-start gap-3">
                <Laptop className="w-6 h-6 text-primary shrink-0 mt-1" />
                <span>Langjährige Erfahrung in der Implementierung von IT-Lösungen im Bildungsbereich</span>
              </li>
              <li className="flex items-start gap-3">
                <Brain className="w-6 h-6 text-primary shrink-0 mt-1" />
                <span>Massgeschneiderte Lösungen für die spezifischen Anforderungen deiner Bildungseinrichtung</span>
              </li>
              <li className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-primary shrink-0 mt-1" />
                <span>Umfassender Support und Schulungen für Lehrkräfte und IT-Personal</span>
              </li>
            </ul>
          </div>

          <ServiceCTA text="Kostenloses Erstgespräch für Schulen" />
        </div>
      </div>
    </ServicePageLayout>
  );
};

export default Education;