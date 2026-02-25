# 🚀 Portfolio Professionnel - Romaric Yi

[![Build and Deploy](https://github.com/yiroma/astro-portfolio/workflows/Build%20and%20Deploy/badge.svg)](https://github.com/yiroma/astro-portfolio/actions)
[![Astro](https://img.shields.io/badge/Astro-5.16.6-FF5D01?logo=astro)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?logo=typescript)](https://www.typescriptlang.org/)

> Portfolio moderne et performant construit avec **Astro**, **TypeScript** et **React**. Ce projet sert à la fois de vitrine professionnelle et de démonstration de compétences en architecture logicielle, CI/CD, et bonnes pratiques de développement.

🌐 **Site en ligne** : [yiromaric.fr](https://yiromaric.fr)

---

## 📋 Table des matières

- [À propos](#-à-propos)
- [Stack technique](#-stack-technique)
- [Fonctionnalités](#-fonctionnalités)
- [Architecture du projet](#-architecture-du-projet)
- [CI/CD & DevOps](#-cicd--devops)
- [Qualité de code](#-qualité-de-code)
- [Installation](#-installation)
- [Scripts disponibles](#-scripts-disponibles)
- [Déploiement](#-déploiement)
- [Conventions](#-conventions)

---

## 🎯 À propos

Ce portfolio a été conçu avec une double intention :

1. **Vitrine professionnelle** : Présenter mes compétences, projets et parcours aux recruteurs
2. **Démonstration technique** : Illustrer ma maîtrise des outils modernes de développement et d'infrastructure

Le projet est **intentionnellement sur-architecturé** pour un simple portfolio. Cette complexité est un choix délibéré visant à démontrer :

- Ma capacité à structurer et organiser des projets complexes
- Ma maîtrise des pipelines CI/CD professionnels
- Mon respect rigoureux des conventions et bonnes pratiques
- Mon expérience avec Docker et le déploiement continu
- Ma compréhension approfondie de l'écosystème JavaScript moderne

---

## 🛠 Stack technique

### Frontend

| Technologie                                                                           | Version   | Usage                     |
| ------------------------------------------------------------------------------------- | --------- | ------------------------- |
| ![Astro](https://img.shields.io/badge/Astro-5.16.6-FF5D01?logo=astro)                 | `5.16.6`  | Framework principal (SSG) |
| ![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?logo=typescript)   | `5.8.3`   | Typage statique           |
| ![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react)                 | `18.3.1`  | Composants interactifs    |
| ![TailwindCSS](https://img.shields.io/badge/Tailwind-4.1.10-38B2AC?logo=tailwind-css) | `4.1.10`  | Styles utilitaires        |
| ![DaisyUI](https://img.shields.io/badge/DaisyUI-5.0.43-5A0EF8)                        | `5.0.43`  | Composants UI             |
| ![Motion](https://img.shields.io/badge/Motion-12.23.0-FF0080)                         | `12.23.0` | Animations fluides        |

### Qualité de code

| Outil           | Usage                                    |
| --------------- | ---------------------------------------- |
| **ESLint**      | Linting JavaScript/TypeScript/Astro      |
| **Prettier**    | Formatage automatique du code            |
| **Husky**       | Hooks Git (pre-commit, commit-msg)       |
| **Lint-staged** | Linting sur fichiers modifiés uniquement |
| **Commitlint**  | Validation des messages de commit        |
| **jsx-a11y**    | Vérification de l'accessibilité          |

### DevOps & CI/CD

| Technologie                   | Usage                               |
| ----------------------------- | ----------------------------------- |
| **Docker**                    | Containerisation de l'application   |
| **Docker Compose**            | Orchestration multi-environnements  |
| **GitHub Actions**            | Intégration et déploiement continus |
| **Nginx**                     | Serveur web de production           |
| **GitHub Container Registry** | Stockage des images Docker          |

---

## ✨ Fonctionnalités

### Fonctionnalités utilisateur

- ✅ **Design responsive** : Pensé Mobile-First et adapté mobile, tablette et desktop
- ✅ **Mode sombre/clair** : Préférence système + toggle manuel
- ✅ **Animations fluides** : Transitions et effets avec Motion
- ✅ **Performance optimale** : Score Lighthouse 95+
- ✅ **SEO optimisé** : Sitemap, métadonnées, balises sémantiques
- ✅ **Accessibilité A11y** : Conformité WCAG 2.1
- ✅ **PWA Ready** : Manifest, icons, service worker

### Sections du portfolio

1. **Hero** : Présentation avec animations texte
2. **Compétences** : Technologies maîtrisées (Frontend, Backend, DevOps)
3. **Projets** : Réalisations avec descriptions et technologies
4. **Contact** : Liens professionnels (GitHub, LinkedIn, Email) et formulaire

### Fonctionnalités techniques

- 🔄 **CI/CD automatisé** : Test statiques automatisé sur PR dev & Déploiement automatique sur push main
- 🐳 **Containerisation complète** : Image Docker multi-stage
- 📊 **Health checks** : Monitoring de l'état du conteneur
- 🔐 **HTTPS ready** : Configuration Nginx pour SSL
- 📦 **Optimisation des assets** : Compression, minification, lazy loading
- 🎨 **Code splitting** : Chargement optimisé des composants React

---

## 📁 Architecture du projet

```
astro-portfolio/
├── .github/
│   └── workflows/
│       ├── deploy.yaml          # CI/CD : Build, Docker push, déploiement
│       └── statics.yaml         # Tests qualité code sur PR
│
├── .husky/                      # Hooks Git (pre-commit, commit-msg)
│   ├── pre-commit               # ESLint + Prettier sur fichiers modifiés
│   └── commit-msg               # Validation Conventional Commits
│
├── public/                      # Assets statiques
│   ├── *.webp                   # Images de projets
│   ├── favicon.*                # Favicons multi-formats
│   ├── robots.txt               # SEO
│   └── site.webmanifest         # PWA manifest
│
├── src/
│   ├── assets/
│   │   ├── icons/               # SVG d'icônes technologies
│   │   └── logo.tsx             # Logo animé
│   │
│   ├── components/
│   │   ├── react/               # Composants React interactifs
│   │   │   ├── Nav.tsx          # Navigation avec theme toggle
│   │   │   ├── SkillsBar.tsx    # Carrousel de compétences
│   │   │   ├── LetterGlitch.tsx # Effet glitch texte
│   │   │   └── ThemeSwap.tsx    # Switch dark/light mode
│   │   │
│   │   ├── Contact.astro        # Section contact
│   │   ├── Projects.astro       # Galerie de projets
│   │   ├── SkillsSection.astro  # Grille de compétences
│   │   └── ...
│   │
│   ├── layouts/
│   │   └── Layout.astro         # Layout principal (SEO, meta)
│   │
│   ├── pages/
│   │   └── index.astro          # Page d'accueil (SPA)
│   │
│   ├── styles/
│   │   └── global.css           # Styles globaux, variables Tailwind
│   │
│   └── types/                   # Définitions TypeScript
│
├── astro.config.mjs             # Configuration Astro + Vite
├── tsconfig.json                # Configuration TypeScript
├── eslint.config.js             # Configuration ESLint
├── commitlint.config.js         # Configuration Commitlint
├── Dockerfile                   # Image Docker production (Nginx)
├── docker-compose.yml           # Orchestration développement
├── docker-compose.prod.yml      # Orchestration production
├── nginx.conf                   # Configuration serveur Nginx
├── package.json                 # Dépendances et scripts
├── GitConventions.md            # Conventions commits et branches
└── DEVELOPMENT.md               # Guide de développement détaillé
```

### Alias de chemins configurés

Le projet utilise des alias TypeScript pour faciliter les imports :

```typescript
import Component from "@/components/Component.astro";
import { type } from "@types/type";
import { utils } from "@utils/utils";
```

---

## 🔄 CI/CD & DevOps

### Pipeline d'intégration continue

#### 1️⃣ **Workflow de qualité** (`statics.yaml`)

Déclenché sur **Pull Request vers `dev`** :

```yaml
✓ Checkout du code
✓ Installation Node.js 20.x
✓ Installation des dépendances (npm ci)
✓ Vérification ESLint
✓ Vérification Prettier
✓ Build Astro (type checking)
```

#### 2️⃣ **Workflow de déploiement** (`deploy.yaml`)

Déclenché sur **push vers `main`** :

```yaml
1. Build de l'application Astro
2. Construction de l'image Docker multi-stage
3. Push vers GitHub Container Registry (ghcr.io)
4. Transfert du docker-compose.prod.yml vers le serveur
5. Déploiement sur le serveur via SSH :
   ├─ Pull de l'image Docker
   ├─ Arrêt du conteneur existant
   ├─ Démarrage du nouveau conteneur
   └─ Vérification de l'état (health check)
```

### Containerisation Docker

#### Image de production (multi-stage)

```dockerfile
FROM nginx:alpine AS production
COPY dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

**Optimisations** :

- Image Alpine Linux légère (~40 MB)
- Serveur Nginx performant
- Configuration custom pour SPA
- Health checks intégrés

#### Docker Compose

**Développement** (`docker-compose.yml`) :

```bash
docker-compose up -d  # Environnement de dev
```

**Production** (`docker-compose.prod.yml`) :

- Port mapping : `3001:80`
- Network isolé : `web-projects`
- Volumes pour logs Nginx
- Health checks automatiques
- Restart policy : `unless-stopped`

---

## ✅ Qualité de code

### Hooks Git automatisés

Le projet utilise **Husky** pour automatiser les vérifications :

#### **Pre-commit hook**

```bash
# Déclenché avant chaque commit
✓ ESLint sur fichiers modifiés (.js, .jsx, .ts, .tsx, .astro)
✓ Prettier sur fichiers modifiés (.js, .jsx, .ts, .tsx, .astro, .json, .md, .css)
```

#### **Commit-msg hook**

```bash
# Validation du format Conventional Commits
✓ Type autorisé : feat, fix, docs, style, refactor, perf, test, build, ci, chore, revert
✓ Format : <type>(scope?): <description>
✓ Description en minuscules, sans point final
```

### Règles ESLint configurées

- **JavaScript/TypeScript** : Recommandations officielles
- **React** : Hooks, JSX, prop-types
- **Astro** : Directives, syntaxe spécifique
- **Accessibilité** : jsx-a11y sur `.tsx` et `.astro`

### Accessibilité (A11y)

Vérifications automatiques sur tous les composants :

- ✅ Attributs `alt` sur images
- ✅ ARIA roles et propriétés
- ✅ Navigation clavier
- ✅ Contraste des couleurs
- ✅ Sémantique HTML

---

## 💻 Installation

### Prérequis

- **Node.js** : `>= 20.x`
- **npm** : `>= 10.x`
- **Git** : Pour cloner le projet

### Installation locale

```bash
# 1. Cloner le repository
git clone https://github.com/yiroma/astro-portfolio.git
cd astro-portfolio

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm run dev

# 4. Ouvrir dans le navigateur
# http://localhost:4321
```

### Installation avec Docker

```bash
# 1. Cloner le repository
git clone https://github.com/yiroma/astro-portfolio.git
cd astro-portfolio

# 2. Builder l'image Docker
docker build -t portfolio .

# 3. Lancer le conteneur
docker run -p 3001:80 portfolio

# 4. Ouvrir dans le navigateur
# http://localhost:3001
```

### Installation avec Docker Compose

```bash
# Développement
docker-compose up -d

# Production
docker-compose -f docker-compose.prod.yml up -d
```

---

## 📜 Scripts disponibles

| Commande               | Description                                     |
| ---------------------- | ----------------------------------------------- |
| `npm run dev`          | Démarre le serveur de développement (port 4321) |
| `npm run build`        | Build de production avec type checking          |
| `npm run preview`      | Prévisualisation du build en local              |
| `npm run lint`         | Vérification ESLint                             |
| `npm run lint:fix`     | Correction automatique ESLint                   |
| `npm run format`       | Formatage Prettier                              |
| `npm run format:check` | Vérification Prettier (sans modification)       |
| `npm run commitlint`   | Validation du dernier commit                    |
| `npm run astro`        | Exécute les commandes Astro CLI                 |

---

## 🚀 Déploiement

### Déploiement automatique (CI/CD)

Le déploiement est **entièrement automatisé** via GitHub Actions :

1. **Push sur `main`** déclenche le workflow `deploy.yaml`
2. L'application est buildée et testée
3. Une image Docker est créée et poussée sur GitHub Container Registry
4. Le serveur de production pull la nouvelle image
5. Le conteneur est redémarré automatiquement
6. Des health checks valident le déploiement

**Aucune intervention manuelle requise** ✅

### Déploiement manuel

Si vous souhaitez déployer manuellement sur votre propre serveur :

```bash
# 1. Builder l'application
npm run build

# 2. Les fichiers statiques sont dans ./dist/

# 3. Déployer vers votre serveur (Netlify, Vercel, etc.)
# Ou utiliser Docker :
docker build -t portfolio .
docker run -p 80:80 portfolio
```

---

## 📝 Conventions

Ce projet suit des conventions strictes pour maintenir la qualité et la cohérence du code.

### Commits (Conventional Commits)

**Format** : `<type>(scope?): <description>`

**Types autorisés** :
| Type | Usage | Exemple |
|------|-------|---------|
| `feat` | Nouvelle fonctionnalité | `feat(projects): ajoute le projet CarePlan` |
| `fix` | Correction de bug | `fix(nav): corrige le menu mobile` |
| `docs` | Documentation | `docs(readme): ajoute la section CI/CD` |
| `style` | Changements cosmétiques | `style(button): uniformise les espacements` |
| `refactor` | Refactorisation | `refactor(skills): simplifie la logique` |
| `perf` | Optimisation | `perf(images): compresse les webp` |
| `test` | Tests | `test(api): ajoute les tests unitaires` |
| `build` | Build/dépendances | `build(deps): met à jour Astro` |
| `ci` | CI/CD | `ci(github): ajoute le workflow deploy` |
| `chore` | Tâches diverses | `chore(config): configure ESLint` |

**Règles** :

- Description en **minuscules**
- **Pas de point** à la fin
- Utiliser l'**impératif présent** ("ajoute", "corrige", "modifie")
- Maximum **100 caractères** pour l'en-tête

### Branches

**Format** : `<type>-<description-courte>`

**Exemples** :

```bash
feature-carrousel-projets
bugfix-menu-mobile
hotfix-erreur-404
chore-mise-a-jour-deps
docs-guide-contribution
refactor-composants-react
```

### Documentation complète

Consultez les fichiers suivants pour plus de détails :

- 📄 **[GitConventions.md](./GitConventions.md)** : Conventions commits et branches

---

## 🏗 Améliorations futures

- [ ] Tests end-to-end avec Playwright
- [ ] Tests unitaires avec Vitest
- [ ] Blog intégré (Content Collections)
- [ ] Internationalisation (i18n)

---

## 👤 Auteur

**Romaric Yi**

- Portfolio : [yiromaric.fr](https://yiromaric.fr)
- GitHub : [@yiroma](https://github.com/yiroma)
- LinkedIn : [Romaric Yi](https://linkedin.com/in/yiromaric)

---
