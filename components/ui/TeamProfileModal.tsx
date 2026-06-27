'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  imageClass?: string;
  imageOffset?: string;
  imageScale?: string;
  tagline?: string;
  highlights: string[];
  expertise?: { label: string; items: string[] }[];
  quote?: string;
  linkedin?: string;
}

interface TeamProfileModalProps {
  member: TeamMember | null;
  onClose: () => void;
}

export const TeamProfileModal: React.FC<TeamProfileModalProps> = ({ member, onClose }) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (member) {
      document.addEventListener('keydown', onKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [member, onClose]);

  if (!member) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[300] flex items-center justify-center px-4"
      style={{ animation: 'overlayFadeIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) both' }}
      onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div
        ref={modalRef}
        className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl"
        style={{
          background: '#ffffff',
          border: '1px solid rgba(0,0,0,0.08)',
          animation: 'modalSlideUp 0.45s cubic-bezier(0.16, 1, 0.3, 1) both',
          scrollbarWidth: 'thin',
          scrollbarColor: 'rgba(6,182,212,0.3) transparent',
          boxShadow: '0 32px 80px -12px rgba(0,0,0,0.22), 0 0 0 1px rgba(0,0,0,0.05)',
        }}
      >
        {/* Top teal line accent */}
        <div
          className="absolute top-0 left-0 right-0 h-[3px] rounded-t-3xl"
          style={{ background: 'linear-gradient(90deg, transparent 0%, #06b6d4 40%, #3b82f6 70%, transparent 100%)' }}
        />

        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-5 right-5 z-20 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
          style={{
            background: 'rgba(0,0,0,0.06)',
            border: '1px solid rgba(0,0,0,0.10)',
          }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 1L13 13M13 1L1 13" stroke="rgba(0,0,0,0.5)" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>

        {/* ─── Header: Image + Name + Role ─── */}
        <div className="relative flex flex-col sm:flex-row items-center sm:items-end gap-6 px-8 pt-10 pb-8">
          {/* Profile image */}
          <div
            className="relative flex-shrink-0"
            style={{ animation: 'imagePopIn 0.55s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both' }}
          >
            {/* Ring glow */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: 'conic-gradient(from 180deg, #06b6d4, #3b82f6, #06b6d4)',
                padding: '2px',
                borderRadius: '50%',
                filter: 'blur(1px)',
                opacity: 0.7,
              }}
            />
            <div
              className="relative rounded-full overflow-hidden"
              style={{
                width: 130,
                height: 130,
                border: '2.5px solid rgba(6,182,212,0.5)',
                boxShadow: '0 0 30px rgba(6,182,212,0.18), 0 4px 20px rgba(0,0,0,0.10)',
              }}
            >
              <Image
                src={member.image}
                alt={member.name}
                width={130}
                height={130}
                className="w-full h-full object-cover object-top"
                unoptimized
              />
            </div>
          </div>

          {/* Name + role + tagline */}
          <div
            className="text-center sm:text-left"
            style={{ animation: 'fadeSlideRight 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.15s both' }}
          >
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
              <span
                className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
                style={{
                  background: 'rgba(6,182,212,0.10)',
                  color: '#0891b2',
                  border: '1px solid rgba(6,182,212,0.25)',
                }}
              >
                Suvicorp
              </span>
            </div>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-1 leading-tight" style={{ color: '#0a1628' }}>
              {member.name}
            </h2>
            <p className="text-sm font-semibold uppercase tracking-wide" style={{ color: '#06b6d4' }}>
              {member.role}
            </p>
            {member.tagline && (
              <p className="text-sm mt-2 leading-relaxed max-w-[340px]" style={{ color: '#6b7280' }}>
                {member.tagline}
              </p>
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="mx-8 h-px" style={{ background: 'rgba(0,0,0,0.07)' }} />

        {/* ─── Body ─── */}
        <div className="px-8 py-7 space-y-6">

          {/* Highlights */}
          <div style={{ animation: 'fadeSlideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both' }}>
            <h3 className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#9ca3af' }}>About</h3>
            <ul className="space-y-3">
              {member.highlights.map((point, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span
                    className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full"
                    style={{ background: '#06b6d4', boxShadow: '0 0 6px rgba(6,182,212,0.5)' }}
                  />
                  <span className="text-sm leading-relaxed" style={{ color: '#374151' }}>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Expertise areas */}
          {member.expertise && member.expertise.length > 0 && (
            <div style={{ animation: 'fadeSlideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.28s both' }}>
              <h3 className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#9ca3af' }}>Key Expertise</h3>
              <div className="space-y-4">
                {member.expertise.map((area, i) => (
                  <div key={i}>
                    <p
                      className="text-sm font-semibold mb-2"
                      style={{ color: '#0891b2' }}
                    >
                      {area.label}
                    </p>
                    <ul className="space-y-2">
                      {area.items.map((item, j) => (
                        <li key={j} className="flex gap-3 items-start">
                          <svg className="mt-0.5 flex-shrink-0 w-3.5 h-3.5 opacity-50" fill="none" stroke="#06b6d4" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                          <span className="text-sm leading-relaxed" style={{ color: '#4b5563' }}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Quote */}
          {member.quote && (
            <div
              className="rounded-2xl p-5 relative overflow-hidden"
              style={{
                background: 'rgba(6,182,212,0.05)',
                border: '1px solid rgba(6,182,212,0.15)',
                animation: 'fadeSlideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.35s both',
              }}
            >
              <div
                className="absolute top-3 left-4 text-5xl leading-none font-serif"
                style={{ color: 'rgba(6,182,212,0.2)' }}
              >
                &ldquo;
              </div>
              <p className="text-sm leading-relaxed italic pl-6 pr-2 pt-2" style={{ color: '#374151' }}>
                {member.quote}
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div
          className="px-8 py-5 flex items-center justify-between"
          style={{
            borderTop: '1px solid rgba(0,0,0,0.06)',
            background: 'rgba(0,0,0,0.02)',
            animation: 'fadeSlideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.4s both',
          }}
        >
          <span className="text-xs" style={{ color: '#9ca3af' }}>Suvicorp · Team</span>
          <button
            onClick={onClose}
            className="text-xs font-semibold uppercase tracking-widest px-5 py-2 rounded-full transition-all duration-200 hover:scale-105"
            style={{
              background: 'rgba(6,182,212,0.10)',
              color: '#0891b2',
              border: '1px solid rgba(6,182,212,0.25)',
            }}
          >
            Close
          </button>
        </div>
      </div>

      <style jsx global>{`
        @keyframes overlayFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes modalSlideUp {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes imagePopIn {
          from {
            opacity: 0;
            transform: scale(0.7) rotate(-5deg);
          }
          to {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }
        @keyframes fadeSlideRight {
          from {
            opacity: 0;
            transform: translateX(-18px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(14px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};
