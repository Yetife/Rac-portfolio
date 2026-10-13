// Optimized WebP images served from /public/assets (generated from the PNG originals).
const IMG = "/assets/projects";
const kuveImg = `${IMG}/kuve.webp`;
const enumImg = `${IMG}/enum.webp`;
const semicolonImg = `${IMG}/semicolon.webp`;
const SOLAR_IMG = `${IMG}/solar.webp`;
const EMAX_HOME = `${IMG}/emax-home.webp`;
// Not added yet — drop a WebP with this name in /public/assets/projects to show the second phone.
const EMAX_DETAIL = `${IMG}/emax-detail.webp`;

export const PERSONAL_INFO = {
  firstName: "Yetunde",
  lastName: "Olasehinde",
  name: "Yetunde Olasehinde",
  initials: "Yo",
  headline: "Frontend Engineer building fast, accessible products for fintech and AI commerce.",
  intro: "4+ years shipping production React, Next.js and TypeScript. I architect checkout flows, streaming AI shopping assistants and fault-tolerant loan applications that hold up on real-world networks.",
  availability: "Available for full-time & contract roles",
  workMode: "Remote / Hybrid",
  location: "Lagos, Nigeria",
  timezone: "UTC+1",
  email: "olasehindey3@gmail.com",
  phone: "+234 704 794 3726",
  phoneHref: "tel:+2347047943726",
  github: "https://github.com/Yetife",
  githubHandle: "@Yetife",
  linkedin: "https://www.linkedin.com/in/yetunde-olasehinde",
  linkedinHandle: "yetunde-olasehinde",
  avatar: "/assets/portrait-696.webp",
  avatarSrcSet: "/assets/portrait-400.webp 400w, /assets/portrait-696.webp 696w",
  resumeUrl: "/resume.pdf",
};

export const HERO_FACTS = [
  { label: "Based in", value: "Lagos · UTC+1" },
  { label: "Core stack", value: "React · Next · TS" },
  { label: "Currently", value: "Emax Logistics" },
];

export const IMPACT_METRICS = [
  { metric: "4+ Years", label: "Production Engineering", description: "Building scalable web products across high-volume fintech and AI marketplace domains." },
  { metric: "40% Faster", label: "Page Load & LCP Reduction", description: "Measurable speed boost via aggressive tree-shaking, code splitting, and memoization." },
  { metric: "60% Fewer", label: "Redundant Re-renders", description: "Eliminated prop drilling and unnecessary re-renders with Zustand & Redux Toolkit." },
  { metric: "WCAG 2.1", label: "Responsive & Accessible", description: "Interfaces that perform seamlessly across all viewports and slow networks." },
];

// Order here is the order shown in "Selected work".
// kind: "phones" renders two device screenshots; "shot" renders a browser frame.
export const PROJECTS = [
  {
    id: "emax",
    name: "E-Max",
    sub: "Logistics Partner Management System",
    category: "B2B SaaS",
    period: "Lead Frontend",
    badge: "Lead",
    kind: "phones",
    phones: [EMAX_HOME, EMAX_DETAIL],
    bg: "#efd9c6",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Web + Mobile", "Multi-tenant"],
    metrics: "One shared workspace per vendor–logistics partnership, replacing WhatsApp threads for inventory, dispatch and chat.",
    demo: "",
    code: "",
    private: true,
    challenge: "Two kinds of organisation, vendors and logistics companies, work inside the same partnership with different roles and permissions. Dispatch has to follow a strict pipeline from Created to Delivered, and riders often work on weak mobile signal.",
    architecture: [
      "Led the frontend in Next.js and TypeScript with Tailwind CSS, sharing one design language across the web dashboard and the rider/dispatcher mobile app.",
      "Built role-aware interfaces for Owner, Manager, Staff, Dispatcher and Storekeeper, with options filtered by organisation type.",
      "Designed the dispatch flow end to end: claim, pick up, in transit, and delivery with photo proof or a reported failure reason.",
    ],
    outcome: "Vendors and logistics partners run the whole relationship, from inventory to proof of delivery, in one place.",
  },
  {
    id: "kuve",
    name: "Kuve",
    sub: "AI-Driven E-Commerce Marketplace",
    category: "Next.js & AI",
    period: "2025 — 2026",
    kind: "shot",
    image: kuveImg,
    url: "getkuve.com",
    bg: "#dfe4da",
    tags: ["Next.js 14", "TypeScript", "Zustand", "Tailwind CSS", "RESTful APIs", "AI Integration"],
    metrics: "Reduced checkout bounce by 22% & cut re-renders across dynamic product variations.",
    demo: "https://getkuve.com/",
    code: "https://github.com/Yetife",
    challenge: "The legacy checkout process suffered from severe render thrashing caused by multi-level prop drilling across complex item variations, inline address edits, and live stock queries.",
    architecture: [
      "Architected modular Zustand store slices decoupling shopping cart, delivery location, and Lisa AI chat interactions.",
      "Engineered real-time optimistic UI updates for instant cart modification feedback before server reconciliation.",
      "Integrated the Lisa AI conversational interface with structured JSON schema streaming for real-time recommendation cards.",
    ],
    outcome: "Streamlined the checkout journey down to 3 intuitive steps, slashing unnecessary component re-renders by over 60% and delivering sub-2s time-to-interactive.",
  },
  {
    id: "solar",
    name: "Emax Solar Store",
    sub: "Solar E-Commerce for Nigeria",
    category: "E-commerce",
    period: "Live",
    kind: "shot",
    image: SOLAR_IMG,
    url: "onlinesolarstore.store",
    bg: "#f2e3c2",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Performance", "Mobile-first"],
    metrics: "Built for shoppers arriving from Meta ads on low-bandwidth 3G/4G connections.",
    demo: "https://www.onlinesolarstore.store/",
    code: "",
    challenge: "Most visitors land from Meta ads on a phone, often on slow 3G/4G. The store has to load fast and help shoppers who don't know which inverter or panel they need.",
    architecture: [
      "Built the storefront in Next.js and TypeScript with Tailwind CSS, optimized for fast loading on low-bandwidth connections.",
      "Added guided entry points (\"what are you powering?\") that shortlist a kit for a home, a shop or a street.",
      "Paired product search with a direct chat-with-an-expert option for shoppers who want advice before buying.",
    ],
    outcome: "A fast, mobile-first solar store delivering nationwide across Nigeria.",
  },
  {
    id: "enum",
    name: "Enum",
    sub: "Enterprise Learning & Talent Platform",
    category: "Fintech & LMS",
    period: "Production Platform",
    kind: "shot",
    image: enumImg,
    url: "enum.africa",
    bg: "#d8e0e8",
    tags: ["React", "TypeScript", "Redux Toolkit", "Tailwind CSS", "Enterprise Architecture"],
    metrics: "Empowering thousands of learners and evaluators across Africa with instant assessment feedback.",
    demo: "https://enum.africa",
    code: "https://github.com/Yetife",
    challenge: "Managing complex nested assessment state (timed coding tests, multi-stage quizzes, and synchronous interviewer scoring) without data loss on spotty internet connections.",
    architecture: [
      "Implemented normalized Redux Toolkit slices with automatic local storage backup for resilient test recovery.",
      "Built modular, accessible UI component kit enforcing standardized design tokens across the candidate portal.",
      "Created an event-driven timer and autosave engine ensuring candidate responses sync seamlessly with minimal network overhead.",
    ],
    outcome: "Successfully supported thousands of concurrent candidate assessments with zero reported data loss incidents during network interruptions.",
  },
  {
    id: "semicolon",
    name: "Semicolon Africa",
    sub: "Tech Talent Ecosystem",
    category: "Design Systems",
    period: "Enterprise Ecosystem",
    kind: "shot",
    image: semicolonImg,
    url: "semicolon.africa",
    bg: "#ead8d0",
    tags: ["Vue.js", "Sass", "Tailwind CSS", "Performance Optimization"],
    metrics: "40% reduction in initial page load time through asset compression and route-based code splitting.",
    demo: "https://semicolon.africa",
    code: "https://github.com/Yetife",
    challenge: "A legacy corporate web presence with bloated styles and unoptimized heavy graphics caused high bounce rates on mobile networks.",
    architecture: [
      "Modernized the architecture with modular Vue component patterns and utility-first Tailwind CSS.",
      "Enforced responsive WebP image pipelines and dynamic imports for non-critical sections.",
    ],
    outcome: "Cut overall page load duration by 40%, generating a significant lift in prospective student inquiries.",
  },
];

export const EXPERIENCE = [
  {
    role: "Frontend Engineer",
    company: "Emax Logistics",
    period: "August 2026 — Present",
    location: "Lagos, Nigeria",
    type: "Full-Time",
    highlight: "",
    responsibilities: [
      "Leading frontend redesign for Emax Logistics web platform — rebuilding authentication, dashboard, and workspace interfaces in React and TypeScript to improve load performance and UI consistency across devices.",
      "Redesigned LPMS shared component library, authentication screens, main dashboard, and workspace pages to improve UI consistency and maintainability.",
      "Developed frontend features for the Dispatch application, contributing to the company's broader product portfolio.",
      "Audited mobile performance under throttled 3G/4G conditions, identifying uncompressed images of 2–5 MB and page loads exceeding 11 minutes on Slow 4G. Reduced the logo asset from 552 kB to 40 kB and total page weight from approximately 20 MB to 1.2 MB through WebP/AVIF conversion, responsive images, and lazy loading.",
    ],
    technologies: ["React", "TypeScript", "Component Library", "WebP / AVIF", "Lazy Loading", "Performance Auditing"],
  },
  {
    role: "Frontend Engineer",
    company: "Kuve Technologies Limited",
    period: "May 2025 — May 2026",
    location: "Lagos",
    type: "Full-Time",
    highlight: "Led frontend architecture for AI-powered e-commerce & checkout workflows",
    responsibilities: [
      "Architected and shipped high-performance user journeys spanning product catalogues, Lisa AI shopping assistant, and checkout using Next.js, TypeScript, and Tailwind CSS.",
      "Spearheaded state architecture migration from prop-drilling to isolated Zustand stores, reducing redundant re-renders by 60%.",
      "Collaborated closely with AI engineers and product designers to build responsive, streaming conversational interfaces with graceful fallback handling.",
      "Conducted rigorous code reviews, established linting/formatting standards, and ensured 100% adherence to mobile-first responsive guidelines.",
    ],
    technologies: ["Next.js", "TypeScript", "React", "Zustand", "Tailwind CSS", "RESTful APIs"],
  },
  {
    role: "Frontend Engineer",
    company: "Creditwave Finance Limited",
    period: "October 2023 — December 2024",
    location: "Lagos, Nigeria",
    type: "Full-Time",
    highlight: "",
    responsibilities: [
      "Built responsive fintech interfaces supporting onboarding, loan processing, loan top-ups and restructuring, savings, and peer-to-peer transaction workflows.",
      "Integrated REST APIs for financial transactions and customer-data updates, contributing to a 25% improvement in data retrieval speed.",
      "Developed reusable components and data-driven dashboards for loan applications, approvals, savings, and transaction monitoring.",
      "Worked with backend engineers, QA, designers, and product stakeholders through Agile development, testing, debugging, and release cycles.",
      "Focused on clear data presentation and reliable financial workflows across responsive user interfaces.",
    ],
    technologies: ["React", "REST APIs", "Dashboards", "Agile"],
  },
  {
    role: "Frontend Engineer",
    company: "Semicolon Africa",
    period: "May 2022 — Dec 2023",
    location: "Lagos",
    type: "Full-Time",
    highlight: "Core contributor across web platforms & mentor to junior developer cohorts",
    responsibilities: [
      "Built, maintained, and optimized production web applications using Vue.js, React, and TypeScript.",
      "Improved Core Web Vitals and shaved 40% off average page load times through lazy loading, asset optimization, and refactored bundle splits.",
      "Mentored junior engineers through pair programming, debugging workshops, and frontend architectural best practices.",
      "Designed and documented modular UI component microservices, accelerating engineering sprint velocity across teams.",
    ],
    technologies: ["Vue.js", "React", "TypeScript", "Redux", "Tailwind CSS", "Sass"],
  },
  {
    role: "Frontend Developer Intern",
    company: "Semicolon Africa",
    period: "Jan 2022 — Apr 2022",
    location: "Lagos",
    type: "Internship",
    highlight: "Component development and engaging interaction design",
    responsibilities: [
      "Developed reusable UI components using React and Material UI, standardizing design consistency across customer touchpoints.",
      "Shipped an interactive, event-driven calendar interface that increased user interaction with educational campaigns.",
      "Participated actively in daily Agile standups, two-week sprint planning, and automated testing.",
    ],
    technologies: ["React", "JavaScript", "Material UI", "SCSS", "REST APIs"],
  },
];

// Each skill: [name, level, highlighted]
export const SKILLS = [
  { category: "Core Frontend", description: "Resilient, performant, type-safe interfaces", skills: [["React (18/19)", "Advanced", true], ["Next.js (App Router)", "Advanced", true], ["TypeScript", "Proficient", true], ["JavaScript (ES6+)", "Expert", true], ["Vue.js", "Proficient", false], ["HTML5 / Semantic Web", "Expert", false]] },
  { category: "State & Data", description: "Predictable client state and caching", skills: [["Zustand", "Advanced", true], ["Redux Toolkit", "Advanced", true], ["RESTful APIs", "Expert", true], ["Optimistic UI", "Advanced", true], ["Async State / Caching", "Advanced", false], ["Axios / Fetch API", "Expert", false]] },
  { category: "Styling & Design Systems", description: "Pixel-perfect, accessible, responsive", skills: [["Tailwind CSS", "Expert", true], ["Design Tokens", "Advanced", true], ["Accessibility (WCAG 2.1)", "Advanced", true], ["Sass / SCSS", "Proficient", false], ["Responsive Layouts", "Expert", false], ["Micro-Animations", "Proficient", false]] },
  { category: "Performance & Quality", description: "Fast code that scales in production", skills: [["Core Web Vitals", "Advanced", true], ["Code Splitting & Bundling", "Advanced", true], ["Chrome DevTools Profiling", "Advanced", true], ["Git / CI/CD Workflows", "Proficient", false], ["Unit Testing (Jest)", "Competent", false], ["Agile / Scrum Delivery", "Advanced", false]] },
];

export const PRINCIPLES = [
  { title: "Performance by Default", description: "A fast UI is a respectful UI. I optimize Core Web Vitals, minimize render cascades, and eliminate layout thrashing so experiences feel instantaneous." },
  { title: "Accessibility is Non-Negotiable", description: "Software should be usable by everyone. Semantic HTML, keyboard accessibility, ARIA compliance, and high contrast are foundational, not an afterthought." },
  { title: "Clean, Scalable Architecture", description: "Code is read far more often than it is written. I structure components into atomic, testable units with predictable state boundaries that squads can scale." },
  { title: "Empathy & Business Outcomes", description: "The best engineers understand product metrics and user journeys. Every line of code exists to solve a real human and business problem." },
];
