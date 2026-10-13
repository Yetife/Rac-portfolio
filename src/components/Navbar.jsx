import { PERSONAL_INFO } from '../data/portfolioData';

const LINKS = [
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-ink/[.08] bg-cream/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-x-5 gap-y-2.5 px-5 py-3.5 sm:px-7">
        <a href="#top" className="flex items-center gap-2.5 text-ink hover:text-ink">
          <span className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-ink font-serif text-[17px] leading-none text-cream">
            {PERSONAL_INFO.initials}
          </span>
          <span className="text-[15px] font-semibold tracking-[-.01em]">{PERSONAL_INFO.name}</span>
        </a>

        <nav aria-label="Primary" className="flex flex-wrap items-center gap-3 text-sm sm:gap-[26px]">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className="text-stone-600 hover:text-ink">
              {link.label}
            </a>
          ))}
          <a
            href={PERSONAL_INFO.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-ink px-4 py-2 font-medium text-cream transition-colors duration-200 hover:bg-accent hover:text-white"
          >
            Résumé
          </a>
        </nav>
      </div>
    </header>
  );
}
