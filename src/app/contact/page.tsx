import { Metadata } from "next";
import ContactContent from "@/components/contact/ContactContent";

export const metadata: Metadata = {
  title: "Contact - Shay Acoca | Recrutement, Freelance, Collaboration",
  description: "Contactez-moi pour discuter d'une opportunité de recrutement, mission freelance ou collaboration technique.",
  keywords: ["Shay Acoca", "Contact", "Recrutement", "Freelance", "Développeur Fullstack", "CTO Junior", "Collaboration"],
  openGraph: {
    title: "Contact - Shay Acoca | Recrutement, Freelance, Collaboration",
    description: "Contactez-moi pour discuter d'une opportunité de recrutement, mission freelance ou collaboration technique.",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact - Shay Acoca | Recrutement, Freelance, Collaboration",
    description: "Contactez-moi pour discuter d'une opportunité de recrutement, mission freelance ou collaboration technique.",
    images: ["/og-image.jpg"],
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
