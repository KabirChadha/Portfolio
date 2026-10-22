'use client';

import React, { useState } from 'react';
import { Mail, Copy, Check, Send, Terminal, AlertTriangle, CheckCircle2, ExternalLink, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusFeedback, setStatusFeedback] = useState<string | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setSubmitStatus('error');
      setStatusFeedback('[ERROR 400]: Incomplete parameters. Name, email, and message body are required.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setStatusFeedback(null);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: '6fc77c28-3b97-46a5-beb6-8d2c0cfaf681',
          name: formState.name,
          email: formState.email,
          message: formState.message,
          subject: `New Portfolio Inquiry from ${formState.name}`,
        }),
      });

      const data = await response.json();

      if (response.ok && (data.success || response.status === 200)) {
        setSubmitStatus('success');
        setStatusFeedback('[200 OK]: Packet delivered directly to chadhakabir77@gmail.com. Response latency acknowledged.');
        setFormState({ name: '', email: '', message: '' });
      } else {
        throw new Error(data.message || 'API rejected transmission');
      }
    } catch (err) {
      console.error('Web3Forms dispatch error:', err);
      setSubmitStatus('error');
      setStatusFeedback('[ERROR 500]: Dispatch failed. Fallback: email directly at chadhakabir77@gmail.com.');
    } finally {
      setIsSubmitting(false);
    }
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
                <div>DISPATCH_API: <span className="text-[#ff6b00]">WEB3FORMS_ENCRYPTED</span></div>
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
                  POST https://api.web3forms.com/submit
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

                {/* Status Feedback Card */}
                {statusFeedback && (
                  <div
                    className={`p-3.5 rounded-lg border font-mono text-xs space-y-2 ${
                      submitStatus === 'success'
                        ? 'bg-[#051c0f] border-[#10b981]/50 text-[#10b981]'
                        : 'bg-[#1f0a0a] border-[#ef4444]/50 text-[#f87171]'
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      {submitStatus === 'success' ? (
                        <CheckCircle2 className="w-4 h-4 text-[#10b981] shrink-0 mt-0.5" />
                      ) : (
                        <AlertTriangle className="w-4 h-4 text-[#ef4444] shrink-0 mt-0.5" />
                      )}
                      <span className="leading-relaxed">{statusFeedback}</span>
                    </div>

                    {submitStatus === 'error' && (
                      <div className="pt-2 border-t border-[#ef4444]/20 flex flex-wrap items-center gap-2">
                        <a
                          href="https://mail.google.com/mail/?view=cm&fs=1&to=chadhakabir77@gmail.com"
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#ef4444]/20 hover:bg-[#ef4444] text-[#f4f4f6] hover:text-black border border-[#ef4444]/50 text-xs font-bold transition-all"
                        >
                          <span>Open in Gmail Web</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                        <a
                          href="mailto:chadhakabir77@gmail.com"
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded bg-[#10121d] hover:bg-[#202538] text-[#d4d4d8] text-xs transition-colors"
                        >
                          <Mail className="w-3 h-3" />
                          <span>Mail App</span>
                        </a>
                      </div>
                    )}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-lg bg-[#ff6b00] hover:bg-[#ff7a00] text-black font-mono font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(255,107,0,0.35)] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? '> DISPATCHING_PACKET...' : 'DISPATCH MESSAGE PACKET'}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
