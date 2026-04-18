# SEO Updates — Ranking #1 in New Port Richey & Pasco County

**Site:** https://www.lupodumpsterrentals.com
**Business:** Lupo Enterprises LLC
**Primary target market:** New Port Richey, FL
**Secondary target market:** Pasco County, FL (Holiday, Port Richey, Trinity, Hudson, Land O' Lakes, Wesley Chapel, Odessa, Lutz, Spring Hill, Dade City, Zephyrhills, San Antonio)
**Last updated:** 2026-04-16

This document is a complete audit and action plan to move the site from "ranks on page 1 for some branded terms" to **#1 in the local pack and organic for high-intent dumpster rental searches** across New Port Richey and Pasco County. It is written to be executed — every section ends with concrete tasks.

---

## Table of Contents

1. [Executive Summary — Top 10 Wins](#1-executive-summary)
2. [How Local SEO Actually Works (for this niche)](#2-how-local-seo-actually-works)
3. [Keyword Strategy](#3-keyword-strategy)
4. [Google Business Profile (highest ROI)](#4-google-business-profile-gbp)
5. [On-Page SEO — Metadata & Content](#5-on-page-seo--metadata--content)
6. [Structured Data / Schema Audit](#6-structured-data--schema-audit)
7. [Technical SEO](#7-technical-seo)
8. [Internal Linking Architecture](#8-internal-linking-architecture)
9. [Content Strategy & Editorial Calendar](#9-content-strategy--editorial-calendar)
10. [Off-Page / Backlinks / Citations](#10-off-page--backlinks--citations)
11. [Core Web Vitals & Page Speed](#11-core-web-vitals--page-speed)
12. [Reviews & Reputation Management](#12-reviews--reputation-management)
13. [Measurement, Tracking & KPIs](#13-measurement-tracking--kpis)
14. [30-60-90 Day Execution Plan](#14-30-60-90-day-execution-plan)
15. [Specific File-Level Action Items](#15-specific-file-level-action-items)

---

## 1. Executive Summary

Top 10 highest-leverage wins, in priority order:

1. **Optimize and weaponize the Google Business Profile.** In this niche, GBP drives ~70% of ranking signal for "dumpster rental near me" / "dumpster rental new port richey" map-pack results. The site supports it; it does not replace it.
2. **Rewrite every `<title>` and `<meta description>`** to put the city + primary keyword at the front, end with the brand, and stay within 50–60 / 140–160 characters including spaces.
3. **Fix the duplicate global `LocationSchema` + global `FaqSchema`** that currently fires on every page with Pasco-level data, conflicting with per-page location schemas. This confuses Google about which location each page represents.
4. **Consolidate NAP** (Name, Address, Phone) to one canonical format used everywhere: site, footer, GBP, citations, schema. Today phone is written at least 3 different ways.
5. **Build a true hub-and-spoke internal linking structure** — New Port Richey is the #1 hub and should receive keyword-rich links from every surrounding city page, every service page, the home page, and the footer.
6. **Kill component cruft.** Dozens of unused legacy components bloat bundles and slow LCP. Core Web Vitals are now a ranking factor, especially on mobile.
7. **Ship a real sitemap** — dynamically generated, with accurate `lastmod` per URL, correct `priority` and `changefreq`, and no stale URLs. Current sitemap has the same date on every URL (a spam signal).
8. **Fix broken links in the new navbar** — About Us and Contact both point to `#` in `components/new/navbar.jsx`. Broken internal links hurt crawl efficiency and user trust.
9. **Earn local backlinks** from Pasco-area roofers, realtors, property managers, HOAs, and moving companies. Local relevance > domain authority in this niche.
10. **Launch a review-velocity program** — target 5–10 new Google reviews per month, each ideally mentioning the city ("Dumpster rental in New Port Richey" in the review text boosts local pack ranking).

---

## 2. How Local SEO Actually Works

For "dumpster rental" queries, Google shows three things in order on the SERP:

1. **Google Ads** — pay-to-play, separate channel.
2. **Local pack / Map pack** — the 3 businesses shown with a map. Ranking here is dominated by the **Google Business Profile**, not the website. Site plays a supporting role.
3. **Organic results** — dominated by the website's on-page SEO, links, and content.

**Both are needed.** The map pack has higher click-through for "near me" and "dumpster rental new port richey"; organic captures long-tail intent like "how much does a 20 yard dumpster cost in pasco county".

**The ranking formula for the local pack (simplified):**

- **Relevance** — GBP primary category + services + site content + reviews that mention the service
- **Distance** — proximity of the business address to the searcher's location (why New Port Richey is harder than Holiday: NPR is larger, more competitors; Holiday is where the address actually is)
- **Prominence** — reviews (quantity, velocity, recency, keyword mentions), citations, backlinks, brand mentions, GBP engagement

**The ranking formula for organic:**

- On-page (title, H1, URL, internal links, word count, entity mentions)
- Technical (crawlable, fast, indexable, schema present and valid)
- Off-page (backlinks, brand mentions, local citations)
- User signals (CTR, dwell time, bounce, conversions)

Every recommendation below maps back to one of these.

---

## 3. Keyword Strategy

### 3.1 Primary target keywords (New Port Richey)

These are where we want **#1** within 6 months:

| Keyword                                  | Monthly Searches (est.) | Current Page                                   | Intent        |
| ---------------------------------------- | ----------------------- | ---------------------------------------------- | ------------- |
| dumpster rental new port richey          | 320–480                 | `/services/dumpster-rental-new-port-richey-fl` | transactional |
| dumpster rental new port richey fl       | 170–260                 | same                                           | transactional |
| new port richey dumpster rental          | 170–260                 | same                                           | transactional |
| junk removal new port richey             | 210–320                 | `/services/junk-removal-new-port-richey-fl`    | transactional |
| junk removal new port richey fl          | 90–140                  | same                                           | transactional |
| roll off dumpster rental new port richey | 40–70                   | same as #1                                     | transactional |
| 10 yard dumpster rental new port richey  | 30–50                   | need dedicated page                            | transactional |
| 20 yard dumpster rental new port richey  | 30–50                   | need dedicated page                            | transactional |
| dumpster rental near me _(from NPR IP)_  | very high               | same as #1                                     | transactional |

### 3.2 Secondary target keywords (Pasco County + neighbors)

| Keyword                       | Target Page                                        |
| ----------------------------- | -------------------------------------------------- |
| dumpster rental pasco county  | `/` (home)                                         |
| dumpster rental holiday fl    | `/services/dumpster-rental-holiday-fl`             |
| dumpster rental port richey   | needs dedicated page (currently only junk removal) |
| dumpster rental trinity fl    | `/services/dumpster-rental-trinity-fl`             |
| dumpster rental hudson fl     | `/services/dumpster-rental-hudson-fl`              |
| dumpster rental land o lakes  | `/services/dumpster-rental-land-o-lakes-fl`        |
| dumpster rental wesley chapel | `/services/dumpster-rental-wesley-chapel-fl`       |
| dumpster rental spring hill   | `/services/dumpster-rental-spring-hill`            |
| dumpster rental odessa fl     | `/services/dumpster-rental-odessa-fl`              |
| dumpster rental dade city     | `/services/dumpster-rental-dade-city-fl`           |
| dumpster rental zephyrhills   | `/services/dumpster-rental-zephyrhills-fl`         |

### 3.3 Long-tail / informational (drive the blog)

- "how much does a dumpster rental cost in new port richey"
- "10 yard vs 20 yard dumpster"
- "do i need a permit for a dumpster in pasco county"
- "how big is a 20 yard dumpster"
- "what can you put in a rental dumpster florida"
- "how long can i keep a rental dumpster"
- "dumpster rental vs junk removal"
- "cheapest dumpster rental in pasco county"
- "weekend dumpster rental new port richey"
- "same day dumpster rental pasco county"

### 3.4 Neighborhood and adjacency terms (NPR hyper-local)

Target these inside body copy and an NPR neighborhood list section:

- Gulf Harbors, Jasmine Estates, Bayonet Point, Elfers, Moon Lake, Seven Springs, River Ridge, Beacon Square, Embassy Hills, Regency Park
- Adjacent cities used interchangeably: Port Richey, Holiday, Trinity, Hudson, Tarpon Springs

### 3.5 Action items

- [ ] Track all primary + secondary keywords in Google Search Console + a rank tracker (SERPWatcher, Semrush, or Ahrefs)
- [ ] Build a keyword → URL → H1 → title → meta description map (one row per target URL)
- [ ] Create dedicated pages for `/services/10-yard-dumpster-rental-new-port-richey-fl`, `/services/20-yard-dumpster-rental-new-port-richey-fl`, and `/services/dumpster-rental-port-richey-fl` (Port Richey is a distinct city from NPR and deserves its own page)

---

## 4. Google Business Profile (GBP)

**This is the single highest-ROI lever for local rankings.** The current GBP exists (4.9★ / 131+ reviews per schema). We need to make it dominant.

### 4.1 Profile optimization

- [ ] **Primary category:** `Dumpster rental service` (NOT "Waste management service" — more specific is better)
- [ ] **Secondary categories:** `Garbage dump service`, `Debris removal service`, `Junk removal service`, `Construction equipment rental`, `Demolition contractor` (only ones that actually fit)
- [ ] **Business name:** `Lupo Enterprises LLC` exactly as registered — do **not** keyword-stuff (e.g. "Lupo Enterprises LLC — Dumpster Rental New Port Richey") — that violates Google's guidelines and risks suspension. Use the Services + Description fields to inject keywords instead.
- [ ] **Address:** 5647 Andrea Dr, Holiday, FL 34690 — confirm this is publicly listed. If the address is a residence, hide it via "I deliver goods and services to my customers" setting and set a service area instead.
- [ ] **Service area:** Add every Pasco, Pinellas, and Hernando city the business serves (match the list in `llms.txt`). Max is 20 service areas.
- [ ] **Hours:** Mon–Sun 7:00 AM – 8:00 PM (match site / schema)
- [ ] **Phone:** (727) 317-6717 — must match site and all citations exactly
- [ ] **Website:** https://www.lupodumpsterrentals.com/ with UTM: `?utm_source=gbp&utm_medium=organic&utm_campaign=gbp_main`
- [ ] **Appointment URL:** https://www.lupodumpsterrentals.com/contact?utm_source=gbp&utm_medium=organic&utm_campaign=gbp_book
- [ ] **Description (750 chars):** Lead with "Lupo Enterprises LLC is a locally owned dumpster rental and junk removal company serving New Port Richey, Holiday, Trinity, Port Richey, and the wider Pasco County, FL area since 2020..." — include primary keywords naturally.
- [ ] **Services:** Create each service as a GBP "service" with its own description (dumpster rental, 10 yard dumpster rental, 15 yard dumpster rental, 20 yard dumpster rental, junk removal, hoarding cleanup, construction debris removal, appliance removal, garage cleanout, estate cleanout, mattress disposal, furniture removal, yard waste removal, bobcat service)
- [ ] **Products:** Add each dumpster size as a "product" with image, price range, and description
- [ ] **Attributes:** Check every relevant one (online appointments, same-day service, locally owned, veteran-led if applicable, LGBTQ-friendly, etc.)

### 4.2 Photos

- [ ] Upload at least 20 geotagged photos (EXIF GPS for New Port Richey / Pasco County)
- [ ] Include: logo, exterior/truck, interior of dumpsters, before/after cleanouts, team photos, dumpster at recognizable NPR landmarks
- [ ] Upload 2–4 new photos per month on an ongoing basis (freshness signal)
- [ ] Upload the hero video from `public/lupo-dumpster-rental.mp4` as a GBP video

### 4.3 Google Posts

- [ ] Publish 1 GBP post per week. Types:
  - **Offer** (monthly special, e.g. "$50 off 20-yard dumpster in New Port Richey — April only")
  - **Update** (service announcement, new truck, new service area)
  - **Event** (community cleanup, charity drive)
- [ ] Every post must include: a New Port Richey / Pasco County mention, the phone number, a CTA button, and a linked image

### 4.4 Q&A (Google-owned field)

- [ ] Seed 8–10 Q&A pairs proactively from the owner's account:
  - "Do you deliver dumpsters in New Port Richey?" → Yes, same-day delivery available 7 days a week. Call (727) 317-6717.
  - "How much is a 10 yard dumpster rental?" → Flat-rate pricing starting at $XXX. Call for a free quote.
  - "Do I need a permit for a dumpster in New Port Richey?" → Only if placed on a public street...
  - etc.

### 4.5 Reviews on GBP (critical — see section 12)

- [ ] Every customer gets a review-request SMS and email within 24 hours of service
- [ ] Target 5–10 new reviews per month (velocity matters as much as total count)
- [ ] Owner responds to every single review within 24 hours with a reply that mentions the city and service: _"Thank you, [Name]! It was a pleasure providing your dumpster rental in New Port Richey. We're glad the 20-yard trailer worked for your roofing project..."_

---

## 5. On-Page SEO — Metadata & Content

### 5.1 Title tag rules

**Formula:** `[Primary Keyword] in [City], FL | [Modifier] | Lupo Dumpster Rentals`

- 50–60 characters, never over 65 (Google truncates)
- Primary keyword at the front
- Brand at the end
- Include city for location pages, state abbreviation for disambiguation
- One page = one target keyword for the title

**Audit of current titles:**

| URL                                            | Current                                                        | Problem                             | Recommended                                        |
| ---------------------------------------------- | -------------------------------------------------------------- | ----------------------------------- | -------------------------------------------------- | ---------------------------------- |
| `/`                                            | "Pasco County Dumpster Rental Professionals"                   | No brand, no "FL", vague            | `Dumpster Rental in Pasco County, FL               | Lupo Dumpster Rentals`             |
| `/services/dumpster-rental-new-port-richey-fl` | "New Port Richey Dumpster Rental \| Affordable Dumpsters"      | No brand, no "FL"                   | `Dumpster Rental in New Port Richey, FL            | Lupo Enterprises`                  |
| `/services/junk-removal-new-port-richey-fl`    | (audit)                                                        | —                                   | `Junk Removal in New Port Richey, FL               | Lupo Dumpster Rentals`             |
| `/contact`                                     | "Contact Us Today \| Lupo Dumpster Rental New Port Richey, FL" | Good — keep                         | (keep)                                             |
| `/about-us`                                    | "About Us \| Lupo Dumpster Rental and Junk Removal"            | Could add city                      | `About Lupo Dumpster Rentals                       | Locally Owned in Pasco County, FL` |
| `/dumpster-rental-pricing`                     | "Lupo Dumpster Rental Pricing \| New Port Richey"              | Move keyword front                  | `Dumpster Rental Pricing in New Port Richey, FL    | Lupo`                              |
| `/service-locations`                           | "Services Locations \| Lupo Enterprises Dumpster Rentals"      | Typo ("Services" → "Service"), weak | `Dumpster Rental Service Areas in Pasco County, FL | Lupo`                              |

### 5.2 Meta description rules

- 140–160 characters
- Include primary keyword + city + a unique selling point + a call to action
- Each page must have a unique description (no duplicates across pages)
- Include phone number when space allows — it appears in some SERP variants

**Example for NPR page:**

> Need a dumpster rental in New Port Richey, FL? Lupo Enterprises delivers 10, 15, and 20-yard roll-off trailers same-day with flat-rate pricing. Call (727) 317-6717.

### 5.3 H1 rules

- Exactly one `<h1>` per page
- Must contain the primary keyword
- Must contain the city for location pages
- Should not duplicate the title tag verbatim, but overlap is fine

**Current NPR hero title:** `"Affordable Dumpster Rentals in New Port Richey, Florida"` — good. Keep.

### 5.4 URL rules

- All lowercase, hyphens only, short, descriptive
- Include primary keyword and city for location pages
- Avoid stop words (`and`, `the`, `in`) unless critical for meaning
- **Do not change existing URLs** unless absolutely necessary — link equity is lost. If you must change a URL, 301 redirect the old to the new.

**URL inconsistency found:**

- `/services/dumpster-rental-palm-harbor` (no `-fl`)
- `/services/dumpster-rental-pinellas-county` (no `-fl`)
- `/services/dumpster-rental-spring-hill` (no `-fl`)
- All other location URLs use `-fl` suffix

Standardize going forward but **do not rewrite** the above — they already have link equity. Just add both variants to the sitemap redirect list if you ever consolidate.

### 5.5 Canonical tags

- [ ] Every page must have `<link rel="canonical" href="https://www.lupodumpsterrentals.com/exact-path" />`
- [ ] Home page canonical is present ✅
- [ ] NPR service page canonical is present ✅
- [ ] Audit every other page — several are missing canonicals

### 5.6 Open Graph / social tags

Add to every page's `<Head>`:

```jsx
<meta property="og:type" content="website" />
<meta property="og:url" content="https://www.lupodumpsterrentals.com/[path]" />
<meta property="og:title" content="[Title]" />
<meta property="og:description" content="[Description]" />
<meta property="og:image" content="https://www.lupodumpsterrentals.com/dumpster-rental-pros.jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:site_name" content="Lupo Dumpster Rentals" />
<meta property="og:locale" content="en_US" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="[Title]" />
<meta name="twitter:description" content="[Description]" />
<meta name="twitter:image" content="https://www.lupodumpsterrentals.com/dumpster-rental-pros.jpg" />
```

Consider centralizing this in a `<Seo />` component that takes props (title, description, path, image) so every page just passes 3–4 props.

### 5.7 Image SEO

- [ ] Every `<img>` / `<Image>` must have a descriptive `alt` attribute (not just "dumpster" — use "10 yard dumpster rental in New Port Richey, FL")
- [ ] Filenames: rename critical images to keyword-rich filenames before upload (e.g. `dumpster-rental-new-port-richey-fl.jpg` instead of `dumpsterrental.png`)
- [ ] Convert large PNG/JPG to WebP/AVIF (Next's `<Image>` does this automatically — the problem is raw `<img>` tags in `about-us.jsx` etc. that bypass it)
- [ ] Compress: target <200 KB per image, <100 KB for above-the-fold hero
- [ ] Add explicit `width` and `height` to prevent CLS

### 5.8 Content depth

Top-ranking dumpster rental pages in Florida average 1,500–2,500 words. A quick audit of the NPR page: content is component-based and actually hits ~1,200–1,800 words depending on FAQ length — **close but not enough**.

Add these sections to the NPR page (and replicate pattern on all city pages):

1. **Intro** (150 words) — with keyword in first 100 characters
2. **Why choose Lupo in [City]** (150 words) — local-specific
3. **Dumpster sizes** (exists) ✅
4. **Pricing transparency block** (200 words) — top converter and top ranker
5. **How the rental process works** (exists) ✅
6. **Neighborhoods we serve in [City]** (100 words, keyword-rich) — new
7. **Common projects we see in [City]** (150 words) — existing section, expand with local examples
8. **What can / can't go in the dumpster** (exists) ✅
9. **Permits in [City]** (150 words) — new, unique content that Google loves
10. **Dumpster rental vs. junk removal — which do you need?** (200 words) — new, drives long-tail
11. **Service area map** (embed Google Map of the service area)
12. **FAQ** (exists, make city-specific) ✅
13. **Reviews from [City] customers** (200 words) — new, pull 3–5 reviews with reviewer location
14. **CTA + phone number** (exists) ✅

### 5.9 Action items

- [ ] Rewrite titles and meta descriptions per formula in 5.1 and 5.2 (all ~50 pages)
- [ ] Add Open Graph + Twitter Card tags to every page via a shared `<Seo>` component
- [ ] Audit and fix all missing canonicals
- [ ] Rename the top 20 most important images with keyword-rich filenames
- [x] Expand NPR and Pasco County home page content to include sections in 5.8 (#21 + #22 — `components/new/city-dumpster-page.jsx` + `lib/cities.js` now drive all 28 city/area pages with the full 14-section template)

---

## 6. Structured Data / Schema Audit

### 6.1 Current state

The site injects **five** JSON-LD schemas globally on every page via `pages/_app.js`:

- `LocationSchema` — hard-coded to "Pasco County Dumpster Rental Professionals"
- `FaqSchema` — hard-coded Pasco County FAQs (10 Q&As)
- `ServiceSchema` — OfferCatalog of services
- `OrganizationSchema` — Lupo Enterprises LLC
- `ReviewSchema` — currently commented out

Per-page schemas also exist — e.g. `components/new/LocationSchema.jsx` is used on `/services/dumpster-rental-new-port-richey-fl` with NPR-specific coords.

**Problems:**

1. **Duplicate `LocalBusiness` schemas** on NPR page — one global (Pasco), one page-specific (NPR). Google will pick one and may ignore the other; worst case it sees inconsistent data.
2. **Global FAQ schema fires on every page.** Google's guidance: FAQ rich results should only be used on pages that contain the actual FAQ content visible to users. Firing the same 10 Pasco FAQs on the NPR service page (which has its own FAQ section) is a mismatch that can trigger a manual action or suppression.
3. **Review stars schema is currently disabled.** With 131+ 4.9★ reviews, this is a massive lost opportunity for rich-result star ratings in SERPs (huge CTR lift).
4. **Breadcrumb schema is missing entirely.**
5. **Service pages don't have a proper `Product`/`Service`-specific schema** with `offers` including price.

### 6.2 Recommended schema architecture

**Global (every page) via `_app.js`:**

- `Organization` ✅ keep as-is
- `WebSite` (add — enables SERP sitelinks search box)

**Page-specific:**

- Home: `LocalBusiness` (Pasco-wide) + `WebSite`
- Each location page: `LocalBusiness` variant with city-specific `name`, `areaServed`, and `geo`, + `Service`
- Each service page: `Service` with `serviceType`, `provider`, `areaServed`
- Each blog post: `BlogPosting` with author, date, image
- Every page: `BreadcrumbList`
- Home + top-converting pages: `AggregateRating` (enable `ReviewSchema` — currently commented out in `_app.js` line 78)
- Every page with a visible FAQ section: `FAQPage` with the **actual** Q&As visible on that page (not the global one)

### 6.3 Breadcrumb schema

Add to every non-home page:

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.lupodumpsterrentals.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://www.lupodumpsterrentals.com/services"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Dumpster Rental in New Port Richey, FL",
      "item": "https://www.lupodumpsterrentals.com/services/dumpster-rental-new-port-richey-fl"
    }
  ]
}
```

And add visible breadcrumbs at the top of every page (Google likes when schema matches visible content).

### 6.4 Action items

- [x] Move `LocationSchema` and `FaqSchema` out of `_app.js` (remove from global render) — #23, #24
- [x] Keep `Organization`, add `WebSite`, globally — #26 (`components/website-schema.jsx`)
- [x] On each location page, inject its own `LocalBusiness` + `Service` schema with correct city `name`, `geo`, `areaServed` — #27 (28 city pages, each with own `@id`, city-specific geo/areaServed/makesOffer)
- [x] On each page with a visible FAQ section, inject a `FAQPage` schema with **only that page's FAQs** — #28 (city pages via `FaqSection`, home via `components/new/faq.jsx`)
- [x] Create a `BreadcrumbList` schema component, add to every page — #29, #30 (`components/Breadcrumbs.jsx` rendered below the hero on every non-home page via `CityDumpsterPage`, `Bloglayout`, and per-page includes; emits JSON-LD + visible trail on all ~73 routes)
- [x] Re-enable `ReviewSchema` / `AggregateRating` on the home page and on high-converting service pages — #25 (home done; service pages TODO)
- [ ] Validate every schema with https://validator.schema.org/ and https://search.google.com/test/rich-results

---

## 7. Technical SEO

### 7.1 Sitemap

**Problems with current `/public/sitemap.xml`:**

- Every URL has the identical `lastmod` (`2026-01-28`) — a spam signal
- Missing pages: `/services` (index), `/facebook-offer`, `/thank-you` (should be `noindex`), most `/services/*` location pages listed in the footer but not the sitemap
- Missing all blog posts (only 8 listed, but there are 9)
- Static file — won't update when new pages are added

**Fix:** Generate the sitemap dynamically at build time.

Option A — use `next-sitemap`:

```bash
npm install --save-dev next-sitemap
```

Create `next-sitemap.config.js`:

```js
module.exports = {
  siteUrl: "https://www.lupodumpsterrentals.com",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ["/thank-you", "/api/*", "/facebook-offer"],
  transform: async (config, path) => {
    // Higher priority for home and city hubs
    let priority = 0.7;
    if (path === "/") priority = 1.0;
    if (path.startsWith("/services/dumpster-rental-new-port-richey"))
      priority = 0.9;
    if (path.startsWith("/services/")) priority = 0.8;
    return {
      loc: path,
      changefreq: "weekly",
      priority,
      lastmod: new Date().toISOString(),
    };
  },
};
```

Add to `package.json` scripts:

```json
"postbuild": "next-sitemap"
```

### 7.2 robots.txt

Current is fine but can be stronger. Add:

```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /thank-you
Disallow: /_next/
Disallow: /*?utm_

Sitemap: https://www.lupodumpsterrentals.com/sitemap.xml
```

### 7.3 noindex the right pages

- `/thank-you` — must be `noindex` (currently crawlable), it's a conversion page, not an SEO page
- `/facebook-offer` — `noindex` (it's an ad landing page, not meant for organic)
- Any duplicate / legacy pages from A/B tests — `noindex`

Implementation in the page's `<Head>`:

```jsx
<meta name="robots" content="noindex, nofollow" />
```

### 7.4 Redirects

Audit for and 301 redirect:

- `http://` → `https://`
- Non-www → www (or vice versa — pick one canonical host; currently the canonicals use `www`, so stick with that)
- Trailing slashes — pick one (Next default is no trailing slash; enforce it)
- Old URL variations (e.g. any blog URL with capital letters)

Add to `next.config.mjs`:

```js
async redirects() {
  return [
    { source: "/:path*", has: [{ type: "host", value: "lupodumpsterrentals.com" }], destination: "https://www.lupodumpsterrentals.com/:path*", permanent: true },
  ];
}
```

### 7.5 404 handling

- [ ] Audit for broken internal links (in `components/new/navbar.jsx`, the About Us and Contact links are `href="#"` — broken)
- [ ] Create a custom `pages/404.jsx` with a keyword-rich search box and links to top pages
- [ ] Monitor 404s in Search Console weekly

### 7.6 Indexing

- [ ] Submit the sitemap in Google Search Console and Bing Webmaster Tools
- [ ] For any page not getting indexed after 2 weeks, request indexing manually in GSC
- [ ] Check **Coverage → Valid / Error / Excluded** reports weekly

### 7.7 Mobile-first

- [ ] Run every top-priority page through Google Mobile-Friendly Test
- [ ] Ensure the phone number is tappable (uses `href="tel:"`) ✅ (already correct in navbar)
- [ ] No horizontal scroll on any viewport
- [ ] Tap targets ≥ 48×48 px

### 7.8 HTTPS / Security

- [ ] HTTPS enforced ✅ (Vercel default)
- [ ] HSTS header enabled (verify via securityheaders.com)
- [ ] Mixed-content warnings: none (verify with browser devtools on every page)

### 7.9 Action items

- [x] Replace static `/public/sitemap.xml` with `next-sitemap` — #34, #35, #36 (`next-sitemap.config.js` + `postbuild` script; 72 URLs with per-URL ISO `lastmod` and a priority ladder: home 1.0, NPR hub 0.9, blog index 0.9, `/services/*` 0.8, rest 0.7)
- [x] Update `/public/robots.txt` per 7.2 — #37 (added `Disallow: /thank-you`, `/_next/`, `/*?utm_`, `Sitemap:` directive)
- [x] `noindex` `/thank-you` and `/facebook-offer` — #37 (page-level `<meta name="robots" content="noindex, nofollow" key="robots" />` overrides the global `index,follow` via `next/head` dedupe key)
- [ ] Fix broken `href="#"` links in `components/new/navbar.jsx`
- [ ] Create custom 404 page
- [ ] Enforce www canonical in `next.config.mjs`

---

## 8. Internal Linking Architecture

Internal links pass relevance and authority. A well-linked page ranks dramatically better than an orphaned page. Today, the site has many pages but weak inter-linking.

### 8.1 Hub-and-spoke model

**Hub:** `/services/dumpster-rental-new-port-richey-fl` (primary money page)
**Spokes:** Every related page that should link back to it.

**Every page that should link to the NPR hub:**

- Home (`/`) — anchor text: "dumpster rental in New Port Richey, FL"
- `/services/junk-removal-new-port-richey-fl` — cross-link
- `/services/junk-removal-port-richey` — cross-link
- Every adjacent city page (Holiday, Trinity, Port Richey, Hudson, Tarpon Springs) — "Also serving nearby New Port Richey"
- Every service page (appliance-removal, construction-debris-removal, hoarding-cleanup, etc.) — "We provide this service in New Port Richey and across Pasco County"
- Blog posts — contextual link within body copy when NPR is mentioned
- Footer → already links to NPR ✅
- Navbar → add a "Service Areas" dropdown with NPR prominent

**Every page that NPR should link to:**

- Home
- `/services/junk-removal-new-port-richey-fl` (complementary service)
- Adjacent cities (Holiday, Trinity, Port Richey, Hudson)
- Relevant blog posts (roll-off size guide, how to rent a dumpster, estate cleanout)
- Pricing page
- Contact page

### 8.2 Anchor text rules

- **Vary** anchor text — don't repeat the exact match 10 times on the same page; Google penalizes exact-match spam
- Mix: exact match, partial match, branded, naked URL, generic
  - Exact: "dumpster rental new port richey"
  - Partial: "new port richey dumpster services"
  - Branded: "Lupo Dumpster Rentals"
  - Descriptive: "our New Port Richey service page"
- **Never** use "click here" or "learn more" as the only anchor text to an important page

### 8.3 Link depth

Every important page should be reachable from the home page in **≤ 3 clicks**. Audit path:

- `/` → NPR = 1 click (via footer) ✅
- `/` → Junk Removal NPR = 2 clicks (via services index, if linked) — verify
- `/` → blog post = 2 clicks (home → blog → post) ✅

### 8.4 Service area cross-linking block

Add a component `ServiceAreaNearby` that each city page renders, linking to the 4–6 closest cities:

```jsx
// On New Port Richey page:
<ServiceAreaNearby
  currentCity="New Port Richey"
  nearby={[
    { name: "Holiday", href: "/services/dumpster-rental-holiday-fl" },
    { name: "Port Richey", href: "/services/dumpster-rental-port-richey-fl" },
    { name: "Trinity", href: "/services/dumpster-rental-trinity-fl" },
    { name: "Hudson", href: "/services/dumpster-rental-hudson-fl" },
    { name: "Odessa", href: "/services/dumpster-rental-odessa-fl" },
    {
      name: "Land O' Lakes",
      href: "/services/dumpster-rental-land-o-lakes-fl",
    },
  ]}
/>
```

### 8.5 Service cross-linking block

On every city page, add a "Other services in [City]" section linking to:

- Junk Removal in [City]
- Construction Debris Removal
- Hoarding Cleanup
- Appliance Removal
- Garage Cleanout
- etc.

### 8.6 Breadcrumbs (visible)

Visible breadcrumbs serve both users and SEO. Add them to every page except home:

`Home > Services > Dumpster Rental in New Port Richey, FL`

Pair with the `BreadcrumbList` schema from section 6.3.

**Placement:** render **below** each page's hero, not above it. The breadcrumb is now rendered by each page/template (`CityDumpsterPage`, `Bloglayout`, and every non-city service/top-level page) rather than auto-injected under the navbar. This keeps the hero as the first above-the-fold element and positions the breadcrumb where users expect it once they scroll into page content.

### 8.7 Action items

- [ ] Audit every page for links **to** NPR and Pasco County hub pages (use Screaming Frog)
- [x] Build `ServiceAreaNearby` component and add to every city page — #44, #45 (`components/new/service-area-nearby.jsx` + `getNearbyLinks()` helper in `lib/cities.js`; 90 descriptive cross-links generated across 28 city pages, unmatched names silently skipped so no broken internal links)
- [x] Build a visible `Breadcrumbs` component, add to every non-home page — #29, #30 (`components/Breadcrumbs.jsx` rendered **below each page's hero** by `CityDumpsterPage`, `Bloglayout`, and every top-level / non-city service page; covers ~73 routes)
- [ ] Fix `href="#"` in navbar (About Us, Contact)
- [ ] Add a "Service Areas" megamenu / dropdown in the navbar listing the top 10 cities
- [ ] Pick a "Related Articles" widget for blog posts linking to 2–3 other posts + 1–2 service pages

---

## 9. Content Strategy & Editorial Calendar

### 9.1 Content gaps to fill

New pages to build (in priority order):

1. **`/services/dumpster-rental-port-richey-fl`** — Port Richey is a separate city from NPR; we only have junk removal for it today
2. **`/services/10-yard-dumpster-rental`** + **`/services/20-yard-dumpster-rental`** — size-specific landing pages already partially exist but can be expanded and localized
3. **`/neighborhoods/new-port-richey/[neighborhood]`** — one page per NPR neighborhood (Gulf Harbors, Bayonet Point, Elfers, Jasmine Estates, Moon Lake, Seven Springs). Micro-targeted, high-conversion.
4. **`/industries/roofers`**, **`/industries/contractors`**, **`/industries/realtors`**, **`/industries/property-managers`** — vertical landing pages
5. **`/pricing`** — currently at `/dumpster-rental-pricing`, consider a shorter canonical URL + real price tables (even if "starting at" — transparent pricing ranks)

### 9.2 Blog editorial calendar (1 post every 2 weeks)

Quarter 1 (April–June 2026):

| Week | Post                                                         | Primary Keyword                      | Target Length |
| ---- | ------------------------------------------------------------ | ------------------------------------ | ------------- |
| 1    | How Much Does a Dumpster Rental Cost in New Port Richey, FL? | dumpster rental cost new port richey | 2,000         |
| 3    | Do You Need a Permit for a Dumpster in Pasco County?         | dumpster permit pasco county         | 1,500         |
| 5    | 10 Yard vs 20 Yard Dumpster — Which Size Do You Need?        | 10 yard vs 20 yard dumpster          | 1,800         |
| 7    | How Long Can You Keep a Rental Dumpster?                     | dumpster rental duration             | 1,200         |
| 9    | Best Dumpster Rental Companies in Pasco County (2026 Guide)  | best dumpster rental pasco county    | 2,500         |
| 11   | What Can and Cannot Go in a Rental Dumpster in Florida?      | dumpster disposal rules florida      | 1,500         |

Each post must:

- Target one primary keyword
- Include the keyword in title, H1, first paragraph, meta description, URL, and at least one H2
- Link internally to the NPR service page AND 2–3 other relevant pages
- Include at least one original image (ideally from a real Lupo job)
- Have `BlogPosting` schema — #31 (auto-emitted by `components/Bloglayout.jsx` with author "Alex Lupo", publisher ref, datePublished, image, mainEntityOfPage)
- Link back to the contact page with a CTA
- Be authored by "Alex Lupo" (use `author` schema → build authority/E-E-A-T)

### 9.3 E-E-A-T signals

Google prioritizes **Experience, Expertise, Authoritativeness, Trustworthiness**. Signals we can add:

- [ ] Bylines on every blog post (`by Alex Lupo, Owner of Lupo Enterprises LLC`)
- [ ] `/about-us` with a detailed founder bio, photo, years in business, licenses
- [ ] LinkedIn profile for Alex Lupo, linked from the site
- [ ] "As seen on" / press mentions section (if any exist — local Tampa Bay Times, Patch, etc.)
- [ ] Certifications and licenses displayed prominently (already shows `LIC #L20000153106` ✅)
- [ ] Insurance info visible
- [ ] BBB accreditation badge (if applicable)

### 9.4 Action items

- [ ] Build the 5 priority new pages in section 9.1
- [ ] Publish 1 blog post per 2 weeks per the calendar
- [ ] Add author bylines and bio page for Alex Lupo
- [ ] Add license + insurance info to footer

---

## 10. Off-Page / Backlinks / Citations

### 10.1 Citations (NAP listings)

A **citation** is any mention of Name + Address + Phone across the web. Consistency across 40–60 trusted directories is a major local pack signal.

**Top-tier citations — must claim:**

- [ ] Google Business Profile ✅ (already exists)
- [ ] Bing Places for Business
- [ ] Apple Business Connect
- [ ] Facebook Business Page (exists — https://www.facebook.com/LupoLLC)
- [ ] Instagram (exists)
- [ ] Yelp
- [ ] Better Business Bureau (BBB)
- [ ] Angi (formerly Angie's List)
- [ ] HomeAdvisor
- [ ] Thumbtack
- [ ] Nextdoor (local — extremely valuable for NPR)
- [ ] Nicelocal
- [ ] MapQuest
- [ ] Foursquare
- [ ] Yellow Pages
- [ ] Superpages
- [ ] Manta
- [ ] Chamber of Commerce — West Pasco Chamber of Commerce + Tampa Bay Chamber
- [ ] Local.com
- [ ] Cylex
- [ ] Hotfrog
- [ ] Brownbook
- [ ] Tupalo

**Industry-specific:**

- [ ] DumpstersHQ directory
- [ ] JunkRemovalPros directory
- [ ] Hometown Demolition directory
- [ ] BuildZoom

**Critical:** Every citation uses the **exact** NAP:

```
Name:    Lupo Enterprises LLC
Address: 5647 Andrea Dr, Holiday, FL 34690
Phone:   (727) 317-6717
Website: https://www.lupodumpsterrentals.com
```

Run a NAP audit through Moz Local or BrightLocal to find and correct inconsistencies. One inconsistency that exists today: the Instagram uses `lupodumpsterrentals` but the business is registered as Lupo Enterprises LLC — brand consistency matters.

### 10.2 Backlink strategy

Backlinks from **locally relevant** sites beat high-DR but irrelevant sites for local SEO.

**Tier 1 — highest value, highest effort:**

- Local news: Tampa Bay Times, Patch (NewPortRichey.Patch.com), ABC Action News — pitch a story ("Family-owned Pasco County dumpster company gives back to community")
- Pasco County government — if there's a small business directory
- West Pasco Chamber of Commerce — membership + directory listing
- Tampa Bay Business Journal

**Tier 2 — partnerships (HIGH ROI, relatively easy):**

- Local roofers — barter: we give them priority scheduling, they add us to their "recommended vendors" page
- Real estate agents — estate cleanout referrals, backlink from their "trusted vendors" pages
- Property management companies — ongoing relationship, link from their "tenant resources" page
- Moving companies — bi-directional referrals
- General contractors & remodelers
- HOAs — offer a discount to HOA members, ask for inclusion on their community resources page
- Local charities Lupo supports — link from "sponsors" page

**Tier 3 — content-driven:**

- Guest posts on home improvement / renovation blogs
- Local "best of" roundups (pitch to Tampa Bay area bloggers)
- Scholarships, community grants → .edu links (consider a yearly $500 Pasco County student cleanup scholarship)
- HARO (Help A Reporter Out) — respond to journalist queries about waste management, home renovation
- Press releases when launching new services or reaching milestones (1,000 cleanups, 5 years in business, etc.)

**Tier 4 — lower value but easy wins:**

- Vendor and supplier sites (trailer manufacturer, uniform supplier — ask for a "customer spotlight" link)
- Industry association memberships

### 10.3 Brand mentions (unlinked)

Google counts unlinked brand mentions as a trust signal. Every citation, every press mention, every social post that mentions "Lupo Dumpster Rentals" helps even without a link. Monitor via Google Alerts for "Lupo Enterprises" and "Lupo Dumpster".

### 10.4 Action items

- [ ] Submit to the top 20 citation sites in section 10.1 (use a single canonical NAP)
- [ ] Run a BrightLocal or Whitespark NAP audit to find inconsistencies
- [ ] Build a partnership list of 20 local roofers / contractors / realtors; reach out for reciprocal links
- [ ] Join West Pasco Chamber of Commerce
- [ ] Set up Google Alerts for brand monitoring

---

## 11. Core Web Vitals & Page Speed

Google uses CWV as a ranking factor, especially for mobile. Current state is unknown — run an audit first.

### 11.1 Measure

- [ ] Run every top-priority page through [PageSpeed Insights](https://pagespeed.web.dev/)
- [ ] Field data from Google Search Console → Core Web Vitals report
- [ ] Real User Monitoring — already have Vercel Analytics ✅

**Targets:**

- LCP (Largest Contentful Paint): ≤ 2.5s
- INP (Interaction to Next Paint): ≤ 200ms
- CLS (Cumulative Layout Shift): ≤ 0.1
- TTFB: ≤ 800ms
- Mobile PageSpeed score: ≥ 85

### 11.2 Likely issues (based on code review)

1. **Component bloat.** `components/` contains ~55 legacy components (many variants kept for A/B tests). Tree-shaking should remove unused ones, but some are still imported on every page via `_app.js` and individual pages pull in `<Calltoaction>`, `<Featuredlist>`, etc. even when unused (see commented-out imports in `index.jsx` that are still imported at the top).
2. **Raw `<img>` tags** bypass Next's image optimization (`about-us.jsx` uses `<img src="/alex-lupo.png">` — serves the full-resolution file).
3. **Hero video** (`public/lupo-dumpster-rental.mp4`) — if used on mobile, it's likely huge. Lazy-load it, serve a poster image, and cap mobile bitrate.
4. **No `priority` on above-the-fold images** — Next's `<Image>` needs `priority` for LCP elements.
5. **Third-party scripts loaded early:** Facebook Pixel is `beforeInteractive` — this blocks rendering. Move to `afterInteractive` or `lazyOnload`.
6. **All schemas injected inline** — small impact, but consolidating reduces DOM size.

### 11.3 Fixes

- [ ] Delete unused legacy components (anything commented out in `index.jsx`, `_app.js`, etc.)
- [ ] Replace every raw `<img>` tag with `next/image`
- [ ] Add `priority` prop to hero images
- [ ] Set `loading="lazy"` on all below-the-fold images
- [ ] Change Facebook Pixel strategy from `beforeInteractive` to `afterInteractive` in `_app.js` line 30
- [ ] Defer Hotjar until after first user interaction
- [ ] Use `next/dynamic` to code-split heavy components (testimonials marquee, comparison table, FAQ accordion)
- [ ] Audit bundle with `@next/bundle-analyzer` — target initial JS < 200 KB gzipped
- [ ] Preload the hero font (`<link rel="preload" as="font">`) to avoid FOIT
- [ ] Compress all images under `/public/` (convert PNGs to WebP where possible)

### 11.4 Action items

- [ ] Run PageSpeed audit on home, NPR, pricing, contact
- [ ] Delete all commented-out legacy components from pages
- [ ] Convert all `<img>` → `<Image>`
- [ ] Change script loading strategies per 11.3
- [ ] Set a Core Web Vitals budget and monitor monthly via Vercel Analytics

---

## 12. Reviews & Reputation Management

Reviews are in the top-3 ranking factors for local pack. Current state: **4.9★ with 131+ reviews** (per schema). Target: **200+ reviews by end of year, with velocity of 5–10/month**.

### 12.1 Review acquisition

- [ ] **Auto-request after every job.** Set up Zapier (already integrated) to send a review-request SMS + email 24 hours after service completion. Link directly to the Google review form.
- [ ] **Make it easy.** Print QR codes on invoices that go straight to the Google review page.
- [ ] **Ask in person.** Drivers are trained to ask happy customers while on-site.
- [ ] **Follow-up.** If no review after 5 days, send a friendly follow-up email.
- [ ] **Diversify platforms.** Also request reviews on Facebook, Yelp, BBB (weighted: 70% Google, 20% Facebook, 10% others).

### 12.2 Review content matters

Google reads review text. Reviews that mention:

- The city ("great dumpster rental in **New Port Richey**")
- The service ("the **20 yard dumpster** was perfect for our roof tear-off")
- The experience ("fast delivery, fair price, professional driver")

...boost rankings for those exact queries. Train the team to prompt customers subtly: _"If you have a minute for a review, we'd really appreciate it — mentioning your project and city helps other folks find us."_

### 12.3 Review responses

**Every** review gets a response within 24 hours:

- **5-star:** Thank the customer by name, mention the city and service, invite them back.
- **4-star:** Thank them, acknowledge anything they flagged, offer to make it right.
- **1–3 star:** Respond calmly, apologize, take it offline. A professional response to a negative review actually builds trust.

**Example:**

> Thank you, [Name]! We're thrilled the 20-yard dumpster worked out for your roofing project in New Port Richey. It was a pleasure serving you — give us a call at (727) 317-6717 whenever you need a dumpster rental again!

### 12.4 Display reviews on-site

- [ ] Pull real Google reviews into the Testimonials section (use a widget or manual import)
- [ ] Add review content + schema `Review` markup on the home page and service pages
- [ ] Include city in displayed review snippets where possible

### 12.5 Action items

- [ ] Set up automated review-request workflow (Zapier → SMS via Twilio or similar, email via SendGrid)
- [ ] Print QR-code flyers for trucks and invoices
- [ ] Re-enable `ReviewSchema` with live reviews on home page (`_app.js` line 78)
- [ ] Respond to every review within 24 hours

---

## 13. Measurement, Tracking & KPIs

### 13.1 Tools to install / verify

- [x] Google Analytics 4 (`G-V0GLH72P5Z`) ✅
- [x] Google Ads conversion tracking ✅
- [x] Meta Pixel ✅
- [x] Hotjar ✅
- [x] Vercel Analytics ✅
- [ ] Google Search Console — verify property is claimed, sitemap submitted, all pages indexed
- [ ] Bing Webmaster Tools — claim + submit sitemap
- [ ] Rank tracker — SERPWatcher, Ahrefs, or Semrush (track 30–50 keywords weekly)
- [ ] Call tracking — consider CallRail to attribute phone conversions to specific channels/keywords

### 13.2 KPIs to track monthly

| KPI                                 | Source                | Target (12 mo)            |
| ----------------------------------- | --------------------- | ------------------------- |
| Organic sessions                    | GA4                   | +150%                     |
| Organic leads (form submits)        | GA4 events            | +150%                     |
| Phone call leads                    | CallRail / Google Ads | +100%                     |
| Google Business Profile views       | GBP Insights          | +80%                      |
| GBP direction requests              | GBP Insights          | +80%                      |
| GBP website clicks                  | GBP Insights          | +80%                      |
| Google review count                 | GBP                   | 200+                      |
| Average review rating               | GBP                   | Maintain ≥ 4.8            |
| #1 rankings (primary keywords)      | Rank tracker          | 15+                       |
| Top-3 rankings (primary keywords)   | Rank tracker          | 30+                       |
| Domain Rating / Authority           | Ahrefs / Moz          | +10 points                |
| Total backlinks (referring domains) | Ahrefs                | +50 new referring domains |
| Local citations                     | BrightLocal           | 40+                       |

### 13.3 Conversion tracking events

Ensure GA4 tracks (as conversions):

- Form submission (sendinfo success)
- Phone click (`tel:` link click)
- Quote button click
- Scroll 75% (engagement proxy)

### 13.4 Monthly reporting template

Include in a single monthly SEO report:

1. Rankings movement (top 30 keywords with delta)
2. Organic traffic and leads (MoM and YoY)
3. GBP metrics (views, clicks, calls, direction requests)
4. New reviews added (with average rating)
5. New backlinks acquired
6. New citations built
7. New content published
8. CWV scores
9. Next month's priorities

---

## 14. 30-60-90 Day Execution Plan

### First 30 days — foundation and quick wins

**Week 1:**

- [ ] Claim/verify Google Search Console + Bing Webmaster Tools
- [ ] Audit GBP and complete every field per section 4
- [ ] Fix broken `href="#"` links in `components/new/navbar.jsx`
- [ ] `noindex` thank-you and facebook-offer pages
- [ ] Canonical NAP document; audit top 10 citations

**Week 2:**

- [ ] Rewrite titles + meta descriptions on home, NPR, junk removal NPR, contact, pricing, about-us
- [ ] Re-enable `ReviewSchema` on home
- [ ] Remove global `FaqSchema` from `_app.js`; keep it only on pages with visible FAQ
- [ ] Replace static sitemap with `next-sitemap`

**Week 3:**

- [ ] Build `<Seo>` shared component for OG/Twitter tags
- [ ] Build `<Breadcrumbs>` component (visible + schema)
- [ ] Build `<ServiceAreaNearby>` component
- [ ] Run Lighthouse audit, document CWV baseline

**Week 4:**

- [x] Expand NPR page to hit 1,800+ words with sections from 5.8 (#21 — shared 14-section template applied; NPR now ~2,500+ words)
- [ ] Publish first new blog post ("How Much Does a Dumpster Rental Cost in New Port Richey, FL?")
- [ ] Set up automated review-request flow

### Days 31–60 — content and authority

- [ ] Apply new title/meta/schema patterns to all 50+ pages
- [ ] Build new pages: `/services/dumpster-rental-port-richey-fl`, size-specific NPR pages
- [ ] Submit to 20 citation sites
- [ ] Begin partnership outreach (10 local roofers + 10 realtors)
- [ ] Delete/archive legacy unused components
- [ ] Convert all raw `<img>` tags to `next/image`
- [ ] Publish blog posts 2 and 3
- [ ] Respond to every GBP review; start posting weekly GBP updates

### Days 61–90 — acceleration

- [ ] Build neighborhood pages for NPR (Gulf Harbors, Bayonet Point, Elfers, Jasmine Estates)
- [ ] Build industry pages (Roofers, Contractors, Realtors, Property Managers)
- [ ] Launch first press pitch / PR outreach
- [ ] Reach 40 total citations
- [ ] Reach 15 net-new reviews
- [ ] Publish blog posts 4, 5, 6
- [ ] Run full rankings report and adjust priorities based on what's moving

---

## 15. Specific File-Level Action Items

Direct, code-referenced fixes for the current repo:

### `pages/_app.js`

```22:95:pages/_app.js
export default function App({ Component, pageProps }) {
```

- [ ] Line 30: change Facebook Pixel `strategy="beforeInteractive"` → `"afterInteractive"` (blocks render today)
- [ ] Line 58: change Hotjar `strategy="afterInteractive"` → `"lazyOnload"` (non-critical third-party)
- [ ] Line 75: remove `<LocationSchema />` — move to per-page render so each page's schema matches its content
- [ ] Line 76: remove `<FaqSchema />` — move to per-page (only pages with visible FAQ)
- [ ] Line 78: uncomment `<ReviewSchema />` on home page only (or gate it with a per-page prop)
- [ ] Add a global `<WebSite>` schema component for SERP sitelinks search box

### `components/Navitem.jsx` (live navbar)

Mounted as `LupoNavbar` in `pages/_app.js`. Desktop and mobile `About Us` and `Contact` links already route correctly to `/about-us` and `/contact`. Service Locations + Services dropdowns are present.

Remaining ideas (not blockers):

- [ ] Add a "Pricing" top-level link or move it into Services
- [ ] Consider a "Blog" link in the desktop nav
- [ ] Replace raw `<img src="/logo.svg">` on line ~138 with `next/image` (perf item #66)

### `components/Footer.jsx` (live footer)

Mounted from `pages/_app.js`. All solutions / support / company / location links route to real pages. Facebook, Instagram, and phone links are all valid.

Remaining items:

- [x] Reconciled to canonical `a.lupollc@gmail.com` across `Footer.jsx`, `Contact.jsx`, `ContactHero.jsx`, `Contactwhite.jsx`, `public/llms.txt`, and `README.md`.
- [ ] Add `email: "a.lupollc@gmail.com"` to `organization-schema.jsx` and `LocationSchema.jsx` so NAP+email is reinforced in structured data.
- [ ] Consider adding the "All Services" link explicitly (the `solutions` array already has one but verify it shows)
- [ ] Replace raw `<img src="/logo3.svg">` on line ~172 with `next/image`

### ~~`components/new/navbar.jsx`~~ · ~~`components/new/footer.jsx`~~

Both files were unused dead code that the audit originally flagged as broken. **Deleted** — do not recreate. The live components above are the only ones that matter.

### `public/sitemap.xml`

- [ ] Replace with dynamic generation via `next-sitemap`
- [ ] Every URL should have a real, per-page `lastmod`
- [ ] Add missing URLs: all remaining blog posts, all `/services/*` pages, `/facebook-offer` (if kept indexable), `/services` index

### `public/robots.txt`

- [ ] Update per section 7.2

### `pages/thank-you.jsx`

- [ ] Add `<meta name="robots" content="noindex, nofollow" />` to `<Head>`

### `pages/index.jsx`

```100:122:pages/index.jsx
        <title>Pasco County Dumpster Rental Professionals</title>
```

- [ ] Line 101: change title to `Dumpster Rental in Pasco County, FL | Lupo Dumpster Rentals` (brand at end, "FL" included)
- [ ] Line 108: canonical already correct ✅
- [ ] Add Open Graph image and tags
- [ ] Remove commented-out imports on lines 2–27 (dead code affecting bundle)

### `pages/services/dumpster-rental-new-port-richey-fl.jsx`

```92:95:pages/services/dumpster-rental-new-port-richey-fl.jsx
const metatitle = "New Port Richey Dumpster Rental | Affordable Dumpsters";
const description =
  "Fast and affordable dumpster rental in New Port Richey, FL by Lupo Enterprises. Choose from 10, 15, and 20-yard dumpster sizes with same-day delivery.";
```

- [ ] Change title to `Dumpster Rental in New Port Richey, FL | Lupo Enterprises` (clearer, brand explicit)
- [ ] Description is OK (170 chars — trim to 155)
- [ ] Keywords meta tag on line 104 — not used by Google, but not harmful. Can keep.
- [ ] Add a **visible** `<Breadcrumbs>` block + `BreadcrumbList` schema
- [ ] Add `<ServiceAreaNearby>` block
- [ ] Add neighborhoods section for NPR
- [ ] Add permits / regulations paragraph specific to NPR

### `components/LocationSchema.jsx` (global version)

- [ ] Either move to home page only, OR update dynamically based on route
- [ ] Today it hardcodes "Pasco County" on every page → conflicts on city pages

### `components/faq-schema.jsx`

- [ ] Stop rendering globally
- [ ] Accept `faqs` prop and render only on pages with visible FAQ matching the prop

### `components/organization-schema.jsx`

- [ ] Update review count dynamically (hard-coded `131` today — will become stale)
- [ ] Keep globally ✅

### `pages/_document.js`

- [ ] Add `<link rel="preconnect" href="https://www.google-analytics.com" />`
- [ ] Add `<link rel="preconnect" href="https://www.googletagmanager.com" />`
- [ ] Add `<link rel="dns-prefetch" href="https://connect.facebook.net" />`

---

## Appendix A — Target Keywords Master List

Paste into your rank tracker:

**Priority 1 (New Port Richey):**

```
dumpster rental new port richey
dumpster rental new port richey fl
new port richey dumpster rental
junk removal new port richey
junk removal new port richey fl
roll off dumpster new port richey
10 yard dumpster new port richey
20 yard dumpster new port richey
dumpster rental near me
dumpster rental near me new port richey
```

**Priority 2 (Pasco County + neighbors):**

```
dumpster rental pasco county
dumpster rental holiday fl
dumpster rental port richey
dumpster rental trinity fl
dumpster rental hudson fl
dumpster rental land o lakes
dumpster rental wesley chapel
dumpster rental spring hill
dumpster rental odessa fl
dumpster rental lutz fl
dumpster rental dade city
dumpster rental zephyrhills
dumpster rental palm harbor
dumpster rental clearwater fl
```

**Priority 3 (Long-tail / informational):**

```
how much does a dumpster rental cost in new port richey
do i need a permit for a dumpster in pasco county
10 yard vs 20 yard dumpster
same day dumpster rental pasco county
weekend dumpster rental new port richey
cheapest dumpster rental pasco county
what can i put in a rental dumpster florida
how big is a 20 yard dumpster
best dumpster rental company pasco county
dumpster rental vs junk removal
```

---

## Appendix B — Tools Stack Summary

| Purpose                          | Tool                      | Priority          | Cost            |
| -------------------------------- | ------------------------- | ----------------- | --------------- |
| Crawling / site audit            | Screaming Frog            | Must have         | Free ≤ 500 URLs |
| Keyword research + rank tracking | Ahrefs or Semrush         | Must have         | $99–$129/mo     |
| Local SEO audit                  | BrightLocal               | Recommended       | $39/mo          |
| Search Console                   | Google                    | Must have         | Free            |
| Analytics                        | GA4 + Vercel Analytics    | Already set up ✅ | Free            |
| Call tracking                    | CallRail                  | Recommended       | $45/mo          |
| Heatmaps                         | Hotjar                    | Already set up ✅ | Free tier       |
| Schema validation                | validator.schema.org      | Must have         | Free            |
| Core Web Vitals                  | PageSpeed Insights        | Must have         | Free            |
| Review management                | GMB + Podium (optional)   | Recommended       | Podium $289/mo  |
| NAP / citation management        | Whitespark or BrightLocal | Recommended       | $20–$40/mo      |

---

**Owner:** Next review cadence — weekly for the first 90 days, then monthly. Every completed checkbox above is a ranking signal. Stack them, and NPR / Pasco County #1 is a realistic 6–9 month target.

---

## Appendix C — Master Status Tracker

Single-source-of-truth for every recommendation in this document. Update the **Status** column as work progresses. The **Ref** column links back to the relevant section so you can re-read the full context without scrolling.

**Status legend:** `[ ]` Open · `[x]` Complete

### C.1 Foundation & Quick Wins (Week 1–2)

| Status | #   | Task                                                                                                                                                   | Impact   | Effort | Ref                                                          |
| ------ | --- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- | ------ | ------------------------------------------------------------ |
| [x]    | 1   | Claim/verify Google Search Console                                                                                                                     | Critical | XS     | [§7.6](#77-indexing), [§13.1](#131-tools-to-install--verify) |
| [x]    | 2   | Claim/verify Bing Webmaster Tools                                                                                                                      | High     | XS     | [§13.1](#131-tools-to-install--verify)                       |
| [x]    | 3   | Complete every field on Google Business Profile                                                                                                        | Critical | M      | [§4.1](#41-profile-optimization)                             |
| [x]    | 4   | ~~Fix broken `href="#"` links in navbar~~ — live navbar (`components/Navitem.jsx`) already links correctly; unused `components/new/navbar.jsx` deleted | High     | XS     | [§15 — navbar](#componentsnavitemjsx-live-navbar)            |
| [x]    | 5   | ~~Fix broken `href="#"` links in footer~~ — live footer (`components/Footer.jsx`) already links correctly; unused `components/new/footer.jsx` deleted  | High     | S      | [§15 — footer](#componentsfooterjsx-live-footer)             |
| [x]    | 6   | Reconciled to canonical `a.lupollc@gmail.com` across Footer, Contact, ContactHero, Contactwhite, `llms.txt`, and README                                | Medium   | XS     | [§15 — footer](#componentsfooterjsx-live-footer)             |
| [x]    | 7   | Document canonical NAP format                                                                                                                          | Critical | XS     | [§10.1](#101-citations-nap-listings)                         |
| [x]    | 8   | Run BrightLocal NAP audit                                                                                                                              | High     | S      | [§10.1](#101-citations-nap-listings)                         |

### C.2 On-Page SEO (Week 2–4)

| Status | #   | Task                                                      | Impact   | Effort | Ref                                                                                     |
| ------ | --- | --------------------------------------------------------- | -------- | ------ | --------------------------------------------------------------------------------------- |
| [x]    | 11  | Home title → `Dumpster Rental in Pasco County, FL \| Lupo Dumpster Rentals` (59 chars); og:title updated | Critical | XS     | [§5.1](#51-title-tag-rules), [§15](#pagesindexjsx)                                      |
| [x]    | 12  | NPR title → `Dumpster Rental in New Port Richey, FL \| Lupo Enterprises` (57 chars); `metatitle` variable so og:title cascades | Critical | XS     | [§5.1](#51-title-tag-rules), [§15](#pagesservicesdumpster-rental-new-port-richey-fljsx) |
| [x]    | 13  | All 53 page titles rewritten to `[Keyword] in [City], FL \| Lupo [brand]` (50–62 chars); 3 raw-`<title>` pages + 50 `metatitle` vars updated; og:titles cascade automatically where wired | Critical | L      | [§5.1](#51-title-tag-rules)                                                             |
| [x]    | 14  | All 64 meta descriptions rewritten to `[Keyword] + [City], FL + USP + CTA + (727) 317-6717` (140–160 chars); 50 `const description` vars + 14 hardcoded `content=` strings updated; unique per page, cycled openers to avoid duplication | Critical | L      | [§5.2](#52-meta-description-rules)                                                      |
| [x]    | 15  | Audited all 60+ pages. 26 city pages using `HeroService` heroData.title already conform (`"Affordable Dumpster Rentals in [City], Florida"` — approved in §5.3 note). Fixed 18 pages with non-conforming H1s: 3 NPR service pages missing city (hoarding, garage-cleanout, appliance), 7 Pasco service hubs now include `, FL` and/or differentiator (dumpster-rental → "Roll-Off Dumpster Rental Services in Pasco County, FL", junk-removal → "Full-Service Junk Removal…", etc.), Holiday page de-duped against title, NPR construction-debris got "in " added, home (`HeroUpdated`) added `, FL`, `/services` hub rewritten to `Dumpster Rental & Junk Removal Services in Pasco County, FL`, `/blog` rewritten, `/about-us` became `About Lupo Dumpster Rentals — Pasco County, FL` (integrity line preserved as emphasized intro), `/contact` became `Book Your Dumpster Rental in Pasco County, FL`, NPR trash-pick-up got `, FL`. Also updated 14 `Junkheader`-driven pages via `location`/`service` props to include `Pasco County, FL` (trash removal, garage cleaning, hoarding, yard waste, mattress, bobcat, junk pick up, haul-away, garbage, construction debris, 10/15/20-yd trailers, Pasco trash pickup). Verified no double-H1 on home or other fixed pages; 0 lint errors. | High     | M      | [§5.3](#53-h1-rules)                                                                    |
| [x]    | 16  | Built `components/Seo.jsx` emitting full tag set: `og:type`, `og:url`, `og:title`, `og:description`, `og:image` (+ `:alt`/`:width`/`:height`), `og:site_name`, `og:locale`, `twitter:card=summary_large_image`, `twitter:site`, `twitter:creator`, `twitter:title`, `twitter:description`, `twitter:image` (+ `:alt`). All tags use `key` for Next.js dedup. Props: `title`, `description`, `path`, optional `image`/`imageAlt`/`imageWidth`/`imageHeight`/`type`/`twitterHandle`. Defaults to `dumpster-rental-pros.jpg` at 1200×630 | High     | S      | [§5.6](#56-open-graph--social-tags)                                                     |
| [x]    | 17  | `<Seo>` wired on all 65 page files (27 city service pages, 10 Pasco/service hubs, 11 Junkheader-based pages, 6 NPR-specific pages, 2 junk-removal city pages, 9 top-level pages incl. home/contact/about/blog/services/thank-you/facebook-offer/pricing/service-locations) + 9 blog MDX posts auto-covered via `components/Bloglayout.jsx` using `useRouter().asPath` + `type="article"`. Removed 38 pre-existing partial `og:title`/`og:description`/`og:url`/`og:type` blocks to prevent dup tags. Verified 0 pages missing via set-diff; 0 lint errors | High     | M      | [§5.6](#56-open-graph--social-tags)                                                     |
| [x]    | 18  | Centralized canonical emission into `components/Seo.jsx` — now renders `<link rel="canonical" href={BASE_URL + path} key="canonical" />` alongside OG/Twitter. Stripped 34 pre-existing hardcoded canonical blocks (index + 33 service pages) to prevent duplicates. All 65 `.jsx` pages + 9 blog MDX posts (via `Bloglayout`) now have exactly one canonical pointing to the absolute page URL. 0 `rel="canonical"` occurrences outside `Seo.jsx`; 0 lint errors | High     | M      | [§5.5](#55-canonical-tags)                                                              |
| [ ]    | 19  | Rename top 20 images to keyword-rich filenames            | Medium   | M      | [§5.7](#57-image-seo)                                                                   |
| [x]    | 20  | Full site-wide image alt audit via AST-style scan across all `.jsx`/`.js`/`.mdx` (excluding commented code). **Before:** 2 `<Image>` missing `alt` entirely, 18 `alt=""` occurrences, 25+ weak/generic alts (`"logo"`, `"Company name"`, `"junk removal"`, `"dump trailer"`, `"dumpster rental"`, `"testimonial"`, `"App screenshot"`, `"Avi review"`, `"Alex Lupo"`, `"Dump Trailer"`, `"SmarTour logo"`, `"thank you "`). **Fixes:** (a) Made `mdx-components.js` blog-image renderer defensive with `alt={alt \|\| "Lupo Dumpster Rentals blog image"}` fallback. (b) Replaced 9 meaningful empty alts with keyword-rich descriptive text (logos → `"Lupo Dumpster Rentals logo"`, Alex photo → `"Alex Lupo, founder of Lupo Dumpster Rentals in Pasco County, FL"`, customer avatars → `"{Name}, verified Lupo Dumpster Rentals customer"`, hero bg → service + city). (c) Upgraded 25 weak alts to unique, keyword/location-rich descriptions (e.g. dump1.png on 5 NPR pages each got service-specific alt: `"Appliance removal dumpster in New Port Richey, FL"`, `"Construction debris removal dumpster in…"`, etc.). (d) Fixed wrong-brand alt `"SmarTour logo"` → `"Lupo Dumpster Rentals logo"` on thank-you page. **Kept correctly empty (WCAG-compliant decorative):** 2 FB tracking pixels (`display:none`), 2 Footer2 gradient/noise decorative backgrounds. **After:** 0 missing, 0 weak, 0 non-decorative empty alts across codebase; 0 lint errors. Files touched: 25 (`Navbartwo`/`Navbarthree`/`Navbar`/`Footer`/`Mission`/`Featuredlist`/`Imagegrid`/`Imagegridclone`/`FeaturedServices`/`Calltoactions`/`Contacttwo`/`Junkcost`/`Reviews`/`Twentyyard`/`new/about-founder`/`new/process`, `mdx-components.js`, `about-us`/`thank-you`/`services/index`/`services/trash-pick-up` + 4 NPR service pages) | High     | M      | [§5.7](#57-image-seo)                                                                   |
| [x]    | 21  | Implemented full §5.8 14-section template on `/services/dumpster-rental-new-port-richey-fl.jsx`. Built 8 new reusable components in `components/new/` (all accept `city`/`county` props for §22 city-page replication): (1) `intro-section.jsx` — opens with keyword `"Dumpster rental in New Port Richey, FL"` in first 50 chars + 3-paragraph local hook + 4-icon trust row; (2) `why-choose-local.jsx` — 6 local-proof cards (Pasco-based, same-day delivery to 34652-34655, flat-rate, 4.9★/130+ reviews, locally owned, licensed/insured); (3) `pricing-transparency.jsx` — 10/15/20-yard flat-rate cards at $325/$400/$500 (sourced from `NewPricingHeros.jsx`) with "what's included" bullets and CTA; (4) `neighborhoods-served.jsx` — 18 NPR neighborhood chips (Gulf Harbors, Seven Springs, Flor A Mar, Beacon Square, Jasmine Lakes, etc.) + 4 ZIP pills (34652-34655); (5) `permits-info.jsx` — clear private-property-no-permit vs. ROW-permit-required split with City of NPR (727-853-1026) and Pasco County Public Works (727-847-8032) numbers; (6) `rental-vs-junk-removal.jsx` — side-by-side comparison with 7-row table + dual CTAs driving long-tail "rent a dumpster" vs "junk removal" queries; (7) `service-area-map.jsx` — embedded Google Map iframe (lazy-loaded, titled for a11y) + 8 nearby-city chips (Port Richey, Trinity, Holiday, Hudson, Elfers, Spring Hill, Odessa, Land O' Lakes); (8) `local-reviews.jsx` — 4 real reviews (Michael S./Gulf Harbors, Vitina S./Seven Springs, Avi L., David P./Port Richey) with neighborhood labels + Google-review CTA. Wired all 8 into NPR page in template order 1→14 with inline comments mapping each section to the §5.8 numbering. Rough rendered word count jumped from ~1,200-1,800 → ~2,500-3,500 (generous upper bound ~4,288 incl. UI chrome). All 8 components default to NPR but parameterize city/county/neighborhoods/ZIPs/reviews so #22 can reuse them on every city page with minimal prop changes. 0 lint errors across 9 touched files. **Known follow-up:** existing shared components (`rental-process-steps`, `common-dumpster-uses`, `faq-section`, `disposal-guidelines`, `why-choose-us`) still hardcode `"Trinity"` in their internal data arrays even when rendered on NPR page — flagged as a separate issue for §22 / content accuracy pass | Critical | L      | [§5.8](#58-content-depth)                                                               |
| [x]    | 22  | Apply content template to all city pages                  | High     | XL     | [§5.8](#58-content-depth)                                                               |

### C.3 Structured Data / Schema (Week 2–3)

| Status | #   | Task                                                    | Impact   | Effort | Ref                                                                         |
| ------ | --- | ------------------------------------------------------- | -------- | ------ | --------------------------------------------------------------------------- |
| [x]    | 23  | Remove global `LocationSchema` from `_app.js`           | Critical | XS     | [§6.2](#62-recommended-schema-architecture), [§15 — \_app.js](#pages_appjs) |
| [x]    | 24  | Remove global `FaqSchema` from `_app.js`                | Critical | XS     | [§6.2](#62-recommended-schema-architecture), [§15 — \_app.js](#pages_appjs) |
| [x]    | 25  | Re-enable `ReviewSchema` on home page                   | High     | XS     | [§6.2](#62-recommended-schema-architecture), [§15 — \_app.js](#pages_appjs) |
| [x]    | 26  | Add global `WebSite` schema (SERP search box)           | Medium   | XS     | [§6.2](#62-recommended-schema-architecture)                                 |
| [x]    | 27  | Add per-page `LocalBusiness` on every city page         | Critical | M      | [§6.2](#62-recommended-schema-architecture)                                 |
| [x]    | 28  | Add per-page `FAQPage` schema matching visible FAQ      | High     | M      | [§6.2](#62-recommended-schema-architecture)                                 |
| [x]    | 29  | Build `BreadcrumbList` schema component                 | High     | S      | [§6.3](#63-breadcrumb-schema)                                               |
| [x]    | 30  | Add visible breadcrumbs + schema to every non-home page | High     | M      | [§6.3](#63-breadcrumb-schema), [§8.6](#86-breadcrumbs-visible)              |
| [x]    | 31  | Add `BlogPosting` schema to every blog post             | Medium   | M      | [§9.2](#92-blog-editorial-calendar-1-post-every-2-weeks)                    |
| [ ]    | 32  | Validate every schema via Rich Results Test             | Critical | S      | [§6.4](#64-action-items)                                                    |
| [ ]    | 33  | Dynamic review count in OrganizationSchema              | Low      | S      | [§15 — organization-schema](#componentsorganization-schemajsx)              |
| [x]    | —   | `OrganizationSchema` live globally _(already in place)_ | —        | —      | [§6.1](#61-current-state)                                                   |
| [x]    | —   | `ServiceSchema` live globally _(already in place)_      | —        | —      | [§6.1](#61-current-state)                                                   |

### C.4 Technical SEO (Week 1–3)

| Status | #   | Task                                                | Impact   | Effort  | Ref                                            |
| ------ | --- | --------------------------------------------------- | -------- | ------- | ---------------------------------------------- |
| [x]    | 34  | Replace static sitemap with `next-sitemap`          | Critical | S       | [§7.1](#71-sitemap), [§15](#publicsitemapxml)  |
| [x]    | 35  | Set accurate `lastmod` per URL                      | Critical | S       | [§7.1](#71-sitemap)                            |
| [x]    | 36  | Add missing pages to sitemap                        | High     | XS      | [§7.1](#71-sitemap)                            |
| [x]    | 37  | Update `robots.txt` per spec                        | Medium   | XS      | [§7.2](#72-robotstxt), [§15](#publicrobotstxt) |
| [ ]    | 38  | Enforce www canonical redirect in `next.config.mjs` | Medium   | XS      | [§7.4](#74-redirects)                          |
| [ ]    | 39  | Create custom 404 page with search + links          | Medium   | S       | [§7.5](#75-404-handling)                       |
| [ ]    | 40  | Monitor GSC 404 report weekly                       | Medium   | Ongoing | [§7.5](#75-404-handling)                       |
| [ ]    | 41  | Submit sitemap in GSC + Bing                        | Critical | XS      | [§7.6](#77-indexing)                           |
| [ ]    | 42  | Mobile-friendly test on top 10 pages                | High     | S       | [§7.7](#77-mobile-first)                       |
| [ ]    | 43  | Add preconnect/dns-prefetch hints                   | Medium   | XS      | [§15 — \_document.js](#pages_documentjs)       |
| [x]    | —   | HTTPS enforced _(already in place)_                 | —        | —       | [§7.8](#78-https--security)                    |

### C.5 Internal Linking (Week 3–4)

| Status | #   | Task                                                    | Impact | Effort  | Ref                                                               |
| ------ | --- | ------------------------------------------------------- | ------ | ------- | ----------------------------------------------------------------- |
| [x]    | 44  | Build `<ServiceAreaNearby>` component                   | High   | S       | [§8.4](#84-service-area-cross-linking-block)                      |
| [x]    | 45  | Add `<ServiceAreaNearby>` to every city page            | High   | M       | [§8.4](#84-service-area-cross-linking-block)                      |
| [x]    | 46  | Build "Other services in [City]" cross-link block       | High   | M       | [§8.5](#85-service-cross-linking-block)                           |
| [ ]    | 47  | Add "Service Areas" dropdown to navbar                  | High   | S       | [§8.7](#87-action-items), [§15 — navbar](#componentsnewnavbarjsx) |
| [ ]    | 49  | Add "Related Articles" widget on blog posts             | Medium | S       | [§8.7](#87-action-items)                                          |
| [x]    | 50  | Added `"New Port Richey"` to the `nearbyCities` arrays of 7 additional city / area entries in `lib/cities.js` — `land-o-lakes-fl`, `palm-harbor`, `dade-city-fl`, `wesley-chapel-fl`, `zephyrhills-fl`, `san-antonio-fl`, and `tampa-bay`. These feed the shared `<ServiceAreaNearby>` §8.4 block rendered by `CityDumpsterPage`, so each of those pages now emits a real keyword-rich internal `<Link>` to `/services/dumpster-rental-new-port-richey-fl` with the anchor text `"Dumpster Rental in New Port Richey, FL"`. Combined with the 5 pages that already linked (Trinity, Holiday, Hudson, Odessa, Spring Hill), **12 of 27 non-NPR city/area pages now link to the NPR hub via §8.4**. All NPR-adjacent spoke cities from §8.1 (Holiday, Trinity, Hudson) plus every Pasco County city page (home county) plus the nearest Pinellas page (Palm Harbor) and the regional Tampa Bay page are covered. Not included (intentionally): far-south Pinellas (Clearwater, Dunedin, Largo, Oldsmar, Pinellas Park, Safety Harbor, Seminole, St. Petersburg), Hillsborough satellites (Lutz, Westchase, Keystone), Brooksville (far Hernando), and the 3 county-level landing pages — none are truly "near" NPR and forcing them into the "Dumpster Rentals Near {city}" heading would mislead users. Port Richey and Tarpon Springs are named in §8.1 but don't yet have dedicated city pages (no page, no link — tracked separately). | High   | M       | [§8.1](#81-hub-and-spoke-model)                                   |
| [x]    | 51  | Built a reusable `<NprHubCallout>` component in `components/new/npr-hub-callout.jsx` — a full-width black-background section with Lucide icon, red accent chip, a varied-anchor-text `<Link>` into the NPR dumpster rental hub inside body copy, **and** a "View NPR Dumpsters" button CTA (so each placement emits two crawlable links to `/services/dumpster-rental-new-port-richey-fl`). Drop-in props: `service`, `anchorText`, optional `heading` / `body` / `icon` overrides. Added the component to every non-city, non-NPR service page (23 files): 10/15/20-yard dump trailer, appliance removal, bobcat services, construction debris removal, construction dumpster rental, generic dumpster rental, dump trailer rental, furniture removal, garage cleaning, garbage removal, haul-away junk, hoarding cleanup, junk pickup, junk removal (+ Palm Harbor, Port Richey variants), mattress disposal, Pasco County trash pickup, trash removal, yard waste removal, and the NPR junk-removal page (hand-written custom copy driving the sister-service upsell). Anchor text is varied per page per §8.2 — includes exact-match ("dumpster rental in New Port Richey, FL"), partial match ("New Port Richey dumpster rental service", "roll-off dumpsters in New Port Richey", "New Port Richey roll-off dumpsters", "dumpster rental in nearby New Port Richey"), branded ("Lupo's New Port Richey dumpster rental"), and descriptive ("our New Port Richey dumpster service", "our New Port Richey service area page", "our New Port Richey dumpster page") — so no two pages reuse the same anchor phrase. Final audit: **28/28 non-city service pages now link to the NPR hub** (27 via `<NprHubCallout>`, 1 via pre-existing `trash-pick-up.jsx` related-services grid). `npm run build` passes clean. | High   | M       | [§8.1](#81-hub-and-spoke-model)                                   |
| [x]    | 52  | **First sweep complete.** Ran three audits: (1) generic-anchor scan (`click here` / `learn more` / `read more` / `view more` / `see more` / `shop now` / `tap here`) across every `<Link>` / `<Button>` / `<a>` in the repo, (2) anchor-text distribution for high-value hrefs (NPR hub, `/contact`, `/dumpster-rental-pricing`, `/services`, `/blog`, `/about-us`, `/service-locations`), (3) review of reusable components that render identical anchors on every page (footer, navbar, Locations grid, blog grid, service grid, cross-link blocks). Fixed eight high-leverage issues per §8.2: **(a)** `components/new/services.jsx` — replaced the homepage "Learn More" repeated on 4 service cards with per-service CTAs ("Rent a New Port Richey dumpster", "Book full-service junk removal", "See bobcat & grading services", "Book a whole-home cleanout") stored as `service.cta`; **(b)** `components/Locations.jsx` — 3 "Learn More" spans replaced with location-specific anchor copy (`View {location.name} dumpsters` / `View {location.name} service area`), so each of the ~28 location cards now renders a unique descriptive phrase rather than the same generic one 28 times; **(c)** `components/new/blog-section.jsx` — restructured blog cards to wrap the ENTIRE card in the `<Link>` (image + title + excerpt + CTA) instead of wrapping only "Read More", so the dominant anchor text for each post is now the post title itself, then changed the CTA sub-text to "Read the full article" and the footer button to "Browse all dumpster & cleanout articles" (now correctly linked to `/blog`); **(d)** `components/new/other-services-in-city.jsx` — the secondary "Learn more" on every service card (rendered on every city page) is now "See pricing & availability"; **(e)** six in-page "Learn more → #faq" anchors on `trash-pick-up.jsx`, `appliance-removal-new-port-richey-fl.jsx`, `construction-debris-removal-new-port-richey-fl.jsx`, `garage-cleaning-service-new-port-richey-fl.jsx`, `hoarding-cleanup-new-port-richey-fl.jsx`, plus the `#trash-pick-up` jump on `trash-pick-up.jsx`, now use service-specific phrasing ("See trash pickup FAQs", "See appliance removal FAQs", "See construction debris FAQs", "See garage cleanout FAQs", "See hoarding cleanup FAQs", "See trash pickup details"); **(f)** `components/new/npr-hub-callout.jsx` — added a `buttonText` prop and changed the default from the abbreviated "View NPR Dumpsters" to the fully-spelled "View New Port Richey dumpsters" so every one of the 28 service pages that render the callout now passes the full city name as anchor text on both of the hub-pointing links (instead of just the in-body link); **(g)** `components/new/service-area-nearby.jsx` — added a 6-template rotation (`ANCHOR_TEMPLATES`) that produces varied anchor text across neighboring-city links: "Dumpster Rental in X, FL", "X Dumpster Rentals", "Rent a Dumpster in X", "Roll-Off Dumpsters in X", "X, FL Roll-Off Rentals", "Same-Day Dumpster Delivery in X". The component previously rendered "Dumpster Rental in {city}, FL" exact-match on every single link across all 28 city pages — the highest-density over-optimized pattern in the site; now rotated deterministically by index so the NPR hub (now linked from 12 pages via this block) is seen with 6 different varied phrases across the crawl; **(h)** `components/Footer2.jsx` — the NPR hub footer link (rendered on every page) changed from the generic "Dumpster Rentals" to the keyword-rich "New Port Richey Dumpster Rentals". Post-fix audit: **0 generic anchors** (`click here` / `learn more` / `read more` / etc.) inside any `<Link>`, `<Button>`, or `<a>` anywhere in the site. `npm run build` passes clean. Remaining ongoing work (per §8.2, tracked under this task): periodically re-run the distribution audit as new pages/sections are added, watch for exact-match over-repetition on the NPR hub as inbound internal links grow, and vary CTA copy on brand-new components.   | Medium | Ongoing | [§8.2](#82-anchor-text-rules)                                     |

### C.6 Google Business Profile (Ongoing)

| Status | #   | Task                                          | Impact   | Effort  | Ref                               |
| ------ | --- | --------------------------------------------- | -------- | ------- | --------------------------------- |
| [ ]    | 53  | Set primary category: Dumpster rental service | Critical | XS      | [§4.1](#41-profile-optimization)  |
| [ ]    | 54  | Add 5 secondary categories                    | High     | XS      | [§4.1](#41-profile-optimization)  |
| [ ]    | 55  | Write 750-char keyword-rich description       | Critical | S       | [§4.1](#41-profile-optimization)  |
| [ ]    | 56  | Add every service with its own description    | Critical | M       | [§4.1](#41-profile-optimization)  |
| [ ]    | 57  | Add each dumpster size as a "product"         | High     | S       | [§4.1](#41-profile-optimization)  |
| [ ]    | 58  | Upload 20+ geotagged photos                   | High     | M       | [§4.2](#42-photos)                |
| [ ]    | 59  | Upload hero video to GBP                      | Medium   | XS      | [§4.2](#42-photos)                |
| [ ]    | 60  | Upload 2–4 new photos per month               | Medium   | Ongoing | [§4.2](#42-photos)                |
| [ ]    | 61  | Publish 1 GBP post per week                   | High     | Ongoing | [§4.3](#43-google-posts)          |
| [ ]    | 62  | Seed 8–10 Q&A pairs from owner account        | Medium   | S       | [§4.4](#44-qa-google-owned-field) |
| [ ]    | 63  | Verify NAP matches site and all citations     | Critical | XS      | [§4.1](#41-profile-optimization)  |

### C.7 Performance / Core Web Vitals (Week 2–4)

| Status | #   | Task                                                   | Impact   | Effort  | Ref                                                 |
| ------ | --- | ------------------------------------------------------ | -------- | ------- | --------------------------------------------------- |
| [ ]    | 64  | Change Facebook Pixel to `afterInteractive`            | High     | XS      | [§11.3](#113-fixes), [§15 — \_app.js](#pages_appjs) |
| [ ]    | 65  | Change Hotjar to `lazyOnload`                          | Medium   | XS      | [§11.3](#113-fixes), [§15 — \_app.js](#pages_appjs) |
| [ ]    | 66  | Replace all raw `<img>` tags with `next/image`         | High     | M       | [§11.3](#113-fixes)                                 |
| [ ]    | 67  | Add `priority` to hero/LCP images                      | High     | S       | [§11.3](#113-fixes)                                 |
| [ ]    | 68  | Add `loading="lazy"` to below-the-fold images          | Medium   | S       | [§11.3](#113-fixes)                                 |
| [ ]    | 69  | Delete unused legacy components                        | Medium   | M       | [§11.3](#113-fixes)                                 |
| [ ]    | 70  | Remove commented-out imports from pages                | Low      | XS      | [§11.3](#113-fixes)                                 |
| [ ]    | 71  | Compress all `/public/` images (PNG → WebP)            | High     | M       | [§11.3](#113-fixes)                                 |
| [ ]    | 72  | Code-split heavy components with `next/dynamic`        | Medium   | M       | [§11.3](#113-fixes)                                 |
| [ ]    | 73  | Run `@next/bundle-analyzer`, target <200KB initial JS  | Medium   | S       | [§11.3](#113-fixes)                                 |
| [ ]    | 74  | Baseline Core Web Vitals (home, NPR, pricing, contact) | Critical | S       | [§11.1](#111-measure)                               |
| [ ]    | 75  | Monitor CWV monthly via Vercel Analytics               | Medium   | Ongoing | [§11.4](#114-action-items)                          |

### C.8 Content — New Pages (Month 2–3)

| Status | #   | Task                                                                                                            | Impact   | Effort | Ref                              |
| ------ | --- | --------------------------------------------------------------------------------------------------------------- | -------- | ------ | -------------------------------- |
| [ ]    | 76  | Build `/services/dumpster-rental-port-richey-fl`                                                                | Critical | M      | [§9.1](#91-content-gaps-to-fill) |
| [ ]    | 77  | Build `/services/10-yard-dumpster-rental-new-port-richey-fl`                                                    | High     | M      | [§9.1](#91-content-gaps-to-fill) |
| [ ]    | 78  | Build `/services/20-yard-dumpster-rental-new-port-richey-fl`                                                    | High     | M      | [§9.1](#91-content-gaps-to-fill) |
| [ ]    | 79  | Build 6 NPR neighborhood pages (Gulf Harbors, Bayonet Point, Elfers, Jasmine Estates, Moon Lake, Seven Springs) | High     | XL     | [§9.1](#91-content-gaps-to-fill) |
| [ ]    | 80  | Build `/industries/roofers`                                                                                     | High     | M      | [§9.1](#91-content-gaps-to-fill) |
| [ ]    | 81  | Build `/industries/contractors`                                                                                 | High     | M      | [§9.1](#91-content-gaps-to-fill) |
| [ ]    | 82  | Build `/industries/realtors`                                                                                    | Medium   | M      | [§9.1](#91-content-gaps-to-fill) |
| [ ]    | 83  | Build `/industries/property-managers`                                                                           | Medium   | M      | [§9.1](#91-content-gaps-to-fill) |
| [ ]    | 84  | Build dedicated pricing page with tables                                                                        | High     | M      | [§9.1](#91-content-gaps-to-fill) |

### C.9 Content — Blog (Every 2 weeks)

| Status | #   | Task                                                         | Impact | Effort | Ref                                                      |
| ------ | --- | ------------------------------------------------------------ | ------ | ------ | -------------------------------------------------------- |
| [ ]    | 85  | Week 1: Dumpster rental cost in New Port Richey              | High   | M      | [§9.2](#92-blog-editorial-calendar-1-post-every-2-weeks) |
| [ ]    | 86  | Week 3: Do you need a permit for a dumpster in Pasco County? | High   | M      | [§9.2](#92-blog-editorial-calendar-1-post-every-2-weeks) |
| [ ]    | 87  | Week 5: 10 yard vs 20 yard dumpster                          | Medium | M      | [§9.2](#92-blog-editorial-calendar-1-post-every-2-weeks) |
| [ ]    | 88  | Week 7: How long can you keep a rental dumpster?             | Medium | M      | [§9.2](#92-blog-editorial-calendar-1-post-every-2-weeks) |
| [ ]    | 89  | Week 9: Best dumpster rental companies in Pasco County 2026  | High   | L      | [§9.2](#92-blog-editorial-calendar-1-post-every-2-weeks) |
| [ ]    | 90  | Week 11: What can/cannot go in a rental dumpster in Florida? | Medium | M      | [§9.2](#92-blog-editorial-calendar-1-post-every-2-weeks) |
| [ ]    | 91  | Add author bylines (Alex Lupo) to every post                 | Medium | S      | [§9.3](#93-e-e-a-t-signals)                              |
| [ ]    | 92  | Expand `/about-us` founder bio                               | Medium | S      | [§9.3](#93-e-e-a-t-signals)                              |
| [ ]    | 93  | Add license + insurance info to footer                       | Medium | XS     | [§9.3](#93-e-e-a-t-signals)                              |

### C.10 Citations / NAP (Month 1–3)

| Status | #   | Task                                                           | Impact   | Effort | Ref                                  |
| ------ | --- | -------------------------------------------------------------- | -------- | ------ | ------------------------------------ |
| [ ]    | 94  | Bing Places for Business                                       | High     | S      | [§10.1](#101-citations-nap-listings) |
| [ ]    | 95  | Apple Business Connect                                         | High     | S      | [§10.1](#101-citations-nap-listings) |
| [ ]    | 96  | Yelp                                                           | High     | S      | [§10.1](#101-citations-nap-listings) |
| [ ]    | 97  | Better Business Bureau                                         | High     | M      | [§10.1](#101-citations-nap-listings) |
| [ ]    | 98  | Angi                                                           | High     | S      | [§10.1](#101-citations-nap-listings) |
| [ ]    | 99  | HomeAdvisor                                                    | High     | S      | [§10.1](#101-citations-nap-listings) |
| [ ]    | 100 | Thumbtack                                                      | High     | S      | [§10.1](#101-citations-nap-listings) |
| [ ]    | 101 | Nextdoor (critical for NPR)                                    | Critical | S      | [§10.1](#101-citations-nap-listings) |
| [ ]    | 102 | West Pasco Chamber of Commerce                                 | High     | M      | [§10.1](#101-citations-nap-listings) |
| [ ]    | 103 | MapQuest, Foursquare, YellowPages, Manta                       | Medium   | M      | [§10.1](#101-citations-nap-listings) |
| [ ]    | 104 | Nicelocal, Cylex, Hotfrog, Brownbook, Tupalo                   | Low      | M      | [§10.1](#101-citations-nap-listings) |
| [ ]    | 105 | Industry directories (DumpstersHQ, JunkRemovalPros, BuildZoom) | Medium   | S      | [§10.1](#101-citations-nap-listings) |
| [x]    | —   | Google Business Profile _(already in place)_                   | —        | —      | [§10.1](#101-citations-nap-listings) |
| [x]    | —   | Facebook Business Page _(already in place)_                    | —        | —      | [§10.1](#101-citations-nap-listings) |
| [x]    | —   | Instagram _(already in place)_                                 | —        | —      | [§10.1](#101-citations-nap-listings) |

### C.11 Backlinks (Month 2–6)

| Status | #   | Task                                                              | Impact | Effort  | Ref                                   |
| ------ | --- | ----------------------------------------------------------------- | ------ | ------- | ------------------------------------- |
| [ ]    | 106 | Pitch Tampa Bay Times / Patch local story                         | High   | L       | [§10.2](#102-backlink-strategy)       |
| [ ]    | 107 | Reach out to 10 local roofers for vendor link                     | High   | M       | [§10.2](#102-backlink-strategy)       |
| [ ]    | 108 | Reach out to 10 real estate agents (estate cleanouts)             | High   | M       | [§10.2](#102-backlink-strategy)       |
| [ ]    | 109 | Reach out to 10 property management companies                     | High   | M       | [§10.2](#102-backlink-strategy)       |
| [ ]    | 110 | Partner with 5 moving companies for reciprocal links              | Medium | M       | [§10.2](#102-backlink-strategy)       |
| [ ]    | 111 | Respond to relevant HARO queries weekly                           | Medium | Ongoing | [§10.2](#102-backlink-strategy)       |
| [ ]    | 112 | Launch $500 Pasco County student cleanup scholarship (.edu links) | Medium | L       | [§10.2](#102-backlink-strategy)       |
| [ ]    | 113 | Set up Google Alerts for "Lupo Enterprises" + "Lupo Dumpster"     | Low    | XS      | [§10.3](#103-brand-mentions-unlinked) |
| [ ]    | 114 | Press release: milestone announcements                            | Medium | M       | [§10.2](#102-backlink-strategy)       |

### C.12 Reviews (Ongoing)

| Status | #   | Task                                                  | Impact   | Effort  | Ref                                   |
| ------ | --- | ----------------------------------------------------- | -------- | ------- | ------------------------------------- |
| [ ]    | 115 | Set up automated review-request SMS via Zapier/Twilio | Critical | M       | [§12.1](#121-review-acquisition)      |
| [ ]    | 116 | Set up automated review-request email via SendGrid    | Critical | S       | [§12.1](#121-review-acquisition)      |
| [ ]    | 117 | Print QR-code flyers for trucks and invoices          | High     | S       | [§12.1](#121-review-acquisition)      |
| [ ]    | 118 | Train drivers to ask for reviews on-site              | High     | S       | [§12.1](#121-review-acquisition)      |
| [ ]    | 119 | Pull real Google reviews into on-site Testimonials    | Medium   | M       | [§12.4](#124-display-reviews-on-site) |
| [ ]    | 120 | Respond to every review within 24 hours (ongoing)     | Critical | Ongoing | [§12.3](#123-review-responses)        |
| [ ]    | 121 | Target 5–10 new reviews per month                     | Critical | Ongoing | [§12.1](#121-review-acquisition)      |
| [ ]    | 122 | Coach customers to mention city + service in reviews  | High     | Ongoing | [§12.2](#122-review-content-matters)  |

### C.13 Measurement & Reporting (Week 1 setup, ongoing)

| Status | #   | Task                                                | Impact   | Effort  | Ref                                      |
| ------ | --- | --------------------------------------------------- | -------- | ------- | ---------------------------------------- |
| [ ]    | 123 | Install rank tracker with 30–50 keywords            | Critical | S       | [§13.1](#131-tools-to-install--verify)   |
| [ ]    | 124 | Install CallRail for call attribution               | High     | M       | [§13.1](#131-tools-to-install--verify)   |
| [ ]    | 125 | Verify GA4 tracks form submit as conversion         | Critical | XS      | [§13.3](#133-conversion-tracking-events) |
| [ ]    | 126 | Verify GA4 tracks `tel:` click as conversion        | Critical | XS      | [§13.3](#133-conversion-tracking-events) |
| [ ]    | 127 | Verify GA4 tracks quote button click                | High     | XS      | [§13.3](#133-conversion-tracking-events) |
| [ ]    | 128 | Set up scroll-depth conversion (75%)                | Low      | XS      | [§13.3](#133-conversion-tracking-events) |
| [ ]    | 129 | Build monthly SEO report template                   | Medium   | S       | [§13.4](#134-monthly-reporting-template) |
| [ ]    | 130 | Send monthly SEO report (ongoing)                   | Medium   | Ongoing | [§13.4](#134-monthly-reporting-template) |
| [x]    | —   | GA4 installed _(already in place)_                  | —        | —       | [§13.1](#131-tools-to-install--verify)   |
| [x]    | —   | Google Ads conversion tracking _(already in place)_ | —        | —       | [§13.1](#131-tools-to-install--verify)   |
| [x]    | —   | Meta Pixel installed _(already in place)_           | —        | —       | [§13.1](#131-tools-to-install--verify)   |
| [x]    | —   | Hotjar installed _(already in place)_               | —        | —       | [§13.1](#131-tools-to-install--verify)   |
| [x]    | —   | Vercel Analytics installed _(already in place)_     | —        | —       | [§13.1](#131-tools-to-install--verify)   |

### C.14 KPI Targets (12-month)

| Status | KPI                               | Baseline | Current | 12-mo Target | Ref                                                 |
| ------ | --------------------------------- | -------- | ------- | ------------ | --------------------------------------------------- |
| [ ]    | Organic sessions                  | —        | —       | +150%        | [§13.2](#132-kpis-to-track-monthly)                 |
| [ ]    | Organic leads (form submits)      | —        | —       | +150%        | [§13.2](#132-kpis-to-track-monthly)                 |
| [ ]    | Phone call leads                  | —        | —       | +100%        | [§13.2](#132-kpis-to-track-monthly)                 |
| [ ]    | GBP views                         | —        | —       | +80%         | [§13.2](#132-kpis-to-track-monthly)                 |
| [ ]    | GBP direction requests            | —        | —       | +80%         | [§13.2](#132-kpis-to-track-monthly)                 |
| [ ]    | GBP website clicks                | —        | —       | +80%         | [§13.2](#132-kpis-to-track-monthly)                 |
| [ ]    | Google review count               | 131+     | —       | 200+         | [§12](#12-reviews--reputation-management)           |
| [x]    | Average review rating             | 4.9      | 4.9     | ≥ 4.8        | [§12](#12-reviews--reputation-management)           |
| [ ]    | #1 rankings (primary keywords)    | —        | —       | 15+          | [§3.1](#31-primary-target-keywords-new-port-richey) |
| [ ]    | Top-3 rankings (primary keywords) | —        | —       | 30+          | [§3.1](#31-primary-target-keywords-new-port-richey) |
| [ ]    | Domain Rating                     | —        | —       | +10 pts      | [§10.2](#102-backlink-strategy)                     |
| [ ]    | Referring domains                 | —        | —       | +50 new      | [§10.2](#102-backlink-strategy)                     |
| [ ]    | Total citations                   | —        | —       | 40+          | [§10.1](#101-citations-nap-listings)                |

### C.15 Rankings — Priority Keywords Dashboard

Update monthly. Fill in position from rank tracker. Mark `[x]` once the keyword hits its goal position.

| Status | Keyword                                  | Target URL                                     | Current | Last Mo | Goal  | Ref                                                           |
| ------ | ---------------------------------------- | ---------------------------------------------- | ------- | ------- | ----- | ------------------------------------------------------------- |
| [ ]    | dumpster rental new port richey          | `/services/dumpster-rental-new-port-richey-fl` | —       | —       | #1    | [§3.1](#31-primary-target-keywords-new-port-richey)           |
| [ ]    | dumpster rental new port richey fl       | same                                           | —       | —       | #1    | [§3.1](#31-primary-target-keywords-new-port-richey)           |
| [ ]    | new port richey dumpster rental          | same                                           | —       | —       | #1    | [§3.1](#31-primary-target-keywords-new-port-richey)           |
| [ ]    | junk removal new port richey             | `/services/junk-removal-new-port-richey-fl`    | —       | —       | #1    | [§3.1](#31-primary-target-keywords-new-port-richey)           |
| [ ]    | junk removal new port richey fl          | same                                           | —       | —       | #1    | [§3.1](#31-primary-target-keywords-new-port-richey)           |
| [ ]    | roll off dumpster rental new port richey | `/services/dumpster-rental-new-port-richey-fl` | —       | —       | #1    | [§3.1](#31-primary-target-keywords-new-port-richey)           |
| [ ]    | 10 yard dumpster rental new port richey  | needs new page                                 | —       | —       | #1    | [§9.1](#91-content-gaps-to-fill)                              |
| [ ]    | 20 yard dumpster rental new port richey  | needs new page                                 | —       | —       | #1    | [§9.1](#91-content-gaps-to-fill)                              |
| [ ]    | dumpster rental pasco county             | `/`                                            | —       | —       | #1    | [§3.2](#32-secondary-target-keywords-pasco-county--neighbors) |
| [ ]    | dumpster rental holiday fl               | `/services/dumpster-rental-holiday-fl`         | —       | —       | Top 3 | [§3.2](#32-secondary-target-keywords-pasco-county--neighbors) |
| [ ]    | dumpster rental port richey              | needs new page                                 | —       | —       | Top 3 | [§9.1](#91-content-gaps-to-fill)                              |
| [ ]    | dumpster rental trinity fl               | `/services/dumpster-rental-trinity-fl`         | —       | —       | Top 3 | [§3.2](#32-secondary-target-keywords-pasco-county--neighbors) |
| [ ]    | dumpster rental hudson fl                | `/services/dumpster-rental-hudson-fl`          | —       | —       | Top 3 | [§3.2](#32-secondary-target-keywords-pasco-county--neighbors) |
| [ ]    | dumpster rental land o lakes             | `/services/dumpster-rental-land-o-lakes-fl`    | —       | —       | Top 3 | [§3.2](#32-secondary-target-keywords-pasco-county--neighbors) |
| [ ]    | dumpster rental wesley chapel            | `/services/dumpster-rental-wesley-chapel-fl`   | —       | —       | Top 3 | [§3.2](#32-secondary-target-keywords-pasco-county--neighbors) |
| [ ]    | dumpster rental spring hill              | `/services/dumpster-rental-spring-hill`        | —       | —       | Top 3 | [§3.2](#32-secondary-target-keywords-pasco-county--neighbors) |
| [ ]    | dumpster rental odessa fl                | `/services/dumpster-rental-odessa-fl`          | —       | —       | Top 3 | [§3.2](#32-secondary-target-keywords-pasco-county--neighbors) |
| [ ]    | dumpster rental lutz fl                  | `/services/dumpster-rental-lutz-fl`            | —       | —       | Top 3 | [§3.2](#32-secondary-target-keywords-pasco-county--neighbors) |
| [ ]    | dumpster rental dade city                | `/services/dumpster-rental-dade-city-fl`       | —       | —       | Top 3 | [§3.2](#32-secondary-target-keywords-pasco-county--neighbors) |
| [ ]    | dumpster rental zephyrhills              | `/services/dumpster-rental-zephyrhills-fl`     | —       | —       | Top 3 | [§3.2](#32-secondary-target-keywords-pasco-county--neighbors) |
| [ ]    | dumpster rental palm harbor              | `/services/dumpster-rental-palm-harbor`        | —       | —       | Top 3 | [§3.2](#32-secondary-target-keywords-pasco-county--neighbors) |
| [ ]    | dumpster rental clearwater fl            | `/services/dumpster-rental-clearwater-fl`      | —       | —       | Top 5 | [§3.2](#32-secondary-target-keywords-pasco-county--neighbors) |

### C.16 Summary — Progress Dashboard

| Category             | Total Tasks | `[x]` Complete | `[ ]` Open |
| -------------------- | ----------- | -------------- | ---------- |
| Foundation (C.1)     | 8           | 6              | 2          |
| On-Page (C.2)        | 12          | 11             | 1          |
| Schema (C.3)         | 13          | 11             | 2          |
| Technical (C.4)      | 11          | 5              | 6          |
| Internal Links (C.5) | 9           | 3              | 6          |
| GBP (C.6)            | 11          | 0              | 11         |
| Performance (C.7)    | 12          | 0              | 12         |
| New Pages (C.8)      | 9           | 0              | 9          |
| Blog (C.9)           | 9           | 0              | 9          |
| Citations (C.10)     | 15          | 3              | 12         |
| Backlinks (C.11)     | 9           | 0              | 9          |
| Reviews (C.12)       | 8           | 0              | 8          |
| Measurement (C.13)   | 13          | 5              | 8          |
| **TOTAL**            | **139**     | **44**         | **95**     |

Update this summary table whenever sub-tables are touched. Recompute at the end of each monthly reporting cycle.

---

### How to use this tracker

1. **Weekly standup:** pick 3–5 `[ ]` tasks from the highest-impact categories (Foundation, On-Page, Schema, GBP, Reviews) and start working.
2. **On completion:** change `[ ]` to `[x]` and update the summary count in C.16.
3. **Monthly review:** update rankings in C.15 and KPIs in C.14, re-prioritize any open tasks that should be bumped up.
4. **Click any `§` reference** in the **Ref** column to jump back to the full context for that item.

When C.16 shows `[x]` > 100 / 139, NPR top-3 rankings should be locked in. Full #1 positions typically land 6–9 months after the first 50 tasks are complete, driven primarily by review velocity, backlinks, and content maturity.
