import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle, Cpu, AlertTriangle, TrendingUp } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl shadow-black/80 z-10 flex flex-col">
        {/* Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-slate-900/95 backdrop-blur border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <span className="px-2.5 py-1 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-mono text-xs">
              {project.category}
            </span>
            <span className="text-xs font-mono text-slate-400">{project.period}</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close Case Study"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Project Header */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">{project.title}</h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">{project.summary}</p>
          </div>

          {/* Screenshot Display with Browser Chrome Frame */}
          <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-inner">
            <div className="px-3 py-2 bg-slate-950 border-b border-slate-800/80 flex items-center gap-2 text-[11px] font-mono text-slate-500">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
              </div>
              <span className="truncate">{project.links.demo || 'https://production.app'}</span>
            </div>
            <img
              src={project.image}
              alt={project.title}
              className="w-full max-h-72 object-cover object-top"
            />
          </div>

          {/* Case Study Breakdown Grid */}
          <div className="space-y-6 pt-2">
            {/* The Challenge */}
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
              <div className="flex items-center gap-2 text-rose-400 text-xs font-mono uppercase tracking-wider mb-2 font-semibold">
                <AlertTriangle size={15} />
                <span>The Engineering Challenge</span>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                {project.caseStudy.challenge}
              </p>
            </div>

            {/* Architecture & Decisions */}
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3 font-semibold">
                <Cpu size={15} />
                <span>Architectural Solutions & Decisions</span>
              </div>
              <ul className="space-y-2.5">
                {project.caseStudy.architecture.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-slate-300 text-sm leading-relaxed">
                    <CheckCircle size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Measurable Outcome */}
            <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-2 font-semibold">
                <TrendingUp size={15} />
                <span>Measurable Impact & Results</span>
              </div>
              <p className="text-slate-200 text-sm leading-relaxed font-medium">
                {project.caseStudy.outcome}
              </p>
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div>
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2.5">
              Production Tech Stack
            </span>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-mono rounded-lg bg-slate-800 text-slate-200 border border-slate-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="sticky bottom-0 z-20 px-6 py-4 bg-slate-900/95 backdrop-blur border-t border-slate-800 flex items-center justify-between">
          <div className="text-xs font-mono text-slate-400 hidden sm:block">
            Press <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300">Esc</kbd> to close
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            {project.links.code && project.links.code !== '#' && (
              <a
                href={project.links.code}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors"
              >
                <Github size={14} />
                <span>Source Code</span>
              </a>
            )}
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-semibold text-xs shadow-md transition-all hover:scale-[1.02]"
              >
                <span>Launch Live Demo</span>
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
