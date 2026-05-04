'use client';

import React, { useState } from 'react';

interface PartnerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PartnerModal: React.FC<PartnerModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryDetails: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
      <div className="bg-navy border border-white/10 p-8 rounded-xl w-full max-w-lg relative shadow-2xl">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors text-2xl"
          aria-label="Close modal"
        >
          &times;
        </button>
        
        <h2 className="text-3xl font-playfair font-bold text-white mb-2">Partner With Us</h2>
        <p className="text-white/60 mb-6 text-sm">Fill out the details below and our team will get back to you shortly.</p>
        
        {status === 'success' ? (
          <div className="bg-teal/20 text-teal border border-teal/30 p-4 rounded-md text-center">
            Thank you! Your inquiry has been sent successfully.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-white/80 text-sm mb-1">Name</label>
              <input 
                required 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-md py-2 px-3 text-white placeholder-white/30 focus:outline-none focus:border-teal transition-colors"
                placeholder="John Doe"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-white/80 text-sm mb-1">Email</label>
                <input 
                  required 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-md py-2 px-3 text-white placeholder-white/30 focus:outline-none focus:border-teal transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-white/80 text-sm mb-1">Phone</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-md py-2 px-3 text-white placeholder-white/30 focus:outline-none focus:border-teal transition-colors"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-white/80 text-sm mb-1">What specifically would you like to inquire about?</label>
              <textarea 
                required 
                name="inquiryDetails"
                value={formData.inquiryDetails}
                onChange={handleChange}
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-md py-2 px-3 text-white placeholder-white/30 focus:outline-none focus:border-teal transition-colors resize-none"
                placeholder="I am interested in..."
              />
            </div>
            
            {status === 'error' && (
              <p className="text-red-400 text-sm text-center">Something went wrong. Please try again.</p>
            )}
            
            <button 
              type="submit" 
              disabled={status === 'submitting'}
              className="w-full bg-teal text-white py-3 rounded-md font-semibold transition-colors duration-200 hover:bg-teal/90 disabled:opacity-50 mt-4"
            >
              {status === 'submitting' ? 'Sending...' : 'Submit Inquiry'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
