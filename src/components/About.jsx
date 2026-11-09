import { ABOUT } from '../data/portfolioData';

export default function About() {
  return (
    <section aria-labelledby="about-heading" className="mx-auto max-w-[1200px] px-5 pb-[110px] sm:px-7">
      <div className="flex flex-wrap gap-x-14 gap-y-6">
        <div data-reveal="up" className="flex flex-[1_1_300px] flex-col gap-3">
          <span className="eyebrow">About</span>
          <h2
            id="about-heading"
            className="m-0 max-w-[460px] font-serif text-[clamp(34px,4vw,48px)] font-normal leading-[1.05] tracking-[-.02em]"
          >
            {ABOUT.heading}
          </h2>
        </div>
        <div data-reveal="up" data-delay="120" className="flex min-w-0 flex-[2_1_480px] flex-col gap-4 pt-1 sm:pt-7">
          {ABOUT.body.map((p, i) => (
            <p
              key={p}
              className={`m-0 leading-relaxed [text-wrap:pretty] ${
                i === 0 ? 'text-[18px] text-stone-800' : 'font-serif text-[24px] italic leading-snug text-accent'
              }`}
            >
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
