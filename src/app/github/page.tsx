import { Metadata } from "next";
import GitHubContent from "@/components/github/GithubContent";

export const metadata: Metadata = {
  title: "GitHub - Shay Acoca | Projets Open Source",
  description: "Découvrez mes repositories GitHub : food, OpticGlass, FuturistCards, CardPro et plus encore.",
  keywords: ["Shay Acoca", "GitHub", "Open Source", "Repositories", "Code", "Développement", "React", "JavaScript"],
  openGraph: {
    title: "GitHub - Shay Acoca | Projets Open Source",
    description: "Découvrez mes repositories GitHub : food, OpticGlass, FuturistCards, CardPro et plus encore.",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "GitHub - Shay Acoca | Projets Open Source",
    description: "Découvrez mes repositories GitHub : food, OpticGlass, FuturistCards, CardPro et plus encore.",
    images: ["/og-image.jpg"],
  },
};

export default function GitHubPage() {
  return <GitHubContent />;
}
