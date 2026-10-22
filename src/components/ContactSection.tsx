'use client';

import React, { useState } from 'react';
import { Mail, Copy, Check, Send, Terminal, Sparkles, FileText, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setStatusMessage('ERROR: Please complete all terminal parameters before dispatching.');
      return;
    }

    setIsSubmitting(true);
    setStatusMessage('TRANSMITTING: Establishing encrypted socket connection...');

    setTimeout(() => {
      setIsSubmitting(false);
      setStatusMessage(
        `SUCCESS: Message packet acknowledged from ${formState.email}. Opening email client fallback...`
      );
      // Fallback mailto
      const subject = encodeURIComponent(`Portfolio Inquiry from ${formState.name}`);
      const body = encodeURIComponent(formState.message + `\n\nContact Email: ${formState.email}`);
      window.open(`mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`, '_blank');
      setFormState({ name: '', email: '', message: '' });
    }, 900);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative border-b border-[#161824] bg-[#07080e]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-10 text-left">
          <div className="flex items-center gap-2 font-mono text-xs text-[#ff6b00]">
            <Terminal className="w-3.5 h-3.5" />
            <span>// 06. COMMUNICATION_CHANNELS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-mono text-[#f4f4f6] tracking-tight">
            ESTABLISH CONNECTION
          </h2>
          <p className="text-sm sm:text-base text-[#9ba1b6] max-w-3xl">
            Open for software engineering opportunities, quantitative AI roles, and collaborative algorithmic fairness research.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Direct Credentials & Status */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-xl bg-[#090a12] border border-[#1b1f30] space-y-5">
              <div className="flex items-center justify-between border-b border-[#161928] pb-3">
                <span className="text-xs font-mono font-bold text-[#ff6b00]">
                  SYSTEM_STATUS: ONLINE
                </span>
                <span className="flex items-center gap-1.5 text-[11px] font-mono text-[#10b981]">
                  <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse"></span>
                  READY
                </span>
              </div>

              <div>
                <span className="text-[10px] font-mono tracking-wider text-[#71768c] uppercase block">
                  Direct Email Protocol
                </span>
                <div className="mt-1 flex items-center justify-between p-3 rounded-lg bg-[#050508] border border-[#191d2e]">
                  <span className="text-xs font-mono text-[#f4f4f6] font-semibold truncate pr-2">
                    {PERSONAL_INFO.email}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="flex items-center gap-1 px-2.5 py-1 rounded bg-[#121422] hover:bg-[#ff6b00] text-[#ff6b00] hover:text-black font-mono text-[11px] font-bold border border-[#ff6b00]/30 transition-all shrink-0 cursor-pointer"
                  >
                    {copiedEmail ? <Check className="w-3 h-3 text-[#10b981]" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedEmail ? 'COPIED' : 'COPY'}</span>
                  </button>
                </div>
              </div>

              {/* Social Channels */}
              <div className="space-y-2">
                <span className="text-[10px] font-mono tracking-wider text-[#71768c] uppercase block">
                  Network Endpoints
                </span>
                <div className="space-y-2">
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-lg bg-[#050508] border border-[#191d2e] hover:border-[#ff6b00] text-xs font-mono text-[#d4d4d8] hover:text-[#ff6b00] transition-all group"
                  >
                    <div className="flex items-center gap-2.5">
                      <GithubIcon className="w-4 h-4 text-[#ff6b00]" />
                      <div>
                        <div className="text-[10px] text-[#71768c]">GITHUB</div>
                        <div className="text-xs text-[#f4f4f6] group-hover:text-[#ff6b00]">github.com/KabirChadha</div>
                      </div>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#71768c] group-hover:text-[#ff6b00]" />
                  </a>

                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-lg bg-[#050508] border border-[#191d2e] hover:border-[#ff6b00] text-xs font-mono text-[#d4d4d8] hover:text-[#ff6b00] transition-all group"
                  >
                    <div className="flex items-center gap-2.5">
                      <LinkedinIcon className="w-4 h-4 text-[#ff6b00]" />
                      <div>
                        <div className="text-[10px] text-[#71768c]">LINKEDIN</div>
                        <div className="text-xs text-[#f4f4f6] group-hover:text-[#ff6b00]">linkedin.com/in/kabir-singh-chadha</div>
                      </div>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#71768c] group-hover:text-[#ff6b00]" />
                  </a>
                </div>
              </div>

              {/* Location telemetry */}
              <div className="p-3 rounded-lg bg-[#080910] border border-[#171a2a] text-xs font-mono text-[#71768c] space-y-1">
                <div>LOCATION: <span className="text-[#d4d4d8]">{PERSONAL_INFO.location}</span></div>
                <div>TIMEZONE: <span className="text-[#d4d4d8]">UTC+05:30 (IST)</span></div>
                <div>RESPONSE_TIME: <span className="text-[#10b981]">&lt; 12 Hours Guaranteed</span></div>
              </div>
            </div>
          </div>

          {/* Right Column: Terminal Command Message Dispatcher */}
          <div className="lg:col-span-7">
            <div className="rounded-xl bg-[#090a12] border border-[#1b1f30] overflow-hidden shadow-xl">
              <div className="flex items-center justify-between px-5 py-3 bg-[#0d0f1a] border-b border-[#181b2a] font-mono text-xs">
                <span className="text-[#ff6b00] font-bold flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5" />
                  POST /api/v1/dispatch_inquiry
                </span>
                <span className="text-[#71768c] text-[11px]">
                  CONTENT-TYPE: JSON
                </span>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div>
                  <label className="block text-[11px] font-mono text-[#ff7a00] uppercase mb-1">
                    payload.sender_name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="e.g. Alex Rivera, Senior Engineering Manager"
                    className="w-full px-3.5 py-2.5 bg-[#050508] border border-[#1c2032] focus:border-[#ff6b00] rounded text-xs font-mono text-[#f4f4f6] outline-none placeholder:text-[#3b4058]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-[#ff7a00] uppercase mb-1">
                    payload.return_address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="e.g. alex.rivera@technology.com"
                    className="w-full px-3.5 py-2.5 bg-[#050508] border border-[#1c2032] focus:border-[#ff6b00] rounded text-xs font-mono text-[#f4f4f6] outline-none placeholder:text-[#3b4058]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-[#ff7a00] uppercase mb-1">
                    payload.message_body *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Provide role details, research discussion, or system engineering inquiry..."
                    className="w-full px-3.5 py-2.5 bg-[#050508] border border-[#1c2032] focus:border-[#ff6b00] rounded text-xs font-mono text-[#f4f4f6] outline-none placeholder:text-[#3b4058] resize-none"
                  ></textarea>
                </div>

                {statusMessage && (
                  <div className="p-3 rounded bg-[#06070c] border border-[#ff6b00]/40 font-mono text-xs text-[#10b981]">
                    {statusMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-lg bg-[#ff6b00] hover:bg-[#ff7a00] text-black font-mono font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(255,107,0,0.35)] cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'DISPATCHING PACKET...' : 'DISPATCH MESSAGE PACKET'}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
