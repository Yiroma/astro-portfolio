# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commandes essentielles

```bash
npm run dev          # Serveur de développement (http://localhost:4321)
npm run build        # astro check + build production
npm run preview      # Prévisualiser le build
npm run lint         # ESLint
npm run lint:fix     # ESLint avec auto-fix
npm run format       # Prettier sur tout le projet
npm run format:check # Vérifier le formatage sans écrire
```

Le build inclut `astro check` (vérification TypeScript) avant le bundling — un échec de type bloque le build.

## Conventions de commit (Conventional Commits — obligatoire via Husky)

Format : `type(scope): description en minuscules`

Types autorisés : `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`

- Le scope est optionnel, en minuscules
- La description commence par une minuscule, sans point final
- Longueur max du header : 100 caractères

Exemple : `feat(hero): ajouter le badge de disponibilité animé`

Le hook `pre-commit` exécute `lint-staged` (ESLint + Prettier sur les fichiers stagés). Le hook `commit-msg` valide le format via commitlint.

## Architecture

### Stack

- **Astro 5** en mode `output: "static"` — rendu statique complet
- **Tailwind CSS v4** via plugin Vite (`@tailwindcss/vite`) — pas de `tailwind.config.js`, la config se fait dans `src/styles/global.css`
- **DaisyUI v5** — deux thèmes custom définis dans `global.css` : `night` (dark, défaut) et `winter` (light)
- **React** uniquement pour les composants interactifs (Astro Islands avec `client:*`)
- **Motion** pour les animations (remplace Framer Motion)

### Système de thèmes

Les thèmes sont définis entièrement dans [`src/styles/global.css`](src/styles/global.css) via `@plugin "daisyui/theme"`. Le toggle (`ThemeSwap.tsx`) utilise l'attribut `data-theme` sur le `<html>` via le mécanisme natif DaisyUI (`theme-controller` + `data-toggle-theme`). Ne pas utiliser `localStorage` ni `classList.add('dark')` — DaisyUI gère ça nativement.

### Polices

- Corps : `DM Sans` — variable `--font-sans`
- Titres : `Plus Jakarta Sans` — variable `--font-title`, appliquée sur tous les `h1`–`h6` et `.font-title`
- Mono : `JetBrains Mono` — variable `--font-mono`

### Aliases de chemins

Configurés dans `astro.config.mjs` :

| Alias         | Répertoire        |
| ------------- | ----------------- |
| `@`           | `src/`            |
| `@components` | `src/components/` |
| `@layouts`    | `src/layouts/`    |
| `@assets`     | `src/assets/`     |
| `@styles`     | `src/styles/`     |
| `@types`      | `src/types/`      |
| `@utils`      | `src/utils/`      |
| `@data`       | `src/data/`       |

### Composants React (Islands)

Les composants interactifs sont dans `src/components/react/`. Ils sont montés avec des directives Astro (`client:load`, `client:visible`). Actuellement :

- `ProjectsGrid.tsx` — grille de projets avec modal de détail
- `ProjectCard.tsx` — carte projet avec animation d'entrée
- `ProjectModal.tsx` — modal de détail (focus trap, ARIA, portal)
- `CookieBanner.tsx` — bandeau de consentement GA4 (`client:load`)
- `TimelineFrise.tsx` / `TimelineEntry.tsx` — timeline animée du parcours
- `hooks/useModalPhase.ts` — machine à états pour l'animation modale (idle → opening → open → closing)
- `hooks/useCardAnimation.ts` — animation de la carte lors de l'ouverture de la modale
- `hooks/useScrollReveal.ts` — révélation des éléments au scroll (IntersectionObserver)

### ThemeSwap

`ThemeSwap.astro` (composant Astro, pas React) gère le toggle dark/light via DaisyUI `theme-controller` et `document.startViewTransition` (animation cercle). Ne pas migrer en composant React — la View Transition API nécessite un accès direct au DOM.

### Icônes

Les icônes sont dans `src/components/ui/icons/` :

- Fichiers `.astro` — pour les composants Astro (ex. `GithubIcon.astro`, `LogoIcon.astro`)
- Fichiers `.tsx` — pour les composants React (ex. `GithubIcon.tsx`, `WebIcon.tsx`)
- `index.js` — exporte les variantes React (`GithubReactIcon`, `WebReactIcon`)

`src/assets/` contient uniquement la photo de profil (`romaric-yi.png`).

### Déploiement

Le CI/CD (`deploy.yaml`) se déclenche sur `push` vers `main` :

1. Build Astro
2. Build et push d'une image Docker vers `ghcr.io/yiroma/astro-portfolio`
3. Déploiement SSH sur serveur VPS (Nginx dans Docker)

Le `docker-compose.prod.yml` est copié via SCP puis exécuté sur le serveur. Les secrets nécessaires : `SERVER_HOST`, `SERVER_PORT`, `SERVER_USER`, `SERVER_SSH_KEY`.

## Contenu et données

Le contenu éditorial est séparé des composants via deux mécanismes :

### Astro Content Collections (`src/content/`)

Géré via `src/content.config.ts` (API Astro 5 avec loaders `glob`, schémas Zod importés depuis `zod`).

| Collection | Dossier                 | Fichiers                                                               | Consommé par     |
| ---------- | ----------------------- | ---------------------------------------------------------------------- | ---------------- |
| `projects` | `src/content/projects/` | `careplan.json`, `taxilvs.json`, `budget-management.json`, `hive.json` | `Projects.astro` |
| `timeline` | `src/content/timeline/` | `01-micromania.json` … `05-current.json`                               | `Parcours.astro` |
| `profile`  | `src/content/profile/`  | `01-conception.json` … `03-ingenierie.json`                            | `Profile.astro`  |

Les fichiers JSON sont ordonnés via un champ `index: number` (collection `projects`) ou `order: number` (collections `timeline` et `profile`), et triés par `getCollection()` + `.sort()` dans chaque composant.

### Données statiques (`src/data/`)

Pour les données couplées à du code non-sérialisable (icônes Lucide, composants Astro) :

| Fichier     | Contenu                                  | Consommé par                                                |
| ----------- | ---------------------------------------- | ----------------------------------------------------------- |
| `nav.ts`    | `navItems[]`, `socialLinks[]`            | `Nav.tsx`, `Hero.astro`, `ContactCTA.astro`, `Footer.astro` |
| `skills.ts` | `skillCategories[]` (avec icônes Lucide) | `SkillsSection.astro`                                       |

### SEO & meta

- **JSON-LD** dans `Layout.astro` via `set:html={JSON.stringify(...)}` avec `is:inline` — trois blocs : `Person`, `WebSite` (avec `dateModified`), `FAQPage`
- **OG image** par défaut : `public/og.png` (1200×630)
- Open Graph enrichi : `og:site_name`, `og:image:alt`, dimensions explicites
- Twitter corrigé : balises `name` (pas `property`)
- **`/public/llms.txt`** — fichier d'identité pour les LLMs (analogue robots.txt)
- **`meta-keywords` supprimée** — ignorée par Google, potentiellement pénalisante

### Analytics (GA4)

`src/utils/analytics.ts` centralise toute la logique GA4 :

- `getConsent()` / `setConsent()` — lecture/écriture du consentement en `localStorage`
- `initGA(measurementId)` — injecte le script gtag.js dans le DOM
- `updateGAConsent(state)` — met à jour `gtag('consent', 'update', ...)`

`CookieBanner.tsx` orchestre le consentement utilisateur avant tout chargement GA4. Le `measurementId` est passé depuis `Layout.astro` en props.

### Document de référence

`docs/DESIGN_SYSTEM.md` — palette oklch, typographie, composants UI.

## Accessibilité (WCAG 2.1 AA / RGAA 4.1)

Audit complet effectué et 15/18 problèmes corrigés en 3 phases. Voir `docs/AUDIT_ACCESSIBILITE_RGAA_WCAG.md` pour le détail. Points critiques à ne pas régresser :

### Patterns en place

- **Focus trap** dans `ProjectModal.tsx` — Tab/Shift+Tab cyclent dans la modale, focus restitué au déclencheur à la fermeture via `triggerRef`
- **Skip link** dans `Layout.astro` — `<a href="#main-content">` sr-only visible au focus, `<main id="main-content">`
- **`aria-current="page"`** dynamique via `IntersectionObserver` dans `Nav.astro` ET `NavMobile.astro`
- **`aria-invalid` + `aria-describedby`** par champ dans `ContactForm.astro` — mis à jour par le script JS à la soumission
- **Variable `--color-focus`** dans `global.css` — `oklch(0.40 0.24 263)` en light (~5.5:1 sur blanc), `oklch(0.54 0.245 263)` en dark. À utiliser dans tout nouveau `:focus-visible`
- **Focus blanc sur fond primary** via `.contact-cta :global(:focus-visible) { outline-color: white }` dans `ContactCTA.astro` — pattern à reproduire sur tout composant avec fond coloré
- **`prefers-reduced-motion`** : `scroll-behavior` conditionné dans `global.css`, `scrollIntoView` conditionné dans `NavMobile.astro`. Vérifier systématiquement sur toute nouvelle animation déclenchée par interaction

### Règles ESLint

- `jsx-a11y/label-has-associated-control` désactivé pour les fichiers `.astro` dans `eslint.config.js` — le plugin ne reconnaît pas l'attribut HTML natif `for`, uniquement `htmlFor` JSX. Ne pas réactiver.

### Décisions acceptées (ne pas "corriger")

- `m5` — placeholders dans ContactForm : les labels `for`/`id` existent, risque faible
