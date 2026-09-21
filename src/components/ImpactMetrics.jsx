import React from 'react';
import { Briefcase, Zap, GitFork, ShieldCheck } from 'lucide-react';
import { IMPACT_METRICS } from '../data/portfolioData';

export default function ImpactMetrics() {
  const getIcon = (id) => {
    switch (id) {
      case 'exp':
        return <Briefcase className="text-emerald-400" size={22} />;
      case 'perf':
        return <Zap className="text-amber-400" size={22} />;
      case 'state':
        return <GitFork className="text-cyan-400" size={22} />;
      case 'scale':
        return <ShieldCheck className="text-indigo-400" size={22} />;
      default:
        return <Zap className="text-emerald-400" size={22} />;
    }
  };

  return (
    <section id="metrics" className="py-12 border-y border-slate-800/80 bg-slate-900/40 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {IMPACT_METRICS.map((item) => (
            <div
              key={item.id}
              className="glass-card glass-card-hover rounded-2xl p-6 relative overflow-hidden group border border-slate-800"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 group-hover:scale-110 transition-transform duration-200">
                  {getIcon(item.id)}
                </span>
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                  Impact
                </span>
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold font-mono text-white tracking-tight mb-1 group-hover:text-emerald-400 transition-colors">
                {item.metric}
              </div>
              <h2 className="text-sm font-semibold text-slate-200 mb-2">
                {item.label}
              </h2>
              <p className="text-xs text-slate-400 leading-relaxed font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
