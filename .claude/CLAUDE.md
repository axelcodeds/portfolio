# Portfolio Project Guidelines

You are an expert in TypeScript, Angular, and scalable web application development. You write functional, maintainable, performant, and accessible code following Angular and TypeScript best practices.

**Last updated:** 2026-03-30
**Project root:** c:/www/portfolio/portfolio

---

## Project Context

### Objective

Build a recruiter-ready bilingual portfolio (English + Spanish) that demonstrates junior full-stack capability with real-world product thinking and clear technical evidence.

### Developer Profile

- Role target: Junior Full-Stack Developer / Internship
- Current level: Foundational knowledge, building practical depth by shipping real projects
- Communication goal: Honest scope, strong execution, clear growth trajectory

### Primary Stack to Showcase

- Backend: Java + Spring Boot
- Frontend: JavaScript + Angular
- Data: SQL + NoSQL
- Platform and tooling: Linux, Git + GitHub, Docker

---

## Portfolio Projects (Professional Titles)

### 1) FitFlow Membership Platform

- Domain: Gym operations and member lifecycle
- Core features (planned):
  - Card payments
  - Automatic subscriptions
  - Renewal workflows
  - Coach schedule booking
- Suggested architecture: Angular frontend + Spring Boot API + SQL for billing/members + NoSQL for activity/log events
- Status: Planned

### 2) BeautyHub Appointment Manager

- Domain: Beauty services (nails, pedicure, manicure, esthetics)
- Core features (planned):
  - Service catalog
  - Appointment booking
  - Staff schedule coordination
  - Customer history
- Suggested architecture: Angular frontend + Spring Boot API + SQL transactional data + NoSQL for notes/preferences
- Status: Planned

### 3) LexiLearn Study Companion

- Domain: Learning assistant web app
- Core features (planned):
  - Upload learning content (PDF/EPUB/TXT)
  - Text analysis
  - Text-to-speech generation
  - Unknown vocabulary tracking and review
- Suggested architecture: Angular frontend + Spring Boot API + SQL for user/account/progress + NoSQL for extracted terms/learning artifacts
- Status: Planned

---

## Platform Decisions Already Activated

- SSR enabled in Angular build config
  - angular.json -> projects.portfolio.architect.build.options.ssr.entry = src/server.ts
- SSG/Prerendering enabled
  - src/app/app.routes.server.ts uses RenderMode.Prerender for path "\*\*"
- TailwindCSS enabled
  - src/styles.css imports tailwindcss
  - .postcssrc.json includes @tailwindcss/postcss plugin

---

## Current Package Versions (Checked)

Source: package.json

### Runtime dependencies

- @angular/common: ^21.2.0
- @angular/compiler: ^21.2.0
- @angular/core: ^21.2.0
- @angular/forms: ^21.2.0
- @angular/platform-browser: ^21.2.0
- @angular/platform-server: ^21.2.0
- @angular/router: ^21.2.0
- @angular/ssr: ^21.2.0
- express: ^5.1.0
- rxjs: ~7.8.0
- tslib: ^2.3.0

### Development dependencies

- @angular/build: ^21.2.0
- @angular/cli: ^21.2.0
- @angular/compiler-cli: ^21.2.0
- @tailwindcss/postcss: ^4.1.12
- @types/express: ^5.0.1
- @types/node: ^20.17.19
- jsdom: ^28.0.0
- postcss: ^8.5.3
- prettier: ^3.8.1
- tailwindcss: ^4.1.12
- typescript: ~5.9.2
- vitest: ^4.0.8

### Tooling

- packageManager: npm@11.6.2

---

## Portfolio Content Requirements

- Keep project cards concise, but include deep project detail pages with:
  - Problem solved
  - Feature set
  - Technical architecture
  - Challenges and tradeoffs
  - Future improvements
- Use transparent status tags: Planned, In Progress, Live
- Emphasize evidence over buzzwords

### Sections to Include

- Hero (name, role, value statement)
- Projects (3 flagship projects)
- Skills (grouped by Frontend, Backend, Data, DevOps/Tools)
- About
- Education and Certifications
- Currently Learning
- Blog
- Testimonials
- Contact
- Resume Download
- GitHub Activity

---

## Engineering Constraints for This Repo

- Angular standalone components (default in current Angular)
- Signal-first state strategy
- OnPush change detection
- Native Angular control flow (@if/@for/@switch)
- Accessibility target: WCAG AA and AXE pass

---

## Project Folder Structure

When creating or modifying code, always follow this folder structure:

```
src/
│
├── app/
│   ├── core/                # Singleton services, global logic
│   │   ├── services/
│   │   ├── guards/
│   │   ├── interceptors/
│   │   └── core.module.ts
│   │
│   ├── shared/              # Reusable components, pipes, directives
│   │   ├── components/
│   │   ├── pipes/
│   │   ├── directives/
│   │   └── shared.module.ts
│   │
│   ├── features/            # Main app features (lazy-loaded)
│   │   ├── auth/
│   │   │   ├── pages/
│   │   │   ├── components/
│   │   │   ├── services/
│   │   │   └── auth.module.ts
│   │   │
│   │   ├── dashboard/
│   │   │   ├── pages/
│   │   │   ├── components/
│   │   │   └── dashboard.module.ts
│   │   │
│   │   └── projects/        # Example feature for portfolio
│   │       ├── pages/
│   │       ├── components/
│   │       ├── models/
│   │       ├── services/
│   │       └── projects.module.ts
│   │
│   ├── layout/              # App layout (navbar, sidebar, footer)
│   │   ├── components/
│   │   └── layout.module.ts
│   │
│   ├── app-routing.module.ts
│   └── app.module.ts
│
├── assets/
│   ├── images/
│   ├── icons/
│   └── styles/
│
├── environments/
│
└── index.html
```

### Folder Structure Rules

- **core/**: Place singleton services, guards, and interceptors here (auth, HTTP, config)
- **shared/**: Place reusable UI components, pipes, and directives used across multiple features
- **features/**: Organize feature modules with their own pages, components, models, and services
- **layout/**: Place shell components like navbar, sidebar, footer
- **assets/**: Static resources organized by type (images, icons, styles)

### Current Structure Status

**Current structure (as of 2026-03-31):**
```
src/app/
├── components/
│   ├── header/
│   ├── hero/
│   └── language-toggle/
├── services/
│   ├── language.service.ts
│   └── translations.ts
└── (other app files)
```

This is **acceptable for MVP landing page** but needs refactoring before building feature-rich projects.

### When to Refactor

**When the user requests:** "Refactor the folder structure" or "Reorganize the project structure"

**Perform these refactoring steps:**

1. Move `services/language.service.ts` and `services/translations.ts` → `core/services/`
2. Move `components/header/`, `components/hero/` → `shared/components/` (reusable across features)
3. Move `components/language-toggle/` → `shared/components/` (reusable across features)
4. Create `features/` folder for feature-specific modules (when building projects)
5. Create `layout/` folder for shell components (navbar, sidebar, footer)
6. Create `assets/` folder with subdirectories: images/, icons/, styles/
7. Create `environments/` folder for environment-specific configs

**After refactoring, update imports across all files to match new paths.**

---

## Visual Theme: Dark Developer

Style: Dark background with emerald accent color
Vibe: Modern dev / minimal hacker aesthetic

### Theme Specification

- Background: slate-950 (#020617)
- Surface: slate-900 (#0f172a)
- Border: slate-800 (#1e293b)
- Primary text: slate-100 (#f1f5f9)
- Secondary text: slate-400 (#94a3b8)
- Accent: emerald-400 (#34d399) to emerald-600 (#059669)

### Theme Features

- Terminal-style UI elements (greeting badge, code-like logos)
- Subtle glow on hover for interactive cards (.card-glow class)
- Monospace font for code/terminal elements (JetBrains Mono, Fira Code)
- Sans-serif for body text (Inter)

### Theme Guidelines

- Keep it minimal — avoid excessive neon or glow effects
- Use accent color sparingly for CTAs and interactive elements
- Maintain high contrast for accessibility (WCAG AA)
- Dark surfaces with subtle borders, not heavy shadows

---

## Execution Focus (14-Day Launch)

1. Build content and architecture for 3 project case studies
2. Implement polished Angular portfolio UI with bilingual support
3. Publish live portfolio and validate links, accessibility, and performance

---

## Agent Development Guidelines

- **Do NOT automatically start the Angular app.** Let the user start it manually each time.
- If Angular needs to run for testing or development, ask the user first before starting it.
- Only run Angular commands when explicitly requested or when necessary for a specific task the user has approved.

---

## TypeScript Best Practices

- Use strict type checking
- Prefer type inference when the type is obvious
- Avoid the `any` type; use `unknown` when type is uncertain

---

## Angular Best Practices

- Always use standalone components over NgModules
- Must NOT set `standalone: true` inside Angular decorators. It's the default in Angular v20+.
- Use signals for state management
- Implement lazy loading for feature routes
- Do NOT use the `@HostBinding` and `@HostListener` decorators. Put host bindings inside the `host` object of the `@Component` or `@Directive` decorator instead
- Use `NgOptimizedImage` for all static images.
  - `NgOptimizedImage` does not work for inline base64 images.

---

## Accessibility Requirements

- It MUST pass all AXE checks.
- It MUST follow all WCAG AA minimums, including focus management, color contrast, and ARIA attributes.

### Components

- Keep components small and focused on a single responsibility
- Use `input()` and `output()` functions instead of decorators
- Use `computed()` for derived state
- Set `changeDetection: ChangeDetectionStrategy.OnPush` in `@Component` decorator
- Prefer inline templates for small components
- Prefer Reactive forms instead of Template-driven ones
- Do NOT use `ngClass`, use `class` bindings instead
- Do NOT use `ngStyle`, use `style` bindings instead
- When using external templates/styles, use paths relative to the component TS file.

---

## State Management

- Use signals for local component state
- Use `computed()` for derived state
- Keep state transformations pure and predictable
- Do NOT use `mutate` on signals, use `update` or `set` instead

---

## Templates

- Keep templates simple and avoid complex logic
- Use native control flow (`@if`, `@for`, `@switch`) instead of `*ngIf`, `*ngFor`, `*ngSwitch`
- Use the async pipe to handle observables
- Do not assume globals like (`new Date()`) are available.

---

## Services

- Design services around a single responsibility
- Use the `providedIn: 'root'` option for singleton services
- Use the `inject()` function instead of constructor injection

---

## Current Project Status (As of 2026-04-01)

### ✅ **COMPLETED**

**Core Landing Page**
- Hero section (terminal greeting, name, tagline, bio, CTAs, social links)
- Projects grid (3 project cards with bilingual content)
- Skills carousel (animated on desktop, static 2-column grid on mobile)
- Scroll indicator (fixed, vanishes at bottom)
- Header with bilingual nav and language toggle
- Footer with social links and navigation

**Project Pages**
- Project detail pages for all 3 projects (FitFlow, BeautyHub, LexiLearn)
- Complete bilingual content (EN/ES) for each project:
  - Problem statement
  - Core features (7-8 per project)
  - Technical architecture (ASCII diagrams)
  - Tech stack breakdown (Frontend/Backend/Data)
  - Technical challenges with solutions (2 per project)
  - Future improvements (5+ per project)
- Routing: `/project/:id` with dynamic content resolution

**Additional Pages**
- About page (`/about`) - Story, values, what drives you
- Contact page (`/contact`) - Email, GitHub, LinkedIn contact methods
- Footer component with navigation and social links

**Infrastructure**
- Bilingual translations system (EN/ES)
- Responsive design (mobile, tablet, desktop)
- TailwindCSS theme (dark developer aesthetic)
- Signal-based state management
- Standalone components throughout
- OnPush change detection
- SSR enabled
- FontAwesome icons for skills, footer, and social links

### 🚀 **Routing Structure**

```
/                 → Home (Hero + Projects + Skills)
/project/fitflow  → FitFlow details
/project/beautyhub → BeautyHub details
/project/lexilearn → LexiLearn details
/about            → About page
/contact          → Contact page
```

### 📁 **Current Folder Structure**

```
src/app/
├── components/
│   ├── header/
│   ├── hero/
│   ├── language-toggle/
│   ├── project-card/
│   ├── project-detail/
│   ├── projects-grid/
│   ├── scroll-indicator/
│   ├── skills-section/
│   ├── footer/
│   └── index.ts
├── pages/
│   ├── home/
│   ├── about/
│   ├── contact/
│   └── index.ts
├── services/
│   ├── language.service.ts
│   ├── translations.ts
│   └── index.ts
├── models/
│   ├── project.ts
│   ├── projects.constant.ts
│   └── index.ts
├── app.ts (root component with Header, Footer, Router)
├── app.routes.ts (routing with home, project/:id, about, contact)
└── app.config.ts
```

### 📋 **Phase 2: Validation & Polish**

- [ ] Accessibility audit (AXE checks, WCAG AA compliance)
- [ ] Mobile responsiveness validation
- [ ] Performance optimization (Lighthouse)
- [ ] Bilingual URL routing (optional: `/en/project/fitflow` vs `/es/proyecto/fitflow`)
- [ ] Blog section (optional)
- [ ] Testimonials section (optional)
- [ ] GitHub activity feed (optional)
- [ ] Resume/CV download link

### 🎯 **Development Notes**

- **Mobile Skills:** Desktop shows animated carousel, mobile shows static 2-column grid (no animation)
- **Project Routing:** Links work via `/project/fitflow`, `/project/beautyhub`, `/project/lexilearn`
- **Bilingual:** All content has EN/ES translations in `services/translations.ts`
- **Component Design:** All standalone components with OnPush change detection
- **State:** Uses Angular signals for simple state management
