'use client';

import React, { useState, useEffect } from 'react';
import { SectionTag, SectionTitle } from '../ui';

/* ─── Data ─── */
interface Product {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  features: string[];
  tier: 'lite' | 'elite';
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
      'Transforms raw trial balances into polished, board-ready financial reports within minutes. Eliminates manual linking, formatting, and version-control issues by creating a single source of truth.',
    features: [
      'Reduce month-end reporting time by up to 70%',
      'Minimize manual consolidation errors',
      'Works directly inside Excel',
      'Produces consistent, audit-ready reports',
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
      'Automates conversion between Local GAAP, IFRS, and US GAAP by handling mappings, adjustment entries, and reconciliations automatically.',
    features: [
      'Instant trial balance conversion',
      'Multi-entity & Multi-currency support',
      'Simplifies accounting standard conversions',
      'Keeps organizations audit and investor ready',
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
    tagline: 'Integrated Pro Forma Generator',
    description:
      'Automatically generates integrated Pro Forma financial statements, balance sheets, and cash flow statements from operating assumptions.',
    features: [
      'Automatically links P&L, Balance Sheet, Cash Flow',
      'Scenario comparison & Budgeting support',
      'Fundraising & M&A planning',
      'Fully transparent formulas',
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
    tagline: 'Automated Cash Flow Statement',
    description:
      'Automates Cash Flow Statement creation using P&L and Balance Sheet data, reducing review time before financial close.',
    features: [
      'Automatic accrual-to-cash reconciliation',
      'Detects reconciliation breaks',
      'Supports GAAP and management reporting',
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
  {
    id: 'iponavigator',
    name: 'SUVI IPO Navigator',
    shortName: 'IPO Navigator',
    tagline: 'IPO Readiness Power BI Dashboard',
    description:
      'Power BI dashboard that tracks IPO readiness across governance, financial reporting, internal controls, and operational KPIs.',
    features: [
      'IPO readiness scorecards',
      'Regulatory gap detection',
      'Live readiness tracking & Interactive dashboards',
    ],
    tier: 'lite',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10 drop-shadow-md">
        <defs>
          <linearGradient id="ipoGrad1" x1="0" y1="40" x2="40" y2="0">
            <stop offset="0%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#be185d" />
          </linearGradient>
          <linearGradient id="ipoGrad2" x1="0" y1="0" x2="40" y2="40">
            <stop offset="0%" stopColor="#f472b6" />
            <stop offset="100%" stopColor="#db2777" />
          </linearGradient>
        </defs>
        <path d="M20 4 L24 16 L36 20 L24 24 L20 36 L16 24 L4 20 L16 16 Z" fill="url(#ipoGrad1)" />
        <circle cx="20" cy="20" r="4" fill="#ffffff" opacity="0.9" />
      </svg>
    ),
    accentColor: 'rgba(236,72,153,0.15)',
    badgeColor: '#ec4899',
  },
  {
    id: 'cfoinsight',
    name: 'SUVI CFO Insight Hub',
    shortName: 'CFO Insight Hub',
    tagline: 'Executive Performance Dashboard',
    description:
      'Executive Power BI dashboard providing real-time visibility into cash, profitability, working capital, and operational KPIs.',
    features: [
      'CEO-ready dashboards (Works without data warehouse)',
      'Custom KPIs & Continuous performance management',
      'Accessible across devices',
    ],
    tier: 'lite',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10 drop-shadow-md">
        <defs>
          <linearGradient id="cfoGrad1" x1="0" y1="0" x2="40" y2="40">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#0369a1" />
          </linearGradient>
          <linearGradient id="cfoGrad2" x1="40" y1="0" x2="0" y2="40">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#0891b2" />
          </linearGradient>
        </defs>
        <circle cx="20" cy="20" r="14" stroke="url(#cfoGrad1)" strokeWidth="5" />
        <path d="M20 6 A 14 14 0 0 1 34 20 L 20 20 Z" fill="url(#cfoGrad2)" />
      </svg>
    ),
    accentColor: 'rgba(6,182,212,0.15)',
    badgeColor: '#06b6d4',
  },

  /* ── Elite Tools ── */
  {
    id: 'hedgeflow',
    name: 'SUVI Hedge Flow.ai',
    shortName: 'Hedge Flow.ai',
    tagline: 'AI-Powered Hedge Accounting Platform',
    description:
      'AI-powered hedge accounting and valuation platform that automates the entire hedge accounting lifecycle from document ingestion to reporting.',
    features: [
      'AI document extraction & Automated valuation engine',
      'Effectiveness testing & Compliance documentation',
      'Forward design architecture & Secure cloud platform',
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
    tagline: 'Enterprise Financial Consolidation',
    description:
      'Enterprise-grade financial consolidation platform with linked reporting, forex translation, and intercompany elimination.',
    features: [
      'Multi-currency consolidation & Forex translation',
      'Intercompany elimination & Live Excel-Word linking',
      'Enterprise audit controls & Cloud-native architecture',
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
    tagline: 'Executive Strategic Intelligence',
    description:
      'Custom executive dashboard built specifically for CFOs, CEOs, and board members, delivering live strategic insights.',
    features: [
      'Leadership-focused dashboards & Meeting-ready interface',
      'Live operational data & Reporting gap detection',
      'Stakeholder-aligned views & Enterprise security',
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
];

const liteTools = products.filter((p) => p.tier === 'lite');
const eliteTools = products.filter((p) => p.tier === 'elite');

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
      className="fixed inset-0 z-[300] flex items-center justify-center px-4 py-8"
      style={{ animation: 'productOverlayIn 0.3s ease both' }}
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[#020813]/80 backdrop-blur-xl" />

      {/* Modal */}
      <div
        className="relative z-10 w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl"
        style={{
          animation: 'productModalIn 0.4s cubic-bezier(0.16,1,0.3,1) both',
          background: isElite
            ? 'linear-gradient(160deg, #0a1628 0%, #060d18 100%)'
            : 'linear-gradient(160deg, #101e33 0%, #0a1628 100%)',
          border: `1px solid ${product.badgeColor}30`,
          boxShadow: `0 32px 80px rgba(0,0,0,0.8), 0 0 0 1px ${product.badgeColor}15, 0 0 80px ${product.badgeColor}10`,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top gradient accent bar */}
        <div
          className="h-[3px] w-full"
          style={{ background: `linear-gradient(90deg, transparent 0%, ${product.badgeColor} 50%, transparent 100%)` }}
        />

        {/* Header */}
        <div
          className="px-8 pt-8 pb-6 relative overflow-hidden"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
        >
          {/* Background Glow */}
          <div 
            className="absolute -top-24 -right-24 w-64 h-64 rounded-full blur-[80px] pointer-events-none"
            style={{ background: product.badgeColor, opacity: 0.15 }}
          />

          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-white/10"
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
              <path d="M1 1L13 13M13 1L1 13" stroke="rgba(255,255,255,0.7)" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>

          {/* Tier badge */}
          <div className="flex items-center gap-2 mb-5 relative z-10">
            <div
              className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest backdrop-blur-md"
              style={{
                background: `${product.badgeColor}15`,
                border: `1px solid ${product.badgeColor}40`,
                color: product.badgeColor,
              }}
            >
              <div
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: product.badgeColor, boxShadow: `0 0 8px ${product.badgeColor}` }}
              />
              {isElite ? 'Elite Series' : 'Lite Series'}
            </div>
          </div>

          {/* Icon + name */}
          <div className="flex items-center gap-5 relative z-10">
            <div
              className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center shadow-2xl"
              style={{ 
                background: `linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%)`, 
                border: `1px solid rgba(255,255,255,0.1)`,
                boxShadow: `inset 0 1px 1px rgba(255,255,255,0.1), 0 8px 24px rgba(0,0,0,0.4)`
              }}
            >
              {product.icon}
            </div>
            <div>
              <h3 className="font-playfair text-2xl md:text-3xl font-bold leading-tight text-white">
                {product.name}
              </h3>
              <p
                className="text-sm font-medium mt-1 tracking-wide"
                style={{ color: product.badgeColor }}
              >
                {product.tagline}
              </p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="px-8 py-7 space-y-6 relative z-10">
          <p className="text-[0.95rem] leading-relaxed text-slate-300 font-light">
            {product.description}
          </p>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-4 text-slate-500">
              Core Capabilities
            </p>
            <ul className="space-y-3">
              {product.features.map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div
                    className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full"
                    style={{ background: product.badgeColor, boxShadow: `0 0 8px ${product.badgeColor}80` }}
                  />
                  <span className="text-[0.9rem] leading-relaxed text-slate-300">
                    {f}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer CTA */}
        <div
          className="px-8 py-6 flex items-center justify-between"
          style={{
            borderTop: '1px solid rgba(255,255,255,0.06)',
            background: 'rgba(0,0,0,0.3)',
          }}
        >
          <p className="text-[11px] text-slate-500 font-medium tracking-wide uppercase">
            Suvicorp Product Ecosystem
          </p>
          <a
            href="#cta"
            onClick={onClose}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{
              background: `linear-gradient(135deg, ${product.badgeColor} 0%, ${product.badgeColor}aa 100%)`,
              color: '#ffffff',
              boxShadow: `0 4px 20px ${product.badgeColor}50`,
            }}
          >
            Deploy Now
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
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
      `}</style>
    </div>
  );
};

/* ─── Product Pill Card ─── */
const ProductPill: React.FC<{ product: Product; onClick: () => void; isElite: boolean }> = ({
  product,
  onClick,
  isElite,
}) => (
  <button
    onClick={onClick}
    className="group relative w-full text-left rounded-2xl transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a1628]"
    style={{
      background: isElite
        ? 'linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)'
        : 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
      border: `1px solid rgba(255,255,255,0.08)`,
      padding: '22px 24px',
      boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.05), 0 4px 24px rgba(0,0,0,0.2)',
      focusRingColor: product.badgeColor,
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

    <div className="relative flex items-center gap-5">
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

/* ─── Main Export ─── */
export const Pricing: React.FC = () => {
  const [selected, setSelected] = useState<Product | null>(null);

  return (
    <>
      <span id="products" className="block" aria-hidden="true" />

      {/* Premium Dark Section */}
      <section id="pricing" className="bg-[#0a1628] py-24 md:py-32 px-[5%] relative overflow-hidden">
        
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
            
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-2 mb-6 leading-tight">
              Solutions Engineered <br/>
              <span className="italic font-light opacity-90 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                for Excellence
              </span>
            </h2>
            <p className="text-slate-400 text-base md:text-lg max-w-[640px] mx-auto leading-relaxed font-light">
              From Excel-powered automation to enterprise cloud platforms. Click any product to explore its capabilities.
              All tools can be seamlessly white-labelled to carry your firm&apos;s brand.
            </p>
          </div>

          {/* Two-column tier layout */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

            {/* ── Lite Tools Column ── */}
            <div className="relative">
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

                {/* Product pills grid */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {liteTools.map((p) => (
                    <ProductPill
                      key={p.id}
                      product={p}
                      isElite={false}
                      onClick={() => setSelected(p)}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* ── Elite Tools Column ── */}
            <div className="relative">
              {/* Column glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-purple-500/5 blur-[100px] pointer-events-none rounded-full" />
              
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

                {/* Product pills in dark cards */}
                <div className="flex flex-col gap-4">
                  {eliteTools.map((p) => (
                    <ProductPill
                      key={p.id}
                      product={p}
                      isElite={true}
                      onClick={() => setSelected(p)}
                    />
                  ))}
                </div>

                {/* Elite upsell callout */}
                <div
                  className="mt-8 rounded-2xl p-8 relative overflow-hidden group"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
                    border: '1px solid rgba(34,211,238,0.2)',
                    boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.1), 0 8px 32px rgba(0,0,0,0.3)',
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                    <div>
                      <p className="text-white text-base font-bold leading-snug">Enterprise Transformation</p>
                      <p className="text-slate-400 text-sm mt-1.5 font-light">Custom cloud architecture tailored for your firm.</p>
                    </div>
                    <a
                      href="#cta"
                      className="flex-shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:scale-105"
                      style={{
                        background: 'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)',
                        boxShadow: '0 4px 20px rgba(6,182,212,0.4)',
                      }}
                    >
                      Book Demo
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
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
