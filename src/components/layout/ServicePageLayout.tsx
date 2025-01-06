import { ReactNode } from "react";
import GridBackground from "@/components/hero/GridBackground";

interface ServicePageLayoutProps {
  children: ReactNode;
}

const ServicePageLayout = ({ children }: ServicePageLayoutProps) => {
  return (
    <div className="relative h-full w-full bg-dark">
      <GridBackground />
      {children}
    </div>
  );
};

export default ServicePageLayout;