"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code, Palette, Rocket, Brain, Server, Smartphone } from "lucide-react";
import { useTranslation } from "@/context/LanguageContext";

export function Services() {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      id: "frontend",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: "backend",
      icon: Server,
      color: "from-green-500 to-emerald-500",
    },
    {
      id: "design",
      icon: Palette,
      color: "from-pink-500 to-rose-500",
    },
    {
      id: "ai",
      icon: Brain,
      color: "from-purple-500 to-violet-500",
    },
    {
      id: "mobile",
      icon: Smartphone,
      color: "from-orange-500 to-amber-500",
    },
    {
      id: "consulting",
      icon: Rocket,
      color: "from-indigo-500 to-blue-500",
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-sm font-medium mb-4">
            {t("home.services.badge")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t("home.services.title")}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t("home.services.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 hover:border-transparent hover:shadow-2xl transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}
              />
              
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {t(`home.services.items.${service.id}.title`)}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {t(`home.services.items.${service.id}.description`)}
              </p>

              <div className="flex flex-wrap gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full"
                  >
                    {t(`home.services.items.${service.id}.feature${i}`)}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
