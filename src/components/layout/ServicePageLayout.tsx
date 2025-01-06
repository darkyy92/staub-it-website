import { ReactNode } from "react";
import GridBackground from "@/components/hero/GridBackground";

interface ServicePageLayoutProps {
  children: ReactNode;
}

const ServicePageLayout = ({ children }: ServicePageLayoutProps) => {
  return (
    <div className="relative min-h-full w-full bg-dark">
      <GridBackground />
      <div className="relative h-full">
        {children}
      </div>
    </div>
  );
};

export default ServicePageLayout;