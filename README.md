# Cameron Vandermeersch — Personal Portfolio

A modern, physics-inspired and futuristic digital portfolio engineered with zero compromises.

[**View the live website →**](https://cam-vandy.vercel.app/)

Welcome to the source code for my personal portfolio. Built to be blazing fast, visually stunning, fully accessible, and deeply integrated with modern AI agent workflows.

## 🚀 Tech Stack

- **Frontend Framework:** React 19
- **Build Engine & Tooling:** Vite 6
- **Routing:** React Router v6
- **Styling:** Custom CSS + React-Bootstrap + Animate.css
- **SEO Optimization:** react-helmet-async
- **Form Handling:** EmailJS
- **Hosting & CI/CD:** Vercel + GitHub Actions

## ⚡ Quick Start

1. **Clone & Install**

   ```bash
   npm install
   ```

2. **Environment Variables**
   Duplicate `.env.example` to `.env` and fill in your EmailJS credentials for the contact form:

   ```env
   VITE_EMAILJS_PUBLIC_KEY="your_public_key"
   VITE_EMAILJS_SERVICE_ID="your_service_id"
   VITE_EMAILJS_TEMPLATE_ID="your_template_id"
   ```

3. **Start Development Server**

   ```bash
   npm run dev
   ```

   _The Vite dev server will start instantly at [http://localhost:3000](http://localhost:3000) with Hot Module Replacement (HMR) enabled._

4. **Build for Production**

   ```bash
   npm run build
   npm run preview
   ```

   _Code is minified and statically analyzed into the `dist/` directory._

## 🤖 AI Agent Integration

This repository is optimized for AI assistance using the [Skills.sh](https://skills.sh/) ecosystem.
There are multiple specialized skills installed in the `.agents/skills` directory to ensure any AI agent working on this repo automatically adheres to strict design, performance, and accessibility standards:

- **Core React & Vite:** `vercel-react-best-practices`, `vercel-composition-patterns`
- **UI & Design:** `web-design-guidelines`
- **Quality & Auditing:** `web-quality-audit`, `audit-website`, `core-web-vitals`, `accessibility`, `seo`, `performance`
- **Agent Tooling:** `find-skills`

## 🛠 Project Structure

- `src/components/` — Individual functional components (Contact, Banner, Skills, Projects, NavBar, Footer).
- `src/styles/` — Global styling and modular CSS overrides.
- `public/` — Static assets (Favicons, manifest, sitemaps, robots.txt).
- `src/assets/` — Images, customized fonts (CentraNo2), and resume PDF.

## 📄 License & Copyright

Designed and engineered by Cameron Vandermeersch. All rights reserved.
