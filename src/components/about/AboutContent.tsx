
import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { Download, Briefcase, GraduationCap, Award, Heart, Lightbulb, Target, Zap, MapPin, Mail, Calendar, ArrowRight } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { experiences, education, certifications } from "@/data/experience";
import { skills, skillCategories } from "@/data/skills";

function Timeline() {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        className="mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
          <Briefcase className="w-8 h-8 text-violet-600" />
          {t("about.timeline.title")}
        </h2>
      </motion.div>

      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-600 via-indigo-600 to-purple-600 transform md:-translate-x-1/2" />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15 }}
              className={`relative flex flex-col md:flex-row gap-8 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-violet-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg transform -translate-x-1/2 mt-1.5 z-10" />

              {/* Date (Desktop) */}
              <div className={`hidden md:flex flex-1 justify-${index % 2 === 0 ? "start" : "end"} items-start pt-1`}>
                <Badge variant="outline" className="border-violet-200 dark:border-violet-800 text-violet-700 dark:text-violet-300">
                  {exp.startDate} - {exp.current ? t("cv.current") : exp.endDate}
                </Badge>
              </div>

              {/* Content Card */}
              <div className="flex-1 ml-12 md:ml-0">
                <div className="bg-white dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300 relative group">
                  {/* Mobile Date */}
                  <div className="md:hidden mb-4">
                    <Badge variant="secondary" className="bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300">
                      {exp.startDate} - {exp.current ? t("cv.current") : exp.endDate}
                    </Badge>
                  </div>

                  <div className="flex flex-col gap-1 mb-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-violet-600 dark:text-violet-400 font-medium flex items-center gap-2">
                      <Briefcase className="w-4 h-4" />
                      {exp.company}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </p>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-violet-400 flex-shrink-0" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100 dark:border-gray-700">
                    {exp.stack.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="outline" 
                        className="bg-gray-50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700 hover:border-violet-300 dark:hover:border-violet-700 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        className="mb-12"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
          {t("about.skills.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          {t("about.skills.subtitle")}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: catIndex * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className={`w-2 h-8 rounded-full bg-gradient-to-b from-${category.color || 'violet'}-500 to-${category.color || 'indigo'}-600`}></span>
              {t(`stack.categories.${category.id}`)}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills
                .filter((s) => s.category === category.id)
                .slice(0, 6)
                .map((skill) => (
                  <div 
                    key={skill.name} 
                    className="px-3 py-1.5 rounded-lg bg-gray-50 dark:bg-gray-700/50 text-sm font-medium text-gray-700 dark:text-gray-200 border border-gray-100 dark:border-gray-600 hover:bg-violet-50 dark:hover:bg-violet-900/20 hover:text-violet-700 dark:hover:text-violet-300 hover:border-violet-200 dark:hover:border-violet-800 transition-colors cursor-default"
                  >
                    {skill.name}
                  </div>
                ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function MindsetSection() {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    { id: "excellence", icon: Target },
    { id: "passion", icon: Heart },
    { id: "learning", icon: Lightbulb },
    { id: "vision", icon: Zap },
  ];

  return (
    <section ref={ref} className="py-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-12"
      >
        {t("about.mindset.title")}
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {values.map((value, index) => (
          <motion.div
            key={value.id}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.1 }}
            className="bg-gradient-to-br from-violet-50 to-indigo-50 dark:from-violet-900/20 dark:to-indigo-900/20 rounded-2xl p-6 border border-violet-100 dark:border-violet-800"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center mb-4">
              <value.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {t(`about.mindset.items.${value.id}.title`)}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {t(`about.mindset.items.${value.id}.description`)}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function ProfileHeader() {
  const { t } = useTranslation();

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-20"
    >
      <div className="relative bg-gradient-to-br from-violet-600 via-indigo-600 to-purple-700 rounded-3xl p-8 md:p-12 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/20 rounded-full blur-2xl" />
        
        <div className="relative flex flex-col md:flex-row items-center gap-8">
          {/* Avatar */}
          <div className="relative">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-3xl bg-white/20 backdrop-blur-sm flex items-center justify-center border-4 border-white/30">
              <span className="text-5xl md:text-6xl font-bold text-white">SA</span>
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-violet-600 flex items-center justify-center">
              <span className="sr-only">Disponible</span>
            </div>
          </div>

          {/* Info */}
          <div className="text-center md:text-left flex-1">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Shay Acoca
            </h1>
            <p className="text-xl text-white/90 mb-4">
              {t("about.role")}
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-white/80 text-sm mb-6">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4" />
                {t("contact.info.country")}
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-4 h-4" />
                shay.acoca@email.com
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                Formation HackerU 2024
              </span>
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              <Link to="/contact">
                <Button className="bg-white text-violet-600 hover:bg-gray-100">
                  Me contacter
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                <Download className="w-4 h-4" />
                Télécharger CV
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-6">
            {[
              { value: "6+", label: "Projets" },
              { value: "32", label: "Technologies" },
              { value: "2024", label: "HackerU" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-xs text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Personal Introduction */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-12 bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700"
      >
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          {t("about.bio.title")}
        </h2>
        <div className="prose prose-violet dark:prose-invert max-w-none space-y-4">
          <p 
            className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed"
            dangerouslySetInnerHTML={{ __html: t("about.bio.p1") }}
          />
          <p 
            className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed"
            dangerouslySetInnerHTML={{ __html: t("about.bio.p2") }}
          />
          <p 
            className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed"
            dangerouslySetInnerHTML={{ __html: t("about.bio.p3") }}
          />
          <p 
            className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed"
            dangerouslySetInnerHTML={{ __html: t("about.bio.p4") }}
          />
        </div>
      </motion.div>
    </motion.section>
  );
}

export default function AboutContent() {
  const { t } = useTranslation();

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <ProfileHeader />

        {/* Mindset */}
        <MindsetSection />

        {/* Timeline */}
        <Timeline />

        {/* Skills */}
        <SkillsSection />

        {/* Education */}
        <section className="py-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-12 flex items-center gap-3">
            <GraduationCap className="w-8 h-8 text-violet-600" />
            {t("cv.education")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {edu.degree}
                </h3>
                <p className="text-violet-600 dark:text-violet-400 font-medium">
                  {edu.school}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  {edu.location} • {edu.startDate} - {edu.endDate}
                </p>
                {edu.description && (
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {edu.description}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="py-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-12 flex items-center gap-3">
            <Award className="w-8 h-8 text-violet-600" />
            {t("cv.certifications")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <motion.a
                key={cert.id}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:border-violet-300 dark:hover:border-violet-700 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-100 to-indigo-100 dark:from-violet-900/30 dark:to-indigo-900/30 flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-violet-600 dark:text-violet-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                  {cert.name}
                </h3>
                <p className="text-sm text-violet-600 dark:text-violet-400">
                  {cert.issuer}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                  {cert.date}
                </p>
              </motion.a>
            ))}
          </div>
        </section>

        {/* Download CV */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center py-16"
        >
          <Button size="lg" className="group" variant="luxury">
            <Download className="w-5 h-5" />
            {t("about.downloadCV")}
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
