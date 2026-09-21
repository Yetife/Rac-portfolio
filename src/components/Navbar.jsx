import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Github, Linkedin, FileText, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['hero', 'metrics', 'projects', 'experience', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#projects', id: 'projects' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Philosophy', href: '#philosophy', id: 'philosophy' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between glass-card rounded-2xl px-4 sm:px-6 py-3 border border-slate-800/80 shadow-2xl shadow-black/40">
            {/* Brand Logo */}
            <a
              href="#hero"
              className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-lg"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center font-mono font-black text-slate-950 text-sm shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform duration-200">
                YO
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-sm tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                  Yetunde Olasehinde
                </span>
                <span className="text-[10px] font-mono text-emerald-400/90 flex items-center gap-1.5">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                  </span>
                  Sr. Frontend Engineer
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 rounded-xl p-1 border border-slate-800/60">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 ${
                      isActive
                        ? 'bg-emerald-500/15 text-emerald-300 shadow-sm border border-emerald-500/30'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Quick Actions */}
            <div className="hidden lg:flex items-center gap-2.5">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors border border-transparent hover:border-slate-700/60"
                aria-label="GitHub Profile"
              >
                <Github size={16} />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors border border-transparent hover:border-slate-700/60"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 shadow-md shadow-emerald-500/25 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Hire Me</span>
                <ArrowUpRight size={14} />
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/70 transition-colors border border-slate-800/80"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-slate-950/90 backdrop-blur-xl flex flex-col justify-center px-8 transition-opacity duration-300">
          <div className="flex flex-col gap-6 text-center">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
              Navigation
            </span>
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-semibold text-slate-200 hover:text-emerald-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-6 border-t border-slate-800/80 flex flex-col gap-3">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-semibold text-sm flex items-center justify-center gap-2"
              >
                Let's Talk
                <ArrowUpRight size={16} />
              </a>
              <div className="flex justify-center gap-4 pt-3 text-slate-400">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-full bg-slate-900 border border-slate-800 hover:text-emerald-400"
                >
                  <Github size={18} />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-full bg-slate-900 border border-slate-800 hover:text-emerald-400"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
