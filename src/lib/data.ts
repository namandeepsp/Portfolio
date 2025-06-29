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
    id: "exp1",
    role: "Senior Software Engineer",
    company: "Cyber Infrastrures",
    duration: "Jan 2022 - Present",
    description: [
      "Upgraded legacy JS to React+Redux, cutting crashes by 95% & adding offline/cross-browser support.",
      "Boosted web editors with AI (auto-crop, templates) and React, slashing bugs 40% + raising engagement 20%.",
      "Built Go/Python PDF tools for 70% smaller files + interactive HTML/XOD conversion.",
      "Mentored devs on React optimizations for scalable frontends.",
    ],
    logoUrl: "https://placehold.co/100x100.png?text=TSI",
  },
  {
    id: "exp2",
    role: "Trainee Software Engineer",
    company: "Webtek Labs Pvt. Ltd.",
    duration: "Jun 2021 - Aug 2021",
    description: [
      "Mastered foundational programming paradigms – Learned modular design patterns, OOP principles (encapsulation, inheritance, polymorphism), and functional programming concepts for scalable and maintainable code.",
      "Participated in agile development cycles, contributing to sprint planning and retrospectives.",
      "Improved application performance by optimizing database queries and frontend rendering.",
    ],
    logoUrl: "https://placehold.co/100x100.png?text=IC",
  },
];

export const projects: Project[] = [
  {
    id: "proj1",
    name: "TubeSpanner Browser Extension",
    description:
      "This extension helps social media creators to create content faster by the help of Gen AI and let them publish the content as well.",
    imageUrl: "/images/TubeSpannerExtension.png",
    tags: [
      "React.js",
      "Redux.js",
      "Tailwind CSS",
      "TypeScript",
      "Webpack",
      "Styled Components",
      "Styled Modules",
      "Shadow DOM",
      "Browser Extension APIs ",
      "Axios",
    ],
    liveLink:
      "https://chromewebstore.google.com/detail/bbnicfgabflhomlfeehgadmijdfiaaii?utm_source=item-share-cb",
    features: [
      "Offline Storage",
      "AI Title Inspiration",
      "AI Thumbnail Generator",
      "AI Video Description",
    ],
  },
  {
    id: "proj2",
    name: "TubeSpanner Thumbnail Editor",
    description:
      "It is an image editor for social media creators to create thumbnails for their videos, social media posts.",
    imageUrl: "/images/TubeSpannerEditor.webp",
    tags: [
      "React.js",
      "Fabric.js",
      "Canvas API",
      "TypeScript",
      "React Bootstrap",
      "Redux.js",
      "Axios",
    ],
    liveLink: "https://app.tubespanner.com/thumbnails/blankimage",
    features: [
      "AI Background Generator",
      "AI Image Generator",
      "Magic Wand Tool",
      "Text Effects",
      "Image Filters",
    ],
  },
  {
    id: "proj3",
    name: "PDF Processing Engine",
    description:
      "It is a PDF processing engine that converts PDF files to HTML and XOD formats, and also compresses PDF files.",
    imageUrl: "/images/PDFProcessingEngine.png",
    tags: [
      "Golang",
      "Mongodb",
      "REST",
      "PDFtron",
      "Python",
      "Node.js",
      "Microservices",
    ],
    features: [
      "Parellely processing multiple pdfs",
      "Compresses pdf upto 70%",
      "Merges & splits pdfs",
      "Converts pdf to HTML and XOD formats",
    ],
  },
];

export const skills: Skill[] = [
  { id: "skill1", name: "JavaScript", proficiency: 95, icon: Code },
  { id: "skill2", name: "TypeScript", proficiency: 75, icon: Code },
  { id: "skill3", name: "React", proficiency: 80, icon: Code },
  { id: "skill4", name: "Next.js", proficiency: 70, icon: Code },
  { id: "skill5", name: "Node.js", proficiency: 65, icon: Code },
  { id: "skill6", name: "MySQL", proficiency: 85, icon: Database },
  { id: "skill7", name: "Mongodb", proficiency: 80, icon: Database },
  { id: "skill8", name: "Express", proficiency: 75, icon: Code },
  { id: "skill9", name: "Tailwind CSS", proficiency: 85, icon: Palette },
  { id: "skill10", name: "Bootstrap CSS", proficiency: 85, icon: Palette },
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
];

export const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/naman-deep-980a62211/",
    icon: linkedin,
  },
  { name: "Email", url: "mailto:namand272@gmail.com", icon: Mail },
];

export const sectionIcons = {
  experience: Briefcase,
  projects: Lightbulb,
  skills: Code,
  certificates: Award,
  resumeAI: BrainCircuit,
  contact: Mail,
};
