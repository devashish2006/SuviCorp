'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { SectionTag, TeamProfileModal } from '../ui';
import type { TeamMember } from '../ui';


const partners = [
  {
    id: 'fsnm',
    name: 'FSNM',
    logo: '/FSNM.jpeg',
  },
  {
    id: 'gcas',
    name: 'GCAS',
    logo: '/GCAS.jpeg',
  },
  {
    id: 'snr',
    name: 'SNR',
    logo: '/SNR.jpeg',
  },
];

const teamMembers: TeamMember[] = [
  {
    id: 'jatin-bhatia',
    name: 'Jatin Bhatia',
    role: 'Founder & Managing Partner',
    image: '/jatinArmsFolded-removebg-preview.png',
    imageOffset: '-50px',
    imageScale: '88%',
    tagline: 'Democratizing advanced technology for firms that deserve Big Four-calibre tools.',
    highlights: [
      'Founded Suvicorp with a singular vision: to revolutionize how mid-tier firms and clients with limited access to technology operate — a Chartered Accountant from the Institute of Chartered Accountants of India (ICAI).',
      'Over 15 years of experience spanning accounting, auditing, and accounting advisory, including deep tenures at Big Four firms gaining invaluable insights into running innovation agendas.',
      'Has dedicated his career to mastering the complexities of technical accounting while innovating technologies that automate accounting processes, drive efficiencies, and standardize delivery.',
    ],
    expertise: [
      {
        label: 'Proprietary Automation Built',
        items: [
          'Led development of "STAT tool" — automating acquisition accounting, deployed on live engagements.',
          'Contributed to "PROFiler" — automating pro forma financial statement generation.',
          'Developed PMO tooling for project plan generation and standardized Power BI reporting.',
          'Led IPO Data Hub development outlining insightful trends in US IPO markets.',
          'Built IPO Enabler to help engagement teams run readiness engagements efficiently.',
          'Strategically layered AI and machine learning across all proprietary products.',
        ],
      },
      {
        label: 'Technical Accounting Expertise',
        items: [
          'Accounting memorandums: business combinations, stock compensation, revenues, leases, segment reporting, asset impairment, debt.',
          'Financial statements — S-1/S-4 support, pro forma financials, MD&A, including upliftment.',
          'Acquisition accounting workbooks (Day 1 and Day 2 accounting).',
          'Accounting policy manuals for IPO engagements.',
          'GAAP conversions, audit support, and benchmarking (accounting, KPI, MD&A).',
        ],
      },
    ],
    quote: 'My commitment is to drive meaningful change for every client — leveraging cutting-edge technology to deliver insight-driven services that transform how businesses navigate financial complexity.',
  },
  {
    id: 'mark-warzecha',
    name: 'Mark Warzecha',
    role: 'Partner & US Chapter Head',
    image: '/mark-removebg-preview.png',
    imageClass: 'team-member-img--mark',
    imageOffset: '-50px',
    imageScale: '88%',
    tagline: 'Leading Suvicorp\'s United States practice with deep expertise in accounting advisory and client strategy.',
    highlights: [
      'Partner and US Chapter Head at Suvicorp — responsible for leading the United States practice and overseeing client relationships across the region.',
      'Certified Public Accountant (CPA) with extensive experience in accounting advisory, bringing a wealth of cross-industry expertise to the firm.',
      'Career defined by helping organizations navigate complex financial reporting challenges, technical accounting transformations, and transaction readiness.',
    ],
    expertise: [
      {
        label: 'Areas of Expertise',
        items: [
          'Complex financial reporting and technical accounting advisory.',
          'Transaction readiness — M&A, IPO/SPAC, and divestitures.',
          'Strategic front-line advisory for US-based clients.',
          'Cross-industry accounting and financial compliance.',
          'Client-centric, practical solutions for American business landscape challenges.',
        ],
      },
    ],
    quote: 'Delivering responsive, contextually relevant advisory that meets clients exactly where they are — with practical solutions that drive real outcomes.',
  },
  {
    id: 'saima-siddiqui',
    name: 'Saima Siddiqui',
    role: 'Partner & MENA Chapter Head',
    image: '/saima-removebg-preview.png',
    imageClass: 'team-member-img--saima',
    imageOffset: '-40px',
    imageScale: '88%',
    tagline: 'Leading Suvicorp\'s MENA operations with deep regional expertise and a rigorous accounting foundation.',
    highlights: [
      'Partner and MENA Chapter Head at Suvicorp — leads operations across Saudi Arabia and the broader Middle East and North Africa region.',
      'A Chartered Accountant from ICAI with a robust foundation in technical accounting and audit rigor; the majority of her career spent auditing companies across a wide spectrum of industries.',
      'Primary strategic lead for MENA clients, ensuring every engagement is attuned to local regulatory frameworks, cultural nuances, and the unique business drivers of the region.',
    ],
    expertise: [
      {
        label: 'Regional & Technical Expertise',
        items: [
          'Strategic advisory leadership across Saudi Arabia and the MENA region.',
          'Extensive audit experience across diverse industries and business models.',
          'Financial health assessment, risk identification, and actionable solutions.',
          'Complex financial reporting and compliance in the MENA regulatory landscape.',
          'Cross-cultural client engagement and regional market understanding.',
        ],
      },
    ],
    quote: 'True partnership means understanding not just the numbers — but the regulatory environment, cultural context, and business reality of every client we serve.',
  },
  {
    id: 'ritesh-shah',
    name: 'Ritesh Shah',
    role: 'Partner & India Regional Head',
    image: '/ritesh-removebg-preview.png',
    imageClass: 'team-member-img--ritesh',
    imageOffset: '-50px',
    imageScale: '88%',
    tagline: 'Bringing a unique inside-out perspective — built from years managing complex finance functions within industry.',
    highlights: [
      'Partner and India Regional Head at Suvicorp, based out of Ahmedabad — a Chartered Accountant from the Institute of Chartered Accountants of India (ICAI).',
      'Over eight years based in Dubai managing FP&A, accounting, and reporting in a dynamic international environment; continued leading accounting and reporting processes for prestigious Indian organizations upon return.',
      'Uniquely positioned with dual perspective: extensive experience managing finance functions from within industry before transitioning to advisory — giving him firsthand understanding of what clients face with auditors, regulators, and stakeholders.',
    ],
    expertise: [
      {
        label: 'Areas of Expertise',
        items: [
          'Financial planning & analysis (FP&A), accounting, and reporting in international markets.',
          'Building robust accounting processes and streamlining reporting cycles.',
          'Audit and transaction readiness from the client\'s perspective.',
          'Finance function leadership within listed organizations.',
          'Cross-border financial management across India and the UAE.',
        ],
      },
    ],
    quote: 'I understand exactly what it takes to build robust accounting processes — because I have lived that responsibility myself.',
  },
  {
    id: 'aman-garg',
    name: 'Aman Garg',
    role: 'Partner & Technical Head',
    image: '/amanArmsFolded-removebg-preview.png',
    imageOffset: '-50px',
    imageScale: '88%',
    tagline: 'Leading Suvicorp\'s technology practice — ensuring the right talent and tools power every client and product.',
    highlights: [
      'Partner and Technical Head at Suvicorp, based out of Poland — leads the technology practice and oversees development of all internally built software and automation tools.',
      'A results-oriented professional with over 14 years of experience managing large-scale global transformations and programs, bringing a rare combination of deep technical expertise and strategic business consulting acumen.',
      'Career defined by delivering measurable impact through digital transformation, fraud and risk mitigation, data analytics, and operations management at global scale.',
    ],
    expertise: [
      {
        label: 'Areas of Expertise',
        items: [
          'Technology practice leadership and proprietary product roadmap oversight.',
          'Large-scale global digital transformation programs.',
          'Business consulting for financial services and fraud & risk mitigation.',
          'Data analytics and operations management at global scale.',
          'Innovation management, organizational change, and process improvement.',
        ],
      },
    ],
    quote: 'Driving meaningful transformation through innovation, strategy, and relentless execution.',
  },
  {
    id: 'ankur-tiwari',
    name: 'Ankur Tiwari',
    role: 'Lead Developer',
    image: '/ankurArmsFolded-removebg-preview.png',
    imageOffset: '-50px',
    imageScale: '88%',
    tagline: 'Architecting and building Suvicorp\'s proprietary product suite — translating accounting complexity into scalable software.',
    highlights: [
      'Lead Developer at Suvicorp, based in India — responsible for architecting and building the proprietary product suite that powers Suvicorp\'s automation ecosystem.',
      'An experienced and specialized Full Stack Java Developer with over 12 years of professional experience, including significant tenures with Tata Consultancy Services (TCS).',
      'Proven track record of delivering high-quality enterprise-grade solutions across front-end and back-end development for diverse clients and industries.',
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
    id: 'amit-salunkhe',
    name: 'Amit Salunkhe',
    role: 'Developer & AI Lead',
    image: '/amitPosture-removebg-preview.png',
    imageOffset: '-40px',
    imageScale: '88%',
    tagline: 'Senior Full Stack Developer and AI Lead driving innovation across Suvicorp\'s Poland technology hub.',
    highlights: [
      'Seasoned Senior Full Stack Developer with over 14 years of experience, based out of Suvicorp\'s Poland technology hub — proven track record including a 25% increase in user engagement.',
      'Skilled in Agile methodologies, having served as both Scrum Master and Tech Lead, with a focus on driving innovation and efficiency across development teams.',
      'Plays a pivotal role at Suvicorp in building proprietary automation tools, contributing to the full development lifecycle while mentoring team members and driving agile delivery.',
    ],
    expertise: [
      {
        label: 'Technical & Leadership Skills',
        items: [
          'Full stack development across front-end and back-end with 14+ years of experience.',
          'Application performance optimization and user experience enhancement.',
          'Agile delivery — Scrum Master and Tech Lead roles across multiple teams.',
          'AI integration and automation tooling for proprietary product suite.',
          'Team mentorship and engineering leadership across global development efforts.',
        ],
      },
    ],
    quote: 'Technical depth, problem-solving mindset, and a commitment to impactful solutions — that is what drives everything we build.',
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
          <line x1="240" y1="210" x2="95" y2="85" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="4 3" />
          <line x1="240" y1="210" x2="385" y2="85" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="4 3" />
          <line x1="240" y1="210" x2="75" y2="210" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="4 3" />
          <line x1="240" y1="210" x2="405" y2="210" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="4 3" />
          <line x1="240" y1="210" x2="95" y2="340" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="4 3" />
          <line x1="240" y1="210" x2="385" y2="340" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="4 3" />
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>

        {/* Node cards — absolute radial positions */}
        <div className="hub-node absolute" style={{ top: '2%', left: '0%' }}><HubNode item={hubItems[0]} delay={0} /></div>
        <div className="hub-node absolute" style={{ top: '2%', right: '0%' }}><HubNode item={hubItems[1]} delay={0.1} /></div>
        <div className="hub-node absolute" style={{ top: '50%', left: '0%', transform: 'translateY(-50%)' }}><HubNode item={hubItems[2]} delay={0.2} /></div>
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

          {/* ── Marquee strip ── */}
          <div
            className="mt-12 md:mt-16 overflow-hidden w-full max-w-5xl mx-auto px-4 pb-20 text-center"
            style={{ animation: 'fadeUp 0.8s ease-out 1s both' }}
          >
            {/* Tag & Description */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal/30 bg-teal/5 mb-6 mx-auto">
              <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
              <span className="text-xs font-semibold tracking-[0.18em] uppercase text-teal/90">
                Trusted by our Partners
              </span>
            </div>

            <h3 className="mb-20 text-2xl md:text-3xl lg:text-4xl font-bold text-white max-w-4xl mx-auto leading-tight">
              A growing network of elite accounting and consulting partners who trust Suvicorp to deliver{' '}
              <span className="relative inline-block whitespace-nowrap">
                <span className="relative z-10 bg-gradient-to-r from-blue-400 via-teal to-cyan-300 bg-clip-text text-transparent">
                  technology that matters.
                </span>
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 via-teal to-cyan-300 opacity-60 blur-sm" />
              </span>
            </h3>

            <div className="flex items-center gap-4 mb-12 justify-center opacity-80">
              <div className="h-px flex-1 max-w-[160px] bg-gradient-to-r from-transparent to-slate-600" />
              <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-slate-400">
                Our Partnership Network
              </span>
              <div className="h-px flex-1 max-w-[160px] bg-gradient-to-l from-transparent to-slate-600" />
            </div>

            <div className="relative">
              {/* Edge fade masks */}
              <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 z-10 bg-gradient-to-r from-[#0a1628] to-transparent pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 z-10 bg-gradient-to-l from-[#0a1628] to-transparent pointer-events-none" />

              {/* Scrolling track */}
              <div className="flex gap-10 animate-marquee-partners whitespace-nowrap items-center">
                {[...partners, ...partners, ...partners, ...partners, ...partners, ...partners].map((p, i) => (
                  <div key={i} className="inline-flex items-center gap-3 shrink-0">
                    <div className="w-16 h-8 rounded-lg overflow-hidden border border-white/10 flex-shrink-0 bg-white flex items-center justify-center p-1">
                      <Image src={p.logo} alt={p.name} width={56} height={28} className="w-full h-full object-contain" unoptimized />
                    </div>
                    <span className="text-slate-500 font-bold text-sm tracking-wider">{p.name}</span>
                    <span className="text-slate-700 text-xl font-light">·</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <style jsx>{`
            @keyframes marquee-partners {
              0%   { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee-partners {
              animation: marquee-partners 22s linear infinite;
            }
          `}</style>
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