import { Video } from "@/types";

export const videos: Video[] = [
  {
    id: "1",
    title: "Dashboard IA",
    description: "Interface de data temps réel avec insights IA. Visualisation de données complexe et prédictions.",
    thumbnail: "/images/projects/food.svg",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    duration: "12:45",
    category: "React"
  },
  {
    id: "2",
    title: "E-commerce Headless",
    description: "Solution Shopify + Next.js ultra-performante. Tunnel d'achat optimisé et SEO-friendly.",
    thumbnail: "/images/projects/opticglass.svg",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    duration: "18:30",
    category: "eCommerce"
  },
  {
    id: "3",
    title: "Générateur IA",
    description: "Application intégrant GPT-4 et LangChain pour la génération de contenu contextuel.",
    thumbnail: "/images/projects/futuristcards.svg",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    duration: "22:15",
    category: "OpenAI"
  },
  {
    id: "4",
    title: "Design System",
    description: "UI Kit scalable avec plus de 50 composants. Documentation complète et tokens de design.",
    thumbnail: "/images/projects/design-system.svg",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    duration: "35:00",
    category: "Design"
  },
  {
    id: "5",
    title: "App Mobile Fintech",
    description: "Application React Native avec gestion de paiements et sécurité biométrique.",
    thumbnail: "/images/projects/cardpro.svg",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    duration: "15:20",
    category: "Mobile"
  },
  {
    id: "6",
    title: "Collaboration Tool",
    description: "Outil collaboratif temps réel utilisant WebRTC et CRDT pour l'édition simultanée.",
    thumbnail: "/images/projects/portfolio.svg",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    duration: "28:40",
    category: "Realtime"
  }
];

export const getVideosByCategory = (category: string): Video[] => {
  return videos.filter((v) => v.category === category);
};

export const videoCategories = [
  "React",
  "eCommerce",
  "OpenAI",
  "Design",
  "Mobile",
  "Realtime"
];
