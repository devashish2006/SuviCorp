import React from 'react';
import Link from 'next/link';
import { SectionTag, SectionTitle } from '../ui';

interface PricingPlan {
  name: string;
  amount: string;
  period?: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  buttonVariant: 'outline' | 'solid';
  buttonText: string;
}

const plans: PricingPlan[] = [
  {
    name: 'Excel-Powered Solutions',
    amount: 'Lite',
    description: 'For firms seeking immediate automation without major upfront investment. Managed service with hyper-care support.',
    features: [
      'Custom-built Excel engines',
      'Managed service team operates & maintains',
      'Automated dashboard outputs',
      'Power BI integration',
      '70% faster deliverable generation',
      'Quick implementation (weeks)',
    ],
    buttonVariant: 'outline',
    buttonText: 'Learn More',
  },
  {
    name: 'Elite Cloud & AI Platform',
    amount: 'Enterprise',
    description: 'Fully custom, cloud-native SAAS applications built to be the single source of truth. Big Four grade technology.',
    features: [
      'Intelligent consolidation engine',
      'Dynamic financial reporting suite',
      'AI-powered CFO dashboard',
      'One source of truth architecture',
      'Forward & backward integration',
      'Predictive analytics & ML',
      'White-label ready',
    ],
    isPopular: true,
    buttonVariant: 'solid',
    buttonText: 'Schedule Demo',
  },
  {
    name: 'Strategic Partnership',
    amount: 'Custom',
    description: 'Flexible alliance model for firms ready to co-develop proprietary technology and create new revenue streams.',
    features: [
      'Co-develop custom SAAS products',
      'Shared IP & revenue streams',
      'White-labelled solutions',
      'Dedicated expert hub access',
      'Technology team augmentation',
      'Global partnership support',
    ],
    buttonVariant: 'outline',
    buttonText: 'Explore Partnership',
  },
];

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="bg-white py-24 px-[5%]">
      <div className="text-center">
        <SectionTag>Our Product Portfolio</SectionTag>
        <SectionTitle className="mt-4 mb-4">
          Solutions Engineered for Excellence
        </SectionTitle>
        <p className="text-slate-600 text-base max-w-[550px] mx-auto">
          From Excel-powered automation to elite cloud platforms. All products can be white-labeled to carry your firm's brand.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`border rounded-2xl p-10 relative transition-all duration-300 ${
              plan.isPopular
                ? 'border-blue-accent bg-gradient-to-br from-navy to-navy-mid text-white'
                : 'border-light hover:border-blue-accent'
            }`}
          >
            {plan.isPopular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-accent to-teal text-white text-[0.7rem] font-bold px-4 py-1.5 rounded-full tracking-wide uppercase whitespace-nowrap">
                Most Popular
              </div>
            )}

            <div
              className={`font-bold text-[0.85rem] uppercase tracking-wide mb-3 ${
                plan.isPopular ? 'text-teal' : 'text-gray-custom'
              }`}
            >
              {plan.name}
            </div>

            <div
              className={`font-playfair text-5xl font-black ${
                plan.isPopular ? 'text-white' : 'text-navy'
              }`}
            >
              {plan.amount}
              {plan.period && (
                <span
                  className={`text-base font-normal font-sans ${
                    plan.isPopular ? 'text-white/50' : ''
                  }`}
                >
                  {plan.period}
                </span>
              )}
            </div>

            <div
              className={`text-[0.85rem] my-4 mb-6 leading-relaxed ${
                plan.isPopular ? 'text-white/55' : 'text-slate-600'
              }`}
            >
              {plan.description}
            </div>

            <ul className="flex flex-col gap-2.5 mb-8">
              {plan.features.map((feature, i) => (
                <li
                  key={i}
                  className={`text-[0.85rem] flex items-center gap-2.5 before:content-['✓'] before:text-teal before:font-bold ${
                    plan.isPopular ? 'text-white/70' : 'text-slate-700'
                  }`}
                >
                  {feature}
                </li>
              ))}
            </ul>

            <Link
              href="#cta"
              className={`block text-center py-3.5 rounded-lg font-semibold text-[0.9rem] transition-all duration-200 ${
                plan.buttonVariant === 'solid'
                  ? 'bg-gradient-to-r from-blue-accent to-teal text-white hover:opacity-90 hover:-translate-y-0.5'
                  : plan.isPopular
                  ? 'border-[1.5px] border-light text-navy hover:border-blue-accent hover:text-blue-accent'
                  : 'border-[1.5px] border-light text-navy hover:border-blue-accent hover:text-blue-accent'
              }`}
            >
              {plan.buttonText}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};
