import { PERSONAL_INFO, HERO_FACTS } from '../data/portfolioData';

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-[1200px] grid-cols-[minmax(0,1fr)] items-center gap-14 px-5 pb-14 pt-[72px] sm:px-7 lg:grid-cols-2">
      <div className="flex flex-col gap-7">
        <div data-reveal="up" className="flex flex-wrap items-center gap-2.5 text-[13.5px]">
          <span className="inline-flex items-center gap-[9px] rounded-full border border-ink/10 bg-white py-[7px] pl-3 pr-3.5 font-medium">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse-ring" aria-hidden="true" />
            {PERSONAL_INFO.availability}
          </span>
          <span className="text-stone-500">{PERSONAL_INFO.workMode}</span>
        </div>

        <h1
          data-reveal="up"
          data-delay="120"
          className="m-0 font-serif text-[clamp(44px,11.5vw,124px)] font-normal leading-[.9] tracking-[-.025em]"
        >
          {PERSONAL_INFO.firstName}
          <br />
          <em className="text-accent">{PERSONAL_INFO.lastName}</em>
        </h1>

        <div data-reveal="up" data-delay="240" className="flex max-w-[540px] flex-col gap-3.5">
          <p className="text-[22px] font-medium leading-[1.35] tracking-[-.015em] [text-wrap:pretty]">
            {PERSONAL_INFO.headline}
          </p>
          <p className="text-[16.5px] leading-relaxed text-stone-600 [text-wrap:pretty]">{PERSONAL_INFO.intro}</p>
        </div>

        <div data-reveal="up" data-delay="360" className="flex flex-wrap items-center gap-3">
          <a
            href="#work"
            className="inline-flex items-center gap-2.5 rounded-full bg-accent px-6 py-[15px] text-[15px] font-medium text-white transition duration-200 hover:-translate-y-0.5 hover:bg-accent-dark hover:text-white"
          >
            See selected work <span aria-hidden="true">→</span>
          </a>
          <a
            href={PERSONAL_INFO.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full border border-ink/20 px-[22px] py-3.5 text-[15px] font-medium text-ink transition duration-200 hover:-translate-y-0.5 hover:border-ink hover:text-ink"
          >
            Download résumé <span aria-hidden="true">↓</span>
          </a>
          <a href={`mailto:${PERSONAL_INFO.email}`} className="px-1.5 py-3.5 text-[15px] font-medium text-ink hover:text-accent">
            {PERSONAL_INFO.email}
          </a>
        </div>

        <dl
          data-reveal="up"
          data-delay="480"
          className="grid max-w-[560px] grid-cols-[repeat(auto-fit,minmax(130px,1fr))] gap-px overflow-hidden rounded-[14px] border border-ink/10 bg-ink/10"
        >
          {HERO_FACTS.map((fact) => (
            <div key={fact.label} className="flex flex-col gap-[3px] bg-cream-soft px-4 py-3">
              <dt className="label-mono">{fact.label}</dt>
              <dd className="m-0 text-sm font-medium">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* No scroll-reveal here: the portrait is the LCP element, so it must paint immediately. */}
      <div className="relative w-full max-w-[500px] justify-self-center">
        <div className="group aspect-[4/5] overflow-hidden rounded-[28px] bg-cream-deep shadow-[0_40px_80px_-40px_rgba(120,53,15,.45)]">
          <img
            src={PERSONAL_INFO.avatar}
            srcSet={PERSONAL_INFO.avatarSrcSet}
            sizes="(min-width: 1024px) 500px, calc(100vw - 40px)"
            width="696"
            height="870"
            fetchPriority="high"
            decoding="async"
            alt={PERSONAL_INFO.name}
            className="block h-full w-full object-cover object-top transition-transform duration-[1200ms] ease-smooth group-hover:scale-[1.04]"
          />
        </div>
      </div>
    </section>
  );
}
