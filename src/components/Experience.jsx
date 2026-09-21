import React from 'react';
import { Calendar, MapPin, CheckCircle2, ChevronRight } from 'lucide-react';
import { WORK_EXPERIENCE } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-slate-900/30 border-t border-slate-800/60 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2">
            <span className="w-6 h-[1px] bg-emerald-400" />
            <span>02 // Career Trajectory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work Experience & Track Record
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-2">
            Demonstrated engineering leadership across venture-backed startups, high-throughput fintech, and pan-African technology incubators.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 space-y-12">
          {WORK_EXPERIENCE.map((job, index) => (
            <div key={index} className="relative pl-6 sm:pl-10 group">
              {/* Timeline Node Icon */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-emerald-400 group-hover:bg-emerald-400 group-hover:scale-125 transition-all duration-300 shadow-md shadow-emerald-500/20" />

              {/* Experience Card */}
              <div className="glass-card glass-card-hover rounded-2xl p-6 sm:p-8 border border-slate-800">
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {job.role}
                    </h3>
                    <div className="text-sm font-semibold text-emerald-400 font-mono mt-0.5">
                      {job.company}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
                    <span className="inline-flex items-center gap-1">
                      <Calendar size={13} className="text-slate-500" />
                      {job.period}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[10px]">
                      {job.type}
                    </span>
                  </div>
                </div>

                {/* Highlight banner */}
                <div className="mb-5 px-3.5 py-2 rounded-lg bg-slate-950/80 border border-slate-800 text-xs text-slate-300 font-medium">
                  <span className="text-emerald-400 font-mono">Focus:</span> {job.highlight}
                </div>

                {/* Responsibilities & Achievements */}
                <ul className="space-y-3 mb-6">
                  {job.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-slate-300 text-xs sm:text-sm leading-relaxed">
                      <span className="text-emerald-400 shrink-0 mt-1">▸</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/60">
                  {job.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-slate-900 text-slate-400 border border-slate-800/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
