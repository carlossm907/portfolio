import React from 'react';

interface GlitchTextProps {
  children: React.ReactNode;
  className?: string;
}

export const GlitchText = ({ children, className = '' }: GlitchTextProps) => {
  return (
    <span className={`relative inline-block ${className}`}>
      <span className="relative z-10">{children}</span>
      <span className="absolute top-0 left-0 -z-10 text-green-400 opacity-70 animate-glitch-1" aria-hidden="true">
        {children}
      </span>
      <span className="absolute top-0 left-0 -z-10 text-purple-500 opacity-70 animate-glitch-2" aria-hidden="true">
        {children}
      </span>
    </span>
  );
};