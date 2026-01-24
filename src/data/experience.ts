import { Experience, Education, Certification } from "@/types";

export const experiences: Experience[] = [
  {
    id: "1",
    title: "CTO Junior & Spécialisation Tech",
    company: "Freelance / Projets personnels",
    location: "France",
    startDate: "2024",
    current: true,
    description: "Conception du Portfolio CTO, spécialisation React/Next.js/IA et vision stratégique produit.",
    achievements: [
      "Architecture Next.js 14 App Router & Server Components",
      "Intégration d'IA (OpenAI, LangChain) dans des applications réelles",
      "Focus sur la performance (Core Web Vitals) et le SEO",
      "Veille technologique active : RAG, Agents IA, Edge Computing"
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "OpenAI API", "Vercel"]
  },
  {
    id: "2",
    title: "Création de Projets Open Source",
    company: "GitHub - @shayacoca",
    location: "Remote",
    startDate: "2023",
    endDate: "2024",
    description: "Développement et maintenance de librairies et composants UI (OpticGlass, CardPro, FuturistCards).",
    achievements: [
      "OpticGlass : Effet de loupe performant avec gestion d'événements complexes",
      "CardPro : Librairie de composants accessibles (MIT License)",
      "FuturistCards : UI Design avancé et animations CSS 3D",
      "Documentation technique et gestion de version (Git/GitHub)"
    ],
    stack: ["JavaScript", "React", "CSS3", "Git", "NPM"]
  },
  {
    id: "3",
    title: "Formation Développeur Fullstack",
    company: "HackerU",
    location: "France",
    startDate: "2022",
    endDate: "2023",
    description: "Formation intensive et structurante : du code 'vanilla' aux frameworks modernes.",
    achievements: [
      "Maîtrise des fondamentaux du web (HTML/CSS/JS)",
      "Développement Backend (Node.js, Express, MongoDB)",
      "Architecture MVC et conception de bases de données",
      "Méthodologies Agiles et travail en équipe"
    ],
    stack: ["JavaScript", "Node.js", "MongoDB", "Express", "React"]
  }
];

export const education: Education[] = [
  {
    id: "1",
    degree: "Formation Développeur Fullstack",
    school: "HackerU",
    location: "France",
    startDate: "2023",
    endDate: "2024",
    description: "Formation intensive en développement web fullstack : JavaScript, TypeScript, React, Node.js, bases de données, DevOps et bonnes pratiques"
  },
  {
    id: "2",
    degree: "Certifications & Autoformation",
    school: "Plateformes en ligne",
    location: "Remote",
    startDate: "2022",
    endDate: "2024",
    description: "Apprentissage continu via Udemy, freeCodeCamp, YouTube et documentation officielle. Focus sur React, Next.js, TypeScript et l'IA"
  }
];

export const certifications: Certification[] = [
  {
    id: "1",
    name: "Formation Développeur Fullstack",
    issuer: "HackerU",
    date: "2024",
    url: "https://www.hackeru.com/",
    badge: "/images/badges/hackeru.png"
  },
  {
    id: "2",
    name: "JavaScript Algorithms & Data Structures",
    issuer: "freeCodeCamp",
    date: "2023",
    url: "https://www.freecodecamp.org/",
    badge: "/images/badges/freecodecamp.png"
  },
  {
    id: "3",
    name: "React - The Complete Guide",
    issuer: "Udemy",
    date: "2023",
    url: "https://www.udemy.com/",
    badge: "/images/badges/udemy.png"
  },
  {
    id: "4",
    name: "Next.js & React - Complete Guide",
    issuer: "Udemy",
    date: "2024",
    url: "https://www.udemy.com/",
    badge: "/images/badges/udemy.png"
  },
  {
    id: "5",
    name: "TypeScript Fundamentals",
    issuer: "Autoformation",
    date: "2024",
    url: "https://www.typescriptlang.org/docs/",
    badge: "/images/badges/typescript.png"
  }
];
