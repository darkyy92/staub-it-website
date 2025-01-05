import Hero from "@/components/Hero";
import ServicesSection from "@/components/services/ServicesSection";
import Testimonials from "@/components/Testimonials";

/**
 * Index Page Component
 * 
 * The main landing page of the application, consisting of three main sections:
 * 1. Hero - The main banner section with call-to-action buttons
 * 2. Services - A grid of service offerings
 * 3. Testimonials - Customer reviews and feedback
 */
const Index = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <ServicesSection />
      <Testimonials />
    </div>
  );
};

export default Index;