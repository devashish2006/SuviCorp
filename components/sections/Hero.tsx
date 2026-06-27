'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
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
    image: '/jatinArmsFolded-removebg-preview.png',
    imageOffset: '-50px',
    imageScale: '88%',
    tagline: 'Leading growth-oriented goals with a highly motivated and skilled team.',
    highlights: [
      'Founded Suvicorp to create a firm that excels in accounting, advisory, and the development of automation tools — committed to drive transformation and delivering high-quality services to clients, leveraging technology and innovation.',
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
    id: 'Mark-Warzecha',
    name: 'Mark-Warzecha',
    role: 'Founder & Managing Partner',
    image: '/mark-removebg-preview.png',
    imageClass: 'team-member-img--mark',
    imageOffset: '-50px',
    imageScale: '88%',
    tagline: 'Leading growth-oriented goals with a highly motivated and skilled team.',
    highlights: [
      'Founded Suvicorp to create a firm that excels in accounting, advisory, and the development of automation tools — committed to drive transformation and delivering high-quality services to clients, leveraging technology and innovation.',
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
    id: 'Saima ',
    name: 'Saima ',
    role: 'Technology Partnerships Lead',
    image: '/saima-removebg-preview.png',
    imageClass: 'team-member-img--saima',
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
  {
    id: 'aman-garg',
    name: 'Aman Garg',
    role: 'Solution Architect',
    image: '/amanArmsFolded-removebg-preview.png',
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
    id: 'amit',
    name: 'Amit',
    role: 'Technology Partnerships Lead',
    image: '/amitPosture-removebg-preview.png',
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
  {
    id: 'ankur-tiwari',
    name: 'Ankur Tiwari',
    role: 'Full Stack Developer & Prod Lead',
    image: '/ankurArmsFolded-removebg-preview.png',
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
    id: 'priya-sharma',
    name: 'Devashish Mishra',
    role: 'Software Developer',
    image: '/devashishPos-removebg-preview.png',
    imageOffset: '-50px',
    imageScale: '88%',
    tagline: 'Crafting scalable, high-performance software solutions that power Suvicorp\'s technology ecosystem.',
    highlights: [
      'Passionate Software Developer specializing in building modern web applications and internal tooling that streamline operations across Suvicorp\'s service verticals.',
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
    id: 'ritesh',
    name: 'Ritesh',
    role: 'Team Member',
    image: '/ritesh-removebg-preview.png',
    imageClass: 'team-member-img--ritesh',
    imageOffset: '-50px',
    imageScale: '88%',
    tagline: 'Bringing expertise and dedication to drive meaningful results at Suvicorp.',
    highlights: [
      'Dedicated team member at Suvicorp contributing to the firm\'s mission of delivering transformative accounting and technology solutions.',
      'Collaborative professional with a strong work ethic and commitment to excellence across client engagements.',
      'Supports cross-functional initiatives and plays a key role in advancing Suvicorp\'s growth-oriented goals.',
    ],
    expertise: [
      {
        label: 'Areas of Contribution',
        items: [
          'Cross-functional collaboration and project support.',
          'Client engagement and service delivery.',
          'Process improvement and operational efficiency.',
          'Knowledge sharing and team enablement.',
          'Contributing to Suvicorp\'s technology and advisory mission.',
        ],
      },
    ],
    quote: 'Every contribution, no matter the scale, drives the team closer to excellence.',
  },

];

/* ─── Team Carousel: shows 4 cards, scrolls to reveal remaining ─── */
const VISIBLE_COUNT = 5;

interface TeamCarouselProps {
  members: TeamMember[];
  onSelect: (member: TeamMember) => void;
}

const TeamCarousel: React.FC<TeamCarouselProps> = ({ members, onSelect }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(members.length > VISIBLE_COUNT);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener('scroll', updateScrollState, { passive: true });
    return () => el.removeEventListener('scroll', updateScrollState);
  }, [updateScrollState]);

  const scroll = (dir: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.scrollWidth / members.length;
    el.scrollBy({ left: dir === 'right' ? cardWidth : -cardWidth, behavior: 'smooth' });
  };

  return (
    <div className="relative overflow-visible">
      {/* Scroll Buttons */}
      {canScrollLeft && (
        <button
          onClick={() => scroll('left')}
          aria-label="Scroll team left"
          className="absolute -left-5 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-11 h-11 rounded-full shadow-lg transition-all duration-200 hover:scale-110 active:scale-95"
          style={{
            background: 'linear-gradient(135deg, #0d1f3c 0%, #0a1628 100%)',
            border: '1px solid rgba(6,182,212,0.45)',
            boxShadow: '0 4px 20px rgba(6,182,212,0.2)',
          }}
        >
          <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {canScrollRight && (
        <button
          onClick={() => scroll('right')}
          aria-label="Scroll team right"
          className="absolute -right-5 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-11 h-11 rounded-full shadow-lg transition-all duration-200 hover:scale-110 active:scale-95"
          style={{
            background: 'linear-gradient(135deg, #0d1f3c 0%, #0a1628 100%)',
            border: '1px solid rgba(6,182,212,0.45)',
            boxShadow: '0 4px 20px rgba(6,182,212,0.2)',
          }}
        >
          <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      {/* Scrollable track — hidden scrollbar, snap on each card */}
      <div
        ref={scrollRef}
        className="team-carousel-track flex gap-5 overflow-x-auto pb-2"
        style={{
          scrollSnapType: 'x mandatory',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          paddingTop: '180px',
          marginTop: '-180px',
        }}
      >
        <style>{`.team-carousel-track::-webkit-scrollbar { display: none; }`}</style>
        {members.map((member) => (
          <button
            key={member.id}
            onClick={() => onSelect(member)}
            aria-label={`View profile of ${member.name}`}
            className="group flex flex-col gap-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-accent focus-visible:ring-offset-2 rounded-2xl flex-shrink-0"
            style={{
              scrollSnapAlign: 'start',
              width: `calc((100% - ${(VISIBLE_COUNT - 1) * 20}px) / ${VISIBLE_COUNT})`,
              minWidth: '220px',
            }}
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
                  className={`team-member-img absolute transition-transform duration-500 group-hover:scale-[1.06]${member.imageClass ? ` ${member.imageClass}` : ''}`}
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
              <span className="inline-flex items-center gap-1 text-blue-accent text-sm font-semibold group-hover:gap-2 transition-all duration-200 uppercase tracking-wide">
                VIEW PROFILE
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Dot indicators */}
      {members.length > VISIBLE_COUNT && (
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: members.length - VISIBLE_COUNT + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => {
                const el = scrollRef.current;
                if (!el) return;
                const cardWidth = el.scrollWidth / members.length;
                el.scrollTo({ left: cardWidth * i, behavior: 'smooth' });
              }}
              className="w-2 h-2 rounded-full transition-all duration-300"
              style={{
                background: canScrollLeft
                  ? i === 0 ? 'rgba(6,182,212,0.4)' : 'rgba(6,182,212,0.9)'
                  : i === 0 ? 'rgba(6,182,212,0.9)' : 'rgba(6,182,212,0.3)',
              }}
              aria-label={`Go to position ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

/* ─── Hub Diagram Component ─── */
const hubItems = [
  {
    id: 1,
    label: 'Strategic Technology Partners',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    position: 'top-left',
  },
  {
    id: 2,
    label: 'Domain Expertise',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>
    ),
    position: 'top-right',
  },
  {
    id: 3,
    label: 'Democratizing Elite Technology',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    position: 'mid-left',
  },
  {
    id: 4,
    label: 'Less Time to Market',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    position: 'mid-right',
  },
  {
    id: 5,
    label: 'Fractional Investment',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    position: 'bottom-left',
  },
  {
    id: 6,
    label: 'Increased Focus on Core Business',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    position: 'bottom-right',
  },
];

/* ── Shared hub circle used in both layouts ── */
const HubCircle: React.FC<{ size?: number }> = ({ size = 110 }) => (
  <div className="relative flex flex-col items-center justify-center" style={{ width: size, height: size }}>
    <div
      className="absolute inset-0 rounded-full animate-ping"
      style={{ background: 'transparent', border: '1px solid rgba(6,182,212,0.35)', animationDuration: '2.5s' }}
    />
    <div
      className="absolute rounded-full animate-ping"
      style={{ inset: '-16px', background: 'transparent', border: '1px solid rgba(6,182,212,0.18)', animationDuration: '2.5s', animationDelay: '0.6s' }}
    />
    <div
      className="relative flex flex-col items-center justify-center w-full h-full rounded-full"
      style={{
        background: 'radial-gradient(circle at 35% 35%, rgba(6,182,212,0.35) 0%, rgba(10,22,40,0.98) 65%)',
        border: '2px solid rgba(6,182,212,0.6)',
        boxShadow: '0 0 40px rgba(6,182,212,0.35), 0 0 80px rgba(6,182,212,0.12), inset 0 0 20px rgba(6,182,212,0.08)',
      }}
    >
      <svg viewBox="0 0 48 48" fill="none" style={{ width: size * 0.38, height: size * 0.38, filter: 'drop-shadow(0 0 8px rgba(6,182,212,0.7))' }}>
        <circle cx="24" cy="24" r="22" fill="rgba(6,182,212,0.12)" stroke="rgba(6,182,212,0.4)" strokeWidth="1" />
        <path d="M24 12 C18 12 13 16 13 21 C13 25 15 28 19 29 L19 36 L29 36 L29 29 C33 28 35 25 35 21 C35 16 30 12 24 12Z"
          fill="rgba(6,182,212,0.2)" stroke="rgba(6,182,212,0.8)" strokeWidth="1.2" strokeLinejoin="round" />
        <circle cx="18" cy="20" r="2" fill="rgba(6,182,212,0.9)" />
        <circle cx="24" cy="17" r="2" fill="rgba(6,182,212,0.9)" />
        <circle cx="30" cy="20" r="2" fill="rgba(6,182,212,0.9)" />
        <line x1="18" y1="20" x2="24" y2="17" stroke="rgba(6,182,212,0.6)" strokeWidth="1" />
        <line x1="24" y1="17" x2="30" y2="20" stroke="rgba(6,182,212,0.6)" strokeWidth="1" />
        <line x1="18" y1="20" x2="30" y2="20" stroke="rgba(6,182,212,0.4)" strokeWidth="1" />
        <line x1="24" y1="29" x2="24" y2="36" stroke="rgba(6,182,212,0.5)" strokeWidth="1.5" />
      </svg>
      <span className="font-bold tracking-widest text-cyan-400 mt-1" style={{ fontSize: size * 0.082, letterSpacing: '0.15em' }}>THE HUB</span>
    </div>
  </div>
);

const HubDiagram: React.FC = () => {
  return (
    <>
      {/* ══════════════════════════════════════
          MOBILE LAYOUT  (hidden on lg+)
          Centre hub → 2-column grid of cards
      ══════════════════════════════════════ */}
      <div className="lg:hidden animate-fadeUp w-full flex flex-col items-center gap-6 py-4">
        {/* Hub circle centred */}
        <div className="flex items-center justify-center">
          <HubCircle size={90} />
        </div>

        {/* 2-column card grid */}
        <div className="grid grid-cols-2 gap-3 w-full max-w-sm mx-auto">
          {hubItems.map((item, i) => (
            <HubNode key={item.id} item={item} delay={i * 0.07} mobile />
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════
          DESKTOP LAYOUT  (hidden below lg)
          Radial diagram with absolute nodes
      ══════════════════════════════════════ */}
      <div
        className="hidden lg:flex relative items-center justify-center animate-fadeUp w-full"
        style={{ minHeight: '420px', animationDelay: '0.2s' }}
      >
        {/* Background glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(6,182,212,0.08) 0%, transparent 70%)' }}
        />

        {/* SVG connector lines */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 480 420"
          preserveAspectRatio="xMidYMid meet"
          style={{ opacity: 0.45 }}
        >
          <line x1="240" y1="210" x2="95"  y2="85"  stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="4 3" />
          <line x1="240" y1="210" x2="385" y2="85"  stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="4 3" />
          <line x1="240" y1="210" x2="75"  y2="210" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="4 3" />
          <line x1="240" y1="210" x2="405" y2="210" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="4 3" />
          <line x1="240" y1="210" x2="95"  y2="340" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="4 3" />
          <line x1="240" y1="210" x2="385" y2="340" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="4 3" />
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>

        {/* Node cards — absolute radial positions */}
        <div className="hub-node absolute" style={{ top: '2%',  left: '0%' }}><HubNode item={hubItems[0]} delay={0}   /></div>
        <div className="hub-node absolute" style={{ top: '2%',  right: '0%' }}><HubNode item={hubItems[1]} delay={0.1} /></div>
        <div className="hub-node absolute" style={{ top: '50%', left: '0%',  transform: 'translateY(-50%)' }}><HubNode item={hubItems[2]} delay={0.2} /></div>
        <div className="hub-node absolute" style={{ top: '50%', right: '0%', transform: 'translateY(-50%)' }}><HubNode item={hubItems[3]} delay={0.3} /></div>
        <div className="hub-node absolute" style={{ bottom: '2%', left: '0%' }}><HubNode item={hubItems[4]} delay={0.4} /></div>
        <div className="hub-node absolute" style={{ bottom: '2%', right: '0%' }}><HubNode item={hubItems[5]} delay={0.5} /></div>

        {/* Central hub */}
        <HubCircle size={110} />

        <style>{`
          .hub-node { width: 148px; }
          @media (max-width: 1280px) { .hub-node { width: 130px; } }
          @keyframes hubNodeIn {
            from { opacity: 0; transform: scale(0.85) translateY(8px); }
            to   { opacity: 1; transform: scale(1) translateY(0); }
          }
          .hub-card { animation: hubNodeIn 0.5s ease-out both; }
        `}</style>
      </div>
    </>
  );
};

interface HubNodeProps {
  item: typeof hubItems[0];
  delay: number;
  mobile?: boolean;
}

const HubNode: React.FC<HubNodeProps & { mobile?: boolean }> = ({ item, delay, mobile }) => (
  <div
    className="hub-card group flex flex-col gap-2 rounded-xl cursor-default transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(6,182,212,0.25)]"
    style={{
      padding: mobile ? '10px' : '12px',
      background: 'linear-gradient(145deg, rgba(10,22,40,0.92) 0%, rgba(13,31,60,0.88) 100%)',
      border: '1px solid rgba(6,182,212,0.22)',
      backdropFilter: 'blur(8px)',
      animationDelay: `${delay}s`,
    }}
  >
    {/* Icon */}
    <div
      className="flex items-center justify-center rounded-lg flex-shrink-0 transition-colors duration-300 group-hover:bg-cyan-500/25"
      style={{
        width: mobile ? 28 : 32,
        height: mobile ? 28 : 32,
        background: 'rgba(6,182,212,0.15)',
        color: '#06b6d4',
      }}
    >
      {item.icon}
    </div>
    {/* Label */}
    <p
      className="text-white/85 font-semibold leading-tight group-hover:text-cyan-300 transition-colors duration-300"
      style={{ fontSize: mobile ? '10px' : '11px' }}
    >
      {item.label}
    </p>
    {/* Accent line */}
    <div
      className="h-[2px] w-5 rounded-full transition-all duration-300 group-hover:w-full"
      style={{ background: 'linear-gradient(90deg, #06b6d4, #3b82f6)' }}
    />
  </div>
);

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

          {/* Content — left text + right hub diagram */}
          <div className="w-full mx-auto px-6 md:px-10 relative z-10 flex items-center">
            <div className="w-full py-8 md:py-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

              {/* ── Left: text + CTA ── */}
              <div className="flex flex-col justify-center animate-fadeUp">
                <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] font-bold text-white leading-[1.1] mt-4 mb-4 md:mt-6 md:mb-6">
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

                <p className="text-white/70 text-sm md:text-lg leading-relaxed max-w-[480px] mb-6 md:mb-10 font-light">
                  Suvicorp empowers accounting and consulting firms with
                  elite technology ecosystems and specialized SAAS/AI solutions to
                  deliver transformative financial outcomes without the overhead.
                </p>

              </div>

              {/* ── Right: Hub Diagram ── */}
              <HubDiagram />

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
      <section id="team" className="bg-white w-full pt-20 pb-24 relative overflow-visible">

        {/* ── Premium Animated Bubble Layer ── */}

        {/* Large teal orb — top-right, floating */}
        <div
          className="absolute -top-14 right-8 w-[88px] h-[88px] rounded-full pointer-events-none animate-bubble-float"
          style={{
            background: 'radial-gradient(circle at 35% 35%, rgba(6,182,212,0.55) 0%, rgba(6,182,212,0.12) 60%, transparent 100%)',
            boxShadow: '0 0 40px 10px rgba(6,182,212,0.18)',
            animationDuration: '6s',
          }}
        />
        {/* Ripple ring around large orb */}
        <div
          className="absolute -top-16 right-6 w-[100px] h-[100px] rounded-full pointer-events-none animate-bubble-ripple border border-cyan-400/30"
          style={{ animationDuration: '4s', animationDelay: '0.5s' }}
        />

        {/* Medium teal bubble — mid-right */}
        <div
          className="absolute top-36 right-4 w-[36px] h-[36px] rounded-full pointer-events-none animate-bubble-drift"
          style={{
            background: 'radial-gradient(circle at 40% 30%, rgba(6,182,212,0.65) 0%, rgba(6,182,212,0.15) 70%, transparent 100%)',
            boxShadow: '0 0 18px 4px rgba(6,182,212,0.22)',
            animationDuration: '8s',
            animationDelay: '1s',
          }}
        />

        {/* Small dot — far right mid */}
        <div
          className="absolute top-64 right-16 w-[14px] h-[14px] rounded-full pointer-events-none animate-bubble-float"
          style={{
            background: 'rgba(6,182,212,0.45)',
            boxShadow: '0 0 10px 3px rgba(6,182,212,0.25)',
            animationDuration: '5s',
            animationDelay: '2s',
          }}
        />

        {/* Glowing blue orb — bottom-left corner */}
        <div
          className="absolute bottom-16 -left-10 w-[110px] h-[110px] rounded-full pointer-events-none animate-bubble-orb"
          style={{
            background: 'radial-gradient(circle at 40% 40%, rgba(59,130,246,0.45) 0%, rgba(59,130,246,0.10) 60%, transparent 100%)',
            boxShadow: '0 0 50px 12px rgba(59,130,246,0.14)',
            animationDuration: '9s',
          }}
        />
        {/* Ripple ring around blue orb */}
        <div
          className="absolute bottom-12 -left-14 w-[130px] h-[130px] rounded-full pointer-events-none animate-bubble-ripple border border-blue-400/20"
          style={{ animationDuration: '6s', animationDelay: '1.5s' }}
        />

        {/* Tiny navy dot — lower-left */}
        <div
          className="absolute bottom-32 left-12 w-[10px] h-[10px] rounded-full pointer-events-none animate-bubble-wander"
          style={{
            background: 'rgba(6,182,212,0.5)',
            animationDuration: '10s',
            animationDelay: '0.7s',
          }}
        />

        {/* Large semi-transparent orb — top-left background */}
        <div
          className="absolute -top-20 -left-16 w-[200px] h-[200px] rounded-full pointer-events-none animate-bubble-shimmer"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(6,182,212,0.08) 0%, transparent 70%)',
            animationDuration: '7s',
          }}
        />

        {/* Accent bubble — upper-center */}
        <div
          className="absolute top-8 left-1/2 -translate-x-1/2 w-[18px] h-[18px] rounded-full pointer-events-none animate-bubble-drift"
          style={{
            background: 'rgba(6,182,212,0.38)',
            boxShadow: '0 0 12px 4px rgba(6,182,212,0.18)',
            animationDuration: '11s',
            animationDelay: '3s',
          }}
        />

        {/* Subtle gradient glow — right-center */}
        <div
          className="absolute top-1/2 -right-24 w-[280px] h-[280px] -translate-y-1/2 rounded-full pointer-events-none animate-bubble-shimmer"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(6,182,212,0.07) 0%, transparent 65%)',
            animationDuration: '8s',
            animationDelay: '2s',
          }}
        />

        {/* Tiny cluster — bottom-right */}
        <div
          className="absolute bottom-10 right-24 w-[8px] h-[8px] rounded-full pointer-events-none animate-bubble-float"
          style={{
            background: 'rgba(6,182,212,0.6)',
            animationDuration: '4.5s',
            animationDelay: '1.2s',
          }}
        />
        <div
          className="absolute bottom-16 right-32 w-[5px] h-[5px] rounded-full pointer-events-none animate-bubble-float"
          style={{
            background: 'rgba(6,182,212,0.5)',
            animationDuration: '6s',
            animationDelay: '0.3s',
          }}
        />
        <div
          className="absolute bottom-6 right-20 w-[12px] h-[12px] rounded-full pointer-events-none animate-bubble-drift"
          style={{
            background: 'rgba(59,130,246,0.45)',
            animationDuration: '9s',
            animationDelay: '2.5s',
          }}
        />

        {/* Diamond / rotated square accent — top right area */}
        <div
          className="absolute top-20 right-28 w-[18px] h-[18px] pointer-events-none animate-bubble-orb"
          style={{
            background: 'rgba(6,182,212,0.3)',
            borderRadius: '4px',
            transform: 'rotate(45deg)',
            animationDuration: '8s',
            animationDelay: '1.8s',
          }}
        />

        {/* Gradient arc line — decorative top */}
        <div
          className="absolute top-0 left-0 w-full h-[3px] pointer-events-none animate-bubble-shimmer"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(6,182,212,0.25) 30%, rgba(59,130,246,0.2) 60%, transparent 100%)',
            animationDuration: '6s',
          }}
        />

        <div className="max-w-7xl mx-auto px-6">
          {/* Section header */}
          <div className="text-center mb-28">
            <SectionTag variant="teal">Our Team</SectionTag>
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-navy mt-5 leading-tight">
              Meet The Minds<br />
              <em className="italic font-light opacity-80">Behind Suvicorp</em>
            </h2>
          </div>

          {/* Cards carousel — shows 4 at a time, scroll buttons for more */}
          <TeamCarousel members={teamMembers} onSelect={setSelectedMember} />
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