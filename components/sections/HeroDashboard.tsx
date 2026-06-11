'use client';

import React, { useEffect, useRef, useState } from 'react';

/* ═══════════════════════════════════════════
   ICON LIBRARY  (all pure inline SVG)
═══════════════════════════════════════════ */
const Ic = {
  Grid: () => (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-[15px] h-[15px]">
      <rect x="2" y="2" width="6" height="6" rx="1.2"/><rect x="12" y="2" width="6" height="6" rx="1.2"/>
      <rect x="2" y="12" width="6" height="6" rx="1.2"/><rect x="12" y="12" width="6" height="6" rx="1.2"/>
    </svg>
  ),
  Wave: () => (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-[15px] h-[15px]">
      <polyline points="1 10 4.5 5 8 13 11.5 7 15 10 18.5 8"/>
    </svg>
  ),
  Users: () => (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-[15px] h-[15px]">
      <path d="M13 17v-1.5A3.5 3.5 0 0 0 9.5 12h-5A3.5 3.5 0 0 0 1 15.5V17"/>
      <circle cx="7" cy="6" r="3.5"/>
      <path d="M19 17v-1.5a3.5 3.5 0 0 0-2.625-3.386"/>
      <path d="M13.5 2.614a3.5 3.5 0 0 1 0 6.772"/>
    </svg>
  ),
  File: () => (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-[15px] h-[15px]">
      <path d="M11 2H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7z"/>
      <polyline points="11 2 11 7 16 7"/>
      <line x1="7" y1="11" x2="13" y2="11"/><line x1="7" y1="14" x2="10" y2="14"/>
    </svg>
  ),
  Chart: () => (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-[15px] h-[15px]">
      <line x1="15" y1="17" x2="15" y2="8"/><line x1="10" y1="17" x2="10" y2="3"/>
      <line x1="5"  y1="17" x2="5"  y2="11"/>
    </svg>
  ),
  Spark: () => (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-[15px] h-[15px]">
      <polygon points="10 1 12.5 7.5 19 8.2 14.5 12.5 15.9 19 10 15.8 4.1 19 5.5 12.5 1 8.2 7.5 7.5"/>
    </svg>
  ),
  Search: () => (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className="w-[13px] h-[13px]">
      <circle cx="8.5" cy="8.5" r="5.5"/><line x1="12.5" y1="12.5" x2="17" y2="17"/>
    </svg>
  ),
  Bell: () => (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className="w-[13px] h-[13px]">
      <path d="M15 7a5 5 0 0 0-10 0c0 5-2 6-2 6h14s-2-1-2-6"/>
      <path d="M11.73 17a2 2 0 0 1-3.46 0"/>
    </svg>
  ),
  ArrowUp: () => (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-2.5 h-2.5">
      <polyline points="14 4 10 8 6 4"/><line x1="10" y1="4" x2="10" y2="13"/>
    </svg>
  ),
  Zap: () => (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
      <polygon points="9 1 2 9 8 9 7 15 14 7 8 7"/>
    </svg>
  ),
  Shield: () => (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
      <path d="M8 1.5 L14 4.2 V8.5 C14 12 8 14.5 8 14.5 C8 14.5 2 12 2 8.5 V4.2 Z"/>
    </svg>
  ),
  Dollar: () => (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
      <line x1="8" y1="1" x2="8" y2="15"/><path d="M11 3.5H6.5a2.5 2.5 0 0 0 0 5h3a2.5 2.5 0 0 1 0 5H5"/>
    </svg>
  ),
  TrendUp: () => (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-2.5 h-2.5">
      <polyline points="1 11 5 7 9 9.5 14 4"/><polyline points="10 4 14 4 14 8"/>
    </svg>
  ),
};

/* ═══════════════════════════════════════════
   SMOOTH CUBIC BEZIER LINE CHART
   (converts points → smooth SVG path)
═══════════════════════════════════════════ */
function smoothPath(pts: {x: number; y: number}[]): string {
  if (pts.length < 2) return '';
  let d = `M ${pts[0].x} ${pts[0].y}`;
  for (let i = 1; i < pts.length; i++) {
    const prev = pts[i - 1];
    const curr = pts[i];
    const cp1x = prev.x + (curr.x - prev.x) * 0.4;
    const cp1y = prev.y;
    const cp2x = prev.x + (curr.x - prev.x) * 0.6;
    const cp2y = curr.y;
    d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${curr.x} ${curr.y}`;
  }
  return d;
}

/* ─── Sparkline ─── */
function Sparkline({ color = '#06b6d4', values = [30,45,38,55,48,62,58,72,78,92] }: {
  color?: string; values?: number[];
}) {
  const W = 76; const H = 24;
  const min = Math.min(...values); const max = Math.max(...values);
  const range = max - min || 1;
  const pts = values.map((v, i) => ({
    x: (i / (values.length - 1)) * W,
    y: H - ((v - min) / range) * (H - 2) - 1,
  }));
  const linePath = smoothPath(pts);
  const areaPath = `M${pts[0].x},${H} ` + linePath.slice(1) + ` L${pts[pts.length-1].x},${H} Z`;
  const gId = `sp-${color.replace('#', '')}`;
  return (
    <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} className="overflow-visible" style={{ display: 'block' }}>
      <defs>
        <linearGradient id={gId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.28"/>
          <stop offset="100%" stopColor={color} stopOpacity="0"/>
        </linearGradient>
      </defs>
      <path d={areaPath} fill={`url(#${gId})`}/>
      <path d={linePath} fill="none" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

/* ─── Revenue line chart ─── */
function RevenueChart() {
  const data = [1.18, 1.38, 1.28, 1.52, 1.66, 1.58, 1.82, 1.97, 1.88, 2.08, 2.26, 2.45];
  const W = 280; const H = 88;
  const min = 1.0; const max = 2.6;
  const pts = data.map((v, i) => ({
    x: 6 + (i / (data.length - 1)) * (W - 12),
    y: H - 4 - ((v - min) / (max - min)) * (H - 12),
  }));
  const linePath = smoothPath(pts);
  const areaPath = `M${pts[0].x},${H} ` + linePath.slice(1) + ` L${pts[pts.length-1].x},${H} Z`;
  const last = pts[pts.length - 1];
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <svg width="100%" height="100%" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="rcGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.22"/>
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0"/>
          </linearGradient>
          <filter id="rcGlow"><feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        </defs>
        {/* Grid lines */}
        {[0.25, 0.5, 0.75].map((f, i) => {
          const y = H - 4 - f * (H - 12);
          return <line key={i} x1="6" y1={y} x2={W - 6} y2={y} stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="4 4"/>;
        })}
        {/* Area + line */}
        <path d={areaPath} fill="url(#rcGrad)"/>
        <path d={linePath} fill="none" stroke="#06b6d4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" filter="url(#rcGlow)"/>
        {/* Live endpoint */}
        <circle cx={last.x} cy={last.y} r="5" fill="#06b6d4" fillOpacity="0.18"/>
        <circle cx={last.x} cy={last.y} r="2.8" fill="#06b6d4"/>
        {/* Secondary comparison line (prev year) */}
        {(() => {
          const prev = data.map((v, i) => ({
            x: 6 + (i / (data.length - 1)) * (W - 12),
            y: H - 4 - ((v * 0.78 - min) / (max - min)) * (H - 12),
          }));
          return <path d={smoothPath(prev)} fill="none" stroke="rgba(59,130,246,0.3)" strokeWidth="1.2" strokeDasharray="4 3" strokeLinecap="round"/>;
        })()}
      </svg>
      {/* Month axis */}
      <div className="flex justify-between mt-1" style={{ paddingLeft: 6, paddingRight: 6 }}>
        {['J','F','M','A','M','J','J','A','S','O','N','D'].map((m, i) => (
          <span key={i} style={{ fontSize: 7, color: 'rgba(255,255,255,0.2)', fontWeight: 600, letterSpacing: '0.03em' }}>{m}</span>
        ))}
      </div>
    </div>
  );
}

/* ─── Donut chart ─── */
function DonutChart() {
  const segs = [
    { label: 'Advisory', pct: 38, color: '#06b6d4' },
    { label: 'Audit',    pct: 27, color: '#3b82f6' },
    { label: 'Tax',      pct: 20, color: '#8b5cf6' },
    { label: 'Tech',     pct: 15, color: '#10b981' },
  ];
  const r = 30; const cx = 38; const cy = 38;
  const circ = 2 * Math.PI * r;
  let cum = 0;
  const arcs = segs.map(s => {
    const dash = (s.pct / 100) * circ;
    const gap  = circ - dash;
    const rot  = (cum / 100) * 360 - 90;
    cum += s.pct;
    return { ...s, dash, gap, rot };
  });
  return (
    <div className="flex items-center gap-2.5 w-full">
      <svg width="76" height="76" viewBox="0 0 76 76" className="flex-shrink-0">
        {arcs.map((a, i) => (
          <circle key={i} cx={cx} cy={cy} r={r}
            fill="none" stroke={a.color} strokeWidth="9"
            strokeDasharray={`${a.dash} ${a.gap}`}
            style={{ transform: `rotate(${a.rot}deg)`, transformOrigin: `${cx}px ${cy}px`, transition: 'stroke-dasharray 0.6s ease' }}
          />
        ))}
        <circle cx={cx} cy={cy} r="20" fill="#091525"/>
        <text x={cx} y={cy - 4} textAnchor="middle" fill="white" fontSize="7.5" fontWeight="700">$2.45M</text>
        <text x={cx} y={cy + 6} textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="5.5">total</text>
      </svg>
      <div className="flex flex-col gap-1.5 flex-1 min-w-0">
        {segs.map((s, i) => (
          <div key={i} className="flex items-center gap-1.5">
            <div style={{ width: 5, height: 5, borderRadius: '50%', backgroundColor: s.color, flexShrink: 0 }}/>
            <span style={{ fontSize: 8, color: 'rgba(255,255,255,0.45)', flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{s.label}</span>
            <span style={{ fontSize: 8, fontWeight: 700, color: 'rgba(255,255,255,0.65)', flexShrink: 0 }}>{s.pct}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Cash flow bar chart ─── */
function BarChart() {
  const data = [
    { q: 'Q1', i: 72, o: 44 },
    { q: 'Q2', i: 85, o: 52 },
    { q: 'Q3', i: 79, o: 41 },
    { q: 'Q4', i: 96, o: 57 },
  ];
  const maxVal = 100;
  const barH = 48;
  return (
    <div>
      <div className="flex items-end gap-1.5" style={{ height: barH }}>
        {data.map((d, i) => (
          <div key={i} className="flex items-end gap-0.5 flex-1">
            <div className="flex-1 rounded-t-[3px]" style={{
              height: (d.i / maxVal) * barH,
              background: 'linear-gradient(180deg, #06b6d4 0%, #0284c7 100%)',
              minWidth: 6,
            }}/>
            <div className="flex-1 rounded-t-[3px]" style={{
              height: (d.o / maxVal) * barH,
              background: 'linear-gradient(180deg, #8b5cf6 0%, #6d28d9 100%)',
              minWidth: 6,
            }}/>
          </div>
        ))}
      </div>
      <div className="flex gap-1.5 mt-1.5">
        {data.map((d, i) => (
          <div key={i} className="flex-1 text-center" style={{ fontSize: 7, color: 'rgba(255,255,255,0.25)', fontWeight: 600 }}>{d.q}</div>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   KPI CARD
═══════════════════════════════════════════ */
interface KpiProps { title: string; value: string; change: string; icon: React.ReactNode; color: string; spark?: number[]; }
function KpiCard({ title, value, change, icon, color, spark }: KpiProps) {
  return (
    <div className="hd-card relative overflow-hidden flex flex-col gap-1.5 p-2.5 rounded-[14px]"
      style={{
        background: 'linear-gradient(150deg, rgba(15,28,52,0.95) 0%, rgba(9,21,37,0.98) 100%)',
        border: '1px solid rgba(255,255,255,0.065)',
      }}>
      {/* Color accent hairline */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg, transparent 0%, ${color}55 50%, transparent 100%)` }}/>
      <div className="flex items-center justify-between">
        <span style={{ fontSize: 8, fontWeight: 700, letterSpacing: '0.08em', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase' }}>{title}</span>
        <div style={{ width: 22, height: 22, borderRadius: 8, background: `${color}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', color, flexShrink: 0 }}>
          {icon}
        </div>
      </div>
      <div style={{ fontSize: 17, fontWeight: 800, color: '#fff', lineHeight: 1, letterSpacing: '-0.02em' }}>{value}</div>
      <div className="flex items-center gap-1">
        <div style={{ display: 'flex', alignItems: 'center', gap: 2, color: '#10b981' }}>
          <Ic.TrendUp/>
          <span style={{ fontSize: 8, fontWeight: 700 }}>{change}</span>
        </div>
        <span style={{ fontSize: 7.5, color: 'rgba(255,255,255,0.2)' }}>vs prior period</span>
      </div>
      <div style={{ marginTop: 2 }}>
        <Sparkline color={color} values={spark}/>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   PANEL WRAPPER (reusable card shell)
═══════════════════════════════════════════ */
function Panel({ label, accent, children, style }: {
  label: string; accent?: string; children: React.ReactNode; style?: React.CSSProperties;
}) {
  return (
    <div className="hd-card overflow-hidden flex flex-col gap-1.5 p-2.5 rounded-[14px]"
      style={{
        background: 'linear-gradient(150deg, rgba(15,28,52,0.95) 0%, rgba(9,21,37,0.98) 100%)',
        border: `1px solid ${accent ? `${accent}20` : 'rgba(255,255,255,0.065)'}`,
        ...style,
      }}>
      <div style={{ fontSize: 8, fontWeight: 700, letterSpacing: '0.1em', color: accent || 'rgba(255,255,255,0.3)', textTransform: 'uppercase', marginBottom: 2 }}>{label}</div>
      {children}
    </div>
  );
}

/* ═══════════════════════════════════════════
   MAIN EXPORTED COMPONENT
═══════════════════════════════════════════ */
export const HeroDashboard: React.FC = () => {
  /* floating sine animation */
  const [floatY, setFloatY] = useState(0);
  const rafRef = useRef<number>(0);
  const t0Ref  = useRef<number>(0);
  useEffect(() => {
    const tick = (ts: number) => {
      if (!t0Ref.current) t0Ref.current = ts;
      setFloatY(Math.sin((ts - t0Ref.current) / 2600) * 6);
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  /* ── data ── */
  const kpis: KpiProps[] = [
    { title: 'Total Revenue',    value: '$2.45M', change: '+18.2%', color: '#06b6d4',
      icon: <Ic.Dollar/>,  spark: [28,38,33,50,44,60,56,72,66,80,75,92] },
    { title: 'Active Clients',   value: '128',    change: '+12',    color: '#3b82f6',
      icon: <Ic.Users/>,   spark: [50,55,48,60,58,65,62,68,70,74,72,80] },
    { title: 'In Progress',      value: '24',     change: '+3',     color: '#8b5cf6',
      icon: <Ic.File/>,    spark: [20,24,22,28,25,30,28,32,30,34,32,38] },
    { title: 'Profit Margin',    value: '32.6%',  change: '+2.1%',  color: '#10b981',
      icon: <Ic.Chart/>,   spark: [55,58,54,60,57,62,60,64,62,66,64,70] },
  ];

  const navItems = [
    { label: 'Overview',   icon: <Ic.Grid/>,  active: true  },
    { label: 'Analytics',  icon: <Ic.Wave/>  },
    { label: 'Clients',    icon: <Ic.Users/> },
    { label: 'Projects',   icon: <Ic.File/>  },
    { label: 'Reports',    icon: <Ic.Chart/> },
    { label: 'AI Insights',icon: <Ic.Spark/> },
  ];

  const clients = [
    { name: 'Deloitte',     rev: '$342K', g: '+14.2%', c: '#06b6d4' },
    { name: 'PwC Ventures', rev: '$218K', g: '+9.8%',  c: '#3b82f6' },
    { name: 'KPMG Group',   rev: '$195K', g: '+22.1%', c: '#8b5cf6' },
    { name: 'EY Advisory',  rev: '$174K', g: '+7.3%',  c: '#10b981' },
  ];

  const insights = [
    { icon: <Ic.TrendUp/>, color: '#06b6d4', text: 'Revenue up 18% MoM — strongest Q4 in 3 years' },
    { icon: <Ic.Zap/>,     color: '#f59e0b', text: 'AI flagged 3 anomalies in client expense reports' },
    { icon: <Ic.Shield/>,  color: '#10b981', text: 'Profit margin 32.6% — 8pts above industry benchmark' },
  ];

  return (
    <>
      {/* ── Injected keyframes ── */}
      <style>{`
        @keyframes hd-fadein  { from { opacity:0; transform:translateY(14px); } to { opacity:1; transform:translateY(0); } }
        @keyframes hd-pulse   { 0%,100% { opacity:.45; transform:scale(1); } 50% { opacity:1; transform:scale(1.15); } }
        @keyframes hd-scanline { from { transform:translateY(-100%); } to { transform:translateY(100%); } }
        .hd-root { animation: hd-fadein 0.85s cubic-bezier(.22,.68,0,1.2) both; }
        .hd-pulse { animation: hd-pulse 2.2s ease-in-out infinite; }
        .hd-card  { transition: box-shadow 0.25s ease, transform 0.25s ease; }
        .hd-card:hover { box-shadow: 0 0 20px rgba(6,182,212,0.10); transform: translateY(-1px); }
        .hd-nav-item { transition: background 0.2s, color 0.2s; }
      `}</style>

      {/* ── Floating outer wrapper ── */}
      <div
        className="hd-root relative"
        style={{
          transform: `perspective(1400px) rotateY(-8deg) rotateX(2.5deg) translateY(${floatY}px)`,
          transformStyle: 'preserve-3d',
          willChange: 'transform',
          userSelect: 'none',
          pointerEvents: 'none',
        }}
      >
        {/* Ambient outer glow */}
        <div style={{
          position: 'absolute', inset: -24, borderRadius: 36, pointerEvents: 'none',
          background: 'radial-gradient(ellipse at 55% 45%, rgba(6,182,212,0.09) 0%, rgba(59,130,246,0.06) 40%, transparent 70%)',
          zIndex: 0,
        }}/>

        {/* ════════════════════════════════════
            DASHBOARD SHELL
        ════════════════════════════════════ */}
        <div
          className="relative flex"
          style={{
            width: 660,
            borderRadius: 22,
            overflow: 'hidden',
            background: 'linear-gradient(155deg, #0d1e38 0%, #091525 55%, #070f1d 100%)',
            border: '1px solid rgba(255,255,255,0.075)',
            boxShadow: `
              0 60px 120px -28px rgba(0,0,0,0.85),
              0 0 0 1px rgba(6,182,212,0.09),
              inset 0 1px 0 rgba(255,255,255,0.055),
              inset 0 -1px 0 rgba(0,0,0,0.3)
            `,
            zIndex: 1,
          }}
        >
          {/* Subtle grid watermark (matches hero section grid) */}
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            opacity: 0.018,
            zIndex: 0,
          }}/>
          {/* Top radial glow (same as hero banner) */}
          <div style={{
            position: 'absolute', top: 0, left: 0, width: 320, height: 200, pointerEvents: 'none',
            background: 'radial-gradient(ellipse at 0% 0%, rgba(6,182,212,0.1) 0%, transparent 65%)',
            zIndex: 0,
          }}/>

          {/* ── SIDEBAR ── */}
          <div style={{
            width: 46, flexShrink: 0, zIndex: 1,
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            padding: '14px 0', gap: 2,
            background: 'rgba(6,182,212,0.025)',
            borderRight: '1px solid rgba(255,255,255,0.045)',
          }}>
            {/* Logo hex */}
            <div style={{
              width: 28, height: 28, borderRadius: 9, marginBottom: 10, flexShrink: 0,
              background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
              boxShadow: '0 0 14px rgba(6,182,212,0.5)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg viewBox="0 0 14 14" fill="white" width={12} height={12}>
                <polygon points="7,1 13,4.3 13,9.7 7,13 1,9.7 1,4.3" fillOpacity="0.95"/>
              </svg>
            </div>

            {navItems.map((item, i) => (
              <div key={i} className="hd-nav-item" style={{
                position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', padding: '4px 0',
              }}>
                {item.active && (
                  <div style={{
                    position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)',
                    width: 2.5, height: 16, borderRadius: '0 3px 3px 0',
                    background: '#06b6d4', boxShadow: '0 0 8px #06b6d4',
                  }}/>
                )}
                <div style={{
                  width: 30, height: 30, borderRadius: 9,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: item.active ? '#06b6d4' : 'rgba(255,255,255,0.28)',
                  background: item.active ? 'rgba(6,182,212,0.13)' : 'transparent',
                  boxShadow: item.active ? '0 0 10px rgba(6,182,212,0.22)' : 'none',
                  cursor: 'pointer',
                }}>
                  {item.icon}
                </div>
              </div>
            ))}
          </div>

          {/* ── MAIN CONTENT ── */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 12px 12px 10px', zIndex: 1, minWidth: 0 }}>

            {/* ─── TOP BAR ─── */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 2 }}>
              {/* Suvicorp branding */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ fontSize: 11, fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', lineHeight: 1 }}>
                  Suvi
                  <span style={{ color: '#06b6d4' }}>corp</span>
                </span>
                <div style={{
                  fontSize: 7, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.3)', borderLeft: '1px solid rgba(255,255,255,0.1)',
                  paddingLeft: 6, lineHeight: 1,
                }}>Finance AI</div>
              </div>
              {/* Right controls */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                {/* Search */}
                <div style={{
                  width: 22, height: 22, borderRadius: 7, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'rgba(255,255,255,0.045)', color: 'rgba(255,255,255,0.4)', cursor: 'pointer',
                }}>
                  <Ic.Search/>
                </div>
                {/* Notification dot */}
                <div style={{ position: 'relative' }}>
                  <div style={{
                    width: 22, height: 22, borderRadius: 7, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: 'rgba(255,255,255,0.045)', color: 'rgba(255,255,255,0.4)', cursor: 'pointer',
                  }}>
                    <Ic.Bell/>
                  </div>
                  <div className="hd-pulse" style={{
                    position: 'absolute', top: 4, right: 4, width: 5, height: 5, borderRadius: '50%',
                    background: '#f59e0b', border: '1px solid #091525',
                  }}/>
                </div>
                {/* Avatar */}
                <div style={{
                  width: 22, height: 22, borderRadius: 8, flexShrink: 0,
                  background: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 8, fontWeight: 800, color: '#fff',
                }}>JB</div>
                {/* Live indicator */}
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 4, padding: '3px 7px',
                  borderRadius: 20, background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.22)',
                }}>
                  <div className="hd-pulse" style={{ width: 5, height: 5, borderRadius: '50%', background: '#10b981' }}/>
                  <span style={{ fontSize: 7.5, fontWeight: 700, color: '#10b981', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Live</span>
                </div>
              </div>
            </div>

            {/* Page label */}
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 0 }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.8)', letterSpacing: '-0.01em' }}>Overview</span>
              <span style={{ fontSize: 8, color: 'rgba(255,255,255,0.25)', fontWeight: 500 }}>· Financial Dashboard · FY 2024</span>
            </div>

            {/* ── KPI row (2×2) ── */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 7 }}>
              {kpis.map((k, i) => <KpiCard key={i} {...k}/>)}
            </div>

            {/* ── Middle: Revenue trend + Donut ── */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 152px', gap: 7 }}>
              <Panel label="Revenue Trend" accent="#06b6d4" style={{ paddingBottom: 6 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
                  <div style={{ fontSize: 14, fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>$2.45M</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                      <div style={{ width: 16, height: 2, borderRadius: 2, background: '#06b6d4' }}/>
                      <span style={{ fontSize: 7, color: 'rgba(255,255,255,0.35)', fontWeight: 600 }}>2024</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                      <div style={{ width: 16, height: 2, borderRadius: 2, background: 'rgba(59,130,246,0.4)', backgroundImage: 'repeating-linear-gradient(90deg,transparent,transparent 3px,rgba(255,255,255,0) 3px,rgba(255,255,255,0) 6px)' }}/>
                      <span style={{ fontSize: 7, color: 'rgba(255,255,255,0.25)', fontWeight: 600 }}>2023</span>
                    </div>
                  </div>
                </div>
                <div style={{ height: 92 }}>
                  <RevenueChart/>
                </div>
              </Panel>

              <Panel label="Breakdown">
                <DonutChart/>
              </Panel>
            </div>

            {/* ── Bottom: Clients + AI Insights + Cash Flow ── */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 7 }}>

              {/* Top Clients */}
              <Panel label="Top Clients">
                <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                  {clients.map((c, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 5, justifyContent: 'space-between' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 5, minWidth: 0, flex: 1 }}>
                        <div style={{
                          width: 16, height: 16, borderRadius: 5, flexShrink: 0,
                          background: `${c.c}20`, color: c.c,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontSize: 7, fontWeight: 800,
                        }}>{c.name[0]}</div>
                        <span style={{ fontSize: 8, color: 'rgba(255,255,255,0.55)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', flex: 1 }}>{c.name}</span>
                      </div>
                      <span style={{ fontSize: 8, fontWeight: 700, color: '#10b981', flexShrink: 0 }}>{c.g}</span>
                    </div>
                  ))}
                </div>
              </Panel>

              {/* AI Insights */}
              <Panel label="AI Insights" accent="#06b6d4">
                <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 4, marginTop: -2 }}>
                  <div className="hd-pulse" style={{
                    width: 10, height: 10, borderRadius: '50%', flexShrink: 0,
                    background: 'radial-gradient(circle, #06b6d4, #3b82f6)',
                    boxShadow: '0 0 8px rgba(6,182,212,0.7)',
                  }}/>
                  <span style={{ fontSize: 7.5, color: '#06b6d4', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase' }}>3 New Findings</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                  {insights.map((ins, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 5 }}>
                      <div style={{
                        width: 16, height: 16, borderRadius: 5, flexShrink: 0, marginTop: 1,
                        background: `${ins.color}18`, color: ins.color,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        {ins.icon}
                      </div>
                      <p style={{ fontSize: 7.5, color: 'rgba(255,255,255,0.45)', lineHeight: 1.4, margin: 0, flex: 1 }}>{ins.text}</p>
                    </div>
                  ))}
                </div>
              </Panel>

              {/* Cash Flow */}
              <Panel label="Cash Flow">
                <BarChart/>
                <div style={{ display: 'flex', gap: 8, marginTop: 4 }}>
                  {[['#06b6d4','Inflow'],['#8b5cf6','Outflow']].map(([c, l]) => (
                    <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                      <div style={{ width: 6, height: 6, borderRadius: 2, background: c as string }}/>
                      <span style={{ fontSize: 7, color: 'rgba(255,255,255,0.3)', fontWeight: 600 }}>{l}</span>
                    </div>
                  ))}
                </div>
              </Panel>

            </div>
          </div>
        </div>

        {/* ════════════════════════════════════
            FLOATING BADGE OVERLAYS
        ════════════════════════════════════ */}

        {/* Top-right: AI Active */}
        <div style={{
          position: 'absolute', top: -10, right: -14,
          display: 'flex', alignItems: 'center', gap: 6,
          padding: '5px 10px', borderRadius: 12,
          background: 'linear-gradient(135deg, rgba(13,30,56,0.97) 0%, rgba(9,21,37,1) 100%)',
          border: '1px solid rgba(16,185,129,0.28)',
          boxShadow: '0 8px 28px rgba(0,0,0,0.45), 0 0 14px rgba(16,185,129,0.1)',
          backdropFilter: 'blur(12px)',
          zIndex: 10,
        }}>
          <div className="hd-pulse" style={{ width: 7, height: 7, borderRadius: '50%', background: '#10b981', boxShadow: '0 0 6px #10b981' }}/>
          <span style={{ fontSize: 9, fontWeight: 700, color: '#10b981', letterSpacing: '0.04em' }}>AI Active</span>
          <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.3)' }}>·</span>
          <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.55)', fontWeight: 600 }}>3 insights</span>
        </div>

        {/* Bottom-left: Automation Rate */}
        <div style={{
          position: 'absolute', bottom: -12, left: -14,
          padding: '7px 12px', borderRadius: 12,
          background: 'linear-gradient(135deg, rgba(13,30,56,0.97) 0%, rgba(9,21,37,1) 100%)',
          border: '1px solid rgba(59,130,246,0.22)',
          boxShadow: '0 8px 28px rgba(0,0,0,0.5), 0 0 16px rgba(59,130,246,0.08)',
          backdropFilter: 'blur(12px)',
          zIndex: 10, minWidth: 130,
        }}>
          <div style={{ fontSize: 7.5, color: 'rgba(255,255,255,0.28)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 5 }}>Automation Rate</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 16, fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>94.7%</span>
            <div style={{ flex: 1, height: 4, borderRadius: 4, background: 'rgba(255,255,255,0.07)', overflow: 'hidden', minWidth: 60 }}>
              <div style={{ height: '100%', width: '94.7%', borderRadius: 4, background: 'linear-gradient(90deg, #06b6d4, #3b82f6)' }}/>
            </div>
          </div>
        </div>

        {/* Mid-right: Revenue uptick chip */}
        <div style={{
          position: 'absolute', top: '42%', right: -18,
          display: 'flex', alignItems: 'center', gap: 5,
          padding: '4px 9px', borderRadius: 10,
          background: 'linear-gradient(135deg, rgba(13,30,56,0.97) 0%, rgba(9,21,37,1) 100%)',
          border: '1px solid rgba(6,182,212,0.22)',
          boxShadow: '0 6px 20px rgba(0,0,0,0.45), 0 0 12px rgba(6,182,212,0.08)',
          backdropFilter: 'blur(12px)',
          zIndex: 10,
        }}>
          <div style={{ color: '#10b981', display: 'flex' }}><Ic.TrendUp/></div>
          <span style={{ fontSize: 9, fontWeight: 700, color: '#10b981' }}>+18.2%</span>
          <span style={{ fontSize: 8, color: 'rgba(255,255,255,0.4)', fontWeight: 500 }}>MoM</span>
        </div>

      </div>
    </>
  );
};
