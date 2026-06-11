import React from 'react';
import { SectionTag, SectionTitle, Button } from '../ui';

const values = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: 'Live Data Sync',
    subtitle: 'Updates in real time',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: 'Bank-Grade Security',
    subtitle: 'SOC 2 Type II certified',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
    title: 'Mobile Ready',
    subtitle: 'Access anywhere',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="12" y1="18" x2="12" y2="12" />
        <line x1="9" y1="15" x2="15" y2="15" />
      </svg>
    ),
    title: 'Board Reports',
    subtitle: 'One-click PDF export',
  },
];

export const Dashboard: React.FC = () => {
  return (
    <section id="dashboard" className="bg-gradient-to-b from-[#f0f6ff] to-white py-16 md:py-24 px-[5%]">
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div>
          <SectionTag>CFO Dashboard</SectionTag>
          <SectionTitle className="mt-4 mb-4">
            Real-Time Financial Intelligence at Your Fingertips
          </SectionTitle>
          <p className="text-slate-600 leading-relaxed my-4 mb-8">
            Connect your ERP—NetSuite, QuickBooks, or SAP—and get an instant executive view of your organization&apos;s financial health. No spreadsheets. No lag. Just clarity.
          </p>
          
          <div className="grid grid-cols-2 gap-6 mb-8">
            {values.map((value, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-9 h-9 bg-blue-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 text-blue-accent">
                  {value.icon}
                </div>
                <div>
                  <strong className="block font-semibold text-[0.9rem] text-navy mb-0.5">
                    {value.title}
                  </strong>
                  <span className="text-[0.8rem] text-slate-600">{value.subtitle}</span>
                </div>
              </div>
            ))}
          </div>
          
          <Button href="#cta" variant="primary">
            Request a Demo →
          </Button>
        </div>

        {/* Dashboard Mockup */}
        <div className="bg-navy rounded-2xl p-6 shadow-[0_30px_80px_rgba(10,22,40,0.3)] relative">
          {/* Top Bar */}
          <div className="flex items-center gap-2 mb-5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
            <span className="text-xs text-white/40 ml-auto">Suvicorp CFO Dashboard</span>
          </div>

          {/* KPI Grid */}
          <div className="grid grid-cols-3 gap-3 mb-3">
            <div className="bg-white/[0.06] rounded-lg p-3">
              <div className="font-playfair text-xl text-white font-bold">$4.2M</div>
              <div className="text-[0.65rem] text-white/40 mt-0.5">Total Revenue</div>
              <div className="text-[0.7rem] text-green-500 mt-0.5">↑ 18.3%</div>
            </div>
            <div className="bg-white/[0.06] rounded-lg p-3">
              <div className="font-playfair text-xl text-white font-bold">14mo</div>
              <div className="text-[0.65rem] text-white/40 mt-0.5">Cash Runway</div>
              <div className="text-[0.7rem] text-green-500 mt-0.5">↑ 2mo</div>
            </div>
            <div className="bg-white/[0.06] rounded-lg p-3">
              <div className="font-playfair text-xl text-white font-bold">$820K</div>
              <div className="text-[0.65rem] text-white/40 mt-0.5">Monthly Burn</div>
              <div className="text-[0.7rem] text-amber-500 mt-0.5">→ stable</div>
            </div>
          </div>

          {/* Chart */}
          <div className="bg-white/[0.04] rounded-lg p-3 h-[100px] flex items-end gap-1 mb-3">
            {[40, 55, 48, 70, 65, 80, 72, 88, 82, 95, 90, 100].map((height, i) => (
              <div
                key={i}
                className="bg-gradient-to-t from-blue-accent to-teal rounded-t flex-1 transition-all duration-300"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
          <div className="text-[0.6rem] text-white/30 mb-3">Revenue Trend – Last 12 Months</div>

          {/* Bottom Panels */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white/[0.04] rounded-lg p-3">
              <div className="text-[0.65rem] text-white/40 uppercase tracking-wider mb-2">
                Budget vs Actuals
              </div>
              {[
                { label: 'Payroll', badge: 'On Track', color: 'green' },
                { label: 'Marketing', badge: '+8%', color: 'yellow' },
                { label: 'R&D', badge: 'On Track', color: 'green' },
                { label: 'OpEx', badge: '-3%', color: 'green' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center py-1.5 border-b border-white/5 text-[0.7rem] text-white/60"
                >
                  <span>{item.label}</span>
                  <span
                    className={`px-1.5 py-0.5 rounded text-[0.6rem] ${
                      item.color === 'green'
                        ? 'bg-green-500/20 text-green-500'
                        : 'bg-yellow-500/20 text-yellow-500'
                    }`}
                  >
                    {item.badge}
                  </span>
                </div>
              ))}
            </div>

            <div className="bg-white/[0.04] rounded-lg p-3">
              <div className="text-[0.65rem] text-white/40 uppercase tracking-wider mb-2">
                Revenue Recognition
              </div>
              {[
                { label: 'Recognized', value: '$3.1M', color: 'text-teal' },
                { label: 'Deferred', value: '$1.1M', color: 'text-amber-500' },
                { label: 'ARR', value: '$6.8M', color: 'text-green-500' },
                { label: 'MRR', value: '$565K', color: 'text-green-500' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center py-1.5 border-b border-white/5 text-[0.7rem] text-white/60"
                >
                  <span>{item.label}</span>
                  <span className={item.color}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
