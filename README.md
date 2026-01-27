# Portfolio CTO - Architecture & Documentation

> **Vision:** Un portfolio performant, accessible et maintenable démontrant une expertise technique Fullstack & CTO Junior.

![React](https://img.shields.io/badge/React-18.2-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=for-the-badge&logo=vite)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0-FF0055?style=for-the-badge&logo=framer)

## 🏗 Architecture Technique

Ce projet est une **Single Page Application (SPA)** moderne construite avec React et Vite.

### Choix Technologiques

| Technologie | Usage | Justification CTO |
|-------------|-------|-------------------|
| **React 18** | Library | Composants réutilisables, écosystème mature, performance optimale. |
| **Vite** | Build Tool | Build ultra-rapide, HMR instantané, optimisation automatique. |
| **React Router DOM** | Routing | Navigation SPA fluide, gestion d'état d'URL, code splitting. |
| **TypeScript** | Langage | Typage strict pour réduire la dette technique et faciliter la maintenance. |
| **Tailwind CSS** | Styling | Utility-first pour une itération rapide et un bundle CSS minimal. |
| **Framer Motion** | Animation | Animations déclaratives fluides (60fps) et gestion des gestures complexe. |
| **Radix UI** | Composants | Primitives accessibles (headless UI) pour garantir la conformité WCAG. |
| **Zod** | Validation | Validation de schémas runtime (formulaires contact) pour la robustesse des données. |

### Structure du Projet

```bash
src/
├── pages/                # Pages de l'application (Home, About, Projects...)
├── components/           # Composants React
│   ├── ui/               # Primitives design system (Boutons, Cards...)
│   ├── layout/           # Structure globale (Navbar, Footer...)
│   ├── home/             # Composants page d'accueil
│   ├── projects/         # Composants projets
│   └── [feature]/        # Composants liés à une feature spécifique
├── hooks/                # Custom Hooks (logique réutilisable)
├── lib/                  # Utilitaires purs (helpers, formatters)
├── data/                 # Single Source of Truth (Données statiques)
├── context/              # React Context (Language, Theme)
└── i18n/                 # Dictionnaires de traduction (fr.json, en.json)
```

## 🚀 Fonctionnalités Clés

1.  **Routing SPA**
    *   React Router DOM pour une navigation fluide sans rechargement.
    *   Routes dynamiques pour les détails de projets.

2.  **Performance**
    *   Build optimisé avec Vite (code splitting, tree shaking).
    *   Lazy loading des composants lourds.
    *   Images optimisées avec attributs `loading="lazy"`.

3.  **Internationalisation (i18n)**
    *   Système léger basé sur React Context.
    *   Contenu séparé (`fr.json`, `en.json`) pour faciliter l'édition.
    *   Persistance de la langue dans localStorage.

4.  **Accessibilité (A11y)**
    *   Navigation au clavier complète.
    *   Gestion du focus et attributs ARIA via Radix UI.
    *   Contraste des couleurs vérifié.

5.  **Dark Mode**
    *   Thème sombre/clair avec next-themes.
    *   Persistance des préférences utilisateur.

## 🛠 Installation & Développement

```bash
# Installation
npm install

# Serveur de dev (http://localhost:5173)
npm run dev

# Linting & Type checking
npm run lint

# Build de production
npm run build

# Preview du build
npm run preview
```

## 📦 Scripts de Maintenance

- **Audit Accessibilité :** Voir `docs/A11Y_CHECKLIST.md`
- **Plan de Maintenance :** Voir `docs/MAINTENANCE_PLAN.md`

## 🤝 Contribution & Standards

- **Commits :** Conventionnal Commits (`feat:`, `fix:`, `chore:`, `docs:`).
- **Style :** Prettier + ESLint configurés. Pas de `any` explicite autorisé.
- **Review :** Chaque PR doit passer le build et le lint.

---

*Développé par [Shay Acoca](https://github.com/shayacoca). Code source sous licence MIT.*
