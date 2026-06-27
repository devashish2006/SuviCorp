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
      'No additional software required',
      'Produces consistent, audit-ready reports',
    ],
    tier: 'lite',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
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
      'Full audit trail',
      'Multi-entity support',
      'Multi-currency support',
      'Simplifies accounting standard conversions',
      'Keeps organizations audit and investor ready',
    ],
    tier: 'lite',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <polyline points="17 1 21 5 17 9" />
        <path d="M3 11V9a4 4 0 0 1 4-4h14" />
        <polyline points="7 23 3 19 7 15" />
        <path d="M21 13v2a4 4 0 0 1-4 4H3" />
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
      'Automatically links P&L, Balance Sheet, and Cash Flow',
      'Scenario comparison',
      'Budgeting support',
      'Fundraising support',
      'M&A planning',
      'Fully transparent formulas',
    ],
    tier: 'lite',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
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
      'Automates Cash Flow Statement creation using P&L and Balance Sheet data.',
    features: [
      'Automatic accrual-to-cash reconciliation',
      'Detects reconciliation breaks',
      'Supports GAAP and management reporting',
      'Reduces review time before financial close',
    ],
    tier: 'lite',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
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
      'Advisor collaboration',
      'Live readiness tracking',
      'Interactive dashboards',
    ],
    tier: 'lite',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
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
      'CEO-ready dashboards',
      'Works without a data warehouse',
      'Custom KPIs',
      'Continuous performance management',
      'Accessible across devices',
    ],
    tier: 'lite',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
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
      'AI document extraction',
      'Automated valuation engine',
      'Effectiveness testing',
      'Compliance documentation',
      'Forward design architecture',
      'Secure cloud platform',
    ],
    tier: 'elite',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
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
      'Multi-currency consolidation',
      'Forex translation',
      'Intercompany elimination',
      'Live Excel-Word linking',
      'Enterprise audit controls',
      'Cloud-native architecture',
    ],
    tier: 'elite',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <circle cx="12" cy="12" r="9" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
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
      'Leadership-focused dashboards',
      'Meeting-ready interface',
      'Live operational data',
      'Reporting gap detection',
      'Stakeholder-aligned views',
      'Enterprise security',
    ],
    tier: 'elite',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <path d="M7 7h.01M11 7h6M7 11h.01M11 11h6" />
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
      style={{ animation: 'productOverlayIn 0.25s ease both' }}
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />

      {/* Modal */}
      <div
        className="relative z-10 w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl"
        style={{
          animation: 'productModalIn 0.35s cubic-bezier(0.16,1,0.3,1) both',
          background: isElite
            ? 'linear-gradient(145deg, #060f22 0%, #0a1628 40%, #0d1f3c 100%)'
            : '#ffffff',
          border: isElite ? `1px solid ${product.badgeColor}40` : '1px solid rgba(0,0,0,0.08)',
          boxShadow: isElite
            ? `0 32px 80px rgba(0,0,0,0.5), 0 0 0 1px ${product.badgeColor}30, 0 0 60px ${product.badgeColor}15`
            : '0 32px 80px rgba(0,0,0,0.18)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top gradient accent bar */}
        <div
          className="h-[3px] w-full"
          style={{ background: `linear-gradient(90deg, transparent 0%, ${product.badgeColor} 40%, ${isElite ? '#3b82f6' : product.badgeColor} 80%, transparent 100%)` }}
        />

        {/* Header */}
        <div
          className="px-8 pt-7 pb-6"
          style={{
            background: isElite
              ? `radial-gradient(ellipse at 10% 0%, ${product.badgeColor}18 0%, transparent 60%)`
              : `linear-gradient(135deg, ${product.accentColor} 0%, transparent 60%)`,
            borderBottom: isElite ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(0,0,0,0.06)',
          }}
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
            style={{
              background: isElite ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)',
              border: isElite ? '1px solid rgba(255,255,255,0.12)' : '1px solid rgba(0,0,0,0.10)',
            }}
          >
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
              <path d="M1 1L13 13M13 1L1 13" stroke={isElite ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.5)'} strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>

          {/* Tier badge */}
          <div className="flex items-center gap-2 mb-4">
            <div
              className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest"
              style={{
                background: `${product.badgeColor}20`,
                border: `1px solid ${product.badgeColor}50`,
                color: product.badgeColor,
              }}
            >
              <div
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: product.badgeColor }}
              />
              {isElite ? 'Elite Tool' : 'Lite Tool'}
            </div>
          </div>

          {/* Icon + name */}
          <div className="flex items-start gap-4">
            <div
              className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ background: `${product.badgeColor}20`, color: product.badgeColor, border: `1px solid ${product.badgeColor}35` }}
            >
              {product.icon}
            </div>
            <div>
              <h3
                className="font-playfair text-2xl font-bold leading-tight"
                style={{ color: isElite ? '#ffffff' : '#0a1628' }}
              >
                {product.name}
              </h3>
              <p
                className="text-sm font-medium mt-0.5"
                style={{ color: product.badgeColor }}
              >
                {product.tagline}
              </p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="px-8 py-6 space-y-5">
          <p
            className="text-sm leading-relaxed"
            style={{ color: isElite ? 'rgba(255,255,255,0.70)' : '#475569' }}
          >
            {product.description}
          </p>

          <div>
            <p
              className="text-[10px] font-semibold uppercase tracking-[0.18em] mb-3"
              style={{ color: isElite ? 'rgba(255,255,255,0.35)' : '#9ca3af' }}
            >
              Key Features
            </p>
            <ul className="space-y-2">
              {product.features.map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div
                    className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full"
                    style={{ background: product.badgeColor, boxShadow: `0 0 6px ${product.badgeColor}60` }}
                  />
                  <span
                    className="text-sm leading-relaxed"
                    style={{ color: isElite ? 'rgba(255,255,255,0.75)' : '#374151' }}
                  >
                    {f}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer CTA */}
        <div
          className="px-8 py-5 flex items-center justify-between"
          style={{
            borderTop: isElite ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(0,0,0,0.06)',
            background: isElite ? 'rgba(0,0,0,0.2)' : 'rgba(0,0,0,0.02)',
          }}
        >
          <p className="text-xs" style={{ color: isElite ? 'rgba(255,255,255,0.3)' : '#9ca3af' }}>
            Suvicorp · {isElite ? 'Elite Tool' : 'Lite Tool'}
          </p>
          <a
            href="#cta"
            onClick={onClose}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wide transition-all duration-200 hover:scale-105"
            style={{
              background: `linear-gradient(135deg, ${product.badgeColor} 0%, ${isElite ? '#3b82f6' : product.badgeColor}cc 100%)`,
              color: '#ffffff',
              boxShadow: `0 4px 16px ${product.badgeColor}40`,
            }}
          >
            Request Access
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>

      <style>{`
        @keyframes productOverlayIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes productModalIn {
          from { opacity: 0; transform: translateY(24px) scale(0.96); }
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
    className="group relative w-full text-left rounded-2xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
    style={{
      background: isElite
        ? 'linear-gradient(145deg, #070e1e 0%, #0a1628 60%, #0d1f3c 100%)'
        : '#ffffff',
      border: isElite ? `1px solid ${product.badgeColor}30` : '1px solid rgba(0,0,0,0.08)',
      padding: '20px 24px',
      boxShadow: isElite
        ? `0 4px 24px rgba(0,0,0,0.3)`
        : '0 2px 12px rgba(0,0,0,0.06)',
      focusRingColor: product.badgeColor,
    }}
    aria-label={`View details for ${product.name}`}
  >
    {/* Hover glow overlay */}
    <div
      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
      style={{
        background: `radial-gradient(ellipse at 20% 50%, ${product.badgeColor}12 0%, transparent 70%)`,
        border: `1px solid ${product.badgeColor}50`,
      }}
    />

    <div className="relative flex items-center gap-4">
      {/* Icon */}
      <div
        className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
        style={{
          background: `${product.badgeColor}18`,
          color: product.badgeColor,
          border: `1px solid ${product.badgeColor}30`,
        }}
      >
        {product.icon}
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <p
          className="font-semibold text-[0.9rem] leading-tight truncate transition-colors duration-200"
          style={{ color: isElite ? '#ffffff' : '#0a1628' }}
        >
          {product.shortName}
        </p>
        <p
          className="text-[0.72rem] mt-0.5 truncate"
          style={{ color: product.badgeColor, opacity: 0.85 }}
        >
          {product.tagline}
        </p>
      </div>

      {/* Arrow */}
      <svg
        className="flex-shrink-0 w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200"
        style={{ color: product.badgeColor }}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </div>

    {/* Bottom accent */}
    <div
      className="absolute bottom-0 left-6 right-6 h-[1.5px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      style={{ background: `linear-gradient(90deg, transparent, ${product.badgeColor}80, transparent)` }}
    />
  </button>
);

/* ─── Main Export ─── */
export const Pricing: React.FC = () => {
  const [selected, setSelected] = useState<Product | null>(null);

  return (
    <>
      {/* Anchor for Products nav link */}
      <span id="products" className="block" aria-hidden="true" />

      <section id="pricing" className="bg-white py-16 md:py-24 px-[5%] relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-[480px] h-[480px] rounded-full pointer-events-none opacity-[0.045]"
          style={{ background: '#0a1628', transform: 'translate(30%, -30%)' }} />
        <div className="absolute bottom-0 left-0 w-[320px] h-[320px] rounded-full pointer-events-none opacity-[0.06]"
          style={{ background: '#0ea5e9', transform: 'translate(-30%, 30%)' }} />

        <div className="relative max-w-7xl mx-auto">

          {/* Header */}
          <div className="text-center mb-14">
            <SectionTag>Our Product Portfolio</SectionTag>
            <SectionTitle className="mt-4 mb-4">
              Solutions Engineered for Excellence
            </SectionTitle>
            <p className="text-slate-500 text-base max-w-[560px] mx-auto leading-relaxed">
              From Excel-powered automation to enterprise cloud platforms. Click any product to explore its capabilities.
              All tools can be white-labelled to carry your firm&apos;s brand.
            </p>
          </div>

          {/* Two-column tier layout */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">

            {/* ── Lite Tools Column ── */}
            <div>
              {/* Tier header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="flex items-center gap-2 px-4 py-2 rounded-xl"
                  style={{
                    background: 'rgba(59,130,246,0.06)',
                    border: '1px solid rgba(59,130,246,0.2)',
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                  <span className="text-sm font-bold text-blue-500 tracking-wide">Lite Tools</span>
                </div>
                <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, rgba(59,130,246,0.3), transparent)' }} />
              </div>
              <p className="text-xs text-slate-400 mb-6 tracking-wide uppercase font-medium">
                Excel-native & Power BI — immediate deployment, zero infrastructure
              </p>

              {/* Product pills grid */}
              <div className="grid sm:grid-cols-2 gap-3 relative">
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

            {/* ── Elite Tools Column ── */}
            <div>
              {/* Tier header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="flex items-center gap-2 px-4 py-2 rounded-xl"
                  style={{
                    background: 'rgba(6,182,212,0.08)',
                    border: '1px solid rgba(6,182,212,0.25)',
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <span className="text-sm font-bold text-cyan-500 tracking-wide">Elite Tools</span>
                </div>
                <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, rgba(6,182,212,0.35), transparent)' }} />
              </div>
              <p className="text-xs text-slate-400 mb-6 tracking-wide uppercase font-medium">
                Cloud-native & AI-powered — enterprise-grade platforms for complex environments
              </p>

              {/* Product pills in dark cards */}
              <div className="flex flex-col gap-3">
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
                className="mt-6 rounded-2xl px-6 py-5 flex items-center justify-between gap-4"
                style={{
                  background: 'linear-gradient(135deg, #0a1628 0%, #0d1f3c 100%)',
                  border: '1px solid rgba(6,182,212,0.2)',
                }}
              >
                <div>
                  <p className="text-white text-sm font-semibold leading-snug">Ready for enterprise-grade transformation?</p>
                  <p className="text-white/40 text-xs mt-0.5">Schedule a private demo with our engineering team.</p>
                </div>
                <a
                  href="#cta"
                  className="flex-shrink-0 inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-white text-xs font-bold uppercase tracking-wide transition-all duration-200 hover:scale-105 whitespace-nowrap"
                  style={{
                    background: 'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)',
                    boxShadow: '0 4px 16px rgba(6,182,212,0.35)',
                  }}
                >
                  Book Demo →
                </a>
              </div>
            </div>

          </div>

          {/* Bottom note */}
          <p className="text-center text-slate-400 text-xs mt-12 tracking-wide">
            All products are white-label ready · Built for mid-tier accounting &amp; consulting firms · Deployable in days
          </p>
        </div>
      </section>

      {/* Product Detail Modal */}
      <ProductModal product={selected} onClose={() => setSelected(null)} />
    </>
  );
};
