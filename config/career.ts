import { ValidSkills } from "./constants";

export interface CareerExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const careerExperiences: CareerExperienceInterface[] = [
  {
    id: "sociolla",
    position: "Software Engineer",
    company: "PT Sociolla Ritel Indonesia",
    location: "Jakarta, Indonesia",
    startDate: new Date("2023-11-01"),
    endDate: "Present",
    description: [
      "Developed scalable backend services using Node.js, Express.js, and MongoDB, with a focus on clean architecture and maintainability.",
      "Built dynamic frontend interfaces with Vue.js to improve user experience for internal tools and dashboards.",
      "Implemented Elasticsearch for fast data retrieval and analytics, enabling efficient querying of large-scale operational data.",
      "Managed background jobs and asynchronous workflows using RabbitMQ, improving system responsiveness and reliability.",
      "Monitored and debugged services using Kibana, identifying issues proactively and improving system observability.",
      "Collaborated with international teams to plan, develop, and deploy features, maintaining strong alignment despite geographic and cultural differences.",
    ],
    skills: [
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
    companyUrl: "https://www.sociolla.com",
    logo: "/career/logo-sociolla.png",
  },
  {
    id: "binus",
    position: "Software Engineer",
    company: "Binus University",
    location: "Jakarta, Indonesia",
    startDate: new Date("2023-04-01"),
    endDate: new Date("2023-11-01"),
    description: [
      "Developed backend services using Node.js, Express.js, and TypeScript, following a microservices architecture to ensure modularity and maintainability.",
      "Designed and implemented core APIs for handling user-generated content such as threads, articles, and videos.",
      "Managed inter-service communication and centralized routing through an API Gateway, enabling secure and efficient request handling.",
      "Ensured data integrity and consistency across services, and implemented authentication, authorization, and role-based access controls.",
      "Worked closely with frontend and DevOps teams to integrate services, optimize API performance, and support CI/CD workflows.",
      "Participated in system design discussions, helping to architect scalable solutions that support multi-tenant structures and community-driven features.",
    ],
    skills: ["Node.js", "express.js", "Typescript", "PostgreSQL", "AWS"],
    companyUrl: "https://binus.ac.id",
    logo: "/career/logo-binus.png",
  },
  {
    id: "nabati",
    position: "Software Engineer",
    company: "PT Kaldu Sari Nabati Indonesia",
    location: "Bandung, Indonesia",
    startDate: new Date("2022-09-01"),
    endDate: new Date("2023-03-01"),
    description: [
      "Designed and implemented responsive and accessible frontend interfaces using React, Next.js, TypeScript, and Material UI, focusing on modular, scalable component architecture.",
      "Developed dynamic configuration tools that allow sales teams to manage product variations, pricing structures, and availability rules tailored to different customer types.",
      "Built interactive interfaces for order creation, stock deduction logic, and shipment tracking, ensuring a smooth and intuitive user experience.",
      "Integrated frontend with backend services via RESTful APIs, managing asynchronous operations and error handling using React Query.",
      "Collaborated closely with product managers and backend developers to define requirements and deliver features aligned with real-world logistics and sales processes.",
      "Contributed to form validations, user access handling, and state management to support business logic such as cut stock after order confirmation and shipment scheduling.",
    ],
    skills: ["React", "Typescript", "Redux", "Material UI", "Storybook"],
    companyUrl: "https://www.nabatisnack.co.id",
    logo: "/career/logo-nabati.png",
  },
  {
    id: "bri",
    position: "Software Engineer",
    company: "PT Bank Rakyat Indonesia",
    location: "Jakarta, Indonesia",
    startDate: new Date("2020-11-01"),
    endDate: new Date("2022-08-01"),
    description: [
      "Initial project and manage structure code",
      "Create concept or boilerplate for architecture code",
      "Develop service website with Node Js (Typescript)",
      "Develop ui website with React Js (Typescript)",
      "Stabilization custom complicated component",
      "Deployment service and ui",
      "Fixing bugs or issues",
    ],
    skills: ["React", "Node.js", "express.js", "Typescript", "PostgreSQL"],
    companyUrl: "https://bri.co.id",
    logo: "/career/logo-bri.svg",
  },
  {
    id: "rupbasan",
    position: "Software Engineer",
    company: "Rupbasan Kelas I Bandung",
    location: "Bandung, Indonesia",
    startDate: new Date("2020-04-01"),
    endDate: new Date("2020-10-01"),
    description: [
      "Initial project and manage structure code ",
      " Create concept or bollerplate for architecture code",
      "Develop service website with Node Js (Typescript)",
      "Develop ui website with React Js (Typescript)",
      "Stabilization custom complicated component",
      "Develop digital signature",
      "Deployment on internal server",
      "Fixing bugs or issues",
    ],
    skills: ["React", "Next.js", "Typescript", "Node.js", "PostgreSQL"],
    companyUrl: "https://rupbasanbandung.com/wp",
    logo: "/career/kemenkumham-logo.png",
  },
];
