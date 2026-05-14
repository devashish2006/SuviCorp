'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { PartnerModal } from '../ui/PartnerModal';

export const Navigation: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#vision', label: 'Our Vision' },
    { href: '#innovation-lab', label: 'Innovation Lab', icon: '🧪' },
    { href: '#services', label: 'Services' },
    { href: '#team', label: 'Team' },
    { href: '#resources', label: 'Resources' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] px-4 md:px-8 lg:px-12 py-4 md:py-5 bg-navy/95 backdrop-blur-xl border-b border-white/[0.06]">
      <div className="flex items-center justify-between max-w-[1920px] mx-auto w-full">
        <div className="flex items-center gap-3">
          {/* SVG Logo (3 arrows going up like buildings) - spans both lines */}
          <svg width="42" height="42" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
            {/* Left Arrow */}
            <path d="M25 45 L25 80 L35 80 L35 45 L40 45 L30 30 L20 45 Z" fill="#ffffff" />
            {/* Middle Arrow (Taller, Teal) */}
            <path d="M45 35 L45 80 L55 80 L55 35 L60 35 L50 20 L40 35 Z" fill="#06b6d4" />
            {/* Right Arrow */}
            <path d="M65 45 L65 80 L75 80 L75 45 L80 45 L70 30 L60 45 Z" fill="#ffffff" />
            {/* Base swoosh */}
            <path d="M20 85 Q 50 70 80 85 L 80 90 Q 50 75 20 90 Z" fill="#06b6d4" />
          </svg>
          
          <div className="flex flex-col justify-center">
            <div className="font-playfair text-[1.4rem] md:text-[1.6rem] font-black text-white tracking-tight leading-none">
              Suvicorp<sup className="text-[0.6em] font-medium ml-0.5">TM</sup>
            </div>
            <span className="text-[0.65rem] text-white/70 uppercase tracking-widest mt-1.5 leading-none">
              Enterprise Intelligence, Engineered for You
            </span>
          </div>
        </div>

        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-1 text-white/75 text-[0.85rem] font-medium tracking-[0.5px] uppercase transition-colors duration-200 hover:text-teal"
            >
              {link.icon && <span>{link.icon}</span>}
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-4 border-l border-white/20 pl-4">
            <button className="text-white/75 hover:text-teal transition-colors" aria-label="Search">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-accent text-white px-5 py-2.5 rounded-md text-[0.85rem] font-semibold transition-colors duration-200 hover:bg-teal"
            >
              Reach Us →
            </button>
          </div>
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
            Reach Us →
          </button>
        </div>
      )}

      <PartnerModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </nav>
  );
};
