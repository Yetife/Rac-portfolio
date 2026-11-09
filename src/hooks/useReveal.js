import { useEffect } from 'react';

const EASE = 'cubic-bezier(.2,.7,.2,1)';

/**
 * Fades/slides in every element marked with `data-reveal="up" | "zoom"`
 * as it scrolls into view. `data-delay` (ms) staggers siblings.
 * Elements already in view on load are left alone (the page is pre-rendered).
 * Skipped entirely when the user prefers reduced motion.
 */
export default function useReveal() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const delay = Number(el.dataset.delay || 0);
          el.style.transition = `opacity 1s ${EASE} ${delay}ms, transform 1.1s ${EASE} ${delay}ms`;
          el.style.opacity = '1';
          el.style.transform = 'none';
          io.unobserve(el);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    // Measure everything first, then write styles, so the browser lays out once instead of per element.
    // Elements already on screen in the pre-rendered page stay visible so first paint isn't undone.
    const offscreen = [...document.querySelectorAll('[data-reveal]')].filter(
      (el) => el.getBoundingClientRect().top >= window.innerHeight
    );

    offscreen.forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = el.dataset.reveal === 'zoom' ? 'scale(.94) translateY(20px)' : 'translateY(32px)';
      io.observe(el);
    });

    return () => io.disconnect();
  }, []);
}
