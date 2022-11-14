# cypress-cucumber-boilerplate

## Overview
Ce repo donne une structure de base pour créer ses premiers tests Cypress en utilisant le format Cucumber dans un environnement GitHub Actions.

Les packages de base pour créer, exécuter, et générer des rapports de tests sont prédéfinis dans le `package.json`. Installez l'environnement avec la commande:

```shell
npm install
```

Vous pouvez dès à présent lancer les tests avec:
```
$(npm bin)/cypress run
```

Les tests sont définis dans le répertoire `cypress/e2e`, les actions words Gherkin sont définis dans `cypress/support/step_definitions`.

Pour les utilisateurs de VSCode, il est fortement recommandé d'installer l'extension [Cucumber (Gherkin) Full Support](https://marketplace.visualstudio.com/items?itemName=alexkrechik.cucumberautocomplete) (la configuration de celui-ci est fournie pour ce projet).
