import linkedin from "@/components/common/icons/Linkedin";
import type {
  WorkExperience,
  Project,
  Skill,
  Certificate,
  NavItem,
} from "@/types";
import {
  Linkedin,
  Github,
  Mail,
  Briefcase,
  Lightbulb,
  Code,
  Award,
  Cpu,
  Palette,
  Database,
  BrainCircuit,
  ExternalLink,
} from "lucide-react";

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Certificates", href: "#certificates" },
  { label: "Resume AI", href: "#resume-ai" },
  { label: "Contact", href: "#contact" },
];

export const workExperiences: WorkExperience[] = [
  {
    id: "exp2",
    role: "Full-Stack Developer",
    company: "Infosys (Bank of America)",
    duration: "Nov 2025 - Present",
    description: [
      "Migrated legacy banking app from jQuery/vanilla JS to modular React architecture.",
      "Improved Java Spring Boot backend with new REST APIs, enhancing responsiveness by 15%.",
      "Implemented phased migration ensuring zero disruption to live banking operations.",
      "Established modern tooling (Webpack, Babel) and UI component library for maintainability.",
    ],
    logoUrl: "https://placehold.co/100x100.png?text=BOFA",
  },
  {
    id: "exp1",
    role: "Senior Software Engineer",
    company: "Cyber Infrastructures",
    duration: "Jan 2022 - Oct 2025",
    description: [
      "Migrated vanilla JS browser extension to React & Redux, cutting crashes by 95% with offline Chrome Storage support.",
      "Rebuilt 33K-line JS editor with React & Fabric.js, reducing bugs 40% and generation time 25%.",
      "Built Go/Python PDF engine reducing file size 70% and converting to interactive HTML/XOD formats.",
      "Mentored 2 junior developers on React hooks, mutation observers, and performance optimization.",
    ],
    logoUrl: "https://placehold.co/100x100.png?text=CI",
  },
  {
    id: "exp3",
    role: "Trainee Software Engineer",
    company: "Webtek Labs Pvt. Ltd.",
    duration: "Jun 2021 - Aug 2021",
    description: [
      "Mastered foundational programming paradigms including OOP principles and functional programming.",
      "Participated in agile development cycles, contributing to sprint planning and retrospectives.",
      "Improved application performance by optimizing database queries and frontend rendering.",
    ],
    logoUrl: "https://placehold.co/100x100.png?text=WL",
  },
];

export const projects: Project[] = [
  {
    id: "proj1",
    name: "TypeScript Microservices SDK",
    description:
      "A monorepo of 6 production-ready npm packages for Node.js and microservices development with strict architecture patterns.",
    imageUrl: "/images/TSMicroservicesSDK.png",
    tags: [
      "TypeScript",
      "Node.js",
      "npm",
      "Monorepo",
      "ESM/CJS",
      "Biome",
      "Redis",
      "JWT",
      "Express",
    ],
    liveLink: "https://www.npmjs.com/package/ts-packages",
    features: [
      "6 independent packages (cache, errors, security, server, etc.)",
      "Dual ESM/CJS builds with tree-shaking",
      "Strict import/export patterns with Biome",
      "Production-ready error handling and caching",
    ],
  },
  {
    id: "proj2",
    name: "TubeSpanner Browser Extension",
    description:
      "Browser extension for social media creators with AI-powered content generation and publishing tools.",
    imageUrl: "/images/TubeSpannerExtension.png",
    tags: [
      "React.js",
      "Redux.js",
      "TypeScript",
      "Webpack",
      "Shadow DOM",
      "Browser Extension APIs",
      "Chrome Storage API",
      "RxJS",
    ],
    liveLink:
      "https://chromewebstore.google.com/detail/bbnicfgabflhomlfeehgadmijdfiaaii?utm_source=item-share-cb",
    features: [
      "Offline Storage Support",
      "AI Title & Description Generation",
      "Cross-browser Compatibility",
      "CSS Isolation with Shadow DOM",
    ],
  },
  {
    id: "proj3",
    name: "TubeSpanner Thumbnail Editor",
    description:
      "Canvas-based image editor for creating thumbnails with AI features and advanced editing tools.",
    imageUrl: "/images/TubeSpannerEditor.webp",
    tags: [
      "React.js",
      "Fabric.js",
      "Canvas API",
      "TypeScript",
      "Redux.js",
      "RxJS",
      "Webpack",
      "AI Integration",
    ],
    liveLink: "https://app.tubespanner.com/thumbnails/blankimage",
    features: [
      "AI Background & Image Generation",
      "Auto-cropping & Text-to-Background",
      "SVG Brushes & Layer Management",
      "Drag-and-Drop Templates",
    ],
  },
  {
    id: "proj4",
    name: "PDF Processing Engine",
    description:
      "Microservice-based PDF processing system for compression, conversion, and workflow automation.",
    imageUrl: "/images/PDFProcessingEngine.png",
    tags: [
      "Golang",
      "Python",
      "Node.js",
      "MongoDB",
      "gRPC",
      "REST",
      "iLovePDF API",
      "Microservices",
    ],
    features: [
      "70% PDF Compression",
      "PDF to Interactive HTML Conversion",
      "Concurrent XOD Format Processing",
      "FTP & Cron-based Automation",
    ],
  },
];

export const skills: Skill[] = [
  { id: "skill1", name: "JavaScript", proficiency: 95, icon: Code },
  { id: "skill2", name: "TypeScript", proficiency: 85, icon: Code },
  { id: "skill3", name: "React", proficiency: 90, icon: Code },
  { id: "skill4", name: "Next.js", proficiency: 70, icon: Code },
  { id: "skill5", name: "Node.js", proficiency: 80, icon: Code },
  { id: "skill6", name: "Go", proficiency: 75, icon: Code },
  { id: "skill7", name: "MySQL", proficiency: 85, icon: Database },
  { id: "skill8", name: "MongoDB", proficiency: 80, icon: Database },
  { id: "skill9", name: "Express", proficiency: 85, icon: Code },
  { id: "skill10", name: "Tailwind CSS", proficiency: 90, icon: Palette },
  { id: "skill11", name: "Redux", proficiency: 85, icon: Code },
  { id: "skill12", name: "Webpack", proficiency: 80, icon: Cpu },
  { id: "skill13", name: "RollUp", proficiency: 85, icon: Cpu },
  { id: "skill14", name: "Vite", proficiency: 90, icon: Cpu },
  { id: "skill15", name: "Docker", proficiency: 70, icon: Cpu },
  { id: "skill16", name: "Git", proficiency: 90, icon: Cpu },
  { id: "skill17", name: "REST APIs", proficiency: 85, icon: Code },
];

export const certificates: Certificate[] = [
  {
    id: "cert1",
    name: "Advanced JavaScript",
    issuingOrganization: "Codechef",
    date: "Jun 2024",
    imageUrl: "/images/naman2704-Learn JavaScript.jpg",
  },
  {
    id: "cert2",
    name: "Advanced SQL",
    issuingOrganization: "Codechef",
    date: "Jun 2024",
    imageUrl: "/images/naman2704-Learn Advanced SQL.jpg",
  },
  {
    id: "cert3",
    name: "Node.js Microservices",
    issuingOrganization: "Infosys Lex",
    date: "Jan 2026",
    imageUrl: "/images/NodeJSMicroservices.jpg",
  },
];

export const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/naman-deep-980a62211/",
    icon: linkedin,
  },
  { name: "GitHub", url: "https://github.com/naman-deep-singh", icon: Github },
  { name: "Email", url: "mailto:namand.official@gmail.com", icon: Mail },
];

export const sectionIcons = {
  experience: Briefcase,
  projects: Lightbulb,
  skills: Code,
  certificates: Award,
  resumeAI: BrainCircuit,
  contact: Mail,
};