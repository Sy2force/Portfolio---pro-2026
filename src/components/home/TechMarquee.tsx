"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/context/LanguageContext";
import { skills } from "@/data/skills";

export function TechMarquee() {
  const { t } = useTranslation();
  const duplicatedSkills = [...skills, ...skills];

  return (
    <section className="py-16 overflow-hidden bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <h2 className="text-center text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
          {t("home.stats.technologies")}
        </h2>
      </div>
      
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 dark:from-gray-900/50 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 dark:from-gray-900/50 to-transparent z-10" />
        
        <motion.div
          animate={{ x: [0, -50 * skills.length] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
          className="flex gap-8"
        >
          {duplicatedSkills.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="flex items-center gap-3 px-6 py-3 bg-white dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700 shadow-sm whitespace-nowrap"
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold"
                style={{ backgroundColor: `${skill.color}20`, color: skill.color }}
              >
                {skill.name.charAt(0)}
              </div>
              <span className="font-medium text-gray-700 dark:text-gray-300">
                {skill.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
