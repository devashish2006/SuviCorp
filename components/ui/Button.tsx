import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'outline';
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  href, 
  onClick,
  variant = 'primary', 
  children, 
  className = '' 
}) => {
  const baseStyles = "inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-semibold text-[0.95rem] transition-all duration-200";
  
  const variantStyles = {
    primary: "bg-blue-accent text-white hover:bg-teal hover:-translate-y-0.5",
    outline: "border-[1.5px] border-white/30 text-white hover:border-teal hover:text-teal"
  };

  const combinedClasses = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
};
