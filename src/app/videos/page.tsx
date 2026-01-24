import { Metadata } from "next";
import VideosContent from "@/components/videos/VideosContent";

export const metadata: Metadata = {
  title: "Tutoriels Vidéo - Shay Acoca | Dashboard, E-commerce, IA",
  description: "Tutoriels vidéo sur le développement web : Dashboard IA, E-commerce, Générateur IA, Design System.",
  keywords: ["Shay Acoca", "Vidéos", "Tutoriels", "Démonstrations", "React", "Next.js", "Dashboard", "E-commerce"],
  openGraph: {
    title: "Tutoriels Vidéo - Shay Acoca | Dashboard, E-commerce, IA",
    description: "Tutoriels vidéo sur le développement web : Dashboard IA, E-commerce, Générateur IA, Design System.",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tutoriels Vidéo - Shay Acoca | Dashboard, E-commerce, IA",
    description: "Tutoriels vidéo sur le développement web : Dashboard IA, E-commerce, Générateur IA, Design System.",
    images: ["/og-image.jpg"],
  },
};

export default function VideosPage() {
  return <VideosContent />;
}
