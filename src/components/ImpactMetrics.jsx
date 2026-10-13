import { IMPACT_METRICS } from '../data/portfolioData';

export default function ImpactMetrics() {
  return (
    <section aria-label="Impact" className="mx-auto max-w-[1200px] px-5 pb-24 pt-6 sm:px-7">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] border-y border-ink/[.14]">
        {IMPACT_METRICS.map((m, i) => (
          <div key={m.label} data-reveal="up" data-delay={i * 90} className="flex flex-col gap-2 py-[30px] pr-6">
            <span className="font-serif text-5xl leading-none tracking-[-.02em]">{m.metric}</span>
            <span className="text-[14.5px] font-semibold">{m.label}</span>
            <span className="text-sm leading-[1.55] text-stone-500 [text-wrap:pretty]">{m.description}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
