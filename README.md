# Portfolio CTO - Ultra-Premium Developer Portfolio

Un portfolio web moderne, immersif et professionnel conçu pour valoriser un profil de CTO créatif, développeur fullstack et designer UX/UI.

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38B2AC?style=flat-square&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-FF0055?style=flat-square&logo=framer)
![Three.js](https://img.shields.io/badge/Three.js-WebGL-black?style=flat-square&logo=three.js)

## ✨ Fonctionnalités

- **Hero immersif** avec fond WebGL 3D animé (Three.js)
- **Animations fluides** avec Framer Motion et GSAP
- **Thème clair/sombre** automatique avec next-themes
- **Multilingue** FR/EN avec système i18n custom
- **SEO optimisé** avec métadonnées Open Graph et Schema.org
- **PWA Ready** - installable comme application
- **Accessibilité** ARIA complète et navigation clavier
- **Responsive** - design mobile-first

## 📄 Pages

| Page | Description |
|------|-------------|
| `/` | Landing immersive avec hero 3D et projets récents |
| `/about` | Présentation, timeline, compétences, CV téléchargeable |
| `/projects` | Showcase de projets avec filtres par stack |
| `/projects/[slug]` | Détail d'un projet avec challenges et solutions |
| `/stack` | Visualisation interactive des technologies |
| `/videos` | Galerie de démonstrations et micro-interactions |
| `/cv` | CV interactif complet avec téléchargement PDF |
| `/contact` | Formulaire de contact avancé |
| `/github` | Statistiques GitHub et repositories publics |

## 🛠️ Stack Technique

### Frontend
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion, GSAP
- **3D:** Three.js, React Three Fiber
- **UI Components:** Radix UI, Lucide Icons

### Fonctionnalités
- **Forms:** React Hook Form + Zod
- **Theming:** next-themes
- **i18n:** Système custom avec JSON

## 🚀 Installation

```bash
# Cloner le repository
git clone https://github.com/yourusername/portfolio-cto.git
cd portfolio-cto

# Installer les dépendances
npm install --legacy-peer-deps

# Lancer le serveur de développement
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 📁 Structure du Projet

```
src/
├── app/                    # Pages Next.js (App Router)
│   ├── about/
│   ├── contact/
│   ├── cv/
│   ├── github/
│   ├── projects/
│   ├── stack/
│   ├── videos/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── home/              # Composants page d'accueil
│   ├── layout/            # Navbar, Footer, Loader
│   ├── projects/          # Cartes et détails projets
│   ├── providers/         # Theme, Language providers
│   ├── three/             # Composants Three.js
│   └── ui/                # Composants UI réutilisables
├── context/               # React Context (Language)
├── data/                  # Données statiques (projets, skills...)
├── hooks/                 # Custom hooks
├── i18n/                  # Traductions FR/EN
├── lib/                   # Utilitaires
└── types/                 # Types TypeScript
```

## 🎨 Personnalisation

### Modifier vos informations
1. **Données personnelles:** `src/data/navigation.ts` (siteConfig)
2. **Projets:** `src/data/projects.ts`
3. **Compétences:** `src/data/skills.ts`
4. **Expériences:** `src/data/experience.ts`
5. **Vidéos:** `src/data/videos.ts`

### Modifier les traductions
- Français: `src/i18n/messages/fr.json`
- Anglais: `src/i18n/messages/en.json`

### Modifier les couleurs
- Variables CSS: `src/app/globals.css`
- Config Tailwind: `tailwind.config.ts`

## 🚀 Déploiement sur Vercel

```bash
# Build de production
npm run build

# Ou déployer directement
npx vercel
```

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/portfolio-cto)

## 📝 Scripts Disponibles

```bash
npm run dev      # Serveur de développement
npm run build    # Build de production
npm run start    # Serveur de production
npm run lint     # Linter ESLint
```

## 🔧 Configuration Requise

- Node.js 18+
- npm 9+

## 📄 License

MIT License - Libre d'utilisation et de modification.

---

Créé avec ❤️ et ☕ par [Votre Nom](https://github.com/yourusername)
