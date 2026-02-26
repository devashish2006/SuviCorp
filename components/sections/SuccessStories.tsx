import React from 'react';
import { SectionTag, SectionTitle } from '../ui';

interface Story {
  quote: string;
  author: string;
  role: string;
  initials: string;
}

const stories: Story[] = [
  {
    quote: "SUVI Internationals transformed how we deliver technology to our clients. Their bespoke SAAS platform gave us a competitive edge we couldn't have built ourselves. True partnership at every level.",
    author: 'David Chen',
    role: 'Managing Partner, Premier Advisory Group',
    initials: 'DC',
  },
  {
    quote: 'The expert hub model is revolutionary. We gained access to elite technical talent without the overhead. Our firm can now compete with the Big Four on technology, at boutique pricing.',
    author: 'Emma Rodriguez',
    role: 'CFO, Global Consulting Partners',
    initials: 'ER',
  },
  {
    quote: 'From concept to deployment in months, not years. SUVI built us a white-labeled consolidation platform that our clients believe we developed in-house. Game-changing partnership.',
    author: 'James Thompson',
    role: 'Director of Technology, Apex Financial Advisory',
    initials: 'JT',
  },
];

export const SuccessStories: React.FC = () => {
  return (
    <section id="stories" className="bg-gradient-to-br from-navy to-[#0d2845] py-24 px-[5%]">
      <div className="text-center">
        <SectionTag variant="teal">Partnership Success</SectionTag>
        <SectionTitle className="text-white mt-4">
          Trusted by Forward-Thinking<br />Firms Worldwide
        </SectionTitle>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {stories.map((story, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/[0.08] rounded-2xl p-8"
          >
            <div className="text-[2.5rem] text-teal leading-none mb-4">&ldquo;</div>
            <p className="text-white/70 text-[0.9rem] leading-relaxed mb-6">
              {story.quote}
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-accent to-teal flex items-center justify-center font-bold text-white text-sm">
                {story.initials}
              </div>
              <div>
                <div className="font-semibold text-white text-[0.9rem]">
                  {story.author}
                </div>
                <div className="text-[0.75rem] text-white/40">{story.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
