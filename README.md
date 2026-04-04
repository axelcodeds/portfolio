# 🚀 Axel Diego - Full-Stack Portfolio

A modern, recruiter-ready portfolio showcasing junior full-stack capabilities with real-world project case studies, bilingual support, and clean technical architecture.

**Live:** [https://axeldiego.dev](https://axeldiego.dev)
**GitHub:** [github.com/axeldiego](https://github.com/axeldiego)
**LinkedIn:** [linkedin.com/in/axeldiego](https://linkedin.com/in/axeldiego)

---

## 📋 About

This is a professional portfolio demonstrating:

- **3 Flagship Projects** with detailed case studies (FitFlow, BeautyHub, LexiLearn)
- **Full-Stack Architecture** - Angular frontend + Spring Boot backend examples
- **Bilingual Content** - English & Spanish support throughout
- **Real Product Thinking** - Problem statements, technical challenges, future improvements
- **Modern Tech Stack** - Latest Angular, TypeScript, TailwindCSS, responsive design

---

## 🛠️ Tech Stack

| Layer               | Technology                                         |
| ------------------- | -------------------------------------------------- |
| **Frontend**        | Angular 21, TypeScript, TailwindCSS, RxJS, Signals |
| **Styling**         | TailwindCSS 4.1, PostCSS                           |
| **Icons**           | FontAwesome (solid + brands)                       |
| **State**           | Angular Signals, Computed values                   |
| **Rendering**       | SSR enabled, Prerendering for static content       |
| **Package Manager** | npm 11.6.2                                         |
| **Node Version**    | 20.x LTS (or 22.x)                                 |

---

## 📂 Project Structure

```
src/app/
├── components/          # Reusable UI components
│   ├── header/
│   ├── hero/
│   ├── projects-grid/
│   ├── project-card/
│   ├── project-detail/
│   ├── skills-section/
│   ├── scroll-indicator/
│   ├── footer/
│   └── language-toggle/
├── pages/              # Page-level components
│   ├── home/
│   ├── about/
│   ├── contact/
│   ├── projects-gallery/
│   └── skills-gallery/
├── services/           # Business logic
│   ├── language.service.ts
│   └── translations.ts
├── models/             # Data models
│   ├── project.ts
│   └── projects.constant.ts
├── app.ts             # Root component
├── app.routes.ts      # Routing configuration
└── app.config.ts      # App configuration
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 20.x or 22.x
- npm 11.x or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/axeldiego/portfolio.git
cd portfolio

# Install dependencies
npm install
```

### Development Server

```bash
npm start
# or
ng serve
```

Navigate to `http://localhost:4200/` — the app auto-reloads on file changes.

### Build for Production

```bash
npm run build
# or
ng build
```

Build artifacts stored in `dist/` directory. Includes SSR-optimized output.

---

## 📄 Pages & Routes

| Route          | Description                                                |
| -------------- | ---------------------------------------------------------- |
| `/`            | Home - Hero, Projects Grid, Skills Carousel                |
| `/projects`    | Projects Gallery - Full grid of 3 flagship projects        |
| `/project/:id` | Project Detail - Deep dive (FitFlow, BeautyHub, LexiLearn) |
| `/skills`      | Skills Gallery - Tech stack in grid format                 |
| `/about`       | About Me - Story, values, what drives me                   |
| `/contact`     | Contact - Email, GitHub, LinkedIn                          |

---

## 🎨 Features

✅ **Responsive Design** - Mobile, tablet, desktop optimized
✅ **Bilingual (EN/ES)** - Language toggle with full translations
✅ **Dark Developer Theme** - Slate/emerald color scheme, terminal aesthetic
✅ **Animated Elements** - Skills carousel, scroll indicator, hover effects
✅ **SSR/Prerendering** - Server-side rendering enabled for performance
✅ **Accessible** - WCAG AA compliant, semantic HTML, ARIA support
✅ **Signal-Based State** - Modern Angular signals for reactive state
✅ **Standalone Components** - No NgModules, all standalone
✅ **OnPush Change Detection** - Optimized performance

---

## 🧪 Testing

### Unit Tests (Vitest)

```bash
npm test
# or
ng test
```

### E2E Tests

```bash
ng e2e
```

---

## 📚 Project Highlights

### **1. FitFlow Membership Platform**

Gym operations platform with card payments, automatic subscriptions, and coach scheduling.

- **Architecture:** Angular + Spring Boot + PostgreSQL + Stripe
- **Key Features:** Subscription renewals, PCI compliance, booking system
- [View Project](/project/fitflow)

### **2. BeautyHub Appointment Manager**

Beauty services booking with staff coordination and customer history.

- **Architecture:** Angular (PWA) + Spring Boot + PostgreSQL + MongoDB
- **Key Features:** Real-time availability, overbooking prevention, SMS reminders
- [View Project](/project/beautyhub)

### **3. LexiLearn Study Companion**

AI-powered learning tool with vocabulary extraction and spaced repetition.

- **Architecture:** Angular + Spring Boot + PostgreSQL + MongoDB + Google TTS
- **Key Features:** NLP processing, SM-2 algorithm, flashcard system
- [View Project](/project/lexilearn)

---

## 🎯 Development Guidelines

### Code Style

- **TypeScript**: Strict type checking, no `any` type
- **Angular**: Signal-first state, OnPush change detection
- **Components**: Small, focused, single responsibility
- **Routing**: Lazy loading where applicable

See `.claude/CLAUDE.md` for detailed conventions.

---

## 📦 Dependencies

**Key Runtime:**

- `@angular/core` 21.2.0
- `@angular/router` 21.2.0
- `@fortawesome/angular-fontawesome` 4.x
- `rxjs` 7.8.0
- `tailwindcss` 4.1.12

**Key Dev:**

- `@angular/cli` 21.2.0
- `typescript` 5.9.2
- `vitest` 4.0.8
- `prettier` 3.8.1

See `package.json` for complete list.

---

## 🔧 Configuration

### Tailwind CSS

Configured in `tailwind.config.ts` with custom theme (slate background, emerald accents).

### PostCSS

Processes Tailwind directives via `.postcssrc.json`.

### Angular SSR

Enabled in `angular.json` with `src/server.ts` entry point.

---

## 🌍 Deployment

Built with SSR support for optimal SEO and performance. Works on:

- **Vercel** (recommended)
- **Netlify**
- **Heroku**
- **AWS, Azure, GCP** (Node.js hosting)

---

## 🤝 Connect

**Let's work together!**

- 📧 Email: [contact@axeldiego.dev](mailto:contact@axeldiego.dev)
- 💼 LinkedIn: [linkedin.com/in/axeldiego](https://linkedin.com/in/axeldiego)
- 🐙 GitHub: [github.com/axeldiego](https://github.com/axeldiego)

I'm actively seeking Junior Full-Stack Developer and Internship opportunities.

---

## 📄 License

© 2026 Axel Diego. All rights reserved.

---

**Built with Angular 21, TypeScript, and TailwindCSS** ✨
