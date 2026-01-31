import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useTranslation } from "@/hooks/useTranslation";

export function NotFound() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative mb-8"
        >
          <h1 className="text-9xl font-bold text-gray-200 dark:text-gray-800">{t("notFound.title")}</h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold text-gray-900 dark:text-white bg-white dark:bg-gray-950 px-4 py-2 rounded-xl border border-gray-100 dark:border-gray-800 shadow-xl">
              {t("notFound.badge")}
            </span>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-md mx-auto"
        >
          {t("notFound.description")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-center gap-4"
        >
          <Link to="/">
            <Button size="lg" className="gap-2">
              <Home className="w-4 h-4" />
              {t("notFound.home")}
            </Button>
          </Link>
          <Button variant="outline" size="lg" className="gap-2" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-4 h-4" />
            {t("notFound.back")}
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
