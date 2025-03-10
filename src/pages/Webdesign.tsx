import { motion } from "framer-motion";
import ServiceCard from "@/components/ServiceCard";
import { Crown, Smartphone, Palette, Gauge } from "lucide-react";
import ServicePageLayout from "@/components/layout/ServicePageLayout";
import ServiceCTA from "@/components/ServiceCTA";

const Webdesign = () => {
  return (
    <ServicePageLayout>
      <div className="container mx-auto px-6 sm:px-4 pt-40 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto relative z-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-light mb-6">
            Webdesign
          </h1>
          <p className="text-xl text-light-secondary mb-12 leading-relaxed">
            Moderne und responsive Webseiten für deinen professionellen Auftritt. Wir entwickeln massgeschneiderte Lösungen, die deine Zielgruppe begeistern.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceCard
              icon={Crown}
              title="Zeitlose Ästhetik"
              description="Unsere Webseiten sind nicht nur funktional, sondern echte Hingucker – modern, stilvoll und einzigartig."
            />
            <ServiceCard
              icon={Smartphone}
              title="Mobile First"
              description="Optimiert für mobile Geräte, damit deine Besucher auch unterwegs das beste Erlebnis haben."
            />
            <ServiceCard
              icon={Palette}
              title="Individuelles Design"
              description="Individuell gestaltete Webseiten, die auf die Bedürfnisse deiner Marke und deiner Zielgruppe abgestimmt sind."
            />
            <ServiceCard
              icon={Gauge}
              title="Performance"
              description="Schnelle Ladezeiten und optimale Performance für ein besseres Nutzererlebnis."
            />
          </div>
          
          <ServiceCTA text="Webdesign unverbindlich anfragen" />
        </motion.div>
      </div>
    </ServicePageLayout>
  );
};

export default Webdesign;