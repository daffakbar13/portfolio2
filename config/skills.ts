import { Flags, Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "React",
    description:
      "Craft interactive user interfaces using components, state, props, and virtual DOM.",
    rating: 5,
    icon: Icons.react,
  },
  {
    name: "Typescript",
    description:
      "Enhance JavaScript with static types, making code more understandable and reliable.",
    rating: 5,
    icon: Icons.typescript,
  },
  {
    name: "Next.js",
    description:
      "Effortlessly build dynamic apps with routing, layouts, loading UI, and API routes.",
    rating: 5,
    icon: Icons.nextjs,
  },
  {
    name: "express.js",
    description:
      "Build web applications and APIs quickly using a fast, unopinionated Node.js framework.",
    rating: 5,
    icon: Icons.express,
  },
  {
    name: "MongoDB",
    description:
      "Store and retrieve data seamlessly with a flexible and scalable NoSQL database.",
    rating: 5,
    icon: Icons.mongodb,
  },
  {
    name: "Vue 3 / Pinia",
    description:
      "Build reactive interfaces with the Composition API and typed Pinia stores.",
    rating: 5,
    icon: Icons.vueJs,
  },
  {
    name: "Javascript",
    description:
      "Create interactive and dynamic web experiences with the versatile scripting language.",
    rating: 5,
    icon: Icons.javascript,
  },
  {
    name: "Node.js",
    description:
      "Run JavaScript on the server side, enabling dynamic and responsive applications.",
    rating: 5,
    icon: Icons.nodejs,
  },
  {
    name: "Tailwind CSS",
    description:
      "Design beautiful, modern websites faster with a utility-first CSS framework.",
    rating: 5,
    icon: Icons.tailwindcss,
  },
  {
    name: "Indonesia",
    description: "Fluent",
    rating: 5,
    icon: Flags.ID,
  },
  {
    name: "English",
    description: "Professional",
    rating: 4,
    icon: Flags.US,
  },
  {
    name: "Arabic",
    description: "Conversational",
    rating: 3,
    icon: Flags.SA,
  },
  {
    name: "Jira",
    description: "Track, plan, and ship software with agile boards.",
    rating: 5,
    icon: Icons.jira,
  },
  {
    name: "Bitbucket",
    description: "Collaborative Git solution for teams and enterprises.",
    rating: 5,
    icon: Icons.bitbucket,
  },
  {
    name: "AI-assisted development (Claude Code)",
    description: "Plan, build, review and test with AI agents in the loop.",
    rating: 4,
    icon: Icons.claude,
  },
  {
    name: "Redis",
    description:
      "Cache hot data and keep counters and locks in a fast in-memory store.",
    rating: 4,
    icon: Icons.redis,
  },
  {
    name: "RabbitMQ",
    description:
      "Run background jobs and async workflows through reliable message queues.",
    rating: 4,
    icon: Icons.rabbitmq,
  },
  {
    name: "Kibana",
    description: "Search logs and build dashboards to debug and monitor services.",
    rating: 4,
    icon: Icons.kibana,
  },
  {
    name: "Playwright",
    description: "Write end-to-end tests that drive real browsers.",
    rating: 4,
    icon: Icons.playwright,
  },
  {
    name: "Docker",
    description: "Containerize apps for consistent and scalable deployment.",
    rating: 4,
    icon: Icons.docker,
  },
  {
    name: "Nest.js",
    description:
      "Create scalable and modular applications with a progressive Node.js framework.",
    rating: 4,
    icon: Icons.nestjs,
  },
  {
    name: "React Native",
    description:
      "Develop cross-platform mobile apps using React for consistent and engaging experiences.",
    rating: 4,
    icon: Icons.react,
  },
  {
    name: "ElasticSearch",
    description: "Powerful, scalable search and indexing platform.",
    rating: 4,
    icon: Icons.elasticSearch,
  },
  {
    name: "Github",
    description: "The home for open-source and team development.",
    rating: 4,
    icon: Icons.github,
  },
  {
    name: "Gitlab",
    description: "All-in-one DevOps platform with built-in CI/CD.",
    rating: 4,
    icon: Icons.gitlab,
  },
  {
    name: "Material UI",
    description:
      "Create stunning and responsive UIs with a popular React UI framework.",
    rating: 4,
    icon: Icons.mui,
  },
  {
    name: "Redux",
    description:
      "Manage app state effectively using a predictable and centralized state container.",
    rating: 4,
    icon: Icons.redux,
  },
  {
    name: "MySQL",
    description:
      "Manage and organize relational databases efficiently for data-driven applications.",
    rating: 4,
    icon: Icons.mysql,
  },
  {
    name: "PostgreSql",
    description:
      "Advanced SQL database with strong consistency and extensibility.",
    rating: 4,
    icon: Icons.postgreSql,
  },
  {
    name: "Figma",
    description: "Design, prototype, and iterate together in real time.",
    rating: 4,
    icon: Icons.figma,
  },
  {
    name: "HTML 5",
    description:
      "Structure web content beautifully with the latest version of HyperText Markup Language.",
    rating: 4,
    icon: Icons.html5,
  },
  {
    name: "CSS 3",
    description:
      "Style web pages creatively with the latest iteration of Cascading Style Sheets.",
    rating: 4,
    icon: Icons.css3,
  },
  {
    name: "Jenkins",
    description: "Automate build, test and deploy pipelines.",
    rating: 3,
    icon: Icons.jenkins,
  },
  {
    name: "Kubernetes",
    description: "Deploy and scale containerized services across a cluster.",
    rating: 3,
    icon: Icons.kubernetes,
  },
  {
    name: "MQTT",
    description:
      "Stream lightweight publish/subscribe messages between devices and services.",
    rating: 3,
    icon: Icons.mqtt,
  },
  {
    name: "Firebase",
    description:
      "Ship auth, push notifications and realtime data without running servers.",
    rating: 3,
    icon: Icons.firebase,
  },
  {
    name: "Go",
    description:
      "Write fast, simple services in a statically typed, compiled language.",
    rating: 3,
    icon: Icons.go,
  },
  {
    name: "AWS",
    description: "Store and retrieve any file, anytime, from anywhere.",
    rating: 3,
    icon: Icons.s3,
  },
  {
    name: "Socket.io",
    description:
      "Enable real-time, bidirectional communication between clients and servers effortlessly.",
    rating: 3,
    icon: Icons.socketio,
  },
  {
    name: "Notion",
    description: "Organize ideas, projects, and docs in one place.",
    rating: 3,
    icon: Icons.notion,
  },
  {
    name: "Google Analytics",
    description: "Track user behavior and measure site performance.",
    rating: 2,
    icon: Icons.googleAnalytics,
  },
  {
    name: "Google Maps",
    description: "Powerful mapping and geolocation APIs.",
    rating: 2,
    icon: Icons.googleMaps,
  },
  {
    name: "PHP",
    description: "Build dynamic websites with ease.",
    rating: 2,
    icon: Icons.php,
  },
  {
    name: "Laravel",
    description: "Developer-friendly framework for web artisans.",
    rating: 2,
    icon: Icons.laravel,
  },
];

export const skills = skillsUnsorted.slice();
// .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
