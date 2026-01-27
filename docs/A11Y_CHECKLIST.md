# Protocole de Test d'Accessibilité (A11y)

> **Objectif :** Garantir que le portfolio est utilisable par tous, indépendamment des capacités physiques ou techniques.

## 🛠 Outils Requis

1.  **Navigateur :** Chrome ou Firefox
2.  **Extensions :**
    *   [Lighthouse](https://developers.google.com/web/tools/lighthouse) (Intégré aux DevTools)
    *   [WAVE Evaluation Tool](https://wave.webaim.org/extension/)
    *   [axe DevTools](https://www.deque.com/axe/devtools/)
3.  **Lecteur d'écran (Optionnel mais recommandé) :**
    *   Mac: VoiceOver (`Cmd + F5`)
    *   Windows: NVDA (Gratuit)

---

## ✅ Checklist de Validation

### 1. Navigation au Clavier ⌨️
Tous les éléments interactifs doivent être accessibles sans souris.

- [ ] **Tab Order :** L'ordre de tabulation suit la logique visuelle (Haut -> Bas, Gauche -> Droite).
- [ ] **Focus Visible :** Chaque élément actif (lien, bouton, input) a un contour visible (`outline` ou `ring`) lors du focus.
- [ ] **Pas de piège au clavier :** On peut entrer ET sortir de tous les composants (modales, menus).
- [ ] **Liens d'évitement :** Un lien "Skip to content" est présent au chargement (optionnel mais bon pour le SEO/A11y).

### 2. Sémantique HTML 🏗
Utiliser les bonnes balises pour le bon usage.

- [ ] **Structure des Titres :** Hiérarchie stricte `h1` -> `h2` -> `h3`. Un seul `h1` par page.
- [ ] **Landmarks :** Utilisation de `<main>`, `<nav>`, `<header>`, `<footer>`, `<section>`.
- [ ] **Boutons vs Liens :**
    *   `<button>` pour une action (ouvrir menu, envoyer form).
    *   `<a>` (`Link`) pour une navigation vers une URL.
- [ ] **Listes :** Utilisation de `<ul>` ou `<ol>` pour les listes d'éléments.

### 3. Images et Médias 🖼
- [ ] **Alt Text :** Toutes les images informatives ont un attribut `alt` descriptif.
- [ ] **Décoration :** Les images purement décoratives ont `alt=""` ou `aria-hidden="true"`.
- [ ] **Icônes :** Les icônes SVG interactives ont un `aria-label` ou un titre accessible.

### 4. Formulaires 📝
- [ ] **Labels :** Chaque champ (`input`, `textarea`) a un `<label>` associé (via `for` + `id` ou imbrication).
- [ ] **Erreurs :** Les messages d'erreur sont reliés aux champs via `aria-describedby`.
- [ ] **Autiocomplete :** Les attributs `autocomplete` sont corrects (ex: `email`, `name`).

### 5. Couleurs et Contraste 🎨
- [ ] **Ratio Texte :** Minimum 4.5:1 pour le texte normal, 3:1 pour le texte large.
- [ ] **Indicateurs :** La couleur ne doit pas être le seul moyen de véhiculer une information (ex: ajouter une icône pour une erreur).

---

## 🚦 Procédure de Test Automatisé

### Exécuter Lighthouse
1.  Ouvrir les DevTools (`F12` ou `Cmd+Option+I`).
2.  Aller dans l'onglet **Lighthouse**.
3.  Cocher "Accessibility".
4.  Cliquer sur **"Analyze page load"**.
5.  **Cible :** Score > 95/100.

### Exécuter npm run lint
Le projet utilise `eslint-plugin-jsx-a11y`.
```bash
npm run lint
```
*Toute erreur de linter A11y doit être corrigée avant le déploiement.*
