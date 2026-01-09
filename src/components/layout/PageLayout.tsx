import type { ReactNode } from "react";

interface PageLayoutProps {
  children: ReactNode;
}

export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="min-h-screen py-10 md:py-20 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto w-full">
        {children}
      </div>
    </div>
  );
};