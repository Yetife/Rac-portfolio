import { useEffect, useRef } from 'react';

const hideOnError = (e) => {
  e.currentTarget.style.visibility = 'hidden';
};

export default function ProjectModal({ project, onClose }) {
  const closeRef = useRef(null);

  // Escape to close, lock page scroll, and return focus to the trigger afterwards.
  useEffect(() => {
    const previouslyFocused = document.activeElement;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
      previouslyFocused?.focus?.();
    };
  }, [onClose]);

  const isPhones = project.kind === 'phones';

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-ink/55 px-4 py-10 backdrop-blur-[6px]"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-study-title"
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-[820px] overflow-hidden rounded-[28px] bg-cream shadow-[0_40px_100px_-30px_rgba(0,0,0,.5)]"
      >
        <div
          className={`relative overflow-hidden ${isPhones ? 'aspect-video' : 'aspect-[2/1]'}`}
          style={{ background: isPhones ? project.bg : '#efe8de' }}
        >
          {isPhones ? (
            <div className="absolute inset-0 flex items-end justify-center gap-7 pt-8">
              {project.phones.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt=""
                  onError={hideOnError}
                  className="h-[115%] rounded-[22px] shadow-[0_30px_60px_-30px_rgba(28,25,23,.5)]"
                  style={{ transform: i === 0 ? 'translateY(12%) rotate(-3deg)' : 'translateY(20%) rotate(3deg)' }}
                />
              ))}
            </div>
          ) : (
            <img src={project.image} alt={project.name} onError={hideOnError} className="block h-full w-full object-cover object-top" />
          )}
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close case study"
            className="absolute right-4 top-4 h-[42px] w-[42px] cursor-pointer rounded-full bg-white text-lg text-ink shadow-[0_6px_20px_rgba(0,0,0,.15)]"
          >
            ✕
          </button>
        </div>

        <div className="flex flex-col gap-7 px-6 pb-11 pt-9 sm:px-12">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-xs font-medium uppercase tracking-[.06em] text-accent">
              Case study · {project.category} · {project.period}
            </span>
            <h3 id="case-study-title" className="m-0 font-serif text-[clamp(36px,9vw,48px)] font-normal leading-none tracking-[-.02em]">
              {project.name}
            </h3>
            <span className="text-[17px] font-medium text-stone-600">{project.sub}</span>
          </div>

          <div className="flex flex-wrap gap-x-7 gap-y-2">
            <span className="label-mono flex-[1_1_130px] pt-1 text-xs">The challenge</span>
            <p className="m-0 min-w-0 flex-[3_1_380px] text-base leading-[1.65] text-stone-800">{project.challenge}</p>
          </div>

          <div className="flex flex-wrap gap-x-7 gap-y-2">
            <span className="label-mono flex-[1_1_130px] pt-1 text-xs">What I built</span>
            <ol className="m-0 flex min-w-0 flex-[3_1_380px] list-decimal flex-col gap-2.5 pl-5 text-[15.5px] leading-relaxed text-stone-800">
              {project.architecture.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </div>

          <div className="flex flex-col gap-2 rounded-[20px] bg-ink px-[26px] py-6 text-cream">
            <span className="font-mono text-xs font-medium uppercase tracking-[.06em] text-orange-300">Outcome</span>
            <p className="m-0 font-serif text-[26px] leading-[1.25]">{project.outcome}</p>
          </div>

          <ul className="flex flex-wrap gap-1.5" aria-label="Technologies">
            {project.tags.map((t) => (
              <li key={t} className="chip border-ink/[.14]">{t}</li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-accent px-[22px] py-[13px] text-[15px] font-medium text-white hover:bg-accent-dark hover:text-white"
              >
                Visit live site ↗
              </a>
            )}
            {project.code && (
              <a
                href={project.code}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-ink/20 px-[22px] py-3 text-[15px] font-medium text-ink hover:border-ink hover:text-ink"
              >
                View code
              </a>
            )}
            {project.private && (
              <span className="px-1 py-3 text-[14.5px] text-stone-500">Private B2B platform. Walkthrough available on request.</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
