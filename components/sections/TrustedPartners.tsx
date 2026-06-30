'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const partners = [
  {
    id: 'fsnm',
    name: 'FSNM',
    logo: '/FSNM.jpeg',
    description: 'Financial Services & Management',
    accentColor: 'from-blue-500/20 to-cyan-400/20',
    borderColor: 'border-blue-400/30',
    glowColor: 'shadow-blue-500/20',
    bgClass: 'bg-white',
  },
  {
    id: 'gcas',
    name: 'GCAS',
    logo: '/GCAS.jpeg',
    description: 'Global Consulting & Advisory Services',
    accentColor: 'from-teal/20 to-emerald-400/20',
    borderColor: 'border-teal/30',
    glowColor: 'shadow-teal/20',
    bgClass: 'bg-white',
  },
  {
    id: 'snr',
    name: 'SNR',
    logo: '/SNR.jpeg',
    description: 'Strategic & Network Relations',
    accentColor: 'from-purple-500/20 to-indigo-400/20',
    borderColor: 'border-purple-400/30',
    glowColor: 'shadow-purple-500/20',
    bgClass: 'bg-white',
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

export const TrustedPartners: React.FC = () => {
  const { ref: sectionRef, inView } = useInView(0.1);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section
      id="trusted-partners"
      ref={sectionRef}
      className="relative bg-[#040d1a] py-24 md:py-32 overflow-hidden"
    >
      {/* ── Background ambience ── */}
      <div className="pointer-events-none absolute inset-0">
        {/* Radial glow top-left */}
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[120px]" />
        {/* Radial glow bottom-right */}
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-teal/10 blur-[120px]" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        {/* Animated orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-blue-500/5 animate-spin-very-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-teal/5 animate-spin-reverse-slow" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-[5%]">

        {/* ── Header ── */}
        <div
          className="text-center mb-16 md:mb-20"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(32px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
          }}
        >
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal/30 bg-teal/5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-teal animate-ping-slow" />
            <span className="text-xs font-semibold tracking-[0.18em] uppercase text-teal/90">
              Trusted by Our Partners
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
            Powering the World&apos;s{' '}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-blue-400 via-teal to-cyan-300 bg-clip-text text-transparent">
                Leading Firms
              </span>
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 via-teal to-cyan-300 opacity-60 blur-sm" />
            </span>
          </h2>

          <p className="mt-5 text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            A growing network of elite accounting and consulting partners who trust
            Suvicorp to deliver technology that matters.
          </p>
        </div>

        {/* ── Partner Cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {partners.map((partner, index) => {
            const isHovered = hoveredId === partner.id;
            return (
              <div
                key={partner.id}
                className="group relative"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.96)',
                  transition: `opacity 0.7s ease ${index * 0.15 + 0.2}s, transform 0.7s ease ${index * 0.15 + 0.2}s`,
                }}
                onMouseEnter={() => setHoveredId(partner.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Card glow ring */}
                <div
                  className={`absolute -inset-[1px] rounded-2xl bg-gradient-to-br ${partner.accentColor} blur-sm transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                />

                {/* Card body */}
                <div
                  className={`relative flex flex-col items-center p-8 rounded-2xl bg-white/[0.035] border ${partner.borderColor} backdrop-blur-sm overflow-hidden transition-all duration-500 ${isHovered ? `shadow-2xl ${partner.glowColor} -translate-y-2` : 'translate-y-0'}`}
                  style={{ willChange: 'transform' }}
                >
                  {/* Inner shimmer */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${partner.accentColor} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                  />

                  {/* Animated corner accent */}
                  <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden">
                    <div
                      className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${partner.accentColor} rotate-45 translate-x-16 -translate-y-16 transition-transform duration-700 group-hover:translate-x-10 group-hover:-translate-y-10`}
                    />
                  </div>

                  {/* Logo container */}
                  <div className="relative z-10 mb-6">
                    {/* Floating ring behind logo */}
                    <div
                      className={`absolute -inset-3 rounded-3xl border ${partner.borderColor} opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105`}
                    />
                    <div
                      className={`w-44 h-24 rounded-2xl overflow-hidden border-2 ${partner.borderColor} shadow-lg transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl ${partner.glowColor} ${partner.bgClass} flex items-center justify-center p-3`}
                    >
                      <Image
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        width={160}
                        height={80}
                        className="w-full h-full object-contain"
                        unoptimized
                      />
                    </div>
                  </div>

                  {/* Partner name */}
                  <h3 className="relative z-10 text-2xl font-black tracking-wider text-white mb-1.5 group-hover:tracking-widest transition-all duration-300">
                    {partner.name}
                  </h3>

                  {/* Description */}
                  <p className="relative z-10 text-xs text-slate-400 text-center leading-relaxed max-w-[14ch] group-hover:text-slate-300 transition-colors duration-300">
                    {partner.description}
                  </p>

                  {/* Verified badge */}
                  <div className="relative z-10 mt-5 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                    <svg className="w-3 h-3 text-teal" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[10px] font-semibold text-slate-400 tracking-widest uppercase">Verified Partner</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Marquee strip ── */}
        <div
          className="mt-20 overflow-hidden"
          style={{
            opacity: inView ? 1 : 0,
            transition: 'opacity 0.8s ease 0.7s',
          }}
        >
          <div className="flex items-center gap-2 mb-5 justify-center">
            <div className="h-px flex-1 max-w-[120px] bg-gradient-to-r from-transparent to-slate-700" />
            <span className="text-[10px] font-semibold tracking-[0.22em] uppercase text-slate-500">
              Our Partnership Network
            </span>
            <div className="h-px flex-1 max-w-[120px] bg-gradient-to-l from-transparent to-slate-700" />
          </div>

          <div 
            className="relative"
            style={{ 
              maskImage: 'linear-gradient(to right, transparent, black 120px, black calc(100% - 120px), transparent)', 
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 120px, black calc(100% - 120px), transparent)' 
            }}
          >
            {/* Scrolling track */}
            <div className="flex gap-10 animate-marquee-partners whitespace-nowrap w-max">
              {[...partners, ...partners, ...partners, ...partners].map((p, i) => (
                <div key={i} className="inline-flex items-center gap-3 shrink-0">
                  <div className={`w-16 h-8 rounded-lg overflow-hidden border border-white/10 flex-shrink-0 ${p.bgClass} flex items-center justify-center p-1`}>
                    <Image src={p.logo} alt={p.name} width={56} height={28} className="w-full h-full object-contain" unoptimized />
                  </div>
                  <span className="text-slate-500 font-bold text-sm tracking-wider">{p.name}</span>
                  <span className="text-slate-700 text-xl font-light">·</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Stats row ── */}
        <div
          className="mt-16 grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.8s ease 0.9s, transform 0.8s ease 0.9s',
          }}
        >
          {[
            { value: '3+', label: 'Active Partners' },
            { value: '100%', label: 'Retention Rate' },
            { value: '15+', label: 'Countries Served' },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center gap-1 text-center">
              <span className="text-2xl md:text-3xl font-black bg-gradient-to-r from-blue-400 via-teal to-cyan-300 bg-clip-text text-transparent">
                {stat.value}
              </span>
              <span className="text-[11px] text-slate-500 tracking-widest uppercase font-medium">{stat.label}</span>
            </div>
          ))}
        </div>

      </div>

      {/* ── Global styles for this section ── */}
      <style jsx>{`
        @keyframes marquee-partners {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-partners {
          animation: marquee-partners 22s linear infinite;
        }
        @keyframes ping-slow {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.3; transform: scale(2); }
        }
        .animate-ping-slow {
          animation: ping-slow 2s ease-in-out infinite;
        }
        @keyframes spin-very-slow {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to   { transform: translate(-50%, -50%) rotate(360deg); }
        }
        .animate-spin-very-slow {
          animation: spin-very-slow 40s linear infinite;
        }
        @keyframes spin-reverse-slow {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to   { transform: translate(-50%, -50%) rotate(-360deg); }
        }
        .animate-spin-reverse-slow {
          animation: spin-reverse-slow 28s linear infinite;
        }
      `}</style>
    </section>
  );
};
