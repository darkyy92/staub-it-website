import Hero from "@/components/Hero";
import ServicesSection from "@/components/services/ServicesSection";
import LogoScroll from "@/components/LogoScroll";

const Index = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <ServicesSection />
      <div className="mb-16">
        <LogoScroll />
      </div>
    </div>
  );
};

export default Index;