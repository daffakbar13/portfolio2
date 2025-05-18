import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ExperienceInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Experiences: ExperienceInterface[] = [
  {
    id: "sociolla",
    companyName: "Sociolla",
    type: "Professional",
    category: ["Full Stack Developer", "On Site"],
    shortDescription:
      "Worked as a fullstack developer on the non-commerce team, responsible for building and maintaining internal tools and service integrations to support business operations. Collaborated closely with cross-functional teams across Indonesia, India, and Vietnam, ensuring smooth communication and delivery across time zones.",
    websiteLink: "https://www.sociolla.com",
    techStack: [
      "Node.js",
      "express.js",
      "Vue.js",
      "MongoDB",
      "React Native",
      "Javascript",
      "Typescript",
      "AWS",
      "ElasticSearch",
    ],
    startDate: new Date("2023-11-01"),
    endDate: new Date(),
    companyLogoImg: "/experience/sociolla/logo.png",
    pagesInfoArr: [
      {
        title: "Sociolla",
        description:
          "The Most Complete & Trusted Cosmetic Site #1 in Indonesia",
        imgArr: ["/experience/sociolla/sociolla.png"],
      },
      {
        title: "Lilla",
        description: "The First Ultimate App for Moms",
        imgArr: ["/experience/sociolla/lilla.png"],
      },
      {
        title: "Beauty Journal",
        description:
          "Beauty Journal is a youth media that presents informative, reliable, and relevant beauty and lifestyle content.",
        imgArr: ["/experience/sociolla/beautyjournal.png"],
      },
      {
        title: "SOCO",
        description:
          "Aplikasi yang bikin beauty journey-mu makin mudah, sat set penuhi semua kebutuhan cantikmu!",
        imgArr: ["/experience/sociolla/soco.png"],
      },
      {
        title: "SHIELD",
        description: "HRMS for Sociolla Employees",
        imgArr: ["/experience/sociolla/shield.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Worked as a fullstack developer on the non-commerce team, responsible for building and maintaining internal tools and service integrations to support business operations. Collaborated closely with cross-functional teams across Indonesia, India, and Vietnam, ensuring smooth communication and delivery across time zones.",
        "Responsibilities:",
      ],
      bullets: [
        "Developed scalable backend services using Node.js, Express.js, and MongoDB, with a focus on clean architecture and maintainability.",
        "Built dynamic frontend interfaces with Vue.js to improve user experience for internal tools and dashboards.",
        "Implemented Elasticsearch for fast data retrieval and analytics, enabling efficient querying of large-scale operational data.",
        "Managed background jobs and asynchronous workflows using RabbitMQ, improving system responsiveness and reliability.",
        "Monitored and debugged services using Kibana, identifying issues proactively and improving system observability.",
        "Collaborated with international teams to plan, develop, and deploy features, maintaining strong alignment despite geographic and cultural differences.",
      ],
    },
  },
  {
    id: "spartan",
    companyName: "Confidential",
    type: "Professional",
    category: ["Full Stack Developer", "Remote"],
    shortDescription: "Presidential Palace Infrastructure Management System.",
    techStack: ["Vue.js", "Tailwind CSS", "Laravel", "PostgreSQL"],
    startDate: new Date("2024-10-01"),
    endDate: new Date("2023-02-01"),
    companyLogoImg: "/experience/spartan/logo.svg",
    pagesInfoArr: [
      {
        title: "Spartan",
        imgArr: [
          "/experience/spartan/1.png",
          "/experience/spartan/2.png",
          "/experience/spartan/3.png",
          "/experience/spartan/4.png",
          "/experience/spartan/5.png",
          "/experience/spartan/6.png",
          "/experience/spartan/7.png",
          "/experience/spartan/8.png",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Led the development of a full-stack web application to manage the facilities and infrastructure of Indonesia’s Presidential Palaces. The platform enables real-time asset tracking, maintenance scheduling, and service request processing, helping streamline operations and enhance accountability.",
        "Worked across the full development stack using Vue.js and Tailwind CSS for building responsive, user-friendly interfaces, and Laravel with PostgreSQL for building robust RESTful APIs and handling complex data operations. Collaborated with stakeholders to gather requirements, implement features, and ensure the system met both administrative and technical needs.",
        "Responsibilities:",
      ],
      bullets: [
        "Developed and maintained frontend components using Vue.js and Tailwind CSS, ensuring responsive and accessible UI design.",
        "Built and optimized RESTful APIs using Laravel, handling data operations related to assets, maintenance, and user management.",
        "Designed and managed relational data structures using PostgreSQL, ensuring data integrity and performance.",
        "Implemented authentication, role-based access control, and secure data transactions across the system.",
        "Collaborated with stakeholders to gather requirements and translate them into technical specifications and features.",
        "Conducted code reviews, debugging, and testing to maintain high code quality and system reliability.",
        "Deployed and monitored the application in a production environment, ensuring system availability and performance.",
        "Documented technical processes and user guides to support system handover and training.",
      ],
    },
  },
  {
    id: "binus",
    companyName: "Binus University",
    type: "Professional",
    category: ["Backend", "Remote"],
    shortDescription:
      "Building a scalable backend for Sokrates Superapps, a unified platform that integrates multiple mini applications tailored for BINUS tenants, including features such as threads, articles, videos, and community engagement tools. Designed to provide a seamless digital ecosystem for users within the school network.",
    techStack: ["Node.js", "express.js", "Typescript", "PostgreSQL", "AWS"],
    startDate: new Date("2023-04-01"),
    endDate: new Date("2023-11-01"),
    companyLogoImg: "/experience/binus/logo.jpeg",
    pagesInfoArr: [
      {
        title: "Onboarding Screen",
        imgArr: ["/experience/binus/onboarding.webp"],
      },
      {
        title: "Login Page",
        imgArr: ["/experience/binus/login.webp"],
      },
      {
        title: "Home Page",
        imgArr: ["/experience/binus/homepage.webp"],
      },
      {
        title: "Community",
        imgArr: ["/experience/binus/community.webp"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Building a scalable backend for Sokrates Superapps, a unified platform that integrates multiple mini applications tailored for BINUS tenants, including features such as threads, articles, videos, and community engagement tools. Designed to provide a seamless digital ecosystem for users within the school network.",
        "Responsibilities:",
      ],
      bullets: [
        "Developed backend services using Node.js, Express.js, and TypeScript, following a microservices architecture to ensure modularity and maintainability.",
        "Designed and implemented core APIs for handling user-generated content such as threads, articles, and videos.",
        "Managed inter-service communication and centralized routing through an API Gateway, enabling secure and efficient request handling.",
        "Ensured data integrity and consistency across services, and implemented authentication, authorization, and role-based access controls.",
        "Worked closely with frontend and DevOps teams to integrate services, optimize API performance, and support CI/CD workflows.",
        "Participated in system design discussions, helping to architect scalable solutions that support multi-tenant structures and community-driven features.",
      ],
    },
  },
  {
    id: "poslive",
    companyName: "Confidential",
    type: "Professional",
    category: ["UI/UX", "Frontend", "Remote"],
    shortDescription:
      "Designed and developed a web-based Point of Sale (POS) system tailored for multi-merchant environments, enabling streamlined operations across various types of retail and F&B businesses. The system supports advanced features such as menu and product variant management, real-time stock tracking, promotions, and role-based access control.",
    techStack: ["Figma", "React", "Next.js", "Material UI"],
    startDate: new Date("2023-09-01"),
    endDate: new Date("2024-06-01"),
    companyLogoImg: "/experience/poslive/logo.jpg",
    pagesInfoArr: [
      {
        title: "Login Page",
        imgArr: ["/experience/poslive/1.png"],
      },
      {
        title: "Register Merchant",
        imgArr: [
          "/experience/poslive/14.png",
          "/experience/poslive/15.png",
          "/experience/poslive/16.png",
          "/experience/poslive/17.png",
          "/experience/poslive/18.png",
          "/experience/poslive/19.png",
        ],
      },
      {
        title: "Servings",
        imgArr: [
          "/experience/poslive/2.png",
          "/experience/poslive/3.png",
          "/experience/poslive/4.png",
        ],
      },
      {
        title: "Variants",
        imgArr: ["/experience/poslive/5.png", "/experience/poslive/6.png"],
      },
      {
        title: "Promotions",
        imgArr: ["/experience/poslive/7.png", "/experience/poslive/8.png"],
      },
      {
        title: "Stock Realtime",
        imgArr: ["/experience/poslive/9.png"],
      },
      {
        title: "Daily Stock",
        imgArr: ["/experience/poslive/10.png", "/experience/poslive/11.png"],
      },
      {
        title: "Users",
        imgArr: ["/experience/poslive/12.png"],
      },
      {
        title: "Settings",
        imgArr: ["/experience/poslive/13.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Designed and developed a web-based Point of Sale (POS) system tailored for multi-merchant environments, enabling streamlined operations across various types of retail and F&B businesses. The system supports advanced features such as menu and product variant management, real-time stock tracking, promotions, and role-based access control.",
        "Built and integrated core POS features including:",
      ],
      bullets: [
        "Multi-merchant support for managing multiple store profiles under one system.",
        "Menu management with product variants, pricing, and availability settings.",
        "Promotion engine for applying discounts and special deals.",
        "Real-time and daily stock tracking, enabling accurate inventory monitoring.",
        "Role-based user system supporting admins and cashiers with customized access and permissions.",
        "Settings module for configurable store preferences and operational parameters.",
      ],
    },
  },
  {
    id: "nabati",
    companyName: "PT Kaldu Sari Nabati Indonesia",
    type: "Professional",
    category: ["Frontend", "Remote"],
    shortDescription:
      "Developing a web-based eDOT Distribution System (EDS) designed to manage product sales and streamline logistics operations for B2B and B2C workflows. The system provides robust tools for sales teams to configure products, process orders, manage inventory deductions, and coordinate shipping to customers.",
    websiteLink: "https://eds.nabatisnack.co.id",
    techStack: ["React", "Typescript", "Redux", "Material UI", "Storybook"],
    startDate: new Date("2022-09-01"),
    endDate: new Date("2023-03-01"),
    companyLogoImg: "/experience/nabati/logo.jpg",
    pagesInfoArr: [
      {
        title: "EDot",
        imgArr: [
          "/experience/nabati/login-page.png",
          "/experience/nabati/1.png",
          "/experience/nabati/2.png",
          "/experience/nabati/3.png",
          "/experience/nabati/4.png",
          "/experience/nabati/5.png",
          "/experience/nabati/6.png",
          "/experience/nabati/7.png",
          "/experience/nabati/8.png",
          "/experience/nabati/9.png",
          "/experience/nabati/10.png",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Developing a web-based eDOT Distribution System (EDS) designed to manage product sales and streamline logistics operations for B2B and B2C workflows. The system provides robust tools for sales teams to configure products, process orders, manage inventory deductions, and coordinate shipping to customers.",
        "Responsibilities:",
      ],
      bullets: [
        "Designed and implemented responsive and accessible frontend interfaces using React, Next.js, TypeScript, and Material UI, focusing on modular, scalable component architecture.",
        "Developed dynamic configuration tools that allow sales teams to manage product variations, pricing structures, and availability rules tailored to different customer types.",
        "Built interactive interfaces for order creation, stock deduction logic, and shipment tracking, ensuring a smooth and intuitive user experience.",
        "Integrated frontend with backend services via RESTful APIs, managing asynchronous operations and error handling using React Query.",
        "Collaborated closely with product managers and backend developers to define requirements and deliver features aligned with real-world logistics and sales processes.",
        "Contributed to form validations, user access handling, and state management to support business logic such as cut stock after order confirmation and shipment scheduling.",
      ],
    },
  },
  {
    id: "bri",
    companyName: "PT Bank Rakyat Indonesia",
    type: "Professional",
    category: ["Full Stack Developer", "Remote"],
    shortDescription:
      "The company have pensionary division. We create article website for pensionary clients. The application includes information and forum about pensionary.",
    websiteLink: "https://dapenbri.co.id",
    techStack: ["React", "Node.js", "express.js", "Typescript", "PostgreSQL"],
    startDate: new Date("2020-11-01"),
    endDate: new Date("2022-08-01"),
    companyLogoImg: "/experience/bri/logo.png",
    pagesInfoArr: [
      {
        title: "Home Page",
        imgArr: ["/experience/bri/homepage.png"],
      },
      {
        title: "Profile",
        imgArr: ["/experience/bri/profile.png"],
      },
      {
        title: "Service",
        imgArr: ["/experience/bri/service.png"],
      },
      {
        title: "Contact",
        imgArr: ["/experience/bri/contact.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "The company have pensionary division. We create article website for pensionary clients. The application includes information and forum about pensionary.",
        "Core Application System based on ERP (Enterprise Resource Planning) to manage and integrate various operational activities and services at the BRI Pension Fund, which consists of membership, investment, finance, HRD and Property PPA functions.",
        "Responsibilities:",
      ],
      bullets: [
        "Initial project and manage structure code",
        "Create concept or boilerplate for architecture code",
        "Develop service website with Node Js (Typescript)",
        "Develop ui website with React Js (Typescript)",
        "Stabilization custom complicated component",
        "Deployment service and ui",
        "Fixing bugs or issues",
      ],
    },
  },
  {
    id: "kemenkumham",
    companyName: "Rupbasan Kelas I Bandung",
    type: "Professional",
    category: ["Full Stack Developer", "On Site"],
    shortDescription:
      "Developing system for guest registration. The application have configs for special guest. We have digital signature features, and diagram for maintaining guest.",
    techStack: ["React", "Next.js", "Typescript", "Node.js", "PostgreSQL"],
    startDate: new Date("2020-04-01"),
    endDate: new Date("2020-10-01"),
    companyLogoImg: "/experience/kemenkumham/logo.png",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [
        "Developing system for guest registration. The application have configs for special guest. We have digital signature features, and diagram for maintaining guest.",
        "Responsibilities:",
      ],
      bullets: [
        "Initial project and manage structure code ",
        " Create concept or bollerplate for architecture code",
        "Develop service website with Node Js (Typescript)",
        "Develop ui website with React Js (Typescript)",
        "Stabilization custom complicated component",
        "Develop digital signature",
        "Deployment on internal server",
        "Fixing bugs or issues",
      ],
    },
  },
  {
    id: "portfolio",
    companyName: "My Portfolio",
    type: "Personal Project",
    category: ["Full Stack Developer"],
    shortDescription: "A simple portfolio website",
    techStack: ["React", "Next.js", "Typescript", "Material UI"],
    startDate: new Date("2023-09-01"),
    endDate: new Date("2024-10-01"),
    companyLogoImg: "/experience/portfolio/logo.png",
    websiteLink: "https://daffakbar13.vercel.app",
    githubLink: "https://github.com/daffakbar13/portfolio",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: ["A simple portfolio website"],
      bullets: [],
    },
  },
  {
    id: "mytha-soni",
    companyName: "Wedding Invitation Website",
    type: "Personal Project",
    category: ["Full Stack Developer"],
    shortDescription: "The wedding invitation",
    techStack: ["React", "Next.js", "Typescript", "Tailwind CSS"],
    startDate: new Date("2025-04-20"),
    endDate: new Date("2025-06-18"),
    companyLogoImg: "/experience/mytha-soni/logo.png",
    websiteLink: "https://mytha-soni.vercel.app",
    githubLink: "https://github.com/daffakbar13/mytha-soni",
    pagesInfoArr: [
      {
        title: "Pages",
        imgArr: [
          "/experience/mytha-soni/logo.png",
          "/experience/mytha-soni/1.png",
          "/experience/mytha-soni/2.png",
          "/experience/mytha-soni/3.png",
          "/experience/mytha-soni/4.png",
          "/experience/mytha-soni/5.png",
          "/experience/mytha-soni/6.png",
          "/experience/mytha-soni/7.png",
          "/experience/mytha-soni/8.png",
          "/experience/mytha-soni/9.png",
          "/experience/mytha-soni/10.png",
          "/experience/mytha-soni/11.png",
          "/experience/mytha-soni/12.png",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: ["The wedding invitation"],
      bullets: [],
    },
  },
  {
    id: "illa-ahmad",
    companyName: "Wedding Invitation Website",
    type: "Personal Project",
    category: ["Full Stack Developer"],
    shortDescription: "The wedding invitation",
    techStack: ["React", "Next.js", "Typescript", "Material UI"],
    startDate: new Date("2024-12-28"),
    endDate: new Date("2025-01-05"),
    companyLogoImg: "/experience/illa-ahmad/logo.png",
    websiteLink: "https://illa-ahmad.vercel.app/Guest",
    githubLink: "https://github.com/daffakbar13/illa-ahmad",
    pagesInfoArr: [
      {
        title: "Pages",
        imgArr: [
          "/experience/illa-ahmad/logo.png",
          "/experience/illa-ahmad/1.png",
          "/experience/illa-ahmad/2.png",
          "/experience/illa-ahmad/3.png",
          "/experience/illa-ahmad/4.png",
          "/experience/illa-ahmad/5.png",
          "/experience/illa-ahmad/6.png",
          "/experience/illa-ahmad/7.png",
          "/experience/illa-ahmad/8.png",
          "/experience/illa-ahmad/9.png",
          "/experience/illa-ahmad/10.png",
          "/experience/illa-ahmad/11.png",
          "/experience/illa-ahmad/12.png",
          "/experience/illa-ahmad/13.png",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: ["The wedding invitation"],
      bullets: [],
    },
  },
  {
    id: "fitri-firman",
    companyName: "Wedding Invitation Website",
    type: "Personal Project",
    category: ["Full Stack Developer"],
    shortDescription: "The wedding invitation",
    techStack: ["React", "Next.js", "Typescript", "Material UI"],
    startDate: new Date("2024-12-28"),
    endDate: new Date("2025-01-05"),
    companyLogoImg: "/experience/fitri-firman/logo.png",
    websiteLink: "https://fitri-firman.vercel.app/Guest",
    githubLink: "https://github.com/daffakbar13/fitri-firman",
    pagesInfoArr: [
      {
        title: "Pages",
        imgArr: [
          "/experience/fitri-firman/logo.png",
          "/experience/fitri-firman/1.png",
          "/experience/fitri-firman/2.png",
          "/experience/fitri-firman/3.png",
          "/experience/fitri-firman/4.png",
          "/experience/fitri-firman/5.png",
          "/experience/fitri-firman/6.png",
          "/experience/fitri-firman/7.png",
          "/experience/fitri-firman/8.png",
          "/experience/fitri-firman/9.png",
          "/experience/fitri-firman/10.png",
          "/experience/fitri-firman/11.png",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: ["The wedding invitation"],
      bullets: [],
    },
  },
  {
    id: "wedding",
    companyName: "My Wedding Invitation Website",
    type: "Personal Project",
    category: ["Full Stack Developer"],
    shortDescription: "The wedding invitation",
    techStack: ["React", "Next.js", "Typescript", "Material UI"],
    startDate: new Date("2023-12-29"),
    endDate: new Date("2024-06-04"),
    companyLogoImg: "/experience/wedding/logo.png",
    websiteLink: "https://daffakbar13.vercel.app/Guest",
    githubLink: "https://github.com/daffakbar13/invitation",
    pagesInfoArr: [
      {
        title: "Pages",
        imgArr: [
          "/experience/wedding/logo.png",
          "/experience/wedding/1.png",
          "/experience/wedding/2.png",
          "/experience/wedding/3.png",
          "/experience/wedding/4.png",
          "/experience/wedding/5.png",
          "/experience/wedding/6.png",
          "/experience/wedding/7.png",
          "/experience/wedding/8.png",
          "/experience/wedding/9.png",
          "/experience/wedding/10.png",
          "/experience/wedding/11.png",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: ["The wedding invitation"],
      bullets: [],
    },
  },
];

export const featuredExperiences = Experiences.filter((_, i) =>
  [0, 1, 4].includes(i)
);
