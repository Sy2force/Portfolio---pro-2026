export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  video?: string;
  stack: string[];
  tags?: string[];
  category: "react" | "node" | "ecommerce" | "ia" | "fullstack" | "design";
  githubUrl?: string;
  liveUrl?: string;
  challenges?: string[];
  solutions?: string[];
  impact?: string;
  timeline?: TimelineItem[];
  testimonial?: Testimonial;
  featured: boolean;
  date: string;
}

export interface TimelineItem {
  date: string;
  title: string;
  description: string;
  icon?: string;
}

export interface Testimonial {
  author: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
}

export interface Skill {
  name: string;
  icon: string;
  level: number;
  category: "frontend" | "backend" | "devops" | "design" | "nocode" | "other";
  color?: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate?: string;
  current?: boolean;
  description: string;
  achievements: string[];
  stack: string[];
}

export interface Education {
  id: string;
  degree: string;
  school: string;
  location: string;
  startDate: string;
  endDate: string;
  description?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  url?: string;
  badge?: string;
}

export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  duration: string;
  category: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  topics: string[];
  updated_at: string;
}

export interface GitHubStats {
  public_repos: number;
  followers: number;
  following: number;
  total_stars: number;
  total_commits: number;
}

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  type: "recruitment" | "collaboration" | "freelance" | "other";
  message: string;
  file?: File;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
  icon?: string;
}
