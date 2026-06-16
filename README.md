# Portfolio Professionnel - Romaric Yi

[![Build and Deploy](https://github.com/yiroma/astro-portfolio/workflows/Build%20and%20Deploy/badge.svg)](https://github.com/yiroma/astro-portfolio/actions)
[![Astro](https://img.shields.io/badge/Astro-5.x-FF5D01?logo=astro)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript)](https://www.typescriptlang.org/)

> Portfolio professionnel construit avec **Astro**, **TypeScript** et **React**. Vitrine et démonstration de compétences en architecture, CI/CD, accessibilité RGAA et SEO.

**Site en ligne** : [yiromaric.fr](https://yiromaric.fr)

---

## Stack technique

### Frontend

| Technologie     | Usage                            |
| --------------- | -------------------------------- |
| Astro 5 (SSG)   | Framework principal              |
| TypeScript      | Typage statique                  |
| React           | Composants interactifs (Islands) |
| Tailwind CSS v4 | Styles utilitaires               |
| DaisyUI v5      | Composants UI, thèmes            |
| Motion          | Animations                       |

### Qualité & DevOps

| Outil          | Usage                                     |
| -------------- | ----------------------------------------- |
| ESLint         | Linting JS/TS/Astro + jsx-a11y            |
| Prettier       | Formatage automatique                     |
| Husky          | Hooks Git (pre-commit, commit-msg)        |
| Commitlint     | Validation Conventional Commits           |
| Docker + Nginx | Containerisation et serveur de production |
| GitHub Actions | CI/CD (build, push image, déploiement)    |

---

## Architecture du projet

```
astro-portfolio/
├── .github/workflows/
│   ├── deploy.yaml          # Build → Docker → déploiement SSH sur VPS
│   └── statics.yaml         # ESLint + Prettier + build sur PR dev
│
├── public/
│   ├── *.webp               # Images de projets
│   ├── favicon.*            # Favicons multi-formats
│   ├── og.png               # Image Open Graph (1200×630)
│   ├── robots.txt           # Directives crawlers
│   ├── llms.txt             # Identité pour les LLMs (GEO)
│   └── site.webmanifest     # PWA manifest
│
├── src/
│   ├── assets/
│   │   └── romaric-yi.png   # Photo de profil (hero)
│   │
│   ├── components/
│   │   ├── react/           # Composants interactifs (Astro Islands)
│   │   │   ├── ProjectsGrid.tsx # Grille projets + modal
│   │   │   ├── ProjectCard.tsx  # Carte projet avec animation
│   │   │   ├── ProjectModal.tsx # Modal détail (focus trap, ARIA)
│   │   │   ├── CookieBanner.tsx # Bandeau consentement GA4
│   │   │   ├── TimelineFrise.tsx# Timeline animée
│   │   │   ├── TimelineEntry.tsx# Entrée de timeline
│   │   │   └── hooks/
│   │   │       ├── useModalPhase.ts   # Gestion des phases d'animation modale
│   │   │       ├── useCardAnimation.ts# Animations des cartes projet
│   │   │       └── useScrollReveal.ts # Révélation au scroll
│   │   │
│   │   ├── ui/              # Composants UI réutilisables
│   │   │   ├── icons/           # Icônes (Astro + React)
│   │   │   ├── AvailabilityBadge.astro
│   │   │   ├── Badge.astro / Badge.tsx
│   │   │   ├── BlobBackground.astro
│   │   │   ├── Btn.tsx
│   │   │   ├── Button.astro
│   │   │   ├── Container.astro
│   │   │   ├── Eyebrow.astro
│   │   │   └── GradientText.astro
│   │   │
│   │   ├── Hero.astro           # Section hero
│   │   ├── Profile.astro        # Section profil (3 piliers)
│   │   ├── ProfilePillar.astro  # Pilier individuel (profil)
│   │   ├── Projects.astro       # Section réalisations
│   │   ├── SkillsSection.astro  # Section compétences
│   │   ├── SkillCard.astro      # Carte de compétence
│   │   ├── FormattedSkillItem.astro # Item compétence formaté
│   │   ├── Parcours.astro       # Section parcours
│   │   ├── Contact.astro        # Wrapper contact
│   │   ├── ContactCTA.astro     # Bloc CTA de contact
│   │   ├── ContactForm.astro    # Formulaire (Formspree)
│   │   ├── Header.astro         # En-tête + navigation
│   │   ├── ThemeSwap.astro      # Toggle dark/light (View Transition)
│   │   ├── Footer.astro         # Pied de page
│   │   ├── Nav.astro            # Navigation desktop
│   │   └── NavMobile.astro      # Navigation mobile
│   │
│   ├── content/             # Astro Content Collections (source de vérité éditoriale)
│   │   ├── projects/        # careplan.json, taxilvs.json, budget-management.json, hive.json
│   │   ├── timeline/        # 01-micromania.json … 05-current.json
│   │   └── profile/         # 01-conception.json … 03-ingenierie.json
│   │
│   ├── data/
│   │   ├── nav.ts           # navItems[], socialLinks[] — utilisé partout
│   │   └── skills.ts        # skillCategories[] avec icônes Lucide
│   │
│   ├── layouts/
│   │   └── Layout.astro     # HTML, SEO (JSON-LD Person+WebSite+FAQPage), OG, skip link
│   │
│   ├── pages/
│   │   ├── index.astro      # Page principale (one-page, 6 sections)
│   │   ├── legals.astro     # Mentions légales
│   │   ├── privacy.astro    # Politique de confidentialité
│   │   └── 404.astro        # Page d'erreur
│   │
│   ├── styles/
│   │   ├── global.css           # Thèmes DaisyUI (night/winter), variables, polices
│   │   └── projectAnimations.css# Animations des cartes et modales projet
│   │
│   ├── types/               # Définitions TypeScript (project, nav, icon, timeline)
│   └── utils/
│       ├── parseRichText.tsx    # Rendu texte enrichi
│       └── analytics.ts         # Helpers GA4 (consentement, init, gtag)
│
├── docs/
│   ├── DESIGN_SYSTEM.md         # Palette oklch, typographie, composants UI
│   ├── AUDIT_ACCESSIBILITE_RGAA_WCAG.md # Audit a11y complet
│   ├── audit-seo-geo.md         # Audit SEO & GEO
│   └── TODO.md                  # Tâches restantes
│
├── astro.config.mjs         # Config Astro : site, integrations, aliases, output static
├── tsconfig.json
├── eslint.config.js
├── commitlint.config.js
├── Dockerfile               # Image Nginx Alpine multi-stage
├── docker-compose.yml       # Dev local
├── docker-compose.prod.yml  # Production VPS
└── nginx.conf               # Config Nginx
```

---

## Contenu éditorial

Le contenu est séparé du code via deux mécanismes :

### Astro Content Collections (`src/content/`)

| Collection | Fichiers                                                               | Consommé par     |
| ---------- | ---------------------------------------------------------------------- | ---------------- |
| `projects` | `careplan.json`, `taxilvs.json`, `budget-management.json`, `hive.json` | `Projects.astro` |
| `timeline` | `01-micromania.json` … `05-current.json`                               | `Parcours.astro` |
| `profile`  | `01-conception.json` … `03-ingenierie.json`                            | `Profile.astro`  |

Les fichiers JSON sont ordonnés via un champ `index` (projects) ou `order` (timeline, profile) et triés dans chaque composant via `getCollection()` + `.sort()`.

### Données statiques (`src/data/`)

| Fichier     | Contenu                                  | Consommé par                                                |
| ----------- | ---------------------------------------- | ----------------------------------------------------------- |
| `nav.ts`    | `navItems[]`, `socialLinks[]`            | `Nav.tsx`, `Hero.astro`, `ContactCTA.astro`, `Footer.astro` |
| `skills.ts` | `skillCategories[]` (avec icônes Lucide) | `SkillsSection.astro`                                       |

---

## CI/CD

### Workflow qualité (`statics.yaml`) — sur PR vers `dev`

```
ESLint → Prettier → Build Astro (type checking)
```

### Workflow déploiement (`deploy.yaml`) — sur push vers `main`

```
Build Astro → Build image Docker → Push ghcr.io → SSH VPS → docker pull + restart
```

---

## Installation

```bash
git clone https://github.com/yiroma/astro-portfolio.git
cd astro-portfolio
npm install
npm run dev        # http://localhost:4321
```

### Scripts

| Commande               | Description                             |
| ---------------------- | --------------------------------------- |
| `npm run dev`          | Serveur de développement (port 4321)    |
| `npm run build`        | `astro check` + build production        |
| `npm run preview`      | Prévisualisation du build               |
| `npm run lint`         | ESLint                                  |
| `npm run lint:fix`     | ESLint avec auto-fix                    |
| `npm run format`       | Prettier sur tout le projet             |
| `npm run format:check` | Vérification Prettier sans modification |

---

## Conventions de commit

Format : `type(scope): description en minuscules`

Types : `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`

Exemple : `feat(hero): ajouter le badge de disponibilité animé`

---

## Auteur

**Romaric Yi**

- Portfolio : [yiromaric.fr](https://yiromaric.fr)
- GitHub : [@Yiroma](https://github.com/Yiroma)
- LinkedIn : [yiromaric](https://linkedin.com/in/yiromaric)
