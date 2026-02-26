'use client';

import React, { useState } from 'react';
import { SectionTag, SectionTitle } from '../ui';

interface ServiceContent {
  id: string;
  icon: string;
  title: string;
  description: string;
  points: string[];
}

const services: ServiceContent[] = [
  {
    id: 'bespoke',
    icon: '🛠️',
    title: 'Bespoke SAAS Solution Development',
    description: 'Have a unique challenge or a visionary product idea? Our team specializes in building custom, cloud-based software tools tailored to your specific needs. From consolidation engines to automated financial reporting dashboards, we transform your requirements into powerful, secure, and scalable applications.',
    points: [
      'Custom consolidation engines',
      'Automated reporting dashboards',
      'Cloud-native architecture',
      'Secure & scalable platforms',
      'API integrations',
      'Real-time data processing',
    ],
  },
  {
    id: 'expert',
    icon: '👥',
    title: 'The Dedicated Expert Hub',
    description: 'Access a curated ecosystem of technology professionals, each a specialist in financial systems, data analytics, and software development. This is not an outsourced team; it is an extension of your own, working collaboratively to bring your projects to life with precision and expertise.',
    points: [
      'Financial systems specialists',
      'Data analytics experts',
      'Software development team',
      'Collaborative integration',
      'Project-specific scaling',
      'Technical precision delivery',
    ],
  },
  {
    id: 'transformation',
    icon: '🚀',
    title: 'Financial Transformation Enablement',
    description: 'We provide the tools and platforms that power digital transformation for your clients. Our solutions automate complex processes, deliver AI-driven insights, and cut delivery timelines dramatically, increasing your capacity and profitability.',
    points: [
      'Process automation',
      'AI-driven insights',
      'Reduced delivery timelines',
      'Increased capacity',
      'Enhanced profitability',
      'Digital transformation tools',
    ],
  },
  {
    id: 'excel',
    icon: '📊',
    title: 'Excel-Powered Solutions & Managed Services',
    description: 'For firms seeking immediate automation without major upfront investment. Our Excel-based tools deliver exceptional value by transforming the familiar spreadsheet into a powerful, automated engine for financial reporting and analysis.',
    points: [
      'Custom-built Excel engines',
      'Managed service team',
      'Automated generation',
      'Power BI integration',
      '70% faster deliverables',
      'Hyper-care support',
    ],
  },
  {
    id: 'cloud',
    icon: '☁️',
    title: 'Elite Cloud & AI Platforms',
    description: 'Fully custom, cloud-native SAAS applications built to be the single source of truth for your client\'s most critical financial functions. These are bespoke platforms engineered with the sophistication of Big Four tools, delivered with our signature efficiency.',
    points: [
      'Intelligent consolidation engine',
      'Dynamic reporting suite',
      'AI-powered CFO dashboard',
      'One source of truth',
      'Forward & backward integration',
      'Predictive analytics',
    ],
  },
  {
    id: 'partnership',
    icon: '🤝',
    title: 'Strategic Alliances & Partnerships',
    description: 'Our partnership model is flexible and built on mutual success. We collaborate closely with your firm to co-develop custom SAAS products, integrate our technology hub, or provide white-labelled solutions under your own brand.',
    points: [
      'Co-develop custom SAAS',
      'Shared revenue streams',
      'White-labelled solutions',
      'Technology hub integration',
      'Proprietary IP creation',
      'Global partnerships',
    ],
  },
];

export const Services: React.FC = () => {
  const [activeService, setActiveService] = useState('bespoke');

  const activeContent = services.find((s) => s.id === activeService)!;

  return (
    <section id="services" className="bg-navy py-24 px-[5%]">
      <div className="text-center mb-12">
        <SectionTag variant="teal">Our Services/Ecosystem</SectionTag>
        <SectionTitle className="text-white mt-4 mb-4">
          Your Technology Hub, On Demand
        </SectionTitle>
        <p className="text-white/55 text-base leading-relaxed max-w-[550px] mx-auto">
          Amplify your firm's expertise with our robust ecosystem of SAAS solutions and deep bench of technical talent.
        </p>
      </div>

      <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start">
        {/* Service Tabs */}
        <div className="flex flex-col gap-2">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveService(service.id)}
              className={`px-6 py-4 rounded-lg cursor-pointer border transition-all duration-200 text-left font-medium ${
                activeService === service.id
                  ? 'bg-blue-accent/15 border-blue-accent/30 text-teal'
                  : 'border-transparent text-white/55 hover:bg-blue-accent/15 hover:border-blue-accent/30 hover:text-white'
              }`}
            >
              {service.icon} {service.title.split(' ')[0]} {service.title.split(' ')[1]}
            </button>
          ))}
        </div>

        {/* Service Content */}
        <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-10">
          <h3 className="font-playfair text-3xl text-white mb-4">
            {activeContent.title}
          </h3>
          <p className="text-white/65 leading-relaxed mb-6">
            {activeContent.description}
          </p>
          <ul className="grid md:grid-cols-2 gap-3">
            {activeContent.points.map((point, index) => (
              <li
                key={index}
                className="text-white/70 text-[0.9rem] flex items-center gap-2 before:content-['✦'] before:text-teal before:text-xs"
              >
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
