
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Monitor, Server, Cloud, Palette, Blocks, Sparkles } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { skills, skillCategories } from "@/data/skills";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Monitor,
  Server,
  Cloud,
  Palette,
  Blocks,
  Sparkles,
};

export default function StackContent() {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState<string>("all");

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-sm font-medium mb-4">
            {skills.length}+ Technologies
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t("stack.title")}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t("stack.subtitle")}
          </p>
        </motion.div>

        {/* Personal Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="bg-gradient-to-br from-violet-50 to-indigo-50 dark:from-violet-900/20 dark:to-indigo-900/20 rounded-2xl p-6 md:p-8 border border-violet-100 dark:border-violet-800 mb-12"
        >
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            {t("stack.intro.title")}
          </h2>
          <p 
            className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4"
            dangerouslySetInnerHTML={{ __html: t("stack.intro.p1") }}
          />
          <p 
            className="text-gray-600 dark:text-gray-400 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: t("stack.intro.p2") }}
          />
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          <button
            onClick={() => setActiveCategory("all")}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
              activeCategory === "all"
                ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-600/25"
                : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:border-violet-300 dark:hover:border-violet-700"
            }`}
          >
            <Sparkles className="w-4 h-4" />
            Toutes ({skills.length})
          </button>
          {skillCategories.map((category) => {
            const Icon = iconMap[category.icon];
            const count = skills.filter(s => s.category === category.id).length;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-600/25"
                    : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:border-violet-300 dark:hover:border-violet-700"
                }`}
              >
                {Icon && <Icon className="w-4 h-4" />}
                {t(`stack.categories.${category.id}.label`)} ({count})
              </button>
            );
          })}
        </motion.div>

        {/* Skills Grid */}
        <div ref={ref} className="space-y-16">
          {skillCategories.map((category, catIndex) => {
            // Filter logic: show category section only if "all" is selected OR if this specific category is selected
            if (activeCategory !== "all" && activeCategory !== category.id) return null;

            const Icon = iconMap[category.icon];
            const categorySkills = skills.filter((s) => s.category === category.id);

            return (
              <motion.section
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: catIndex * 0.1 }}
              >
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center">
                      {Icon && <Icon className="w-6 h-6 text-white" />}
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {t(`stack.categories.${category.id}.label`)}
                    </h2>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 ml-15 pl-0.5">
                    {t(`stack.categories.${category.id}.description`)}
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {categorySkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: catIndex * 0.1 + index * 0.05 }}
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
                      style={{
                        borderColor: "transparent",
                      }}
                    >
                      {/* Hover Gradient Border Effect */}
                      <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                        style={{
                          background: `linear-gradient(135deg, ${skill.color}20 0%, transparent 100%)`
                        }}
                      />
                      <div 
                        className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                        style={{ backgroundColor: skill.color }}
                      />

                      {/* Content */}
                      <div className="relative z-10 flex flex-col items-center">
                        <div
                          className="w-16 h-16 rounded-2xl mb-4 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-inner"
                          style={{ 
                            backgroundColor: `${skill.color}10`,
                            color: skill.color 
                          }}
                        >
                          <span className="text-3xl font-bold">
                            {skill.name.charAt(0)}
                          </span>
                        </div>

                        <h3 className="text-base font-bold text-gray-900 dark:text-white text-center mb-1">
                          {skill.name}
                        </h3>
                        
                        <div className="flex items-center gap-1">
                           <div className="flex gap-0.5">
                             {[...Array(5)].map((_, i) => (
                               <div 
                                 key={i}
                                 className={`w-1.5 h-1.5 rounded-full ${
                                   i < Math.round(skill.level / 20) 
                                     ? "opacity-100" 
                                     : "opacity-20"
                                 }`}
                                 style={{ backgroundColor: skill.color }}
                               />
                             ))}
                           </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            );
          })}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: skills.length + "+", label: "Technologies" },
            { value: "3", label: "Ans d'expérience" },
            { value: "50+", label: "Projets réalisés" },
            { value: "100%", label: "Passion" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-violet-50 to-indigo-50 dark:from-violet-900/20 dark:to-indigo-900/20 rounded-2xl p-6 text-center border border-violet-100 dark:border-violet-800"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
