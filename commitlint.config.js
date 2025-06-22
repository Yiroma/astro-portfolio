export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    // Types autorisés selon ConventionnalCommit.md
    "type-enum": [
      2,
      "always",
      [
        "feat", // ✨ Nouvelle fonctionnalité
        "fix", // 🐛 Correction de bug
        "docs", // 📚 Changements dans la documentation
        "style", // 💄 Changements cosmétiques
        "refactor", // 🔧 Refactorisation sans changement de comportement
        "perf", // 🚀 Amélioration des performances
        "test", // 🧪 Ajout/modification de tests
        "build", // 🏗️ Changements liés à la build ou aux dépendances
        "ci", // ⚙️ Changements liés à l'intégration continue
        "chore", // 🔩 Autres tâches sans impact fonctionnel direct
        "revert", // ⏪ Annulation d'un commit précédent
      ],
    ],
    // Le type est obligatoire
    "type-empty": [2, "never"],
    // Le scope est optionnel mais s'il existe, il doit être en minuscules
    "scope-case": [2, "always", "lower-case"],
    // La description est obligatoire
    "subject-empty": [2, "never"],
    // La description doit commencer par une minuscule
    "subject-case": [2, "always", "lower-case"],
    // Pas de point à la fin de la description
    "subject-full-stop": [2, "never", "."],
    // Longueur maximum de l'en-tête (type + scope + description)
    "header-max-length": [2, "always", 100],
    // Longueur minimum de la description
    "subject-min-length": [2, "always", 3],
  },
};
