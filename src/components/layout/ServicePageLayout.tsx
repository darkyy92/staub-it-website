import { ReactNode } from "react";
import GridBackground from "@/components/hero/GridBackground";

interface ServicePageLayoutProps {
  children: ReactNode;
}

const ServicePageLayout = ({ children }: ServicePageLayoutProps) => {
  return (
    <div className="h-full w-full">
      <GridBackground />
      <div className="relative h-full">
        {children}
      </div>
    </div>
  );
};

export default ServicePageLayout;