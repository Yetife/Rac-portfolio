import { SKILLS } from '../data/portfolioData';

export default function SkillsMatrix() {
  return (
    <section id="skills" className="mx-auto max-w-[1200px] scroll-mt-[60px] px-5 pb-[90px] pt-[110px] sm:px-7">
      <div data-reveal="up" className="mb-11 flex flex-col gap-3">
        <span className="eyebrow">03 — Skills</span>
        <h2 className="m-0 font-serif text-[clamp(40px,5vw,60px)] font-normal leading-none tracking-[-.02em]">The toolkit.</h2>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-4">
        {SKILLS.map((group, i) => (
          <div
            key={group.category}
            data-reveal="up"
            data-delay={i * 90}
            className="flex flex-col gap-[18px] rounded-[22px] border border-ink/[.07] bg-white p-[26px]"
          >
            <div className="flex flex-col gap-1.5">
              <h3 className="m-0 text-[17px] font-semibold tracking-[-.01em]">{group.category}</h3>
              <p className="m-0 text-[13.5px] leading-normal text-stone-500">{group.description}</p>
            </div>
            <ul className="flex flex-col">
              {group.skills.map(([name, level, highlighted]) => (
                <li key={name} className="flex items-center justify-between gap-3 border-t border-ink/[.07] py-[9px] text-sm">
                  <span className="flex items-center gap-2">
                    <span
                      aria-hidden="true"
                      className={`h-1.5 w-1.5 flex-none rounded-full ${highlighted ? 'bg-accent' : 'bg-stone-300'}`}
                    />
                    {name}
                  </span>
                  <span className="font-mono text-[11.5px] text-stone-400">{level}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
