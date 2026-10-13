import { PRINCIPLES } from '../data/portfolioData';

export default function EngineeringPhilosophy() {
  return (
    <section aria-labelledby="how-i-work" className="mx-auto max-w-[1200px] px-5 pb-[110px] pt-10 sm:px-7">
      <div data-reveal="up" className="mb-10">
        <h2 id="how-i-work" className="eyebrow m-0">04 — How I work</h2>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,250px),1fr))] gap-x-8 gap-y-10">
        {PRINCIPLES.map((p, i) => (
          <div key={p.title} data-reveal="up" data-delay={i * 90} className="flex flex-col gap-3 border-t-2 border-ink pt-5">
            <span className="font-serif text-[34px] italic leading-none text-accent">0{i + 1}</span>
            <h3 className="m-0 text-lg font-semibold tracking-[-.01em]">{p.title}</h3>
            <p className="m-0 text-[14.5px] leading-relaxed text-stone-600 [text-wrap:pretty]">{p.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
