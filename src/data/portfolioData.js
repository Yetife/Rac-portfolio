// Optimized WebP images served from /public/assets (generated from the PNG originals).
const IMG = "/assets/projects";
const kuveImg = `${IMG}/kuve.webp`;
const enumImg = `${IMG}/enum.webp`;
const semicolonImg = `${IMG}/semicolon.webp`;
const SOLAR_IMG = `${IMG}/solar.webp`;
const EMAX_HOME = `${IMG}/emax-home.webp`;
// To show a second phone, add /public/assets/projects/emax-detail.webp and append it to E-Max "phones".

export const PERSONAL_INFO = {
  firstName: "Yetunde",
  lastName: "Olasehinde",
  name: "Yetunde Olasehinde",
  initials: "Yo",
  headline: "Frontend engineer who makes products fast on real networks, from a 20 MB logistics app cut to 1.2 MB, to AI shopping flows that lifted conversion 20%.",
  intro: "4+ years shipping production React, Next.js and TypeScript. I architect checkout flows, streaming AI shopping assistants and fault-tolerant loan applications that hold up on real-world networks.",
  availability: "Available for full-time & contract roles",
  workMode: "Remote / Hybrid",
  location: "Lagos, Nigeria",
  timezone: "UTC+1",
  email: "olasehindey3@gmail.com",
  phone: "+234 704 794 3726",
  phoneHref: "tel:+2347047943726",
  whatsapp: "+234 809 639 3031",
  whatsappHref: "https://wa.me/2348096393031",
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
  { metric: "25% Faster", label: "Data Retrieval", description: "Creditwave Finance: REST API integration for loan, savings and transaction workflows." },
  { metric: "+20%", label: "Search-to-Cart Conversion", description: "Kuve: frontend latency improvements on the AI shopping assistant and discovery flows." },
  { metric: "94% Lighter", label: "Page Weight: 20 MB → 1.2 MB", description: "Emax Logistics: audited on throttled 3G/4G and cut total page weight by 94% with WebP/AVIF, responsive images and lazy loading." },
];

// Order here is the order shown in "Selected work".
// kind: "phones" renders two device screenshots; "shot" renders a browser frame.
export const PROJECTS = [
  {
    id: "emax",
    name: "E-Max",
    sub: "Logistics Partner Management System",
    category: "B2B SaaS",
    period: "2026 — Present",
    badge: "Current",
    kind: "phones",
    phones: [EMAX_HOME],
    bg: "#efd9c6",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Web + Mobile", "Multi-tenant"],
    metrics: "One shared workspace per vendor–logistics partnership, replacing WhatsApp threads for inventory, dispatch and chat.",
    demo: "",
    code: "",
    private: true,
    challenge: "Two kinds of organisation, vendors and logistics companies, work inside the same partnership with different roles and permissions. Dispatch has to follow a strict pipeline from Created to Delivered, and riders often work on weak mobile signal.",
    architecture: [
      "Leading the frontend redesign in Next.js and TypeScript with Tailwind CSS, sharing one design language across the web dashboard and the rider/dispatcher mobile app.",
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
    metrics: "Frontend latency work on the AI shopping assistant helped lift search-to-cart conversion by 20%.",
    demo: "https://getkuve.com/",
    code: "",
    challenge: "Cart, delivery location and the Lisa AI chat all shared state passed down through many component layers, so product variations, address edits and live stock checks made checkout sluggish and hard to change.",
    architecture: [
      "Architected modular Zustand store slices decoupling shopping cart, delivery location, and Lisa AI chat interactions.",
      "Engineered real-time optimistic UI updates for instant cart modification feedback before server reconciliation.",
      "Integrated the Lisa AI conversational interface with structured JSON schema streaming for real-time recommendation cards.",
    ],
    outcome: "Frontend latency improvements on discovery and the AI shopping assistant contributed to a 20% rise in search-to-cart conversion.",
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
    sub: "Learning & Talent Platform, built at Semicolon Africa",
    category: "EdTech & LMS",
    period: "Semicolon · 2022 — 2023",
    kind: "shot",
    image: enumImg,
    url: "enum.africa",
    bg: "#d8e0e8",
    tags: ["React", "TypeScript", "Redux Toolkit", "Tailwind CSS", "Autosave"],
    metrics: "Semicolon Africa's LMS for timed coding tests, quizzes and interviewer scoring, built to survive spotty connections.",
    demo: "https://enum.africa",
    code: "",
    challenge: "Managing complex nested assessment state (timed coding tests, multi-stage quizzes, and synchronous interviewer scoring) without data loss on spotty internet connections.",
    architecture: [
      "Implemented normalized Redux Toolkit slices with automatic local storage backup for resilient test recovery.",
      "Built modular, accessible UI component kit enforcing standardized design tokens across the candidate portal.",
      "Created an event-driven timer and autosave engine ensuring candidate responses sync seamlessly with minimal network overhead.",
    ],
    outcome: "Candidates can take timed assessments that recover from dropped connections without losing their answers.",
  },
  {
    id: "semicolon",
    name: "Semicolon Africa",
    sub: "Tech Talent Ecosystem",
    category: "Web Platforms",
    period: "2022 — 2023",
    kind: "shot",
    image: semicolonImg,
    url: "semicolon.africa",
    bg: "#ead8d0",
    tags: ["React", "Vue.js", "TypeScript", "Axios", "Figma to code"],
    metrics: "Event and engagement features plus production debugging contributed to 25% fewer production issues.",
    demo: "https://semicolon.africa",
    code: "",
    challenge: "My first engineering role: shipping production features across Semicolon's web platforms in both React and Vue, straight from product requirements and Figma designs.",
    architecture: [
      "Built responsive interfaces in React.js, Vue.js and TypeScript from Figma specifications.",
      "Created modular, reusable components and integrated REST APIs with Axios for dynamic features.",
      "Built the event-based calendar and engagement features, and supported production debugging.",
    ],
    outcome: "Contributed to a 15% reduction in project timelines and 25% fewer production issues.",
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
      "Audited mobile performance under throttled 3G/4G conditions, identifying uncompressed images of 2–5 MB and page loads exceeding 11 minutes on Slow 4G. Reduced the logo asset from 552 kB to 40 kB and total page weight from approximately 20 MB to 1.2 MB through WebP/AVIF conversion, responsive images, and lazy loading.",
      "Leading frontend redesign for Emax Logistics web platform — rebuilding authentication, dashboard, and workspace interfaces in React and TypeScript to improve load performance and UI consistency across devices.",
      "Redesigned LPMS shared component library, authentication screens, main dashboard, and workspace pages to improve UI consistency and maintainability.",
      "Developed frontend features for the Dispatch application, contributing to the company's broader product portfolio.",
    ],
    technologies: ["React", "TypeScript", "Component Library", "WebP / AVIF", "Lazy Loading", "Performance Auditing"],
  },
  {
    role: "Frontend Engineer",
    company: "Kuve Technologies Limited",
    period: "May 2025 — May 2026",
    location: "Lagos",
    type: "Full-Time",
    highlight: "Built discovery, AI shopping assistant and checkout flows; contributed to a 20% lift in search-to-cart conversion",
    responsibilities: [
      "Built and shipped user journeys spanning product catalogues, Lisa AI shopping assistant, and checkout using Next.js, TypeScript, and Tailwind CSS.",
      "Moved shared state from prop drilling into isolated Zustand stores, cutting unnecessary re-renders and making checkout easier to extend.",
      "Collaborated closely with AI engineers and product designers to build responsive, streaming conversational interfaces with graceful fallback handling.",
      "Took part in code reviews and frontend architecture decisions, and helped set linting/formatting standards and mobile-first guidelines.",
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
    role: "Junior Frontend Engineer",
    company: "Semicolon Africa",
    period: "January 2022 — November 2023",
    location: "Lagos, Nigeria",
    type: "Full-Time",
    highlight: "Joined from the Semicolon software engineering programme. Stayed on for my first two months at Creditwave before moving over fully.",
    responsibilities: [
      "Participated in sprint planning, code reviews, debugging, and feature delivery, contributing to a 15% reduction in project timelines.",
      "Built event-based calendar and engagement features and supported production debugging, contributing to a 25% reduction in production issues.",
      "Built and maintained web applications with React.js, Vue.js, and TypeScript, delivering responsive interfaces from product requirements and Figma specifications.",
      "Created modular, reusable components and integrated REST APIs using Axios to support dynamic application features.",
    ],
    technologies: ["React", "Vue.js", "TypeScript", "Axios", "REST APIs", "Figma"],
  },
];

// Each skill: [name, highlighted]. Highlighted = used daily in production.
export const SKILLS = [
  { category: "Core Frontend", description: "Resilient, performant, type-safe interfaces", skills: [["React (18/19)", true], ["Next.js (App Router)", true], ["TypeScript", true], ["JavaScript (ES6+)", true], ["Vue.js", false], ["HTML5 / Semantic Web", false]] },
  { category: "State & Data", description: "Predictable client state and caching", skills: [["Zustand", true], ["Redux Toolkit", true], ["RESTful APIs", true], ["Optimistic UI", true], ["React Query / RTK Query", false], ["Axios / Fetch API", false]] },
  { category: "Styling & Design Systems", description: "Pixel-perfect, accessible, responsive", skills: [["Tailwind CSS", true], ["Design Tokens", true], ["Accessibility (WCAG 2.1)", true], ["Sass / SCSS", false], ["Responsive Layouts", false], ["Micro-Animations", false]] },
  { category: "Performance & Quality", description: "Fast code that scales in production", skills: [["Core Web Vitals", true], ["Code Splitting & Bundling", true], ["Chrome DevTools Profiling", true], ["Git / CI/CD Workflows", false], ["Jest & React Testing Library", false], ["Cypress", false], ["Agile / Scrum Delivery", false]] },
];

export const ABOUT = {
  heading: "From Human Kinetics to frontend engineering.",
  body: [
    "I studied Human Kinetics at the University of Lagos, then retrained through Semicolon Africa's software engineering programme. Since then I've built LMS, fintech, e-commerce and logistics products used on real Nigerian networks, where slow 3G is the norm, not the edge case.",
    "That's why I care about performance: a fast interface is one more person who can actually use the product.",
  ],
};

// Each principle is backed by a real example from the work above (all figures are on the résumé).
export const PRINCIPLES = [
  {
    title: "Measure on the networks people actually use",
    description: "I test on throttled 3G/4G, not office Wi-Fi, because that is how most of my users arrive.",
    source: "Emax Logistics",
    proof: "A throttled audit showed pages taking over 11 minutes on Slow 4G. Converting to WebP/AVIF, serving responsive images and lazy loading took the page from about 20 MB to 1.2 MB, and the logo from 552 kB to 40 kB.",
  },
  {
    title: "Design for the visitor who doesn't know what to buy",
    description: "Fast isn't enough if people still get lost. I build entry points around the question users actually have.",
    source: "Emax Solar Store",
    proof: "Most shoppers land from Meta ads on a phone. Instead of a catalogue, the store opens with \"what are you powering?\" and shortlists a kit for a home, a shop or a street, with a chat-to-an-expert option alongside search.",
  },
  {
    title: "Give state clear boundaries",
    description: "When unrelated features share state, every change gets risky. I keep each concern in its own store.",
    source: "Kuve",
    proof: "Cart, delivery location and the Lisa AI chat were passing state through many component layers. Moving them into separate Zustand stores cut unnecessary re-renders and made checkout easier to change.",
  },
  {
    title: "Tie frontend work to a number the business cares about",
    description: "Speed and polish matter most when they move something the product team tracks.",
    source: "Kuve · Creditwave",
    proof: "Latency improvements on Kuve's discovery and AI shopping flows contributed to a 20% rise in search-to-cart conversion. At Creditwave, my REST API integration work for loan, savings and transaction flows contributed to 25% faster data retrieval.",
  },
];
