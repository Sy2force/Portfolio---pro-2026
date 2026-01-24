import { Metadata } from "next";
import ProjectsContent from "@/components/projects/ProjectsContent";

export const metadata: Metadata = {
  title: "Projets - Shay Acoca | food, OpticGlass, FuturistCards, CardPro",
  description: "Explorez mes projets open-source : applications web, composants UI animés, librairies accessibles et plus encore.",
  keywords: ["Shay Acoca", "Projets", "Portfolio", "React", "Next.js", "Open Source", "Développement Web"],
  openGraph: {
    title: "Projets - Shay Acoca | food, OpticGlass, FuturistCards, CardPro",
    description: "Explorez mes projets open-source : applications web, composants UI animés, librairies accessibles et plus encore.",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projets - Shay Acoca | food, OpticGlass, FuturistCards, CardPro",
    description: "Explorez mes projets open-source : applications web, composants UI animés, librairies accessibles et plus encore.",
    images: ["/og-image.jpg"],
  },
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}
