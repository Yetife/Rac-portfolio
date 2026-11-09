import { useEffect, useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

/**
 * Phone-only bottom bar: one tap to email or open the résumé.
 * Appears once the hero is scrolled past and hides while the Contact section is on screen.
 */
export default function MobileContactBar() {
  const [pastHero, setPastHero] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    const contact = document.getElementById('contact');
    const io = contact ? new IntersectionObserver(([entry]) => setContactVisible(entry.isIntersecting)) : null;
    if (contact) io.observe(contact);

    return () => {
      window.removeEventListener('scroll', onScroll);
      io?.disconnect();
    };
  }, []);

  const show = pastHero && !contactVisible;

  return (
    <div
      aria-hidden={!show}
      className={`fixed inset-x-3 bottom-3 z-30 flex gap-2 rounded-full border border-ink/10 bg-cream/90 p-1.5 shadow-[0_12px_40px_-12px_rgba(28,25,23,.35)] backdrop-blur-md transition-all duration-300 ease-smooth sm:hidden ${
        show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-[130%] opacity-0'
      }`}
    >
      <a
        href={`mailto:${PERSONAL_INFO.email}`}
        tabIndex={show ? 0 : -1}
        className="flex min-h-[44px] flex-1 items-center justify-center rounded-full bg-accent text-[15px] font-medium text-white hover:bg-accent-dark hover:text-white"
      >
        Email me
      </a>
      <a
        href={PERSONAL_INFO.resumeUrl}
        target="_blank"
        rel="noreferrer"
        tabIndex={show ? 0 : -1}
        className="flex min-h-[44px] flex-1 items-center justify-center rounded-full border border-ink/15 text-[15px] font-medium text-ink hover:text-ink"
      >
        Résumé ↓
      </a>
    </div>
  );
}
