import { ReactNode } from "react";
import GridBackground from "@/components/hero/GridBackground";

interface ServicePageLayoutProps {
  children: ReactNode;
}

const ServicePageLayout = ({ children }: ServicePageLayoutProps) => {
  return (
    <div className="relative flex-1 min-h-[calc(100vh-160px)] bg-dark">
      <GridBackground />
      {children}
    </div>
  );
};

export default ServicePageLayout;