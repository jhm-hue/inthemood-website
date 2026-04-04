# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development server**: `bun run dev` (starts at http://localhost:3000)
- **Build**: `bun run build`
- **Start production**: `bun run start`
- **Linting**: `bun run lint`

## Environment Setup

Create `.env.local` file with Supabase credentials:

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

All client-side environment variables must be prefixed with `NEXT_PUBLIC_`.

## Tech Stack & Architecture

**Core**: Next.js 16 (App Router, Turbopack) + React 19 + TypeScript 6
**Styling**: Tailwind CSS v4 (CSS-first config) + shadcn/ui (radix-nova)
**Backend**: Supabase (PostgreSQL + Auth + Storage)
**Package Manager**: Bun
**Deployment**: Vercel

### Database Schema

Two main tables in Supabase:

- `productions` - Movies & series with posters, trailers, descriptions
- `news` - Company updates and press releases

### Project Structure

```
src/
├── app/                    # Next.js App Router (routes)
│   ├── layout.tsx          # Root layout (nav, fonts, metadata, GA)
│   ├── globals.css         # Tailwind CSS + theme variables
│   ├── page.tsx            # Home page (/)
│   ├── not-found.tsx       # 404 page
│   ├── film/page.tsx       # /film
│   ├── tech/page.tsx       # /tech
│   ├── about/page.tsx      # /about
│   ├── mood/page.tsx       # /mood
│   └── contact/page.tsx    # /contact
├── components/
│   ├── ui/                 # shadcn/ui components (shared)
│   └── navigation.tsx      # Client component (active link nav)
├── lib/
│   ├── utils.ts            # cn() helper (clsx + tailwind-merge)
│   └── supabase.ts         # Supabase client
└── types/                  # Shared TypeScript types
```

Feature-based structure: when adding features (productions, news), create `src/features/<name>/` with components/, hooks/, types.ts inside.

### Key Conventions

- All page components are **Server Components** (static content)
- Only `navigation.tsx` and interactive UI components use `"use client"`
- Tailwind v4 CSS-first config in `globals.css` (no tailwind.config.js)
- shadcn/ui configured with `rsc: true` in `components.json`
- Fonts: Noto Sans (via next/font/google), Geist Variable (via @fontsource)
- Google Analytics via `@next/third-parties/google`

## Design System: "The Silent Frame"

The project follows a strict design system defined in `DESIGN.md`. **Read `DESIGN.md` before any UI/styling work.** Use `/design` for the full implementation guide.

### Critical Rules (non-negotiable)
1. **0px border-radius everywhere** — sharp architectural corners, no exceptions
2. **No borders for sectioning** — use background color shifts between surface tiers instead
3. **Strictly monochromatic** — no accent colors (no blue, gold, red, green). Only white/gray/black
4. **Embrace negative space** — large areas of `#131313` are intentional, not empty
5. **No standard grids** — avoid 3-column card rows; use asymmetric, editorial layouts

### Key Tokens
- Background: `#131313` | Primary: `#ffffff` | Surface tiers for depth
- Headlines: Manrope (bold, wide tracking 0.1-0.2em)
- Body: Inter (light 300, italic for editorial feel)
- Labels: Inter (uppercase, wide tracking)

### Stitch MCP Project
Visual design reference: `projects/1176507033938225424`

## Code Style

- ESLint configured with next/core-web-vitals and next/typescript
- Strict TypeScript with noUnusedLocals, noUnusedParameters
- Uses modern ES2020+ features
- Path alias: `@/` maps to `./src/`
