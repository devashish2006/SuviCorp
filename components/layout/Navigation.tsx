'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { PartnerModal } from '../ui/PartnerModal';

export const Navigation: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navLinks = [
    { href: '#about', label: 'Our Vision' },
    { href: '#features', label: 'Innovation Lab' },
    { href: '#services', label: 'Services' },
    { href: '#team', label: 'Team' },
    { href: '#pricing', label: 'Resources' },
  ];

  const openSearch = () => setIsSearchOpen(true);
  const closeSearch = () => setIsSearchOpen(false);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isSearchOpen) closeSearch();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[100] px-4 md:px-8 lg:px-12 py-4 md:py-5 bg-navy/95 backdrop-blur-xl border-b border-white/[0.06]">
        <div className="flex items-center justify-between max-w-[1920px] mx-auto w-full">
          <div className="flex items-center">
            {/* Text-only wordmark */}
            <div className="flex flex-col justify-center">
              <div className="font-playfair text-[1.5rem] md:text-[1.7rem] font-black tracking-tight leading-none">
                <span className="text-[#3b82f6]">Suvi</span><span className="text-white">corp</span>
              </div>
              <span
                className="text-[0.68rem] md:text-[0.72rem] text-white/60 mt-1 leading-none"
                style={{ fontFamily: 'Playfair Display, Georgia, serif', fontStyle: 'italic', fontWeight: 300 }}
              >
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
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-4 border-l border-white/20 pl-4">
              <button
                onClick={openSearch}
                className="text-white/75 hover:text-teal transition-colors"
                aria-label="Open search"
              >
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
              onClick={openSearch}
              className="flex items-center gap-2 text-white/75 text-[0.95rem] font-medium uppercase hover:text-teal transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Search
            </button>
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

      </nav>

      <PartnerModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Search Overlay */}
      {isSearchOpen && (
        <div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-start pt-32"
          style={{
            background: 'rgba(5, 10, 30, 0.96)',
            backdropFilter: 'blur(20px)',
            animation: 'fadeInSearch 0.2s ease',
          }}
          onClick={(e) => { if (e.target === e.currentTarget) closeSearch(); }}
        >
          <style>{`
            @keyframes fadeInSearch {
              from { opacity: 0; transform: translateY(-8px); }
              to   { opacity: 1; transform: translateY(0); }
            }
          `}</style>

          <div className="w-full max-w-2xl px-6">
            {/* Header row */}
            <div className="flex items-center justify-between mb-8">
              <p className="text-white/40 text-xs uppercase tracking-widest">Quick Navigation</p>
              <button
                onClick={closeSearch}
                className="text-white/40 hover:text-white transition-colors"
                aria-label="Close"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Nav chips */}
            <div className="flex flex-wrap gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeSearch}
                  className="px-5 py-3 rounded-xl bg-white/[0.05] border border-white/[0.08] text-white/70 text-sm font-medium hover:bg-[#3b82f6]/20 hover:text-white hover:border-[#3b82f6]/40 transition-all"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <p className="mt-8 text-white/20 text-sm text-center">Press <kbd className="px-2 py-0.5 rounded bg-white/10 text-white/40 font-mono text-xs">Esc</kbd> to close</p>
          </div>
        </div>
      )}
    </>
  );
};
