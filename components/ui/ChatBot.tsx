"use client";

import React, { useState, useRef, useEffect } from 'react';

type Message = {
  role: 'user' | 'model';
  text: string;
};

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Hi there! I am the SUVI AI assistant. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => setIsOpen(!isOpen);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    const history = messages.map(msg => ({
      role: msg.role === 'model' ? 'model' : 'user',
      parts: [{ text: msg.text }]
    }));

    const newMessages: Message[] = [...messages, { role: 'user', text: userMessage }];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage, history })
      });

      const data = await response.json();

      if (response.ok) {
        setMessages([...newMessages, { role: 'model', text: data.text }]);
      } else {
        setMessages([...newMessages, { role: 'model', text: data.error || "Sorry, I'm having trouble connecting right now." }]);
      }
    } catch (error) {
      console.error('Chat error:', error);
      setMessages([...newMessages, { role: 'model', text: "An error occurred. Please try again." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div
          className="flex flex-col w-80 sm:w-96 h-[500px] max-h-[80vh] rounded-2xl shadow-2xl overflow-hidden"
          style={{
            background: 'linear-gradient(145deg, #0a1628 0%, #0d1f3c 100%)',
            border: '1px solid rgba(6,182,212,0.25)',
            boxShadow: '0 24px 64px rgba(0,0,0,0.5), 0 0 0 1px rgba(6,182,212,0.1)',
          }}
        >
          {/* Header */}
          <div
            className="flex justify-between items-center px-5 py-4"
            style={{
              background: 'linear-gradient(135deg, #0a1628 0%, #0d1f3c 100%)',
              borderBottom: '1px solid rgba(6,182,212,0.2)',
            }}
          >
            <div className="flex items-center gap-3">
              {/* Pulsing dot */}
              <div className="relative flex items-center justify-center w-7 h-7">
                <div
                  className="absolute w-full h-full rounded-full animate-ping"
                  style={{ background: 'rgba(6,182,212,0.25)', animationDuration: '2s' }}
                />
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ background: '#06b6d4', boxShadow: '0 0 8px rgba(6,182,212,0.8)' }}
                />
              </div>
              <div>
                <h3 className="font-semibold text-white text-sm leading-tight">SUVI AI Assistant</h3>
                <p className="text-[10px]" style={{ color: '#06b6d4' }}>Online · Ready to help</p>
              </div>
            </div>
            <button
              onClick={toggleChat}
              className="text-white/40 hover:text-white transition-colors"
              aria-label="Close chat"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Chat Messages */}
          <div
            className="flex-1 overflow-y-auto p-4 space-y-4"
            style={{
              background: 'linear-gradient(180deg, #0a1628 0%, #091422 100%)',
              scrollbarWidth: 'thin',
              scrollbarColor: 'rgba(6,182,212,0.2) transparent',
            }}
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className="max-w-[85%] rounded-2xl p-3"
                  style={
                    msg.role === 'user'
                      ? {
                          background: 'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)',
                          borderBottomRightRadius: '4px',
                          boxShadow: '0 4px 12px rgba(6,182,212,0.3)',
                        }
                      : {
                          background: 'rgba(255,255,255,0.06)',
                          border: '1px solid rgba(6,182,212,0.15)',
                          borderBottomLeftRadius: '4px',
                        }
                  }
                >
                  <p className={`text-sm whitespace-pre-wrap leading-relaxed ${msg.role === 'user' ? 'text-white' : 'text-white/85'}`}>
                    {msg.text}
                  </p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div
                  className="rounded-2xl rounded-bl-sm p-3"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(6,182,212,0.15)',
                  }}
                >
                  <div className="flex space-x-1 items-center h-4">
                    {[0, 0.2, 0.4].map((delay, i) => (
                      <div
                        key={i}
                        className="w-1.5 h-1.5 rounded-full animate-bounce"
                        style={{ background: '#06b6d4', animationDelay: `${delay}s` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form
            onSubmit={sendMessage}
            className="p-3"
            style={{ borderTop: '1px solid rgba(6,182,212,0.15)', background: '#091422' }}
          >
            <div className="flex relative gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 pl-4 pr-3 py-2.5 text-sm text-white rounded-xl focus:outline-none"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(6,182,212,0.2)',
                }}
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="flex items-center justify-center w-9 h-9 rounded-xl transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)',
                  boxShadow: '0 4px 12px rgba(6,182,212,0.35)',
                  flexShrink: 0,
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      ) : (
        <button
          onClick={toggleChat}
          className="flex items-center justify-center w-14 h-14 rounded-full shadow-lg hover:scale-105 transition-all duration-300"
          style={{
            background: 'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)',
            boxShadow: '0 8px 24px rgba(6,182,212,0.4), 0 0 0 2px rgba(6,182,212,0.2)',
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      )}
    </div>
  );
}