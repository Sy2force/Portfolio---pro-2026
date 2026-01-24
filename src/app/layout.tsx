import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "@/components/providers/Providers";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollIndicator, BackToTop } from "@/components/layout/ScrollIndicator";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shayacoca.vercel.app"),
  title: {
    default: "Shay Acoca - CTO Junior & Développeur Fullstack | Portfolio",
    template: "%s | Shay Acoca",
  },
  description:
    "Développeur fullstack formé chez HackerU, spécialisé en React, Next.js, TypeScript et animations CSS. Découvrez mes projets open-source et compétences.",
  keywords: [
    "Shay Acoca",
    "CTO Junior",
    "Développeur Fullstack",
    "HackerU",
    "React",
    "Next.js",
    "TypeScript",
    "Framer Motion",
    "Tailwind CSS",
    "Portfolio",
    "JavaScript",
    "Animations CSS",
  ],
  authors: [{ name: "Shay Acoca" }],
  creator: "Shay Acoca",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://shayacoca.vercel.app",
    siteName: "Shay Acoca - Portfolio",
    title: "Shay Acoca - CTO Junior & Développeur Fullstack",
    description:
      "Développeur fullstack formé chez HackerU. Spécialisé en React, Next.js, TypeScript et animations CSS.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shay Acoca - CTO Junior & Développeur Fullstack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shay Acoca - CTO Junior & Développeur Fullstack",
    description:
      "Développeur fullstack formé chez HackerU. Spécialisé en React, Next.js, TypeScript et animations CSS.",
    images: ["/og-image.jpg"],
    creator: "@shayacoca",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <Providers>
          <ScrollIndicator />
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <BackToTop />
        </Providers>
      </body>
    </html>
  );
}
