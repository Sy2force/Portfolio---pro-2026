import { Metadata } from "next";
import AboutContent from "@/components/about/AboutContent";

export const metadata: Metadata = {
  title: "À propos de Shay Acoca - CTO Junior & Développeur Fullstack",
  description: "Découvrez mon parcours chez HackerU, ma passion pour le code et le design, et ma vision du rôle de CTO.",
  keywords: ["Shay Acoca", "À propos", "CTO Junior", "HackerU", "Parcours", "Développeur Fullstack", "Vision"],
  openGraph: {
    title: "À propos de Shay Acoca - CTO Junior & Développeur Fullstack",
    description: "Découvrez mon parcours chez HackerU, ma passion pour le code et le design, et ma vision du rôle de CTO.",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "À propos de Shay Acoca - CTO Junior & Développeur Fullstack",
    description: "Découvrez mon parcours chez HackerU, ma passion pour le code et le design, et ma vision du rôle de CTO.",
    images: ["/og-image.jpg"],
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
