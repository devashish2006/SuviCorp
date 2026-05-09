import React from 'react';
import { SectionTag } from '../ui';

const stats = [
  { icon: 'https://cdn-icons-png.flaticon.com/512/3602/3602145.png', title: '15+ Years', label: 'Experience from Top-Tier Firms' },
  { icon: 'https://cdn-icons-png.flaticon.com/512/2921/2921222.png', title: '70% Faster', label: 'Deliverable Generation' },
  { icon: 'https://cdn-icons-png.flaticon.com/512/610/610413.png', title: 'Big 4 Caliber', label: 'Technology Solutions' },
  { icon: 'https://cdn-icons-png.flaticon.com/512/751/751381.png', title: 'Global', label: 'Strategic Partnerships Worldwide' },
];

const audienceCards = [
  {
    image: '/image.png',
    label: '+ Accounting Firms',
    title: 'Accounting Firms',
    description: 'Upgrade your tech stack, streamline workflows, and deliver Big 4 caliber service without Big 4 overhead.',
  },
  {
    image: '/image.png',
    label: '+ Consulting Practices',
    title: 'Consulting Practices',
    description: 'Access AI-powered tools and strategic SaaS ecosystems built to accelerate insight delivery and client outcomes.',
  },
  {
    image: '/image.png',
    label: '+ Finance Teams',
    title: 'Finance Teams',
    description: 'Automate financial operations, reporting, and compliance with enterprise-grade technology made accessible.',
  },
  {
    image: '/image.png',
    label: '+ Enterprise Leaders',
    title: 'Enterprise Leaders',
    description: 'Build global strategic partnerships backed by 15+ years of top-tier firm experience and proven outcomes.',
  },
];

export const Hero: React.FC = () => {
  return (
    <>
      {/* ─── SECTION 1: Dark Banner ─── */}
      <section
        id="hero"
        className="relative pt-28 pb-0 overflow-visible z-10 w-full"
        style={{ background: 'linear-gradient(135deg, #0a1628 0%, #0d1f3c 40%, #0a1628 100%)' }}
      >
        {/* Decorative Background Wrapper to prevent horizontal overflow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Subtle grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />

          {/* Radial glow top-left */}
          <div
            className="absolute top-0 left-0 w-[700px] h-[700px]"
            style={{
              background:
                'radial-gradient(ellipse at 0% 0%, rgba(6,182,212,0.12) 0%, transparent 65%)',
            }}
          />
        </div>

        {/* Content grid */}
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-[1.1fr_0.9fr] gap-0 items-end min-h-[540px]">
          {/* Left: Text */}
          <div className="flex flex-col justify-center py-16 md:py-24 animate-fadeUp">
            <SectionTag variant="teal">Strategic Technology Hub</SectionTag>

            <h1 className="font-playfair text-4xl md:text-5xl lg:text-[3.6rem] font-bold text-white leading-[1.1] mt-6 mb-6">
              Your <em className="italic font-light opacity-90">Strategic Hub</em>
              <br />
              for{' '}
              <span className="text-blue-accent font-bold">
                Accounting Excellence.
              </span>
            </h1>

            <p className="text-white/70 md:text-lg leading-relaxed max-w-[520px] mb-10 font-light">
              SUVI Internationals empowers accounting and consulting firms with
              elite technology ecosystems and specialized SAAS/AI solutions to
              deliver transformative financial outcomes without the overhead.
            </p>

            <div>
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-accent hover:bg-blue-600 transition-all text-white font-medium rounded-full shadow-lg shadow-blue-accent/30 hover:scale-105 duration-200"
              >
                EXPLORE PARTNERSHIP
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Hero image with decorative geometric shapes — banner style */}
          <div className="relative hidden md:flex items-end justify-center animate-fadeUp animation-delay-300 self-end">
            {/* Large teal/blue decorative arc behind person — top-right */}
            <div
              className="absolute -top-8 -right-16 w-[320px] h-[320px] rounded-full pointer-events-none z-0"
              style={{
                background: 'linear-gradient(135deg, rgba(6,182,212,0.35) 0%, rgba(59,130,246,0.2) 100%)',
              }}
            />
            {/* Smaller teal circle — bottom-left accent */}
            <div
              className="absolute bottom-24 -left-8 w-[100px] h-[100px] rounded-full pointer-events-none z-0"
              style={{
                background: 'rgba(6,182,212,0.25)',
              }}
            />
            {/* Tiny circle accent — top-left */}
            <div
              className="absolute top-16 left-8 w-[40px] h-[40px] rounded-full pointer-events-none z-0"
              style={{
                background: 'rgba(59,130,246,0.3)',
              }}
            />

            <img
              src="/hero-image-new.png"
              alt="SUVI International Professional"
              className="relative z-10 w-full max-w-[420px] lg:max-w-[500px] xl:max-w-[580px] object-contain object-bottom transition-transform duration-500 hover:scale-[1.03] origin-bottom"
              style={{
                filter: 'grayscale(100%) contrast(1.1) brightness(1.05) drop-shadow(0 20px 40px rgba(0,0,0,0.5))',
                maxHeight: '620px',
                marginBottom: '-40px',
              }}
            />
          </div>
        </div>

        {/* Bottom padding area to create space for the overlapping stats bar */}
        <div className="pb-24" />
      </section>

      {/* ─── SECTION 2: Stats Bar — overlapping hero & white ─── */}
      <section className="bg-white w-full pb-8 relative z-20">
        <div className="max-w-5xl mx-auto px-6 -mt-[72px]">
          <div className="bg-white rounded-2xl shadow-[0_20px_60px_-16px_rgba(0,0,0,0.18)] border border-gray-100 flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-gray-200 overflow-hidden">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex-1 py-8 px-6 md:px-8 flex flex-col items-center text-center hover:bg-gray-50 transition-colors duration-300"
              >
                <img
                  src={stat.icon}
                  alt=""
                  className="w-10 h-10 mb-4 opacity-75"
                />
                <h3 className="font-playfair text-xl md:text-2xl font-bold text-navy mb-1">
                  {stat.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-[180px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: White — Audience Cards (team-style layout matching reference) ─── */}
      <section className="bg-white w-full pt-20 pb-24 relative overflow-hidden">
        {/* Decorative teal circle — top-right */}
        <div
          className="absolute -top-10 right-12 w-[60px] h-[60px] rounded-full pointer-events-none"
          style={{ background: 'rgba(6,182,212,0.35)' }}
        />
        {/* Decorative teal circle — smaller, mid-right */}
        <div
          className="absolute top-40 right-6 w-[24px] h-[24px] rounded-full pointer-events-none"
          style={{ background: 'rgba(6,182,212,0.2)' }}
        />

        <div className="max-w-7xl mx-auto px-6">
          {/* Section header */}
          <div className="text-center mb-14">
            <SectionTag variant="teal">Who We Serve</SectionTag>
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-navy mt-5 leading-tight">
              Empowering Excellence<br />
              <em className="italic font-light opacity-80">Across Every Practice</em>
            </h2>
          </div>

          {/* Cards grid — team/portrait style like the reference image */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {audienceCards.map((card, i) => (
              <div
                key={i}
                className="group flex flex-col items-center text-center"
              >
                {/* Portrait image block — rounded top, square bottom */}
                <div
                  className="relative w-full overflow-hidden bg-gray-100 mb-5"
                  style={{
                    borderRadius: '120px 120px 16px 16px',
                    aspectRatio: '3/4',
                  }}
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Gradient overlay at bottom of image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent" />
                </div>

                {/* Label/category — styled as a dot-prefix label */}
                <h4 className="font-playfair text-lg font-bold text-navy mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-accent inline-block" />
                  {card.title}
                </h4>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed px-2 mb-3 flex-1">
                  {card.description}
                </p>

                {/* CTA link */}
                <a
                  href="#services"
                  className="inline-flex items-center gap-1 text-blue-accent text-sm font-semibold hover:gap-2 transition-all duration-200 uppercase tracking-wide"
                >
                  FIND OUT MORE
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};