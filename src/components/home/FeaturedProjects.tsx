import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { ArrowRight, ExternalLink, Github, Sparkles } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { getFeaturedProjects } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Carousel } from "@/components/ui/Carousel";

export function FeaturedProjects() {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const projects = getFeaturedProjects();

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Luxury Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-900 dark:to-violet-950" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
      
      {/* Animated Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-luxury-gold-300/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-luxury-gold-100 to-luxury-gold-200 dark:from-luxury-gold-900/30 dark:to-luxury-gold-800/30 mb-4">
            <Sparkles className="w-4 h-4 text-luxury-gold-600 dark:text-luxury-gold-400" />
            <span className="text-sm font-medium text-luxury-gold-700 dark:text-luxury-gold-300">Projets Premium</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-violet-900 to-indigo-900 dark:from-white dark:via-violet-200 dark:to-indigo-200 bg-clip-text text-transparent mb-4">
            {t("home.featured.title")}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t("home.featured.subtitle")}
          </p>
        </motion.div>

        {/* Projects Carousel */}
        <Carousel autoPlay interval={6000} className="mb-12">
          {projects.slice(0, 6).map((project) => (
            <div key={project.id} className="px-4">
              <Link to={`/projects/${project.slug}`}>
                <motion.article
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden border-2 border-luxury-gold-200 dark:border-luxury-gold-800/50 shadow-luxury hover:shadow-gold transition-all duration-500 mx-auto max-w-4xl"
                >
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 bg-shimmer-gradient bg-[length:200%_100%] animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Image */}
                  <div className="relative h-96 overflow-hidden bg-gradient-to-br from-luxury-gold-100 via-violet-100 to-indigo-100 dark:from-luxury-gold-900/20 dark:via-violet-900/20 dark:to-indigo-900/20">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center">
                          <span className="text-white font-bold text-2xl">
                            {project.title.charAt(0)}
                          </span>
                        </div>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-2 rounded-lg bg-white/90 text-gray-900 hover:bg-white transition-colors"
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
                          className="p-2 rounded-lg bg-white/90 text-gray-900 hover:bg-white transition-colors"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex-1 flex flex-col bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-400 bg-clip-text text-transparent group-hover:from-luxury-gold-600 group-hover:to-luxury-gold-500 transition-all duration-500">
                        {t(`projects.items.${project.slug}.title`) || project.title}
                      </h3>
                      <Sparkles className="w-6 h-6 text-luxury-gold-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-base mb-6 flex-1">
                      {t(`projects.items.${project.slug}.description`) || project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.slice(0, 5).map((tech) => (
                        <Badge key={tech} className="bg-gradient-to-r from-violet-100 to-indigo-100 dark:from-violet-900/30 dark:to-indigo-900/30 text-violet-700 dark:text-violet-300 border-violet-200 dark:border-violet-800">
                          {tech}
                        </Badge>
                      ))}
                      {project.stack.length > 5 && (
                        <Badge className="bg-luxury-gold-100 dark:bg-luxury-gold-900/30 text-luxury-gold-700 dark:text-luxury-gold-300 border-luxury-gold-200 dark:border-luxury-gold-800">+{project.stack.length - 5}</Badge>
                      )}
                    </div>
                  </div>
                </motion.article>
              </Link>
            </div>
          ))}
        </Carousel>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link to="/projects">
            <Button 
              size="lg" 
              className="group bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white shadow-luxury hover:shadow-glow border-0"
            >
              {t("common.viewAll")}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
