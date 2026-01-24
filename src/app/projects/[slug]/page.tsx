import { Metadata } from "next";
import { getProjectBySlug, projects } from "@/data/projects";
import ProjectDetailContent from "@/components/projects/ProjectDetailContent";
import { notFound } from "next/navigation";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: "Projet non trouvé",
    };
  }

  return {
    title: `${project.title} | Shay Acoca – Développeur Fullstack`,
    description: `Présentation du projet ${project.title}, réalisé avec ${project.stack.join(", ")}`,
    openGraph: {
      title: `${project.title} | Shay Acoca – Développeur Fullstack`,
      description: `Présentation du projet ${project.title}, réalisé avec ${project.stack.join(", ")}`,
      images: [project.image],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Shay Acoca – Développeur Fullstack`,
      description: `Présentation du projet ${project.title}, réalisé avec ${project.stack.join(", ")}`,
      images: [project.image],
    },
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailContent project={project} />;
}
