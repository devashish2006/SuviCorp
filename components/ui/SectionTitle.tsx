import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <h2 className={`font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-navy ${className}`}>
      {children}
    </h2>
  );
};
