# Portfolio Agent Context

Last updated: 2026-03-30
Project root: c:/www/portfolio/portfolio

## Objective

Build a recruiter-ready bilingual portfolio (English + Spanish) that demonstrates junior full-stack capability with real-world product thinking and clear technical evidence.

## Developer Profile

- Role target: Junior Full-Stack Developer / Internship
- Current level: Foundational knowledge, building practical depth by shipping real projects
- Communication goal: Honest scope, strong execution, clear growth trajectory

## Primary Stack to Showcase

- Backend: Java + Spring Boot
- Frontend: JavaScript + Angular
- Data: SQL + NoSQL
- Platform and tooling: Linux, Git + GitHub, Docker

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

## Platform Decisions Already Activated

- SSR enabled in Angular build config
  - angular.json -> projects.portfolio.architect.build.options.ssr.entry = src/server.ts
- SSG/Prerendering enabled
  - src/app/app.routes.server.ts uses RenderMode.Prerender for path "\*\*"
- TailwindCSS enabled
  - src/styles.css imports tailwindcss
  - .postcssrc.json includes @tailwindcss/postcss plugin

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

## Portfolio Content Requirements

- Keep project cards concise, but include deep project detail pages with:
  - Problem solved
  - Feature set
  - Technical architecture
  - Challenges and tradeoffs
  - Future improvements
- Use transparent status tags: Planned, In Progress, Live
- Emphasize evidence over buzzwords

## Sections to Include

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

## Engineering Constraints for This Repo

- Angular standalone components (default in current Angular)
- Signal-first state strategy
- OnPush change detection
- Native Angular control flow (@if/@for/@switch)
- Accessibility target: WCAG AA and AXE pass

## Execution Focus (14-Day Launch)

1. Build content and architecture for 3 project case studies
2. Implement polished Angular portfolio UI with bilingual support
3. Publish live portfolio and validate links, accessibility, and performance
