'use client';

import React, { useState } from 'react';
import { Mail, Copy, Check, Send, ArrowUpRight, Terminal } from 'lucide-react';
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
        setStatusFeedback('[200 OK]: Message transmitted directly to chadhakabir77@gmail.com.');
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
    <section id="contact" className="py-24 sm:py-32 relative border-b border-white/10 bg-[#0A0A0C] text-[#F8F8F8] overflow-hidden">
      {/* Subtle Dark Editorial Grid */}
      <div className="absolute inset-0 dark-editorial-grid opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Giant Editorial Heading: LET'S TALK */}
        <div className="mb-14 text-left space-y-3">
          <div className="flex items-center gap-2 font-mono text-xs text-[#8E8E93] font-bold">
            <span className="w-2 h-2 rounded-full bg-white"></span>
            <span>// 05. DIRECT_COMMUNICATION</span>
          </div>
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black font-mono tracking-tight text-white uppercase leading-none">
            LET'S <span className="text-[#8E8E93]">TALK</span>
          </h2>
          <p className="text-base sm:text-lg text-[#8E8E93] max-w-2xl leading-relaxed">
            Open for software engineering internships, quantitative AI/ML roles, and collaborative algorithmic fairness research.
          </p>

          {/* Quick Contact Frosted Pills */}
          <div className="pt-4 flex flex-wrap items-center gap-3 font-mono text-xs">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white border border-white/20 hover:bg-white hover:text-black transition-all font-bold"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{PERSONAL_INFO.email}</span>
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white border border-white/20 hover:bg-white hover:text-black transition-all font-bold"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white border border-white/20 hover:bg-white hover:text-black transition-all font-bold"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Credentials & Status */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-[#121216] border border-white/10 space-y-5 shadow-xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs font-mono font-bold text-white">
                  SYSTEM_STATUS: ONLINE
                </span>
                <span className="flex items-center gap-1.5 text-[11px] font-mono text-white/90">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                  READY
                </span>
              </div>

              <div>
                <span className="text-[10px] font-mono tracking-wider text-[#8E8E93] uppercase block">
                  Direct Email Dispatch
                </span>
                <div className="flex items-center justify-between gap-2 mt-1 p-2.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono">
                  <span className="text-white truncate">{PERSONAL_INFO.email}</span>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1 rounded text-[#8E8E93] hover:text-white transition-colors cursor-pointer shrink-0"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-white" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              <div>
                <span className="text-[10px] font-mono tracking-wider text-[#8E8E93] uppercase block">
                  Location & Availability
                </span>
                <div className="mt-1 text-xs font-mono text-white/90">
                  {PERSONAL_INFO.location}
                </div>
                <div className="text-[11px] font-mono text-[#8E8E93] mt-0.5">
                  Available for On-site (Delhi / Chennai) & Global Remote
                </div>
              </div>

              <div className="pt-2 border-t border-white/10">
                <div className="text-xs font-mono text-[#8E8E93] space-y-1">
                  <p>&gt; Academic Institution: SRMIST Kattankulathur</p>
                  <p>&gt; Degree: B.Tech CSE (AI/ML) — 2nd Year</p>
                  <p>&gt; Research: Shodh Sagar / JRPS (DOI: 10.36676/jrps.v15.i3.1425)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Web3Forms Integrated Form with Sleek Dark Glass Inputs */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#121216] border border-white/10 shadow-2xl space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-white" />
                  <span className="font-mono text-xs font-bold text-white">
                    TRANSMIT_DISPATCH_PACKET
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#8E8E93]">
                  WEB3FORMS_DIRECT
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-medium text-[#C4C4C8] block">
                      YOUR_NAME:
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Dr. Alex Mercer / Hiring Lead"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/30 text-xs font-mono focus:border-white focus:outline-none focus:ring-1 focus:ring-white/30 transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-medium text-[#C4C4C8] block">
                      RETURN_EMAIL:
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="name@organization.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/30 text-xs font-mono focus:border-white focus:outline-none focus:ring-1 focus:ring-white/30 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-medium text-[#C4C4C8] block">
                    MESSAGE_PAYLOAD:
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Discuss project requirements, engineering roles, quantitative systems, or research collaborations..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/30 text-xs font-mono focus:border-white focus:outline-none focus:ring-1 focus:ring-white/30 transition-all resize-none"
                  ></textarea>
                </div>

                {/* Status Feedback Notification */}
                {statusFeedback && (
                  <div
                    className={`p-3 rounded-xl font-mono text-xs ${
                      submitStatus === 'success'
                        ? 'bg-white/10 text-white border border-white/30'
                        : 'bg-white/10 text-white/90 border border-white/30'
                    }`}
                  >
                    {statusFeedback}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-full bg-white hover:bg-white/90 text-black font-mono text-xs font-bold transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? 'TRANSMITTING...' : 'DISPATCH MESSAGE'}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
