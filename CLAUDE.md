@AGENTS.md

# Arizona Spurs Website

## Stack
- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4 — tokens in `src/app/globals.css` under `@theme`, NOT in tailwind.config
- Framer Motion — animations only; respect `prefers-reduced-motion` on every animated element
- Supabase — Phase 2 (auth + DB, not yet wired)
- Stripe — Phase 3 (payments, not yet wired)

## Fonts
- **Limelight** — H1/hero, membership card name, member portal heading only. Uppercase only. Never below 3rem.
- **Josefin Sans** — everything else: headings, body, nav, labels, buttons, captions, forms. Weights: 400 (body), 600 (labels/buttons), 700 (headings).
- Both loaded via `next/font/google` in `src/app/layout.tsx`. CSS variables: `--font-limelight`, `--font-josefin`.

## Design tokens
All in `src/app/globals.css` under `@theme`. Do not add a tailwind.config.ts.

| Token | Value |
|---|---|
| `--color-spurs-navy` | `#132257` |
| `--color-gold` | `#B3A369` |
| `--color-cream` | `#F5F0E6` |
| `--color-near-black` | `#0D1117` |
| `--color-deep-navy` | `#0A1535` |

## Folder structure
```
src/
  app/          — routes (Next.js App Router)
  components/
    ui/         — reusable primitives (Button, Card, Badge, Modal)
    layout/     — NavBar, Footer, SectionHeader
    sections/   — page sections (Hero, CoreValues, Partners, etc.)
  lib/          — utilities, constants, data helpers
  types/        — shared TypeScript types
public/
  videos/       — compressed web-ready video only (no raw footage)
```

## Accessibility — non-negotiable
- Skip link is the first focusable element on every page
- One `<h1>` per page, heading hierarchy never skips a level
- All interactive targets ≥ 44×44px
- All icon-only buttons/links have `aria-label`
- All images have descriptive `alt` or `alt=""`
- All form inputs have associated `<label>`
- Never `outline: none` without a visible replacement
- `prefers-reduced-motion` respected on every Framer Motion component — use `useReducedMotion()`

## Phases
- Phase 1: Full public site — all pages, design system, SEO, compliance (current)
- Phase 2: Auth — Supabase member login, easter egg entry, officer access
- Phase 3: Stripe payments and member tracking
- Phase 4: AI features (backlog)

## SEO
- Every page exports a `generateMetadata` function
- Structured data: Organization schema on root layout, Event schema on watch party pages
- `sitemap.ts` and `robots.ts` in `src/app/`

## Do not
- Do not add a tailwind.config.ts
- Do not use `outline: none` without a visible focus replacement
- Do not commit raw video files — compressed web versions only in `public/videos/`
- Do not add a CMS — content lives in the repo
