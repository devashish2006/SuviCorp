'use client';

import React, { useEffect, useRef } from 'react';
import { SectionTag, SectionTitle } from '../ui';

const features = [
  {
    number: '01',
    icon: '🏗️',
    title: 'Architected by Industry Veterans',
    description:
      'Our solutions are designed by financial architects with over 15 years of experience from top-tier firms. Every feature is purpose-built to solve real-world financial and accounting challenges.',
  },
  {
    number: '02',
    icon: '⚡',
    title: 'Elite Efficiency, Exceptional Value',
    description:
      'We replicate the sophistication and power of multi-million-dollar technology platforms at a fraction of the cost and time. Rapid, high-fidelity development at competitive pricing.',
  },
  {
    number: '03',
    icon: '🎯',
    title: 'Focus on Your Core Business',
    description:
      'Our alliance model allows you to offer cutting-edge technology solutions without diverting focus, capital, or resources from your core consulting practice.',
  },
  {
    number: '04',
    icon: '🔧',
    title: 'Bespoke SAAS Development',
    description:
      'Custom, cloud-based software tools tailored to your specific needs. From consolidation engines to automated financial reporting dashboards.',
  },
  {
    number: '05',
    icon: '👥',
    title: 'Dedicated Expert Hub',
    description:
      'Access a curated ecosystem of technology professionals, each a specialist in financial systems, data analytics, and software development.',
  },
  {
    number: '06',
    icon: '🚀',
    title: 'Financial Transformation Enablement',
    description:
      'Tools and platforms that power digital transformation. Our solutions automate complex processes, deliver AI-driven insights, and cut delivery timelines dramatically.',
  },
];

export const Features: React.FC = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = parseInt(el.dataset.delay || '0', 10);
            setTimeout(() => {
              el.style.opacity = '1';
              el.style.transform = 'translateY(0)';
            }, delay);
            cardObserver.unobserve(el);
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card, i) => {
      if (card) {
        card.style.opacity = '0';
        card.style.transform = 'translateY(32px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        card.dataset.delay = String(i * 80);
        cardObserver.observe(card);
      }
    });

    return () => cardObserver.disconnect();
  }, []);

  return (
    <section
      id="features"
      ref={sectionRef}
      className="relative py-16 md:py-28 px-[5%] overflow-hidden"
      style={{ background: '#f8f9fc' }}
    >
      {/* ── Decorative background elements ── */}
      {/* Large navy arc top-right echoing hero */}
      <div
        className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full pointer-events-none opacity-[0.055]"
        style={{ background: 'var(--color-navy, #0a1628)' }}
      />
      {/* Teal circle bottom-left */}
      <div
        className="absolute -bottom-24 -left-24 w-[340px] h-[340px] rounded-full pointer-events-none opacity-[0.07]"
        style={{ background: '#0ea5e9' }}
      />
      {/* Subtle dot-grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: 'radial-gradient(circle, #0a1628 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* ── Section Header ── */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <SectionTag>The SUVI Advantage</SectionTag>
            <SectionTitle className="mt-5 mb-0 leading-tight">
              Why Leading Firms<br />
              <em className="font-playfair italic font-light opacity-80">
                Choose SUVI Internationals
              </em>
            </SectionTitle>
          </div>
          <p className="text-slate-500 text-base leading-relaxed max-w-[360px] md:text-right pb-1">
            Our difference is rooted in our foundation — architected by industry
            veterans, delivering elite efficiency at exceptional value.
          </p>
        </div>

        {/* ── Feature Cards Grid ── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => { cardsRef.current[index] = el; }}
              className="group relative bg-white rounded-2xl p-8 border border-gray-100 overflow-hidden
                         hover:border-blue-accent/40 hover:shadow-[0_16px_48px_rgba(10,22,40,0.10)]
                         hover:-translate-y-1 transition-all duration-300 cursor-default"
            >
              {/* Top accent line — navy → blue, slides in on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-t-2xl"
                style={{ background: 'linear-gradient(90deg, var(--color-navy, #0a1628), #0ea5e9)' }}
              />

              {/* Corner number — decorative, faint */}
              <span
                className="absolute top-6 right-7 font-playfair text-5xl font-bold leading-none select-none pointer-events-none
                           text-navy/[0.06] group-hover:text-navy/[0.10] transition-colors duration-300"
              >
                {feature.number}
              </span>

              {/* Icon badge */}
              <div
                className="w-[52px] h-[52px] rounded-xl flex items-center justify-center mb-6 text-2xl
                           group-hover:scale-105 transition-transform duration-300"
                style={{ background: 'linear-gradient(135deg, var(--color-navy, #0a1628) 0%, #0ea5e9 100%)' }}
              >
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="font-playfair text-[1.15rem] font-bold mb-3 text-navy leading-snug">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-slate-500 text-[0.875rem] leading-relaxed">
                {feature.description}
              </p>

              {/* Bottom CTA link — appears on hover */}
              <div className="mt-6 flex items-center gap-1.5 text-blue-accent text-xs font-semibold tracking-wide
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300 -mb-1">
                LEARN MORE
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* ── Bottom CTA strip — mirrors hero CTA style ── */}
        <div
          className="mt-16 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 px-6 md:px-10 py-8 md:py-9 overflow-hidden relative text-center md:text-left"
          style={{ background: 'var(--color-navy, #0a1628)' }}
        >
          {/* subtle grid same as hero */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
          <div className="relative z-10">
            <p className="text-white/60 text-sm font-medium tracking-widest uppercase mb-1">
              Ready to transform your practice?
            </p>
            <h4 className="font-playfair text-white text-2xl md:text-3xl font-bold leading-tight">
              Let&apos;s Build Your{' '}
              <em className="italic font-light opacity-90">Strategic Advantage.</em>
            </h4>
          </div>
          <a
            href="#services"
            className="relative z-10 shrink-0 inline-flex items-center gap-2 px-8 py-4 bg-blue-accent
                       hover:bg-blue-600 transition-all text-white font-medium rounded-full
                       shadow-lg shadow-blue-accent/30 hover:scale-105 duration-200 whitespace-nowrap"
          >
            EXPLORE PARTNERSHIP
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};