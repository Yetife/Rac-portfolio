import { useEffect, useRef, useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

const LINKS = [
  { label: 'LinkedIn', value: `${PERSONAL_INFO.linkedinHandle} ↗`, href: PERSONAL_INFO.linkedin, external: true },
  { label: 'GitHub', value: `${PERSONAL_INFO.githubHandle} ↗`, href: PERSONAL_INFO.github, external: true },
  { label: 'Phone', value: PERSONAL_INFO.phone, href: PERSONAL_INFO.phoneHref },
  { label: 'Location', value: `${PERSONAL_INFO.location} · ${PERSONAL_INFO.timezone}` },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const timer = useRef();

  useEffect(() => () => clearTimeout(timer.current), []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopied(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${PERSONAL_INFO.email}`;
    }
  };

  return (
    <section id="contact" className="scroll-mt-[60px] px-4 pb-4">
      <div className="mx-auto flex max-w-[1260px] flex-col gap-10 overflow-hidden rounded-[36px] bg-accent px-[clamp(28px,6vw,80px)] py-[clamp(48px,8vw,110px)] text-white">
        <h2
          data-reveal="up"
          className="m-0 max-w-[980px] font-serif text-[clamp(52px,8vw,120px)] font-normal leading-[.92] tracking-[-.03em]"
        >
          Let&apos;s build something people <em>love</em> to use.
        </h2>

        <div data-reveal="up" data-delay="120" className="flex flex-wrap items-center gap-3.5">
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="rounded-full bg-white px-7 py-[17px] text-base font-medium text-ink transition-transform duration-200 hover:-translate-y-0.5 hover:text-ink"
          >
            {PERSONAL_INFO.email}
          </a>
          <button
            type="button"
            onClick={copyEmail}
            className="cursor-pointer rounded-full border border-white/50 bg-transparent px-[22px] py-4 text-[15px] font-medium text-white transition-colors hover:bg-white/[.12]"
          >
            <span aria-live="polite">{copied ? 'Copied ✓' : 'Copy email'}</span>
          </button>
        </div>

        <div
          data-reveal="up"
          data-delay="200"
          className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-5 border-t border-white/30 pt-7 text-[15px]"
        >
          {LINKS.map((link) => {
            const content = (
              <>
                <span className="font-mono text-[11.5px] font-medium uppercase tracking-[.06em] text-orange-200">{link.label}</span>
                {link.value}
              </>
            );
            return link.href ? (
              <a
                key={link.label}
                href={link.href}
                {...(link.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                className="flex flex-col gap-1 text-white hover:text-orange-100"
              >
                {content}
              </a>
            ) : (
              <div key={link.label} className="flex flex-col gap-1">
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
