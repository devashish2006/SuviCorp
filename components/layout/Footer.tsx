import React from 'react';
import Link from 'next/link';
import { FooterCTA } from './FooterCTA';

const footerLinks = {
  services: [
    { label: 'Bespoke SaaS Development', href: '#bespoke' },
    { label: 'Finance Transformation', href: '#transformation' },
    { label: 'Technical Accounting Advisory', href: '#advisory' },
    { label: 'SUVI Innovation Lab', href: '#innovation' },
  ],
  company: [
    { label: 'About Us', href: '#about' },
    { label: 'Our Team', href: '#team' },
    { label: 'Mission & Vision', href: '#about' },
  ],
  products: [
    { label: 'Products (Lite)', href: '#pricing' },
    { label: 'Products (Elite)', href: '#pricing' },
    { label: 'The Suvicorp Advantage', href: '#features' },
  ],
};

export const Footer: React.FC = () => {
  return (
    <>
      {/* Anchor for Blogs nav link — placeholder until a dedicated Blogs section is built */}
      <span id="blogs" className="block" aria-hidden="true" />
      <footer className="bg-navy px-[5%] pt-12 pb-8 border-t border-white/[0.06]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr_1.5fr] gap-8 lg:gap-12 mb-12">
        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="font-playfair text-[1.5rem] md:text-[1.7rem] font-black tracking-tight leading-none mb-4">
            <span className="text-[#3b82f6]">Suvi</span><span className="text-white">corp</span>
          </div>

          <FooterCTA />
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

        {/* Products */}
        <div>
          <h4 className="text-white font-semibold text-[0.85rem] mb-4">Products</h4>
          {footerLinks.products.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="block text-white/40 text-[0.8rem] mb-2 transition-colors duration-200 hover:text-teal"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-semibold text-[0.85rem] mb-4">Contact Info</h4>
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-white/70 text-[0.8rem] font-semibold">Gurugram, India</p>
              <p className="text-white/40 text-[0.8rem] mt-0.5">+91 9811 981834</p>
            </div>
            <div>
              <p className="text-white/70 text-[0.8rem] font-semibold">Ahmedabad, India</p>
              <p className="text-white/40 text-[0.8rem] mt-0.5">+91 98795 73517</p>
            </div>
            <div>
              <p className="text-white/70 text-[0.8rem] font-semibold">Poland, Europe</p>
              <p className="text-white/40 text-[0.8rem] mt-0.5">+48 739 658 861</p>
            </div>
            <div>
              <p className="text-white/70 text-[0.8rem] font-semibold">Dubai, UAE</p>
              <p className="text-white/40 text-[0.8rem] mt-0.5">+971 50 905 5391</p>
            </div>
          </div>
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
