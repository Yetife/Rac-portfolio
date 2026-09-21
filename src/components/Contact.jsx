import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Copy, Check, Github, Linkedin, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formStatus, setFormStatus] = useState({ state: 'idle', message: '' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({ state: 'error', message: 'Please fill in all required fields.' });
      return;
    }

    setFormStatus({ state: 'submitting', message: 'Sending message...' });

    setTimeout(() => {
      setFormStatus({
        state: 'success',
        message: 'Message dispatched! I will get back to you within 24 hours.',
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setFormStatus({ state: 'idle', message: '' }), 6000);
    }, 700);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2">
            <span className="w-6 h-[1px] bg-emerald-400" />
            <span>05 // Initiate Connection</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Build Something Exceptional
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-2">
            Have a project, full-time role, or contract opportunity in mind? Let's connect.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Contact Info & Quick Actions */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div className="p-6 rounded-2xl glass-card border border-slate-800">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-2 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Current Availability</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Open for Senior Frontend Roles
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed font-normal">
                  Available for full-time opportunities, high-impact contract work, or technical advisory for venture-backed teams.
                </p>
              </div>

              {/* Direct Info Cards with 1-click copy */}
              <div className="space-y-3">
                {/* Email card */}
                <div className="p-4 rounded-xl glass-card border border-slate-800 flex items-center justify-between group hover:border-slate-700 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-900 text-emerald-400">
                      <Mail size={18} />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono uppercase text-slate-400">Email</div>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="text-xs sm:text-sm font-mono text-slate-200 hover:text-emerald-400 transition-colors"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                    className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                  </button>
                </div>

                {/* Phone card */}
                <div className="p-4 rounded-xl glass-card border border-slate-800 flex items-center justify-between group hover:border-slate-700 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-900 text-cyan-400">
                      <Phone size={18} />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono uppercase text-slate-400">Direct / WhatsApp</div>
                      <a
                        href={`tel:${PERSONAL_INFO.phone}`}
                        className="text-xs sm:text-sm font-mono text-slate-200 hover:text-cyan-400 transition-colors"
                      >
                        {PERSONAL_INFO.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                    className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                    aria-label="Copy phone number"
                  >
                    {copiedPhone ? <Check size={16} className="text-cyan-400" /> : <Copy size={16} />}
                  </button>
                </div>

                {/* Location card */}
                <div className="p-4 rounded-xl glass-card border border-slate-800 flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-900 text-amber-400">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase text-slate-400">Location</div>
                    <div className="text-xs sm:text-sm font-medium text-slate-200">
                      {PERSONAL_INFO.location} — Worldwide Remote Friendly
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl glass-card hover:bg-slate-800 text-xs font-mono text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 transition-all"
              >
                <Github size={15} />
                <span>GitHub</span>
                <ArrowUpRight size={12} className="text-slate-500" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl glass-card hover:bg-slate-800 text-xs font-mono text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 transition-all"
              >
                <Linkedin size={15} />
                <span>LinkedIn</span>
                <ArrowUpRight size={12} className="text-slate-500" />
              </a>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-2">Send a Message</h3>
              <p className="text-xs text-slate-400 mb-6">
                Fill out the details below and I'll respond as soon as possible.
              </p>

              {formStatus.state === 'success' ? (
                <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check size={24} />
                  </div>
                  <h4 className="text-base font-bold text-white">Message Sent Successfully!</h4>
                  <p className="text-xs text-emerald-200 max-w-sm mx-auto">{formStatus.message}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                        Your Name <span className="text-emerald-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Ada Lovelace"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-xs text-slate-200 placeholder-slate-600 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                        Your Email <span className="text-emerald-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="ada@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-xs text-slate-200 placeholder-slate-600 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Senior Frontend Opportunity / Project Collaboration"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-xs text-slate-200 placeholder-slate-600 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                      Message <span className="text-emerald-400">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about the project goals, tech stack, and timeline..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-xs text-slate-200 placeholder-slate-600 transition-colors resize-none"
                    />
                  </div>

                  {formStatus.state === 'error' && (
                    <div className="p-3 rounded-lg bg-rose-950/30 border border-rose-500/30 text-xs text-rose-300">
                      {formStatus.message}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={formStatus.state === 'submitting'}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-xs shadow-lg shadow-emerald-500/20 transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {formStatus.state === 'submitting' ? (
                      <span>Dispatching Message...</span>
                    ) : (
                      <>
                        <span>Transmit Message</span>
                        <Send size={14} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
