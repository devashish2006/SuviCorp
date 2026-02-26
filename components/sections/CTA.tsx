'use client';

import React, { useState } from 'react';

export const CTA: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Email submitted:', email);
  };

  return (
    <section id="cta" className="bg-gradient-to-br from-blue-accent to-teal py-20 px-[5%] text-center">
      <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-white mb-4">
        Start the Conversation
      </h2>
      <p className="text-white/85 text-lg max-w-[500px] mx-auto mb-8">
        Ready to explore how a strategic alliance with SUVI Internationals can transform your firm&apos;s capabilities? Schedule a confidential consultation.
      </p>
      
      <form onSubmit={handleSubmit} className="flex gap-4 max-w-[480px] mx-auto flex-wrap justify-center">
        <input
          type="email"
          placeholder="partnerships@suvinternationals.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1 min-w-[200px] px-5 py-3.5 rounded-lg border-none text-[0.95rem] font-sans focus:outline-none focus:ring-2 focus:ring-white/50"
        />
        <button
          type="submit"
          className="bg-navy text-white px-8 py-3.5 rounded-lg border-none font-bold text-[0.95rem] cursor-pointer font-sans transition-opacity duration-200 hover:opacity-85"
        >
          Schedule Consultation →
        </button>
      </form>
    </section>
  );
};
