import React from 'react';
import { Layers, CheckCircle2, Sparkles } from 'lucide-react';
import { SKILLS_MATRIX } from '../data/portfolioData';

export default function SkillsMatrix() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2">
            <span className="w-6 h-[1px] bg-emerald-400" />
            <span>03 // Architectural Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering Competencies & Toolchain
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-2">
            A battle-tested frontend toolchain honed across production microservices, high-traffic consumer web, and financial systems.
          </p>
        </div>

        {/* Matrix Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {SKILLS_MATRIX.map((group, index) => (
            <div
              key={index}
              className="glass-card glass-card-hover rounded-2xl p-6 sm:p-7 border border-slate-800 flex flex-col justify-between"
            >
              <div>
                {/* Group Title */}
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    {group.category}
                  </h3>
                  <span className="text-[11px] font-mono text-slate-500">Domain 0{index + 1}</span>
                </div>
                <p className="text-xs text-slate-400 mb-6 font-normal">
                  {group.description}
                </p>

                {/* Skills Pills / Matrix */}
                <div className="grid grid-cols-2 gap-2.5">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`p-2.5 rounded-xl border transition-all duration-200 flex flex-col justify-between ${
                        skill.highlight
                          ? 'bg-slate-900/90 border-emerald-500/30 shadow-sm'
                          : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium text-slate-200">
                          {skill.name}
                        </span>
                        {skill.highlight && (
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        )}
                      </div>
                      <span className="text-[10px] font-mono text-slate-400 mt-1.5">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Summary Bar */}
              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1">
                  <CheckCircle2 size={13} className="text-emerald-400" /> Production Proven
                </span>
                <span>Type Safe • Scalable</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
