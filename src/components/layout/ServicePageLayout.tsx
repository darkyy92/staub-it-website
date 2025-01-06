import { ReactNode } from "react";
import GridBackground from "@/components/hero/GridBackground";

interface ServicePageLayoutProps {
  children: ReactNode;
}

const ServicePageLayout = ({ children }: ServicePageLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-dark">
      <GridBackground />
      <div className="relative flex-1">
        {children}
      </div>
    </div>
  );
};

export default ServicePageLayout;