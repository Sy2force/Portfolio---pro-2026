
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ProfessionalSummary() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl mx-auto px-6 py-12 text-gray-100 text-lg leading-relaxed"
    >
      <h2 className="text-2xl font-bold mb-6 text-violet-400">Résumé Professionnel</h2>

      <p>
        Développeur Fullstack et CTO junior basé en Israël, formé chez HackerU, avec une expertise en conception de produits digitaux performants et évolutifs.
        J’interviens sur toutes les phases du cycle de vie d’une application web : cadrage produit, architecture technique, développement frontend/backend, sécurité, UX/UI, performance et déploiement cloud.
      </p>

      <p className="mt-4">
        Spécialisé dans les technologies modernes (React, Next.js, TypeScript, Node.js, Express, MongoDB, Tailwind CSS), j’ai conçu et livré plusieurs projets complets pour des indépendants, PME et startups,
        notamment des solutions e-commerce, des dashboards personnalisés, des systèmes d’authentification sécurisés avec rôles, et des interfaces animées haut de gamme.
      </p>

      <p className="mt-4">
        Mon approche est centrée sur la qualité logicielle, l’accessibilité et l’alignement produit/business. Ma double compétence en développement web et marketing digital
        me permet de créer des produits à la fois performants techniquement et pertinents commercialement.
      </p>

      <p className="mt-4">
        Ancien soldat dans l’unité Guivati de Tsahal, j’ai développé discipline, leadership et résilience – des qualités que j’applique au quotidien dans la gestion de projets tech, en équipe ou en autonomie.
      </p>

      <p className="mt-4">
        Je suis en veille constante sur les dernières technologies (DevOps, IA, CI/CD, design system, architecture scalable) et j’ai à cœur d’évoluer dans un environnement challengeant et innovant.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <a 
          href="/cv-shay-acoca.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-violet-600 hover:bg-violet-700 px-6 py-3 rounded text-white text-center font-semibold transition-colors duration-200"
        >
          📄 Télécharger le CV
        </a>
        <Link 
          to="/projects"
          className="border border-violet-500 hover:bg-violet-900 px-6 py-3 rounded text-white text-center font-semibold transition-colors duration-200"
        >
          🎯 Voir mes projets
        </Link>
      </div>
    </motion.section>
  );
}
