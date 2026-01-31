
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "@/hooks/useTranslation";

export default function ProfessionalSummary() {
  const { t } = useTranslation();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl mx-auto px-6 py-12 text-gray-100 text-lg leading-relaxed"
    >
      <h2 className="text-2xl font-bold mb-6 text-violet-400">{t("cv.summary.title")}</h2>

      <p>{t("cv.summary.p1")}</p>

      <p className="mt-4">{t("cv.summary.p2")}</p>

      <p className="mt-4">{t("cv.summary.p3")}</p>

      <p className="mt-4">{t("cv.summary.p4")}</p>

      <p className="mt-4">{t("cv.summary.p5")}</p>

      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <a 
          href="/cv-shay-acoca.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-violet-600 hover:bg-violet-700 px-6 py-3 rounded text-white text-center font-semibold transition-colors duration-200"
        >
          📄 {t("cv.summary.download")}
        </a>
        <Link 
          to="/projects"
          className="border border-violet-500 hover:bg-violet-900 px-6 py-3 rounded text-white text-center font-semibold transition-colors duration-200"
        >
          🎯 {t("cv.summary.projects")}
        </Link>
      </div>
    </motion.section>
  );
}
