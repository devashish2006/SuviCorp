'use client';

import React from 'react';
import { SectionTag, SectionTitle, Button } from '../ui';

const values = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
        <path d="M17 3.34A9 9 0 0 1 21 12" />
        <path d="M7 3.34A9 9 0 0 0 3 12" />
      </svg>
    ),
    title: 'Top-Tier Experience',
    subtitle: '15+ years from leading firms',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: 'Rapid Development',
    subtitle: 'Months, not years',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <circle cx="12" cy="12" r="9" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: 'Global Partnerships',
    subtitle: 'Worldwide alliances',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="M17 11c0 4-5 9-5 9S7 15 7 11a5 5 0 0 1 10 0z" />
        <path d="M12 11v.01" />
        <path d="M3.34 7a10 10 0 0 1 17.32 0" />
        <path d="M3.34 17a10 10 0 0 0 17.32 0" />
      </svg>
    ),
    title: 'Collaborative Model',
    subtitle: 'Your team, extended',
  },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="bg-white py-16 md:py-24 px-[5%]">
      <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-center">
        {/* Image/Visual */}
        <div
          className="relative h-[300px] md:h-[420px] rounded-[20px] flex items-center justify-center overflow-hidden group cursor-default shadow-2xl"
          style={{ background: 'linear-gradient(135deg, #0a1628 0%, #0d1f3c 50%, #112244 100%)' }}
        >
          {/* Grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
              backgroundSize: '48px 48px',
            }}
          />
          {/* Top cyan glow */}
          <div
            className="absolute top-0 left-0 w-full h-64 pointer-events-none transition-opacity duration-700 opacity-60 group-hover:opacity-100"
            style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(6,182,212,0.25) 0%, transparent 70%)' }}
          />
          
          {/* SC Text Interactive */}
          <div className="relative flex items-center justify-center select-none z-10 transition-transform duration-1000 ease-in-out group-hover:scale-105">
            {/* The base SC that is visible when not hovered */}
            <div className="absolute inset-0 flex items-center justify-center transition-all duration-1000 ease-in-out group-hover:opacity-0 group-hover:scale-95">
              <span 
                className="font-playfair text-[5rem] md:text-[8rem] font-black tracking-tighter text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(to bottom right, rgba(255,255,255,0.15), rgba(255,255,255,0.05))' }}
              >
                SC
              </span>
            </div>

            {/* The expanding Suvicorp that is visible on hover */}
            <div className="relative flex items-center justify-center opacity-0 scale-[1.03] group-hover:opacity-100 group-hover:scale-100 transition-all duration-1000 ease-in-out">
              <span 
                className="font-playfair text-[3.5rem] md:text-[5.5rem] font-black tracking-tighter text-transparent bg-clip-text drop-shadow-[0_0_24px_rgba(59,130,246,0.6)]"
                style={{ backgroundImage: 'linear-gradient(to right, #3b82f6, #60a5fa)' }}
              >
                Suvi
              </span>
              <span 
                className="font-playfair text-[3.5rem] md:text-[5.5rem] font-black tracking-tighter text-transparent bg-clip-text drop-shadow-[0_0_24px_rgba(255,255,255,0.5)]"
                style={{ backgroundImage: 'linear-gradient(to right, #ffffff, #f8fafc)' }}
              >
                corp
              </span>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-2/5" style={{ background: 'linear-gradient(to top, rgba(6,182,212,0.12) 0%, transparent 100%)' }} />
        </div>

        {/* Content */}
        <div>
          <SectionTag>About Suvicorp</SectionTag>
          <SectionTitle className="mt-4 mb-4">
            Bridging Strategy & Technology
          </SectionTitle>
          <p className="text-slate-600 leading-relaxed my-4">
            Suvicorp was founded on a simple, powerful premise: the best consulting insights deserve the best enabling technology. We are the strategic technology partner for accounting and consulting firms worldwide, amplifying your expertise with a robust ecosystem of SAAS solutions and technical talent.
          </p>
          <p className="text-slate-600 leading-relaxed my-4">
            We enable our partners to deliver &ldquo;Big Four&rdquo; calibre technology solutions with the agility and cost-efficiency of a boutique firm. Our team brings together decades of experience from global consulting firms and specialized technology environments.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            {values.map((value, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-9 h-9 bg-blue-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 text-blue-accent">
                  {value.icon}
                </div>
                <div>
                  <strong className="block font-semibold text-[0.9rem] text-navy mb-0.5">
                    {value.title}
                  </strong>
                  <span className="text-[0.8rem] text-slate-600">{value.subtitle}</span>
                </div>
              </div>
            ))}
          </div>

          <Button onClick={() => window.dispatchEvent(new Event('openPartnerModal'))} variant="primary" className="mt-8 w-full md:w-auto justify-center">
            Explore Partnership Opportunities →
          </Button>
        </div>
      </div>
    </section>
  );
};
