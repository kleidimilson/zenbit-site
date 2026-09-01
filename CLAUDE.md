# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start Vite dev server (localhost:5173)
npm run build        # Generate sitemap + TypeScript compile + Vite bundle → /dist
npm run lint         # ESLint with zero warnings tolerance (max-warnings: 0)
npm run preview      # Preview production build locally
```

There is no test framework in this project.

## Architecture

**React + TypeScript + Vite SPA** — a landing page/portfolio site for Zenbit, a Brazilian software agency. Deployed on Vercel; `vercel.json` has a catch-all rewrite (`/(.*) → /`) to support client-side routing.

### Routing

React Router v6 (via `vite-react-ssg`) with the routes defined in `src/routes/index.tsx`:
- `/` → `Home` (main landing page)
- `/blog` → `Blog` (index) and `/blog/:slug` → `BlogPost`, prerendered from `blogSlugs`
- `/:service/:city` → `LocalLanding`, prerendered from `localPageSlugs` (e.g. `/criacao-de-site-em/teresina-pi/`)

The local service+city landing pages are content-driven: all copy lives in `src/content/local-pages.json` and is typed in `src/lib/local-pages.ts`. Adding a page there creates the route, the prerendered HTML, the sitemap entry and the internal links in the footer, no component changes needed. Each page must have its own copy — near-duplicate pages across cities hurt ranking rather than help it.

The `Hero` component is lazy-loaded via `React.lazy()`.

### Pages vs Components

- `src/pages/` — route-level components (`Home.tsx`, `Blog.tsx`, `BlogPost.tsx`, `LocalLanding.tsx`), each setting per-page SEO meta tags and JSON-LD through the `<Head>` component from `vite-react-ssg`
- `src/components/` — presentational sections (Navbar, Hero, About, HowItWorks, Portfolio, Footer, ScrollToTop)
- `src/components/ui/` — Shadcn/UI primitives (button, card, accordion, sheet, etc.)

### Theme System

Custom React Context in `src/components/theme-provider.tsx` handles dark/light/system modes, persisted to `localStorage` under key `vite-ui-theme`. The provider wraps the entire app in `src/main.tsx`. Tailwind uses `class`-based dark mode toggling. All colors are CSS variables in HSL format defined in `src/App.css`, centered on Zenbit green (`#52B357`).

### Styling Conventions

- Tailwind utility classes throughout — no CSS modules
- `cn()` from `src/lib/utils.ts` (wraps `clsx` + `tailwind-merge`) for conditional/dynamic class composition — use this whenever merging Tailwind classes
- Import alias `@/` maps to `src/`

### SEO & Analytics

- `react-helmet-async` manages per-page `<title>`, meta descriptions, and Open Graph tags — all content is in Portuguese
- `generate-sitemap.js` runs at build time and writes `/public/sitemap.xml`
- Google Analytics (gtag.js) and Microsoft Clarity are embedded directly in `index.html`

### CTA Pattern

WhatsApp Business links are the primary call-to-action throughout the site (phone: +55 86 99420-1843). No backend or API layer exists.
