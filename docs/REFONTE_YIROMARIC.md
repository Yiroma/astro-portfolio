# Refonte yiromaric.fr — Plan complet (v2 — basé sur le CV réel)

> Document de cadrage pour la refonte du site portfolio / CV de Romaric YI.
> Objectif : passer d'un portfolio dev générique à un site qui reflète un profil **Concepteur Développeur Full Stack avec 10 ans de management et une vraie sensibilité accessibilité**, à la hauteur du positionnement "concepteur, pas seulement développeur" déjà tenu sur yiroma.fr.

---

## 1. Objectifs stratégiques

### Cible principale

- **Recruteurs tech** (RH, Talent Acquisition) cherchant un profil Full Stack JS/TS ou Java.
- **CTO / Tech Leads / Lead Devs** qui valideront la candidature techniquement.
- **ESN / Cabinets de recrutement** qui sourcent pour des missions longues ou des CDI.

### Cible secondaire

- Pairs développeurs (réseau, opportunités de cooptation).

### Profil à projeter (basé sur ton CV)

Tu n'es pas un junior classique et tu n'es pas non plus un senior tech. Tu es un **profil hybride rare** :

- **Junior/intermédiaire en années dev** (1ère expérience freelance en 2024, 2 cursus RNCP terminés)
- **Senior en soft skills et management** (10 ans, dont 7 chez Micromania-Zing, +135 % d'objectifs, coaching d'équipe)
- **Avec une spécialisation différenciante** : accessibilité (RGAA, WCAG 2.1, NVDA), Clean Architecture, microservices

C'est ce **mix** que le site doit projeter, pas seulement "dev junior".

### Ce que le site doit prouver en moins de 30 secondes

1. **Tu sais concevoir**, pas juste coder : Clean Archi, microservices, UML, Merise sur ton projet de fin d'études.
2. **Tu sais livrer pour un vrai client** : mission Taxi Loire Valley Services avec Lighthouse > 95.
3. **Tu sais communiquer**, ton background management n'est pas du remplissage — chiffres à l'appui.
4. **Tu maîtrises l'accessibilité**, sujet rare et valorisé en France.
5. **Tu maîtrises une stack moderne et large** : React/Next, Node, TS, Java/Spring, GraphQL, Docker.

### Ce qu'il ne doit PAS faire

- Donner l'impression d'un portfolio junior / template GitHub.
- Cacher le profil de management derrière la stack.
- Renvoyer vers yiroma.fr de manière trop visible (un client freelance Yiroma doit pouvoir te recruter sans se demander si tu cherches un CDI ailleurs).

---

## 2. Diagnostic du site actuel (rappel)

### Ce qui fonctionne et qu'on garde

- Le **toggle dark/light** (à conserver, mais à rendre moins central).
- Le **lien GitHub / LinkedIn / Email** (à garder, en secondaire).
- L'identité **"Romaric YI"** claire.

### Ce qui pose problème

| Problème                                   | Impact                                             | Priorité   |
| ------------------------------------------ | -------------------------------------------------- | ---------- |
| Mur d'icônes de stack qui défile           | Signal "portfolio générique 2020-2022"             | 🔴 Haute   |
| Hero classique "Bonjour, je suis…"         | Pattern hyper vu, n'accroche pas                   | 🔴 Haute   |
| Pas d'études de cas projet                 | Tu as **4 vrais projets** à valoriser, c'est gâché | 🔴 Haute   |
| Background management invisible            | Atout différenciant numéro 1, gâché                | 🔴 Haute   |
| Spécialité accessibilité invisible         | Différenciant rare, complètement caché             | 🔴 Haute   |
| Mission client Taxi Loire Valley invisible | Preuve de livraison réelle, gâchée                 | 🔴 Haute   |
| Compétences en vrac                        | Difficile pour un recruteur de scanner rapidement  | 🟠 Moyenne |

---

## 3. Nouvelle structure de page

### Page unique (single-page) recommandée

Un site portfolio reste plus efficace en single-page bien rythmée. Le recruteur scrolle, ne navigue pas. Garder une nav ancrée pour les sections.

### Plan de page

```
┌─────────────────────────────────────────────────────────┐
│ 1. NAV (fixe en haut)                                   │
│    Logo "Romaric YI" │ Profil │ Réalisations │          │
│    Compétences │ Parcours │ Contact      [☀/🌙] [CV PDF]│
├─────────────────────────────────────────────────────────┤
│ 2. HERO                                                 │
│    Pitch 2 lignes + 2 CTA + visuel/illustration         │
├─────────────────────────────────────────────────────────┤
│ 3. PROFIL (3 piliers)                                   │
│    Concepteur │ Communicant │ Ingénieur                 │
├─────────────────────────────────────────────────────────┤
│ 4. RÉALISATIONS (4 projets, 2 mission/cursus + 2 perso) │
│    Contexte → Problème → Solution → Résultat            │
├─────────────────────────────────────────────────────────┤
│ 5. COMPÉTENCES (groupées par domaine)                   │
│    Front │ Back │ Données │ DevOps & Qualité            │
├─────────────────────────────────────────────────────────┤
│ 6. PARCOURS (timeline narrative)                        │
│    Micromania → Reconversion 2023 → CDA 2025 → Aujourd'hui│
├─────────────────────────────────────────────────────────┤
│ 7. CTA CONTACT                                          │
│    "Discutons d'un poste / d'une mission"               │
├─────────────────────────────────────────────────────────┤
│ 8. FOOTER                                               │
└─────────────────────────────────────────────────────────┘
```

---

## 4. Section par section : contenu rédigé

### 4.1 Navigation

**Comportement** : sticky, fond légèrement translucide avec backdrop-blur au scroll.

**Contenu** :

- Logo / wordmark **"Romaric YI"** (à gauche)
- Liens d'ancre : Profil · Réalisations · Compétences · Parcours · Contact
- Toggle thème (icône sun/moon, taille discrète)
- Bouton primaire **"Télécharger mon CV (PDF)"** (à droite)

**À éviter** : le toggle thème en évidence façon "feature du site". C'est un détail UX, pas un argument.

---

### 4.2 Hero

#### Avant (actuel)

> "Bonjour, je suis Romaric YI"
> "Romaric YI, Concepteur Développeur Full Stack"
> Long paragraphe technique + 3 boutons GitHub/LinkedIn/Email

#### Après (proposé — basé sur ton CV)

**Eyebrow** :
`Développeur Full Stack · React · Node.js · TypeScript · Java · Châteauneuf-sur-Loire (45) · Remote France`

**H1** :

> **Je conçois des applications web qui tiennent la route.**
> Du cadrage produit à la mise en production, en passant par l'accessibilité.

**Sous-titre** :

> Développeur Full Stack diplômé **Concepteur Développeur d'Applications (Bac+4, RNCP 37873)**, spécialisé en architectures sécurisées (Clean Architecture, microservices) avec **React, Next.js, Node.js, TypeScript** et **Java/Spring Boot**.
>
> **10 ans de management** chez Micromania-Zing avant la reconversion : je traduis des besoins métier flous en solutions concrètes, je priorise par impact business, et je communique avec les profils non-techniques sans les perdre.

**CTAs** :

- Primaire : `Voir mes réalisations` (ancre vers section 4)
- Secondaire : `Télécharger mon CV` (PDF)

**Lien tertiaire** :
`Disponible pour : CDI · Mission longue · Freelance` _(petit texte sous les CTAs)_

**Visuel à droite (desktop)** :
Illustration vectorielle dans le même style que celles de yiroma.fr. Idée : un personnage devant un schéma d'architecture, ou un duo "tableau blanc + écran de code".

**Liens sociaux** :
GitHub / LinkedIn / Email → en petites icônes en bas du hero, **pas en boutons centraux**.

---

### 4.3 Section Profil — "Pourquoi me recruter"

Reprend la structure des 3 piliers de yiroma.fr (cohérence d'image), traduite pour un public tech.

#### Pilier 1 — Concepteur

**Eyebrow** : Conception

**Titre** : Un concepteur, pas juste un dev qui exécute

**Texte** :

> Diplômé **Concepteur Développeur d'Applications (Bac+4)** après un Bac+2 Développeur Web & Web Mobile. Je modélise (UML, Merise), j'architecture (Clean Architecture, microservices, MVC), je documente. Mon projet de fin d'études — **CarePlan**, app médicale multi-rôles — combinait microservices, GraphQL, tests E2E Playwright et conformité RGAA stricte.

**Mots-clés visuels** : UML · Clean Archi · Microservices · Tests · A11y

#### Pilier 2 — Communicant

**Eyebrow** : Communication

**Titre** : 10 ans de management, et ça change tout

**Texte** :

> Avant le code, j'ai dirigé pendant 7 ans un magasin Micromania-Zing (équipe de 4, **+135 % d'objectifs commerciaux** entre 2019 et 2022) et coaché 4 vendeurs jusqu'au poste de Responsable de Magasin. Je sais cadrer un besoin flou, gérer une priorisation tendue, expliquer une décision technique à un PO non-tech, et désamorcer un conflit avant qu'il ne ralentisse un sprint.

**Mots-clés visuels** : Coaching · Cadrage · Priorisation · Pédagogie

#### Pilier 3 — Ingénieur (avec un angle accessibilité)

**Eyebrow** : Ingénierie & Accessibilité

**Titre** : Une stack moderne, des sites qui marchent pour tout le monde

**Texte** :

> **React, Next.js, TypeScript** côté front ; **Node.js, Express, Java/Spring Boot** côté back ; **PostgreSQL, MySQL, MongoDB, Redis** côté données ; **Docker, CI/CD** pour le delivery. Sensibilité forte à l'**accessibilité** : RGAA, WCAG 2.1, validation NVDA, ARIA sur composants custom. L'a11y, c'est de la qualité technique, pas de la cosmétique.

**Mots-clés visuels** : Full Stack · Polyglotte · RGAA / WCAG · DevOps

---

### 4.4 Section Réalisations — Études de cas (LE point critique)

**4 projets à présenter**, dans cet ordre stratégique :

#### Projet 1 — CarePlan _(en premier, c'est le plus impressionnant)_

**Tags** : React · TypeScript · GraphQL · Apollo · TypeORM · PostgreSQL · Microservices · Docker · CI/CD · Jest · Playwright · RGAA

**Titre** : CarePlan — Gestion de plannings médicaux multi-rôles

**Contexte** :

> Projet de fin de cursus Concepteur Développeur d'Applications (Wild Code School, février-juin 2025). Application complète de gestion de plannings pour cabinets médicaux, avec trois rôles distincts : Secrétaire, Médecin, Administrateur.

**Problème** :

> Imposer une séparation claire des responsabilités entre rôles tout en gardant une expérience fluide. Garantir l'accessibilité réelle (pas juste cocher des cases RGAA), et industrialiser le delivery sur une stack microservices avec tests automatisés à plusieurs niveaux.

**Solution** :

> Architecture en **microservices** modélisée en UML selon les principes de Clean Architecture. API GraphQL avec Apollo Server, persistance via TypeORM sur PostgreSQL. Couverture de tests à trois niveaux (Jest unitaires/intégration + Playwright E2E), conteneurisation Docker complète et chaîne CI/CD. Accessibilité travaillée dès la conception : navigation 100 % clavier, focus trap sur les modales, validation NVDA, ARIA sur tous les composants custom.

**Résultat** :

> Application livrée et soutenue avec succès. Pile technique alignée avec les standards de l'industrie (microservices, GraphQL, tests E2E, CI/CD). Conformité RGAA et WCAG 2.1 effective, pas seulement déclarative.

**Liens** : `[Code GitHub]` `[Démo]` _(à compléter)_

---

#### Projet 2 — Mission Taxi Loire Valley Services _(la preuve client réel)_

**Tags** : React · Next.js · SEO local · Lighthouse 95+

**Titre** : Taxi Loire Valley Services — Site vitrine VTC

**Contexte** :

> Première mission freelance (2024) pour un client VTC local dans la région orléanaise. Le client n'avait pas de présence en ligne et voulait capter des clients via Google.

**Problème** :

> Construire de zéro une identité visuelle, un site rapide, accessible, bien référencé localement, avec un coût d'acquisition zéro pour le client (pas de budget pub).

**Solution** :

> Conception de l'identité visuelle, intégration responsive, optimisation SEO local (mots-clés géolocalisés, Schema.org, Google Business Profile). Mise en production et accompagnement post-livraison. Gestion de bout en bout : recueil des besoins, propositions, itérations, maintenance.

**Résultat** :

> **Score Lighthouse > 95 sur les 4 piliers** (performance, accessibilité, bonnes pratiques, SEO). Site en ligne et opérationnel. Relation client tenue de la prospection à la maintenance.

**Liens** : `[Voir le site]` _(à compléter)_

---

#### Projet 3 — Budget Management _(en cours, montre que tu progresses)_

**Tags** : Next.js · TypeScript · Tailwind · Java · Spring Boot · PostgreSQL · Docker · API REST

**Titre** : Budget Management — Suivi financier personnel

**Contexte** :

> Projet personnel en cours (2026). Application permettant aux utilisateurs de suivre leurs dépenses, catégoriser leurs transactions et visualiser leurs flux financiers.

**Problème** :

> M'approfondir sur la stack Java/Spring Boot côté back tout en gardant un front Next.js moderne. Mettre en pratique une architecture en couches stricte avec une API REST disciplinée et une documentation interne soignée.

**Solution** :

> Architecture en couches avec API REST stricte, conteneurisation complète via Docker et Makefile pour faciliter l'onboarding. Documentation interne (guides de conventions). Accessibilité RGAA visée dès la conception.

**Résultat** :

> Projet en cours. _(à compléter selon avancement : "MVP livré", "Auth + CRUD complet", etc.)_

**Liens** : `[Code GitHub]` _(à compléter)_

---

#### Projet 4 — Hive _(projet perso 2025, démontre la régularité)_

**Tags** : React · TypeScript · Tailwind · Apollo · GraphQL · TypeORM · SQLite

**Titre** : Hive — Home Media Center

**Contexte** :

> Projet personnel (2025). Application permettant à un utilisateur de centraliser, noter et obtenir des recommandations sur ses contenus multimédias personnels (films, séries, musique).

**Problème** :

> Construire une expérience mobile-first vraiment accessible (pas juste responsive) sur un domaine où les apps grand public négligent l'a11y.

**Solution** :

> Interface mobile-first en React + TypeScript + Tailwind, alternatives textuelles systématiques sur tous les médias, **respect strict des ratios de contraste WCAG AA**. Stack GraphQL/Apollo + TypeORM sur SQLite pour la persistance locale.

**Résultat** :

> _(à compléter : nb de fonctionnalités livrées, retours d'utilisateurs proches, etc.)_

**Liens** : `[Code GitHub]` _(à compléter)_

---

#### Format visuel commun pour chaque carte

```
┌──────────────────────────────────────────┐
│ [Capture / mockup du projet]             │
│                                          │
│ TAGS : [React] [Node] [Postgres] [...]   │
│                                          │
│ TITRE DU PROJET                          │
│                                          │
│ Contexte                                 │
│   1-2 phrases                            │
│                                          │
│ Problème                                 │
│   2-3 phrases                            │
│                                          │
│ Solution                                 │
│   3-4 phrases                            │
│                                          │
│ Résultat                                 │
│   Métrique ou impact concret             │
│                                          │
│ [Voir le code] [Voir en ligne]           │
└──────────────────────────────────────────┘
```

**Captures à prévoir** : pour chaque projet, au moins une capture représentative. Pour Taxi Loire Valley, idéalement la home + un score Lighthouse en évidence.

---

### 4.5 Section Compétences

**Stop au mur d'icônes répété 3 fois.** À remplacer par 4 colonnes claires (basées sur ton CV) :

```
FRONT-END           BACK-END             DONNÉES         DEVOPS & QUALITÉ
─────────           ────────             ───────         ────────────────
React               Node.js              PostgreSQL      Git / GitHub
Next.js             Express              MySQL           Docker / Nginx
TypeScript          API REST             SQLite          CI/CD
Tailwind            GraphQL              MongoDB         Tests (Vitest/Jest)
Sass                Apollo Server        Redis           Playwright (E2E)
Shadcn/UI           TypeORM                              RGAA / WCAG 2.1
Figma               Java                                 Jira / Trello / Notion
Accessibilité       Spring Boot
                                                         ARCHITECTURE
                                                         ────────────
                                                         MVC
                                                         Clean Architecture
                                                         UML / Merise
```

**Format** : 4 cartes côte à côte (responsive : 2x2 sur tablette, stack vertical mobile). Chaque carte avec une icône Lucide en haut, le titre, la liste.

**Bonus** : ajouter une 5ème "carte" plus petite ou un bandeau dédié à **l'Architecture** (MVC, Clean Architecture, UML, Merise) — c'est un différenciant à part qui mérite sa propre case.

---

### 4.6 Section Parcours — Timeline

**Format timeline verticale**, narrative, qui transforme le parcours atypique en force.

```
2016–2023  │  Responsable de Magasin & Référent Régional
           │  Micromania-Zing, Orléans
           │  Direction d'un magasin de 150 m² (équipe de 4),
           │  +135 % d'objectifs sur 2019-2022, référent régional
           │  pour 4 magasins, coaching de 4 vendeurs promus
           │  Responsables. C'est là que j'ai appris à
           │  comprendre un besoin avant d'y répondre.
           │
2023       │  Diplôme Bac+2 — Développeur Web & Web Mobile
           │  Wild Code School (RNCP 31114, niveau 5)
           │  Projet de fin de cursus : DevMX, plateforme
           │  communautaire avec auth, back-office et CMS.
           │
2024       │  Premières missions freelance
           │  Micro-entreprise — Châteauneuf-sur-Loire
           │  Mission Taxi Loire Valley Services :
           │  site vitrine, Lighthouse > 95 sur les 4 piliers.
           │
2025       │  Diplôme Bac+4 — Concepteur Développeur d'Applications
           │  Wild Code School (RNCP 37873, niveau 6)
           │  Projet de fin de cursus : CarePlan, app médicale
           │  microservices avec GraphQL, Docker, CI/CD et
           │  conformité RGAA / WCAG 2.1.
           │
2026 +     │  Développeur Full Stack
           │  En recherche : CDI · mission longue · freelance.
           │  Projet en cours : Budget Management
           │  (Next.js + Java/Spring Boot).
```

**Le ton** : ne pas s'excuser de la reconversion, l'assumer comme une force.

---

### 4.7 Section Contact / CTA final

**Titre** : Une opportunité à discuter ?

**Sous-titre** :

> CDI, mission longue ou freelance ponctuel — j'étudie tout ce qui correspond à mon profil. Premier échange sans engagement, je réponds sous 24h.

**Boutons** :

- Primaire : `Envoyer un message` → mailto:yiromaric@gmail.com
- Secondaire : `Me joindre sur LinkedIn` → linkedin.com/in/yiromaric

**Mini-bloc info pratique** (3 colonnes sobres) :

- 📍 Châteauneuf-sur-Loire (45) · Remote France entière
- 💼 Disponibilité : _(à préciser : immédiate / sous X semaines)_
- 🗣️ Langues : Français (natif) · Anglais technique
- 📞 06 95 38 60 99 _(optionnel selon ta préférence)_

---

### 4.8 Footer

Léger, pas surchargé :

- Wordmark "Romaric YI"
- Liens : LinkedIn · GitHub · Email
- Mentions légales (si requis)
- © 2026 Romaric YI

---

## 5. Ton et style rédactionnel

### Règles

1. **"Je"** assumé partout. C'est un site personnel.
2. **Phrases courtes**. 15-20 mots max en moyenne.
3. **Verbes d'action concrets** : "j'ai conçu", "j'ai livré", "j'ai coaché", pas "je suis passionné par…".
4. **Pas de buzzwords creux** : éviter "passionné", "rigoureux", "team player". Red flags pour un recruteur senior.
5. **Du concret > de l'abstrait** : "10 ans, +135 % d'objectifs, équipe de 4" > "expérience en gestion d'équipe".
6. **Cohérence avec yiroma.fr** : même ton direct, même structure 3-piliers, même rythme.
7. **Chiffres mis en avant** dès qu'ils existent : Lighthouse 95+, +135 %, 10 ans, équipe de 4. Tu as la chance d'en avoir, profite-en.

### À bannir absolument

- "Bienvenue sur mon portfolio"
- "Passionné de nouvelles technologies"
- "À l'écoute de nouvelles opportunités"
- "Junior dynamique" (même si vrai)
- Citation inspirante en hero

---

## 6. Points techniques (Astro + Tailwind + DaisyUI)

### Architecture suggérée

```
src/
├── components/
│   ├── Nav.astro
│   ├── Hero.astro
│   ├── ProfilePillars.astro
│   ├── CaseStudy.astro          ← composant réutilisable par projet
│   ├── SkillsGrid.astro
│   ├── Timeline.astro
│   ├── ContactCTA.astro
│   ├── Footer.astro
│   └── react/
│       └── ThemeToggle.tsx       ← seul vrai besoin React (interactif)
├── content/
│   └── projects/                  ← Astro Content Collections
│       ├── careplan.md
│       ├── taxi-loire-valley.md
│       ├── budget-management.md
│       └── hive.md
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   └── index.astro
├── styles/
│   └── global.css
└── public/
    ├── cv.pdf
    ├── illustrations/
    ├── projects/                  ← captures des projets
    └── og-image.png
```

### Recommandations techniques

1. **Garder Astro Islands au minimum**. Le thème toggle suffit.
2. **Astro Content Collections** pour les études de cas : un fichier `.md` ou `.mdx` par projet, plus facile à maintenir.
3. **DaisyUI avec parcimonie**. Préférer du Tailwind brut + 2-3 composants DaisyUI seulement (`btn`, `badge`).
4. **Lighthouse > 95** sur toutes les métriques. C'est ton CV technique. **En particulier l'accessibilité doit être à 100** — tu mets l'a11y en avant dans ton positionnement, ne te plante pas dessus.
5. **OG image custom** pour LinkedIn.
6. **CV PDF téléchargeable** — celui que tu as déjà est bien.
7. **JSON-LD `Person`** dans le `<head>` pour le SEO et les IA :

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Romaric YI",
  "jobTitle": "Développeur Full Stack",
  "url": "https://yiromaric.fr",
  "email": "yiromaric@gmail.com",
  "telephone": "+33695386099",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Châteauneuf-sur-Loire",
    "postalCode": "45110",
    "addressCountry": "FR"
  },
  "alumniOf": [
    {
      "@type": "EducationalOrganization",
      "name": "Wild Code School"
    }
  ],
  "knowsAbout": [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Java",
    "Spring Boot",
    "GraphQL",
    "PostgreSQL",
    "Docker",
    "Clean Architecture",
    "Accessibilité Web",
    "RGAA",
    "WCAG"
  ],
  "sameAs": ["https://github.com/Yiroma", "https://www.linkedin.com/in/yiromaric/"]
}
```

### Performance et accessibilité

- Lighthouse cible : 100 sur Accessibilité, 95+ sur les 3 autres.
- Pas de mur d'icônes animé en boucle.
- Images en `loading="lazy"` sauf le hero.
- SVG inline pour les petites icônes, fichier externe pour les illustrations.
- Police custom : 1 famille (Inter en variable font), `font-display: swap`.
- Navigation clavier complète, focus visibles.
- Contrastes AA minimum, viser AAA sur le texte courant si possible.
- **Tester avec NVDA** ou VoiceOver avant la mise en ligne, c'est ton positionnement.

---

## 7. SEO & visibilité (recruteurs + IA génératives)

Tu vends sur yiroma.fr l'audit SEO/GEO, donc montre que tu sais le faire sur ton propre site.

### Mots-clés cibles

- "Développeur Full Stack Orléans"
- "Concepteur Développeur d'Applications React Node Loiret"
- "Développeur Java Spring Boot freelance Centre-Val de Loire"
- "Développeur accessibilité RGAA WCAG France"
- "Développeur Full Stack remote France"

### Optimisations

- `<title>` : `Romaric YI · Développeur Full Stack React/Node/Java — Orléans & Remote`
- `<meta description>` : 150-160 caractères, claire, avec mots-clés cibles.
- H1 unique, H2/H3 structurés.
- JSON-LD `Person` (cf. point précédent).
- Sitemap + robots.txt propres.
- Page 404 custom.

### Pour être cité par les IA (ChatGPT, Perplexity, Gemini)

- Contenu factuel et structuré.
- Bloc "À propos" qui répond à "qui est Romaric YI ?" en 2-3 phrases factuelles.
- Présence cohérente sur LinkedIn + GitHub.

---

## 8. Roadmap de mise en œuvre

### Phase 1 — Contenu (avant tout code)

- [x] Lister les projets — **fait : CarePlan, Taxi Loire Valley, Budget Management, Hive**
- [x] Récupérer / produire les captures d'écran des 4 projets
- [x] Compléter les "Résultats" pour Hive et Budget Management
- [ ] Vérifier les liens GitHub (rendre les repos publics si besoin)
- [x] Préciser la disponibilité (immédiate / X semaines)
- [x] Le CV PDF est déjà prêt — bien

### Phase 2 — Design

- [x] Valider le design system (cf. fichier `DESIGN_SYSTEM.md`)
- [x] Maquetter le hero
- [x] Choisir / créer les illustrations (style cohérent yiroma.fr)
- [ ] Définir l'OG image

### Phase 3 — Développement

- [x] Setup base Astro + Tailwind + DaisyUI
- [x] Composants atomiques (Button, Badge, Card, Section)
- [x] Composants de section (Hero, Pillars, etc.)
- [ ] Content Collections pour les 4 projets
- [x] Theme toggle (React island)
- [x] Responsive mobile-first

### Phase 4 — Finition

- [ ] Tests Lighthouse (cible : 100 a11y, 95+ partout)
- [ ] Tests sur 3 navigateurs minimum
- [ ] Tests responsive (mobile / tablette / desktop / wide)
- [ ] Tests NVDA / VoiceOver (cohérence avec ton positionnement a11y)
- [ ] JSON-LD + meta tags
- [ ] Mise en ligne

---

## 9. Indicateurs de réussite

| Indicateur                                        | Cible                        | Comment mesurer   |
| ------------------------------------------------- | ---------------------------- | ----------------- |
| Temps passé sur le site                           | > 1 min 30                   | Plausible / GA4   |
| Téléchargements CV                                | > 30 % des visites recruteur | Event tracking    |
| Clics LinkedIn / GitHub                           | tracker ces sorties          | Outbound tracking |
| Messages reçus                                    | > 1 / mois (qualifié)        | Manuel            |
| Lighthouse Accessibilité                          | 100                          | Test régulier     |
| Lighthouse autres                                 | > 95                         | Test régulier     |
| Position SEO sur "développeur full stack Orléans" | Top 10 sous 3 mois           | Search Console    |

---

## 10. À ne pas oublier

- **Cohérence avec yiroma.fr** : même ADN visuel, structure 3-piliers, ton direct.
- **Séparation claire des cibles** : pas trop de cross-link entre les deux sites. Un petit lien discret dans le footer ("Activité freelance : yiroma.fr") suffit.
- **L'a11y est un différenciant que tu sous-exploites** — mets-le partout : pilier dédié, mention sur 3 des 4 projets, certifs RGAA dans les compétences.
- **Mise à jour régulière** : ajouter un projet tous les 3-6 mois minimum. Quand Budget Management sera livré, mettre à jour le "Résultat" avec des chiffres concrets.
- **Le CV PDF** est déjà bien fait, le site doit suivre la même rigueur graphique.

---

_Fin du plan de refonte — v2 alignée sur le CV réel._
