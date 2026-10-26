# Accessibility (ADA / WCAG) Guidelines

The accessibility standard for the Lupo Dumpster Rentals site and the rules every **new page or component** in the rebuild must follow.

## Target standard

- **WCAG 2.1 Level AA**, the benchmark U.S. courts and the DOJ use for ADA Title III website claims. Small local businesses do get demand letters, so this is risk management as well as good UX.
- Applies to every page and interactive element: pages, blog posts, the quote/booking form, the pricing calculator, the "Text Us" widget, the sticky mobile bar, and the nav.

> Re-run the §7 checklist whenever you add a page, component, color, or interaction.

---

## 1. Page structure & landmarks

- Exactly **one `<h1>`** per page; headings in order (`h1 → h2 → h3`), never skipped for styling.
- Landmark order: `<header>` (nav) → `<main id="main-content">` → `<footer>`. Header and footer are **siblings** of `main`, never nested inside it.
  - ⚠️ Today `_app.js` wraps the navbar, page, and footer **all inside one `<main>`**. Fix in the rebuild.
- Semantic elements: `<nav>`, `<section aria-labelledby>`, `<article>` for posts/cards, `<time dateTime>`, `<button>` for actions, `<a>` for navigation.

```jsx
// pages/_app.js (target)
<>
  <SkipLink />
  <SiteHeader />
  <main id="main-content" className={fonts}>
    <Component {...pageProps} />
  </main>
  <SiteFooter />
  <StickyMobileBar />
</>
```

## 2. Keyboard & focus

- A **"Skip to main content"** link is the first focusable element (new; doesn't exist today).
- Never remove focus outlines without a visible replacement. Use `focus-visible:ring-2 ring-[--brand-red] ring-offset-2` (ring offset in ink on dark sections).
- Everything works with keyboard only: nav dropdowns open on Enter/Space, close on Esc, and don't trap focus; the mobile menu traps focus while open and returns focus to the toggle on close.
- No `onClick` on `<div>`/`<span>`.
- Date pickers (`react-day-picker`) and selects (Radix) must be keyboard-operable. Test them.

## 3. Images, video & icons

- Every image has `alt`:
  - **Informative:** describe it with service + place ("20-yard dump trailer in a Trinity driveway").
  - **Decorative** (hero backgrounds under text, textures): `alt=""` + `aria-hidden`.
- **Icon-only controls** (menu toggle, Text Us FAB, phone icon buttons, carousel arrows) need `aria-label`.
- **Autoplay video (home hero):** WCAG 2.2.2 requires a way to **pause/stop** moving content that plays more than 5 seconds. Either add a visible pause button or don't autoplay. Must be `muted`, and must not autoplay under `prefers-reduced-motion`.
- Before/after sliders: operable by keyboard (arrow keys) with an accessible label; provide both images as static alternates.

## 4. Forms (quote, booking, calculator, Text Us)

- Every input has a visible `<label htmlFor>`. Placeholders are not labels.
- Required fields use `required` + `aria-required`; errors are announced in text (`aria-describedby` + `role="alert"`), not color alone.
- Phone input uses `type="tel"` + `autoComplete="tel"`; email `type="email"` + `autoComplete="email"`; names `given-name` / `family-name`.
- Submit button shows a busy state (`aria-busy`, disabled, spinner with sr-only text).
- **reCAPTCHA:** the badge is hidden via CSS, which is allowed **only** because the forms show Google's required legal text. Keep that text visible and readable.
- **SMS consent checkbox** is a real `<input type="checkbox">` with a label containing the full disclosure (see conversion.md).

## 5. Color & contrast (Lupo palette, measured)

Targets: **4.5:1** for normal text, **3:1** for large text (≥24px, or ≥18.66px bold) and UI graphics/borders.

| Foreground | Background | Ratio | Verdict |
| --- | --- | --- | --- |
| Lupo Red `#DC2626` | white | **4.83** | ✅ Text, links, buttons on light |
| white | Lupo Red `#DC2626` | **4.83** | ✅ Button labels |
| white | red-700 `#B91C1C` | 6.47 | ✅ Button hover |
| red-700 `#B91C1C` | white | 6.47 | ✅ Small red text on light |
| Lupo Red `#DC2626` | zinc-100 `#F4F4F5` | 4.39 | ⚠️ Large text only; use red-700 for small text on zinc-100 |
| red-500 `#EF4444` | white | 3.76 | ❌ Never text on light (graphics ≥3:1 ok) |
| Lupo Red `#DC2626` | ink `#14120E` | **3.87** | ❌ **Not for text on dark.** Large display text only |
| Lupo Red `#DC2626` | black | 4.35 | ❌ Normal text fails |
| red-500 `#EF4444` | ink `#14120E` | 4.97 | ✅ **Red text/icons on dark** |
| red-500 `#EF4444` | zinc-900 `#18181B` | 4.71 | ✅ |
| red-400 `#F87171` | ink `#14120E` | 6.76 | ✅ Small red text on dark |
| ink `#14120E` | white | 18.71 | ✅ Body text |
| zinc-600 `#52525B` | white | 7.73 | ✅ Muted text on light |
| zinc-500 `#71717A` | white | 4.83 | ✅ (minimum for muted text) |
| zinc-400 `#A1A1AA` | ink | 7.30 | ✅ Muted text on dark |
| yellow-400 `#FACC15` | ink | 12.22 | ✅ Stars on dark |

**Rules**
- On **light**: red text = `#DC2626` or `#B91C1C`. Never red-500/400 for text.
- On **dark (ink/black/zinc-900)**: red text/icons = `#EF4444` or `#F87171`. `#DC2626` only for **buttons** (white label) or display text ≥ 24px.
- On photo/video heroes: always an overlay dark enough that white text hits ≥ 4.5:1 everywhere (test the lightest part of the image).
- Never use color alone for meaning: "Most popular" gets a label, links get underline or weight, errors get text.

## 6. Motion

- Add a global `prefers-reduced-motion: reduce` block in `styles/globals.css` that disables transitions/animations, stops marquees, pauses video, and forces fade-in elements (`FadeIn`, framer-motion variants) to their visible state.
- No content may flash more than 3×/second.
- Carousels/marquees (testimonials): pausable, and the duplicate track is `aria-hidden`.

## 7. Checklist for every new page / component

- [ ] One `<h1>`; logical heading order.
- [ ] Header → `<main id="main-content">` → Footer; skip link works.
- [ ] All images have correct `alt` (decorative = `alt="" aria-hidden`).
- [ ] Icon-only controls have `aria-label`.
- [ ] Form fields labeled; errors in text; correct `type`/`autoComplete`.
- [ ] Contrast meets §5 (watch red on dark).
- [ ] Keyboard: everything reachable, visible focus, Esc closes overlays, no traps.
- [ ] Links are descriptive (no bare "Learn more").
- [ ] Motion respects reduced-motion; video can be paused.
- [ ] Touch targets ≥ 44×44px (sticky bar buttons, nav items, FAQ toggles).
- [ ] 200% zoom: no lost content or horizontal scroll at 320px width.

## 8. Known issues in the current build (fix during rebuild)

- Single `<main>` wraps nav + page + footer (`_app.js`).
- No skip link.
- Autoplay hero video with no pause control.
- Red text classes (`text-red-600`) used on dark backgrounds in places; audit when rebuilding each component.
- `FadeIn`/framer-motion entrance animations not covered by a reduced-motion reset.
- Multiple legacy components with unknown a11y quality; delete rather than fix.

## 9. How to test

- **Automated:** Lighthouse Accessibility + axe DevTools on every template (home, service, size, pricing, city, blog post, contact). Target zero violations.
- **Keyboard:** Tab through each template; open/close nav, mobile menu, FAQ, form, Text Us widget.
- **Screen reader:** VoiceOver (Cmd+F5) spot-check of the hero, form, and price cards.
- **Zoom/reflow:** 200% zoom and a 320px viewport.
- **Contrast:** WebAIM Contrast Checker for any new pairing.
