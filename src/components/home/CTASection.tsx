"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/Button";

import { useTranslation } from "@/context/LanguageContext";

export function CTASection() {
  const { t } = useTranslation();

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-indigo-600 to-purple-700" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      
      {/* Floating elements */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-20 left-10 w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm"
      />
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-white/10 backdrop-blur-sm"
      />
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-1/2 right-1/4 w-16 h-16 rounded-xl bg-white/5 backdrop-blur-sm"
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            {t("home.cta.badge")}
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {t("home.cta.title")}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-200 to-pink-200">
              {t("home.cta.titleHighlight")}
            </span>
          </h2>

          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
            {t("home.cta.description")}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button
                size="xl"
                className="bg-white text-violet-600 hover:bg-gray-100 shadow-2xl shadow-black/20"
              >
                <MessageSquare className="w-5 h-5" />
                {t("home.cta.primary")}
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link href="/cv">
              <Button
                variant="outline"
                size="xl"
                className="border-white/30 text-white hover:bg-white/10"
              >
                <Calendar className="w-5 h-5" />
                {t("home.cta.secondary")}
              </Button>
            </Link>
          </div>

          <p className="mt-8 text-white/60 text-sm">
            {t("home.cta.footer")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
