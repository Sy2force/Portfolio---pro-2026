# Plan de Maintenance du Portfolio (6 Mois)

Ce document décrit la stratégie de maintenance pour assurer la pérennité, la sécurité et la performance du portfolio technique.

## 📅 Calendrier Récurrent

### Hebdomadaire
- [ ] **Veille de sécurité :** Vérifier les alertes de sécurité GitHub (Dependabot).
- [ ] **Contenu :** Ajouter des idées de projets ou d'articles de blog dans le backlog.

### Mensuel
- [ ] **Mises à jour mineures :** Exécuter `npm update` pour mettre à jour les paquets non-breaking.
- [ ] **Audit Performance :** Lancer un rapport Lighthouse sur la production pour vérifier les Core Web Vitals.
- [ ] **Backup Données :** Exporter les données critiques (bien que statiques ici, vérifier les configs).

---

## 🗺 Roadmap Trimestrielle

### Mois 1-2 : Consolidation & Feedback
- [ ] **Feedback Utilisateur :** Recueillir des avis sur l'UX/UI auprès de pairs ou mentors.
- [ ] **Optimisation Images :** Convertir les assets lourds en WebP/AVIF si ce n'est pas encore fait automatiquement.
- [ ] **Test E2E :** Mettre en place Cypress ou Playwright pour tester le parcours critique (Contact Form).

### Mois 3-4 : Contenu & SEO
- [ ] **Blog Technique :** Implémenter la section Blog (si prévue) avec MDX.
- [ ] **Études de Cas :** Rédiger des "Case Studies" approfondies pour les 2 projets principaux.
- [ ] **Audit SEO Technique :** Vérifier l'indexation Google Search Console et corriger les erreurs de crawl.

### Mois 5-6 : Évolutions Techniques
- [ ] **Mise à jour Majeure :** Évaluer la migration vers Next.js 15 (si stable).
- [ ] **Refactoring :** Identifier le code dupliqué et extraire des hooks/composants génériques.
- [ ] **Accessibilité :** Refaire un audit complet WCAG 2.1 AA.

---

## 📦 Gestion des Dépendances

### Politique de Mise à Jour
1.  **Patchs/Mineurs :** Mise à jour mensuelle automatique via `npm update`.
2.  **Majeurs :** Création d'une branche dédiée `chore/upgrade-deps` pour tester les migrations.

### Dépendances Critiques à Surveiller
*   `next`: Le cœur du framework. Suivre les releases notes attentivement.
*   `framer-motion`: Souvent des changements d'API sur les versions majeures.
*   `tailwindcss`: Surveiller Tailwind v4 (OxygN engine).

## 🧹 Dette Technique
*   **Nettoyage CSS :** Utiliser des outils pour détecter les classes Tailwind inutilisées si le projet grossit.
*   **Types TypeScript :** Renforcer le typage (éviter `any`, utiliser des Generics pour les composants UI).
*   **Traductions :** Vérifier qu'aucune clé de traduction ne manque dans `fr.json` ou `en.json`.

---

## 🆘 Procédure d'Urgence (Hotfix)
En cas de bug critique en production :
1.  Créer une branche `hotfix/nom-du-bug` depuis `main`.
2.  Corriger le bug et ajouter un test de non-régression si possible.
3.  Merger sur `main` et déployer immédiatement.
4.  Répercuter sur `develop` si elle existe.
