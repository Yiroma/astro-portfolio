# Guide de Développement - Portfolio 2025

## Configuration de l'environnement

Ce projet utilise **Astro** avec **TailwindCSS** et **TypeScript**. La configuration inclut des outils de qualité de code automatisés.

## Outils configurés

### 🔍 ESLint

- **Configuration** : `eslint.config.js`
- **Langages supportés** : JavaScript, TypeScript
- **Commandes** :
  ```bash
  npm run lint          # Vérifier le code
  npm run lint:fix      # Corriger automatiquement
  ```

### 🎨 Prettier

- **Configuration** : Configuré avec le plugin TailwindCSS
- **Commandes** :
  ```bash
  npm run format        # Formater le code
  npm run format:check  # Vérifier le formatage
  ```

### 🐕 Husky + Lint-staged

- **Hook pré-commit** : Exécute automatiquement ESLint et Prettier sur les fichiers modifiés
- **Hook commit-msg** : Vérifie que le message de commit respecte les conventions
- **Configuration** : `.husky/pre-commit`, `.husky/commit-msg` et `package.json` (section `lint-staged`)

### 📝 Commitlint

- **Configuration** : `commitlint.config.js`
- **Vérifie** : Format des messages de commit selon `ConventionnalCommit.md`
- **Types autorisés** : `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`
- **Format** : `<type>(scope?): <description>`

## Workflow de développement

1. **Développement** : `npm run dev`
2. **Avant commit** : Les hooks Husky s'exécutent automatiquement
   - **pre-commit** : ESLint + Prettier sur les fichiers modifiés
   - **commit-msg** : Validation du format du message de commit
3. **Build** : `npm run build`

## Exemples de messages de commit valides

```bash
# ✅ Exemples corrects (selon ConventionnalCommit.md)
feat(auth): ajoute le système de login
fix(header): corrige l'affichage sur mobile
docs(readme): ajoute les instructions d'installation
style(button): uniformise les marges
refactor(api): simplifie la logique de validation
perf(image): optimise le chargement des images
test(auth): ajoute les tests unitaires
build(deps): met à jour les dépendances
ci(github): ajoute les actions de déploiement
chore(config): configure eslint

# ❌ Exemples incorrects
Feature: new login system          # Type inconnu
feat: Add login                    # Description en anglais/majuscule
feat(auth): ajoute le login.       # Point à la fin
fix                                # Description manquante
```

## Commandes utiles

```bash
# Développement
npm run dev

# Qualité de code
npm run lint
npm run lint:fix
npm run format
npm run format:check

# Validation des commits
npm run commitlint
./test-commit.sh "feat(auth): ajoute le login"

# Build
npm run build
npm run preview
```

## Notes importantes

- Les fichiers `.astro` sont temporairement ignorés par ESLint (configuration simplifiée)
- Pour ajouter React : Les dépendances sont déjà installées, il suffit de créer des composants `.tsx`
- La configuration peut être étendue selon les besoins du projet

## Structure des fichiers de configuration

```
├── eslint.config.js      # Configuration ESLint
├── commitlint.config.js  # Configuration Commitlint
├── .prettierignore       # Fichiers ignorés par Prettier
├── .husky/
│   ├── pre-commit       # Hook de pré-commit (ESLint + Prettier)
│   └── commit-msg       # Hook de validation des messages de commit
├── test-commit.sh        # Script de test pour les messages de commit
├── ConventionnalCommit.md # Documentation des conventions de commit
└── package.json         # Scripts et configuration lint-staged
```
