'use client';

import React, { useEffect, useRef } from 'react';
import { SectionTag, SectionTitle } from '../ui';

const features = [
  {
    icon: '🏗️',
    title: 'Architected by Industry Veterans',
    description: 'Our solutions are designed by financial architects with over 15 years of experience from top-tier firms. Every feature is purpose-built to solve real-world financial and accounting challenges.',
  },
  {
    icon: '⚡',
    title: 'Elite Efficiency, Exceptional Value',
    description: 'We replicate the sophistication and power of multi-million-dollar technology platforms at a fraction of the cost and time. Rapid, high-fidelity development at competitive pricing.',
  },
  {
    icon: '🎯',
    title: 'Focus on Your Core Business',
    description: 'Our alliance model allows you to offer cutting-edge technology solutions without diverting focus, capital, or resources from your core consulting practice.',
  },
  {
    icon: '🔧',
    title: 'Bespoke SAAS Development',
    description: 'Custom, cloud-based software tools tailored to your specific needs. From consolidation engines to automated financial reporting dashboards.',
  },
  {
    icon: '👥',
    title: 'Dedicated Expert Hub',
    description: 'Access a curated ecosystem of technology professionals, each a specialist in financial systems, data analytics, and software development.',
  },
  {
    icon: '🚀',
    title: 'Financial Transformation Enablement',
    description: 'Tools and platforms that power digital transformation. Our solutions automate complex processes, deliver AI-driven insights, and cut delivery timelines dramatically.',
  },
];

export const Features: React.FC = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeUp');
            entry.target.classList.remove('opacity-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card) => {
      if (card) {
        card.classList.add('opacity-0');
        observer.observe(card);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" className="bg-white py-24 px-[5%]">
      <div className="text-center mb-16">
        <SectionTag>The SUVI Advantage</SectionTag>
        <SectionTitle className="mt-4 mb-4">
          Why Leading Firms Choose<br />SUVI Internationals
        </SectionTitle>
        <p className="text-slate-600 text-base leading-relaxed max-w-[550px] mx-auto">
          Our difference is rooted in our foundation. Architected by industry veterans, delivering elite efficiency at exceptional value.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            ref={(el) => {
              cardsRef.current[index] = el;
            }}
            className="border border-light rounded-2xl p-8 transition-all duration-300 relative overflow-hidden group hover:border-blue-accent hover:shadow-[0_12px_40px_rgba(59,130,246,0.12)] hover:-translate-y-1 before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-gradient-to-r before:from-blue-accent before:to-teal before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100"
          >
            <div className="w-[52px] h-[52px] bg-gradient-to-br from-blue-accent to-teal rounded-xl flex items-center justify-center mb-5 text-2xl">
              {feature.icon}
            </div>
            <h3 className="font-playfair text-xl font-bold mb-2.5 text-navy">
              {feature.title}
            </h3>
            <p className="text-slate-600 text-[0.9rem] leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
