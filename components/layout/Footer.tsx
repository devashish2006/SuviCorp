import React from 'react';
import Link from 'next/link';

const footerLinks = {
  services: [
    { label: 'Bespoke SaaS Development', href: '#services' },
    { label: 'Finance Transformation', href: '#services' },
    { label: 'Technical Accounting Advisory', href: '#services' },
    { label: 'SUVI Innovation Lab', href: '#services' },
    { label: 'Strategic Technology Partnerships', href: '#services' },
  ],
  company: [
    { label: 'About Us', href: '#about' },
    { label: 'Our Team', href: '#about' },
    { label: 'Mission & Vision', href: '#about' },
    { label: 'Success Stories', href: '#stories' },
  ],
  resources: [
    { label: 'Products (Lite)', href: '#products' },
    { label: 'Products (Elite)', href: '#products' },
    { label: 'The Suvicorp Advantage', href: '#features' },
    { label: 'Contact', href: '#cta' },
  ],
};

export const Footer: React.FC = () => {
  return (
    <>
      {/* Anchor for Blogs nav link — placeholder until a dedicated Blogs section is built */}
      <span id="blogs" className="block" aria-hidden="true" />
      <footer className="bg-navy px-[5%] pt-12 pb-8 border-t border-white/[0.06]">
      <div className="grid md:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-12">
        {/* Brand */}
        <div>
          <div className="font-playfair text-[1.5rem] md:text-[1.7rem] font-black tracking-tight leading-none mb-4">
            <span className="text-[#3b82f6]">Suvi</span><span className="text-white">corp</span>
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
    </>
  );
};
