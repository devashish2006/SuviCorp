import React from 'react';
import { SectionTag, SectionTitle, Button } from '../ui';

const values = [
  {
    icon: '�️',
    title: 'Top-Tier Experience',
    subtitle: '15+ years from leading firms',
  },
  {
    icon: '🚀',
    title: 'Rapid Development',
    subtitle: 'Months, not years',
  },
  {
    icon: '🌐',
    title: 'Global Partnerships',
    subtitle: 'Worldwide alliances',
  },
  {
    icon: '🤝',
    title: 'Collaborative Model',
    subtitle: 'Your team, extended',
  },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="bg-white py-24 px-[5%]">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        {/* Image/Visual */}
        <div className="bg-gradient-to-br from-navy to-blue h-[420px] rounded-[20px] flex items-center justify-center relative overflow-hidden">
          <div className="text-white/15 font-playfair text-[5rem] text-center font-black">SUVI</div>
          <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-teal/20 to-transparent" />
        </div>

        {/* Content */}
        <div>
          <SectionTag>About SUVI Internationals</SectionTag>
          <SectionTitle className="mt-4 mb-4">
            Bridging Strategy & Technology
          </SectionTitle>
          <p className="text-slate-600 leading-relaxed my-4">
            SUVI Internationals was founded on a simple, powerful premise: the best consulting insights deserve the best enabling technology. We are the strategic technology partner for accounting and consulting firms worldwide, amplifying your expertise with a robust ecosystem of SAAS solutions and technical talent.
          </p>
          <p className="text-slate-600 leading-relaxed my-4">
            We enable our partners to deliver &ldquo;Big Four&rdquo; calibre technology solutions with the agility and cost-efficiency of a boutique firm. Our team brings together decades of experience from global consulting firms and specialized technology environments.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-8">
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

          <Button href="#cta" variant="primary" className="mt-8">
            Explore Partnership Opportunities →
          </Button>
        </div>
      </div>
    </section>
  );
};
