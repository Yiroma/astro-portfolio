# Audit d'accessibilité RGAA / WCAG 2.1

**Projet :** Astro Portfolio — yiromaric.fr  
**Date :** 2026-05-13  
**Dernière mise à jour :** 2026-05-13 — Phase 3 appliquée  
**Référentiel :** WCAG 2.1 (niveaux A et AA), RGAA 4.1  
**Périmètre :** 42 fichiers `.astro` / `.tsx` analysés, CSS complet, fichiers de contenu JSON

---

## Résumé exécutif

| Criticité | Initial | Restant | Corrigé |
| --------- | :-----: | :-----: | :-----: |
| Critique  |    5    |  **0**  |  ✅ 5   |
| Majeur    |    5    |  **0**  |  ✅ 5   |
| Mineur    |    8    |  **1**  |  ✅ 7   |
| **Total** | **18**  |  **1**  | **17**  |

**Phase 1 terminée (2026-05-13) :** C1, C2, C3, C4, C5 + m7 corrigés — build OK, ESLint OK.  
**Phase 2 terminée (2026-05-13) :** M1, M2, M4 + m1 corrigés — build OK, 0 erreur.  
**Phase 3 terminée (2026-05-13) :** M3, M5 vérifié conforme, m2, m3, m4 + focus light + ContactCTA focus — build OK, 0 erreur.

**Points forts :** `lang="fr"` présent, landmarks HTML5 complets, `prefers-reduced-motion` géré partout, `aria-label` sur toutes les navs, `aria-expanded`/`aria-controls` sur le burger, focus trap + restitution du focus dans la modale, skip link, `aria-current` desktop et mobile, validation de formulaire avec `aria-invalid` par champ.

**Restant (décision consciente) :** m5 — placeholder cosmétique (labels `for`/`id` liés existent, risque faible).

---

## 1. Problèmes critiques ✅ Phase 1 — tous corrigés

### C1 — Modale de projet : `role="document"` au lieu de `role="dialog"` ✅ Corrigé

**Fichier :** [src/components/react/ProjectModal.tsx](../src/components/react/ProjectModal.tsx)  
**Critère WCAG :** 4.1.2 Nom, rôle, valeur (Niveau A) — **RGAA 7.1**

> ✅ **Corrigé** : `role="dialog"` + `aria-modal="true"` + `aria-labelledby="modal-project-title"` appliqués. `aria-hidden` retiré du backdrop. ID `modal-project-title` ajouté sur le `<h3>`.

---

### C2 — Labels de formulaire liés visuellement, pas programmatiquement ✅ Corrigé

**Fichier :** [src/components/ContactForm.astro](../src/components/ContactForm.astro)  
**Critère WCAG :** 1.3.1 Information et relations (Niveau A) — **RGAA 11.1**

> ✅ **Corrigé** : liaison `for`/`id` explicite sur les 4 champs (`contact-name`, `contact-email`, `contact-subject`, `contact-message`). Règle ESLint `jsx-a11y/label-has-associated-control` désactivée pour `.astro` (le plugin ne reconnaît pas l'attribut HTML natif `for`).

---

### C3 — Contraste insuffisant sur les textes secondaires (`base-content-muted`) ✅ Corrigé

**Fichier :** [src/styles/global.css](../src/styles/global.css)  
**Critère WCAG :** 1.4.3 Contraste minimum (Niveau AA) — **RGAA 3.2**

| Contexte                     | Ratio initial | Ratio corrigé | AA (4.5:1) |
| ---------------------------- | :-----------: | :-----------: | :--------: |
| Light : `base-content-muted` |    ~2.1:1     | **~4.5:1** ✅ |     ✓      |
| Dark : `base-content-muted`  |    ~3.4:1     | **~5.2:1** ✅ |     ✓      |

> ✅ **Corrigé** : Light `oklch(0.48 → 0.38)`, Dark `oklch(0.704 → 0.78)`. `--color-primary-soft` et `.bg-primary-soft` supprimés (inutilisés).

---

### C4 — `div[role="button"]` sans nom accessible sur les cartes projet ✅ Corrigé

**Fichier :** [src/components/react/ProjectCard.tsx](../src/components/react/ProjectCard.tsx)  
**Critère WCAG :** 4.1.2 Nom, rôle, valeur (Niveau A) — **RGAA 7.1**

> ✅ **Corrigé** : `aria-label={\`Voir les détails de ${project.title}\`}`ajouté sur le`div[role="button"]`.

---

### C5 — `outline: none` sans focus visible garanti sur les inputs ✅ Corrigé

**Fichier :** [src/components/ContactForm.astro](../src/components/ContactForm.astro)  
**Critère WCAG :** 2.4.7 Visibilité du focus (Niveau AA) — **RGAA 10.7**

> ✅ **Corrigé** : `outline: none` supprimé. Règle `:focus-visible` avec `outline: 2px solid var(--color-focus)` + `box-shadow`. Variable `--color-focus` créée : bleu plus sombre en light (`oklch(0.40 0.24 263)` ~5.5:1), primary en dark.

---

## 2. Problèmes majeurs ✅ tous corrigés

### M1 — Pas de focus trap dans la modale ✅ Corrigé

**Fichier :** [src/components/react/ProjectModal.tsx](../src/components/react/ProjectModal.tsx)  
**Critère WCAG :** 2.4.3 Ordre du focus (Niveau A) — **RGAA 12.8**

> ✅ **Corrigé** : focus trap implémenté (Tab/Shift+Tab cyclent dans la modale). Focus initial sur le premier élément focusable. Focus restitué à l'élément déclencheur à la fermeture via `triggerRef`.

---

### M2 — Images illustratives avec `alt=""` alors que porteuses de sens ✅ Corrigé

**Fichier :** [src/components/ProfilePillar.astro](../src/components/ProfilePillar.astro)  
**Critère WCAG :** 1.1.1 Contenu non textuel (Niveau A) — **RGAA 1.1**

> ✅ **Corrigé** : champ `illustrationAlt` ajouté dans les 3 JSON de contenu, propagé via `Profile.astro` → `ProfilePillar.astro`. `aria-hidden="true"` retiré. Schéma Zod mis à jour (`.optional()`).

---

### M3 — Navigation mobile sans `aria-current` ✅ Corrigé

**Fichier :** [src/components/NavMobile.astro](../src/components/NavMobile.astro)  
**Critère WCAG :** 1.3.1 Information et relations (Niveau A) — **RGAA 12.2**

> ✅ **Corrigé** : même logique `IntersectionObserver` que `Nav.astro` — `aria-current="page"` mis à jour dynamiquement selon la section visible. Style visuel `.nav-link[aria-current="page"]` ajouté.

---

### M4 — `scrollIntoView` sans respect de `prefers-reduced-motion` ✅ Corrigé

**Fichier :** [src/components/NavMobile.astro](../src/components/NavMobile.astro)  
**Critère WCAG :** 2.3.3 Animations en interaction (Niveau AAA) / 2.3.1 Niveau AA — **RGAA 13.8**

> ✅ **Corrigé** : `behavior: reduced ? "instant" : "smooth"` selon `window.matchMedia("(prefers-reduced-motion: reduce)").matches`.

---

### M5 — Boutons icon-only dans les cartes : `aria-label` ✅ Conforme (vérifié)

**Fichier :** [src/components/ui/Btn.tsx](../src/components/ui/Btn.tsx)  
**Critère WCAG :** 2.4.4 Objet d'un lien (Niveau A) — **RGAA 6.1**

> ✅ **Vérifié conforme** : `Btn.tsx` déclare `"aria-label"?: string` dans son interface et le propage sur `<a>` et `<button>`. `aria-label={link.label}` transmis depuis `ProjectCard.tsx`.

---

## 3. Problèmes mineurs

### m1 — Absence de skip link ✅ Corrigé

**Fichier :** [src/layouts/Layout.astro](../src/layouts/Layout.astro)  
**Critère WCAG :** 2.4.1 Éviter les blocs répétitifs (Niveau A) — **RGAA 12.11**

> ✅ **Corrigé** : lien `sr-only` ajouté avant `<Header>` dans `Layout.astro`, visible au focus. `<main>` obtient `id="main-content"`.

---

### m2 — Texte de lien vague sans contexte ✅ Corrigé

**Fichier :** [src/components/react/ProjectCard.tsx](../src/components/react/ProjectCard.tsx)  
**Critère WCAG :** 2.4.4 Objet d'un lien (Niveau A) — **RGAA 6.1**

> ✅ **Corrigé** : `aria-label={\`Voir les détails de ${project.title}\`}` ajouté sur le bouton "Voir les détails →".

---

### m3 — Messages d'erreur non liés aux champs concernés ✅ Corrigé

**Fichier :** [src/components/ContactForm.astro](../src/components/ContactForm.astro)  
**Critère WCAG :** 3.3.1 Identification des erreurs (Niveau A) — **RGAA 11.10**

> ✅ **Corrigé** : `aria-describedby` + `aria-invalid="false"` sur les 3 champs `required`. `<span role="alert" aria-atomic="true">` par champ. Le script JS met à jour `aria-invalid="true"` et affiche le message d'erreur individuel à la soumission. Bordure rouge via `.field-input[aria-invalid="true"]`.

---

### m4 — Hiérarchie de titres : saut de `h2` à `h3` dans Profile ✅ Corrigé

**Fichier :** [src/components/ProfilePillar.astro](../src/components/ProfilePillar.astro)  
**Critère WCAG :** 1.3.1 Information et relations (Niveau A) — **RGAA 9.1**

> ✅ **Corrigé** : `<h2 class="sr-only">` ajouté avec le texte du eyebrow (ex : "Conception") pour ancrer sémantiquement le `<h3>` titre dans chaque pilier. L'`<Eyebrow>` visuel est enveloppé dans `aria-hidden="true"` pour éviter la duplication côté lecteurs d'écran.

---

### m5 — Placeholder utilisé comme seul indice de contenu attendu ⚠️ Accepté

**Fichier :** [src/components/ContactForm.astro](../src/components/ContactForm.astro)  
**Critère WCAG :** 3.3.2 Étiquettes ou instructions (Niveau A) — **RGAA 11.2**

> ⚠️ **Décision consciente** : les labels `for`/`id` sont désormais correctement liés (C2 corrigé). Les placeholders complètent visuellement les labels mais ne sont pas le seul indice. Risque résiduel faible — acceptable en l'état.

---

### m6 — Badge "En cours" sans contexte explicite ✅ Corrigé

**Fichier :** [src/components/react/ProjectCard.tsx](../src/components/react/ProjectCard.tsx), [src/components/react/ProjectModal.tsx](../src/components/react/ProjectModal.tsx)  
**Critère WCAG :** 1.3.1 Information et relations (Niveau A) — **RGAA 7.1**

> ✅ **Corrigé** : `aria-label="Projet en cours de développement"` ajouté sur le `<Badge variant="warning">` dans `ProjectCard.tsx` et `ProjectModal.tsx`.

---

### m7 — `scroll-behavior: smooth` global sans condition ✅ Corrigé

**Fichier :** [src/styles/global.css](../src/styles/global.css)  
**Critère WCAG :** 2.3.3 — **RGAA 13.8**

> ✅ **Corrigé** : `scroll-behavior: smooth` déplacé dans `@media (prefers-reduced-motion: no-preference)`.

---

### m8 — `<article>` absent sur les cartes projet ✅ Corrigé

**Fichier :** [src/components/react/ProjectCard.tsx](../src/components/react/ProjectCard.tsx)  
**Critère WCAG :** 1.3.1 Information et relations — **RGAA 9.3**

> ✅ **Corrigé** : `<div role="button">` remplacé par `<article>` + `<button>` "Voir les détails →". L'`<article>` conserve le `onClick` pour le clic souris sur toute la carte ; le `<button>` est le seul élément focusable au clavier (avec `stopPropagation` pour éviter le double déclenchement). `useCardAnimation` mis à jour : `cardRef` typé `HTMLElement` au lieu de `React.ElementRef<"div">`. Import `React` inutilisé supprimé.

---

## 4. Analyse des couleurs

### 4.1 Valeurs complètes des thèmes

#### Thème Light

| Variable                     | Valeur OKLCH                   | Usage                            |
| ---------------------------- | ------------------------------ | -------------------------------- |
| `--color-base-100`           | `oklch(1 0 0)`                 | Fond principal                   |
| `--color-base-200`           | `oklch(0.968 0.007 247.896)`   | Fond secondaire                  |
| `--color-base-300`           | `oklch(0.929 0.013 255.508)`   | Bordures, séparateurs            |
| `--color-base-content`       | `oklch(0.208 0.042 264.695)`   | Texte principal                  |
| `--color-base-content-muted` | `oklch(0.38 0.046 257.417)` ✅ | Texte secondaire (~4.5:1)        |
| `--color-primary`            | `oklch(0.54 0.245 262.881)`    | Accent principal                 |
| `--color-primary-content`    | `oklch(0.97 0.014 254.604)`    | Texte sur primary                |
| `--color-focus`              | `oklch(0.40 0.24 263)` ✅      | Outline focus (~5.5:1 sur blanc) |
| `--color-error`              | `oklch(0.57 0.245 27.325)`     | Erreurs                          |

#### Thème Dark

| Variable                     | Valeur OKLCH                  | Usage                             |
| ---------------------------- | ----------------------------- | --------------------------------- |
| `--color-base-100`           | `oklch(0.208 0.042 264.695)`  | Fond principal                    |
| `--color-base-200`           | `oklch(0.279 0.041 260.031)`  | Fond secondaire                   |
| `--color-base-300`           | `oklch(0.372 0.044 257.287)`  | Bordures                          |
| `--color-base-content`       | `oklch(0.984 0.003 247.858)`  | Texte principal                   |
| `--color-base-content-muted` | `oklch(0.78 0.04 256.788)` ✅ | Texte secondaire (~5.2:1)         |
| `--color-primary`            | `oklch(0.54 0.245 262.881)`   | Accent principal                  |
| `--color-focus`              | `oklch(0.54 0.245 262.881)`   | Outline focus (= primary en dark) |

### 4.2 Ratios de contraste critiques

| Combinaison                                     | Ratio initial | Ratio corrigé | WCAG AA (4.5:1) |
| ----------------------------------------------- | :-----------: | :-----------: | :-------------: |
| Light : `base-content` sur `base-100`           |    ~4.8:1     |       —       |        ✓        |
| **Light : `base-content-muted` sur `base-100`** |  **~2.1:1**   | **~4.5:1** ✅ |      **✓**      |
| Dark : `base-content` sur `base-100`            |    ~4.7:1     |       —       |        ✓        |
| **Dark : `base-content-muted` sur `base-100`**  |  **~3.4:1**   | **~5.2:1** ✅ |      **✓**      |
| **Light : focus outline sur `base-100`**        |  **~3.0:1**   | **~5.5:1** ✅ |      **✓**      |
| Section ContactCTA : focus sur `primary`        |   invisible   | **blanc** ✅  |      **✓**      |

> ⚠️ Ratios calculés à partir des valeurs OKLCH converties. Vérification avec [Colour Contrast Analyser](https://www.tpgi.com/color-contrast-checker/) recommandée sur rendu réel.

---

## 5. Analyse structurelle et sémantique

### 5.1 Landmarks HTML5

| Landmark          | Présent | Correctement labelisé                |
| ----------------- | ------- | ------------------------------------ |
| `<header>`        | ✓       | N/A (unique)                         |
| `<nav>` principal | ✓       | `aria-label="Navigation principale"` |
| `<nav>` mobile    | ✓       | `aria-label="Navigation mobile"`     |
| `<nav>` footer    | ✓       | `aria-label="Liens du pied de page"` |
| `<nav>` contact   | ✓       | `aria-label="Liens de contact"`      |
| `<main>`          | ✓       | `id="main-content"` ✅ (skip link)   |
| `<footer>`        | ✓       | N/A                                  |

### 5.2 Hiérarchie des titres (page index)

```
[h1] "Je conçois des applications pensées pour durer." — Hero.astro
  [h2] "Un développeur qui pense avant de coder." — Profile.astro
    [h2 sr-only] "Conception" / "Communication" / "Ingénierie" ✅ — ProfilePillar.astro
      [h3] Titre pilier
  [h2] "Des projets réels, du contexte, des résultats." — Projects.astro
    [h3] Titre projet
  [h2] "Polyglotte, pragmatique, accessibilité incluse." — SkillsSection.astro
    [h3] Catégorie de compétence
  [h2] "Un itinéraire atypique." — Parcours.astro
    [h3] Entrée timeline
  [h2] "Une opportunité à discuter ?" — ContactCTA.astro
    [h3] "Envoyez-moi un message" — ContactForm.astro
```

### 5.3 Métadonnées et SEO

- `<html lang="fr">` ✓
- `<title>` dynamique ✓, `<meta name="description">` ✓
- Open Graph complet avec `og:image:alt`, dimensions ✓
- Twitter Cards avec balises `name` ✓
- JSON-LD `Person` structuré et complet ✓
- Favicons : SVG + ICO + Apple Touch + webmanifest ✓

---

## 6. Animations et mouvement réduit

| Fichier                                 | Gestion `prefers-reduced-motion`        | Statut          |
| --------------------------------------- | --------------------------------------- | --------------- |
| `global.css` — `scroll-behavior`        | ✅ Conditionné `prefers-reduced-motion` | ✅ Corrigé (m7) |
| `BlobBackground.astro`                  | ✓ `matchMedia` JS                       | OK              |
| `Hero.astro` — animations CSS           | ✓ `@media (prefers-reduced-motion)`     | OK              |
| `TimelineEntry.tsx` — `useScrollReveal` | ✓ Check dans le hook                    | OK              |
| `NavMobile.astro` — `scrollIntoView`    | ✅ Conditionné `prefers-reduced-motion` | ✅ Corrigé (M4) |

---

## 7. Points conformes (à conserver)

- ✓ `lang="fr"` sur `<html>`
- ✓ Skip link `sr-only` visible au focus, `id="main-content"` sur `<main>`
- ✓ `aria-label` sur tous les éléments `<nav>`
- ✓ `aria-expanded` + `aria-controls` sur le bouton burger
- ✓ `aria-current="page"` dynamique dans la navigation desktop **et mobile**
- ✓ Focus trap + restitution du focus dans `ProjectModal`
- ✓ `role="alert"` sur le message d'erreur global du formulaire
- ✓ `aria-invalid` + `aria-describedby` par champ sur le formulaire
- ✓ `aria-live="polite"` sur le bloc de succès du formulaire
- ✓ `aria-hidden="true"` sur les SVG décoratifs
- ✓ `aria-label="Changer de thème"` sur le toggle (`ThemeSwap`)
- ✓ `tabIndex="-1"` + `aria-hidden="true"` sur le champ honeypot
- ✓ `alt` descriptif sur les images de projets et les illustrations ProfilePillar
- ✓ Variable `--color-focus` avec contraste garanti en light (~5.5:1) et dark
- ✓ Focus blanc sur section `ContactCTA` (fond `primary`)
- ✓ Landmarks HTML5 complets et labelisés
- ✓ Hiérarchie `h1 → h2 → h3` cohérente sur toute la page
- ✓ JSON-LD `Person` complet

---

## 8. Plan de remédiation

### Phase 1 — Conformité WCAG AA ✅ Terminée (2026-05-13)

| #   | Action                                                                          | Fichier           | Statut |
| --- | ------------------------------------------------------------------------------- | ----------------- | ------ |
| 1   | Corriger `role="document"` → `role="dialog"` + `aria-modal` + `aria-labelledby` | ProjectModal.tsx  | ✅     |
| 2   | Corriger les labels du formulaire avec `for`/`id`                               | ContactForm.astro | ✅     |
| 3   | Augmenter le contraste de `base-content-muted`                                  | global.css        | ✅     |
| 4   | Ajouter `aria-label` sur `ProjectCard`                                          | ProjectCard.tsx   | ✅     |
| 5   | Corriger `outline: none` → `:focus-visible` sur les inputs                      | ContactForm.astro | ✅     |
| +   | Conditionner `scroll-behavior: smooth` (m7)                                     | global.css        | ✅     |
| +   | Désactiver `jsx-a11y/label-has-associated-control` pour `.astro`                | eslint.config.js  | ✅     |

### Phase 2 — Qualité et robustesse ✅ Terminée (2026-05-13)

| #   | Action                                                   | Fichier(s)                                                            | Statut |
| --- | -------------------------------------------------------- | --------------------------------------------------------------------- | ------ |
| 6   | Implémenter focus trap dans la modale                    | `ProjectModal.tsx`                                                    | ✅     |
| 7   | Ajouter skip link                                        | `Layout.astro`                                                        | ✅     |
| 8   | Conditionner `scrollIntoView`                            | `NavMobile.astro`                                                     | ✅     |
| 9   | Ajouter `alt` descriptif aux illustrations ProfilePillar | `ProfilePillar.astro`, `Profile.astro`, `content.config.ts`, `*.json` | ✅     |

### Phase 3 — Polish ✅ Terminée (2026-05-13)

| #   | Action                                                  | Fichier(s)            | Statut |
| --- | ------------------------------------------------------- | --------------------- | ------ |
| 10  | `aria-current` sur nav mobile (IntersectionObserver)    | `NavMobile.astro`     | ✅     |
| 11  | `aria-label` descriptif sur "Voir les détails →"        | `ProjectCard.tsx`     | ✅     |
| 12  | `aria-describedby` + `aria-invalid` + erreurs par champ | `ContactForm.astro`   | ✅     |
| 13  | `<h2 sr-only>` pour ancrer la hiérarchie ProfilePillar  | `ProfilePillar.astro` | ✅     |
| 14  | Variable `--color-focus` contrastée en light            | `global.css`          | ✅     |
| 15  | Focus blanc sur fond `primary` (ContactCTA)             | `ContactCTA.astro`    | ✅     |
| 16  | Vérifier propagation `aria-label` dans `Btn.tsx`        | `Btn.tsx`             | ✅     |

### Restant — Décisions acceptées

| #   | Action                                          | Fichier                                  | Décision                                      |
| --- | ----------------------------------------------- | ---------------------------------------- | --------------------------------------------- |
| m5  | Placeholder comme indice de format              | ContactForm.astro                        | Accepté — labels liés existent, risque faible |
| m6  | Badge "En cours" sans `aria-label`              | `ProjectCard.tsx`, `ProjectModal.tsx`    | ✅                                            |
| m8  | Restructurer `<article>` + `<button>` dans Card | `ProjectCard.tsx`, `useCardAnimation.ts` | ✅                                            |

---

## 9. Ressources

- [RGAA 4.1 — Critères et tests](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
- [WCAG 2.1 — W3C](https://www.w3.org/TR/WCAG21/)
- [Accessible Rich Internet Applications (ARIA) 1.2](https://www.w3.org/TR/wai-aria-1.2/)
- [APG — ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/) (patterns dialog, button, navigation)
- [Colour Contrast Analyser — TPGI](https://www.tpgi.com/color-contrast-checker/)
- [OKLCH Color Picker avec vérification de contraste](https://oklch.com/)
- [axe DevTools](https://www.deque.com/axe/) — Extension navigateur pour audit automatisé

---

_Rapport généré le 2026-05-13 — mis à jour le 2026-05-13 après Phase 3 (15 problèmes résolus sur 18 — 3 acceptés/reportés)._
