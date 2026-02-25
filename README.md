# Foodieland — Modern Recipe Platform

Foodieland is a high-performance, professional food and recipe web application designed with a focus on exceptional user
experience and clean, maintainable architecture. It bridges the gap between sophisticated UI/UX design and solid
frontend engineering, providing a seamless platform for food enthusiasts to discover and explore culinary inspirations.

## 🛠 Tech Stack

The project is built using a modern, lightweight, and efficient tech stack chosen for performance and developer
productivity:

- **Minista**: A JSX-based static site generator (SSG) that provides the power of JSX (without the overhead of React on
  the client) for structured, modular development.
- **Vite**: The underlying build tool ensuring lightning-fast development iterations and optimized production bundles.
- **SCSS (Sass)**: Utilized for advanced styling, leveraging mixins, variables, and nesting to manage complex UI logic
  efficiently.
- **JavaScript (ES6+)**: Used for interactive modules and core application logic.
- **Swiper.js**: For high-performance, mobile-first touch sliders.
- **PostCSS**: Integrated with `preset-env` and `pxtorem` for automated browser compatibility and modern unit
  conversion.

## 🏗 Architecture & Code Philosophy

This project is not just about visual appeal; it is built on a foundation of disciplined software engineering
principles.

### DRY (Don't Repeat Yourself)

Repetitive patterns were abstracted into reusable solutions:

- **Component-Driven Development**: UI elements like `Button`, `Icon`, and `Section` are encapsulated components used
  throughout the application.
- **SliderCollection Module**: Instead of initializing Swiper instances multiple times, a centralized `SliderCollection`
  class scans the DOM for `data-js-slider` attributes and initializes them based on JSON configurations, ensuring a
  single source of truth for slider logic.
- **SCSS Mixins**: Common layouts and typography patterns are centralized in `src/styles/helpers`, reducing style
  duplication.

### KISS (Keep It Simple, Stupid)

- **Declarative Markup**: Using JSX allows for a clear, readable representation of the UI structure.
- **Functional Components**: Logic is kept local to components where possible, avoiding unnecessary global state and
  keeping the data flow predictable.

### YAGNI (You Aren't Gonna Need It)

- **JSX without React**: React's runtime was excluded to keep the bundle size minimal, as the interactivity requirements
  didn't justify a full SPA framework.
- **Selective Abstraction**: Abstractions were only introduced when a pattern repeated at least three times, preventing
  over-engineering and keeping the codebase lean.

## ♿ Semantic & Accessible Markup (a11y)

Accessibility was a core requirement, not an afterthought:

- **Semantic HTML**: Correct use of `<header>`, `<main>`, `<footer>`, `<section>`, and `<article>` tags ensures that the
  document structure is meaningful to assistive technologies.
- **ARIA Integration**: Every section is properly labeled using `aria-labelledby`, and interactive elements use
  appropriate ARIA attributes to communicate state and purpose.
- **Screen Reader Support**: Visually hidden but descriptive text is provided where icons alone don't convey enough
  context.
- **Keyboard Navigation**: Focus management and logical tab order are maintained across all interactive components.

## 🎨 BEM Methodology

Styles are organized using the **BEM (Block, Element, Modifier)** methodology. This choice was driven by:

- **Scalability**: Preventing style leakage and naming collisions as the project grows.
- **Predictability**: Clearly defining the relationship between HTML structure and CSS classes.
- **Maintainability**: Making it easy for any developer to locate and modify styles for specific components without side
  effects.

## 📂 Folder Structure

The project follows a modular, feature-based directory structure for maximum clarity:

```csharp
src/
├── assets/      # Optimized images, fonts, and SVG icons
├── components/  # Atomic UI elements (Button, Icon, Grid)
├── layouts/     # High-level structural components (Header, Footer, Section)
├── modules/     # JavaScript classes and logic (SliderCollection)
├── sections/    # Full-width page sections (Hero, Categories, Recipes)
├── styles/      # Global styles, variables, and SCSS helpers
└── pages/       # Entry points for different routes
```

## ✨ Features

- **Responsive Design**: Fluid layouts that adapt perfectly from mobile to ultra-wide displays.
- **Modular Component Architecture**: Highly reusable and independent UI blocks.
- **Performance Optimized**: Static generation for near-instant page loads.
- **Dynamic Sliders**: Interactive hero and recipe sliders with hardware-accelerated transitions.
- **Clean Navigation**: Intuitive UX for seamless content discovery.

## 🚀 Installation & Usage

### 1. Clone the repository

```bash
git clone https://github.com/sabyrkazen/foodieland.git
cd foodieland
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run locally

```bash
npm run start
```

### 4. Build for production

```bash
npm run build
```

## 🏁 Conclusion

Foodieland represents my commitment to building high-quality frontend products that balance technical excellence with
user-centric design. By applying rigorous architectural standards and modern engineering practices, I’ve created a
platform that is not only maintainable and scalable but also provides a world-class experience for the end-user. This
project is a milestone in my professional growth as a frontend engineer.

Developed with ❤️ by Sabyrka
