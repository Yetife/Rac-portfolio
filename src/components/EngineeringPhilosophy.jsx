import React from 'react';
import { Zap, ShieldCheck, Layers, Target } from 'lucide-react';
import { PHILOSOPHIES } from '../data/portfolioData';

export default function EngineeringPhilosophy() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Zap':
        return <Zap className="text-amber-400" size={24} />;
      case 'ShieldCheck':
        return <ShieldCheck className="text-emerald-400" size={24} />;
      case 'Layers':
        return <Layers className="text-cyan-400" size={24} />;
      case 'Target':
        return <Target className="text-rose-400" size={24} />;
      default:
        return <Zap className="text-emerald-400" size={24} />;
    }
  };

  return (
    <section id="philosophy" className="py-24 bg-slate-900/30 border-t border-slate-800/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2">
            <span className="w-6 h-[1px] bg-emerald-400" />
            <span>04 // Principles</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How I Approach Frontend Engineering
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-2">
            Senior development goes beyond syntax. It's about designing sustainable frontend architecture that drives measurable outcomes.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PHILOSOPHIES.map((item, index) => (
            <div
              key={index}
              className="glass-card glass-card-hover rounded-2xl p-6 border border-slate-800 flex flex-col justify-between"
            >
              <div>
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 w-fit mb-5">
                  {getIcon(item.icon)}
                </div>
                <h3 className="text-base font-bold text-white mb-2.5">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/60 text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                Standard // 0{index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
