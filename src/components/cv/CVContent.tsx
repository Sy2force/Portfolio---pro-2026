
import { motion } from "framer-motion";
import { Download, Mail, MapPin, Briefcase, GraduationCap, Award, Code, ExternalLink, FileText, Printer } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { experiences, education, certifications } from "@/data/experience";
import { skills, skillCategories } from "@/data/skills";
import { Link } from "react-router-dom";

export default function CVContent() {
  const { t } = useTranslation();

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-sm font-medium mb-4">
            <FileText className="w-4 h-4" />
            Mis à jour en 2024
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t("cv.title")}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            {t("cv.subtitle")}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg">
              <Download className="w-5 h-5" />
              {t("cv.downloadPDF")}
            </Button>
            <Button variant="secondary" size="lg" onClick={handlePrint}>
              <Printer className="w-5 h-5" />
              Imprimer
            </Button>
            <Link to="/contact">
              <Button variant="outline" size="lg">
                <Mail className="w-5 h-5" />
                {t("cv.hireMe")}
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* CV Content */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-xl">
          {/* Profile Header */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-r from-violet-600 to-indigo-600 p-8 text-white"
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-24 h-24 rounded-2xl bg-white/20 flex items-center justify-center">
                <span className="text-4xl font-bold">SA</span>
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold mb-2">Shay Acoca</h2>
                <p className="text-xl text-white/90 mb-3">CTO Junior & Développeur Fullstack</p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-white/80">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {t("contact.info.country")}
                  </span>
                  <span className="flex items-center gap-1">
                    <Mail className="w-4 h-4" />
                    shay.acoca@email.com
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="p-8 space-y-12">
            {/* Summary */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Développeur fullstack et CTO junior formé chez HackerU. Passionné par la création 
                d&apos;interfaces modernes et d&apos;expériences utilisateur mémorables. Expert en React, Next.js, 
                TypeScript et animations CSS. Curieux, créatif et toujours en quête d&apos;innovation.
              </p>
            </motion.section>

            {/* Experience */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <Briefcase className="w-6 h-6 text-violet-600" />
                {t("cv.experience")}
              </h3>
              <div className="space-y-8">
                {experiences.map((exp) => (
                  <motion.div
                    key={exp.id}
                    className="relative pl-6 border-l-2 border-violet-200 dark:border-violet-800"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-violet-600" />
                    <div className="mb-2">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {exp.title}
                      </h4>
                      <p className="text-violet-600 dark:text-violet-400 font-medium">
                        {exp.company} • {exp.location}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {exp.startDate} - {exp.current ? t("cv.current") : exp.endDate}
                      </p>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      {exp.description}
                    </p>
                    <ul className="space-y-1 mb-3">
                      {exp.achievements.slice(0, 3).map((achievement, i) => (
                        <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                          <span className="text-violet-600">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-1">
                      {exp.stack.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
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
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <Code className="w-6 h-6 text-violet-600" />
                {t("cv.skills")}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillCategories.slice(0, 3).map((category) => (
                  <div key={category.id}>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-3">
                      {t(`stack.categories.${category.id}`)}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skills
                        .filter((s) => s.category === category.id)
                        .slice(0, 6)
                        .map((skill) => (
                          <Badge key={skill.name} variant="outline">
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
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <GraduationCap className="w-6 h-6 text-violet-600" />
                {t("cv.education")}
              </h3>
              <div className="space-y-4">
                {education.map((edu) => (
                  <motion.div 
                    key={edu.id} 
                    className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl"
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {edu.degree}
                      </h4>
                      <p className="text-violet-600 dark:text-violet-400">
                        {edu.school}
                      </p>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 md:mt-0">
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
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <Award className="w-6 h-6 text-violet-600" />
                {t("cv.certifications")}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {certifications.map((cert) => (
                  <a
                    key={cert.id}
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center flex-shrink-0">
                      <Award className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-gray-900 dark:text-white truncate group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                        {cert.name}
                      </h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {cert.issuer} • {cert.date}
                      </p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-violet-600 transition-colors flex-shrink-0" />
                  </a>
                ))}
              </div>
            </motion.section>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Intéressé par mon profil ? Discutons de votre projet !
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button size="lg">
                {t("cv.proposeProject")}
              </Button>
            </Link>
            <Link to="/projects">
              <Button variant="outline" size="lg">
                Voir mes projets
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
