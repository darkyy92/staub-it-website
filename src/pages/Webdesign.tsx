import { motion } from "framer-motion";
import ServiceCard from "@/components/ServiceCard";
import { Code, Smartphone, Search, Gauge } from "lucide-react";

const Webdesign = () => {
  return (
    <div className="container mx-auto px-6 sm:px-4 pt-32 pb-32 mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-light mb-6 px-4">
          Webdesign
        </h1>
        <p className="text-xl text-light-secondary mb-12 leading-relaxed px-4">
          Moderne und responsive Webseiten für deinen professionellen Auftritt. Wir entwickeln massgeschneiderte Lösungen, die deine Zielgruppe begeistern.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          <ServiceCard
            icon={Code}
            title="Responsive Design"
            description="Deine Website passt sich automatisch an alle Bildschirmgrössen an und bietet optimale Benutzerfreundlichkeit."
          />
          <ServiceCard
            icon={Smartphone}
            title="Mobile First"
            description="Optimiert für mobile Geräte, damit deine Besucher auch unterwegs das beste Erlebnis haben."
          />
          <ServiceCard
            icon={Search}
            title="SEO Optimierung"
            description="Bessere Sichtbarkeit in Suchmaschinen durch professionelle Suchmaschinenoptimierung."
          />
          <ServiceCard
            icon={Gauge}
            title="Performance"
            description="Schnelle Ladezeiten und optimale Performance für ein besseres Nutzererlebnis."
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Webdesign;