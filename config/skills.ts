import { Flags, Icons } from "@/components/common/icons";

export type SkillCategory =
  | "Frontend"
  | "Backend"
  | "Data"
  | "Mobile"
  | "Tools"
  | "Languages";

export const skillCategories: SkillCategory[] = [
  "Frontend",
  "Backend",
  "Data",
  "Mobile",
  "Tools",
  "Languages",
];

export interface skillsInterface {
  name: string;
  category: SkillCategory;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "React",
    category: "Frontend",
    description:
      "Craft interactive user interfaces using components, state, props, and virtual DOM.",
    rating: 5,
    icon: Icons.react,
  },
  {
    name: "Typescript",
    category: "Frontend",
    description:
      "Enhance JavaScript with static types, making code more understandable and reliable.",
    rating: 5,
    icon: Icons.typescript,
  },
  {
    name: "Next.js",
    category: "Frontend",
    description:
      "Effortlessly build dynamic apps with routing, layouts, loading UI, and API routes.",
    rating: 5,
    icon: Icons.nextjs,
  },
  {
    name: "express.js",
    category: "Backend",
    description:
      "Build web applications and APIs quickly using a fast, unopinionated Node.js framework.",
    rating: 5,
    icon: Icons.express,
  },
  {
    name: "MongoDB",
    category: "Data",
    description:
      "Store and retrieve data seamlessly with a flexible and scalable NoSQL database.",
    rating: 5,
    icon: Icons.mongodb,
  },
  {
    name: "Vue.js",
    category: "Frontend",
    description:
      "Build interactive web apps with reactive components, and a flexible ecosystem.",
    rating: 5,
    icon: Icons.vueJs,
  },
  {
    name: "Javascript",
    category: "Frontend",
    description:
      "Create interactive and dynamic web experiences with the versatile scripting language.",
    rating: 5,
    icon: Icons.javascript,
  },
  {
    name: "Node.js",
    category: "Backend",
    description:
      "Run JavaScript on the server side, enabling dynamic and responsive applications.",
    rating: 5,
    icon: Icons.nodejs,
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    description:
      "Design beautiful, modern websites faster with a utility-first CSS framework.",
    rating: 5,
    icon: Icons.tailwindcss,
  },
  {
    name: "Indonesia",
    category: "Languages",
    description: "Fluent",
    rating: 5,
    icon: Flags.ID,
  },
  {
    name: "English",
    category: "Languages",
    description: "Professional",
    rating: 4,
    icon: Flags.US,
  },
  {
    name: "Arabic",
    category: "Languages",
    description: "Conversational",
    rating: 3,
    icon: Flags.SA,
  },
  {
    name: "Jira",
    category: "Tools",
    description: "Track, plan, and ship software with agile boards.",
    rating: 5,
    icon: Icons.jira,
  },
  {
    name: "Bitbucket",
    category: "Tools",
    description: "Collaborative Git solution for teams and enterprises.",
    rating: 5,
    icon: Icons.bitbucket,
  },
  {
    name: "Nest.js",
    category: "Backend",
    description:
      "Create scalable and modular applications with a progressive Node.js framework.",
    rating: 4,
    icon: Icons.nestjs,
  },
  {
    name: "React Native",
    category: "Mobile",
    description:
      "Develop cross-platform mobile apps using React for consistent and engaging experiences.",
    rating: 4,
    icon: Icons.react,
  },
  {
    name: "ElasticSearch",
    category: "Data",
    description: "Powerful, scalable search and indexing platform.",
    rating: 4,
    icon: Icons.elasticSearch,
  },
  {
    name: "Github",
    category: "Tools",
    description: "The home for open-source and team development.",
    rating: 4,
    icon: Icons.github,
  },
  {
    name: "Gitlab",
    category: "Tools",
    description: "All-in-one DevOps platform with built-in CI/CD..",
    rating: 4,
    icon: Icons.gitlab,
  },
  {
    name: "Material UI",
    category: "Frontend",
    description:
      "Create stunning and responsive UIs with a popular React UI framework.",
    rating: 4,
    icon: Icons.mui,
  },
  {
    name: "Redux",
    category: "Frontend",
    description:
      "Manage app state effectively using a predictable and centralized state container.",
    rating: 4,
    icon: Icons.redux,
  },
  {
    name: "MySQL",
    category: "Data",
    description:
      "Manage and organize relational databases efficiently for data-driven applications.",
    rating: 4,
    icon: Icons.mysql,
  },
  {
    name: "PostgreSql",
    category: "Data",
    description:
      "Advanced SQL database with strong consistency and extensibility.",
    rating: 4,
    icon: Icons.postgreSql,
  },
  {
    name: "GraphQL",
    category: "Backend",
    description:
      "Fetch data precisely with a powerful query language for APIs and runtime execution.",
    rating: 4,
    icon: Icons.graphql,
  },
  {
    name: "Figma",
    category: "Tools",
    description: "Design, prototype, and iterate together in real time.",
    rating: 4,
    icon: Icons.figma,
  },
  {
    name: "HTML 5",
    category: "Frontend",
    description:
      "Structure web content beautifully with the latest version of HyperText Markup Language.",
    rating: 4,
    icon: Icons.html5,
  },
  {
    name: "CSS 3",
    category: "Frontend",
    description:
      "Style web pages creatively with the latest iteration of Cascading Style Sheets.",
    rating: 4,
    icon: Icons.css3,
  },
  {
    name: "Netlify",
    category: "Tools",
    description:
      "Manage and organize relational databases efficiently for data-driven applications.",
    rating: 4,
    icon: Icons.netlify,
  },
  {
    name: "AWS",
    category: "Tools",
    description: "Store and retrieve any file, anytime, from anywhere.",
    rating: 3,
    icon: Icons.s3,
  },
  {
    name: "Angular",
    category: "Frontend",
    description:
      "Build dynamic web apps with a TypeScript-based open-source framework by Google.",
    rating: 3,
    icon: Icons.angular,
  },
  {
    name: "Socket.io",
    category: "Backend",
    description:
      "Enable real-time, bidirectional communication between clients and servers effortlessly.",
    rating: 3,
    icon: Icons.socketio,
  },
  {
    name: "Docker",
    category: "Tools",
    description: "Containerize apps for consistent and scalable deployment.",
    rating: 3,
    icon: Icons.docker,
  },
  {
    name: "Notion",
    category: "Tools",
    description: "Organize ideas, projects, and docs in one place.",
    rating: 3,
    icon: Icons.notion,
  },
  {
    name: "Google Analytics",
    category: "Tools",
    description: "Track user behavior and measure site performance.",
    rating: 2,
    icon: Icons.googleAnalytics,
  },
  {
    name: "Google Maps",
    category: "Tools",
    description: "Powerful mapping and geolocation APIs.",
    rating: 2,
    icon: Icons.googleMaps,
  },
  {
    name: "PHP",
    category: "Backend",
    description: "Build dynamic websites with ease.",
    rating: 2,
    icon: Icons.php,
  },
  {
    name: "Laravel",
    category: "Backend",
    description: "Developer-friendly framework for web artisans.",
    rating: 2,
    icon: Icons.laravel,
  },
  {
    name: "Codeigniter",
    category: "Backend",
    description: "Lightweight PHP framework for fast web apps.",
    rating: 2,
    icon: Icons.codeigniter,
  },
  {
    name: "AdobeXD",
    category: "Tools",
    description: "Design and prototype user experiences effortlessly.",
    rating: 2,
    icon: Icons.adobeXD,
  },
  {
    name: "Bootstrap",
    category: "Frontend",
    description:
      "Quickly create responsive and appealing web designs using a popular CSS framework.",
    rating: 2,
    icon: Icons.bootstrap,
  },
];

export const skills = skillsUnsorted.slice();
// .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
