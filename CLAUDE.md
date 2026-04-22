# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server at localhost:3000
npm run build    # production build
npm run start    # serve production build
```

No linter or test suite is configured.

## Architecture

**Next.js 14 App Router** marketing website for Qbitum Solutions. All pages are React Server Components with no client-side interactivity except the contact form.

### Data layer

All content lives in [`lib/data.ts`](lib/data.ts) as exported constants — no CMS, no API, no database. To add or edit page content (nav links, services, testimonials, values, etc.), edit that file. The `SERVICES_LIST` array is the source of truth for the `/services/[slug]` dynamic routes; `generateStaticParams` reads it to pre-render all service pages.

### Routing

| Route | File |
|---|---|
| `/` | `app/page.tsx` |
| `/about` | `app/about/page.tsx` |
| `/services` | `app/services/page.tsx` |
| `/services/[slug]` | `app/services/[slug]/page.tsx` |
| `/contact` | `app/contact/page.tsx` |

`Header` and `Footer` wrap all pages via `app/layout.tsx`.

### Styling

**Tailwind CSS v4** using the `@theme` block in [`app/globals.css`](app/globals.css) (not `tailwind.config`). Design tokens are defined there:

- Colors: `void` (#07080f), `surface`, `surface-2`, `purple`, `teal`, etc.
- Fonts: `--font-family-display` (Bricolage Grotesque, CSS var `--font-syne`) for headings; `--font-family-body` (DM Sans, CSS var `--font-dm-sans`) for body text
- Utility classes: `.gradient-text`, `.glass-card`, `.glass-card-hover`, `.btn-glow`, `.btn-outline-glow`, `.glow-orb`, `.dot-grid`, `.section-label`, `.divider-gradient`, `.animate-fade-up`

Apply design tokens via Tailwind utility classes (e.g. `bg-void`, `text-purple`) or inline styles for one-off values. Inline styles are used heavily throughout for precise pixel values.

### Images

All images are in `public/images/`. Next.js image optimisation is disabled (`unoptimized: true` in `next.config.mjs`), so `<Image>` components work but produce no optimised variants.
