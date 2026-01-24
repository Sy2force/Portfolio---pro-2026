import { Metadata } from "next";
import StackContent from "@/components/stack/StackContent";

export const metadata: Metadata = {
  title: "Stack Technique - Shay Acoca | 32 Technologies",
  description: "Ma stack technique : React, Next.js, TypeScript, Node.js, Tailwind CSS, Framer Motion et 26 autres technologies.",
  keywords: ["Shay Acoca", "Stack Technique", "React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "Framer Motion", "Développement Web"],
  openGraph: {
    title: "Stack Technique - Shay Acoca | 32 Technologies",
    description: "Ma stack technique : React, Next.js, TypeScript, Node.js, Tailwind CSS, Framer Motion et 26 autres technologies.",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stack Technique - Shay Acoca | 32 Technologies",
    description: "Ma stack technique : React, Next.js, TypeScript, Node.js, Tailwind CSS, Framer Motion et 26 autres technologies.",
    images: ["/og-image.jpg"],
  },
};

export default function StackPage() {
  return <StackContent />;
}
