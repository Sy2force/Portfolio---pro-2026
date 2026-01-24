import { Video } from "@/types";

export const videos: Video[] = [
  {
    id: "1",
    title: "Dashboard IA",
    description: "Interface de data temps réel avec insights IA. Visualisation de données complexe et prédictions.",
    thumbnail: "/images/videos/dashboard-thumb.jpg",
    videoUrl: "https://player.vimeo.com/video/example1",
    duration: "12:45",
    category: "React"
  },
  {
    id: "2",
    title: "E-commerce Headless",
    description: "Solution Shopify + Next.js ultra-performante. Tunnel d'achat optimisé et SEO-friendly.",
    thumbnail: "/images/videos/checkout-thumb.jpg",
    videoUrl: "https://player.vimeo.com/video/example2",
    duration: "18:30",
    category: "eCommerce"
  },
  {
    id: "3",
    title: "Générateur IA",
    description: "Application intégrant GPT-4 et LangChain pour la génération de contenu contextuel.",
    thumbnail: "/images/videos/ai-streaming-thumb.jpg",
    videoUrl: "https://player.vimeo.com/video/example3",
    duration: "22:15",
    category: "OpenAI"
  },
  {
    id: "4",
    title: "Design System",
    description: "UI Kit scalable avec plus de 50 composants. Documentation complète et tokens de design.",
    thumbnail: "/images/videos/design-system-thumb.jpg",
    videoUrl: "https://player.vimeo.com/video/example4",
    duration: "35:00",
    category: "Design"
  },
  {
    id: "5",
    title: "App Mobile Fintech",
    description: "Application React Native avec gestion de paiements et sécurité biométrique.",
    thumbnail: "/images/videos/mobile-onboarding-thumb.jpg",
    videoUrl: "https://player.vimeo.com/video/example5",
    duration: "15:20",
    category: "Mobile"
  },
  {
    id: "6",
    title: "Collaboration Tool",
    description: "Outil collaboratif temps réel utilisant WebRTC et CRDT pour l'édition simultanée.",
    thumbnail: "/images/videos/collab-cursors-thumb.jpg",
    videoUrl: "https://player.vimeo.com/video/example6",
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
