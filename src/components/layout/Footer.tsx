
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Heart, Code } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { socialLinks } from "@/data/navigation";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Github,
  Linkedin,
  Twitter,
  Mail,
};

export function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                Portfolio CTO
              </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 max-w-md mb-6">
              CTO créatif, développeur fullstack et designer UX/UI. 
              Je transforme des idées ambitieuses en produits digitaux exceptionnels.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon];
                return (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-violet-100 dark:hover:bg-violet-900/30 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                    aria-label={link.name}
                  >
                    {Icon && <Icon className="w-5 h-5" />}
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              {[
                { label: t("nav.about"), href: "/about" },
                { label: t("nav.projects"), href: "/projects" },
                { label: t("nav.stack"), href: "/stack" },
                { label: t("nav.cv"), href: "/cv" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              Contact
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:shay.acoca@email.com"
                  className="text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                >
                  shay.acoca@email.com
                </a>
              </li>
              <li className="text-gray-600 dark:text-gray-400">
                {t("contact.info.country")}
              </li>
              <li>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 mt-2 px-4 py-2 rounded-lg bg-violet-600 text-white hover:bg-violet-700 transition-colors text-sm font-medium"
                >
                  {t("cv.hireMe")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center gap-1">
              © {currentYear} Portfolio CTO. {t("footer.rights")}.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center gap-1">
              {t("footer.madeWith")} <Heart className="w-4 h-4 text-red-500" /> {t("footer.and")} <Code className="w-4 h-4 text-violet-500" />
            </p>
            <p className="text-gray-500 dark:text-gray-500 text-xs">
              {t("footer.builtWith")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
