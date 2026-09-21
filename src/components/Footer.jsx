import React, { useState, useEffect } from 'react';
import { ArrowUp, Heart, Code2, Globe } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Footer() {
  const [lagosTime, setLagosTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Africa/Lagos',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setLagosTime(now.toLocaleTimeString('en-US', options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-slate-800/80 bg-slate-950 relative text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left Column: Signature & Status */}
          <div className="flex flex-col items-center md:items-start gap-1.5 text-center md:text-left">
            <div className="flex items-center gap-2 text-white font-semibold">
              <span>{PERSONAL_INFO.name}</span>
              <span className="text-slate-600">•</span>
              <span className="text-emerald-400 font-mono text-[11px]">{PERSONAL_INFO.title}</span>
            </div>
            <p className="text-slate-500">
              Designed for performance, accessibility, and high architectural fidelity.
            </p>
          </div>

          {/* Center Column: Live Lagos Local Time */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-400 font-mono text-[11px]">
            <Globe size={13} className="text-emerald-400 animate-pulse" />
            <span>Lagos, NG (WAT): {lagosTime || 'Loading...'}</span>
          </div>

          {/* Right Column: Built with & Scroll to Top */}
          <div className="flex items-center gap-4">
            <span className="text-slate-500 hidden sm:inline font-mono text-[11px]">
              React 19 • Tailwind CSS • Vite
            </span>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700 transition-all hover:scale-105"
              aria-label="Back to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        {/* Sub-footer copyright */}
        <div className="mt-8 pt-6 border-t border-slate-900 text-center text-slate-600 text-[11px] font-mono">
          &copy; {new Date().getFullYear()} Yetunde Olasehinde. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
