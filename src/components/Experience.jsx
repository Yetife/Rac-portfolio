import { EXPERIENCE, PERSONAL_INFO } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-[60px] bg-ink text-cream">
      <div className="mx-auto flex max-w-[1200px] flex-wrap gap-14 px-5 py-[clamp(72px,12vw,110px)] sm:px-7">
        <div data-reveal="up" className="flex flex-[1_1_300px] flex-col gap-3.5 self-start lg:sticky lg:top-[110px]">
          <span className="eyebrow text-orange-400">02 — Experience</span>
          <h2 className="m-0 font-serif text-[clamp(40px,5vw,60px)] font-normal leading-none tracking-[-.02em]">
            Four years of
            <br />
            <em className="text-orange-300">shipping products.</em>
          </h2>
          <p className="max-w-[340px] text-[15.5px] leading-relaxed text-stone-400">
            From intern to leading frontend architecture for AI-powered e-commerce.
          </p>
          <a
            href={PERSONAL_INFO.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-2 text-[15px] font-medium text-orange-300 hover:text-white"
          >
            Full résumé ↓
          </a>
        </div>

        <ol className="flex min-w-0 flex-[2_1_560px] flex-col">
          {EXPERIENCE.map((job) => (
            <li
              key={`${job.company}-${job.period}`}
              data-reveal="up"
              className="flex flex-wrap gap-x-8 gap-y-3 border-t border-cream/[.14] py-[34px]"
            >
              <div className="flex flex-[1_1_140px] flex-col gap-1.5">
                <span className="font-mono text-[13px] font-medium text-stone-300">{job.period}</span>
                <span className="text-[13px] text-stone-400">
                  {job.type} · {job.location}
                </span>
              </div>

              <div className="flex min-w-0 flex-[3_1_400px] flex-col gap-3.5">
                <div>
                  <h3 className="m-0 text-[21px] font-semibold tracking-[-.01em]">{job.role}</h3>
                  <div className="font-serif text-[22px] italic text-orange-300">{job.company}</div>
                </div>
                {job.highlight && <p className="m-0 text-[15.5px] leading-[1.55] text-stone-200">{job.highlight}</p>}
                <ul className="m-0 flex list-disc flex-col gap-2 pl-[18px] text-[14.5px] leading-relaxed text-stone-400">
                  {job.responsibilities.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
                <ul className="flex flex-wrap gap-1.5" aria-label="Technologies">
                  {job.technologies.map((t) => (
                    <li key={t} className="rounded-full bg-cream/[.08] px-2.5 py-1 text-[12.5px] text-stone-200">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
