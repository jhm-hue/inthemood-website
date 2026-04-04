---
name: design
description: "Enforces 'The Silent Frame' design system for INTHEMOOD Pictures. Use this skill whenever building, editing, or styling UI components, pages, layouts, or any visual element. Triggers for: creating new pages or sections, modifying existing UI, adding components, styling with Tailwind/CSS, reviewing design consistency, working with the Stitch MCP, or any task that touches how the site looks. Even if the user just says 'make a contact form' or 'add a hero section' — this skill applies because every visual element must follow the design system."
---

# The Silent Frame — Design System Implementation Guide

This skill enforces the design system for the INTHEMOOD Pictures website. Every UI decision flows from one creative north star: **the precise moment in a cinema after the house lights dim but before the projector hums to life.** The aesthetic merges A24's editorial edge with Scandinavian minimalism.

## Before You Start

1. Read `src/app/globals.css` for current CSS custom properties and token values
2. Read `references/tokens.md` (bundled with this skill) for the quick-reference token mapping

## The Five Non-Negotiable Rules

These override any default component styling, shadcn defaults, or Tailwind defaults:

### 1. Zero Border Radius — Everywhere
Every element gets sharp corners: buttons, cards, images, inputs, modals, tooltips — all of them. If a shadcn component ships with rounded corners, override it. This is the single most visible brand marker.

```tsx
// Always
className="rounded-none"

// Never
className="rounded-lg"  // or rounded-md, rounded-sm, rounded-full, etc.
```

### 2. No Borders for Structure
Structural boundaries between sections are communicated through **background color shifts**, not lines. A `surface-container-low` section sitting on a `surface` background creates a sophisticated, felt transition.

```tsx
// Do: tonal shift between sections
<section className="bg-background">
  <div className="bg-[var(--surface-container-low)]">
    {/* nested content */}
  </div>
</section>

// Don't: visible borders
<section className="border-b border-gray-800">
```

The one exception: **Ghost Borders** for functional containment (input fields, dropdowns). These use `outline-variant` at 10% opacity — barely visible.

### 3. Strictly Monochromatic
The palette is white, gray, and black. No accent colors ever — no blue links, no green success, no red errors, no gold highlights. Status and emphasis are communicated through typography weight, size, spacing, and luminance shifts.

### 4. Embrace Negative Space
Large areas of `#131313` are a feature. If a layout feels "empty," that's correct. Push content to the center ~50% of the screen with wide gutters. The void is what makes content feel curated rather than dumped.

### 5. No Standard Grids
Avoid the typical "3-column card row." Use intentional asymmetry — overlap a large image with a small, offset text block. Treat the screen as a gallery wall, not a spreadsheet.

## Typography

Typography is the architecture of this system. It should feel like opening credits of a high-budget feature film.

| Role | Font | Weight | Style | Tracking | Usage |
|------|------|--------|-------|----------|-------|
| Display/Headlines | Manrope | Bold (700) | Normal | 0.1em–0.2em | Page titles, hero text, section headers |
| Body | Inter | Light (300) | Italic | Normal | Narrative content, descriptions, paragraphs |
| Labels/Meta | Inter | Regular (400) | Normal, Uppercase | 0.05em–0.1em | Dates, durations, credits, metadata |

```tsx
// Headline
<h1 className="font-heading font-bold tracking-[0.15em] text-5xl md:text-7xl">
  PRODUCTIONS
</h1>

// Body text
<p className="font-sans font-light italic text-[var(--on-surface)]">
  A story about silence and the spaces between frames.
</p>

// Label
<span className="font-sans text-xs uppercase tracking-widest text-muted-foreground">
  2024 · Documentary · 92 min
</span>
```

## Color & Surface System

The site operates in dark mode. Depth is built by stacking surface tiers — think layered sheets of premium matte paper.

| Level | Token | Hex | Tailwind | Use |
|-------|-------|-----|----------|-----|
| Base | `surface` / `background` | #131313 | `bg-background` | Page background |
| Well | `surface-container-lowest` | #0e0e0e | `bg-[var(--surface-container-lowest)]` | Inset content wells |
| Inset | `surface-container-low` | #1c1b1b | `bg-[var(--surface-container-low)]` | Nested sections |
| Default | `surface-container` | #201f1f | `bg-[var(--surface-container)]` | Cards, containers |
| Lift | `surface-container-high` | #2a2a2a | `bg-[var(--surface-container-high)]` | Elevated elements |
| Top | `surface-container-highest` | #353534 | `bg-[var(--surface-container-highest)]` | Top-level floating elements |
| Hover | `surface-bright` | #3a3939 | `bg-[var(--surface-bright)]` | Hover states only |
| Primary | `primary` | #ffffff | `bg-primary` / `text-primary` | High-impact text, CTAs |
| Primary Container | `primary-container` | #d4d4d4 | `bg-[var(--primary-container)]` | CTA hover state, gradients |

## Component Patterns

### Buttons

```tsx
// Primary CTA — gradient texture for "soul"
<button className="rounded-none bg-gradient-to-br from-primary to-[var(--primary-container)] text-[var(--on-primary)] px-8 py-3 font-sans text-sm uppercase tracking-widest hover:from-[var(--primary-container)] hover:to-[var(--primary-container)] transition-all">
  Watch Trailer
</button>

// Secondary — ghost border
<button className="rounded-none border border-white/10 text-primary px-8 py-3 font-sans text-sm uppercase tracking-widest hover:bg-[var(--surface-bright)] transition-colors">
  Learn More
</button>
```

### Navigation

Horizontal bar with generous spacing. Active state is a 1px underline spanning the text width.

```tsx
<nav className="flex items-center gap-16 px-16">
  <a className="text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">
    Film
  </a>
  <a className="text-sm uppercase tracking-widest text-primary border-b border-primary pb-1">
    About
  </a>
</nav>
```

### Cards

No borders. No dividers between list items. Use tonal shifts and vertical whitespace.

```tsx
<div className="rounded-none bg-[var(--surface-container)] overflow-hidden">
  {/* 16:9 cinematic aspect ratio */}
  <div className="aspect-video relative">
    <Image src={poster} alt={title} fill className="object-cover" />
  </div>
  <div className="p-8 space-y-3">
    <span className="text-xs uppercase tracking-widest text-muted-foreground">
      {year} · {genre} · {duration}
    </span>
    <h3 className="font-heading font-bold tracking-[0.1em] text-xl">{title}</h3>
    <p className="font-light italic text-sm text-[var(--on-surface)]">{description}</p>
  </div>
</div>
```

### Input Fields

Bottom-line only. No bounding box.

```tsx
<input
  className="rounded-none bg-transparent border-0 border-b border-white/10 focus:border-primary px-0 py-3 text-primary placeholder:text-muted-foreground focus:outline-none focus:ring-0 w-full transition-colors"
  placeholder="Your email"
/>
```

### Glassmorphism (Nav/Overlays)

```tsx
<div className="backdrop-blur-xl bg-[var(--surface-container-low)]/40 rounded-none">
  {/* Navigation or floating overlay content */}
</div>
```

## Shadows

No heavy drop shadows. If a floating element needs a shadow, use an **ambient shadow** — light bleeding around the object, not a dark void behind it.

```tsx
// Ambient shadow
className="shadow-[0_4px_60px_rgba(229,226,225,0.06)]"

// Never: standard shadows
className="shadow-lg"  // too heavy and dark
```

## Stitch MCP Reference

For visual design prototyping, the project is connected to Stitch:
- **Project ID:** `1176507033938225424`
- Use `mcp__stitch__list_screens` to see existing screen designs
- Use `mcp__stitch__generate_screen_from_text` to prototype new screens
- Use `mcp__stitch__edit_screens` to iterate on existing designs
- The Stitch project has the same design system baked into its `designMd`

## Checklist Before Shipping

- [ ] All `border-radius` is `0` (check shadcn overrides too)
- [ ] No colored accents — only monochromatic
- [ ] Borders are ghost-level (10% opacity) or absent
- [ ] Headlines use Manrope with wide tracking
- [ ] Body text is Inter light italic
- [ ] Labels are uppercase with wide tracking
- [ ] Images maintain 16:9 aspect ratio where applicable
- [ ] Sufficient negative space — content not crammed edge-to-edge
- [ ] Surface hierarchy uses tonal shifts, not borders
- [ ] CTA buttons have the gradient texture
