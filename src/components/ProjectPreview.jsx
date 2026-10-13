const EASE = 'cubic-bezier(.2,.7,.2,1)';

// Hides an image whose file hasn't been added yet, leaving the tinted backdrop.
const hideOnError = (e) => {
  e.currentTarget.style.visibility = 'hidden';
};

/** One stacked preview layer: either two phone screenshots or a browser-framed screenshot. */
export default function ProjectPreview({ project, active }) {
  return (
    <div
      aria-hidden={!active}
      className="absolute inset-0"
      style={{
        background: project.bg,
        opacity: active ? 1 : 0,
        transform: active ? 'scale(1)' : 'scale(1.06)',
        transition: `opacity .55s ${EASE}, transform 1s ${EASE}`,
        zIndex: active ? 2 : 1,
      }}
    >
      {project.kind === 'phones' ? (
        <div className="absolute inset-0 flex items-end justify-center gap-[4%] px-[10%]">
          {project.phones.map((src, i) => (
            <img
              key={src}
              src={src}
              alt=""
              loading="lazy"
              onError={hideOnError}
              className="h-[92%] rounded-3xl shadow-[0_30px_60px_-28px_rgba(28,25,23,.55)]"
              style={{
                transform: i === 0
                  ? `translateY(${active ? 10 : 22}%) rotate(-4deg)`
                  : `translateY(${active ? 18 : 32}%) rotate(4deg)`,
                transition: `transform ${i === 0 ? '.9s' : '1s'} ${EASE} ${i === 0 ? '0s' : '.05s'}`,
              }}
            />
          ))}
        </div>
      ) : (
        <div
          className="absolute bottom-[-4%] left-[9%] right-[-6%] top-[16%] overflow-hidden rounded-tl-[14px] bg-white shadow-[0_30px_60px_-28px_rgba(28,25,23,.45)]"
          style={{ transform: active ? 'translateY(0)' : 'translateY(24px)', transition: `transform .9s ${EASE}` }}
        >
          <div className="flex h-[30px] items-center gap-1.5 border-b border-ink/[.08] bg-[#f5f2ed] px-3">
            <span className="h-2 w-2 rounded-full bg-[#e2b4a0]" />
            <span className="h-2 w-2 rounded-full bg-[#e8d29c]" />
            <span className="h-2 w-2 rounded-full bg-[#b9cfae]" />
            <span className="ml-2.5 truncate font-mono text-[10.5px] text-stone-500">{project.url}</span>
          </div>
          <img
            src={project.image}
            alt={project.name}
            loading="lazy"
            onError={hideOnError}
            className="block h-[calc(100%-30px)] w-full object-cover object-left-top"
          />
        </div>
      )}
    </div>
  );
}
