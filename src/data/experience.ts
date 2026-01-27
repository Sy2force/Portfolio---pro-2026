import { Experience, Education, Certification } from "@/types";

export const experiences: Experience[] = [
  {
    id: "1",
    title: "Fondateur & Développeur Fullstack",
    company: "Acoca Digital Services",
    location: "Israël / International",
    startDate: "2024",
    current: true,
    description: "Création de solutions digitales performantes pour PME et indépendants (sites vitrines, e-commerce, apps).",
    achievements: [
      "Développement de sites rapides et responsifs adaptés aux besoins du marché moderne",
      "Gestion de projets full stack de la conception au déploiement",
      "Approche client centrée sur l'accessibilité et la qualité haut de gamme",
      "Expertise technique : Next.js, React, Node.js, SEO"
    ],
    stack: ["Next.js", "React", "TypeScript", "Node.js", "Tailwind CSS"]
  },
  {
    id: "2",
    title: "Combattant - Unité Guivati",
    company: "Armée Israélienne (Tsahal)",
    location: "Israël",
    startDate: "2019",
    endDate: "2022",
    description: "Service militaire complet au sein d'une unité d'élite. Développement de la rigueur et du dépassement de soi.",
    achievements: [
      "Discipline de fer et gestion du stress en situations critiques",
      "Travail d'équipe et leadership en environnement hostile",
      "Résilience et engagement total dans la mission",
      "Excellence opérationnelle"
    ],
    stack: ["Leadership", "Discipline", "Teamwork", "Resilience"]
  },
  {
    id: "3",
    title: "Formation & Projets Open Source",
    company: "GitHub / Autoformation",
    location: "Remote",
    startDate: "2022",
    endDate: "2024",
    description: "Développement intensif et contribution à l'écosystème open-source.",
    achievements: [
      "Création de librairies UI (CardPro, OpticGlass)",
      "Maîtrise des concepts avancés du web moderne",
      "Veille technologique active",
      "Création de contenu technique"
    ],
    stack: ["JavaScript", "React", "Git", "Open Source"]
  }
];

export const education: Education[] = [
  {
    id: "1",
    degree: "Formation Développement Web Full Stack",
    school: "Formation Complète",
    location: "Israël",
    startDate: "2024",
    endDate: "2026",
    description: "Cursus approfondi couvrant l'ensemble de la stack web moderne, de l'architecture serveur à l'interface utilisateur avancée."
  },
  {
    id: "2",
    degree: "Marketing Digital & Création de Contenu",
    school: "Études Supérieures",
    location: "Israël",
    startDate: "2022",
    endDate: "2024",
    description: "Spécialisation en stratégies digitales, SEO, branding et communication pour les entreprises."
  }
];

export const certifications: Certification[] = [
  {
    id: "1",
    name: "Formation Développeur Fullstack",
    issuer: "HackerU",
    date: "2024",
    url: "https://www.hackeru.com/"
  },
  {
    id: "2",
    name: "JavaScript Algorithms & Data Structures",
    issuer: "freeCodeCamp",
    date: "2023",
    url: "https://www.freecodecamp.org/"
  },
  {
    id: "3",
    name: "React - The Complete Guide",
    issuer: "Udemy",
    date: "2023",
    url: "https://www.udemy.com/"
  },
  {
    id: "4",
    name: "Next.js & React - Complete Guide",
    issuer: "Udemy",
    date: "2024",
    url: "https://www.udemy.com/"
  },
  {
    id: "5",
    name: "TypeScript Fundamentals",
    issuer: "Autoformation",
    date: "2024",
    url: "https://www.typescriptlang.org/docs/"
  }
];
