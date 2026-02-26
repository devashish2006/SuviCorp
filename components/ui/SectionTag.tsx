import React from 'react';

interface SectionTagProps {
  children: React.ReactNode;
  variant?: 'blue' | 'teal';
}

export const SectionTag: React.FC<SectionTagProps> = ({ 
  children, 
  variant = 'blue' 
}) => {
  const variantStyles = {
    blue: "bg-blue-accent/10 text-blue-accent",
    teal: "bg-teal/15 text-teal"
  };

  return (
    <span className={`inline-block text-xs font-semibold tracking-[1.5px] uppercase px-4 py-1.5 rounded-full ${variantStyles[variant]}`}>
      {children}
    </span>
  );
};
