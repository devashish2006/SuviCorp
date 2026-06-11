'use client';

import React, { useState, useEffect, useRef } from 'react';

interface PartnerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PartnerModal: React.FC<PartnerModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryDetails: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [visible, setVisible] = useState(false);
  const [animating, setAnimating] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  /* ── Mount / unmount with animation ── */
  useEffect(() => {
    if (isOpen) {
      setVisible(true);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setAnimating(true));
      });
    } else {
      setAnimating(false);
      const t = setTimeout(() => setVisible(false), 320);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  /* ── Escape key ── */
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  /* ── Body scroll lock ── */
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!visible) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === overlayRef.current) onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error('Submission failed');
      setStatus('success');
      setTimeout(() => {
        setStatus('idle');
        setFormData({ name: '', email: '', phone: '', inquiryDetails: '' });
        onClose();
      }, 3000);
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    /* ── Overlay ── */
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-[200] flex items-center justify-center px-4"
      style={{
        background: animating ? 'rgba(0,0,0,0.65)' : 'rgba(0,0,0,0)',
        backdropFilter: animating ? 'blur(8px)' : 'blur(0px)',
        transition: 'background 0.32s ease, backdrop-filter 0.32s ease',
      }}
    >
      {/* ── Modal Panel ── */}
      <div
        style={{
          opacity: animating ? 1 : 0,
          transform: animating ? 'scale(1) translateY(0)' : 'scale(0.94) translateY(24px)',
          transition: 'opacity 0.32s cubic-bezier(0.16,1,0.3,1), transform 0.32s cubic-bezier(0.16,1,0.3,1)',
          background: 'linear-gradient(145deg, #0a1628 0%, #0d1f3c 55%, #091520 100%)',
          border: '1px solid rgba(6,182,212,0.22)',
          boxShadow: '0 32px 80px -16px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04) inset, 0 1px 0 rgba(255,255,255,0.07) inset',
        }}
        className="relative w-full max-w-lg rounded-2xl overflow-hidden"
      >
        {/* Top accent gradient bar */}
        <div
          className="absolute top-0 left-0 right-0 h-[2px]"
          style={{ background: 'linear-gradient(90deg, #06b6d4 0%, #3b82f6 50%, #8b5cf6 100%)' }}
        />

        {/* Radial glow top-left */}
        <div
          className="absolute top-0 left-0 w-[320px] h-[320px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 0% 0%, rgba(6,182,212,0.1) 0%, transparent 65%)' }}
        />

        {/* Content */}
        <div className="relative z-10 p-8 md:p-10">

          {/* ── Close Button ── */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center rounded-full transition-all duration-200 group"
            style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.background = 'rgba(239,68,68,0.18)';
              (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(239,68,68,0.4)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.06)';
              (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.1)';
            }}
          >
            <svg className="w-4 h-4 text-white/50 group-hover:text-red-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* ── Header ── */}
          <div className="mb-7">
            <div className="flex items-center gap-2 mb-3">
              <span
                className="text-[0.7rem] font-semibold tracking-[1.5px] uppercase px-3 py-1 rounded-full"
                style={{ background: 'rgba(6,182,212,0.12)', color: '#06b6d4', border: '1px solid rgba(6,182,212,0.25)' }}
              >
                Get In Touch
              </span>
            </div>
            <h2 className="font-playfair text-3xl font-bold text-white leading-tight">
              Reach <em className="italic font-light opacity-90">Us</em>
            </h2>
            <p className="text-white/50 text-sm mt-2 leading-relaxed">
              Fill in your details and our team will connect with you shortly.
            </p>
          </div>

          {/* ── Success State ── */}
          {status === 'success' ? (
            <div
              className="flex flex-col items-center justify-center py-10 gap-4 text-center"
              style={{ animation: 'fadeUp 0.4s ease both' }}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(6,182,212,0.15)', border: '1px solid rgba(6,182,212,0.35)' }}
              >
                <svg className="w-8 h-8 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="text-white font-semibold text-lg">Message Sent!</p>
                <p className="text-white/50 text-sm mt-1">We&apos;ll be in touch very soon.</p>
              </div>
            </div>
          ) : (
            /* ── Form ── */
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-white/60 text-xs font-semibold uppercase tracking-wider mb-2">Full Name</label>
                <input
                  required
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full rounded-lg py-3 px-4 text-white text-sm placeholder-white/20 outline-none transition-all duration-200"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}
                  onFocus={e => {
                    e.currentTarget.style.borderColor = 'rgba(6,182,212,0.6)';
                    e.currentTarget.style.background = 'rgba(6,182,212,0.05)';
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(6,182,212,0.08)';
                  }}
                  onBlur={e => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                />
              </div>

              {/* Email + Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/60 text-xs font-semibold uppercase tracking-wider mb-2">Email</label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full rounded-lg py-3 px-4 text-white text-sm placeholder-white/20 outline-none transition-all duration-200"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)' }}
                    onFocus={e => {
                      e.currentTarget.style.borderColor = 'rgba(6,182,212,0.6)';
                      e.currentTarget.style.background = 'rgba(6,182,212,0.05)';
                      e.currentTarget.style.boxShadow = '0 0 0 3px rgba(6,182,212,0.08)';
                    }}
                    onBlur={e => {
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                      e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  />
                </div>
                <div>
                  <label className="block text-white/60 text-xs font-semibold uppercase tracking-wider mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 123-4567"
                    className="w-full rounded-lg py-3 px-4 text-white text-sm placeholder-white/20 outline-none transition-all duration-200"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)' }}
                    onFocus={e => {
                      e.currentTarget.style.borderColor = 'rgba(6,182,212,0.6)';
                      e.currentTarget.style.background = 'rgba(6,182,212,0.05)';
                      e.currentTarget.style.boxShadow = '0 0 0 3px rgba(6,182,212,0.08)';
                    }}
                    onBlur={e => {
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                      e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  />
                </div>
              </div>

              {/* Inquiry */}
              <div>
                <label className="block text-white/60 text-xs font-semibold uppercase tracking-wider mb-2">How can we help?</label>
                <textarea
                  required
                  name="inquiryDetails"
                  value={formData.inquiryDetails}
                  onChange={handleChange}
                  rows={4}
                  placeholder="I am interested in..."
                  className="w-full rounded-lg py-3 px-4 text-white text-sm placeholder-white/20 outline-none transition-all duration-200 resize-none"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)' }}
                  onFocus={e => {
                    e.currentTarget.style.borderColor = 'rgba(6,182,212,0.6)';
                    e.currentTarget.style.background = 'rgba(6,182,212,0.05)';
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(6,182,212,0.08)';
                  }}
                  onBlur={e => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                />
              </div>

              {status === 'error' && (
                <p className="text-red-400 text-sm text-center">Something went wrong. Please try again.</p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-3.5 rounded-xl text-white text-sm font-semibold tracking-wide transition-all duration-200 disabled:opacity-50 mt-2"
                style={{
                  background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
                  boxShadow: '0 8px 24px -6px rgba(6,182,212,0.45)',
                }}
                onMouseEnter={e => {
                  if (status !== 'submitting') {
                    (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-1px)';
                    (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 12px 32px -6px rgba(6,182,212,0.55)';
                  }
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 8px 24px -6px rgba(6,182,212,0.45)';
                }}
              >
                {status === 'submitting' ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                    Sending…
                  </span>
                ) : 'Send Message →'}
              </button>

              {/* Cancel / Back */}
              <button
                type="button"
                onClick={onClose}
                className="w-full py-3 rounded-xl text-sm font-medium tracking-wide transition-all duration-200 flex items-center justify-center gap-2"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: 'rgba(255,255,255,0.45)',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.08)';
                  (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.2)';
                  (e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.75)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.04)';
                  (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.1)';
                  (e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.45)';
                }}
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Not interested, go back
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
