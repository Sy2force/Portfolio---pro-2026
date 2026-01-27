import { Skill } from "@/types";

export const skills: Skill[] = [
  // Frontend
  { name: "React", icon: "react", level: 95, category: "frontend", color: "#61DAFB" },
  { name: "Next.js", icon: "nextjs", level: 95, category: "frontend", color: "#000000" },
  { name: "TypeScript", icon: "typescript", level: 90, category: "frontend", color: "#3178C6" },
  { name: "Vue.js", icon: "vuejs", level: 80, category: "frontend", color: "#4FC08D" },
  { name: "Tailwind CSS", icon: "tailwindcss", level: 95, category: "frontend", color: "#06B6D4" },
  { name: "Framer Motion", icon: "framer", level: 85, category: "frontend", color: "#0055FF" },
  { name: "Three.js", icon: "threejs", level: 70, category: "frontend", color: "#000000" },
  
  // Backend
  { name: "Node.js", icon: "nodejs", level: 90, category: "backend", color: "#339933" },
  { name: "Python", icon: "python", level: 85, category: "backend", color: "#3776AB" },
  { name: "Express", icon: "express", level: 90, category: "backend", color: "#000000" },
  { name: "FastAPI", icon: "fastapi", level: 80, category: "backend", color: "#009688" },
  { name: "PostgreSQL", icon: "postgresql", level: 85, category: "backend", color: "#4169E1" },
  { name: "MongoDB", icon: "mongodb", level: 90, category: "backend", color: "#47A248" },
  { name: "Redis", icon: "redis", level: 80, category: "backend", color: "#DC382D" },
  { name: "GraphQL", icon: "graphql", level: 85, category: "backend", color: "#E10098" },
  
  // DevOps
  { name: "Docker", icon: "docker", level: 85, category: "devops", color: "#2496ED" },
  { name: "AWS", icon: "aws", level: 75, category: "devops", color: "#FF9900" },
  { name: "Vercel", icon: "vercel", level: 95, category: "devops", color: "#000000" },
  { name: "GitHub Actions", icon: "github", level: 85, category: "devops", color: "#181717" },
  { name: "Kubernetes", icon: "kubernetes", level: 65, category: "devops", color: "#326CE5" },
  
  // Design
  { name: "Figma", icon: "figma", level: 90, category: "design", color: "#F24E1E" },
  { name: "Adobe XD", icon: "xd", level: 75, category: "design", color: "#FF61F6" },
  { name: "Photoshop", icon: "photoshop", level: 70, category: "design", color: "#31A8FF" },
  { name: "Illustrator", icon: "illustrator", level: 65, category: "design", color: "#FF9A00" },
  
  // No-code
  { name: "Webflow", icon: "webflow", level: 85, category: "nocode", color: "#4353FF" },
  { name: "Shopify", icon: "shopify", level: 90, category: "nocode", color: "#7AB55C" },
  { name: "Notion", icon: "notion", level: 95, category: "nocode", color: "#000000" },
  { name: "Airtable", icon: "airtable", level: 80, category: "nocode", color: "#18BFFF" },
  
  // Other
  { name: "OpenAI API", icon: "openai", level: 90, category: "other", color: "#412991" },
  { name: "LangChain", icon: "langchain", level: 80, category: "other", color: "#1C3C3C" },
  { name: "Stripe", icon: "stripe", level: 90, category: "other", color: "#635BFF" },
  { name: "Git", icon: "git", level: 95, category: "other", color: "#F05032" },
];

export const getSkillsByCategory = (category: Skill["category"]): Skill[] => {
  return skills.filter((s) => s.category === category);
};

export const skillCategories = [
  { id: "frontend", label: "Frontend", icon: "Monitor", description: "React, Next.js et TypeScript sont mes outils de prédilection. J'aime créer des interfaces fluides avec Tailwind CSS et Framer Motion pour des animations qui marquent.", color: "violet" },
  { id: "backend", label: "Backend", icon: "Server", description: "Node.js et Express pour des APIs robustes. MongoDB et PostgreSQL pour la persistance. J'apprends continuellement Python et FastAPI pour élargir mes compétences.", color: "emerald" },
  { id: "devops", label: "DevOps", icon: "Cloud", description: "Vercel pour le déploiement rapide, Docker pour la containerisation, GitHub Actions pour l'automatisation. Je construis des pipelines CI/CD efficaces.", color: "blue" },
  { id: "design", label: "Design", icon: "Palette", description: "Figma est mon outil principal pour le prototypage. Je crée des maquettes pixel-perfect et des design systems cohérents avant de coder.", color: "pink" },
  { id: "nocode", label: "No-Code", icon: "Blocks", description: "Webflow et Shopify pour des projets rapides. Notion et Airtable pour l'organisation. Le no-code accélère le prototypage et la validation d'idées.", color: "orange" },
  { id: "other", label: "Autres", icon: "Sparkles", description: "OpenAI API et LangChain pour intégrer l'IA. Stripe pour les paiements. Git pour le versioning. Ces outils complètent ma stack au quotidien.", color: "indigo" },
] as const;
