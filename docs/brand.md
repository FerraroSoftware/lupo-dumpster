# Lupo Dumpster Rentals — Brand Guide

This is the single source of truth for **who Lupo is** (company facts) and **how the brand looks and sounds** in the rebuild. The messaging itself (what we say) lives in [brandscript.md](./brandscript.md).

> **Kept from the current site:** the **name** and the **colors** (Lupo Red on black/ink, with white and zinc neutrals).
> **Rebuilt:** typography, layout system, components, imagery rules, voice, and every page.
>
> Technical source of truth (once built): `styles/globals.css` (tokens), `tailwind.config.js` (theme mapping), and `lib/site-config.js` (facts). Today none of these are the real source: the theme tokens are untouched shadcn grays, and the actual reds are hard-coded as `red-600` in 370+ places.

---

## 1. Company Information

| Field | Value | Status |
| --- | --- | --- |
| Brand name | **Lupo Dumpster Rentals** | ✅ Keep |
| Legal name | **Lupo Enterprises LLC** | ✅ |
| Founder | **Alex Lupo** (with **Amanda Lupo**) | ✅ |
| Founded | June 2020 | ✅ |
| Address (HQ) | 5647 Andrea Dr, Holiday, FL 34690 | ✅ Must match GBP exactly |
| Phone | **(727) 317-6717** (`tel:+17273176717`) | ✅ |
| Email | a.lupollc@gmail.com | ⚠️ Recommend a domain email (e.g. `info@lupodumpsterrentals.com`) for trust + deliverability |
| Hours | Every day, 7:00 AM – 8:00 PM ET | ✅ confirm holidays |
| Rating | 5.0★ on Google | ✅ |
| Review count | 160+ *(older copy says 130+ and 144)* | ⚠️ Reconcile; pull from one config value |
| "License #" | L20000153106 | ⚠️ This is the **Florida Sunbiz document number**, not a contractor/hauling license. Label it correctly or replace with real license + insurance details |
| Social | [Facebook](https://www.facebook.com/LupoLLC) · [Instagram](https://www.instagram.com/lupodumpsterrentals/) | ✅ |
| Domain | `https://www.lupodumpsterrentals.com` (www, HTTPS is canonical) | ✅ |

### What we sell

| Product | Notes |
| --- | --- |
| **Dumpster (dump-trailer) rentals**: 10, 15, 20 yd | Core product. See §4 naming rule. |
| Junk removal (we load) | Residential + commercial |
| Construction & roofing debris | Contractor-friendly |
| Cleanouts: garage, estate, hoarding, move-out | High-touch |
| Single-item: appliance, furniture, mattress | Small-ticket, fast |
| Yard waste, trash removal | |
| Bobcat services | Demolition, grading, site prep |

### Sizes (current site data; confirm before rebuild)

| Size | Dimensions | Holds ≈ | Weight included | Best for | Current price |
| --- | --- | --- | --- | --- | --- |
| 10 yd | 12' L × 8' W × 3.5' H | 3 pickup loads | 2 tons | Garage cleanout, small remodel, yard debris | $325 |
| 15 yd | 14' L × 8' W × 4' H | 4–5 pickup loads | 3 tons | Kitchen remodel, flooring, mid cleanout | $400 |
| 20 yd | 16' L × 8' W × 5' H | 6–7 pickup loads | 4 tons | Whole-home renovation, roofing, full cleanout | $500 |

> ⚠️ **Pricing conflict:** the live `pricing-transparency.jsx` shows $325 / $400 / $500, legacy components show $260 / $350 / $360 and $300 / $365 / $450, and the Facebook offer is $275 (10 yd, 3 days). **Rental period, overweight fee, and extra-day fee are not stated consistently anywhere.** Lock one price sheet with Alex and put it in `lib/site-config.js`. Every price on the site must read from it.

### Service area

Pasco (home county, **#1 target: New Port Richey**), Pinellas, Hernando, Hillsborough. 28 city/county pages today. See [city-pages.md](./city-pages.md).

---

## 2. Positioning

### Positioning statement

For **Pasco and North Pinellas homeowners and contractors** who need debris gone without the hassle, **Lupo Dumpster Rentals** is the **locally owned, flat-rate dumpster company** that delivers fast and charges what it quotes, unlike national brokers and no-show haulers.

### Brand promises (the three things every page must prove)

| Promise | Meaning | How we prove it |
| --- | --- | --- |
| **Flat & honest** | The price we quote is the price you pay. | Public price cards, "what's included" lists, fee table |
| **Fast & on time** | Often same day; we show up when we say. | Reviews mentioning speed, delivery-window promise *(confirm)* |
| **Local & owner-run** | A Holiday, FL family business, not a call center. | Alex/Amanda photos, real trucks, Holiday address, neighborhood-tagged reviews |

### Differentiators

- Flat-rate, published pricing (most competitors hide it behind a quote form)
- Same-day / next-day delivery
- Owner-operated, local (vs. national brokers who subcontract)
- One company for both **rental** and **full-service junk removal**, plus bobcat work
- 5.0★ reviews

---

## 3. Audiences

See [brandscript.md §1](./brandscript.md#1-the-character-who-the-hero-is-and-what-they-want). In short: Project Homeowner (primary), Contractor/Roofer, Property Pro (realtor/PM/investor), Family in Transition (estate/hoarding).

---

## 4. Naming & Terminology Rules

- **Brand:** "Lupo Dumpster Rentals" on first reference; "Lupo" after. Use "Lupo Enterprises LLC" only in legal/footer/schema contexts.
- **The product:** Customers search for **"dumpster rental,"** so use "dumpster" in titles, H1s, and CTAs. The equipment is a **dump trailer**. Say so honestly in body copy and turn it into a benefit (*"our dumpsters are dump trailers: smaller footprint, easier on driveways"*, **confirm the real benefits with Alex**). Never call them "roll-off dumpsters" in a way that misleads; "roll-off style" is fine only if accurate.
- **Sizes:** "10-yard dumpster" (hyphenated as adjective), "10 yd" in tight UI.
- **Places:** "New Port Richey, FL" on first use. "Pasco County," never "Pasco Co."
- **Phone:** always `(727) 317-6717` display format.

---

## 5. Visual Identity — Brand 2.0

### 5.1 Color system (kept colors, now tokenized)

The colors don't change. What changes is that they become **named tokens** instead of scattered `red-600` / `zinc-900` / `#14120E` literals.

**Lupo Red (primary / action)**

| Token | Hex | Tailwind ref | Use |
| --- | --- | --- | --- |
| `--brand-red` | `#DC2626` | red-600 | **Primary buttons, links on light, key accents.** The Lupo color. |
| `--brand-red-hover` | `#B91C1C` | red-700 | Hover/active on red buttons; red text on light where more contrast is needed |
| `--brand-red-deep` | `#BA2525` | (custom, in use) | Optional deep accent; consolidate with red-700 *(decision)* |
| `--brand-red-on-dark` | `#EF4444` | red-500 | **Red text/icons on dark backgrounds** (see contrast rule) |
| `--brand-red-soft` | `#FEE2E2` | red-100 | Tinted chips, badges, highlight fills on light |

**Ink & neutrals**

| Token | Hex | Tailwind ref | Use |
| --- | --- | --- | --- |
| `--ink` | `#14120E` | `darkgray` (existing) | Dark sections, footer, hero overlays, headings on light |
| `--black` | `#000000` | black | Video/photo overlays only |
| `--surface-dark` | `#18181B` | zinc-900 | Raised dark cards, nav |
| `--surface` | `#FFFFFF` | white | Default page background |
| `--surface-muted` | `#F4F4F5` | zinc-100 | Alternating light sections |
| `--border` | `#E4E4E7` | zinc-200 | Hairlines |
| `--text` | `#14120E` | | Body text on light |
| `--text-muted` | `#52525B` | zinc-600 | Secondary text on light (7.7:1) |
| `--text-on-dark-muted` | `#A1A1AA` | zinc-400 | Secondary text on dark (7.3:1) |

**Support colors** (functional only, never decorative)

| Token | Hex | Use |
| --- | --- | --- |
| `--star` | `#FACC15` (yellow-400) | Review stars only |
| `--success` | `#16A34A` | Form success, "included" checkmarks |
| Google brand colors | existing `google*` tokens | Google review badge only |

> **Contrast rule (non-negotiable).** `#DC2626` passes on white (**4.83:1**) but **fails** as text on ink `#14120E` (**3.87:1**). On dark backgrounds, red **text/icons** use `--brand-red-on-dark` `#EF4444` (4.97:1) or red-400. Red **buttons** with white text are fine anywhere (4.83:1). Red text on `zinc-100` is 4.39:1, so it fails for small text; use red-700 there. Full table in [accessibility.md](./accessibility.md).

**Implementation:** map these to the shadcn variables in `styles/globals.css` so `bg-primary` = Lupo Red and `text-foreground` = ink. Today `--primary` is `0 0% 9%` (near-black), so any `bg-primary` renders black. That's a latent bug.

### 5.2 Typography (new)

The current site uses Inter for everything at a single weight rhythm, which reads as a generic template. The new system pairs a **bold, condensed industrial display face** (trucks, signage, job sites) with a **clean, highly legible body face**.

| Role | Recommended | Fallback option | Notes |
| --- | --- | --- | --- |
| Display / H1–H2 | **Barlow Condensed** 700–800 | Oswald 600–700 | Uppercase allowed for short eyebrows/H1 punch lines |
| Body / UI | **Inter** 400/500/600 *(keep)* | Barlow 400/500 | Inter is already loaded; keeps the bundle small |
| Numbers (prices, sizes) | Display face, tabular | | Prices should feel big and confident |

**(decision needed)**: lock the display face. Load via `next/font/google` in `_app.js` with `display: swap`.

**Type scale (desktop → mobile)**

| Token | Size | Use |
| --- | --- | --- |
| Display | 56–80px → 40–48px | Hero H1 |
| H2 | 40–52px → 30–36px | Section titles |
| H3 | 22–28px | Card titles |
| Body L | 18–20px | Hero subhead, intro paragraphs |
| Body | 16–17px | Default |
| Eyebrow | 12–13px, 600, uppercase, `0.16em` tracking, red | Section labels |
| Price | 48–64px display | Price cards |

**Signature pattern:** H1 is one sentence with the **primary keyword highlighted in Lupo Red** (on light) or `#EF4444` (on dark). Example: *Get Your Space Back with Flat-Rate* **Dumpster Rental in New Port Richey**.

### 5.3 Logo

- **Keep the name.** Current files: `public/logo.svg`, `logo2.svg`, `logo3.svg`. These are 90–130 KB each, which means they're probably traced/embedded rasters, not clean vectors.
- **(decision needed)** Either (a) clean up the existing mark into a proper lightweight SVG, or (b) commission a refreshed mark in the same colors. Colors and name stay either way.
- Deliverables needed: horizontal lockup (light + dark versions), mark-only (favicon/social avatar), a **1200×630 OG image**, and `apple-touch-icon`.
- **Don'ts:** recolor outside the palette, place on busy photos without an overlay, stretch, add effects.

### 5.4 Imagery

For a local service business, **real photos sell.** Prospects want to see the actual trailer, truck, and people who will show up.

- **Hero & service pages:** real photos of **Lupo's own trailers, trucks, crew, and jobs** (driveways, roofs, cleanouts). Shoot a library: each size trailer (empty + full), in a driveway, on a jobsite, being dropped, being hauled, Alex/Amanda portrait, before/after cleanouts. **(todo: photo shoot)**
- **Before/after pairs** are the strongest proof asset. Use them on junk-removal, cleanout, and hoarding pages.
- **AI-generated images:** blog covers only, and never showing fake branded Lupo equipment or fake people presented as staff/customers. Follow the house style in [blogging.md](./blogging.md).
- **Format:** WebP/AVIF via `next/image`, explicit sizes, hero `priority`. The current home hero is an autoplay MP4. Keep video only if a poster image is LCP and the video lazy-loads (see `best-seo-practices.md` §9).
- **File naming:** `public/images/{section}/{keyword-description}.webp`, e.g. `services/20-yard-dumpster-driveway-new-port-richey.webp`.

### 5.5 UI components & patterns

| Element | Rule |
| --- | --- |
| **Primary button** | Lupo Red bg, white text, bold, `rounded-lg`, min height 48px, right arrow or phone icon. Label = "Book Your Dumpster" (see brandscript §5). |
| **Secondary button** | White outline on dark / ink outline on light. Used for Call / Text. |
| **Price card** | Big display price, size, dims, weight included, rental days, "best for," checklist of inclusions, red CTA. Middle card flagged "Most popular." |
| **Trust strip** | 5.0★ + review count (from config) · Locally owned · Licensed & insured · Same-day. Under every hero. |
| **Section rhythm** | Alternate white → `zinc-100` → ink. Never two dark sections in a row. `max-w-7xl` containers, `py-20 lg:py-28`. |
| **Eyebrow** | Short red rule + uppercase label above every H2. |
| **Cards** | White, `rounded-2xl`, `border-zinc-200`, subtle hover lift. Icons in a `red-100` chip. |
| **Sticky mobile bar** | Bottom of viewport on mobile: **Call** · **Text** · **Book**. Always visible. |
| **Radius** | `--radius: 0.75rem` (cards `rounded-2xl`, buttons `rounded-lg`). |
| **Motion** | Subtle fade-up on scroll; respect `prefers-reduced-motion`. No marquees in critical content. |

---

## 6. Voice & Tone

Lupo sounds like **a reliable local guy who shows up on time and tells you the real price.**

| We are | We are not |
| --- | --- |
| Plain-spoken, friendly, direct | Corporate, salesy, hype-y |
| Confident and specific ("2 tons included") | Vague ("affordable," "great service") |
| Local ("your neighbors in Holiday") | Generic ("serving your area") |
| Helpful (answers the question first) | Pushy |
| Respectful in sensitive contexts (estate, hoarding) | Jokey about someone's hard situation |

**Writing rules**
- Talk to "you." The customer is the subject of most sentences.
- Lead with the answer, then the detail.
- Numbers beat adjectives: "$325 flat," "same day," "3 days," "2 tons."
- Short sentences. Short paragraphs (≤3 lines on mobile).
- Use the customer's words (from reviews): "showed up on time," "no surprises," "so easy."

## 7. Claims & Compliance

| Claim type | Rule |
| --- | --- |
| Superlatives ("#1," "best," "cheapest") | **Remove** unless backed by a cited, current source (e.g. "Top-rated on Google in Pasco" with a link). FTC truth-in-advertising applies. |
| Guarantees ("best pricing guaranteed," "on-time or free") | Only if Alex will honor it **in writing**; state the terms on the page. |
| Review stats | Must match Google at time of publish; one config value; no made-up counts. |
| Testimonials | Real customers, real names/initials as on Google, with permission if photos used. Never invented. |
| "Licensed & insured" | Back it with real license + insurance info in the footer/About. |
| SMS marketing | Explicit opt-in checkbox + required disclosures (TCPA / A2P 10DLC). See [conversion.md](./conversion.md). |
| Prohibited items | Publish the real list (hazmat, tires, paint, etc.) so pricing stays honest. *(confirm list)* |

---

## 8. Implementing the brand (technical)

1. **Tokens:** rewrite `:root` in `styles/globals.css` with the §5.1 values (HSL for shadcn compatibility) and add `brand`/`ink` keys in `tailwind.config.js`. Then replace raw `red-600`/`zinc-900`/hex literals with tokens as pages are rebuilt.
2. **Fonts:** load display + body faces in `pages/_app.js` via `next/font`; expose as CSS variables (`--font-display`, `--font-sans`); add to Tailwind `fontFamily`.
3. **Facts:** create `lib/site-config.js` exporting NAP, hours, socials, review stats, **sizes + prices + inclusions + fees**, service list, and nav groups. The header, footer, schema components, `Seo.jsx`, price cards, and `llms.txt` all read from it.
4. **Logo/OG:** replace `public/logo*.svg`; add `public/og/default.png` (1200×630) and point `Seo.jsx` `DEFAULT_IMAGE` at it.
5. **Theme color:** add `<meta name="theme-color" content="#14120E">`.
6. **Retire legacy:** once a page is rebuilt, delete components it no longer uses (the repo has three navbars, two footers, three-plus pricing variants, two hero variants).

---

## 9. Open decisions

- ⬜ Lock **price sheet**: prices, rental days, weight limits, overweight fee, extra-day fee, prohibited items, and whether the $275 FB offer is still live.
- ⬜ Lock **review count** + set a process to update it monthly.
- ⬜ Real **license + insurance** details to display (replace Sunbiz # label).
- ⬜ **Display typeface** (Barlow Condensed recommended).
- ⬜ **Logo**: clean up vs. refresh; produce lockups + OG image.
- ⬜ **Tagline**: pick from brandscript §9.
- ⬜ **Guarantee**: is there an on-time/flat-price guarantee Alex will stand behind?
- ⬜ **Domain email** for the business.
- ⬜ **Photo shoot** of real equipment, crew, and jobs.
- ⬜ Dump-trailer **benefits** we can honestly claim (driveway protection, footprint, etc.).
