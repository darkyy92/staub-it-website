import { ReactNode } from "react";

interface PricePageLayoutProps {
  children: ReactNode;
}

const PricePageLayout = ({ children }: PricePageLayoutProps) => {
  return (
    <div className="relative bg-dark">
      {children}
    </div>
  );
};

export default PricePageLayout;