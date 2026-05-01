# Design System — yiromaric.fr

> Système de design pour la refonte du portfolio de Romaric YI.
> **Stack** : Astro · Tailwind CSS · DaisyUI · React (composants interactifs uniquement).
> **Inspiration** : cohérence visuelle avec [yiroma.fr](https://yiroma.fr) (mêmes valeurs, même esthétique sobre et professionnelle), tout en restant adapté à un public tech.

---

## 1. Principes directeurs

### 1.1 Philosophie

- **Sobriété > Effets**. Pas d'animations gratuites, pas de glassmorphism gratuit, pas de gradients criards.
- **Lisibilité avant tout**. Un recruteur scanne, il ne contemple pas.
- **Cohérence avec yiroma.fr**. Mêmes proportions, même générosité d'espace, même style d'illustrations.
- **Mode sombre = first-class citizen**. Pas un afterthought, les deux thèmes sont équivalents en qualité.

### 1.2 Hiérarchie visuelle

1. Le **contenu** (texte, code, projets) est roi.
2. Les **CTA primaires** sont uniques et visibles.
3. Les **illustrations** appuient le propos, ne le remplacent pas.
4. Les **icônes de stack** sont du décor secondaire, jamais du décor central.

### 1.3 Anti-patterns à éviter

- ❌ Mur d'icônes de stack qui défile en autoplay
- ❌ Animations Lottie en boucle dans le hero
- ❌ Curseur custom
- ❌ Effet machine à écrire sur le titre
- ❌ Particle background
- ❌ Néon, glow, glassmorphism excessif
- ❌ Polices fantaisie (sauf usage typographique très contrôlé)

---

## 2. Palette de couleurs

### 2.1 Approche

On reprend **l'esprit** de yiroma.fr (palette neutre + bleu/teal sobre comme accent) sans copier les hex à l'identique. Les deux sites doivent appartenir à la même famille visuelle, pas être des clones.

### 2.2 Tokens de couleur

Les valeurs sont exprimées en `oklch` pour correspondre exactement à l'identité visuelle de yiroma.fr.

#### Light theme

| Token                        | Valeur oklch                 | Hex approx. | Usage                           |
| ---------------------------- | ---------------------------- | ----------- | ------------------------------- |
| `--color-base-100`           | `oklch(1 0 0)`               | `#ffffff`   | Fond principal                  |
| `--color-base-200`           | `oklch(0.968 0.007 247.896)` | `#f3f4f9`   | Fond alterné (sections paires)  |
| `--color-base-300`           | `oklch(0.929 0.013 255.508)` | `#e4e6f0`   | Bordures discrètes, séparateurs |
| `--color-base-content`       | `oklch(0.208 0.042 264.695)` | `#1c2040`   | Texte principal                 |
| `--color-base-content-muted` | `oklch(0.48 0.046 257.417)`  | `#575e7e`   | Texte secondaire                |
| `--color-primary`            | `oklch(0.546 0.245 262.881)` | `#4361ee`   | Accent principal (bleu)         |
| `--color-primary-content`    | `oklch(1 0 0)`               | `#ffffff`   | Texte sur fond primary          |
| `--color-primary-soft`       | `oklch(0.94 0.04 262)`       | `#e8ecfd`   | Fond doux pour badges           |
| `--color-secondary`          | `oklch(0.279 0.041 260.031)` | `#252945`   | Boutons secondaires             |
| `--color-accent`             | `oklch(0.75 0.17 55)`        | `#f59e0b`   | Highlights ponctuels (amber)    |
| `--color-success`            | `#16a34a`                    | `#16a34a`   | Validation, dispo               |
| `--color-warning`            | `#eab308`                    | `#eab308`   | Attention                       |
| `--color-error`              | `#dc2626`                    | `#dc2626`   | Erreurs                         |
| `--color-info`               | `#0284c7`                    | `#0284c7`   | Infos                           |

#### Dark theme

| Token                        | Valeur oklch                 | Hex approx. | Usage                         |
| ---------------------------- | ---------------------------- | ----------- | ----------------------------- |
| `--color-base-100`           | `oklch(0.208 0.042 264.695)` | `#1c2040`   | Fond principal                |
| `--color-base-200`           | `oklch(0.279 0.041 260.031)` | `#252945`   | Fond alterné (gray-900)       |
| `--color-base-300`           | `oklch(0.372 0.044 257.287)` | `#383d60`   | Bordures, séparateurs         |
| `--color-base-content`       | `oklch(0.984 0.003 247.858)` | `#f7f8fb`   | Texte principal               |
| `--color-base-content-muted` | `oklch(0.704 0.04 256.788)`  | `#9299bb`   | Texte secondaire              |
| `--color-primary`            | `oklch(0.661 0.214 264.052)` | `#7b97f7`   | Accent principal (bleu clair) |
| `--color-primary-content`    | `oklch(1 0 0)`               | `#ffffff`   | Texte sur fond primary        |
| `--color-primary-soft`       | `oklch(0.32 0.041 260.031)`  | `#2e3352`   | Fond doux pour badges         |
| `--color-secondary`          | `oklch(0.929 0.013 255.508)` | `#e4e6f0`   | Boutons secondaires           |
| `--color-accent`             | `oklch(0.80 0.17 75)`        | `#fbbf24`   | Highlights (amber-400)        |
| `--color-success`            | `#22c55e`                    | `#22c55e`   |                               |
| `--color-warning`            | `#facc15`                    | `#facc15`   |                               |
| `--color-error`              | `#ef4444`                    | `#ef4444`   |                               |
| `--color-info`               | `#38bdf8`                    | `#38bdf8`   |                               |

### 2.3 Règles d'usage

- **Le primary (teal) est rare**. Réservé aux CTA principaux et aux accents (1 lien hover, 1 mot d'accroche). Pas de remplissage de fond entier en primary.
- **Les fonds alternent base-100 / base-200** pour rythmer les sections, sans casser l'unité.
- **Les bordures sont toujours base-300**, jamais des couleurs vives.
- **L'accent (amber) est exceptionnel** : 1 ou 2 endroits max sur tout le site (ex: badge "Disponible immédiatement").

### 2.4 Configuration DaisyUI

Dans `tailwind.config.js` ou `app.css` (selon Tailwind v3 ou v4) :

```js
// tailwind.config.js (v3)
module.exports = {
  daisyui: {
    themes: [
      {
        light: {
          primary: "#4361ee", // oklch(0.546 0.245 262.881)
          "primary-content": "#ffffff",
          secondary: "#252945",
          accent: "#f59e0b",
          neutral: "#1c2040",
          "base-100": "#ffffff",
          "base-200": "#f3f4f9", // oklch(0.968 0.007 247.896)
          "base-300": "#e4e6f0", // oklch(0.929 0.013 255.508)
          "base-content": "#1c2040", // oklch(0.208 0.042 264.695)
          info: "#0284c7",
          success: "#16a34a",
          warning: "#eab308",
          error: "#dc2626",
        },
        dark: {
          primary: "#7b97f7", // oklch(0.661 0.214 264.052)
          "primary-content": "#ffffff",
          secondary: "#e4e6f0",
          accent: "#fbbf24",
          neutral: "#f7f8fb",
          "base-100": "#1c2040", // oklch(0.208 0.042 264.695)
          "base-200": "#252945", // oklch(0.279 0.041 260.031)
          "base-300": "#383d60", // oklch(0.372 0.044 257.287)
          "base-content": "#f7f8fb", // oklch(0.984 0.003 247.858)
          info: "#38bdf8",
          success: "#22c55e",
          warning: "#facc15",
          error: "#ef4444",
        },
      },
    ],
  },
};
```

```css
/* app.css (Tailwind v4) */
@plugin "daisyui" {
  themes:
    light --default,
    dark --prefersdark;
}

@plugin "daisyui/theme" {
  name: "light";
  --color-primary: oklch(58.5% 0.119 195);
  --color-primary-content: oklch(100% 0 0);
  /* ... etc */
}
```

---

## 3. Typographie

### 3.1 Famille

**Même duo que yiroma.fr** pour assurer la cohérence visuelle entre les deux sites.

- **Corps / UI** : `DM Sans` — lisible, neutre, professionnel.
- **Titres / Headings** : `Plus Jakarta Sans` — plus de personnalité, bon impact sur les H1/H2.
- **Code / mono** : `JetBrains Mono` — pour les snippets de stack, noms de fichiers, etc.

```css
/* Corps */
font-family:
  "DM Sans",
  system-ui,
  -apple-system,
  sans-serif;

/* Titres (classe .font-heading) */
font-family: "Plus Jakarta Sans", system-ui, sans-serif;

/* Code */
font-family: "JetBrains Mono", ui-monospace, "SF Mono", Menlo, monospace;
```

Chargement via Google Fonts :

```html
<link
  href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap"
  rel="stylesheet"
/>
```

### 3.2 Échelle typographique

| Token          | Taille          | Line-height | Poids | Usage                 |
| -------------- | --------------- | ----------- | ----- | --------------------- |
| `text-display` | 3.5rem (56px)   | 1.05        | 800   | H1 hero uniquement    |
| `text-h1`      | 2.5rem (40px)   | 1.1         | 700   | H1 sections           |
| `text-h2`      | 2rem (32px)     | 1.15        | 700   | Titres de sections    |
| `text-h3`      | 1.5rem (24px)   | 1.2         | 600   | Sous-titres           |
| `text-h4`      | 1.25rem (20px)  | 1.3         | 600   | Titres de cartes      |
| `text-lg`      | 1.125rem (18px) | 1.6         | 400   | Lead, intro           |
| `text-base`    | 1rem (16px)     | 1.6         | 400   | Texte courant         |
| `text-sm`      | 0.875rem (14px) | 1.5         | 400   | Métadonnées, légendes |
| `text-xs`      | 0.75rem (12px)  | 1.4         | 500   | Eyebrows, badges      |

### 3.3 Responsive

Sur mobile, `text-display` descend à 2.25rem (36px), `text-h1` à 2rem, `text-h2` à 1.5rem.

Avec Tailwind :

```html
<h1 class="text-4xl leading-tight font-extrabold md:text-5xl lg:text-6xl"></h1>
```

### 3.4 Règles d'usage

- **Un H1 par page**, point.
- **Le contenu courant en `text-base` ou `text-lg`**, jamais plus petit (sauf metadata).
- **Hauteur de ligne généreuse** (1.6) pour le confort de lecture.
- **Eyebrows en uppercase, letter-spacing 0.05em**, en `text-xs` ou `text-sm`.
- **Lien hover** : underline + couleur primary (pas de couleur sur les liens par défaut dans le texte courant).

---

## 4. Espacement et grille

### 4.1 Échelle d'espacement

On suit l'échelle Tailwind par défaut (4px base). À retenir :

| Token      | Valeur | Usage typique                         |
| ---------- | ------ | ------------------------------------- |
| `space-2`  | 8px    | Espacement intra-composant            |
| `space-4`  | 16px   | Padding boutons, gap éléments proches |
| `space-6`  | 24px   | Padding cartes                        |
| `space-8`  | 32px   | Gap entre éléments d'une section      |
| `space-12` | 48px   | Padding section mobile                |
| `space-16` | 64px   | Padding section desktop minimum       |
| `space-20` | 80px   | Padding section large                 |
| `space-24` | 96px   | Padding section hero                  |
| `space-32` | 128px  | Aération entre sections majeures      |

### 4.2 Container

**Largeur max contenu** : `max-w-6xl` (1152px), centré, avec padding latéral `px-6 lg:px-8`.

```html
<section class="py-20 lg:py-32">
  <div class="mx-auto max-w-6xl px-6 lg:px-8">
    <!-- contenu -->
  </div>
</section>
```

### 4.3 Grilles

- **2 colonnes desktop / 1 colonne mobile** : pour hero (texte + visuel), CTA finale.
- **3 colonnes desktop / 1 colonne mobile** : pour les 3 piliers profil.
- **4 colonnes desktop / 2 tablette / 1 mobile** : pour les compétences.
- **Gap standard** : `gap-8` (32px) entre cartes.

---

## 5. Composants

### 5.1 Boutons

#### Variantes

| Variante  | Classes Tailwind/DaisyUI   | Usage                         |
| --------- | -------------------------- | ----------------------------- |
| Primary   | `btn btn-primary`          | CTA principal (1 par section) |
| Secondary | `btn btn-outline`          | CTA secondaire                |
| Ghost     | `btn btn-ghost`            | Liens d'action discrets       |
| Icon      | `btn btn-circle btn-ghost` | Liens sociaux, theme toggle   |

#### Tailles

- **Default** (`btn`) : 16px text, padding 0.75rem 1.5rem
- **Large** (`btn-lg`) : 18px text, padding 1rem 2rem (à utiliser dans le hero)
- **Small** (`btn-sm`) : 14px text (à utiliser dans les cartes)

#### Comportement

- Coins arrondis : `rounded-lg` (8px), pas plus.
- Pas d'ombre lourde (`shadow-sm` max au repos, `shadow-md` au hover).
- Transition douce : `transition-all duration-200`.

#### Exemple

```html
<a href="#realisations" class="btn btn-lg btn-primary"> Voir mes réalisations </a>

<a href="/cv.pdf" class="btn btn-outline btn-lg"> Télécharger mon CV </a>
```

---

### 5.2 Cartes (cards)

Utilisées pour les piliers profil, les compétences, les études de cas.

```html
<article
  class="card rounded-xl border border-base-300 bg-base-100 p-6 transition-shadow hover:shadow-md lg:p-8"
>
  <div class="card-body p-0">
    <span class="text-xs font-semibold tracking-wider text-primary uppercase"> Conception </span>
    <h3 class="mt-2 text-2xl font-bold">Un concepteur, pas juste un dev</h3>
    <p class="mt-3 leading-relaxed text-base-content/70">
      Diplômé CDA Bac+4. Je modélise, j'architecture...
    </p>
  </div>
</article>
```

**Règles** :

- Bordure 1px `border-base-300` (jamais plus épaisse).
- Coins `rounded-xl` (12px).
- Padding interne `p-6` mobile, `p-8` desktop.
- Hover : `shadow-md` ou élévation légère, **pas de scale, pas de rotate**.

---

### 5.3 Badges / Tags

Utilisés pour les techs dans les études de cas, statuts.

```html
<span class="badge badge-outline badge-sm">React</span>
<span class="badge badge-sm badge-success">Disponible</span>
```

**Règles** :

- Toujours en `badge-sm` ou taille équivalente.
- Outline par défaut, rempli uniquement pour les statuts forts (success, warning).
- Police `text-xs`, légèrement bold.

---

### 5.4 Navigation

```html
<nav class="sticky top-0 z-50 border-b border-base-300 bg-base-100/80 backdrop-blur-md">
  <div class="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-8">
    <a href="/" class="text-lg font-bold">Romaric YI</a>
    <ul class="hidden items-center gap-8 text-sm md:flex">
      <li><a href="#profil" class="hover:text-primary">Profil</a></li>
      <li><a href="#realisations" class="hover:text-primary">Réalisations</a></li>
      <!-- ... -->
    </ul>
    <div class="flex items-center gap-3">
      <ThemeToggle client:load />
      <a href="/cv.pdf" class="btn btn-sm btn-primary">CV PDF</a>
    </div>
  </div>
</nav>
```

**Règles** :

- Hauteur fixe : `h-16` (64px).
- Backdrop-blur subtil au scroll.
- Border-bottom 1px discrète.
- Mobile : burger menu DaisyUI.

---

### 5.5 Hero

```html
<section class="py-20 lg:py-32">
  <div class="mx-auto max-w-6xl px-6 lg:px-8">
    <div class="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
      <div>
        <span class="text-xs font-semibold tracking-wider text-primary uppercase">
          Concepteur Développeur Full Stack · Orléans · Remote
        </span>
        <h1 class="mt-4 text-4xl leading-tight font-extrabold md:text-5xl lg:text-6xl">
          Je conçois des applications web qui tiennent la route.
        </h1>
        <p class="mt-6 text-lg leading-relaxed text-base-content/70">
          Diplômé CDA, spécialisé en architectures sécurisées avec
          <strong>React, Node.js, TypeScript</strong> et <strong>Java/Spring Boot</strong>. 10 ans
          de management en amont qui me permettent de traduire des besoins métier flous en solutions
          concrètes.
        </p>
        <div class="mt-8 flex flex-wrap gap-4">
          <a href="#realisations" class="btn btn-lg btn-primary"> Voir mes réalisations </a>
          <a href="/cv.pdf" class="btn btn-outline btn-lg"> Télécharger mon CV </a>
        </div>
        <p class="mt-6 text-sm text-base-content/60">
          Disponible pour : CDI · Mission longue · Freelance
        </p>
      </div>
      <div class="hidden lg:block">
        <img src="/illustrations/hero.svg" alt="" class="h-auto w-full" />
      </div>
    </div>
  </div>
</section>
```

---

### 5.6 Timeline (parcours)

Layout vertical avec ligne fine à gauche, points de chaque côté, contenu à droite.

```html
<ol class="relative ml-4 space-y-12 border-l-2 border-base-300">
  <li class="relative ml-8">
    <span
      class="absolute top-1 -left-[42px] h-4 w-4 rounded-full border-4 border-base-100 bg-primary"
    ></span>
    <span class="text-xs tracking-wider text-base-content/60 uppercase"> 2014–2024 </span>
    <h3 class="mt-1 text-xl font-bold">Manager terrain (10 ans)</h3>
    <p class="mt-2 leading-relaxed text-base-content/70">
      Pilotage d'équipes, gestion clients, priorisation, formation.
    </p>
  </li>
  <!-- ... -->
</ol>
```

---

### 5.7 Étude de cas (carte projet)

```html
<article class="card overflow-hidden rounded-2xl border border-base-300 bg-base-100 lg:card-side">
  <figure class="lg:w-2/5">
    <img
      src="/projects/project-1.png"
      alt="Capture du projet 1"
      class="h-full w-full object-cover"
    />
  </figure>
  <div class="card-body p-8 lg:w-3/5">
    <div class="flex flex-wrap gap-2">
      <span class="badge badge-outline badge-sm">React</span>
      <span class="badge badge-outline badge-sm">Node.js</span>
      <span class="badge badge-outline badge-sm">PostgreSQL</span>
    </div>
    <h3 class="mt-3 text-2xl font-bold">Nom du projet</h3>

    <div class="mt-4 space-y-3 text-base-content/80">
      <div>
        <h4 class="font-semibold text-base-content">Contexte</h4>
        <p>...</p>
      </div>
      <div>
        <h4 class="font-semibold text-base-content">Problème</h4>
        <p>...</p>
      </div>
      <div>
        <h4 class="font-semibold text-base-content">Solution</h4>
        <p>...</p>
      </div>
      <div>
        <h4 class="font-semibold text-base-content">Résultat</h4>
        <p>...</p>
      </div>
    </div>

    <div class="mt-6 card-actions justify-end">
      <a href="..." class="btn btn-ghost btn-sm">Code</a>
      <a href="..." class="btn btn-sm btn-primary">Voir en ligne</a>
    </div>
  </div>
</article>
```

---

### 5.8 Theme toggle (React island)

```tsx
// src/components/react/ThemeToggle.tsx
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const stored = localStorage.getItem("theme") as "light" | "dark" | null;
    const initial =
      stored ?? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  const toggle = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  };

  return (
    <button
      onClick={toggle}
      aria-label={`Activer le thème ${theme === "light" ? "sombre" : "clair"}`}
      className="btn btn-circle btn-ghost btn-sm"
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
}
```

---

## 6. Iconographie

### 6.1 Bibliothèque

**Lucide Icons** comme librairie principale. Cohérente, moderne, légère, sans signature "trop AI-generated".

```bash
npm install lucide-astro lucide-react
```

```astro
---
import { ArrowRight, Github, Linkedin, Mail } from "lucide-astro";
---

<ArrowRight class="h-5 w-5" />
```

### 6.2 Règles

- Tailles standardisées : `w-4 h-4` (16px), `w-5 h-5` (20px), `w-6 h-6` (24px).
- Trait : `stroke-width="2"` (défaut Lucide).
- Couleur : `currentColor` (s'adapte au texte).
- Pas plus de **2 styles d'icônes** sur tout le site.

### 6.3 Icônes de stack (logos)

Pour les badges techno dans les études de cas, garder les logos officiels SVG (React, Node, etc.) **mais en taille discrète** (16-20px), pas en grosse vignette colorée.

---

## 7. Illustrations

### 7.1 Style cible

Aligné avec yiroma.fr : illustrations vectorielles plates, traits simples, palette restreinte cohérente avec les couleurs du site, style "humain stylisé".

### 7.2 Sources possibles

- **unDraw** ([undraw.co](https://undraw.co)) — gratuit, customisable couleur, c'est ce qu'utilise visiblement yiroma.fr.
- **Storyset** ([storyset.com](https://storyset.com)) — gratuit avec attribution, plus stylé.
- **Création custom** dans Figma si besoin de différenciation.

### 7.3 Règles d'usage

- **Toutes les illustrations utilisent la même palette** (configurer la couleur primary teal).
- **Une illustration par section majeure max**, pas plus.
- **Format SVG** uniquement, pas de PNG d'illustration.
- Format `<img>` avec `alt=""` si décoratif, `alt` descriptif si informatif.

### 7.4 Liste suggérée

| Section              | Illustration                                         |
| -------------------- | ---------------------------------------------------- |
| Hero                 | Personnage devant un tableau / schéma d'architecture |
| Pilier Conception    | Croquis / blueprint                                  |
| Pilier Communication | Discussion, échange, équipe                          |
| Pilier Ingénieur     | Setup dev, code, écran                               |
| Contact / CTA        | Échange, message                                     |

---

## 8. Animations & micro-interactions

### 8.1 Principes

- **Subtiles, jamais gratuites**.
- **Respect de `prefers-reduced-motion`**, toujours.
- **Durées courtes** : 150-300ms maximum.
- **Easing standard** : `ease-out` pour les entrées, `ease-in-out` pour les hover.

### 8.2 Animations recommandées

| Élément      | Animation                                      | Durée |
| ------------ | ---------------------------------------------- | ----- |
| Boutons      | Hover : légère élévation (`shadow-md`)         | 200ms |
| Cartes       | Hover : `shadow-md` apparaît                   | 200ms |
| Liens texte  | Hover : underline avec `text-underline-offset` | 150ms |
| Sections     | Fade + translate-y léger à l'entrée viewport   | 400ms |
| Theme toggle | Icône qui swap (rotation ou crossfade)         | 200ms |

### 8.3 À ne pas faire

- ❌ Parallaxe sur le scroll
- ❌ Scroll-jacking
- ❌ Texte qui se tape lettre par lettre
- ❌ Particles, étoiles, fond animé
- ❌ Marquee de logos qui défile en boucle (le grand classique du portfolio dev)

### 8.4 Implémentation Astro

Pour le scroll-trigger fade-in, on peut utiliser une simple Intersection Observer :

```astro
---
// Pas de lib lourde type Framer Motion / GSAP nécessaire
---

<style>
  .reveal {
    opacity: 0;
    transform: translateY(20px);
    transition:
      opacity 0.4s ease-out,
      transform 0.4s ease-out;
  }
  .reveal.visible {
    opacity: 1;
    transform: translateY(0);
  }

  @media (prefers-reduced-motion: reduce) {
    .reveal {
      opacity: 1;
      transform: none;
      transition: none;
    }
  }
</style>

<script>
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
</script>
```

---

## 9. Élévation et bordures

### 9.1 Bordures

- **Couleur unique** : `border-base-300`.
- **Épaisseur** : 1px (`border`), exceptionnellement 2px pour les éléments forts.
- **Rayon** :
  - `rounded-md` (6px) : badges, petits éléments
  - `rounded-lg` (8px) : boutons, inputs
  - `rounded-xl` (12px) : cartes
  - `rounded-2xl` (16px) : grandes cartes (études de cas)
  - **Pas de `rounded-full` sauf avatars et boutons icônes**

### 9.2 Ombres

| Token           | Usage                             |
| --------------- | --------------------------------- |
| `shadow-sm`     | Repos sur certaines cartes (rare) |
| `shadow-md`     | Hover sur cartes et boutons       |
| `shadow-lg`     | À éviter, signal "lourd"          |
| `shadow-xl/2xl` | Bannis du site                    |

**En dark mode** : utiliser des bordures plutôt que des ombres (les ombres se voient mal sur fond sombre).

---

## 10. Responsive breakpoints

On s'aligne sur les breakpoints Tailwind par défaut :

| Breakpoint | Largeur | Usage                                  |
| ---------- | ------- | -------------------------------------- |
| `sm`       | 640px   | Petite tablette / grand mobile paysage |
| `md`       | 768px   | Tablette portrait                      |
| `lg`       | 1024px  | Desktop / laptop                       |
| `xl`       | 1280px  | Grand écran                            |
| `2xl`      | 1536px  | Très grand écran (peu utilisé)         |

**Stratégie** : mobile-first systématique. Le site doit être parfait sur 375px de large avant de penser au desktop.

**Points d'attention mobile** :

- Hauteur du hero : ne pas dépasser 100vh.
- CTAs : empilés en mobile, full-width sur petits écrans.
- Navigation : burger DaisyUI, drawer plein écran.
- Études de cas : image au-dessus, texte en-dessous (pas de side-by-side).

---

## 11. Accessibilité

### Checklist

- [ ] Contrastes AA minimum partout (vérifier avec axe DevTools)
- [ ] Tous les liens et boutons accessibles au clavier (focus visible)
- [ ] `:focus-visible` stylé (anneau primary, 2px)
- [ ] `aria-label` sur tous les boutons icônes seules
- [ ] `alt` descriptif sur toutes les images informatives
- [ ] `alt=""` sur les images purement décoratives
- [ ] Hiérarchie de headings cohérente (un H1, puis H2, H3, pas de saut)
- [ ] `lang="fr"` sur le `<html>`
- [ ] Pas de texte sous 14px (sauf metadata)
- [ ] `prefers-reduced-motion` respecté
- [ ] Theme toggle fonctionne sans JS pour le rendu initial (SSG)

### Style focus

```css
:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
  border-radius: 4px;
}
```

---

## 12. Setup recommandé (Astro + Tailwind + DaisyUI)

### 12.1 Versions

- Astro : dernière version stable
- Tailwind CSS : v4 si possible (sinon v3.4)
- DaisyUI : v4 (compatible Tailwind v3) ou v5 (Tailwind v4)
- React : uniquement pour les islands interactives

### 12.2 Dépendances minimales

```json
{
  "dependencies": {
    "astro": "^4.x",
    "@astrojs/react": "^3.x",
    "@astrojs/tailwind": "^5.x",
    "tailwindcss": "^3.4.x",
    "daisyui": "^4.x",
    "react": "^18.x",
    "react-dom": "^18.x",
    "lucide-astro": "latest",
    "lucide-react": "latest"
  }
}
```

### 12.3 Structure CSS globale

```css
/* src/styles/global.css */

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }

  body {
    font-family:
      "Inter",
      system-ui,
      -apple-system,
      sans-serif;
    font-feature-settings: "cv11", "ss01";
    -webkit-font-smoothing: antialiased;
  }

  :focus-visible {
    outline: 2px solid hsl(var(--p));
    outline-offset: 2px;
    border-radius: 4px;
  }
}

@layer components {
  .container-custom {
    @apply mx-auto max-w-6xl px-6 lg:px-8;
  }

  .section-padding {
    @apply py-20 lg:py-32;
  }
}
```

### 12.4 Polices DM Sans + Plus Jakarta Sans

Chargement depuis Google Fonts (dans `BaseLayout.astro`) :

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap"
  rel="stylesheet"
/>
```

Ou avec Fontsource pour self-host (recommandé en prod) :

```bash
npm install @fontsource-variable/dm-sans @fontsource/plus-jakarta-sans @fontsource/jetbrains-mono
```

```js
// dans BaseLayout.astro ou global.css
import "@fontsource-variable/dm-sans";
import "@fontsource/plus-jakarta-sans/600.css";
import "@fontsource/plus-jakarta-sans/700.css";
import "@fontsource/plus-jakarta-sans/800.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
```

---

## 13. Checklist avant mise en ligne

### Design

- [ ] Light theme et dark theme cohérents et testés
- [ ] Tous les contrastes AA OK
- [ ] Aucun mur d'icônes de stack répété
- [ ] Hero ne ressemble pas à un template
- [ ] Cohérence visuelle avec yiroma.fr (style d'illustrations notamment)

### Contenu

- [ ] 2-4 études de cas complètes (Contexte / Problème / Solution / Résultat)
- [ ] Timeline parcours rédigée et assumée
- [ ] CV PDF aligné graphiquement avec le site
- [ ] OG image custom

### Technique

- [ ] Lighthouse > 95 sur les 4 axes
- [ ] Responsive testé 375 / 768 / 1024 / 1440
- [ ] JSON-LD `Person` présent
- [ ] sitemap.xml + robots.txt
- [ ] Page 404 custom
- [ ] Pas de console.log en prod
- [ ] Build Astro propre, pas de warnings

### SEO

- [ ] `<title>` optimisé
- [ ] `<meta description>` 150-160 caractères
- [ ] Mots-clés cibles intégrés naturellement (Orléans, Full Stack, React, etc.)
- [ ] Indexation Google Search Console activée

---

_Fin du design system._
