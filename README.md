# INTHEMOOD PICTURES

Company website for **INTHEMOOD PICTURES** — a Norwegian production company and high-end tech house.

## Quick Start

```bash
# 1. Clone
git clone https://github.com/jhm-hue/inthemood-website.git
cd inthemood-website

# 2. Install (requires Bun — https://bun.sh)
bun install

# 3. Set up environment
cp .env.example .env.local
# Then fill in your Supabase credentials

# 4. Run
bun run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Create a `.env.local` file:

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

## Scripts

| Command | Description |
|---|---|
| `bun run dev` | Start dev server (Turbopack) |
| `bun run build` | Production build |
| `bun run start` | Serve production build |
| `bun run lint` | Run ESLint |

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Language**: [TypeScript 6](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **Backend**: [Supabase](https://supabase.com/) (PostgreSQL, Auth, Storage)
- **Package Manager**: [Bun](https://bun.sh/)
- **Deployment**: [Vercel](https://vercel.com/)

## Project Structure

```
src/
├── app/                    # Routes (Next.js App Router)
│   ├── layout.tsx          # Root layout (nav, fonts, analytics)
│   ├── globals.css         # Tailwind theme + design tokens
│   ├── page.tsx            # Home (/)
│   ├── film/page.tsx       # /film
│   ├── tech/page.tsx       # /tech
│   ├── about/page.tsx      # /about
│   ├── mood/page.tsx       # /mood
│   └── contact/page.tsx    # /contact
├── components/
│   ├── ui/                 # shadcn/ui components
│   └── navigation.tsx      # Site navigation
├── lib/
│   ├── utils.ts            # Utility helpers
│   └── supabase.ts         # Supabase client
└── types/                  # Shared TypeScript types
```

## Database (Supabase)

```sql
create table productions (
  id bigint generated always as identity primary key,
  title text not null,
  year int,
  poster_url text,
  trailer_url text,
  description text,
  category text check (category in ('Movie','Series')),
  created_at timestamp default now()
);

create table news (
  id bigint generated always as identity primary key,
  title text not null,
  body text,
  image_url text,
  published_at timestamp default now()
);
```

## Deployment

Hosted on **Vercel** with automatic deploys from GitHub.

1. Push to GitHub
2. Import the repo in [Vercel](https://vercel.com/)
3. Add environment variables (`NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`)
4. Deploy

## Roadmap

- [ ] Supabase storage for movie posters and stills
- [ ] Admin authentication for content management
- [ ] Trailer embeds (YouTube/Vimeo)
- [ ] Press-kit downloads
- [ ] Blog/news updates

---

Developed by **INTHEMOOD PICTURES**
