import React, { useState, useEffect, useRef } from "react";
import {
    Github,
    Linkedin,
    Mail,
    Phone,
    MapPin,
    ArrowUpRight,
    Menu,
    X,
    Download,
    ArrowUp,
} from "lucide-react";
import image from '../assets/profile_image.png'

/* ---------------------------------------------------------------------- */
/*  Tokens                                                                */
/* ---------------------------------------------------------------------- */
const T = {
    bg: "#0E1813",
    bgElevated: "#152019",
    ink: "#ECE6D6",
    inkDim: "#9FAD9A",
    inkFaint: "#6C796C",
    accent: "#D98B4C",
    accent2: "#7FA388",
    line: "rgba(236,230,214,0.10)",
    lineStrong: "rgba(236,230,214,0.22)",
};

const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------------------------------------------------------------------- */
/*  Scroll reveal hook + wrapper                                          */
/* ---------------------------------------------------------------------- */
function useReveal() {
    const ref = useRef(null);
    const [visible, setVisible] = useState(prefersReducedMotion);
    useEffect(() => {
        if (prefersReducedMotion) return;
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisible(true);
                        obs.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);
    return [ref, visible];
}

function Reveal({ children, delay = 0, className = "" }) {
    const [ref, visible] = useReveal();
    return (
        <div
            ref={ref}
            className={className}
            style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0px)" : "translateY(22px)",
                transition: `opacity 0.7s cubic-bezier(.2,.7,.2,1) ${delay}s, transform 0.7s cubic-bezier(.2,.7,.2,1) ${delay}s`,
            }}
        >
            {children}
        </div>
    );
}

/* ---------------------------------------------------------------------- */
/*  Terminal ticker — the signature element                               */
/* ---------------------------------------------------------------------- */
const TICKER_LINES = [
    "optimizing checkout flow — LCP 4.2s -> 1.8s",
    "shipping the Lisa AI shopping assistant to prod",
    "migrating checkout state: Context -> Zustand",
    "status: open to frontend roles — Lagos / remote",
];

function Ticker() {
    const [lineIdx, setLineIdx] = useState(0);
    const [text, setText] = useState("");
    const [phase, setPhase] = useState("typing");

    useEffect(() => {
        if (prefersReducedMotion) {
            setText(TICKER_LINES[0]);
            return;
        }
        const current = TICKER_LINES[lineIdx];
        let timeout;
        if (phase === "typing") {
            if (text.length < current.length) {
                timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 32);
            } else {
                timeout = setTimeout(() => setPhase("pausing"), 1600);
            }
        } else if (phase === "pausing") {
            timeout = setTimeout(() => setPhase("deleting"), 500);
        } else if (phase === "deleting") {
            if (text.length > 0) {
                timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), 16);
            } else {
                setPhase("typing");
                setLineIdx((lineIdx + 1) % TICKER_LINES.length);
            }
        }
        return () => clearTimeout(timeout);
    }, [text, phase, lineIdx]);

    return (
        <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs sm:text-sm"
            style={{
                border: `1px solid ${T.line}`,
                background: T.bgElevated,
                color: T.accent2,
                fontFamily: "'IBM Plex Mono', monospace",
            }}
        >
            <span style={{ color: T.accent }}>$</span>
            <span>{text}</span>
            <span
                style={{
                    display: "inline-block",
                    width: "7px",
                    height: "1em",
                    background: T.accent2,
                    animation: prefersReducedMotion ? "none" : "blink 1s steps(1) infinite",
                }}
            />
        </div>
    );
}

/* ---------------------------------------------------------------------- */
/*  Data                                                                   */
/* ---------------------------------------------------------------------- */
const NAV_ITEMS = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "work", label: "Work" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
];

const SKILL_GROUPS = [
    { label: "Languages", items: ["JavaScript (ES6+)", "TypeScript"] },
    {
        label: "Frameworks & Libraries",
        items: ["React.js", "Next.js", "Vue.js", "Redux", "Zustand"],
    },
    { label: "Styling & UI", items: ["Tailwind CSS", "Sass", "Material UI", "CSS3"] },
    {
        label: "Tooling & Practice",
        items: [
            "Git",
            "REST APIs",
            "Performance Optimization",
            "Accessibility (a11y)",
            "Agile / Scrum",
            "Responsive Design",
        ],
    },
];

const EXPERIENCE = [
    {
        role: "Frontend Engineer",
        company: "Kuve Technologies Limited",
        period: "May 2025 — Present",
        points: [
            "Built sleek, high-performance UIs across product listings, checkout, and onboarding with Next.js, TypeScript, and Tailwind CSS.",
            "Partnered with cross-functional teams to ship AI-powered product recommendations end to end.",
            "Integrated RESTful APIs for real-time marketplace updates across buyer and seller experiences.",
        ],
        tags: ["Next.js", "TypeScript", "Zustand", "REST APIs"],
    },
    {
        role: "Frontend Engineer",
        company: "Creditwave Finance Limited",
        period: "Nov 2023 — Dec 2024",
        points: [
            "Engineered a mobile-responsive loan application covering loans, savings, and peer-to-peer lending.",
            "Improved engagement and task completion by tightening up flows across core financial journeys.",
        ],
        tags: ["React.js", "Tailwind CSS", "Fintech", "Redux", "REST APIs"],
    },
    {
        role: "Frontend Engineer",
        company: "Semicolon Africa",
        period: "May 2022 — Dec 2023",
        points: [
            "Built and maintained production apps with Vue.js, React.js, and TypeScript.",
            "Cut page load times by 40% through targeted performance optimization.",
            "Mentored junior engineers and helped establish frontend best practices used team-wide.",
            "Developed modular front-end microservices with React, Material UI, and Tailwind CSS, reducing debugging time.",
        ],
        tags: ["Vue.js", "React.js", "TypeScript", "Redux", "REST APIs"],
    },
    {
        role: "Frontend Developer Intern",
        company: "Semicolon Africa",
        period: "Jan 2022 — Apr 2022",
        points: [
            "Built and optimized interfaces with React.js, Redux, and Material UI.",
            "Shipped an interactive, event-based calendar feature that lifted engagement with product ads.",
            "Built reusable component libraries to speed up the team's day-to-day delivery.",
        ],
        tags: ["React.js", "Redux", "Material UI", "REST APIs"],
    },
];

const PROJECTS = [
    {
        title: "Kuve — AI-Powered Marketplace",
        period: "2025 — Present",
        summary:
            "A marketplace where buyers shop with the help of Lisa, an AI shopping assistant — from discovery through checkout.",
        points: [
            "Designed the Lisa AI assistant UI: variation selection, checkout summaries, and inline delivery editing.",
            "Migrated checkout state from prop-drilling to Zustand, cutting unnecessary re-renders.",
            "Wired real-time inventory and order updates through REST APIs across buyer and seller dashboards.",
        ],
        stack: ["Next.js", "TypeScript", "Zustand", "Tailwind CSS"],
        links: { code: "#", demo: "https://getkuve.com/" },
    },
    {
        title: "Enum — Learning Management Platform",
        period: "Personal / Collaborative",
        summary:
            "A fully responsive LMS covering applications, assessments, recruitment, and interview management.",
        points: [
            "Built the application and assessment management systems end to end.",
            "Collaborated with other frontend engineers on a shared component system.",
        ],
        stack: ["React", "TypeScript", "Redux", "Tailwind CSS"],
        links: { code: "#", demo: "https://enumverse.com/" },
    },
    {
        title: "Cowbell Coffee — Event Platform",
        period: "Client project",
        summary:
            "An event management system for Cowbell Coffee, with an admin dashboard and a performing-artist showcase.",
        points: [
            "Built the event management and admin profiling pages.",
            "Integrated APIs to keep countdowns, line-ups, and registrations in sync.",
        ],
        stack: ["React", "Redux Toolkit", "Tailwind CSS", "REST APIs"],
        links: { code: "https://github.com/Yetife/cowbell-ui", demo: "https://cowbellcoffeestationontour.com/" },
    },
    {
        title: "Semicolon Africa — Website",
        period: "Semicolon Africa",
        summary:
            "A platform connecting learners to in-demand skills, training, and employers across Africa.",
        points: [
            "Built core marketing and program pages with a focus on responsiveness and load performance.",
        ],
        stack: ["Vue.js", "Sass", "Tailwind CSS"],
        links: { code: "#", demo: "https://semicolon.africa/" },
    },
];

/* ---------------------------------------------------------------------- */
/*  Small building blocks                                                 */
/* ---------------------------------------------------------------------- */
function SectionLabel({ children }) {
    return (
        <div
            className="mb-3 text-xs uppercase tracking-[0.18em]"
            style={{ color: T.accent2, fontFamily: "'IBM Plex Mono', monospace" }}
        >
            {children}
        </div>
    );
}

function Pill({ children }) {
    return (
        <span
            className="rounded-full px-3 py-1 text-xs"
            style={{
                border: `1px solid ${T.line}`,
                color: T.inkDim,
                fontFamily: "'IBM Plex Mono', monospace",
            }}
        >
      {children}
    </span>
    );
}


function HeroPortrait() {
    return (
        <div
            className="relative rounded-2xl overflow-hidden aspect-[4/5]"
            style={{ border: `1px solid ${T.line}`, background: T.bgElevated }}
        >
            <img
                src={image}
                alt="Portrait of Yetunde Olasehinde"
                className="w-full h-full object-cover"
            />
        </div>
    );
}

/* ---------------------------------------------------------------------- */
/*  Main component                                                        */
/* ---------------------------------------------------------------------- */
export default function Portfolio() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [showTop, setShowTop] = useState(false);

    useEffect(() => {
        document.documentElement.style.scrollBehavior = "smooth";
        const onScroll = () => setShowTop(window.scrollY > 700);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const goTo = (id) => {
        setMobileOpen(false);
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth" });
    };

    return (
        <div style={{ background: T.bg, color: T.ink, minHeight: "100vh" }}>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300..700&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap');
        * { box-sizing: border-box; }
        body { margin: 0; }
        .ph-serif { font-family: 'Fraunces', serif; }
        .ph-body { font-family: 'Inter', sans-serif; }
        .ph-mono { font-family: 'IBM Plex Mono', monospace; }
        @keyframes blink { 0%, 50% { opacity: 1; } 50.01%, 100% { opacity: 0; } }
        a { text-decoration: none; }
        ::selection { background: ${T.accent}; color: ${T.bg}; }
        .nav-link { position: relative; color: ${T.inkDim}; transition: color .25s ease; }
        .nav-link:hover { color: ${T.ink}; }
        .nav-link::after {
          content: ''; position: absolute; left: 0; bottom: -6px; height: 1px; width: 0%;
          background: ${T.accent}; transition: width .25s ease;
        }
        .nav-link:hover::after { width: 100%; }
        .card-hover { transition: transform .35s cubic-bezier(.2,.7,.2,1), border-color .35s ease, background .35s ease; }
        .card-hover:hover { transform: translateY(-4px); border-color: ${T.lineStrong}; background: ${T.bgElevated}; }
        .icon-btn { transition: transform .25s ease, color .25s ease, border-color .25s ease; }
        .icon-btn:hover { transform: translateY(-2px); color: ${T.accent}; border-color: ${T.accent}; }
        .btn-primary { transition: transform .25s ease, box-shadow .25s ease; }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 10px 30px -10px ${T.accent}; }
        :focus-visible { outline: 2px solid ${T.accent}; outline-offset: 3px; }
      `}</style>

            {/* ---------- Desktop side rail ---------- */}
            <aside
                className="hidden md:flex fixed left-0 top-0 h-screen w-24 flex-col items-center justify-between py-8 z-40"
                style={{ borderRight: `1px solid ${T.line}` }}
            >
                <a
                    href="#top"
                    onClick={(e) => {
                        e.preventDefault();
                        goTo("top");
                    }}
                    className="ph-serif text-lg"
                    style={{ color: T.accent }}
                >
                    YO
                </a>
                <nav className="flex flex-col items-center gap-6">
                    {NAV_ITEMS.map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            onClick={(e) => {
                                e.preventDefault();
                                goTo(item.id);
                            }}
                            className="nav-link ph-mono text-[11px] uppercase tracking-wider"
                            style={{ writingMode: "vertical-rl" }}
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>
                <div className="flex flex-col items-center gap-4">
                    <a
                        href="https://github.com/Yetife"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-btn rounded-full p-2"
                        style={{ border: `1px solid ${T.line}`, color: T.inkDim }}
                        aria-label="GitHub"
                    >
                        <Github size={15} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/yetunde-olasehinde"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-btn rounded-full p-2"
                        style={{ border: `1px solid ${T.line}`, color: T.inkDim }}
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={15} />
                    </a>
                </div>
            </aside>

            {/* ---------- Mobile top bar ---------- */}
            <div
                className="md:hidden fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-5 py-4"
                style={{ background: T.bg, borderBottom: `1px solid ${T.line}` }}
            >
        <span className="ph-serif text-lg" style={{ color: T.accent }}>
          Yetunde Olasehinde
        </span>
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                    style={{ color: T.ink }}
                >
                    {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>
            {mobileOpen && (
                <div
                    className="md:hidden fixed inset-0 z-30 flex flex-col items-center justify-center gap-8"
                    style={{ background: T.bg }}
                >
                    {NAV_ITEMS.map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            onClick={(e) => {
                                e.preventDefault();
                                goTo(item.id);
                            }}
                            className="ph-mono text-sm uppercase tracking-widest"
                            style={{ color: T.ink }}
                        >
                            {item.label}
                        </a>
                    ))}
                    <div className="flex gap-5 mt-4">
                        <a href="https://github.com/Yetife" target="_blank" rel="noreferrer" style={{ color: T.inkDim }}>
                            <Github size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/yetunde-olasehinde" target="_blank" rel="noreferrer" style={{ color: T.inkDim }}>
                            <Linkedin size={20} />
                        </a>
                    </div>
                </div>
            )}

            {/* ---------- Main content ---------- */}
            <main className="md:ml-24 px-6 sm:px-10 lg:px-16 pt-8 md:pt-1">
                {/* HERO */}
                <section
                    id="top"
                    className="min-h-[88vh] grid lg:grid-cols-[1fr,400px] items-center"
                >
                    <div className="max-w-2xl">
                        <Reveal>
                            <div
                                className="ph-mono text-xs uppercase tracking-[0.2em] mb-6"
                                style={{ color: T.accent }}
                            >
                                Frontend Engineer
                            </div>
                        </Reveal>
                        <Reveal delay={0.08}>
                            <h1 className="ph-serif font-light leading-[1.05] text-[12vw] sm:text-6xl lg:text-7xl mb-6">
                                Yetunde Olasehinde
                            </h1>
                        </Reveal>
                        <Reveal delay={0.16}>
                            <p
                                className="ph-body text-base sm:text-lg max-w-xl mb-8"
                                style={{ color: T.inkDim }}
                            >
                                I build fast, accessible interfaces for fintech and marketplace
                                products — from loan flows and checkout, to AI-powered shopping
                                experiences. 4+ years turning complex product requirements into
                                interfaces that feel simple.
                            </p>
                        </Reveal>
                        <Reveal delay={0.24}>
                            <div className="mb-8">
                                <Ticker />
                            </div>
                        </Reveal>
                        <Reveal delay={0.32}>
                            <div className="flex flex-wrap items-center gap-4">
                                <a
                                    href="#work"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        goTo("work");
                                    }}
                                    className="btn-primary inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium"
                                    style={{ background: T.accent, color: T.bg }}
                                >
                                    View selected work <ArrowUpRight size={16} />
                                </a>
                                <a
                                    href="/resume.pdf" download="Yetunde_Olasehinde_CV.pdf"
                                    className="icon-btn inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm"
                                    style={{ border: `1px solid ${T.line}`, color: T.ink }}
                                >
                                    Download résumé <Download size={15} />
                                </a>
                            </div>
                        </Reveal>
                    </div>

                    <Reveal delay={0.2} className="hidden lg:block">
                        <HeroPortrait />
                    </Reveal>
                </section>

                {/* ABOUT */}
                <section id="about" className="py-4 max-w-3xl scroll-mt-24">
                    <Reveal>
                        <SectionLabel>01 — About</SectionLabel>
                    </Reveal>
                    <Reveal delay={0.05}>
                        <h2 className="ph-serif text-3xl sm:text-4xl mb-6">
                            Four years, two industries, one obsession with the details.
                        </h2>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <div className="ph-body space-y-4" style={{ color: T.inkDim }}>
                            <p>
                                My career has run through fintech and marketplace products —
                                places where a slow screen or a confusing form has a real
                                cost. At Creditwave, that meant rebuilding loan and lending
                                flows people could trust on a slow connection. At Kuve, it
                                means shipping an AI shopping assistant that has to feel
                                instant from product discovery to checkout.
                            </p>
                            <p>
                                I work mainly in React, Next.js, and TypeScript, with Tailwind
                                CSS for everything visual. Along the way I've cut page load
                                times by 40% on a production app, migrated checkout state
                                from prop-drilling to Zustand, and mentored junior engineers
                                into independent contributors.
                            </p>
                            <p>
                                I care about clean, typed code, interfaces that hold up for
                                everyone — including people on screen readers and slow
                                networks — and shipping things that are actually finished,
                                not just functional.
                            </p>
                        </div>
                    </Reveal>
                </section>

                {/* SKILLS */}
                <section id="skills" className="py-24 max-w-4xl scroll-mt-24">
                    <Reveal>
                        <SectionLabel>02 — Skills</SectionLabel>
                    </Reveal>
                    <Reveal delay={0.05}>
                        <h2 className="ph-serif text-3xl sm:text-4xl mb-10">What I build with.</h2>
                    </Reveal>
                    <div className="grid sm:grid-cols-2 gap-10">
                        {SKILL_GROUPS.map((group, i) => (
                            <Reveal key={group.label} delay={0.05 * i}>
                                <div>
                                    <div
                                        className="ph-mono text-xs uppercase tracking-wider mb-3"
                                        style={{ color: T.accent2 }}
                                    >
                                        {group.label}
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {group.items.map((item) => (
                                            <Pill key={item}>{item}</Pill>
                                        ))}
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </section>

                {/* WORK */}
                <section id="work" className="py-4 max-w-5xl scroll-mt-24">
                    <Reveal>
                        <SectionLabel>03 — Selected work</SectionLabel>
                    </Reveal>
                    <Reveal delay={0.05}>
                        <h2 className="ph-serif text-3xl sm:text-4xl mb-10">
                            A few projects worth a closer look.
                        </h2>
                    </Reveal>
                    <div className="grid sm:grid-cols-2 gap-6">
                        {PROJECTS.map((p, i) => (
                            <Reveal key={p.title} delay={0.06 * i}>
                                <div
                                    className="card-hover rounded-2xl p-6 sm:p-7 h-full flex flex-col"
                                    style={{ border: `1px solid ${T.line}` }}
                                >
                                    <div
                                        className="ph-mono text-xs mb-3"
                                        style={{ color: T.inkFaint }}
                                    >
                                        {p.period}
                                    </div>
                                    <h3 className="ph-serif text-xl sm:text-2xl mb-3">{p.title}</h3>
                                    <p className="ph-body text-sm mb-4" style={{ color: T.inkDim }}>
                                        {p.summary}
                                    </p>
                                    <ul
                                        className="ph-body text-sm space-y-2 mb-5"
                                        style={{ color: T.inkDim }}
                                    >
                                        {p.points.map((pt, idx) => (
                                            <li key={idx} className="flex gap-2">
                                                <span style={{ color: T.accent }}>—</span>
                                                <span>{pt}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="flex flex-wrap gap-2 mb-5 mt-auto">
                                        {p.stack.map((s) => (
                                            <Pill key={s}>{s}</Pill>
                                        ))}
                                    </div>
                                    <div className="flex gap-4">
                                        <a
                                            href={p.links.code}
                                            className="ph-mono text-xs inline-flex items-center gap-1"
                                            style={{ color: T.ink }}
                                        >
                                            Code <ArrowUpRight size={12} />
                                        </a>
                                        <a
                                            href={p.links.demo}
                                            className="ph-mono text-xs inline-flex items-center gap-1"
                                            style={{ color: T.ink }}
                                        >
                                            Live demo <ArrowUpRight size={12} />
                                        </a>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </section>

                {/* EXPERIENCE */}
                <section id="experience" className="py-24 max-w-4xl scroll-mt-24">
                    <Reveal>
                        <SectionLabel>04 — Experience</SectionLabel>
                    </Reveal>
                    <Reveal delay={0.05}>
                        <h2 className="ph-serif text-3xl sm:text-4xl mb-10">My professional journey.</h2>
                    </Reveal>
                    <div className="relative pl-8" style={{ borderLeft: `1px solid ${T.line}` }}>
                        {EXPERIENCE.map((job, i) => (
                            <Reveal key={i} delay={0.06 * i}>
                                <div className="relative pb-8">
                  <span
                      className="absolute -left-[37px] top-1.5 w-2.5 h-2.5 rounded-full"
                      style={{ background: T.accent }}
                  />
                                    <div
                                        className="ph-mono text-xs mb-2"
                                        style={{ color: T.inkFaint }}
                                    >
                                        {job.period}
                                    </div>
                                    <h3 className="ph-serif text-xl mb-1">{job.role}</h3>
                                    <div className="text-sm mb-3" style={{ color: T.accent2 }}>
                                        {job.company}
                                    </div>
                                    <ul className="ph-body text-sm space-y-2 mb-4" style={{ color: T.inkDim }}>
                                        {job.points.map((pt, idx) => (
                                            <li key={idx} className="flex gap-2">
                                                <span style={{ color: T.accent }}>—</span>
                                                <span>{pt}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="flex flex-wrap gap-2">
                                        {job.tags.map((t) => (
                                            <Pill key={t}>{t}</Pill>
                                        ))}
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </section>

                {/* CONTACT */}
                <section id="contact" className="py-4 max-w-3xl scroll-mt-24">
                    <Reveal>
                        <SectionLabel>05 — Contact</SectionLabel>
                    </Reveal>
                    <Reveal delay={0.05}>
                        <h2 className="ph-serif text-3xl sm:text-4xl mb-6">Let's work together.</h2>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <p className="ph-body mb-10 max-w-xl" style={{ color: T.inkDim }}>
                            I'm actively looking for frontend roles — full-time,
                            contract, or freelance, in Lagos or fully remote. If that's
                            something you're hiring for, I'd love to hear from you.
                        </p>
                    </Reveal>
                    <Reveal delay={0.15}>
                        <div className="flex flex-col gap-4 mb-10">
                            <a
                                href="mailto:olasehindey3@gmail.com"
                                className="icon-btn inline-flex items-center gap-3 text-sm"
                                style={{ color: T.ink }}
                            >
                                <Mail size={16} style={{ color: T.accent }} /> olasehindey3@gmail.com
                            </a>
                            <a
                                href="tel:+2347047943726"
                                className="icon-btn inline-flex items-center gap-3 text-sm"
                                style={{ color: T.ink }}
                            >
                                <Phone size={16} style={{ color: T.accent }} /> +234 704 794 3726
                            </a>
                            <div className="inline-flex items-center gap-3 text-sm" style={{ color: T.ink }}>
                                <MapPin size={16} style={{ color: T.accent }} /> Lagos, Nigeria — open to remote
                            </div>
                        </div>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <div className="flex gap-4">
                            <a
                                href="https://github.com/Yetife"
                                target="_blank"
                                rel="noreferrer"
                                className="icon-btn rounded-full p-3"
                                style={{ border: `1px solid ${T.line}`, color: T.inkDim }}
                                aria-label="GitHub"
                            >
                                <Github size={18} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/yetunde-olasehinde"
                                target="_blank"
                                rel="noreferrer"
                                className="icon-btn rounded-full p-3"
                                style={{ border: `1px solid ${T.line}`, color: T.inkDim }}
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={18} />
                            </a>
                        </div>
                    </Reveal>
                </section>

                <footer
                    className="py-10 ph-mono text-xs flex flex-col sm:flex-row justify-between gap-2"
                    style={{ color: T.inkFaint, borderTop: `1px solid ${T.line}` }}
                >
                    <span>Yetunde Olasehinde — Frontend Engineer</span>
                    {/*<span>Built with React &amp; Tailwind CSS · Lagos, Nigeria</span>*/}
                </footer>
            </main>

            {showTop && (
                <button
                    onClick={() => goTo("top")}
                    className="icon-btn fixed bottom-6 right-6 z-40 rounded-full p-3"
                    style={{ background: T.bgElevated, border: `1px solid ${T.line}`, color: T.ink }}
                    aria-label="Back to top"
                >
                    <ArrowUp size={18} />
                </button>
            )}
        </div>
    );
}