# Service Pages Guide — How to Build a Service, Size, Pricing, or Industry Page

> **Read this every time you build a non-city page under `/services/*`, a size page, the pricing page, or an `/industries/*` page.** City pages have their own guide: [city-pages.md](./city-pages.md). Blog posts: [blogging.md](./blogging.md). Sitewide rules: [best-seo-practices.md](./best-seo-practices.md). Messaging: [brandscript.md](./brandscript.md).

> **Framework note:** this guide assumes the current **Next.js Pages Router** (`pages/*.jsx` + `next/head` + `components/Seo.jsx`). If the rebuild moves to the App Router (see `todo.md` → Decisions), swap `<Head>`/`<Seo>` for an exported `metadata` object; the section spine and rules don't change.

---

## 1. The non-negotiables

A page is not done until **all** of these are true:

- [ ] `<Head>` with `<title>` + `<meta name="description">`, and `<Seo title description path image />` (canonical + OG + Twitter). No hand-written canonical.
- [ ] **One H1**: one flowing sentence = customer desire + primary keyword, keyword highlighted red (see §4).
- [ ] **40–60-word direct-answer** paragraph under the H1.
- [ ] **Hero answers the 3 StoryBrand questions** (what you offer / how it helps / how to get it) above the fold on a phone.
- [ ] **Primary CTA "Book Your Dumpster"** (or the service equivalent, e.g. "Book Junk Pickup") + Call + Text in the hero.
- [ ] **Trust strip** under the hero (rating + review count from `site-config`, local, licensed & insured, same-day).
- [ ] **StoryBrand spine** (§5): stakes → value → guide/proof → plan → price → explanatory paragraph → FAQ → CTA.
- [ ] **Prices/sizes/review counts read from `lib/site-config.js`.** Zero hard-coded facts.
- [ ] **One real review + one real Lupo photo** next to a CTA.
- [ ] At least **one visual block** per section (cards, table, before/after, icon list). No bare heading + two paragraphs.
- [ ] **Internal links:** pricing, relevant size page(s), NPR hub, 1–2 related services, 2–3 blog posts, top city pages.
- [ ] **JSON-LD:** `Service` (+ `offers` for rental pages) + `FAQPage` (matches visible FAQ) + `BreadcrumbList`.
- [ ] Added to the nav/footer config if it's a primary service; `llms.txt` updated.
- [ ] `npm run build` passes; lints clean; accessibility checklist passed.

---

## 2. Page archetypes

| Archetype | Example URL | Length | Role |
| --- | --- | --- | --- |
| **Services hub** | `/services` | 1,000–1,500 | Routes to every service; groups: Dumpster Rental · Junk Removal · Cleanouts · Specialty · Bobcat |
| **Core service** | `/services/dumpster-rental`, `/services/junk-removal` | 1,200–2,000 | The authority page for a service line |
| **Sub-service** | `/services/mattress-disposal`, `/services/hoarding-cleanup` | 1,000–1,500 | One specific job; links up to its core service |
| **Size page** | `/services/20-yard-dump-trailer` | 800–1,200 | One size; "is this the right size for me?" intent |
| **Pricing** | `/dumpster-rental-pricing` | 1,000–1,500 | All prices, inclusions, fees, calculator. **Conversion engine.** |
| **Industry** *(new)* | `/industries/roofers` | 1,000–1,500 | One audience (StoryBrand character) and their specific problem |
| **Service + city** | `/services/junk-removal-new-port-richey-fl` | 1,200–1,800 | Follow city-pages.md anti-doorway rules too |

---

## 3. Page scaffold (copy this shape)

```jsx
import Head from "next/head";
import Seo from "@/components/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import { siteConfig, sizes } from "@/lib/site-config";
// new design-system components (names are targets; see todo.md §3)
import { ServiceHero } from "@/components/site/service-hero";
import { TrustStrip } from "@/components/site/trust-strip";
import { StakesSection } from "@/components/site/stakes-section";
import { ValueProps } from "@/components/site/value-props";
import { GuideProof } from "@/components/site/guide-proof";
import { PlanSteps } from "@/components/site/plan-steps";
import { PriceCards } from "@/components/site/price-cards";
import { StoryParagraph } from "@/components/site/story-paragraph";
import { Faq } from "@/components/site/faq";
import { CtaBand } from "@/components/site/cta-band";

const path = "/services/<slug>";
const title = "<Service> in Pasco County, FL | Lupo Dumpster Rentals"; // ≤ 60
const description = "<Benefit + proof + CTA>"; // ≤ 155
const heroImage = "/images/services/<slug>-hero.webp";

const faqs = [/* 4–8 real customer questions */];

export default function Page() {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <Seo title={title} description={description} path={path} image={heroImage} />
      </Head>
      {/* JSON-LD: Service + FAQPage + BreadcrumbList */}

      <ServiceHero /* §4 */ />
      <TrustStrip />
      <Breadcrumbs />
      {/* §5 sections */}
      <CtaBand />
    </>
  );
}
```

`Header`, `Footer`, sticky mobile bar, and global schema are mounted in `pages/_app.js`. Don't render them per page.

---

## 4. The hero

**Layout:** full-bleed **real Lupo photo** under an ink gradient (`from-[ink] via-[ink]/90 to-[ink]/60`), copy left, **quote/booking card** right (desktop); stacked on mobile with the CTA buttons above the fold.

**Contents, top to bottom:**
1. Eyebrow (red-on-dark `#EF4444`): `SERVING NEW PORT RICHEY & ALL OF PASCO`
2. **H1**: desire + keyword, keyword in `#EF4444` on dark
3. Subhead (`text-white/80`, 18–20px): one-liner short form
4. CTAs: **Book Your Dumpster** (red) · **Call (727) 317-6717** (outline) · **Text Us**
5. Trust strip (stars + count from config)
6. Right column: price teaser ("10-yard from $325 flat") + short booking/quote form or calculator entry

### The H1 rule: feeling + keyword, one sentence

```jsx
<h1 className="font-display text-4xl md:text-6xl font-extrabold leading-[1.05] text-white">
  Clear the Clutter Fast with Full-Service{" "}
  <span className="text-[--brand-red-on-dark]">Junk Removal in Pasco County</span>
</h1>
```

- ✅ "Finish the Job Faster with a **Construction Dumpster Rental** in Pasco County"
- ✅ "Get the Right Fit with a **20-Yard Dumpster Rental**"
- ❌ "#1 Junk Removal Service" (about us, unverifiable)
- ❌ Two stacked phrases or a small gray keyword subtitle

---

## 5. Section blueprint (StoryBrand spine)

Order every page so **the customer is the hero, Lupo is the guide.**

| # | Section | What goes in it | Visual treatment |
| --- | --- | --- | --- |
| 1 | **Hero** | §4 | Photo bg + form |
| 2 | **Stakes** | "What happens if you DIY/wait": 3 failure cards (brandscript §6) tailored to the service | Icon cards, `zinc-100` bg |
| 3 | **What it is / who it's for** | Direct explanation + "Perfect for:" chips (projects/items) | Image + text split |
| 4 | **Value props** | 3–4 benefits tied to brand promises (flat, fast, local) | Icon grid |
| 5 | **Guide / proof** | Empathy line + 1–3 real reviews + real job photo or before/after | **Ink section** |
| 6 | **The plan** | 3 steps + CTA | Numbered cards |
| 7 | **Price choices** | Price cards from config (rental pages) or "how pricing works" (junk removal: by volume/load, *confirm model*) | Cards, middle = Most popular |
| 8 | **What can / can't go in** | Allowed vs. prohibited (from config) | Two-column ✓ / ✗ list |
| 9 | **Explanatory paragraph** | 150–300 words restating the story with keywords + service-area names | Plain prose, max-w-3xl |
| 10 | **Areas we serve** | Top 8–12 city links + "see all" | Chip grid / mini-map |
| 11 | **Related** | 2–3 related services + 2–3 blog posts | Cards |
| 12 | **FAQ** | 4–8 real questions (also `FAQPage` schema) | Accordion |
| 13 | **CTA band** | Success image + "Ready to get your space back?" + Book / Call / Text | Red or ink band |

**Sub-pages** may compress 3–4 and 10–11, but must keep: hero, stakes, proof, plan, price/how-pricing-works, FAQ, CTA band.

### Archetype-specific additions

- **Size page:** add a **capacity visual** (pickup-truck-loads illustration), a **"is this the right size?"** project checklist, and a **3-size comparison table** linking the other two size pages.
- **Pricing page:** all three price cards, a **"what's included"** table, a **fee table** (overweight per ton, extra day, prohibited-item fees), the **calculator/quiz**, a "why we publish our prices" section (philosophical problem), and FAQ. This page should convert better than any other; treat it as a sales page.
- **Industry page:** written to one character (brandscript §1). Contractor/roofer: reliability, scheduling, repeat-account perks *(confirm)*, how many roofing squares fit per size. Realtor/PM: speed to turn a property, lockbox/no-one-home drop-offs *(confirm)*, invoicing.
- **Junk removal pages:** lead with "we do the lifting," before/after photos, and the pricing model (by volume, minimum charge; *confirm*).
- **Hoarding / estate pages:** tone shifts to discreet and compassionate. No jokes, no "messy" imagery of real clients without consent; emphasize privacy, unmarked arrival *(confirm)*, and family coordination.

---

## 6. Make sections feel alive

If a section is a heading and two paragraphs, upgrade it:

- **Before/after slider or pair** for any removal/cleanout service.
- **Contrast cards:** "DIY dump runs" (✗ muted) vs. "Lupo dumpster" (✓ red-tinted).
- **Stat callouts:** big display number ("2 tons included," "Same-day," "5.0★").
- **Image + text split** with a real photo, `rounded-2xl`, offset red frame.
- **Checklists** with ✓ icons in `red-100` chips.
- **Comparison table** (sizes, rental vs. junk removal).

Alternate section backgrounds (white → zinc-100 → ink) and layouts (text-left → image-left → grid) so the page has rhythm.

---

## 7. Imagery

- **Real Lupo photos** for hero and body (see [brand.md §5.4](./brand.md#54-imagery)). Never the same photo twice on one page.
- Save to `public/images/services/<slug>-<desc>.webp`.
- Hero: `<Image fill priority sizes="100vw" alt="" aria-hidden />` (decorative under text). Body images get real alt text with service + city.
- The hero image is also the OG image (`<Seo image>`) unless a dedicated 1200×630 card exists.

---

## 8. Schema, links, wiring

- **JSON-LD `@graph`:** `Service` (`serviceType`, `provider` → `#organization`, `areaServed`, `offers` with price from config where applicable) + `FAQPage` + `BreadcrumbList`. Sitewide `Organization` / `WebSite` / `Service` catalog come from `_app.js`; don't duplicate.
- **Nav/footer:** primary services must appear in the nav groups (once moved to `site-config`; today they're arrays in `components/Navitem.jsx` and `components/Footer.jsx`).
- **Sitemap:** automatic via `next-sitemap` at postbuild; confirm the URL appears in `public/sitemap.xml` after build.
- **NPR hub link:** every non-city service page links to the New Port Richey hub with a varied anchor (keep the `NprHubCallout` pattern or its redesign).

---

## 9. Pre-publish checklist

- [ ] Title ≤ 60; description ≤ 155; `<Seo>` wired with correct `path` + `image`.
- [ ] H1 = feeling + keyword, highlighted; keyword + city in first 100 words; 40–60-word direct answer.
- [ ] Hero answers what / how it helps / how to get it on a phone screen; Book + Call + Text visible.
- [ ] StoryBrand spine complete; every section has a visual treatment.
- [ ] All facts from `site-config`; prices match the pricing page.
- [ ] Real review + real photo next to a CTA; no repeated photos.
- [ ] Internal links (pricing, sizes, NPR hub, related services, blog, cities); descriptive anchors.
- [ ] Schema valid; FAQ schema matches visible FAQ.
- [ ] LCP < 2.5s mobile; images `next/image` WebP.
- [ ] Status flipped in [todo.md](./todo.md).
