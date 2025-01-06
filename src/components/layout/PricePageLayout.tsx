import { ReactNode } from "react";

interface PricePageLayoutProps {
  children: ReactNode;
}

const PricePageLayout = ({ children }: PricePageLayoutProps) => {
  return (
    <div className="relative bg-dark">
      {/* Dark overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark/50 via-dark to-primary/5" />
      
      {/* Animated circles in background */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-primary/40 to-primary-light/40 rounded-full blur-[100px] opacity-60"
        />
        <div 
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-primary-dark/40 to-primary/40 rounded-full blur-[100px] opacity-40"
        />
      </div>
      {children}
    </div>
  );
};

export default PricePageLayout;