import React from 'react';
import { Button, SectionTag } from '../ui';

const stats = [
  { num: '15+', label: 'Years Experience from Top-Tier Firms' },
  { num: '70%', label: 'Faster Deliverable Generation' },
  { num: 'Big 4', label: 'Caliber Technology Solutions' },
  { num: 'Global', label: 'Strategic Partnerships Worldwide' },
];

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen bg-hero-gradient flex items-center relative overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-hero-radial" />
      <div 
        className="absolute inset-0 opacity-100"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />

      {/* Content */}
      <div className="relative z-[2] px-[5%] w-full grid md:grid-cols-2 gap-16 items-center">
        <div className="animate-fadeUp">
          <SectionTag variant="teal">Strategic Technology Hub</SectionTag>
          
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mt-6 mb-6">
            Your <em className="italic text-teal">Strategic Technology Hub</em> for Accounting Excellence
          </h1>
          
          <p className="text-white/65 text-lg leading-relaxed max-w-[480px] mb-8">
            SUVI Internationals empowers accounting and consulting firms with elite technology ecosystems and specialized SAAS/AI solutions to deliver transformative financial outcomes without the overhead.
          </p>
          
          <div className="flex gap-4 flex-wrap">
            <Button href="#cta" variant="primary">
              Explore Partnership →
            </Button>
            <Button href="#services" variant="outline">
              Our Solutions
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 animate-fadeUp animation-delay-300">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/[0.06] border border-white/10 rounded-xl p-6 backdrop-blur-[10px]"
            >
              <div className="font-playfair text-4xl font-bold text-teal">
                {stat.num}
              </div>
              <div className="text-white/55 text-[0.8rem] mt-1.5 leading-snug">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
