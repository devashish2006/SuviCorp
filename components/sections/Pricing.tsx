'use client';

import React, { useState, useEffect } from 'react';


/* ─── Data ─── */
interface Product {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  features: string[];
  tier: 'lite' | 'elite' | 'custom';
  icon: React.ReactNode;
  accentColor: string;
  badgeColor: string;
}

const products: Product[] = [
  /* ── Lite Tools ── */
  {
    id: 'finscribe',
    name: 'SUVI FinScribe',
    shortName: 'FinScribe',
    tagline: 'Automated Financial Reporting',
    description:
      'Transform raw trial balances into polished, board-ready financial reports in minutes, not days. FinScribe eliminates manual linking, formatting, and version-control chaos, giving you a single source of truth that updates with one click.',
    features: [
      'Cuts month-end reporting time by up to 70%',
      'Reduces error risk from manual data consolidation',
      'Works inside Excel — no new software to learn',
      'Produces consistent, audit-friendly report packages every cycle',
    ],
    tier: 'lite',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10 drop-shadow-md">
        <defs>
          <linearGradient id="finGrad1" x1="0" y1="0" x2="40" y2="40">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#1e40af" />
          </linearGradient>
          <linearGradient id="finGrad2" x1="40" y1="0" x2="0" y2="40">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>
        </defs>
        <rect x="8" y="8" width="14" height="24" rx="4" fill="url(#finGrad1)" />
        <rect x="16" y="14" width="16" height="8" rx="3" fill="url(#finGrad2)" opacity="0.9" />
        <rect x="16" y="8" width="10" height="4" rx="2" fill="url(#finGrad2)" opacity="0.7" />
      </svg>
    ),
    accentColor: 'rgba(59,130,246,0.15)',
    badgeColor: '#3b82f6',
  },
  {
    id: 'gaapbridge',
    name: 'SUVI GAAPBridge',
    shortName: 'GAAPBridge',
    tagline: 'GAAP Conversion Tool',
    description:
      'Moving between local GAAP, IFRS, or US GAAP shouldn’t feel like translating a foreign language. GAAPBridge automates the mapping, adjustment entries, and reconciliation, turning a multi-week chore into a push-button process.',
    features: [
      'Instantly converts trial balances across accounting standards',
      'Maintains full audit trail of every adjustment',
      'Handles multi-entity, multi-currency consolidations effortlessly',
      'Keeps you investor- and auditor-ready without external consultants',
    ],
    tier: 'lite',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10 drop-shadow-md">
        <defs>
          <linearGradient id="gaapGrad1" x1="0" y1="40" x2="40" y2="0">
            <stop offset="0%" stopColor="#059669" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
          <linearGradient id="gaapGrad2" x1="0" y1="0" x2="40" y2="40">
            <stop offset="0%" stopColor="#34d399" />
            <stop offset="100%" stopColor="#047857" />
          </linearGradient>
        </defs>
        <path d="M6 28 Q 20 8 34 28" stroke="url(#gaapGrad1)" strokeWidth="6" strokeLinecap="round" />
        <path d="M12 28 Q 20 16 28 28" stroke="url(#gaapGrad2)" strokeWidth="4" strokeLinecap="round" opacity="0.8" />
        <circle cx="20" cy="12" r="4" fill="url(#gaapGrad2)" />
      </svg>
    ),
    accentColor: 'rgba(16,185,129,0.15)',
    badgeColor: '#10b981',
  },
  {
    id: 'proforma',
    name: 'SUVI ProForma Architect',
    shortName: 'ProForma Architect',
    tagline: 'Pro Forma Financial Statement Automation',
    description:
      'Model your future with precision. ProForma Architect dynamically generates integrated pro forma income statements, balance sheets, and cash flows from your operating assumptions, letting you stress-test scenarios in real time.',
    features: [
      'Links P&L, balance sheet, and cash flow automatically',
      'Scenario manager compares base, upside, and downside cases side by side',
      'Perfect for budgeting, fundraising, and M&A readiness',
      'Fully transparent formulas — no black-box logic',
    ],
    tier: 'lite',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10 drop-shadow-md">
        <defs>
          <linearGradient id="proGrad1" x1="0" y1="0" x2="40" y2="40">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#4c1d95" />
          </linearGradient>
          <linearGradient id="proGrad2" x1="40" y1="0" x2="0" y2="40">
            <stop offset="0%" stopColor="#a78bfa" />
            <stop offset="100%" stopColor="#6d28d9" />
          </linearGradient>
        </defs>
        <rect x="8" y="20" width="8" height="12" rx="2" fill="url(#proGrad1)" />
        <rect x="18" y="12" width="8" height="20" rx="2" fill="url(#proGrad2)" />
        <rect x="28" y="6" width="8" height="26" rx="2" fill="url(#proGrad1)" opacity="0.8" />
      </svg>
    ),
    accentColor: 'rgba(139,92,246,0.15)',
    badgeColor: '#8b5cf6',
  },
  {
    id: 'cashflow',
    name: 'SUVI CashFlow Composer',
    shortName: 'CashFlow Composer',
    tagline: 'Cash Flow Statement Automation',
    description:
      'Build a complete indirect or direct cash flow statement straight from your P&L and balance sheet, with drill-down to every line. CashFlow Composer de-risks one of the most error-prone areas of financial reporting.',
    features: [
      'Automates the complex bridging from accrual to cash basis',
      'Flags reconciliation breaks in real time',
      'Supports both GAAP and management reporting views',
      'Slashes review time and last-minute fire drills before close',
    ],
    tier: 'lite',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10 drop-shadow-md">
        <defs>
          <linearGradient id="cashGrad1" x1="0" y1="0" x2="40" y2="40">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#b45309" />
          </linearGradient>
          <linearGradient id="cashGrad2" x1="0" y1="40" x2="40" y2="0">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#d97706" />
          </linearGradient>
        </defs>
        <path d="M8 20 C 14 10, 26 30, 32 20" stroke="url(#cashGrad1)" strokeWidth="5" strokeLinecap="round" />
        <path d="M12 24 C 18 14, 22 26, 28 24" stroke="url(#cashGrad2)" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
        <circle cx="32" cy="14" r="3" fill="url(#cashGrad2)" />
      </svg>
    ),
    accentColor: 'rgba(245,158,11,0.15)',
    badgeColor: '#f59e0b',
  },
  
  /* ── Elite Tools ── */
  {
    id: 'hedgeflow',
    name: 'SUVI Hedge Flow.ai',
    shortName: 'Hedge Flow.ai',
    tagline: 'AI-Powered Hedge Accounting & Valuation Automation',
    description:
      'Hedge accounting is a precision discipline and a documentation marathon. SUVI Hedge Flow.ai automates the complete hedge lifecycle, from input capture to final report, with intelligence at its core. Instead of manually extracting contract terms from term sheets, trade confirmations, and broker statements, Hedge Flow.ai uses AI to ingest and structure those inputs from uploaded documents instantly. The user simply supplies the forward and spot rates, and the engine takes over – calculating fair values, measuring effectiveness, and auto-generating fully compliant documentation at inception and on every subsequent reporting date.',
    features: [
      'AI-Driven Input Extraction',
      'Hands-Free Valuation Engine',
      'Automated Effectiveness Documentation',
      'Refresh, Don’t Rebuild',
      'Compliance-Forward Design',
      'Scalable & Secure Cloud Architecture',
    ],
    tier: 'elite',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10 drop-shadow-lg">
        <defs>
          <linearGradient id="hedgeGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
          <linearGradient id="hedgeGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0ea5e9" />
            <stop offset="100%" stopColor="#1e3a8a" />
          </linearGradient>
        </defs>
        <path d="M20 4L34 11V29L20 36L6 29V11L20 4Z" fill="url(#hedgeGrad1)" opacity="0.2" />
        <path d="M20 4L34 11V29L20 36L6 29V11L20 4Z" stroke="url(#hedgeGrad1)" strokeWidth="2" />
        <circle cx="20" cy="20" r="6" fill="url(#hedgeGrad2)" />
        <circle cx="20" cy="20" r="10" stroke="url(#hedgeGrad1)" strokeWidth="1.5" strokeDasharray="4 4" />
      </svg>
    ),
    accentColor: 'rgba(6,182,212,0.2)',
    badgeColor: '#06b6d4',
  },
  {
    id: 'fusionclose',
    name: 'SUVI FusionClose',
    shortName: 'FusionClose',
    tagline: 'Intelligent Financial Consolidation & Linked Reporting',
    description:
      'Taking the best of what modern close platforms offer and pushing it further, SUVI FusionClose is an enterprise-grade consolidation engine built for teams that need control, speed, and narrative-ready output – all from one system.\n\nThe platform starts with a robust base consolidation layer. On top of that, its Forex Translation Module handles complex currency conversions – translating subsidiaries’ financials from functional to presentation currency – automatically applying the correct rates (average, closing, historical) per account type and accounting standard. The Intercompany Elimination Module takes an uploaded input template of intercompany balances and transactions, intelligently matches them, identifies breaks, and generates the elimination entries – removing the most painful part of group close. Finally, the Linked Reporting Engine goes far beyond simple copy-paste: it creates a persistent, dynamic connection between Excel workbooks and Word reports (and presentations). Update a number in your consolidation model, and every linked table, commentary, and disclosure in the Word pack updates instantly – no broken links, no version chaos.',
    features: [
      'Multi-Currency',
      'Intercompany Elimination',
      'Live Excel and Word Linking',
      'Enterprise Controls & Audit Trail',
      'Cloud-Native with On-Premises Sensibility',
    ],
    tier: 'elite',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10 drop-shadow-lg">
        <defs>
          <linearGradient id="fusionGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#1d4ed8" />
          </linearGradient>
          <linearGradient id="fusionGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#93c5fd" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>
        </defs>
        <circle cx="16" cy="20" r="10" fill="url(#fusionGrad1)" opacity="0.8" />
        <circle cx="24" cy="20" r="10" fill="url(#fusionGrad2)" opacity="0.8" style={{ mixBlendMode: 'screen' }} />
        <path d="M20 12v16M12 20h16" stroke="#ffffff" strokeWidth="1.5" opacity="0.5" />
      </svg>
    ),
    accentColor: 'rgba(59,130,246,0.2)',
    badgeColor: '#3b82f6',
  },
  {
    id: 'boardroomiq',
    name: 'SUVI Boardroom IQ',
    shortName: 'Boardroom IQ',
    tagline: 'Custom-Engineered CFO Dashboard for Strategic Leadership',
    description:
      'Every chairperson, CFO, and leadership team has a unique set of numbers, narratives, and early-warning signals they need at their fingertips – not buried in a 40-slide deck prepared at the last minute. SUVI Boardroom IQ is a fully tailored, enterprise-grade dashboard that puts exactly those metrics on a single, live pane of glass, custom-built to how your leaders think and decide.\n\nInstead of forcing your team to conform to a generic template, we co-design Boardroom IQ around the KPIs, cash-flow levers, operational indicators, and market signal your stakeholders track, freeing your finance team from days of manual report building.\n\nBecause it’s implemented specifically for your organization, Boardroom IQ connects directly to your existing data sources, harmonizes the information automatically, and presents it in a clear, no-training-required interface that the chair can confidently navigate live during board meetings, investor calls, or operational reviews. Time once spent hunting for gaps and preparing reports is now spent finding solutions.',
    features: [
      'Built Around Your Leadership DNA',
      'Chair-Ready Meeting Navigation',
      'Dramatic Reduction in Reporting Effort',
      'Live Data, Always Current',
      'Gap Detection, Not Just Reporting',
      'Stakeholder-Aligned Views',
      'Enterprise Security & Governance',
    ],
    tier: 'elite',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10 drop-shadow-lg">
        <defs>
          <linearGradient id="boardGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#581c87" />
          </linearGradient>
          <linearGradient id="boardGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#c084fc" />
            <stop offset="100%" stopColor="#7e22ce" />
          </linearGradient>
        </defs>
        <path d="M20 4 L32 14 L28 30 L12 30 L8 14 Z" fill="url(#boardGrad1)" />
        <path d="M20 4 L32 14 L20 20 Z" fill="url(#boardGrad2)" opacity="0.6" />
        <path d="M20 4 L8 14 L20 20 Z" fill="url(#boardGrad2)" opacity="0.4" />
        <path d="M8 14 L12 30 L20 20 Z" fill="url(#boardGrad2)" opacity="0.2" />
        <circle cx="20" cy="20" r="3" fill="#ffffff" opacity="0.8" />
      </svg>
    ),
    accentColor: 'rgba(139,92,246,0.2)',
    badgeColor: '#8b5cf6',
  },
  
  /* ── Custom Tools ── */
  {
    id: 'customengine',
    name: 'SUVI Custom Engine',
    shortName: 'Custom Development',
    tagline: 'Tailored Enterprise Solutions',
    description:
      'We build bespoke technology solutions that integrate perfectly with your existing architecture, ensuring your firm stays ahead of the curve.',
    features: [
      'Dedicated engineering teams',
      'White-label deployment options',
      'Full-stack cloud architecture',
    ],
    tier: 'custom',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10 drop-shadow-lg">
        <defs>
          <linearGradient id="customGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#34d399" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
          <linearGradient id="customGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#047857" />
          </linearGradient>
        </defs>
        <path d="M20 4L34 12V28L20 36L6 28V12L20 4Z" fill="url(#customGrad1)" opacity="0.2" />
        <path d="M20 4L34 12V28L20 36L6 28V12L20 4Z" stroke="url(#customGrad1)" strokeWidth="2" />
        <circle cx="20" cy="20" r="4" fill="url(#customGrad2)" />
        <line x1="20" y1="4" x2="20" y2="12" stroke="url(#customGrad1)" strokeWidth="1.5" />
        <line x1="6" y1="12" x2="13" y2="16" stroke="url(#customGrad1)" strokeWidth="1.5" />
        <line x1="34" y1="12" x2="27" y2="16" stroke="url(#customGrad1)" strokeWidth="1.5" />
      </svg>
    ),
    accentColor: 'rgba(16,185,129,0.2)',
    badgeColor: '#10b981',
  },
];

const liteTools = products.filter((p) => p.tier === 'lite');
const eliteTools = products.filter((p) => p.tier === 'elite');
const customTools = products.filter((p) => p.tier === 'custom');

/* ─── Product Detail Modal ─── */
interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    if (product) {
      document.addEventListener('keydown', onKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [product, onClose]);

  if (!product) return null;

  const isElite = product.tier === 'elite';

  return (
    <div
      className="fixed inset-0 z-[300] flex items-center justify-center p-4 sm:p-8"
      style={{ animation: 'productOverlayIn 0.3s ease both' }}
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[#020813]/80 backdrop-blur-xl" />

      {/* Full-width Modal */}
      <div
        className="relative z-10 w-full max-w-6xl max-h-[95vh] rounded-[2rem] overflow-y-auto md:overflow-hidden shadow-2xl flex flex-col md:flex-row bg-[#081324] custom-scrollbar"
        style={{
          animation: 'productModalIn 0.4s cubic-bezier(0.16,1,0.3,1) both',
          border: `1px solid ${product.badgeColor}30`,
          boxShadow: `0 32px 80px rgba(0,0,0,0.8), 0 0 0 1px ${product.badgeColor}15, 0 0 80px ${product.badgeColor}10`,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left Column (Visual & Hero Info) */}
        <div
          className="relative w-full md:w-[45%] lg:w-[40%] flex flex-col p-6 md:p-12 justify-center overflow-hidden flex-shrink-0"
          style={{
            background: isElite
              ? 'linear-gradient(160deg, #0a1628 0%, #060d18 100%)'
              : 'linear-gradient(160deg, #101e33 0%, #0a1628 100%)',
          }}
        >
          {/* Background Glow */}
          <div 
            className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/4"
            style={{ background: product.badgeColor, opacity: 0.12 }}
          />

          {/* Close for mobile (absolute top right) */}
          <button
            onClick={onClose}
            className="md:hidden absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:bg-white/10 z-50"
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 1L13 13M13 1L1 13" stroke="rgba(255,255,255,0.7)" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>

          <div className="relative z-10 flex flex-col gap-8">
            <div
              className="w-24 h-24 rounded-3xl flex items-center justify-center shadow-2xl"
              style={{ 
                background: `linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%)`, 
                border: `1px solid rgba(255,255,255,0.1)`,
                boxShadow: `inset 0 1px 1px rgba(255,255,255,0.1), 0 12px 32px rgba(0,0,0,0.5)`
              }}
            >
              <div className="scale-125">{product.icon}</div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-md"
                  style={{
                    background: `${product.badgeColor}15`,
                    border: `1px solid ${product.badgeColor}40`,
                    color: product.badgeColor,
                  }}
                >
                  <div
                    className="w-2 h-2 rounded-full animate-pulse"
                    style={{ background: product.badgeColor, boxShadow: `0 0 8px ${product.badgeColor}` }}
                  />
                  {isElite ? 'Elite Series' : product.tier === 'custom' ? 'Custom Series' : 'Lite Series'}
                </div>
              </div>

              <h2 className="font-playfair text-4xl md:text-5xl font-bold leading-tight text-white mb-3">
                {product.name}
              </h2>
              <p
                className="text-lg md:text-xl font-medium tracking-wide"
                style={{ color: product.badgeColor }}
              >
                {product.tagline}
              </p>
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:block mt-8">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  onClose();
                  window.dispatchEvent(new Event('openPartnerModal'));
                }}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{
                  background: `linear-gradient(135deg, ${product.badgeColor} 0%, ${product.badgeColor}aa 100%)`,
                  color: '#ffffff',
                  boxShadow: `0 8px 30px ${product.badgeColor}50`,
                }}
              >
                Get Demo
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Right Column (Details) */}
        <div className="w-full md:w-[55%] lg:w-[60%] flex flex-col overflow-visible md:max-h-[95vh] md:overflow-y-auto custom-scrollbar relative">
          
          {/* Close button for Desktop (absolute top right of right panel) */}
          <button
            onClick={onClose}
            className="hidden md:flex absolute top-8 right-8 w-12 h-12 rounded-full items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-white/5 z-50"
            style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.05)',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
              <path d="M1 1L13 13M13 1L1 13" stroke="rgba(255,255,255,0.7)" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>

          <div className="p-6 md:p-12 space-y-10">
            {/* Description Paragraphs (Handling newlines) */}
            <div className="space-y-6">
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
                Product Overview
              </h3>
              <div className="space-y-4">
                {product.description.split('\n').map((paragraph, i) => (
                  <p key={i} className="text-[1.05rem] md:text-lg leading-relaxed text-slate-300 font-light">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Core Capabilities */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] mb-6 text-slate-500">
                Core Capabilities
              </h3>
              <ul className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-6">
                {product.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                    <div
                      className="mt-1 flex-shrink-0 w-2 h-2 rounded-full"
                      style={{ background: product.badgeColor, boxShadow: `0 0 12px ${product.badgeColor}` }}
                    />
                    <span className="text-[0.95rem] leading-relaxed text-slate-200">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Mobile CTA */}
            <div className="md:hidden pt-8 border-t border-white/10">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  onClose();
                  window.dispatchEvent(new Event('openPartnerModal'));
                }}
                className="w-full flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest"
                style={{
                  background: `linear-gradient(135deg, ${product.badgeColor} 0%, ${product.badgeColor}aa 100%)`,
                  color: '#ffffff',
                }}
              >
                Get Demo
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes productOverlayIn {
          from { opacity: 0; backdrop-filter: blur(0px); }
          to   { opacity: 1; backdrop-filter: blur(12px); }
        }
        @keyframes productModalIn {
          from { opacity: 0; transform: translateY(32px) scale(0.95); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0,0,0,0.1);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255,255,255,0.1);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255,255,255,0.2);
        }
      `}</style>
    </div>
  );
};

/* ─── Product Pill Card ─── */
const ProductPill: React.FC<{ product: Product; onClick: () => void }> = ({
  product,
  onClick,
}) => {
  let bgGradient = 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)'; // lite
  if (product.tier === 'elite') {
    bgGradient = 'linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)';
  } else if (product.tier === 'custom') {
    bgGradient = 'linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.015) 100%)';
  }

  return (
    <button
      onClick={onClick}
      className="group relative w-full h-full text-left rounded-2xl transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a1628] flex items-center p-5 md:p-6 overflow-hidden"
      style={{
        background: bgGradient,
        border: `1px solid rgba(255,255,255,0.08)`,
        boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.05), 0 4px 24px rgba(0,0,0,0.2)',
      }}
      aria-label={`View details for ${product.name}`}
    >
      {/* Hover glow overlay */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${product.badgeColor}15 0%, transparent 80%)`,
          border: `1px solid ${product.badgeColor}40`,
          boxShadow: `0 0 30px ${product.badgeColor}20`,
        }}
      />

      <div className="relative flex items-center gap-5 w-full">
        {/* Icon */}
        <div
          className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 shadow-lg"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 100%)',
            border: '1px solid rgba(255,255,255,0.1)',
            boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.1)',
          }}
        >
          {/* We shrink the icon slightly for the card view */}
          <div className="scale-[0.65] transform-gpu transition-transform duration-500 group-hover:rotate-3">
            {product.icon}
          </div>
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <p className="font-bold text-[0.95rem] leading-tight truncate text-white transition-colors duration-300">
            {product.shortName}
          </p>
          <p className="text-[0.75rem] mt-1 truncate font-medium tracking-wide" style={{ color: product.badgeColor, opacity: 0.9 }}>
            {product.tagline}
          </p>
        </div>

        {/* Arrow */}
        <svg
          className="flex-shrink-0 w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
          style={{ color: product.badgeColor }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </button>
  );
};

/* ─── Main Export ─── */
export const Pricing: React.FC = () => {
  const [selected, setSelected] = useState<Product | null>(null);

  return (
    <>
      <span id="products" className="block" aria-hidden="true" />

      {/* Premium Dark Section */}
      <section id="pricing" className="bg-[#0a1628] pt-12 pb-24 md:pt-16 md:pb-32 px-[5%] relative overflow-hidden">
        
        {/* Elite Ambient Lighting */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none opacity-[0.03]"
          style={{ background: 'radial-gradient(circle, #0ea5e9 0%, transparent 70%)', transform: 'translate(30%, -30%)' }} />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-[0.03]"
          style={{ background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)', transform: 'translate(-30%, 30%)' }} />
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02]" 
          style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
        />

        <div className="relative max-w-7xl mx-auto z-10">

          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-400/20 bg-blue-400/5 mb-6 mx-auto">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-blue-400/90">
                Our Product Portfolio
              </span>
            </div>
            
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-2 mb-6 leading-tight">
              Solutions Engineered <br className="hidden sm:block"/>
              <span className="italic font-light opacity-90 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                for Excellence
              </span>
            </h2>
            <p className="text-slate-400 text-base md:text-lg max-w-[640px] mx-auto leading-relaxed font-light break-words">
              From Excel-powered automation to enterprise cloud platforms. Click any product to explore its capabilities.
              All tools can be seamlessly white-labelled to carry your firm&apos;s brand.
            </p>
          </div>

          {/* Three-column tier layout */}
          <div className="grid lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-white/10 relative">

            {/* ── Lite Tools Column ── */}
            <div className="relative pb-12 lg:pb-0 lg:pr-10">
              {/* Column glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-500/5 blur-[100px] pointer-events-none rounded-full" />
              
              <div className="relative z-10">
                {/* Tier header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center bg-blue-500/10 border border-blue-500/20">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-wide">Lite Series</h3>
                    <p className="text-xs text-blue-400 font-medium tracking-wider uppercase mt-1">
                      Excel-native & Power BI
                    </p>
                  </div>
                </div>
                
                <p className="text-[0.9rem] text-slate-400/90 font-light leading-relaxed mb-8 lg:min-h-[260px] xl:min-h-[220px] break-words">
                  SUVI Corp’s Lite Tools are a curated suite of intelligent, Excel and Power BI-based solutions built to solve critical reporting, compliance, and planning challenges – fast and produce enterprise-class outcomes at a fraction of the time and cost.
                </p>

                {/* Product pills stacked */}
                <div className="flex flex-col gap-4">
                  {liteTools.map((p) => (
                    <ProductPill
                      key={p.id}
                      product={p}
                      onClick={() => setSelected(p)}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* ── Elite Tools Column ── */}
            <div className="relative py-12 lg:py-0 lg:px-10">
              {/* Column glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-cyan-500/5 blur-[100px] pointer-events-none rounded-full" />
              
              <div className="relative z-10">
                {/* Tier header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center bg-cyan-500/10 border border-cyan-500/20">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-wide">Elite Series</h3>
                    <p className="text-xs text-cyan-400 font-medium tracking-wider uppercase mt-1">
                      Cloud-native & AI-powered
                    </p>
                  </div>
                </div>
                
                <p className="text-[0.9rem] text-slate-400/90 font-light leading-relaxed mb-8 lg:min-h-[260px] xl:min-h-[220px] break-words">
                  When spreadsheets reach their breaking point and compliance, scale, and control become non-negotiable, SUVI’s Elite Tools step in. These are full-stack, cloud-based applications built for the demands of sophisticated finance teams – combining deep domain workflows with artificial intelligence precisely where it unlocks speed, accuracy, and insight. Each Elite Tool is engineered to run complex processes at enterprise scale without the enterprise IT headache. Fast to deploy, secure by design, and priced for value, they give your team a competitive edge that legacy systems and manual work simply cannot match.
                </p>

                {/* Product pills stacked */}
                <div className="flex flex-col gap-4">
                  {eliteTools.map((p) => (
                    <ProductPill
                      key={p.id}
                      product={p}
                      onClick={() => setSelected(p)}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* ── Custom Tools Column ── */}
            <div className="relative pt-12 lg:pt-0 lg:pl-10">
              {/* Column glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-emerald-500/5 blur-[100px] pointer-events-none rounded-full" />
              
              <div className="relative z-10">
                {/* Tier header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center bg-emerald-500/10 border border-emerald-500/20">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-wide">Custom Series</h3>
                    <p className="text-xs text-emerald-400 font-medium tracking-wider uppercase mt-1">
                      Bespoke Architecture
                    </p>
                  </div>
                </div>

                <p className="text-[0.9rem] text-slate-400/90 font-light leading-relaxed mb-8 lg:min-h-[260px] xl:min-h-[220px] break-words">
                  When off-the-shelf solutions aren&apos;t enough, SUVI’s Custom Development team engineers bespoke architecture tailored to your exact operational DNA. We build full-stack, enterprise-grade platforms that integrate seamlessly with your existing infrastructure, ensuring you maintain a unique competitive advantage. From white-label deployments to dedicated engineering pods, our custom solutions provide the ultimate flexibility, security, and scalability for firms leading the charge in financial innovation.
                </p>

                {/* Product pills stacked */}
                <div className="flex flex-col gap-4">
                  {customTools.map((p) => (
                    <ProductPill
                      key={p.id}
                      product={p}
                      onClick={() => setSelected(p)}
                    />
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      <ProductModal product={selected} onClose={() => setSelected(null)} />
    </>
  );
};
