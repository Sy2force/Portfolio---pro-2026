
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award, Code, ExternalLink } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { Badge } from "@/components/ui/Badge";
import { experiences, education, certifications } from "@/data/experience";
import { skills, skillCategories } from "@/data/skills";
import ProfessionalSummary from "./ProfessionalSummary";

export default function CVContent() {
  const { t } = useTranslation();

  return (
    <main className="bg-gray-900 min-h-screen pt-24 pb-16">
      <ProfessionalSummary />

      <div className="max-w-4xl mx-auto px-6 space-y-16">
        {/* Experience */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-violet-400 mb-8 flex items-center gap-3 border-b border-gray-800 pb-4">
            <Briefcase className="w-6 h-6" />
            {t("cv.experience")}
          </h3>
          <div className="space-y-12">
            {experiences.map((exp) => (
              <motion.div
                key={exp.id}
                className="relative pl-8 border-l-2 border-gray-800"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-violet-600 ring-4 ring-gray-900" />
                <div className="mb-4">
                  <h4 className="text-xl font-bold text-white mb-1">
                    {exp.title}
                  </h4>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-violet-400 font-medium">
                    <span>{exp.company}</span>
                    <span className="text-gray-600">•</span>
                    <span>{exp.location}</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    {exp.startDate} - {exp.current ? t("cv.current") : exp.endDate}
                  </p>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed text-lg">
                  {exp.description}
                </p>
                <ul className="space-y-2 mb-4">
                  {exp.achievements.slice(0, 3).map((achievement, i) => (
                    <li key={i} className="text-gray-400 flex items-start gap-2">
                      <span className="text-violet-600 mt-1.5">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.stack.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary" 
                      className="bg-gray-800 text-gray-300 hover:bg-gray-700 border-none"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Skills */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-violet-400 mb-8 flex items-center gap-3 border-b border-gray-800 pb-4">
            <Code className="w-6 h-6" />
            {t("cv.skills")}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.slice(0, 3).map((category) => (
              <div key={category.id} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
                <h4 className="font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-violet-500 rounded-full"></span>
                  {t(`stack.categories.${category.id}`)}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills
                    .filter((s) => s.category === category.id)
                    .slice(0, 6)
                    .map((skill) => (
                      <Badge 
                        key={skill.name} 
                        variant="outline"
                        className="border-gray-600 text-gray-300 hover:border-violet-500 hover:text-violet-400 transition-colors"
                      >
                        {skill.name}
                      </Badge>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Education */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-violet-400 mb-8 flex items-center gap-3 border-b border-gray-800 pb-4">
            <GraduationCap className="w-6 h-6" />
            {t("cv.education")}
          </h3>
          <div className="grid gap-6">
            {education.map((edu) => (
              <motion.div 
                key={edu.id} 
                className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-gray-800/30 rounded-xl border border-gray-800 hover:border-violet-900/50 transition-colors"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">
                    {edu.degree}
                  </h4>
                  <p className="text-violet-400 font-medium">
                    {edu.school}
                  </p>
                </div>
                <p className="text-sm text-gray-500 mt-2 md:mt-0 font-mono bg-gray-900 px-3 py-1 rounded-full border border-gray-800">
                  {edu.startDate} - {edu.endDate}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Certifications */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-violet-400 mb-8 flex items-center gap-3 border-b border-gray-800 pb-4">
            <Award className="w-6 h-6" />
            {t("cv.certifications")}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {certifications.map((cert) => (
              <a
                key={cert.id}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 bg-gray-800/30 rounded-xl border border-gray-800 hover:bg-gray-800 hover:border-violet-500/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-gray-900 flex items-center justify-center flex-shrink-0 border border-gray-700 group-hover:border-violet-500/50 transition-colors">
                  <Award className="w-6 h-6 text-violet-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-white truncate group-hover:text-violet-400 transition-colors">
                    {cert.name}
                  </h4>
                  <p className="text-sm text-gray-500 mb-1">
                    {cert.issuer}
                  </p>
                  <p className="text-xs text-gray-600 font-mono">
                    {cert.date}
                  </p>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-600 group-hover:text-violet-400 transition-colors flex-shrink-0" />
              </a>
            ))}
          </div>
        </motion.section>
      </div>
    </main>
  );
}
