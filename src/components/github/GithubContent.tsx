"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Star, GitFork, Code, Users, ExternalLink, Activity, CheckCircle } from "lucide-react";
import { useTranslation } from "@/context/LanguageContext";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { githubRepos, githubStats } from "@/data/github";
import { GitHubRepo, GitHubStats } from "@/types";

const GITHUB_USERNAME = "shayacoca";

const languageColors: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f7df1e",
  Python: "#3776ab",
  Go: "#00add8",
  Rust: "#dea584",
};

export default function GitHubContent() {
  const { t } = useTranslation();
  const [repos] = useState<GitHubRepo[]>(githubRepos);
  const [stats] = useState<GitHubStats>(githubStats);

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-sm font-medium mb-4">
            <Github className="w-4 h-4" />
            @{GITHUB_USERNAME}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t("github.title")}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            {t("github.subtitle")}
          </p>
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg">
              <Github className="w-5 h-5" />
              {t("github.viewOnGitHub")}
            </Button>
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { icon: Code, value: stats.public_repos, label: t("github.stats.repos") },
            { icon: Star, value: stats.total_stars, label: t("github.stats.stars") },
            { icon: Activity, value: stats.total_commits + "+", label: t("github.stats.commits") },
            { icon: Users, value: stats.followers, label: t("github.stats.followers") },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 + index * 0.05 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 text-center"
            >
              <stat.icon className="w-8 h-8 text-violet-600 dark:text-violet-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {[
            { label: "MIT License", color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" },
            { label: "Build Passing", color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400" },
            { label: t("github.badges.cleanCode"), color: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400" },
            { label: "TypeScript", color: "bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-400" },
            { label: "Responsive", color: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400" },
            { label: "Accessible", color: "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400" },
          ].map((badge) => (
            <motion.div
              key={badge.label}
              whileHover={{ scale: 1.05 }}
              className={`flex items-center gap-2 px-4 py-2 rounded-full ${badge.color} font-medium text-sm`}
            >
              <CheckCircle className="w-4 h-4" />
              {badge.label}
            </motion.div>
          ))}
        </motion.div>

        {/* Repositories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Repositories populaires
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo, index) => (
              <motion.a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.05 }}
                whileHover={{ y: -4 }}
                className="group bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:border-violet-300 dark:hover:border-violet-700 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                      <Github className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                      {repo.name}
                    </h3>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {t(`github.repos.${repo.name.toLowerCase()}.description`) || repo.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {repo.topics.slice(0, 3).map((topic) => (
                    <Badge key={topic} variant="secondary" className="text-xs">
                      {topic}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
                      <Star className="w-4 h-4" />
                      {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
                      <GitFork className="w-4 h-4" />
                      {repo.forks_count}
                    </span>
                  </div>
                  <span className="flex items-center gap-2">
                    <span
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: languageColors[repo.language] || "#6b7280" }}
                    />
                    <span className="text-gray-600 dark:text-gray-400">
                      {repo.language}
                    </span>
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Découvrez tous mes projets open source sur GitHub
          </p>
          <a
            href={`https://github.com/${GITHUB_USERNAME}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="lg">
              Voir tous les repositories
              <ExternalLink className="w-4 h-4" />
            </Button>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
