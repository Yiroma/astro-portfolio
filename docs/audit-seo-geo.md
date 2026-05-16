# Audit SEO & GEO — yiromaric.fr

> Généré le 16 mai 2026 par analyse du rendu HTML de `https://yiromaric.fr`  
> Mis à jour le 16 mai 2026 après application des corrections sur le code source.

---

## Informations générales

| Champ                           | Valeur                                                                                     |
| ------------------------------- | ------------------------------------------------------------------------------------------ |
| URL                             | https://yiromaric.fr                                                                       |
| Titre actuel (code)             | Romaric Yi \| Développeur Full Stack JS/TS • Châteauneuf-sur-Loire                         |
| Titre indexé par Google (cache) | Yi Romaric - Développeur Web \| Next.js \| React.js \| Tailwind \| MySQL (**obsolète**)    |
| Générateur                      | Astro v6.2.1                                                                               |
| Type de site                    | One-page portfolio avec ancres (#profil, #realisations, #competences, #parcours, #contact) |
| Pages supplémentaires détectées | /legals, /privacy                                                                          |

---

## Scores estimés (analyse rendu HTML)

| Axe                   | Score /100 | Commentaire                        |
| --------------------- | ---------- | ---------------------------------- |
| SEO technique         | 82         | Bonne base Astro statique          |
| SEO contenu           | 61         | Limité par l'architecture one-page |
| GEO (optimisation IA) | 55         | Manque Schema.org, llms.txt, FAQ   |
| Open Graph / Social   | 90         | Quasi parfait                      |

---

## ✅ Points forts

### Open Graph & Twitter Card

- `og:title`, `og:description`, `og:image` (1200×630), `og:locale: fr_FR`, `og:type: website` présents
- `twitter:card: summary_large_image` configuré
- Image OG : `https://yiromaric.fr/og.png`

### Balise canonique

- `canonical: https://yiromaric.fr/` présente et correcte sur la homepage
- `canonical: https://yiromaric.fr/legals` ajouté sur `/legals` ✅
- `canonical: https://yiromaric.fr/privacy` ajouté sur `/privacy` ✅

### Générateur Astro (HTML statique)

- Astro v6.2.1 génère du HTML statique : crawl Googlebot optimal, pas de JS bloquant
- Plugin `@astrojs/sitemap` activé dans `astro.config.mjs` ✅
- `site: "https://yiromaric.fr"` défini ✅
- Sitemap accessible : `https://yiromaric.fr/sitemap-index.xml` → `sitemap-0.xml` ✅
- `robots.txt` correctement configuré (Allow: /, Sitemap: référencé) ✅

### H1 unique

- Un seul H1 : "Je conçois des applications pensées pour durer."
- Hiérarchie H2/H3 cohérente dans les sections
- `/legals` et `/privacy` ont chacune un H1 unique ✅

### Images optimisées

- Photo de profil en `.webp` : `romaric-yi.BEEsRooL_1y59py.webp`
- Attributs `alt` présents et descriptifs sur les images détectées

### Pages légales

- `/legals` (mentions légales) et `/privacy` (politique de confidentialité) présentes
- Signal E-E-A-T positif pour Google
- Ces pages n'ont pas besoin d'être référencées par les moteurs de recherche

### Accessibilité (lien skip nav)

- Lien "Aller au contenu principal" (#main-content) présent
- Bonne pratique appréciée par Google Core Web Vitals

### Schema.org JSON-LD ✅ (corrigé)

- Bloc `Person` présent et enrichi (jobTitle, address, sameAs, knowsAbout, hasCredential, alumniOf)
- Bloc `WebSite` ajouté avec `dateModified` ✅
- Bloc `FAQPage` ajouté (3 questions/réponses) ✅

### GEO — llms.txt ✅ (corrigé)

- Fichier `/public/llms.txt` créé ✅

### Footer — date de mise à jour ✅ (corrigé)

- Mention "Mis à jour en mai 2026" visible dans le footer ✅

---

## ✅ Points corrigés (16 mai 2026)

| #   | Problème                            | Action réalisée                                            | Fichier(s)                                |
| --- | ----------------------------------- | ---------------------------------------------------------- | ----------------------------------------- |
| 2   | Absence de Schema.org WebSite + FAQ | Ajout JSON-LD `WebSite` + `FAQPage` dans Layout.astro      | `src/layouts/Layout.astro`                |
| 3   | `meta-keywords` présente            | Suppression de la balise                                   | `src/layouts/Layout.astro`                |
| 4   | Canonical absent sur pages légales  | Ajout `canonical` explicite sur `/legals` et `/privacy`    | `src/pages/legals.astro`, `privacy.astro` |
| 5   | Sitemap — vérifié opérationnel      | Plugin déjà actif, sitemap accessible en production        | `astro.config.mjs`                        |
| 5   | llms.txt absent                     | Création de `/public/llms.txt`                             | `public/llms.txt`                         |
| 6   | Date de mise à jour absente         | Ajout dans le footer + `dateModified` dans JSON-LD WebSite | `src/components/Footer.astro`             |

---

## ⚠️ Points restants

### 1. Snippet Google obsolète — ACTION MANUELLE REQUISE

- **Problème :** Google affiche encore l'ancien titre et la meta description de l'ancienne version du site
  - Titre indexé : "Yi Romaric - Développeur Web | Next.js | React.js | Tailwind | MySQL"
  - L'URL www.yiromaric.fr/mentions-legales/ est également indexée avec l'ancien contenu
- **Action :** Google Search Console → Inspection d'URL → "Demander l'indexation" pour `https://yiromaric.fr`
- **À vérifier côté hébergeur :** redirection 301 de `www.yiromaric.fr` → `yiromaric.fr` configurée ?
- **Sitemap à soumettre :** `https://yiromaric.fr/sitemap-index.xml`

### 4. Architecture one-page — limite d'indexation (long terme)

- **Problème :** toutes les sections sont des ancres sur une seule URL. Google n'indexe qu'une page.
- **Impact :** impossible de ranker sur des requêtes longue traîne comme :
  - "développeur freelance React Orléans"
  - "CarePlan application médicale microservices"
  - "développeur full stack TypeScript CDI Loiret"
- **Action moyen terme :** créer des routes dédiées :
  - `/projets/careplan` — page projet avec contexte, stack, résultats, lien GitHub
  - `/projets/taxi-loire-valley-services`
  - `/competences` — page stack détaillée
  - `/blog` — articles techniques (voir point suivant)

### 6. Absence de contenu éditorial (blog) (long terme)

- **Problème :** sans blog, le site n'attire que du trafic de marque (recherches de "Romaric Yi")
- **Action long terme :** 1 article/mois sur des sujets comme :
  - "Comment j'ai configuré GraphQL avec TypeORM dans CarePlan"
  - "Accessibilité RGAA 4.1 : retour d'expérience sur un projet réel"
  - "Site vitrine Astro + SEO local : score Lighthouse 95+"

---

## Checklist de vérification code source

- [x] `astro.config.mjs` — plugin `@astrojs/sitemap` activé + `site:` défini
- [x] Layout principal — présence de `<script type="application/ld+json">` avec Person + WebSite + FAQPage
- [x] Layout principal — absence de `<meta name="keywords">`
- [x] `/public/llms.txt` — fichier créé
- [x] `/public/robots.txt` — présent et correctement configuré (Allow: /)
- [x] `/public/sitemap-index.xml` — généré et accessible en production
- [x] Pages /legals et /privacy — balise canonique présente
- [x] Footer — mention de date de mise à jour visible
- [ ] Toutes les images `<img>` — attribut `alt` non vide (à vérifier manuellement)
- [ ] SVG inline ou en `<img>` — alt ou aria-label défini (à vérifier manuellement)
- [ ] Formulaire de contact — accessible (labels liés aux inputs) (à vérifier manuellement)
- [ ] Redirections — `www.yiromaric.fr` → `yiromaric.fr` en 301 configurée côté hébergeur

---

## Priorités d'action résumées

| Priorité | Action                                        | Effort  | Impact             | Statut     |
| -------- | --------------------------------------------- | ------- | ------------------ | ---------- |
| 🔴 1     | Demander recrawl dans Google Search Console   | 5 min   | Élevé              | ⏳ Manuel  |
| 🔴 2     | Ajouter Schema.org JSON-LD (Person + WebSite) | 30 min  | Élevé              | ✅ Fait    |
| 🔴 3     | Supprimer meta-keywords                       | 2 min   | Faible             | ✅ Fait    |
| 🟠 4     | Vérifier/activer sitemap.xml                  | 15 min  | Moyen              | ✅ Fait    |
| 🟠 5     | Créer /public/llms.txt                        | 10 min  | Moyen (GEO)        | ✅ Fait    |
| 🟠 6     | Ajouter section FAQ + Schema FAQPage          | 1h      | Moyen              | ✅ Fait    |
| 🟡 7     | Créer pages dédiées par projet                | 2-4h    | Élevé (long terme) | ⏳ À faire |
| 🟡 8     | Lancer un blog technique                      | Continu | Élevé (long terme) | ⏳ À faire |

---

_Audit réalisé par analyse du rendu HTML. Corrections appliquées le 16 mai 2026 sur le code source du projet Astro._
