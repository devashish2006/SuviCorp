'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { SectionTag, TeamProfileModal } from '../ui';
import type { TeamMember } from '../ui';

const stats = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-blue-accent">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
        <path d="M17 3.34A9 9 0 0 1 21 12" />
        <path d="M7 3.34A9 9 0 0 0 3 12" />
      </svg>
    ),
    title: '15+ Years',
    label: 'Experience from Top-Tier Firms',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-blue-accent">
        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: '70% Faster',
    label: 'Deliverable Generation',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-blue-accent">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <path d="M7 8h.01M11 8h6" />
        <path d="M7 12h.01M11 12h6" />
      </svg>
    ),
    title: 'Big 4 Caliber',
    label: 'Technology Solutions',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-blue-accent">
        <circle cx="12" cy="12" r="9" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: 'Global',
    label: 'Strategic Partnerships Worldwide',
  },
];

const teamMembers: TeamMember[] = [
  {
    id: 'jatin-bhatia',
    name: 'CA Jatin Bhatia',
    role: 'Founder & Managing Partner',
    image: '/jatinPos-removebg-preview.png',
    imageOffset: '-50px',
    imageScale: '88%',
    tagline: 'Leading growth-oriented goals with a highly motivated and skilled team.',
    highlights: [
      'Founded SUVI to create a firm that excels in accounting, advisory, and the development of automation tools — committed to drive transformation and delivering high-quality services to clients, leveraging technology and innovation.',
      'Chartered Accountant with over a decade of experience in auditing and accounting advisory. Worked with prestigious Big Four firms gaining invaluable insights and experience in running innovation agendas.',
      'Experience in transactions such as M&A, IPO/SPAC and Divestitures.',
    ],
    expertise: [
      {
        label: 'Experience in Digital Transformation Space',
        items: [
          'Led the development of "STAT tool" for automating acquisition accounting, implemented on range of live engagements.',
          'Furthered digital transformation agenda and contributed to the development of "PROFiler" — automating pro forma financial statements.',
          'Developed tool for PMO function: project plan generation and standardized Power BI reporting.',
          'Led IPO Data Hub development outlining insightful trends in IPO US markets.',
          'Led development of IPO Enabler to help engagement teams run readiness engagements efficiently.',
          'Led the layering of AI and machine learning in above products and introduced top-up enhancements.',
        ],
      },
      {
        label: 'Experience in Technical Accounting Space',
        items: [
          'Writing whitepapers/accounting memorandums on: business combinations, stock compensation, revenues, leases, segment reporting, asset impairment, debt etc.',
          'Writing financial statements (incl. S-1/S-4 support, pro forma financial statements, management discussion and analyses), including upliftment.',
          'Building acquisition accounting workbooks (incl. Day 1 and Day 2 accounting).',
          'Writing accounting policy manuals for different clients on IPO engagements.',
          'GAAP conversion engagements, Audit Support, Benchmarking (accounting and reporting, KPI, MD&A etc.).',
        ],
      },
    ],
    quote: 'Leading growth-oriented goal with a highly motivated and skilled team.',
  },
  {
    id: 'ankur-tiwari',
    name: 'Ankur Tiwari',
    role: 'Full Stack Developer & Prod Lead',
    image: '/ankurPos-removebg-preview.png',
    imageOffset: '-50px',
    imageScale: '88%',
    tagline: 'Delivering high-quality full-stack solutions across front-end and back-end development.',
    highlights: [
      'Experienced and specialized Full Stack Java Developer with over 12 years of experience.',
      'Proven track record of delivering high-quality solutions across both front-end and back-end development.',
      'Expertise includes designing scalable architectures, implementing RESTful APIs, and optimizing database performance.',
      'Thrives in agile environments — collaborates effectively with cross-functional teams and has a strong problem-solving mindset.',
    ],
    expertise: [
      {
        label: 'Core Technical Skills',
        items: [
          'Full Stack Java Development with 12+ years of hands-on expertise.',
          'Scalable architecture design and system performance optimization.',
          'RESTful API implementation and microservices architecture.',
          'Database optimization and performance tuning at enterprise scale.',
          'Agile methodologies and cross-functional team collaboration.',
        ],
      },
    ],
    quote: 'Building scalable, high-performance solutions that bridge technology and business outcomes.',
  },
  {
    id: 'aman-garg',
    name: 'Aman Garg',
    role: 'Solution Architect',
    image: '/AmanPos-removebg-preview.png',
    imageOffset: '-50px',
    imageScale: '88%',
    tagline: 'Results-oriented professional with over 14 years of experience managing large-scale global transformations.',
    highlights: [
      'Results-oriented professional with over 14 years of experience in managing large-scale global transformations and programs.',
      'Expertise spans business consulting for financial services, fraud and risk mitigation, data analytics, operations management, and professional services.',
      'Excels in strategy development, digital transformation, innovation, organizational change management, and process improvement.',
    ],
    expertise: [
      {
        label: 'Areas of Expertise',
        items: [
          'Business consulting for financial services and fraud & risk mitigation.',
          'Data analytics and operations management at global scale.',
          'Strategy development and digital transformation initiatives.',
          'Innovation management and organizational change leadership.',
          'Process improvement and large-scale program delivery.',
        ],
      },
    ],
    quote: 'Driving meaningful transformation through innovation, strategy, and relentless execution.',
  },
  {
    id: 'priya-sharma',
    name: 'Devashish Mishra',
    role: 'Software Developer',
    image: '/devashishPos-removebg-preview.png',
    imageOffset: '-50px',
    imageScale: '88%',
    tagline: 'Crafting scalable, high-performance software solutions that power SUVI Corp\'s technology ecosystem.',
    highlights: [
      'Passionate Software Developer specializing in building modern web applications and internal tooling that streamline operations across SUVI Corp\'s service verticals.',
      'Proficient in full-stack development with a strong focus on React, Next.js, and Node.js — delivering clean, maintainable code that scales.',
      'Drives automation initiatives and integrates AI-powered features to enhance productivity and reduce manual effort across client-facing and internal platforms.',
    ],
    expertise: [
      {
        label: 'Technical Skills',
        items: [
          'Full-stack web development with React, Next.js, TypeScript, and Node.js.',
          'Building RESTful APIs and integrating third-party SaaS and fintech platforms.',
          'UI/UX implementation with modern design systems and component libraries.',
          'Database design and management with PostgreSQL, MongoDB, and Supabase.',
          'CI/CD pipelines, cloud deployments (Vercel, AWS), and DevOps best practices.',
        ],
      },
    ],
    quote: 'Good software is not just functional — it\'s intuitive, elegant, and built to last.',
  },
  {
    id: 'amit',
    name: 'Amit',
    role: 'Technology Partnerships Lead',
    image: '/img2.png',
    imageOffset: '-40px',
    imageScale: '88%',
    tagline: 'Building and nurturing strategic global technology ecosystems for long-term growth.',
    highlights: [
      'Technology Partnerships Lead with 8+ years building strategic SaaS and enterprise technology alliances globally.',
      'Proven ability to identify, evaluate, and onboard high-value technology partners across accounting and fintech verticals.',
      'Orchestrates go-to-market strategies that drive mutual growth and client value across international markets.',
    ],
    expertise: [
      {
        label: 'Partnership & Growth Expertise',
        items: [
          'Strategic SaaS partnership identification and alliance management.',
          'Go-to-market strategy design for technology and accounting sectors.',
          'Partner enablement, onboarding, and co-selling motions.',
          'Cross-border business development and market expansion.',
          'Revenue operations and partnership performance analytics.',
        ],
      },
    ],
    quote: 'The right partnerships don\'t just open doors — they build entire new corridors of opportunity.',
  },
];

export const Hero: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <>
      {/* ─── SECTION 1: Dark Banner ─── */}
      <section
        id="hero"
        className="relative pt-[88px] pb-0 overflow-visible z-10 w-full bg-white"
      >
        {/* Rounded banner wrapper */}
        <div
          className="w-[calc(100%-16px)] mx-auto rounded-[24px] md:rounded-[28px] overflow-visible relative"
          style={{ background: 'linear-gradient(135deg, #0a1628 0%, #0d1f3c 40%, #0a1628 100%)' }}
        >
          {/* Decorative Background Wrapper to prevent horizontal overflow */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[24px] md:rounded-[28px]">
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

          {/* Content — left text + CTA */}
          <div className="w-full mx-auto px-6 md:px-10 relative z-10 min-h-[65vh] flex items-center">
            <div className="w-full py-12 md:py-16">

              {/* ── Left: text + CTA ── */}
              <div className="flex flex-col justify-center animate-fadeUp">
                <h1 className="font-playfair text-4xl md:text-6xl lg:text-[4rem] font-bold text-white leading-[1.1] mt-6 mb-6">
                  Your{' '}
                  <em
                    className="not-italic"
                    style={{ fontFamily: 'Playfair Display, Georgia, serif', fontStyle: 'italic', fontWeight: 300, opacity: 0.92 }}
                  >
                    Strategic Hub
                  </em>
                  <br />
                  for{' '}
                  <span className="text-blue-accent font-bold">
                    Accounting Excellence.
                  </span>
                </h1>

                <p className="text-white/70 md:text-lg leading-relaxed max-w-[480px] mb-10 font-light">
                  Suvicorp empowers accounting and consulting firms with
                  elite technology ecosystems and specialized SAAS/AI solutions to
                  deliver transformative financial outcomes without the overhead.
                </p>

              </div>

            </div>
          </div>

          {/* Bottom padding area to create space for the overlapping stats bar */}
          <div className="pb-24 md:pb-[120px]" />
        </div>
      </section>

      {/* ─── SECTION 2: Stats Bar — overlapping hero & white ─── */}
      <section className="bg-white w-full pb-8 relative z-20 flex flex-col">
        <div className="max-w-5xl w-full mx-auto px-6 -mt-[100px] md:-mt-[150px]">
          <div className="bg-white rounded-2xl shadow-[0_20px_60px_-16px_rgba(0,0,0,0.18)] border border-gray-100 flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-gray-200 overflow-hidden">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex-1 py-8 px-6 md:px-8 flex flex-col items-center text-center hover:bg-gray-50 transition-colors duration-300"
              >
                <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-xl bg-blue-accent/8">
                  {stat.icon}
                </div>
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

      {/* ─── SECTION 3: White — Audience Cards (team-style layout) ─── */}
      <section id="team" className="bg-white w-full pt-20 pb-24 relative overflow-hidden">
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
            <SectionTag variant="teal">Our Team</SectionTag>
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-navy mt-5 leading-tight">
              Meet The Minds<br />
              <em className="italic font-light opacity-80">Behind SUVI Corp</em>
            </h2>
            <p className="text-gray-500 text-sm mt-4">Click on any profile to learn more</p>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-5 sm:gap-y-5 pt-0 sm:pt-0">
            {teamMembers.map((member) => (
              <button
                key={member.id}
                onClick={() => setSelectedMember(member)}
                className="group flex flex-col gap-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-accent focus-visible:ring-offset-2 rounded-2xl"
                aria-label={`View profile of ${member.name}`}
              >
                {/* Card: dark navy background */}
                <div
                  className="team-card-box relative rounded-2xl transition-all duration-300 group-hover:-translate-y-3 group-hover:shadow-[0_24px_48px_-8px_rgba(6,182,212,0.3),0_8px_20px_rgba(0,0,0,0.35)]"
                  style={{
                    background: 'linear-gradient(145deg, #0a1628 0%, #0d1f3c 50%, #112244 100%)',
                    border: '1px solid rgba(6,182,212,0.2)',
                  }}
                >
                  {/* Subtle glow overlay */}
                  <div
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    style={{
                      background:
                        'radial-gradient(ellipse at 30% 0%, rgba(6,182,212,0.12) 0%, transparent 60%), radial-gradient(ellipse at 80% 100%, rgba(59,130,246,0.10) 0%, transparent 55%)',
                    }}
                  />

                  {/* Hover teal border glow */}
                  <div
                    className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ border: '1px solid rgba(6,182,212,0.55)' }}
                  />

                  {/* Cutout image — anchored to bottom, head overflows above card top */}
                  <div className="absolute inset-0 pointer-events-none" style={{ overflow: 'visible' }}>
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={400}
                      height={500}
                      className="team-member-img absolute transition-transform duration-500 group-hover:scale-[1.06]"
                      style={{
                        filter:
                          'drop-shadow(0 -4px 20px rgba(6,182,212,0.2)) drop-shadow(0 12px 24px rgba(0,0,0,0.55))',
                      }}
                    />
                  </div>
                </div>

                {/* Content below card */}
                <div className="px-1">
                  <h4 className="font-playfair text-lg font-bold text-navy mb-1 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-accent inline-block flex-shrink-0" />
                    {member.name}
                  </h4>
                  <p className="text-gray-400 text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: '#06b6d4' }}>
                    {member.role}
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed mb-3 line-clamp-2">
                    {member.highlights[0]}
                  </p>
                  <span
                    className="inline-flex items-center gap-1 text-blue-accent text-sm font-semibold group-hover:gap-2 transition-all duration-200 uppercase tracking-wide"
                  >
                    VIEW PROFILE
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Team Profile Modal ─── */}
      <TeamProfileModal
        member={selectedMember}
        onClose={() => setSelectedMember(null)}
      />
    </>
  );
};