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
    <section
      id="cta"
      className="relative py-16 md:py-20 px-[5%] text-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0a1628 0%, #0d1f3c 50%, #0a1628 100%)' }}
    >
      {/* Subtle decorative glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px]"
          style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(6,182,212,0.12) 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-0 left-1/4 w-[400px] h-[200px]"
          style={{ background: 'radial-gradient(ellipse at 30% 100%, rgba(59,130,246,0.08) 0%, transparent 65%)' }}
        />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>
      <div className="relative z-10">
      <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-white mb-4">
        Start the Conversation
      </h2>
      <p className="text-white/85 text-lg max-w-[500px] mx-auto mb-8">
        Ready to explore how a strategic alliance with Suvicorp can transform your firm&apos;s capabilities? Schedule a confidential consultation.
      </p>
      
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-[480px] mx-auto justify-center">
        <input
          type="email"
          placeholder="partnerships@suvicorp.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1 w-full px-5 py-3.5 rounded-lg text-white text-[0.95rem] font-sans focus:outline-none focus:ring-2 focus:ring-cyan-400/50 backdrop-blur-sm"
          style={{
            background: 'rgba(255,255,255,0.07)',
            border: '1px solid rgba(255,255,255,0.18)',
          }}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full md:w-auto text-white px-8 py-3.5 rounded-lg border-none font-bold text-[0.95rem] cursor-pointer font-sans transition-all duration-200 hover:opacity-90 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] whitespace-nowrap"
          style={{ background: 'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 50%, #0284c7 100%)' }}
        >
          {status === 'loading' ? 'Submitting...' : 'Schedule Consultation →'}
        </button>
      </form>

      {message && (
        <p className="mt-4 text-sm text-white/90" role="status" aria-live="polite">
          {message}
        </p>
      )}
      </div>
    </section>
  );
};
