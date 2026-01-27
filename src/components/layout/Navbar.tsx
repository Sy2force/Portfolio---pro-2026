
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { 
  Menu, 
  X, 
  Sun, 
  Moon, 
  Monitor,
  Globe,
  ChevronDown 
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/hooks/useTranslation";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showThemeMenu, setShowThemeMenu] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const { pathname } = useLocation();
  const { theme, setTheme } = useTheme();
  const { t, locale, setLocale } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const }
    }
  };

  const menuVariants = {
    closed: { 
      opacity: 0,
      x: "100%",
      transition: { duration: 0.3, ease: "easeInOut" as const }
    },
    open: { 
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: "easeInOut" as const }
    }
  };

  const linkVariants = {
    closed: { opacity: 0, x: 20 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.3 }
    })
  };

  return (
    <motion.header
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="relative z-10 flex items-center gap-2"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <span className="hidden sm:block font-bold text-xl bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                Portfolio
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {[
              { label: 'home', href: '/' },
              { label: 'about', href: '/about' },
              { label: 'projects', href: '/projects' },
              { label: 'stack', href: '/stack' },
              { label: 'cv', href: '/cv' },
              { label: 'contact', href: '/contact' },
            ].map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                  pathname === item.href
                    ? "text-white dark:text-white bg-gradient-to-r from-violet-600 to-indigo-600 shadow-md"
                    : "text-gray-700 dark:text-gray-200 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-violet-50 dark:hover:bg-gray-800"
                )}
              >
                {t(`nav.${item.label}`)}
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => {
                  setShowLangMenu(!showLangMenu);
                  setShowThemeMenu(false);
                }}
                className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-violet-50 dark:hover:bg-gray-800 transition-colors"
                aria-label="Change language"
              >
                <Globe className="w-4 h-4" />
                <span className="hidden sm:inline text-base">{locale === 'fr' ? '🇫🇷' : '🇬🇧'}</span>
                <ChevronDown className="w-3 h-3" />
              </button>
              <AnimatePresence>
                {showLangMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2 w-36 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
                  >
                    {[{ code: 'fr', flag: '🇫🇷', name: 'Français' }, { code: 'en', flag: '🇬🇧', name: 'English' }].map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLocale(lang.code as any);
                          setShowLangMenu(false);
                        }}
                        className={cn(
                          "w-full px-4 py-2 text-left text-sm flex items-center gap-2 transition-colors",
                          locale === lang.code
                            ? "bg-violet-50 dark:bg-violet-900/20 text-violet-600 dark:text-violet-400 font-medium"
                            : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                        )}
                      >
                        <span className="text-base">{lang.flag}</span>
                        <span>{lang.name}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Theme Switcher */}
            <div className="relative">
              <button
                onClick={() => {
                  setShowThemeMenu(!showThemeMenu);
                  setShowLangMenu(false);
                }}
                className="flex items-center gap-1 p-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-violet-50 dark:hover:bg-gray-800 transition-colors"
                aria-label="Change theme"
              >
                {theme === "dark" ? (
                  <Moon className="w-5 h-5" />
                ) : theme === "light" ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Monitor className="w-5 h-5" />
                )}
              </button>
              <AnimatePresence>
                {showThemeMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2 w-36 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
                  >
                    {[
                      { value: "light", icon: Sun, label: t("theme.light") },
                      { value: "dark", icon: Moon, label: t("theme.dark") },
                      { value: "system", icon: Monitor, label: t("theme.system") },
                    ].map(({ value, icon: Icon, label }) => (
                      <button
                        key={value}
                        onClick={() => {
                          setTheme(value);
                          setShowThemeMenu(false);
                        }}
                        className={cn(
                          "w-full px-4 py-2 text-left text-sm flex items-center gap-2 transition-colors",
                          theme === value
                            ? "bg-violet-50 dark:bg-violet-900/20 text-violet-600 dark:text-violet-400"
                            : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                        )}
                      >
                        <Icon className="w-4 h-4" />
                        <span>{label}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 top-16 lg:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl z-40 border-t border-gray-200 dark:border-gray-800"
          >
            <div className="flex flex-col p-6 space-y-2">
              {[
                { label: 'home', href: '/' },
                { label: 'about', href: '/about' },
                { label: 'projects', href: '/projects' },
                { label: 'stack', href: '/stack' },
                { label: 'cv', href: '/cv' },
                { label: 'contact', href: '/contact' },
              ].map((item, i) => (
                <motion.div
                  key={item.href}
                  variants={linkVariants}
                  custom={i}
                  initial="closed"
                  animate="open"
                >
                  <Link
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "block px-4 py-3 rounded-xl text-lg font-medium transition-all duration-200",
                      pathname === item.href
                        ? "text-white dark:text-white bg-gradient-to-r from-violet-600 to-indigo-600 shadow-md"
                        : "text-gray-700 dark:text-gray-200 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-violet-50 dark:hover:bg-gray-800/50"
                    )}
                  >
                    {t(`nav.${item.label}`)}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
