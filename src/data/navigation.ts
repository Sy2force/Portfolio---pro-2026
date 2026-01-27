import { NavItem, SocialLink } from "@/types";

export const navItems: NavItem[] = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/about" },
  { label: "Projets", href: "/projects" },
  { label: "Stack", href: "/stack" },
  { label: "Vidéos", href: "/videos" },
  { label: "CV", href: "/cv" },
  { label: "GitHub", href: "/github" },
  { label: "Contact", href: "/contact" },
];

export const navItemsEn: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Stack", href: "/stack" },
  { label: "Videos", href: "/videos" },
  { label: "Resume", href: "/cv" },
  { label: "GitHub", href: "/github" },
  { label: "Contact", href: "/contact" },
];

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/shayacoca",
    icon: "Github",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/shayacoca",
    icon: "Linkedin",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/shayacoca",
    icon: "Twitter",
  },
  {
    name: "Email",
    url: "mailto:shay.acoca@email.com",
    icon: "Mail",
  },
];

export const siteConfig = {
  name: "Shay Acoca - Portfolio",
  description: "CTO Junior et développeur fullstack formé chez HackerU",
  url: "https://shayacoca.vercel.app",
  ogImage: "/og-image.jpg",
  author: {
    name: "Shay Acoca",
    email: "shay.acoca@email.com",
    location: "Israël",
    title: "CTO Junior & Développeur Fullstack",
    bio: "Développeur fullstack formé chez HackerU. Passionné par le code, le design et l'innovation. Je crée des interfaces modernes et des expériences utilisateur mémorables.",
  },
  github: {
    username: "shayacoca",
    url: "https://github.com/shayacoca",
  },
};
