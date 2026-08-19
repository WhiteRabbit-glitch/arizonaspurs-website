# Arizona Spurs

The website for Arizona Spurs, the Tottenham Hotspur supporters club in Phoenix. Match schedules, event calendar, membership sign-up, partner venues, the newsletter archive, and a members' portal.

Built with Next.js 16 (App Router), React 19, TypeScript and Tailwind CSS 4. Authentication runs on Supabase.

## Running it locally

You need Node 20 or newer and a Supabase project.

```
npm install
```

Copy the environment template and fill in your own values:

```
cp .env.example .env.local
```

| Variable | What it is |
| --- | --- |
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon/public key |
| `NEXT_PUBLIC_GOOGLE_CALENDAR_ID` | Calendar the events page embeds |
| `NEXT_PUBLIC_GA_ID` | Google Analytics measurement ID |

Then start the dev server:

```
npm run dev
```

It serves on http://localhost:3000.

## The pages

| Route | What's there |
| --- | --- |
| `/` | Next match, mission, core values, club history |
| `/about` | Who the club is, the pillars it runs on, the officers |
| `/events` | Match schedule and the embedded club calendar |
| `/join` | Membership benefits and the sign-up form |
| `/partners` | Partner venues and what each one offers members |
| `/newsletter` | Subscribe, plus the back-issue archive |
| `/faq` | Accordion of common questions |
| `/portal` | Members' area — login, signup, password reset |
| `/privacy`, `/terms`, `/cookies`, `/accessibility` | Policies and the accessibility statement |

## How it's laid out

| Path | Contents |
| --- | --- |
| `src/app` | Routes, `layout.tsx`, `sitemap.ts`, `robots.ts` |
| `src/components/sections` | Page sections — one file per block of a page |
| `src/components/layout` | Header, footer, the shell every page sits in |
| `src/components/ui` | Shared primitives |
| `src/lib` | Match data, FAQ content, partners, newsletters, Google Calendar |
| `src/lib/supabase` | Browser client, server client, and the auth proxy |

Read `STYLE_GUIDE.md` before changing anything visual. The site is built to WCAG 2.2 AA and the accessibility statement at `/accessibility` is a public promise, so keep contrast, focus states and keyboard navigation intact.

## Commands

| Command | Does |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |
