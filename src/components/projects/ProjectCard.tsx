"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Project } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { useTranslation } from "@/context/LanguageContext";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/projects/${project.slug}`}>
        <motion.article
          whileHover={{ y: -8 }}
          className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 h-full flex flex-col"
        >
          {/* Image */}
          <div className="relative h-56 overflow-hidden bg-gradient-to-br from-violet-100 to-indigo-100 dark:from-violet-900/20 dark:to-indigo-900/20">
            {project.image ? (
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center shadow-xl">
                  <span className="text-white font-bold text-3xl">
                    {project.title.charAt(0)}
                  </span>
                </div>
              </div>
            )}
            
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Quick actions */}
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
              <div className="flex gap-2">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-2.5 rounded-xl bg-white/95 text-gray-900 hover:bg-white transition-colors shadow-lg"
                    aria-label="Live demo"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-2.5 rounded-xl bg-white/95 text-gray-900 hover:bg-white transition-colors shadow-lg"
                    aria-label="GitHub repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
              </div>
              <span className="text-white text-sm font-medium flex items-center gap-1">
                {t("projects.card.viewProject")}
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </div>

            {/* Category badge */}
            <div className="absolute top-4 left-4">
              <Badge className="bg-white/90 dark:bg-gray-900/90 text-gray-900 dark:text-white shadow-lg">
                {t(`projects.filters.${project.category}`)}
              </Badge>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 flex-1 flex flex-col">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
              {t(`projects.items.${project.slug}.title`) || project.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-1 line-clamp-2">
              {t(`projects.items.${project.slug}.description`) || project.description}
            </p>
            
            {/* Impact */}
            <p className="text-xs text-violet-600 dark:text-violet-400 font-medium mb-4 line-clamp-1">
              {t(`projects.items.${project.slug}.impact`) || project.impact}
            </p>

            {/* Stack */}
            <div className="flex flex-wrap gap-2">
              {project.stack.slice(0, 4).map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
              {project.stack.length > 4 && (
                <Badge variant="outline">+{project.stack.length - 4}</Badge>
              )}
            </div>
          </div>
        </motion.article>
      </Link>
    </motion.div>
  );
}
