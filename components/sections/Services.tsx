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
    id: 'transformation',
    icon: '🚀',
    title: 'Financial Transformation Enablement',
    description: 'We provide the tools and platforms that power digital transformation for your clients. Our solutions automate complex processes, deliver AI-driven insights, and cut delivery timelines dramatically, increasing your capacity and profitability.',
    points: [
      'Automate complex financial processes',
      'Deploy AI-driven insights',
      'Cut delivery timelines dramatically',
      'Increase your engagement capacity',
      'Boost profitability per project',
      'Deliver consistent, enterprise-grade outputs',
    ],
  },
  {
    id: 'bespoke',
    icon: '🛠️',
    title: 'Bespoke SaaS Solution Development',
    description: 'Have a unique challenge or a visionary product idea? Our team specializes in building custom, cloud-based software tools tailored to your specific needs. From consolidation engines to automated financial reporting dashboards, we transform your requirements into powerful, secure, and scalable applications.',
    points: [
      'Transform visionary ideas into production-ready applications',
      'Build exactly what you need',
      'No off-the-shelf compromises',
      'Enterprise-grade security and scalability',
      'Seamless integration with existing systems',
      'Future-proof architecture',
    ],
  },
  {
    id: 'expert',
    icon: '👥',
    title: 'The Dedicated Expert Hub',
    description: 'Access a curated ecosystem of technology professionals, each a specialist in financial systems, data analytics, and software development. This is not an outsourced team; it is an extension of your own, working collaboratively to bring your projects to life with precision and expertise.',
    points: [
      'Access a curated ecosystem of specialists',
      'Extension of your own organization',
      'Collaborative partnership model',
      'Bring ambitious projects to life',
      'Scale your team up or down on demand',
      'Benefit from collective expertise',
    ],
  },
  {
    id: 'knowledge',
    icon: '🧠',
    title: 'The SUVI Knowledge Hub',
    description: 'Technology is only half the equation. The other half? The people who wield it. The SUVI Knowledge Hub connects you with practitioners who\'ve lived through thousands of closes and navigated countless complex accounting scenarios. We transfer that wisdom directly to your team—through training on recent accounting changes, deep dives into complex topics, and battle-tested best practices that transform how you run financial processes. Because true capability isn\'t just having the right tools. It\'s knowing exactly how to use them.',
    points: [
      'Master complex accounting topics',
      'Navigate new standards with confidence',
      'Learn from practitioners',
      'Implement best practices',
      'Receive practical guidance',
      'Stay ahead of the curve',
    ],
  },
  {
    id: 'innovation',
    icon: '🧪',
    title: 'Innovation Lab',
    description: 'The SUVI Innovation Lab is where financial intelligence becomes tangible. Where abstract problems meet concrete solutions. Consider us your research and development arm, where we build the tools that level the playing field.',
    points: [
      'Make financial intelligence tangible',
      'Turn abstract problems into concrete solutions',
      'Your R&D arm for tools',
      'Level the playing field',
      'Incubate new ideas',
      'Test cutting-edge prototypes',
    ],
  }
];

export const Services: React.FC = () => {
  const [activeService, setActiveService] = useState('transformation');

  const activeContent = services.find((s) => s.id === activeService)!;

  return (
    <section id="services" className="bg-navy py-16 md:py-24 px-[5%]">
      <div className="text-center mb-12">
        <SectionTag variant="teal">What we deliver</SectionTag>
        <SectionTitle className="text-white mt-4 mb-4">
          Capabilities That Extend Your Reach
        </SectionTitle>
        <p className="text-white/55 text-base leading-relaxed max-w-[550px] mx-auto">
          Amplify your firm&apos;s expertise with our robust ecosystem of SaaS solutions and deep bench of technical talent.
        </p>
      </div>

      <div className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16 items-start">
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
