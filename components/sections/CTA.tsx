'use client';

import React, { useState } from 'react';

export const CTA: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setStatus('loading');
      setMessage('');

      const response = await fetch('/api/consultation-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        setStatus('error');
        setMessage(data.error ?? 'Something went wrong. Please try again.');
        return;
      }

      setStatus('success');
      setMessage('Thanks! We will contact you shortly.');
      setEmail('');
    } catch {
      setStatus('error');
      setMessage('Network error. Please try again.');
    }
  };

  return (
    <section id="cta" className="bg-gradient-to-br from-blue-accent to-teal py-16 md:py-20 px-[5%] text-center">
      <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-white mb-4">
        Start the Conversation
      </h2>
      <p className="text-white/85 text-lg max-w-[500px] mx-auto mb-8">
        Ready to explore how a strategic alliance with SUVI Internationals can transform your firm&apos;s capabilities? Schedule a confidential consultation.
      </p>
      
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-[480px] mx-auto justify-center">
        <input
          type="email"
          placeholder="partnerships@suvinternationals.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1 w-full px-5 py-3.5 rounded-lg border-none text-[0.95rem] font-sans focus:outline-none focus:ring-2 focus:ring-white/50"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full md:w-auto bg-navy text-white px-8 py-3.5 rounded-lg border-none font-bold text-[0.95rem] cursor-pointer font-sans transition-opacity duration-200 hover:opacity-85 whitespace-nowrap"
        >
          {status === 'loading' ? 'Submitting...' : 'Schedule Consultation →'}
        </button>
      </form>

      {message && (
        <p className="mt-4 text-sm text-white/90" role="status" aria-live="polite">
          {message}
        </p>
      )}
    </section>
  );
};
