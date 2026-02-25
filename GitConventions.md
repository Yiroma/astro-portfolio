# ✅ Convention de nommage des Commits

modèle: `<type>(scope?): <description>`

## 🔹 Types utilisés

| Type       | Description                                                                   |
| ---------- | ----------------------------------------------------------------------------- |
| `feat`     | ✨ Nouvelle fonctionnalité                                                    |
| `fix`      | 🐛 Correction de bug                                                          |
| `docs`     | 📚 Changements dans la documentation                                          |
| `style`    | 💄 Changements cosmétiques (indentation, espaces, etc. — pas de code modifié) |
| `refactor` | 🔧 Refactorisation sans changement de comportement                            |
| `perf`     | 🚀 Amélioration des performances                                              |
| `test`     | 🧪 Ajout/modification de tests                                                |
| `build`    | 🏗️ Changements liés à la build ou aux dépendances                             |
| `ci`       | ⚙️ Changements liés à l'intégration continue                                  |
| `chore`    | 🔩 Autres tâches sans impact fonctionnel direct                               |
| `revert`   | ⏪ Annulation d’un commit précédent                                           |

## 🔹 Le scope (optionnel)

Le scope précise la partie concernée du projet :

`feat(auth): ajout du login`
`fix(header): correction de l'affichage mobile`

## 🔹 Conseils pour la description

En minuscule, sans point à la fin

Utiliser l’impératif présent (ex : "ajoute", "corrige", "modifie")

## 🔹 Exemples de bons commits

`feat(home): ajoute le carrousel de témoignages`
`fix(api): corrige l’erreur 500 lors de la création d’un utilisateur`
`docs(readme): ajoute les instructions d’installation`
`style(button): uniformise les marges des boutons`
`refactor(form): simplifie la logique de validation`

---

# 🌿 Convention de nommage des Branches

modèle: `<type>-<description-courte>`

## 🔹 Types de branches

| Type       | Description                         | Exemple                         |
| ---------- | ----------------------------------- | ------------------------------- |
| `feature`  | ✨ Nouvelle fonctionnalité          | `feature/carrousel-temoignages` |
| `bugfix`   | 🐛 Correction de bug                | `bugfix/erreur-login`           |
| `hotfix`   | 🚨 Correction urgente en production | `hotfix/securite-auth`          |
| `chore`    | 🔩 Tâches de maintenance            | `chore/mise-a-jour-deps`        |
| `docs`     | 📚 Documentation                    | `docs/guide-installation`       |
| `refactor` | 🔧 Refactorisation                  | `refactor/composant-header`     |
| `test`     | 🧪 Ajout/modification de tests      | `test/validation-formulaire`    |
| `style`    | 💄 Changements cosmétiques          | `style/responsive-header`       |

## 🔹 Règles de nommage

- **Tout en minuscules**
- **Utiliser des tirets** pour séparer les mots (kebab-case)
- **Description courte et explicite** (2-4 mots maximum)
- **Pas d'accents** ni de caractères spéciaux
- **Éviter les abréviations** obscures

## 🔹 Workflow recommandé

```bash
# Créer une nouvelle branche feature
git checkout dev
git pull origin dev
git checkout -b feature/nom-de-la-feature

# Après développement, merger dans dev
git checkout dev
git merge feature/nom-de-la-feature
git push origin dev

# Supprimer la branche feature locale
git branch -d feature/nom-de-la-feature
```

## 🔹 Exemples de bonnes branches

- `feature-page-contact`
- `feature-systeme-notation`
- `bugfix-menu-mobile`
- `hotfix-faille-xss`
- `chore-config-eslint`
- `docs-readme-installation`
- `refactor-hooks-personnalises`
