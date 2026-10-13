import { useCallback, useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import ProjectPreview from './ProjectPreview';
import ProjectModal from './ProjectModal';

const pad = (n) => String(n).padStart(2, '0');

export default function Projects() {
  const [hovered, setHovered] = useState(0);
  const [openId, setOpenId] = useState(null);

  const closeModal = useCallback(() => setOpenId(null), []);

  const active = PROJECTS[hovered];
  const openProject = PROJECTS.find((p) => p.id === openId);

  const open = (index) => {
    setHovered(index);
    setOpenId(PROJECTS[index].id);
  };

  return (
    <section id="work" className="mx-auto max-w-[1200px] scroll-mt-20 px-5 pb-[110px] sm:px-7">
      <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
        <div data-reveal="up" className="flex flex-col gap-3">
          <span className="eyebrow">01 — Selected work</span>
          <h2 className="m-0 font-serif text-[clamp(40px,5vw,64px)] font-normal leading-none tracking-[-.02em]">
            Products in production,
            <br />
            <em>built for real users.</em>
          </h2>
        </div>
        <p data-reveal="up" data-delay="120" className="max-w-[330px] text-[15px] leading-relaxed text-stone-600 [text-wrap:pretty]">
          Logistics, e-commerce, fintech and education. Hover a project to preview it; click to read the case study.
        </p>
      </div>

      <div className="grid grid-cols-[minmax(0,1fr)] items-start gap-x-14 gap-y-10 lg:grid-cols-2">
        {/* Sticky preview */}
        <div className="min-w-0 self-stretch">
          <div data-reveal="zoom" className="sticky top-[92px] flex min-w-0 flex-col gap-5">
            <button
              type="button"
              onClick={() => open(hovered)}
              aria-label={`Open ${active.name} case study`}
              className="relative block aspect-[5/4] max-h-[70vh] w-full cursor-pointer overflow-hidden rounded-[28px] bg-cream-deep shadow-[0_40px_80px_-48px_rgba(28,25,23,.5)]"
            >
              {PROJECTS.map((p, i) => (
                <ProjectPreview key={p.id} project={p} active={i === hovered} />
              ))}
              <span className="absolute left-5 top-[18px] z-[3] rounded-full bg-white/80 px-[11px] py-1.5 font-mono text-xs font-medium text-ink backdrop-blur-md">
                {pad(hovered + 1)} / {pad(PROJECTS.length)}
              </span>
              <span className="absolute right-5 top-[18px] z-[3] inline-flex items-center gap-2 rounded-full bg-ink px-3.5 py-2 text-[13px] font-medium text-cream">
                Case study <span aria-hidden="true">→</span>
              </span>
            </button>

            <div className="flex flex-col gap-3 px-1">
              <p className="flex items-start gap-3 text-[15px] font-medium leading-normal text-orange-900">
                <span className="text-accent" aria-hidden="true">↗</span>
                <span className="[text-wrap:pretty]">{active.metrics}</span>
              </p>
              <ul className="flex flex-wrap gap-1.5" aria-label="Technologies">
                {active.tags.map((t) => (
                  <li key={t} className="chip">{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Project list */}
        <ul className="flex min-w-0 flex-col border-b border-ink/[.14]">
          {PROJECTS.map((p, i) => {
            const on = i === hovered;
            return (
              <li key={p.id} data-reveal="up" data-delay={i * 70}>
                <button
                  type="button"
                  onClick={() => open(i)}
                  onMouseEnter={() => setHovered(i)}
                  onFocus={() => setHovered(i)}
                  className="relative grid w-full cursor-pointer grid-cols-[28px_minmax(0,1fr)_44px] items-center gap-4 border-t border-ink/[.14] px-1.5 py-[26px] text-left sm:grid-cols-[40px_minmax(0,1fr)_auto_44px] sm:gap-5"
                >
                  <span className={`self-start pt-2.5 font-mono text-[12.5px] font-medium transition-colors duration-300 ${on ? 'text-accent' : 'text-stone-400'}`}>
                    {pad(i + 1)}
                  </span>

                  <span
                    className="flex min-w-0 flex-col gap-1.5 transition-transform duration-500 ease-smooth"
                    style={{ transform: on ? 'translateX(10px)' : 'none' }}
                  >
                    <span className="flex flex-wrap items-center gap-2.5">
                      <span
                        className={`font-serif text-[clamp(32px,3.6vw,46px)] leading-none tracking-[-.02em] transition-colors duration-300 ${on ? 'italic text-accent' : 'text-ink'}`}
                      >
                        {p.name}
                      </span>
                      {p.badge && (
                        <span className="rounded-full border border-accent/35 px-2 py-[3px] font-mono text-[11px] font-medium uppercase tracking-[.06em] text-accent">
                          {p.badge}
                        </span>
                      )}
                    </span>
                    <span className="text-[15px] leading-snug text-stone-600">{p.sub}</span>
                  </span>

                  <span className="hidden flex-col items-end gap-1 text-right font-mono text-[11.5px] font-medium uppercase tracking-[.06em] text-stone-500 sm:flex">
                    <span>{p.category}</span>
                    <span className="text-stone-400">{p.period}</span>
                  </span>

                  <span
                    aria-hidden="true"
                    className={`grid h-11 w-11 place-items-center rounded-full border text-[17px] transition-all duration-[450ms] ease-smooth ${
                      on ? '-rotate-45 border-ink bg-ink text-cream' : 'border-ink/[.18] bg-transparent text-ink'
                    }`}
                  >
                    →
                  </span>

                  <span
                    aria-hidden="true"
                    className="absolute -bottom-px left-0 h-0.5 bg-accent transition-[width] duration-700 ease-smooth"
                    style={{ width: on ? '100%' : '0%' }}
                  />
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {openProject && <ProjectModal project={openProject} onClose={closeModal} />}
    </section>
  );
}
