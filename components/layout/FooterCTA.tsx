'use client';

import React, { useState } from 'react';

export const FooterCTA: React.FC = () => {
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
        setMessage(data.error ?? 'Something went wrong.');
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
    <div className="mt-8">
      <h4 className="text-white font-semibold text-[1.1rem] mb-2 font-playfair">Start the Conversation</h4>
      <p className="text-white/40 text-[0.8rem] leading-relaxed mb-4 max-w-[280px]">
        Ready to explore a strategic alliance? Schedule a confidential consultation.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-[280px]">
        <input
          type="email"
          placeholder="partnerships@suvicorp.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-2.5 rounded-lg text-white text-[0.85rem] font-sans focus:outline-none focus:ring-1 focus:ring-cyan-400/50 backdrop-blur-sm border transition-colors"
          style={{
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
          }}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full text-white px-4 py-2.5 rounded-lg border-none font-semibold text-[0.85rem] cursor-pointer font-sans transition-all duration-200 hover:opacity-90 bg-gradient-to-r from-[#0ea5e9] to-[#0284c7]"
        >
          {status === 'loading' ? 'Submitting...' : 'Schedule Consultation →'}
        </button>
      </form>

      {message && (
        <p className="mt-3 text-[0.8rem] text-white/90" role="status" aria-live="polite">
          {message}
        </p>
      )}
    </div>
  );
};
