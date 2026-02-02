# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development server**: `npm run dev` (automatically opens browser at http://localhost:5173)
- **Build**: `npm run build`
- **Linting**: `npm run lint`
- **Preview build**: `npm run preview`

## Environment Setup

Create `.env` file with Supabase credentials:

```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

All environment variables must be prefixed with `VITE_` to be exposed in Vite.

## Tech Stack & Architecture

**Core**: React 19 + Vite 7 + TypeScript
**Styling**: Tailwind CSS v4
**Backend**: Supabase (PostgreSQL + Auth + Storage)
**Deployment**: Vercel

### Database Schema

Two main tables in Supabase:

- `productions` - Movies & series with posters, trailers, descriptions
- `news` - Company updates and press releases

### Current Structure

- `index.html` - HTML entry point for Vite with React root div
- `src/supabaseClient.js` - Supabase configuration and client initialization
- `src/App.jsx` - Main app component (currently default Vite template)
- `src/main.jsx` - React entry point
- TypeScript configured with strict mode and React JSX support

### Planned Structure (from README)

```
src/
├─ components/         # Reusable components (Navbar, Footer, etc.)
├─ pages/              # Full-page views (Home, About, Productions, etc.)
├─ styles/             # CSS files
└─ utils/              # Helper functions
```

## Code Style

- ESLint configured with React hooks and refresh plugins
- Uses modern ES2020+ features
- Strict TypeScript configuration enabled
- Custom rule: unused variables starting with uppercase are allowed

## Project Status

This is a company website for INTHEMOOD PICTURES production company. The codebase is currently in initial setup phase with:

- Supabase client configured
- Basic React + Vite structure in place
- TypeScript and ESLint configured
- Tailwind CSS integrated

The actual website components and pages need to be implemented based on the structure outlined in README.md.
