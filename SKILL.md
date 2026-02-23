---
name: personal-portfolio
description: Instructions for working on Cameron's personal portfolio website built with React 19 and Vite
---

# Personal Portfolio Website

This skill provides context and instructions for working on Cameron Vandermeersch's personal portfolio site.

## When to use

Use this skill when making changes to the portfolio website — adding sections, modifying components, updating content, or fixing bugs.

## Tech Stack

- **Framework**: React 19 with Vite 6
- **UI**: React-Bootstrap 2, Animate.css, react-on-screen
- **Routing**: react-router-dom 6 + react-router-hash-link (single page with hash navigation)
- **Forms**: EmailJS (`@emailjs/browser`) for contact form
- **SEO**: react-helmet-async
- **Styling**: Vanilla CSS (single `App.css` file, ~1400 lines)
- **Fonts**: Custom "Centra" font (CentraNo2-Bold, Medium, Book)
- **Deploy**: Vercel (CI via GitHub Actions)
- **Analytics**: Google Tag Manager (GTM-54JD5G65)
- **Env vars**: `VITE_*` prefix (accessed via `import.meta.env.VITE_*`)

## Installed AI Agent Skills

This repository leverages `skills.sh` extensions located in `.agents/skills/`. Any AI agent working in this repo has automatic access to these strict guidelines and rulesets.
When contributing to this project, adhere strictly to these principles:

- **Core React & Vite**: `vercel-react-best-practices`, `vercel-composition-patterns`
- **UI & Design**: `web-design-guidelines`
- **Performance & Quality**: `web-quality-audit`, `audit-website`, `core-web-vitals`, `accessibility`, `performance`, `seo`
- **Agent Discovery**: `find-skills`

## Project Structure

```text
src/
├── App.jsx             # Main app with HelmetProvider + all sections
├── index.jsx           # React 19 createRoot entry point
├── components/
│   ├── NavBar.jsx      # Fixed navbar with scroll detection, social links, CV download
│   ├── Banner.jsx      # Hero section with typing animation effect
│   ├── Skills.jsx      # Multi-carousel skill icons (45 tech logos)
│   ├── Projects.jsx    # Tabbed project showcase (3 tabs)
│   ├── ProjectCard.jsx # Individual project card component
│   ├── Contact.jsx     # Contact form with EmailJS integration
│   └── Footer.jsx      # Footer with social links + copyright
├── assets/
│   ├── fonts/          # CentraNo2 font files (.ttf)
│   ├── images/         # Banner, contact, and social icon assets
│   │   └── skills/     # 45 technology logo PNGs
│   └── Cameron_Vandermeersch_Resume.pdf
└── styles/
    ├── App.css          # All component styles (monolithic)
    └── index.css        # Base resets and root sizing
```

## Instructions

1. **Environment setup**: Copy `.env.example` to `.env` and fill in EmailJS credentials
2. **Development**: `npm run dev` runs on <http://localhost:3000> with HMR
3. **Styling**: All CSS is in `src/styles/App.css` — search for section comment headers (e.g., `/*** Banner Css ***/`)
4. **Components**: Each section is a standalone component in `src/components/`
5. **Images**: Skill icons go in `src/assets/images/skills/`, project images in `src/assets/images/`
6. **Build**: `npm run build` outputs to `dist/`, `npm run preview` to preview locally
7. **SEO**: Meta tags managed via `react-helmet-async` in `App.jsx`; sitemap at `public/sitemap.xml`

## Known Limitations

- Monolithic `App.css` should eventually be split into component-level CSS modules
- `react-on-screen` is unmaintained — consider IntersectionObserver API
