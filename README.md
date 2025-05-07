# MotionKit

Une collection de micro-animations réutilisables pour améliorer l'UX des applications web.

## 🚀 Installation

```bash
npm install motion-kit
# ou
yarn add motion-kit
```

## 📦 Fonctionnalités

- Collection d'animations modulaires et configurables
- Démos interactives pour chaque animation
- Documentation d'utilisation
- Bundle optimisé pour la performance
- Intégration avec frameworks populaires

## 🎯 Utilisation

### Animations de transition

```typescript
import { Transition } from 'motion-kit';

const element = document.querySelector('.my-element');
const transition = new Transition(element);

// Fade in
transition.fadeIn();

// Slide in from left
transition.slideIn('left');

// Slide out to right
transition.slideOut('right');
```

### Options de configuration

```typescript
const transition = new Transition(element, {
  duration: 500, // durée en millisecondes
  easing: 'ease-in-out', // fonction d'accélération
  delay: 100, // délai avant l'animation
});
```

## 🎨 Types d'animations

- Transitions entre pages
- Notifications et feedback
- Animations de chargement
- États (success, error, etc.)
- Effets de survol et d'interaction

## 🛠️ Développement

```bash
# Installation des dépendances
npm install

# Développement
npm run dev

# Build
npm run build

# Tests
npm test

# Storybook
npm run storybook
```

## 📚 Documentation

La documentation complète est disponible dans le dossier `docs/` et via Storybook.

## 🤝 Contribution

Les contributions sont les bienvenues !
- Consultez le [guide de contribution](./CONTRIBUTING.md)
- Respectez le [code de conduite](./CODE_OF_CONDUCT.md)

## 📝 Licence

Ce projet est sous licence [MIT](./LICENSE). 