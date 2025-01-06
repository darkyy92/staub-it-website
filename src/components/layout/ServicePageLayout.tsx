import { ReactNode } from "react";
import GridBackground from "@/components/hero/GridBackground";

interface ServicePageLayoutProps {
  children: ReactNode;
}

const ServicePageLayout = ({ children }: ServicePageLayoutProps) => {
  return (
    <div className="relative bg-dark">
      <GridBackground />
      <div className="relative">
        {children}
      </div>
    </div>
  );
};

export default ServicePageLayout;