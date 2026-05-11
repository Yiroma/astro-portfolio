# Tâches restantes — Portfolio V2

> Synthèse générée le 2026-05-11 à partir de l'état du dépôt et du plan `REFONTE_YIROMARIC.md`.
> Les tâches sont groupées par thème et ordonnées par priorité dans chaque groupe.

---

## 1. Astro Content Collections

Actuellement, les données des projets sont codées en dur dans `src/components/Projects.astro` (tableau `projects[]`) et le parcours dans `src/data/timeline.ts`.

- [ ] Créer le répertoire `src/content/projects/` et la config de collection dans `src/content/config.ts`
- [ ] Migrer les 4 projets vers des fichiers `.md` / `.mdx` individuels (`careplan.md`, `taxi-loire-valley.md`, `budget-management.md`, `hive.md`)
- [ ] Migrer la timeline vers `src/content/timeline/` ou garder `src/data/timeline.ts` (décision à prendre)
- [ ] Mettre à jour `Projects.astro` et les composants React pour lire les données via `getCollection()`

---

## 2. Liens cassés / à compléter

### Dans `src/components/Footer.astro`

| Lien                            | Problème                                                                |
| ------------------------------- | ----------------------------------------------------------------------- |
| `/mentions-legales`             | Page absente (`src/pages/mentions-legales.astro` non créée)             |
| `/politique-de-confidentialite` | Page absente (`src/pages/politique-de-confidentialite.astro` non créée) |

### Envisager une centralisation des liens projets

- [ ] Créer `src/data/projects.ts` (ou via Content Collections) pour centraliser URL démo + GitHub par projet
- [ ] Alimenter ce fichier depuis les composants, plutôt que hardcoder les `href` dans le template

---

## 3. Pages manquantes

- [x] `src/pages/legals.astro` — créée ✓
- [x] `src/pages/privacy.astro` — créée ✓
- [x] `src/pages/404.astro` — créée ✓

---

## 4. OG Image

L'image Open Graph actuelle est `public/default.webp` (image générique).

- [ ] Créer une OG image dédiée au format **1200 × 630 px** optimisée pour les partages LinkedIn/Twitter
- [ ] Contenu suggéré : nom + titre professionnel + palette couleur du site
- [ ] L'enregistrer dans `public/og-image.png` (ou `.webp`) et mettre à jour `Layout.astro` (`image` prop par défaut)
- [ ] Mettre également à jour la `"image"` dans le JSON-LD (`Layout.astro` ligne 87)

---

## 5. JSON-LD — compléter et corriger

Le JSON-LD `Person` dans `src/layouts/Layout.astro` (lignes 78–132) est en place mais incomplet par rapport au modèle de `REFONTE_YIROMARIC.md` (section 6).

- [ ] Ajouter `"telephone": "+33695386099"` (si souhaité publiquement)
- [ ] Ajouter `"alumniOf"` avec Wild Code School (RNCP 31114 + RNCP 37873)
- [ ] Ajouter `"postalCode": "45110"` dans `"address"`
- [ ] Ajouter `"hasOccupation"` ou `"seeks"` pour signaler la recherche active
- [ ] Corriger la casse de l'URL GitHub : `"https://github.com/yiroma"` → `"https://github.com/Yiroma"` (cohérence avec `nav.ts`)
- [ ] Ajouter les entrées `"knowsAbout"` manquantes : `"RGAA"`, `"WCAG"`, `"Accessibilité Web"`, `"Clean Architecture"`, `"UML"`, `"Merise"` (déjà dans le modèle, à compléter dans le code)

---

## 6. Image manquante — Budget Management

- [ ] Ajouter une capture ou illustration pour le projet Budget Management (`image: ""` dans `Projects.astro`)
- [ ] L'enregistrer dans `public/budget-management.webp`

---

## 7. Finalisation & tests (après les tâches ci-dessus)

- [ ] **Lighthouse > 95** sur les 4 piliers — cible : 100 accessibilité, 95+ performance/SEO/bonnes pratiques
- [ ] Tests sur 3 navigateurs minimum (Chrome, Firefox, Safari/Edge)
- [ ] Tests responsive : mobile (375px), tablette (768px), desktop (1280px), wide (1440px+)
- [ ] Tests NVDA / VoiceOver — cohérence avec le positionnement a11y mis en avant dans le profil
- [ ] Vérifier la résolution de l'alias `@data` dans Vite (utilisé dans `Hero.astro` et `ContactCTA.astro` comme `@data/nav`, mais non déclaré dans `astro.config.mjs` — `@/data/nav` est la forme correcte)

---

## Récapitulatif par priorité

| Priorité              | Tâche                                                                  |
| --------------------- | ---------------------------------------------------------------------- |
| ✅ Fait               | Créer les pages `/mentions-legales` et `/politique-de-confidentialite` |
| 🔴 Haute              | OG Image dédiée (1200×630)                                             |
| 🟠 Moyenne            | JSON-LD — compléter les champs manquants                               |
| 🟠 Moyenne            | Image Budget Management                                                |
| ✅ Fait               | Page 404 custom                                                        |
| 🟡 Normale            | Astro Content Collections (migration des projets)                      |
| 🟡 Normale            | Centraliser les liens projets dans un fichier data                     |
| 🔵 Après finalisation | Lighthouse > 95 + tests navigateurs + tests NVDA                       |
