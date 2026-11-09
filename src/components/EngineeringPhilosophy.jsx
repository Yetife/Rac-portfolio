import { PRINCIPLES } from '../data/portfolioData';

export default function EngineeringPhilosophy() {
  return (
    <section aria-labelledby="how-i-work" className="mx-auto max-w-[1200px] px-5 pb-[110px] pt-10 sm:px-7">
      <div data-reveal="up" className="mb-12 flex flex-col gap-3">
        <span className="eyebrow">04 — How I work</span>
        <h2
          id="how-i-work"
          className="m-0 font-serif text-[clamp(40px,5vw,60px)] font-normal leading-none tracking-[-.02em]"
        >
          Principles, <em className="text-accent">with receipts.</em>
        </h2>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] gap-x-10 gap-y-12">
        {PRINCIPLES.map((p, i) => (
          <article key={p.title} data-reveal="up" data-delay={(i % 2) * 90} className="flex flex-col gap-3 border-t-2 border-ink pt-5">
            <span className="font-serif text-[34px] italic leading-none text-accent">0{i + 1}</span>
            <h3 className="m-0 text-[19px] font-semibold leading-snug tracking-[-.01em] [text-wrap:balance]">{p.title}</h3>
            <p className="m-0 text-[15px] leading-relaxed text-stone-600 [text-wrap:pretty]">{p.description}</p>
            <div className="mt-2 flex flex-col gap-2 rounded-[18px] border border-ink/[.08] bg-white px-5 py-4">
              <span className="label-mono text-accent">In practice · {p.source}</span>
              <p className="m-0 text-[14.5px] leading-relaxed text-stone-800 [text-wrap:pretty]">{p.proof}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
