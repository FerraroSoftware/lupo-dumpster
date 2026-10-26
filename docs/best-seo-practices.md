# Best SEO Practices — Project Standards

> The shared quality bar for **every** page on lupodumpsterrentals.com, whether it's a [Phase 1 rebuild](./pre-launch.md) or a [Phase 2 new page](./new-seo-pages.md). When in doubt, this document wins.
>
> - **Service, size, pricing, or industry page?** Follow [service-pages.md](./service-pages.md).
> - **City / county page?** Follow [city-pages.md](./city-pages.md). Doorway-page risk is the #1 SEO threat on this site.
> - **Blog post?** Follow [blogging.md](./blogging.md).
> - Deep background and rationale: legacy [`seo-updates.md`](./legacy/seo-updates.md). This doc is the condensed, current rulebook.

## Positioning (the through-line)

> "The locally owned, flat-rate dumpster company Pasco and North Pinellas call when they need the mess gone fast, at the price they were quoted."

Every page must reinforce at least one brand promise: **Flat & honest · Fast & on time · Local & owner-run** (see [brand.md §2](./brand.md#2-positioning)).

**Primary market:** New Port Richey → Pasco County → North Pinellas → Hernando / North Hillsborough. Ranking power is built from the center out (Holiday HQ is the anchor for the Google Maps pack).

---

## 1. Page length

| Page type | Target length |
| --- | --- |
| Home | 1,200–1,800 words (mostly in structured sections, not a text wall) |
| Service hub (`/services`) | 1,000–1,500 |
| Core service page (dumpster rental, junk removal…) | 1,200–2,000 |
| Size page (10/15/20 yd) | 800–1,200 |
| City page | 1,200–2,000, with **≥40% genuinely unique local content** (see city-pages.md) |
| Industry page (roofers, realtors…) | 1,000–1,500 |
| Blog | 1,200–1,500 standard; 1,500–2,500 deep guides; always open with a 40–60-word direct answer |

> Fix thin or overlapping pages by **consolidation (301 into the stronger URL), not noindex**.

---

## 2. Meta information

### Title tag (≤ 60 chars)
Pattern: `{Service} in {City}, FL | Lupo Dumpster Rentals`
- If it won't fit, shorten the brand to `| Lupo Dumpsters` *(pick one short form and use it everywhere)*.
- One primary keyword per title, at the front.
- Non-local pages (blog, size guides) can drop the city if it isn't part of the query.

### Meta description (≤ 155 chars)
Formula: **Benefit + proof + flat-rate/speed + CTA.** e.g. *"Flat-rate 10, 15 & 20-yard dumpsters in New Port Richey, often delivered same day. 5.0★ from 160+ neighbors. Book online or call (727) 317-6717."*

### H1 + first 100 words
- Exactly **one H1**, containing the primary keyword.
- **Feeling + keyword, one sentence.** Fuse the customer's desire with the keyword; highlight the keyword in Lupo Red. ✅ *"Get Your Space Back with Flat-Rate **Dumpster Rental in New Port Richey**"*. ❌ *"#1 Dumpster Rental Service in Pasco County, FL"* (about us, unverifiable).
- Keyword + city, FL must appear in the **first 100 words** (the direct-answer paragraph handles this).

### Direct-answer opening (every page)
A **40–60-word plain-language answer** to the page's core question right under the H1 or as the first body paragraph. This earns featured snippets and AI-answer citations.
> *"Lupo Dumpster Rentals delivers 10, 15, and 20-yard dumpsters across New Port Richey, FL, often the same day, at a flat rate that includes delivery, pickup, and disposal up to the weight limit. Pick your size, we drop it in your driveway, and we haul it away when you're done."*

---

## 3. On-page structure (H2 flow)

All page types follow the **StoryBrand spine** (see [brandscript.md §10](./brandscript.md#10-storybrand-website-wireframe--lupo-home-page)): hero → stakes → value → guide/proof → plan → price → explanatory paragraph → FAQ → CTA. SEO-wise that maps to:

**Core service page**
1. What it is / who it's for (direct answer)
2. Why it matters (stakes)
3. Sizes & flat-rate pricing
4. How it works (3 steps)
5. What can and can't go in
6. Why Lupo (proof: reviews + photos)
7. Areas we serve (links to city pages)
8. FAQ

**City page**: see [city-pages.md](./city-pages.md) §4.

**Size page**
1. Dimensions & capacity (with a visual: pickup-truck-loads graphic)
2. Best projects for this size
3. Price + what's included + weight limit
4. Compare to the other sizes (table)
5. FAQ

---

## 4. Proof injection

Every page shows **one real review** (Google icon, first name + initial, neighborhood/city when known) and **one real photo** of Lupo equipment or a job, placed **next to a CTA**. City pages use reviews from that city/neighborhood whenever we have them.

Never invent reviews. Never show stock photos of other companies' dumpsters.

---

## 5. Internal linking

**Hub-and-spoke:**
- Home → `/services`, all core services, size pages, pricing, top city pages.
- **New Port Richey hub** (`/services/dumpster-rental-new-port-richey-fl`) is the #1 local money page. Every non-city service page links to it (already in place via `NprHubCallout`; keep in rebuild).
- City page → home, NPR hub, 3–6 nearby cities, 3–4 services *in that city*, pricing.
- Service page → pricing, size pages, 1–2 related services, 2–3 blog posts, NPR hub.
- Blog → 2–4 service/city pages + 1–2 sibling posts.

**Anchor text:** descriptive and varied ("roll-off dumpsters in Holiday," "flat-rate dumpster pricing"). Never "click here / learn more / read more." Rotate exact-match anchors; don't repeat the same exact phrase sitewide.

**Breadcrumbs:** visible + `BreadcrumbList` schema on every non-home page (already built; keep).

### URL rules
- **Existing URLs never change in Phase 1** (see pre-launch.md). The flat `/services/...` structure stays.
- New pages ≤ 3 path segments; kebab-case; include `-fl` for city slugs (`dumpster-rental-port-richey-fl`).
- Never create a URL whose intent collides with an existing one. Refocus or consolidate instead (cannibalization map in pre-launch.md).

---

## 6. CTAs & conversion (SEO pages are sales pages)

- CTA at **top, middle, and bottom** of every page; primary = **Book Your Dumpster**.
- **Click-to-call + Text** in the hero and in the sticky mobile bar.
- Price visible above the fold on rental pages (flat price is our differentiator; hiding it wastes it).
- Quote/booking form ≤ 5 fields. Full CRO rules in [conversion.md](./conversion.md).

---

## 7. E-E-A-T (experience, expertise, authority, trust)

- **About page** = real story, Alex + Amanda photos, year founded, real license + insurance, service area, what makes us different.
- **Blog byline:** "By Alex Lupo, Owner, Lupo Dumpster Rentals" + `datePublished` / `dateModified`. Author links to `/about-us`.
- **Real photos** of equipment and jobs on every service page.
- **NAP** in the footer on every page, identical to GBP.
- **Policies:** add privacy policy, terms/rental agreement, prohibited items, SMS terms pages *(new)*.

---

## 8. Schema markup

| Schema | Where | Status today |
| --- | --- | --- |
| `Organization` | Sitewide (`organization-schema.jsx`) | ✅ live |
| `WebSite` | Sitewide (`website-schema.jsx`) | ✅ live |
| `Service` + `OfferCatalog` | Sitewide (`service-schema.jsx`) | ✅ live; **prices must come from site-config** |
| `LocalBusiness` (`@type: ["LocalBusiness","HomeAndConstructionBusiness"]` or similar) | Home (HQ) + each city page with `areaServed` | ✅ live; review per city for accuracy |
| `FAQPage` | Only on pages that visibly render the same FAQ | ✅ live |
| `BreadcrumbList` | Every non-home page | ✅ live |
| `BlogPosting` | Every post (via `Bloglayout`) | ✅ live; add `author` → Person |
| `AggregateRating` / `Review` | Only where reviews visibly display; numbers must match Google | ⚠️ hard-coded `160`; move to config |
| `Product`/`Offer` per size | Size pages + pricing page | ⬜ new |

Validate every template in the Rich Results Test before launch.

---

## 9. Technical foundation

- **Canonical host:** `https://www.lupodumpsterrentals.com`. 301 apex + http variants to it (verify in Vercel domain settings, or add a `redirects()` rule in `next.config.mjs`).
- **Canonicals + OG** come from `components/Seo.jsx` only. Never hand-write a canonical in a page.
- **Core Web Vitals (mobile):** LCP < 2.5s, CLS < 0.1, INP < 200ms. Known risks today:
  - Home hero is an **autoplay MP4**. Use a `priority` poster image as LCP and lazy-load the video (or drop it on mobile).
  - **Meta Pixel loads `beforeInteractive`**; move to `afterInteractive`. Hotjar → `lazyOnload`.
  - Many PNGs in `public/` (some 1MB+); convert to WebP/AVIF via `next/image`.
  - Dozens of unused legacy components and commented-out imports; delete on rebuild.
- **Sitemap:** `next-sitemap` at postbuild (in place). Exclude `/thank-you`, `/facebook-offer`, `/api/*`. Submit to GSC + Bing.
- **robots.txt:** hand-maintained in `public/robots.txt` (in place).
- **404:** custom 404 page with search-intent links (services, cities, call button). Must return a real 404 status.
- **llms.txt:** keep `public/llms.txt` updated whenever pages, prices, or facts change. Ideally generate from `site-config`.
- **Framework (decision):** the rebuild is the moment to upgrade from Next 13 Pages Router. See `todo.md` → Decisions.

---

## 10. Local SEO

- **Google Business Profile** is the #1 ranking lever for "dumpster rental near me."
  - Primary category: **Dumpster rental service**. Secondary: Junk removal service, Waste management service, Debris removal service, Garbage collection service *(verify available categories)*.
  - Every service listed with a description; each size as a **Product** with price.
  - Weekly posts, 2–4 geotagged photos/month, seeded Q&A, respond to every review within 24h.
- **Reviews engine:** target 5–10 new Google reviews/month. Ask customers to mention the **service + city** ("dumpster in Trinity"). See conversion.md.
- **NAP consistency:** identical across GBP, footer, schema, Yelp, BBB, Nextdoor, Angi, HomeAdvisor, Thumbtack, Apple Business Connect, Bing Places, chamber.
- **Local links:** West Pasco Chamber, local roofers/realtors/property managers (vendor links), local sponsorships, Patch/Tampa Bay Times features.

### City pages: anti-doorway rule
Each city page needs **genuinely unique** content: local neighborhoods, the actual permit office + phone, the nearest disposal facility, typical local projects (e.g. hurricane cleanup on the coast, new-build communities in Wesley Chapel), drive time from Holiday, and reviews from that area. **Never find-and-replace city names.** Full rules in [city-pages.md](./city-pages.md).

---

## 11. Link building (priority by ROI)

1. Citations & directories (Yelp, BBB, Nextdoor, Angi, HomeAdvisor, Thumbtack, Apple, Bing, chamber)
2. Trade partners: roofers, remodelers, realtors, property managers, movers, estate-sale companies ("preferred vendor" pages)
3. Local PR: community cleanups, hurricane-season help, sponsorships, scholarships
4. Helpful local content that earns links (permit guides, hurricane debris guides)

**Avoid** paid link networks, PBNs, and mass guest posts.

---

## 12. Measurement

- **Stack:** GSC (queries per page + cannibalization watch), GA4 (form/call/text/booking events), Google Ads conversions (in place), CallRail or equivalent (call attribution by landing page), rank tracker with a local geo-grid (e.g. Local Falcon) for NPR + Pasco.
- **Monthly KPIs:** organic sessions, leads by landing page (form + call + text + booking), conversion rate per page template, GBP calls/directions/website clicks, review count + velocity, Map Pack position on the geo-grid, top-3 keyword count.

---

## Per-page pre-publish checklist

- [ ] Title ≤ 60 chars, pattern followed, one primary keyword
- [ ] Meta description ≤ 155 chars (benefit + proof + CTA)
- [ ] One H1 (feeling + keyword, keyword highlighted); keyword + city in first 100 words
- [ ] 40–60-word direct-answer opening
- [ ] StoryBrand section spine; hits word-count target with real substance
- [ ] Prices, sizes, review counts read from `site-config` (no hard-coded facts)
- [ ] One real review + one real photo next to a CTA
- [ ] Internal links per §5; descriptive, varied anchors; breadcrumbs
- [ ] CTA top/middle/bottom; click-to-call + text; sticky mobile bar works
- [ ] Schema valid (Rich Results Test); FAQ schema matches visible FAQ
- [ ] Images: `next/image`, WebP/AVIF, alt text, hero `priority`; LCP < 2.5s mobile
- [ ] No cannibalization with an existing URL
- [ ] Appears in sitemap after build; `llms.txt` updated if it's a primary page
- [ ] Accessibility checklist passed ([accessibility.md §7](./accessibility.md#7-checklist-for-every-new-page--component))
