/**
 * Copy for the home page. Placeholders like {years}, {Years}, {companies}
 * and {startYear} are filled from `lib/stats.ts` so the numbers stay true.
 */
export const homeConfig = {
  hero: {
    badge: "Software Engineer @ Sociolla · Jakarta, ID",
    badgeShort: "Software Engineer @ Sociolla",
    headingLabel: "Full-stack engineer who ships.",
    headingLines: ["Full-stack", "engineer who", "ships."],
    intro:
      "I design APIs, data pipelines and interfaces across Node.js, Vue, React and MongoDB — currently building internal platforms at Sociolla with teams in Indonesia, India and Vietnam.",
    introShort:
      "APIs, data pipelines and interfaces across Node.js, Vue, React and MongoDB.",
    primaryCta: { label: "View my work", shortLabel: "View work", href: "/experience" },
    secondaryCta: { label: "Get in touch", shortLabel: "Contact", href: "/contact" },
    sceneHint: "move cursor → rotate · scroll → into Skills",
    cubeFaces: ["React", "Node.js", "Vue.js", "MongoDB", "TS"],
  },
  marquee: [
    "React",
    "TypeScript",
    "Next.js",
    "Node.js",
    "Express",
    "MongoDB",
    "Vue.js",
    "Elasticsearch",
    "RabbitMQ",
    "React Native",
    "Tailwind CSS",
    "AWS",
    "GraphQL",
    "PostgreSQL",
  ],
  about: {
    eyebrow: "01 — ABOUT",
    statement:
      "{Years} years turning messy business processes into clean services and calm interfaces — from pension portals at a national bank, to a superapp backend for a university, to the internal tools behind Indonesia's largest beauty platform.",
  },
  skills: {
    eyebrow: "02 — SKILLS",
    heading: "The stack I reach for.",
    linkLabel: "All {count} skills →",
    frontend: {
      label: "FRONTEND",
      heading: "Interfaces that feel instant.",
      items: ["React", "Next.js", "Vue.js", "Typescript", "Tailwind CSS"],
    },
    backend: {
      label: "BACKEND",
      heading: "Node.js · Express · Nest.js",
      body: "Microservices, API gateways, RabbitMQ workers.",
    },
    data: {
      label: "DATA",
      items: ["MongoDB", "Elasticsearch", "PostgreSQL", "MySQL", "GraphQL"],
    },
    mobile: {
      label: "MOBILE",
      heading: "React Native",
      body: "Sociolla, SOCO and Lilla apps.",
    },
    languages: {
      label: "LANGUAGES",
      items: ["Bahasa Indonesia", "English", "العربية"],
    },
  },
  work: {
    eyebrow: "03 — SELECTED WORK",
    heading: "Products I helped build.",
    cardCta: "Case study →",
    allLabel: "See all {projects} projects →",
  },
  journey: {
    eyebrow: "04 — JOURNEY",
    heading: "From {startYear} to now.",
    linkLabel: "Full timeline →",
  },
  cta: {
    eyebrow: "05 — CONTACT",
    heading: "Let's build something that lasts.",
    secondary: { label: "Send a message", href: "/contact" },
  },
};

export const pageCopy = {
  skills: {
    eyebrow: "SKILLS · {count} TOTAL",
    heading: "Toolbox.",
    intro: "Key skills that define my professional identity. Hover a card to flip it.",
    introTouch: "Key skills that define my professional identity. Tap a card to flip it.",
  },
  experience: {
    eyebrow: "EXPERIENCE · {projects} PROJECTS",
    headingLines: ["Selected", "work."],
  },
  career: {
    eyebrow: "CAREER TIMELINE",
    headingLines: ["{Years} years,", "{companiesWord} teams."],
    intro:
      "Professional journey from government systems in Bandung to platform engineering in Jakarta.",
  },
  contact: {
    eyebrow: "CONTACT",
    headingLines: ["Let's", "connect."],
    intro: "Open to collaborations, freelance work and good conversations about systems.",
    formTitle: "Send a message",
    replyNote: "Usually replies within 1–2 days.",
    places: [
      { label: "Jakarta · home · GMT+7", color: "lime", lon: 106.8, lat: 6.2 },
      { label: "India · team", color: "violet", lon: 78, lat: -21 },
      { label: "Vietnam · team", color: "cyan", lon: 106, lat: -16 },
    ],
  },
  contributions: {
    eyebrow: "OPEN SOURCE",
    headingLines: ["Contri-", "butions."],
    intro: "Open-source contributions and community involvement.",
  },
  resume: {
    eyebrow: "RESUME",
    headingLines: ["Resume."],
    intro:
      "The PDF is on its way. Meanwhile, here is the short version — the full story lives on the career timeline.",
  },
} as const;
