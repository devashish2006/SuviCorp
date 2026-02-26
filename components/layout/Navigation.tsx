'use client';

import React from 'react';
import Link from 'next/link';

export const Navigation: React.FC = () => {
  const navLinks = [
    { href: '#features', label: 'Advantage' },
    { href: '#services', label: 'Services' },
    { href: '#pricing', label: 'Products' },
    { href: '#stories', label: 'Partners' },
    { href: '#about', label: 'About' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-[5%] py-5 bg-navy/95 backdrop-blur-xl border-b border-white/[0.06]">
      <div className="font-playfair text-[1.6rem] font-black text-white tracking-tight">
        SUVI<span className="text-teal"> Internationals</span>
      </div>
      
      <div className="hidden md:flex gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-white/75 text-[0.85rem] font-medium tracking-[0.5px] uppercase transition-colors duration-200 hover:text-teal"
          >
            {link.label}
          </Link>
        ))}
      </div>

      <Link
        href="#cta"
        className="bg-blue-accent text-white px-5 py-2.5 rounded-md text-[0.85rem] font-semibold transition-colors duration-200 hover:bg-teal"
      >
        Partner With Us →
      </Link>
    </nav>
  );
};
