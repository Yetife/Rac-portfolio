import { useCallback, useEffect, useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import ProjectPreview from './ProjectPreview';
import ProjectModal from './ProjectModal';

const pad = (n) => String(n).padStart(2, '0');

// Case studies are deep-linkable as #work/<id>, so a single case study can be shared directly.
const idFromHash = () => {
  const match = window.location.hash.match(/^#work\/([\w-]+)$/);
  return match && PROJECTS.some((p) => p.id === match[1]) ? match[1] : null;
};

export default function Projects() {
  const [hovered, setHovered] = useState(() => Math.max(0, PROJECTS.findIndex((p) => p.id === idFromHash())));
  const [openId, setOpenId] = useState(idFromHash);

  useEffect(() => {
    const onHash = () => setOpenId(idFromHash());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const closeModal = useCallback(() => {
    setOpenId(null);
    if (idFromHash()) history.replaceState(null, '', '#work');
  }, []);

  const active = PROJECTS[hovered];
  const openProject = PROJECTS.find((p) => p.id === openId);

  const open = (index) => {
    setHovered(index);
    setOpenId(PROJECTS[index].id);
    history.replaceState(null, '', `#work/${PROJECTS[index].id}`);
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
          Logistics, e-commerce, fintech and education. <span className="hidden lg:inline">Hover a project to preview it; click to read the case study.</span>
          <span className="lg:hidden">Tap a project to read the case study.</span>
        </p>
      </div>

      {/* Mobile & tablet: stacked cards, since there is no hover to drive the preview */}
      <ul className="grid grid-cols-[minmax(0,1fr)] gap-12 sm:grid-cols-2 sm:gap-x-6 lg:hidden">
        {PROJECTS.map((p, i) => (
          <li key={p.id} data-reveal="up">
            <button type="button" onClick={() => open(i)} className="group flex w-full cursor-pointer flex-col gap-4 text-left">
              <span className="relative block aspect-[5/4] w-full overflow-hidden rounded-[22px] bg-cream-deep">
                <ProjectPreview project={p} active />
                <span className="absolute left-4 top-3.5 z-[3] rounded-full bg-white/80 px-2.5 py-1 font-mono text-[11.5px] font-medium text-ink backdrop-blur-md">
                  {pad(i + 1)}
                </span>
              </span>
              <span className="flex flex-col gap-1.5 px-0.5">
                <span className="flex flex-wrap items-center gap-2.5">
                  <span className="font-serif text-[34px] leading-none tracking-[-.02em] text-ink">{p.name}</span>
                  {p.badge && (
                    <span className="rounded-full border border-accent/35 px-2 py-[3px] font-mono text-[11px] font-medium uppercase tracking-[.06em] text-accent">
                      {p.badge}
                    </span>
                  )}
                </span>
                <span className="text-[15px] text-stone-600">{p.sub}</span>
                <span className="font-mono text-[11.5px] font-medium uppercase tracking-[.06em] text-stone-500">
                  {p.category} · {p.period}
                </span>
                <span className="mt-1.5 text-[14.5px] font-medium leading-normal text-orange-900 [text-wrap:pretty]">{p.metrics}</span>
                <span className="mt-2 inline-flex min-h-[44px] items-center gap-2 text-[15px] font-medium text-accent">
                  Read case study <span aria-hidden="true">→</span>
                </span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      <div className="hidden items-start gap-x-14 gap-y-10 lg:grid lg:grid-cols-2">
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
