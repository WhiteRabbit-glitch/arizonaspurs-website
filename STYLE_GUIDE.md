# Arizona Spurs — Style Guide

## Colors

| Token | Hex | Use |
|---|---|---|
| `spurs-navy` | `#132257` | Primary backgrounds, headings, borders |
| `gold` | `#B3A369` | Accents, dividers, section labels, hover states |
| `cream` | `#F5F0E6` | Alternate section backgrounds |
| `near-black` | `#0D1117` | Body copy |
| `deep-navy` | `#0A1535` | Footer, dark overlays |

All tokens are defined in `src/app/globals.css` under `@theme`. Do not add a `tailwind.config.ts`.

---

## Typography

### Fonts
- **Limelight** — `font-limelight` — H1/hero headings and the site wordmark only. Always uppercase. Never below `3rem` (`text-5xl`).
- **Josefin Sans** — `font-josefin` — Everything else: all body copy, nav links, labels, buttons, captions, forms.

Both are loaded via `next/font/google` in `src/app/layout.tsx`.

### Scale
| Role | Class | Size |
|---|---|---|
| Page hero | `font-limelight text-5xl md:text-7xl` | ≥3rem |
| Section heading | `font-josefin text-3xl font-700 uppercase tracking-wide` | — |
| Sub-heading | `font-josefin text-xl font-700 uppercase tracking-wide` | — |
| Body | `font-josefin text-base leading-relaxed` | 1rem / 1.6 |
| Label | `section-label` (CSS class) | 0.7rem uppercase tracked |
| Caption / meta | `font-josefin text-sm text-*/70` | 0.875rem |

Body font size is `1rem` (16px). Never use `px` on body text — use `rem` so users can scale.

---

## Components (`src/components/ui/`)

### Button
```tsx
import Button from "@/components/ui/Button";

<Button variant="primary" href="/join">Join the Club</Button>
<Button variant="secondary" href="/about">Learn More</Button>
<Button variant="secondary" href="https://..." external>Visit Site</Button>
<Button variant="nav" href="/join">Join the Club</Button>
<Button type="submit">Submit</Button>
```

| Variant | CSS class | Use |
|---|---|---|
| `primary` | `.hero-cta-primary` | Main CTA on each section |
| `secondary` | `.hero-cta-secondary` | Supporting action |
| `nav` | `.nav-cta` | NavBar join button |

### Card
```tsx
import Card from "@/components/ui/Card";

<Card>Content here</Card>
<Card as="article" className="border-t-2 border-gold">...</Card>
```

### Badge
```tsx
import Badge from "@/components/ui/Badge";

<Badge className="justify-center text-spurs-navy/40">Our Story</Badge>
```
Renders the `.section-label` pattern — small uppercase tracking label above section headings.

### Modal
```tsx
import Modal from "@/components/ui/Modal";

<Modal open={isOpen} onClose={() => setIsOpen(false)} title="Member Login">
  {/* content */}
</Modal>
```
Accessible: `role="dialog"`, `aria-modal`, `aria-labelledby`, Escape key, focus management. Built for Phase 2 (member portal).

---

## Icons

**Library:** [Lucide React](https://lucide.dev) — `lucide-react`

All icons are `aria-hidden="true"` unless they are the sole label for an interactive element (in which case use `aria-label` on the parent button/link, not on the icon).

### Where icons are used

| Location | Icon | Size |
|---|---|---|
| NavBar hamburger | `Menu` / `X` | 22 |
| FAQ accordion | `Plus` (rotates 45° on open) | 20 |
| Venue directions button | `MapPin` | 16 |
| Venue website button | `ExternalLink` | 16 |
| Partner external links | `ExternalLink` | 14 |
| Modal close button | `X` | 20 |

### Adding an icon
```tsx
import { IconName } from "lucide-react";

<IconName size={20} aria-hidden="true" />
```

Social icons (Facebook, Instagram, X/Twitter) use inline SVGs in `Footer.tsx` — Lucide does not ship brand logos.

---

## CSS Conventions

| Class | Purpose |
|---|---|
| `.hero-cta-primary` | Navy background CTA button |
| `.hero-cta-secondary` | Outlined CTA button |
| `.nav-cta` | Small nav join button |
| `.nav-link` | Standard nav text link |
| `.section-label` | Small uppercase tracking label |
| `.legal-content` | Styles h2/p/ul for policy pages |
| `.consent-toggle` | Cookie banner toggle switch |
| `.faq-item` / `.faq-trigger` / `.faq-answer` | FAQ accordion |
| `.social-icon-link` | Footer social icon links |
| `.divider-ornamental` | Gold ◆ ornamental section divider |

All custom CSS is in `src/app/globals.css`.

---

## Accessibility Checklist (run before every PR)

- [ ] One `<h1>` per page, hierarchy never skips a level
- [ ] All interactive targets ≥ 44×44px
- [ ] All icon-only buttons/links have `aria-label`
- [ ] All images: descriptive `alt` or `alt=""` for decorative
- [ ] All form inputs have associated `<label>`
- [ ] `useReducedMotion()` on every Framer Motion component
- [ ] Focus states visible — never `outline: none` without a replacement
- [ ] Contrast ratios meet WCAG AA (4.5:1 body, 3:1 large text)

---

## Adding Content

### New newsletter issue
See `src/lib/newsletters.ts` — prepend newest issue to the top of the array.

### New FAQ item
See `src/lib/faq.ts` — add to the appropriate category. Mark `long: true` if the answer is more than one sentence.

### New partner
See `src/lib/partners.ts` — add to the array. Drop logo into `public/images/partners/`.

### Officer portraits
Drop low-poly portrait PNGs into `public/images/officers/[firstname-lastname].png`.
Swap the monogram `<div>` for `<Image>` in `src/components/sections/Officers.tsx`.
