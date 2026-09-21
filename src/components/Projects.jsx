import React, { useState } from 'react';
import { ExternalLink, Github, ArrowUpRight, Layers, Sparkles, Terminal } from 'lucide-react';
import { PROJECTS, PROJECT_CATEGORIES } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filteredProjects =
    selectedCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2">
              <span className="w-6 h-[1px] bg-emerald-400" />
              <span>01 // Selected Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Production Platforms
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-2">
              Commercial applications engineered for fintech, e-commerce, and enterprise learning with real user scale.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-slate-900/80 rounded-xl border border-slate-800 self-start md:self-auto">
            {PROJECT_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-emerald-500 text-slate-950 font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card glass-card-hover rounded-2xl overflow-hidden border border-slate-800 flex flex-col group"
            >
              {/* Project Screenshot in Browser Frame */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-950 border-b border-slate-800/80">
                {/* Simulated Browser Chrome Top Bar */}
                <div className="absolute top-0 left-0 right-0 z-10 px-3 py-2 bg-slate-950/90 backdrop-blur border-b border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                    <span className="ml-2 text-slate-400 truncate max-w-[180px] sm:max-w-xs">
                      {project.title.split('—')[0].trim().toLowerCase()}.app
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800 text-[10px]">
                    {project.category}
                  </span>
                </div>

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 pt-7"
                />

                {/* Hover Overlay Button to open Case Study */}
                <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pt-7">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="px-4 py-2 rounded-xl bg-slate-900/90 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-medium shadow-xl hover:bg-emerald-500 hover:text-slate-950 transition-colors flex items-center gap-2"
                  >
                    <Layers size={14} />
                    <span>View Architecture Deep Dive</span>
                  </button>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                  <span>{project.period}</span>
                  {project.featured && (
                    <span className="inline-flex items-center gap-1 text-emerald-400 text-[11px]">
                      <Sparkles size={11} /> Featured
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  {project.summary}
                </p>

                {/* Quantified Metric Badge */}
                <div className="mb-5 p-2.5 rounded-lg bg-emerald-950/30 border border-emerald-500/20 text-xs text-emerald-300 flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">⚡</span>
                  <span className="font-mono">{project.metrics}</span>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-slate-900 text-slate-300 border border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-800/80">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="text-xs font-mono text-emerald-400 hover:text-emerald-300 flex items-center gap-1 transition-colors"
                  >
                    <span>Case Study & Architecture</span>
                    <ArrowUpRight size={13} />
                  </button>

                  <div className="flex items-center gap-3">
                    {project.links.code && project.links.code !== '#' && (
                      <a
                        href={project.links.code}
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-400 hover:text-white transition-colors"
                        aria-label="View Source Code"
                      >
                        <Github size={16} />
                      </a>
                    )}
                    {project.links.demo && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
                      >
                        <span>Demo</span>
                        <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Architecture Case Study Modal */}
      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </section>
  );
}
