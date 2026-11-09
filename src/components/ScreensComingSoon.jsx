/** Stand-in visual for a project whose screenshots haven't been added yet. */
export default function ScreensComingSoon({ project }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-8 text-center">
      <span className="font-serif text-[clamp(44px,7vw,72px)] italic leading-none tracking-[-.02em] text-ink">
        {project.name}
      </span>
      <span className="max-w-[320px] text-[14.5px] leading-snug text-ink/70">{project.sub}</span>
      <span className="mt-1 rounded-full bg-white/70 px-3 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[.06em] text-ink/70">
        Screens coming soon
      </span>
    </div>
  );
}
