import React from 'react';
import { SectionTag, SectionTitle, Button } from '../ui';

const values = [
  { icon: '⚡', title: 'Live Data Sync', subtitle: 'Updates in real time' },
  { icon: '🔒', title: 'Bank-Grade Security', subtitle: 'SOC 2 Type II certified' },
  { icon: '📱', title: 'Mobile Ready', subtitle: 'Access anywhere' },
  { icon: '📤', title: 'Board Reports', subtitle: 'One-click PDF export' },
];

export const Dashboard: React.FC = () => {
  return (
    <section id="dashboard" className="bg-gradient-to-b from-[#f0f6ff] to-white py-24 px-[5%]">
      <div className="grid md:grid-cols-2 gap-16 items-center">
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
                <div className="w-9 h-9 bg-blue-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 text-sm">
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
