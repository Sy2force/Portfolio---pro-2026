import { Metadata } from "next";
import CVContent from "@/components/cv/CVContent";

export const metadata: Metadata = {
  title: "CV - Shay Acoca | CTO Junior & Développeur Fullstack",
  description: "Téléchargez mon CV : formation HackerU, projets open-source, compétences techniques et certifications.",
  keywords: ["Shay Acoca", "CV", "Curriculum Vitae", "CTO Junior", "Développeur Fullstack", "HackerU", "Expérience", "Compétences"],
  openGraph: {
    title: "CV - Shay Acoca | CTO Junior & Développeur Fullstack",
    description: "Téléchargez mon CV : formation HackerU, projets open-source, compétences techniques et certifications.",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "CV - Shay Acoca | CTO Junior & Développeur Fullstack",
    description: "Téléchargez mon CV : formation HackerU, projets open-source, compétences techniques et certifications.",
    images: ["/og-image.jpg"],
  },
};

export default function CVPage() {
  return <CVContent />;
}
