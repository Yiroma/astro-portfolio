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
