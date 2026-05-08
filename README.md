# Leichte Sprache Website

Static HTML website for the Leichte Sprache KI project, using the Leichte Sprache design system.

## Prerequisites

- Node.js 18+ (managed via nvm)

```bash
nvm use 20
```

## Setup

Install dependencies (only needed once):

```bash
npm install
```

## Building the CSS

Tailwind scans all `.html` files and generates `output.css`. **Run a new build whenever you add or change Tailwind utility classes in any HTML file.**

### One-time build

```bash
npm run build
```

### Watch mode (rebuilds automatically on save)

```bash
npm run watch
```

## Design tokens

Defined in `tailwind.config.js` and available as Tailwind utility classes:

| Token | Class example | Value |
|---|---|---|
| Primary | `bg-primary`, `text-primary` | `#001c89` |
| Primary Container | `bg-primary-c` | `#2337a0` |
| Accent (yellow) | `bg-accent` | `#fcd400` |
| Surface | `bg-surface` | `#dcf1fd` |
| Surface Low | `bg-surface-low` | `#e7f6ff` |
| Page Background | `bg-surface-page` | `#f4faff` |
| Ink (body text) | `text-ink` | `#091e27` |
| Ink Muted | `text-ink-muted` | `#454653` |
| Card Shadow | `shadow-card` | `0 2px 8px …` |
| Pill radius | `rounded-pill` | `99px` |

## Fonts

Atkinson Hyperlegible is served from `fonts/` with no external requests. The `@font-face` declarations live in `src/input.css`.
