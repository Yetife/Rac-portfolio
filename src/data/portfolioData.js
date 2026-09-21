import kuveImg from '../assets/kuve.png';
import enumImg from '../assets/enum.png';
import cowbellImg from '../assets/cowbellUI.png';
import semicolonImg from '../assets/semicolon-website.png';
import dashboardImg from '../assets/adminDashboard.png';
import profileImg from '../assets/profile_image.png';

export const PERSONAL_INFO = {
  name: "Yetunde Olasehinde",
  preferredName: "Yetife",
  title: "Frontend Engineer",
  tagline: "Architecting resilient web applications, accessible design systems, and low-latency frontend experiences.",
  location: "Lagos, Nigeria",
  availability: "Open to Full-Time & Contract Roles (Remote / Hybrid)",
  email: "olasehindey3@gmail.com",
  phone: "+234 704 794 3726",
  github: "https://github.com/Yetife",
  linkedin: "https://www.linkedin.com/in/yetunde-olasehinde",
  avatar: profileImg,
  resumeUrl: "/resume.pdf",
};

export const IMPACT_METRICS = [
  {
    id: "exp",
    metric: "4+ Years",
    label: "Production Engineering",
    description: "Building scalable web products across high-volume fintech and AI marketplace domains.",
  },
  {
    id: "perf",
    metric: "40% Faster",
    label: "Page Load & LCP Reduction",
    description: "Measurable speed boost via aggressive tree-shaking, code splitting, and memoization.",
  },
  {
    id: "state",
    metric: "Zero-Glitch",
    label: "State Architecture Migrations",
    description: "Successfully eliminated prop drilling and unnecessary re-renders with Zustand & Redux Toolkit.",
  },
  {
    id: "scale",
    metric: "100%",
    label: "Responsive & Accessible (a11y)",
    description: "WCAG-compliant interfaces that perform seamlessly across all viewports and slow networks.",
  },
];

export const TICKER_COMMANDS = [
  "git status: shipping Lisa AI shopping assistant to prod",
  "lighthouse audit: 98 Performance | 100 Accessibility",
  "refactoring: migrated checkout state -> Zustand store slices",
  "status: open for senior frontend opportunities — remote/worldwide",
  "core-web-vitals: reduced LCP from 4.2s -> 1.8s",
];

export const PROJECT_CATEGORIES = ["All", "Next.js & AI", "Fintech & LMS", "Design Systems"];

export const PROJECTS = [
  {
    id: "kuve",
    title: "Kuve — AI-Driven E-Commerce Marketplace",
    category: "Next.js & AI",
    period: "2025 — Present",
    featured: true,
    image: kuveImg,
    summary:
      "A next-generation e-commerce marketplace powered by Lisa, an intelligent AI shopping concierge guiding buyers from search to one-click checkout.",
    tags: ["Next.js 14", "TypeScript", "Zustand", "Tailwind CSS", "RESTful APIs", "AI Integration"],
    metrics: "Reduced checkout bounce by 22% & cut re-renders across dynamic product variations.",
    links: {
      demo: "https://getkuve.com/",
      code: "https://github.com/Yetife",
    },
    caseStudy: {
      challenge:
        "The legacy checkout process suffered from severe render thrashing caused by multi-level prop drilling across complex item variations, inline address edits, and live stock queries.",
      architecture: [
        "Architected modular Zustand store slices decoupling shopping cart, delivery location, and Lisa AI chat interactions.",
        "Engineered real-time optimistic UI updates for instant cart modification feedback before server reconciliation.",
        "Integrated the Lisa AI conversational interface with structured JSON schema streaming for real-time recommendation cards.",
      ],
      outcome:
        "Streamlined the checkout journey down to 3 intuitive steps, slashing unnecessary component re-renders by over 60% and delivering sub-2s time-to-interactive.",
    },
  },
  {
    id: "enum",
    title: "Enum — Enterprise Learning & Talent Platform",
    category: "Fintech & LMS",
    period: "Production Platform",
    featured: true,
    image: enumImg,
    summary:
      "Comprehensive LMS and workforce assessment infrastructure handling candidate onboarding, skill evaluations, automated grading, and interview workflows.",
    tags: ["React", "TypeScript", "Redux Toolkit", "Tailwind CSS", "Enterprise Architecture"],
    metrics: "Empowering thousands of learners and evaluators across Africa with instant assessment feedback.",
    links: {
      demo: "https://enum.africa",
      code: "https://github.com/Yetife",
    },
    caseStudy: {
      challenge:
        "Managing complex nested assessment state (timed coding tests, multi-stage quizzes, and synchronous interviewer scoring) without data loss on spotty internet connections.",
      architecture: [
        "Implemented normalized Redux Toolkit slices with automatic local storage backup for resilient test recovery.",
        "Built modular, accessible UI component kit enforcing standardized design tokens across the candidate portal.",
        "Created an event-driven timer and autosave engine ensuring candidate responses sync seamlessly with minimal network overhead.",
      ],
      outcome:
        "Successfully supported thousands of concurrent candidate assessments with zero reported data loss incidents during network interruptions.",
    },
  },
  {
    id: "creditwave",
    title: "Creditwave — Digital Lending & Wealth Engine",
    category: "Fintech & LMS",
    period: "Production Fintech",
    featured: true,
    image: dashboardImg,
    summary:
      "High-security digital banking and lending platform facilitating micro-loans, peer-to-peer lending, automated repayments, and savings vaults.",
    tags: ["React", "Redux", "Tailwind CSS", "RESTful APIs", "Chart.js", "Data Visualization"],
    metrics: "25% faster data retrieval & 30% improvement in administrative loan underwriting turnaround.",
    links: {
      demo: "https://vocal-blancmange-482f1a.netlify.app/",
      code: "https://github.com/Yetife/admin-dashboard-frontend",
    },
    caseStudy: {
      challenge:
        "Users in emerging markets frequently experienced failed multi-step loan applications due to high payload sizes and cumbersome multi-field verification forms.",
      architecture: [
        "Redesigned the multi-stage loan application into an intuitive, lightweight step-wizard with real-time client-side validation.",
        "Designed real-time financial analytics dashboards featuring interactive repayment graphs and loan health indicators.",
        "Optimized frontend bundle size by lazy loading secondary visualization libraries, dropping initial bundle size by 35%.",
      ],
      outcome:
        "Accelerated user completion rates on loan applications, increasing successful submissions by 18% in the first quarter of deployment.",
    },
  },
  {
    id: "cowbell",
    title: "Cowbell Coffee — Event & Artist Showcase",
    category: "Design Systems",
    period: "Client Project",
    featured: false,
    image: cowbellImg,
    summary:
      "Dynamic nationwide tour event portal featuring synchronized live artist schedules, real-time ticket registration, and administrative stage profiling.",
    tags: ["React", "Redux Toolkit", "Tailwind CSS", "REST APIs", "Interactive UI"],
    metrics: "Synced thousands of fan registrations with zero downtime during high-traffic campaign drops.",
    links: {
      demo: "https://cowbellcoffeestationontour.com/",
      code: "https://github.com/Yetife/cowbell-ui",
    },
    caseStudy: {
      challenge:
        "Creating an engaging, mobile-first experience capable of handling sudden traffic spikes when celebrity artists announced live tour stops.",
      architecture: [
        "Implemented edge-cached static assets with aggressive client-side caching for schedule and lineup data.",
        "Crafted custom micro-animations and responsive artist cards tailored for ultra-fast mobile scrolling.",
      ],
      outcome:
        "Delivered a 99+ mobile performance score on Lighthouse, keeping ticket registration latency below 200ms.",
    },
  },
  {
    id: "semicolon",
    title: "Semicolon Africa — Tech Talent Ecosystem",
    category: "Design Systems",
    period: "Enterprise Ecosystem",
    featured: false,
    image: semicolonImg,
    summary:
      "Flagship web portal connecting thousands of technology trainees to employers, venture labs, and professional career pathways.",
    tags: ["Vue.js", "Sass", "Tailwind CSS", "Performance Optimization"],
    metrics: "40% reduction in initial page load time through asset compression and route-based code splitting.",
    links: {
      demo: "https://semicolon.africa",
      code: "https://github.com/Yetife",
    },
    caseStudy: {
      challenge:
        "A legacy corporate web presence with bloated styles and unoptimized heavy graphics caused high bounce rates on mobile networks.",
      architecture: [
        "Modernized the architecture with modular Vue component patterns and utility-first Tailwind CSS.",
        "Enforced responsive WebP image pipelines and dynamic imports for non-critical sections.",
      ],
      outcome:
        "Cut overall page load duration by 40%, generating a significant lift in prospective student inquiries.",
    },
  },
];

export const WORK_EXPERIENCE = [
  {
    role: "Senior / Mid-Level Frontend Engineer",
    company: "Kuve Technologies Limited",
    period: "May 2025 — Present",
    location: "Lagos, Nigeria",
    type: "Full-Time",
    highlight: "Leading frontend architecture for AI-powered e-commerce & checkout workflows",
    responsibilities: [
      "Architect and ship high-performance user journeys spanning product catalogues, Lisa AI shopping assistant, and checkout using Next.js, TypeScript, and Tailwind CSS.",
      "Spearhead state architecture migration from prop-drilling to isolated Zustand stores, reducing redundant re-renders by 60%.",
      "Collaborate closely with AI engineers and product designers to build responsive, streaming conversational interfaces with graceful fallback handling.",
      "Conduct rigorous code reviews, establish linting/formatting standards, and ensure 100% adherence to mobile-first responsive guidelines.",
    ],
    technologies: ["Next.js", "TypeScript", "React", "Zustand", "Tailwind CSS", "RESTful APIs"],
  },
  // {
  //   role: "Frontend Engineer",
  //   company: "Creditwave Finance Limited",
  //   period: "Nov 2023 — Dec 2024",
  //   location: "Lagos, Nigeria",
  //   type: "Full-Time",
  //   highlight: "Engineered core fintech loan, savings, and peer-to-peer lending platforms",
  //   responsibilities: [
  //     "Engineered mobile-responsive lending workflows that reduced friction across loan calculation, KYC verification, and disbursement requests.",
  //     "Built dynamic financial dashboards with interactive charts (Chart.js / custom canvas), empowering risk officers with real-time customer repayment health metrics.",
  //     "Optimized API query layers and caching strategies, improving data retrieval speed by 25% across latency-sensitive user sessions.",
  //     "Implemented resilient form recovery mechanisms preventing customer drop-off during unstable mobile connections.",
  //   ],
  //   technologies: ["React", "Redux", "Tailwind CSS", "RESTful APIs", "Chart.js", "Data Security"],
  // },
  {
    role: "Frontend Engineer",
    company: "Semicolon Africa",
    period: "May 2022 — Dec 2023",
    location: "Lagos, Nigeria",
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
    location: "Lagos, Nigeria",
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

export const SKILLS_MATRIX = [
  {
    category: "Core Frontend Architecture",
    description: "Building resilient, performant, and type-safe user interfaces",
    skills: [
      { name: "React (18/19)", level: "Advanced", highlight: true },
      { name: "Next.js (App Router)", level: "Advanced", highlight: true },
      { name: "TypeScript", level: "Proficient", highlight: true },
      { name: "JavaScript (ES6+)", level: "Expert", highlight: true },
      { name: "Vue.js", level: "Proficient", highlight: false },
      { name: "HTML5 / Semantic Web", level: "Expert", highlight: false },
    ],
  },
  {
    category: "State Management & Data Fetching",
    description: "Designing predictable client-side state and caching strategies",
    skills: [
      { name: "Zustand", level: "Advanced", highlight: true },
      { name: "Redux Toolkit", level: "Advanced", highlight: true },
      { name: "RESTful APIs", level: "Expert", highlight: true },
      { name: "Optimistic UI", level: "Advanced", highlight: true },
      { name: "Async State / Caching", level: "Advanced", highlight: false },
      { name: "Axios / Fetch API", level: "Expert", highlight: false },
    ],
  },
  {
    category: "Styling & Design Systems",
    description: "Crafting pixel-perfect, accessible, and responsive user experiences",
    skills: [
      { name: "Tailwind CSS", level: "Expert", highlight: true },
      { name: "Design Tokens", level: "Advanced", highlight: true },
      { name: "Accessibility (WCAG 2.1)", level: "Advanced", highlight: true },
      { name: "Sass / SCSS", level: "Proficient", highlight: false },
      { name: "Responsive Layouts", level: "Expert", highlight: false },
      { name: "Micro-Animations", level: "Proficient", highlight: false },
    ],
  },
  {
    category: "Performance & Engineering Quality",
    description: "Shipping fast code that scales cleanly in production",
    skills: [
      { name: "Core Web Vitals (LCP/CLS)", level: "Advanced", highlight: true },
      { name: "Code Splitting & Bundling", level: "Advanced", highlight: true },
      { name: "Git / CI/CD Workflows", level: "Proficient", highlight: false },
      { name: "Chrome DevTools Profiling", level: "Advanced", highlight: true },
      { name: "Unit Testing (Jest)", level: "Competent", highlight: false },
      { name: "Agile / Scrum Delivery", level: "Advanced", highlight: false },
    ],
  },
];

export const PHILOSOPHIES = [
  {
    title: "Performance by Default",
    icon: "Zap",
    description:
      "A fast UI is a respectful UI. I optimize Core Web Vitals, minimize render cascades, and eliminate layout thrashing so experiences feel instantaneous.",
  },
  {
    title: "Accessibility is Non-Negotiable",
    icon: "ShieldCheck",
    description:
      "Software should be usable by everyone. Semantic HTML, keyboard accessibility, ARIA compliance, and high contrast are foundational, not an afterthought.",
  },
  {
    title: "Clean, Scalable Architecture",
    icon: "Layers",
    description:
      "Code is read far more often than it is written. I structure components into atomic, testable units with predictable state boundaries that squads can scale.",
  },
  {
    title: "Empathy & Business Outcomes",
    icon: "Target",
    description:
      "The best engineers understand product metrics and user journeys. Every line of code exists to solve a real human and business problem.",
  },
];
