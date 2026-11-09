import { PERSONAL_INFO } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="mx-auto flex max-w-[1200px] flex-wrap justify-between gap-4 px-7 pb-24 pt-7 text-[13.5px] sm:pb-7 text-stone-500">
      <span>© {new Date().getFullYear()} {PERSONAL_INFO.name}</span>
      <a href="#top" className="text-stone-500 hover:text-ink">
        Back to top ↑
      </a>
    </footer>
  );
}
