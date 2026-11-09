import { PERSONAL_INFO } from '../data/portfolioData';

// Mobile Lighthouse results for this site (Nov 2026). Performance varies a few points run to run,
// so it is stated as a floor. Re-run via the PageSpeed link before changing these.
const SCORES = [
  ['Performance', '95+'],
  ['Accessibility', '100'],
  ['Best practices', '100'],
  ['SEO', '100'],
];
const PAGESPEED_URL = 'https://pagespeed.web.dev/analysis?url=https%3A%2F%2Frac-portfolio.vercel.app%2F';

export default function Footer() {
  return (
    <footer className="mx-auto flex max-w-[1200px] flex-col gap-6 px-7 pb-24 pt-7 text-[13.5px] text-muted sm:pb-7">
      <a
        href={PAGESPEED_URL}
        target="_blank"
        rel="noreferrer"
        className="group flex flex-wrap items-center gap-x-5 gap-y-3 rounded-[18px] border border-ink/[.08] bg-white px-5 py-4 text-ink hover:border-ink/20 hover:text-ink"
      >
        <span className="label-mono text-accent">This site · Lighthouse mobile</span>
        <span className="flex flex-wrap gap-x-5 gap-y-2">
          {SCORES.map(([label, score]) => (
            <span key={label} className="flex items-baseline gap-1.5">
              <span className="font-serif text-[24px] leading-none">{score}</span>
              <span className="text-[13px] text-muted">{label}</span>
            </span>
          ))}
        </span>
        <span className="text-[13px] font-medium text-accent sm:ml-auto">
          Run it yourself <span aria-hidden="true">↗</span>
        </span>
      </a>

      <div className="flex flex-wrap justify-between gap-4">
        <span suppressHydrationWarning>© {new Date().getFullYear()} {PERSONAL_INFO.name}</span>
        <a href="#top" className="text-muted hover:text-ink">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
