'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { PartnerModal } from '../ui/PartnerModal';

export const Navigation: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#features', label: 'Advantage' },
    { href: '#services', label: 'Services' },
    { href: '#pricing', label: 'Products' },
    { href: '#stories', label: 'Partners' },
    { href: '#about', label: 'About' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] px-[5%] py-4 md:py-5 bg-navy/95 backdrop-blur-xl border-b border-white/[0.06]">
      <div className="flex items-center justify-between">
        <div className="font-playfair text-[1.4rem] md:text-[1.6rem] font-black text-white tracking-tight">
          SUVI<span className="text-teal"> Internationals</span>
        </div>

        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/75 text-[0.85rem] font-medium tracking-[0.5px] uppercase transition-colors duration-200 hover:text-teal"
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-accent text-white px-5 py-2.5 rounded-md text-[0.85rem] font-semibold transition-colors duration-200 hover:bg-teal"
          >
            Partner With Us →
          </button>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 pb-4 flex flex-col gap-4 border-t border-white/10 pt-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white/75 text-[0.95rem] font-medium tracking-[0.5px] uppercase hover:text-teal transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              setIsModalOpen(true);
            }}
            className="bg-blue-accent text-white px-5 py-3 mt-2 rounded-md text-[0.95rem] font-semibold text-center hover:bg-teal"
          >
            Partner With Us →
          </button>
        </div>
      )}

      <PartnerModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </nav>
  );
};
