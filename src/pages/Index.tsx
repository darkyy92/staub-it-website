import Hero from "@/components/Hero";
import ServicesSection from "@/components/services/ServicesSection";
import PartnerLogos from "@/components/PartnerLogos";

const Index = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <PartnerLogos />
      <ServicesSection />
    </div>
  );
};

export default Index;