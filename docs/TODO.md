# Tâches restantes — Portfolio V2

> Dernière mise à jour : 2026-05-11.
> Les tâches sont groupées par thème et ordonnées par priorité dans chaque groupe.

---

## 1. Astro Content Collections

- [x] Créer `src/content.config.ts` avec l'API Astro 5 (loaders `glob`) — collections `projects`, `timeline`, `profile`
- [x] Migrer les 4 projets vers `src/content/projects/*.json`
- [x] Migrer la timeline vers `src/content/timeline/*.json` (5 entrées ordonnées)
- [x] Migrer les 3 piliers profil vers `src/content/profile/*.json`
- [x] Mettre à jour `Projects.astro`, `Parcours.astro`, `Profile.astro` pour lire via `getCollection()`
- [x] Extraire les compétences dans `src/data/skills.ts` (icônes Lucide non sérialisables → fichier TS, pas JSON)

---

## 2. Meta tags & SEO

- [x] OG image par défaut : `public/og.png` (1200×630) — `Layout.astro` mis à jour
- [x] Open Graph enrichi : `og:site_name`, `og:image:alt`, `og:image:width`, `og:image:height`
- [x] Twitter : balises corrigées (`property` → `name`), ajout de `twitter:image:alt`
- [x] JSON-LD `Person` rendu dynamique via `set:html={JSON.stringify(jsonLd)}`
- [x] `jobTitle` mis à jour : "Concepteur Développeur d'Applications Full Stack"
- [x] JSON-LD enrichi : `alumniOf`, `hasCredential` (RNCP 37873 + 31114), `knowsLanguage`, `addressRegion`, `postalCode`
- [x] GitHub URL corrigé : `yiroma` → `Yiroma`
- [x] `knowsAbout` complété : RGAA, WCAG 2.1, Accessibilité web, SEO technique

---

## 3. Alias Vite

- [x] Ajouter `@data` → `src/data` dans `astro.config.mjs` (utilisé dans `Hero.astro` et `ContactCTA.astro`)

---

## 4. Pages

- [x] `src/pages/legals.astro` — créée ✓
- [x] `src/pages/privacy.astro` — créée ✓
- [x] `src/pages/404.astro` — créée ✓

---

## 5. Image manquante — Budget Management

- [ ] Ajouter une capture ou illustration pour le projet Budget Management (`image: ""` dans `src/content/projects/budget-management.json`)
- [ ] L'enregistrer dans `public/budget-management.webp`

---

## 6. Finalisation & tests

- [ ] **Lighthouse > 95** sur les 4 piliers — cible : 100 accessibilité, 95+ performance/SEO/bonnes pratiques
- [ ] Tests sur 3 navigateurs minimum (Chrome, Firefox, Safari/Edge)
- [ ] Tests responsive : mobile (375px), tablette (768px), desktop (1280px), wide (1440px+)
- [ ] Tests NVDA / VoiceOver — cohérence avec le positionnement a11y mis en avant dans le profil

---

## Récapitulatif par priorité

| Priorité              | Tâche                                                 |
| --------------------- | ----------------------------------------------------- |
| ✅ Fait               | Astro Content Collections (projets, timeline, profil) |
| ✅ Fait               | OG Image dédiée + meta tags enrichis                  |
| ✅ Fait               | JSON-LD Person complet et dynamique                   |
| ✅ Fait               | Alias `@data` déclaré dans Vite                       |
| ✅ Fait               | Pages légales et 404                                  |
| 🟠 Moyenne            | Image Budget Management                               |
| 🔵 Après finalisation | Lighthouse > 95 + tests navigateurs + tests NVDA      |
