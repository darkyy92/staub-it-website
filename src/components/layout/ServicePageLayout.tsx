import { ReactNode } from "react";
import GridBackground from "@/components/hero/GridBackground";

interface ServicePageLayoutProps {
  children: ReactNode;
}

const ServicePageLayout = ({ children }: ServicePageLayoutProps) => {
  return (
    <div className="relative min-h-screen bg-dark">
      <GridBackground />
      <div className="container mx-auto px-6 sm:px-4 pt-32 pb-32">
        {children}
      </div>
    </div>
  );
};

export default ServicePageLayout;