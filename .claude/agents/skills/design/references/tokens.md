# Token Reference: The Silent Frame

Quick-reference mapping between DESIGN.md semantic names, hex values, CSS custom properties, and Tailwind classes.

## Surface & Background Colors

| Semantic Name | Hex | CSS Variable | Tailwind Class |
|---------------|-----|-------------|----------------|
| `background` / `surface` | #131313 | `--background` | `bg-background` |
| `surface-dim` | #131313 | `--surface-dim` | `bg-[var(--surface-dim)]` |
| `surface-container-lowest` | #0e0e0e | `--surface-container-lowest` | `bg-[var(--surface-container-lowest)]` |
| `surface-container-low` | #1c1b1b | `--surface-container-low` | `bg-[var(--surface-container-low)]` |
| `surface-container` | #201f1f | `--surface-container` | `bg-[var(--surface-container)]` |
| `surface-container-high` | #2a2a2a | `--surface-container-high` | `bg-[var(--surface-container-high)]` |
| `surface-container-highest` | #353534 | `--surface-container-highest` | `bg-[var(--surface-container-highest)]` |
| `surface-bright` | #3a3939 | `--surface-bright` | `bg-[var(--surface-bright)]` |

## Primary Colors

| Semantic Name | Hex | CSS Variable | Tailwind Class |
|---------------|-----|-------------|----------------|
| `primary` | #ffffff | `--primary` | `bg-primary` / `text-primary` |
| `primary-container` | #d4d4d4 | `--primary-container` | `bg-[var(--primary-container)]` |
| `on-primary` | #1a1c1c | `--on-primary` | `text-[var(--on-primary)]` |
| `primary-foreground` | #1a1c1c | `--primary-foreground` | `text-primary-foreground` |

## Text Colors

| Semantic Name | Hex | CSS Variable | Tailwind Class |
|---------------|-----|-------------|----------------|
| `on-background` / `on-surface` | #e5e2e1 | `--foreground` | `text-foreground` |
| `on-surface-variant` | #c6c6c6 | `--on-surface-variant` | `text-[var(--on-surface-variant)]` |
| `muted-foreground` | ~#b3b3b3 | `--muted-foreground` | `text-muted-foreground` |

## Borders & Outlines

| Semantic Name | Hex | CSS Variable | Tailwind Class |
|---------------|-----|-------------|----------------|
| `outline` | #919191 | `--outline` | `border-[var(--outline)]` |
| `outline-variant` | #474747 | `--outline-variant` | `border-[var(--outline-variant)]` |
| Ghost border | #474747 @ 10% | — | `border-white/10` |
| Input border | #ffffff @ 15% | `--input` | `border-input` |

## Typography

### Fonts

| Role | Font Family | CSS Variable | Tailwind Class |
|------|-------------|-------------|----------------|
| Headlines / Display | Manrope | `--font-heading` | `font-heading` |
| Body / Default | Inter | `--font-sans` | `font-sans` |
| Labels | Inter | `--font-sans` | `font-sans` |

### Scale

| Level | Size | Weight | Tracking | Style |
|-------|------|--------|----------|-------|
| `display-lg` | 72px+ (text-7xl) | 700 | 0.15em–0.2em | Normal |
| `headline-lg` | 48px (text-5xl) | 700 | 0.1em–0.15em | Normal |
| `headline-md` | 36px (text-4xl) | 700 | 0.1em | Normal |
| `body-lg` | 18px (text-lg) | 300 | Normal | Italic |
| `body-md` | 16px (text-base) | 300 | Normal | Italic |
| `body-sm` | 14px (text-sm) | 300 | Normal | Italic |
| `label-lg` | 14px (text-sm) | 400 | 0.05em | Uppercase |
| `label-sm` | 12px (text-xs) | 400 | 0.1em | Uppercase |

## Layout

| Property | Value | Notes |
|----------|-------|-------|
| Border radius | 0px | All elements, no exceptions |
| Content width | ~50% center | Wide gutters, focused content |
| Nav spacing | 64px+ gap | Between nav items |
| Section spacing | 80px–120px | Between major sections |
| Card image ratio | 16:9 | Cinematic aspect ratio |

## Shadows

| Type | CSS | When to Use |
|------|-----|-------------|
| Ambient | `shadow-[0_4px_60px_rgba(229,226,225,0.06)]` | Floating elements (modals, dropdowns) |
| Ambient (stronger) | `shadow-[0_8px_80px_rgba(229,226,225,0.08)]` | High-emphasis floating elements |
| None | — | Default for all non-floating elements |

## Glassmorphism

```css
backdrop-blur: 20px+
background: var(--surface-container-low) / 40% opacity
border-radius: 0px
```

Tailwind: `backdrop-blur-xl bg-[var(--surface-container-low)]/40 rounded-none`
