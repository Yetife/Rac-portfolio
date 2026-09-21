import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Download, Terminal, Sparkles, MapPin, CheckCircle2, ChevronRight } from 'lucide-react';
import { PERSONAL_INFO, TICKER_COMMANDS } from '../data/portfolioData';

export default function Hero() {
  const [tickerIndex, setTickerIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentLine = TICKER_COMMANDS[tickerIndex];
    let timeout;

    if (!isDeleting && displayedText.length < currentLine.length) {
      timeout = setTimeout(() => {
        setDisplayedText(currentLine.slice(0, displayedText.length + 1));
      }, 30);
    } else if (!isDeleting && displayedText.length === currentLine.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2400);
    } else if (isDeleting && displayedText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayedText(currentLine.slice(0, displayedText.length - 1));
      }, 15);
    } else if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false);
      setTickerIndex((prev) => (prev + 1) % TICKER_COMMANDS.length);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, tickerIndex]);

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[250px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Authoritative Intro & CTA */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Senior Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs text-slate-300 mb-6 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-emerald-400 font-medium">Available</span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-300">Open for Senior Frontend Roles (Remote / Hybrid)</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
              Engineering <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">fast, resilient</span> web interfaces.
            </h1>

            {/* Sub-headline positioning */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl mb-8 font-normal">
              Hi, I'm <strong className="text-white font-semibold">{PERSONAL_INFO.name}</strong> ({PERSONAL_INFO.preferredName}). 
              With <strong className="text-emerald-400 font-semibold">4+ years</strong> in production frontend engineering, I specialize in architecting high-converting checkout flows, streaming AI shopping assistants, and fault-tolerant fintech loan applications using <strong>React, Next.js, and TypeScript</strong>.
            </p>

            {/* Interactive Developer Terminal Widget */}
            <div className="w-full max-w-xl mb-8 rounded-xl bg-slate-900/95 border border-slate-800 shadow-xl overflow-hidden font-mono text-xs">
              <div className="flex items-center justify-between px-4 py-2.5 bg-slate-950/80 border-b border-slate-800/80">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-[11px] text-slate-400">yetife@terminal: ~/portfolio</span>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-sans">
                  <Terminal size={12} />
                  <span>zsh</span>
                </div>
              </div>
              <div className="px-4 py-3 flex items-center gap-2 text-slate-300 min-h-[44px]">
                <span className="text-emerald-400 select-none font-bold">➜</span>
                <span className="text-cyan-400 select-none">~</span>
                <span className="text-slate-100">{displayedText}</span>
                <span className="inline-block w-2 h-4 bg-emerald-400 animate-pulse" />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-semibold text-sm shadow-lg shadow-emerald-500/25 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore Selected Work</span>
                <ArrowUpRight size={16} />
              </a>

              <a
                href="/resume.pdf"
                download="Yetunde_Olasehinde_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-200 text-sm font-medium transition-all duration-200 hover:scale-[1.02]"
              >
                <Download size={15} className="text-emerald-400" />
                <span>Download Résumé</span>
              </a>

              <div className="flex items-center gap-2 text-xs text-slate-400 pl-1">
                <MapPin size={14} className="text-emerald-400" />
                <span>Lagos, Nigeria (UTC+1)</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Fidelity Profile Showcase */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Outer Decorative Gradient Border */}
              <div className="relative p-1 rounded-3xl bg-gradient-to-b from-emerald-500/40 via-cyan-500/20 to-slate-800/40 shadow-2xl shadow-emerald-950/40">
                <div className="relative rounded-[22px] overflow-hidden bg-slate-950 aspect-[4/5] border border-slate-800">
                  <img
                    src={PERSONAL_INFO.avatar}
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                  {/* Floating Senior Badge on Portrait */}
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl glass-card border border-slate-700/80 text-left shadow-lg">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-mono font-medium text-emerald-400 flex items-center gap-1.5">
                        <CheckCircle2 size={13} className="text-emerald-400" />
                        Verified Senior Track Record
                      </span>
                      <span className="text-[11px] font-mono text-slate-400">Production</span>
                    </div>
                    <p className="text-xs text-slate-200 font-medium">
                      Next.js • React • TypeScript • State Architecture
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative mini pill behind image */}
              <div className="absolute -top-3 -right-3 px-3 py-1 rounded-full bg-slate-900 border border-emerald-500/30 text-[11px] font-mono text-emerald-300 shadow-md">
                ⚡ Sub-2s LCP Focused
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
