import React from 'react';
import Link from 'next/link';

const footerLinks = {
  services: [
    { label: 'Financial Transformation', href: '#services' },
    { label: 'Bespoke SaaS Development', href: '#services' },
    { label: 'Expert Hub', href: '#services' },
    { label: 'SUVI Knowledge Hub', href: '#services' },
    { label: 'Innovation Lab', href: '#services' },
  ],
  company: [
    { label: 'About Us', href: '#about' },
    { label: 'Our Team', href: '#about' },
    { label: 'Partnership Success', href: '#stories' },
    { label: 'Mission & Vision', href: '#about' },
  ],
  resources: [
    { label: 'Product Portfolio', href: '#pricing' },
    { label: 'The SUVI Advantage', href: '#features' },
    { label: 'Contact', href: '#cta' },
    { label: 'Partnerships', href: '#cta' },
  ],
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy px-[5%] pt-12 pb-8 border-t border-white/[0.06]">
      <div className="grid md:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-12">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 font-playfair text-[1.6rem] font-black text-white tracking-tight mb-4">
            <svg width="24" height="24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25 45 L25 80 L35 80 L35 45 L40 45 L30 30 L20 45 Z" fill="#ffffff" />
              <path d="M45 35 L45 80 L55 80 L55 35 L60 35 L50 20 L40 35 Z" fill="#06b6d4" />
              <path d="M65 45 L65 80 L75 80 L75 45 L80 45 L70 30 L60 45 Z" fill="#ffffff" />
              <path d="M20 85 Q 50 70 80 85 L 80 90 Q 50 75 20 90 Z" fill="#06b6d4" />
            </svg>
            Suvicorp
          </div>
          <p className="text-white/40 text-[0.85rem] leading-relaxed max-w-[240px]">
            Strategic technology partner for accounting and consulting firms. Amplifying expertise through elite SAAS solutions and technical talent.
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-semibold text-[0.85rem] mb-4">Services</h4>
          {footerLinks.services.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="block text-white/40 text-[0.8rem] mb-2 transition-colors duration-200 hover:text-teal"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Company */}
        <div>
          <h4 className="text-white font-semibold text-[0.85rem] mb-4">Company</h4>
          {footerLinks.company.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="block text-white/40 text-[0.8rem] mb-2 transition-colors duration-200 hover:text-teal"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-white font-semibold text-[0.85rem] mb-4">Resources</h4>
          {footerLinks.resources.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="block text-white/40 text-[0.8rem] mb-2 transition-colors duration-200 hover:text-teal"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/[0.06] pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-white/30 text-xs">
          © 2026 Suvicorp. All rights reserved.
        </p>
        <p className="text-white/30 text-xs">Privacy Policy · Terms of Service</p>
      </div>
    </footer>
  );
};
