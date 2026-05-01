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

### Polices actuelles (V1)

- Corps : `Onest` — variable `--font-sans`
- Titres : `Cascadia Code` — variable `--font-title`, appliquée sur tous les `h1`–`h6` et `.font-title`

> **V2 en cours** : migration vers `DM Sans` (corps) + `Plus Jakarta Sans` (titres) pour aligner avec yiroma.fr. Voir `docs/DESIGN_SYSTEM.md`.

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

### Composants React (Islands)

Les composants interactifs sont dans `src/components/react/`. Ils sont montés avec des directives Astro (`client:load`, `client:visible`). Actuellement :

- `Nav.tsx` — navigation flottante, détection de section active par IntersectionObserver
- `ThemeSwap.tsx` — toggle dark/light via DaisyUI `theme-controller`
- `SkillsBar.tsx` — barre de compétences animée (marquée pour suppression en V2)
- `AnimatedSkillsRow.tsx` — ligne animée de compétences (marquée pour suppression en V2)
- `LetterGlitch.tsx` — effet visuel glitch (marqué pour suppression en V2)

### Icônes

Deux systèmes coexistent dans `src/assets/icons/` :

- `tech/` — SVG des logos de technologies, importés directement comme assets
- `ui/` — composants Astro et React pour les icônes d'UI, exportés via `index.js`

### Déploiement

Le CI/CD (`deploy.yaml`) se déclenche sur `push` vers `main` :

1. Build Astro
2. Build et push d'une image Docker vers `ghcr.io/yiroma/astro-portfolio`
3. Déploiement SSH sur serveur VPS (Nginx dans Docker)

Le `docker-compose.prod.yml` est copié via SCP puis exécuté sur le serveur. Les secrets nécessaires : `SERVER_HOST`, `SERVER_PORT`, `SERVER_USER`, `SERVER_SSH_KEY`.

## Contenu V1 actuel

Tout le contenu est en dur dans les composants Astro (pas de Content Collections) :

- `Projects.astro` — tableau `projects[]` avec titre, description, image, liens
- `Home.astro` — liens sociaux hardcodés
- `SkillsSection.astro` / `AnimatedSkillsRow.tsx` — compétences en dur

> **V2** : migration vers Astro Content Collections pour les projets. Voir `docs/REFONTE_YIROMARIC.md` pour le plan complet et `docs/home.html` pour le prototype HTML de référence.

## Contexte V2 (refonte en cours)

Les documents de référence pour la V2 sont dans `docs/` :

- `DESIGN_SYSTEM.md` — palette de couleurs (tokens oklch), typographie, composants
- `REFONTE_YIROMARIC.md` — plan de refonte complet, contenu rédigé section par section
- `home.html` — prototype HTML statique du rendu final (référence visuelle)

L'objectif de la V2 est de moderniser et d'aligner yiromaric.fr avec l'identité visuelle de yiroma.fr (même palette bleue oklch, mêmes polices DM Sans + Plus Jakarta Sans, même structure de sections avec blobs de fond), corriger l'incohérence avec mon profile (Le site actuel me fait paraître pour un dev junior, ce qui est sous ma valeur réelle vu mon profil (Bac+4 CDA + 10 ans de management + stack full-stack large incluant Java/Spring))
