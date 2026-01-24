import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    slug: "food-recipe-app",
    title: "Food — Application de recettes",
    description: "Application de gestion de recettes avec affichage responsive et tri par catégorie.",
    longDescription: "Application web complète permettant de gérer, organiser et rechercher des recettes culinaires. Interface intuitive avec système de filtrage par catégorie et design responsive adapté à tous les écrans.",
    category: "fullstack",
    stack: ["JavaScript", "React", "Tailwind", "Node.js"],
    tags: ["Fullstack", "React", "Node.js", "App"],
    liveUrl: "https://food-roan-mu.vercel.app/",
    githubUrl: "https://github.com/Sy2force/Food",
    image: "/images/projects/food.svg",
    featured: true,
    date: "2024-01",
    challenges: [
      "Création d'un CRUD complet et persistant",
      "Système de recherche et filtrage temps réel",
      "Optimisation des performances d'affichage"
    ],
    solutions: [
      "Architecture propre et modulaire",
      "Algorithme de filtrage optimisé",
      "Lazy loading des images"
    ],
    impact: "Une expérience utilisateur fluide pour gérer ses repas au quotidien."
  },
  {
    id: "2",
    slug: "optic-glass",
    title: "OpticGlass — E-commerce lunettes",
    description: "Site e-commerce interactif pour lunettes avec effet de loupe dynamique.",
    longDescription: "Expérience e-commerce immersive proposant une visualisation détaillée des produits grâce à un effet de loupe interactif développé sur mesure. Gestion du panier et catalogue produits.",
    category: "design",
    stack: ["JavaScript", "Canvas API", "CSS3", "HTML5"],
    tags: ["Frontend", "Design", "E-commerce", "Canvas"],
    liveUrl: "https://optic-glass.vercel.app/",
    githubUrl: "https://github.com/Sy2force/OpticGlass",
    image: "/images/projects/opticglass.svg",
    featured: true,
    date: "2023-11",
    challenges: [
      "Développement de l'effet loupe sans librairie tierce",
      "Gestion précise des événements souris/tactile",
      "Performance du rendu sur mobile"
    ],
    solutions: [
      "Utilisation de l'API Canvas pour le traitement d'image",
      "Optimisation via requestAnimationFrame",
      "Design responsive first"
    ],
    impact: "Augmentation de l'engagement grâce à l'interactivité produit."
  },
  {
    id: "3",
    slug: "futuristcards",
    title: "FuturistCards — Cartes de visite digitales",
    description: "Générateur de cartes de visite digitales avec animations 3D et style futuriste.",
    longDescription: "Plateforme de création de cartes de visite digitales interactives. Utilisation d'animations CSS 3D avancées et d'effets de verre (Glassmorphism) pour un rendu moderne et impactant.",
    category: "design",
    stack: ["React", "Framer Motion", "CSS Modules", "Vite"],
    tags: ["Frontend", "Design", "3D", "Animation"],
    liveUrl: "https://futurist-cards-frontend.vercel.app/",
    githubUrl: "https://github.com/Sy2force/FuturistCards",
    image: "/images/projects/futuristcards.svg",
    featured: true,
    date: "2023-09",
    challenges: [
      "Rendu 3D performant en CSS pur",
      "Compatibilité inter-navigateurs des effets",
      "Interface d'édition intuitive"
    ],
    solutions: [
      "Utilisation de transform-style: preserve-3d",
      "Variables CSS pour la personnalisation dynamique",
      "Composants React isolés"
    ],
    impact: "Une solution moderne pour le networking professionnel."
  },
  {
    id: "4",
    slug: "cardpro-ui-library",
    title: "CardPro — Librairie UI de cartes",
    description: "Librairie de composants UI modulaires spécialisée dans les cartes.",
    longDescription: "Bibliothèque open-source de composants de cartes (Cards) hautement personnalisables et accessibles. Conçue pour accélérer le développement d'interfaces React cohérentes.",
    category: "react",
    stack: ["React", "TypeScript", "Storybook", "NPM"],
    liveUrl: "",
    githubUrl: "https://github.com/Sy2force/CardPro",
    image: "/images/projects/cardpro.svg",
    featured: true,
    date: "2023-07",
    challenges: [
      "Architecture de composants flexible (Compound Pattern)",
      "Gestion stricte de l'accessibilité (A11y)",
      "Packaging et distribution via NPM"
    ],
    solutions: [
      "Utilisation de TypeScript pour le typage fort",
      "Documentation complète avec Storybook",
      "Tests unitaires et visuels"
    ],
    impact: "Accélère le développement UI avec des briques fiables."
  },
  {
    id: "5",
    slug: "portfolio-cto",
    title: "Portfolio CTO",
    description: "Portfolio moderne avec Next.js 14, TypeScript, Framer Motion et système multilingue.",
    longDescription: "Portfolio professionnel présentant mes compétences de CTO Junior et développeur fullstack. Construit avec les dernières technologies : Next.js 14 App Router, TypeScript, Tailwind CSS, Framer Motion et système i18n personnalisé.",
    category: "fullstack",
    stack: ["Stack Next.js 14", "Fullstack", "SEO & SSR", "Vitrine CTO"],
    liveUrl: "https://shayacoca.vercel.app",
    githubUrl: "https://github.com/Sy2force/Portfolio---shay",
    image: "/images/projects/portfolio.svg",
    featured: true,
    date: "2024-01",
    challenges: [
      "Architecture App Router et Server Components",
      "Optimisation SEO et Core Web Vitals",
      "Internationalisation fluide (FR/EN)"
    ],
    solutions: [
      "Structure modulaire par fonctionnalités",
      "Génération de métadonnées dynamiques",
      "Context React pour la gestion de la langue"
    ],
    impact: "Une vitrine technologique performante démontrant mon expertise CTO."
  },
  {
    id: "6",
    slug: "design-system-kit",
    title: "Design System — React UI Kit",
    description: "Bibliothèque de composants React accessible avec documentation complète.",
    longDescription: "Design system personnel avec composants React réutilisables, tokens de design et documentation. Conforme aux standards d'accessibilité WCAG.",
    category: "design",
    stack: ["React", "Tailwind", "Documentation", "Réutilisable"],
    tags: ["Frontend", "Design System", "Storybook", "Accessibility"],
    liveUrl: "",
    githubUrl: "https://github.com/Sy2force/Design-System",
    image: "/images/projects/design-system.jpg",
    featured: false,
    date: "2023-05",
    challenges: [
      "Création de 50+ composants atomiques",
      "Documentation interactive (Storybook)",
      "Cohérence visuelle et fonctionnelle"
    ],
    solutions: [
      "Utilisation de Radix UI pour la base",
      "Configuration Storybook avancée",
      "Tokens de design centralisés"
    ],
    impact: "Accélère le développement de nouveaux projets avec une base UI solide."
  }
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((p) => p.slug === slug);
};

export const getFeaturedProjects = (): Project[] => {
  return projects.filter((p) => p.featured);
};

export const getProjectsByCategory = (category: Project["category"]): Project[] => {
  return projects.filter((p) => p.category === category);
};
