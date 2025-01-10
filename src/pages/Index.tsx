import Hero from "@/components/Hero";
import Partners from "@/components/partners/Partners";
import ServicesSection from "@/components/services/ServicesSection";
import LogoScroll from "@/components/LogoScroll";

const Index = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <Partners />
      <ServicesSection />
      <div className="py-32">
        <LogoScroll />
      </div>
    </div>
  );
};

export default Index;