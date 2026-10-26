# Website Rebuild — Master To-Do & Status Tracker

> **The single place statuses live.** Other docs explain *how*; this one tracks *whether*. Update it in the same PR as the work.
>
> **Scope:** rebuild the entire site on **StoryBrand 2.0** messaging, a new design system (same **name** + **colors**), and a stricter SEO/sales standard. Phase 1 = rebuild all 74 existing URLs ([pre-launch.md](./pre-launch.md)). Phase 2 = new pages ([new-seo-pages.md](./new-seo-pages.md)).
>
> Created Oct 25, 2026. Open items from legacy [`seo-updates.md`](./legacy/seo-updates.md) Appendix C and [`website-audit-updates-june-26-2026.md`](./legacy/website-audit-updates-june-26-2026.md) are carried in here (tagged `SEO C.x #n` / `Audit #n`).

**Legend:** ✅ complete · ❌ not complete

---

## Progress dashboard

| Section | Items | ✅ | Open |
| --- | --- | --- | --- |
| 0. Decisions (blocking) | 18 | 0 | 18 |
| 1. Docs & strategy | 10 | 9 | 1 |
| 2. Foundation (tech + design system) | 16 | 10 | 6 |
| 3. Shared components | 24 | 21 | 3 |
| 4. Pages: Phase 1 rebuild | 74 | 74 | 0 |
| 5. Technical SEO | 15 | 7 | 8 |
| 6. Conversion & sales | 20 | 6 | 14 |
| 7. Local SEO, GBP, citations, reviews | 22 | 0 | 22 |
| 8. Measurement | 11 | 2 | 9 |
| 9. Cleanup & tech debt | 9 | 8 | 1 |
| 10. Phase 2 new pages | 44 | 0 | 44 |
| **Total** | **263** | **137** | **126** |

*Recount when you update a section.*

---

## 0. Decisions (blocking)

Nothing in §2–4 should be built on assumptions these would change. Owner: **Alex** unless noted.

| Status | # | Decision | Recommendation | Blocks | Ref |
| --- | --- | --- | --- | --- | --- |
| ❌ | D1 | **Price sheet**: 10/15/20 yd prices, rental days included, weight included, overweight $/ton, extra-day fee, delivery-zone surcharges | Lock one sheet; publish all of it | Price cards, schema, calculator, every page | [brand.md §1](./brand.md#sizes-current-site-data-confirm-before-rebuild) |
| ❌ | D2 | **$275 FB offer**: keep (ad-only "online special") or retire | Keep as ad-only, consistent wording | `/facebook-offer` | [conversion.md §8](./conversion.md#8-offers--guarantees) |
| ❌ | D3 | **Review count + rating** source and update cadence | One config value, update monthly | Trust strip, schema | [brand.md §1](./brand.md#1-company-information) |
| ❌ | D4 | **Real license + insurance** details (Sunbiz # is not a license) | Show license type/#, insurer, COI on request | Footer, About, schema | [brand.md §1](./brand.md#1-company-information) |
| ❌ | D5 | **Customer count claim** ("500+" vs "1,000+") | Real number or remove | Hero copy | [brandscript §3](./brandscript.md#3-the-guide-lupo) |
| ❌ | D6 | **Guarantee** (on-time, price-match) | One real, written guarantee | Agreement plan, hero | [brandscript §4](./brandscript.md#4-the-plan) |
| ❌ | D7 | **Same-day** conditions (cutoff time, areas) | State them honestly | Hero, `/services/same-day…` | [brandscript §3](./brandscript.md#3-the-guide-lupo) |
| ❌ | D8 | **Dump-trailer benefits** we can claim (driveway protection, footprint) | Confirm and use as differentiator | Copy everywhere | [brand.md §4](./brand.md#4-naming--terminology-rules) |
| ❌ | D9 | **Prohibited items** list + fees | Publish the list | Price cards, `/what-can-go-in-a-dumpster` | [brand.md §7](./brand.md#7-claims--compliance) |
| ❌ | D10 | **Junk removal pricing model** (by volume? minimum?) | Publish a range | Junk pages | [service-pages.md §5](./service-pages.md#archetype-specific-additions) |
| ❌ | D11 | **Tagline + one-liner** final wording | Draft A one-liner | Hero, GBP, About | [brandscript §9](./brandscript.md#9-the-one-liner) |
| ❌ | D12 | **Display typeface** | Barlow Condensed + Inter | All design work | [brand.md §5.2](./brand.md#52-typography-new) |
| ❌ | D13 | **Logo**: clean up existing SVG vs. refresh (same colors/name) | Clean up + produce lockups + OG image | Header, favicon, OG | [brand.md §5.3](./brand.md#53-logo) |
| ❌ | D14 | **Framework**: stay on Next 13 Pages Router vs. upgrade (Next 15+, App Router + Metadata API) | Upgrade during rebuild since every page is recreated anyway. Owner: **dev** | §2 foundation | [best-seo §9](./best-seo-practices.md#9-technical-foundation) |
| ❌ | D15 | **Merges**: ~~junk-pick-up, trash-pick-up, garbage-removal-service~~ (merged 2026-10-26); decluttering blog post still open | 301 into cluster pillars | §4 pages, redirects | [pre-launch §3](./pre-launch.md#3-cannibalization-clusters-fix-these-first) |
| ❌ | D16 | **Edge cities**: which Tier 3 cities do we actually serve regularly | Fold rarely-served cities into county pages | City pages | [city-pages §5](./city-pages.md#5-city-tiers--priorities) |
| ❌ | D17 | **Booking + CRM software** (custom vs. Jobber/Housecall Pro/Docket etc.) | Evaluate off-the-shelf first | `/book`, follow-up | [conversion.md §4](./conversion.md#4-pricing-calculator--booking-decisions), [§6](./conversion.md#6-speed-to-lead--follow-up) |
| ❌ | D18 | **Domain email** (replace Gmail on the site) | `info@lupodumpsterrentals.com` | NAP, footer, schema | [brand.md §1](./brand.md#1-company-information) |

---

## 1. Docs & strategy

| Status | # | Task | Ref |
| --- | --- | --- | --- |
| ✅ | 1.1 | Create `docs/` framework (README + 11 docs) | [README](./README.md) |
| ✅ | 1.2 | Draft StoryBrand 2.0 BrandScript | [brandscript.md](./brandscript.md) |
| ✅ | 1.3 | Brand guide (kept colors tokenized, new type/imagery/voice) | [brand.md](./brand.md) |
| ✅ | 1.4 | SEO standards | [best-seo-practices.md](./best-seo-practices.md) |
| ✅ | 1.5 | Service page + city page build guides | [service-pages.md](./service-pages.md), [city-pages.md](./city-pages.md) |
| ✅ | 1.6 | Blogging guide | [blogging.md](./blogging.md) |
| ✅ | 1.7 | Conversion/sales system | [conversion.md](./conversion.md) |
| ✅ | 1.8 | Accessibility standard (measured contrast) | [accessibility.md](./accessibility.md) |
| ✅ | 1.9 | Phase 1 + Phase 2 page plans | [pre-launch.md](./pre-launch.md), [new-seo-pages.md](./new-seo-pages.md) |
| ❌ | 1.10 | **Review BrandScript with Alex** against the book; finalize | brandscript.md |

---

## 2. Foundation (tech + design system)

| Status | # | Task | Ref |
| --- | --- | --- | --- |
| ✅ | 2.1 | Create `lib/site-config.js`: NAP, hours, socials, rating/count, sizes, prices, inclusions, fees, prohibited items, services, nav groups | [brand.md §8](./brand.md#8-implementing-the-brand-technical) |
| ✅ | 2.2 | Rewrite theme tokens in `styles/globals.css` (Lupo Red / ink / neutrals) and map in `tailwind.config.js` | [brand.md §5.1](./brand.md#51-color-system-kept-colors-now-tokenized) |
| ✅ | 2.3 | Load display + body fonts via `next/font`; Tailwind `fontFamily` | [brand.md §5.2](./brand.md#52-typography-new) |
| ❌ | 2.4 | Type scale + spacing + radius utilities | brand.md §5.2, §5.5 |
| ❌ | 2.5 | Logo SVG cleanup/refresh; light + dark lockups; mark-only | D13 |
| ✅ | 2.6 | Favicon set + `apple-touch-icon` + `theme-color` meta | brand.md §8 |
| ✅ | 2.7 | Default 1200×630 OG image; update `Seo.jsx` default | brand.md §5.3 |
| ❌ | 2.8 | **Photo shoot**: each trailer size (empty/full), driveway drops, jobsite, crew, Alex/Amanda, before/after cleanouts | [brand.md §5.4](./brand.md#54-imagery) |
| ❌ | 2.9 | Image pipeline: WebP/AVIF, `public/images/{section}/` naming. All large images converted to WebP (108 MB → 10 MB); folder naming pending real photos (2.8) | brand.md §5.4 |
| ❌ | 2.10 | Framework decision executed (upgrade or stay) | D14 |
| ✅ | 2.11 | New `_app.js` shell: correct landmarks (header / main / footer siblings), skip link | [accessibility §1](./accessibility.md#1-page-structure--landmarks) |
| ✅ | 2.12 | Global reduced-motion CSS reset | accessibility §6 |
| ✅ | 2.13 | Script strategy: Meta Pixel → `afterInteractive`, Hotjar → `lazyOnload` (SEO C.7 #64, #65) | [conversion §10](./conversion.md#10-tracking-events-to-verify-on-every-template) |
| ✅ | 2.14 | Schema components read from `site-config` (Organization, Service, LocalBusiness, Review) (SEO C.3 #33) | best-seo §8 |
| ✅ | 2.15 | `llms.txt` generated from (or checked against) `site-config` | best-seo §9 |
| ❌ | 2.16 | Component library page (`/styleguide`, noindex) to QA tokens + components | — |

---

## 3. Shared components (new design system)

Build once, use everywhere. Put them in a new folder (e.g. `components/site/`) so legacy components can be deleted cleanly later.

| Status | # | Component | Used on | Ref |
| --- | --- | --- | --- | --- |
| ✅ | 3.1 | `SiteHeader` (top bar w/ phone + hours, nav from config, Book CTA, mobile menu w/ focus trap) | All | brand.md §5.5 |
| ✅ | 3.2 | `SiteFooter` (NAP, hours, license/insurance, services, cities, socials, policies) | All | best-seo §7 |
| ✅ | 3.3 | `StickyMobileBar` (Call · Text · Book) | All (mobile) | conversion §3 |
| ❌ | 3.4 | `TextUsWidget` restyle + SMS consent | All | conversion §5 |
| ✅ | 3.5 | `HomeHero` (poster-image LCP, optional lazy video with pause) | Home | brandscript §10 |
| ✅ | 3.6 | `ServiceHero` (photo bg + booking card) | Service, city | service-pages §4 |
| ✅ | 3.7 | `BookingCard` (2-step: size/ZIP/date → price → name/phone/consent) | Heroes, pricing | conversion §3 |
| ✅ | 3.8 | `TrustStrip` (rating + count from config, local, licensed, same-day) | All heroes | brand.md §5.5 |
| ✅ | 3.9 | `StakesSection` | All | brandscript §6 |
| ✅ | 3.10 | `ValueProps` | All | brandscript §10 |
| ✅ | 3.11 | `GuideProof` (empathy + reviews + photo) | All | brandscript §3 |
| ✅ | 3.12 | `PlanSteps` (3 steps + CTA) | All | brandscript §4 |
| ✅ | 3.13 | `PriceCards` (from config; Most popular) | Home, rental, city, pricing | brand.md §5.5 |
| ✅ | 3.14 | `SizeComparisonTable` | Size pages, pricing, blog | service-pages §5 |
| ✅ | 3.15 | `AllowedProhibitedList` (from config) | Rental pages | D9 |
| ✅ | 3.16 | `StoryParagraph` (explanatory paragraph) | All | brandscript §10 |
| ❌ | 3.17 | `LeadMagnetBand` (size quiz / permit checklist) | Home, blog, service | brandscript §11 |
| ✅ | 3.18 | `PriceCalculator` / size quiz | Pricing, home, blog | conversion §4 |
| ❌ | 3.19 | `BeforeAfter` (keyboard-accessible) | Junk/cleanout pages | service-pages §6 |
| ✅ | 3.20 | `Reviews` (real Google reviews; filter by city/service) (SEO C.12 #119, Audit #1) | All | conversion §7 |
| ✅ | 3.21 | `ServiceAreaGrid` / map + nearby-city links (keep varied-anchor logic) | Home, city, service | city-pages §4 |
| ✅ | 3.22 | `Faq` + `FaqSchema` (schema only from visible items) | All | best-seo §8 |
| ✅ | 3.23 | `CtaBand` | All | service-pages §5 |
| ✅ | 3.24 | `BlogLayout` v2: `keywords`, `category`, `readTime`, `updated`; in-body CTA; related posts (SEO C.5 #49, C.9 #91) | Blog | blogging.md §2 |

---

## 4. Pages — Phase 1 rebuild (74 URLs)

A page is ✅ once its copy is approved, it's built in the new design, its SEO checklist passes, and it's live. Action and keyword for each URL are in [pre-launch.md §4](./pre-launch.md#4-page-inventory-all-74-urls). Wave numbers from [pre-launch.md §6](./pre-launch.md#6-build-order-waves).

### 4.1 Core (9)

| Status | Wave | URL | Action |
| --- | --- | --- | --- |
| ✅ | 1 | `/` | Rebuild |
| ✅ | 1 | `/dumpster-rental-pricing` | Rebuild |
| ✅ | 1 | `/contact` | Rebuild |
| ✅ | 1 | `/thank-you` | Rebuild (noindex) |
| ✅ | 2 | `/services` | Rebuild |
| ✅ | 6 | `/about-us` | Rebuild |
| ✅ | 6 | `/service-locations` | Rebuild |
| ✅ | 6 | `/blog` | Rebuild |
| ✅ | 6 | `/facebook-offer` | Rebuilt (noindex); offer terms from `facebookOffer` config (D2) |

### 4.2 Core services (21)

| Status | Wave | URL | Action |
| --- | --- | --- | --- |
| ✅ | 2 | `/services/dumpster-rental` | Refocus |
| ✅ | 2 | `/services/dumpster-trailer-rental` | Refocus |
| ✅ | 2 | `/services/construction-dumpster-rental` | Rebuild |
| ✅ | 2 | `/services/10-yard-dump-trailer` | Rebuild |
| ✅ | 2 | `/services/15-yard-dump-trailer` | Rebuild |
| ✅ | 2 | `/services/20-yard-dump-trailer` | Rebuild |
| ✅ | 4 | `/services/junk-removal` | Rebuild |
| ✅ | 4 | `/services/junk-pick-up` | Merged: 301 → `/services/junk-removal` (D15) |
| ✅ | 4 | `/services/haul-away-junk` | Refocus |
| ✅ | 4 | `/services/trash-removal` | Rebuild |
| ✅ | 4 | `/services/trash-pick-up` | Merged: 301 → `/services/trash-removal` (D15) |
| ✅ | 4 | `/services/garbage-removal-service` | Merged: 301 → `/services/trash-removal` (D15) |
| ✅ | 4 | `/services/pasco-county-trash-pickup` | Refocus |
| ✅ | 4 | `/services/construction-debris-removal` | Rebuild |
| ✅ | 4 | `/services/appliance-removal` | Rebuild |
| ✅ | 4 | `/services/furniture-removal` | Rebuild |
| ✅ | 4 | `/services/mattress-disposal` | Rebuild |
| ✅ | 4 | `/services/yard-waste-removal` | Rebuild |
| ✅ | 4 | `/services/garage-cleaning-service` | Refocus |
| ✅ | 4 | `/services/hoarding-cleanup` | Rebuild |
| ✅ | 4 | `/services/bobcat-services` | Rebuild |

### 4.3 Service + city (7)

| Status | Wave | URL | Action |
| --- | --- | --- | --- |
| ✅ | 3 | `/services/junk-removal-new-port-richey-fl` | Rebuild |
| ✅ | 3 | `/services/appliance-removal-new-port-richey-fl` | Rebuild |
| ✅ | 3 | `/services/construction-debris-removal-new-port-richey-fl` | Rebuild |
| ✅ | 3 | `/services/garage-cleaning-service-new-port-richey-fl` | Refocus |
| ✅ | 3 | `/services/hoarding-cleanup-new-port-richey-fl` | Rebuild |
| ✅ | 3 | `/services/junk-removal-port-richey` | Rebuild |
| ✅ | 3 | `/services/junk-removal-palm-harbor` | Rebuild |

### 4.4 City & county (28)

**Copy** for a city page = all unique fields in [city-pages.md §2](./city-pages.md#2-the-anti-doorway-rule) filled and verified.

| Status | Wave | URL | Tier |
| --- | --- | --- | --- |
| ✅ | 1 | `/services/dumpster-rental-new-port-richey-fl` | 1 (hub) |
| ✅ | 3 | `/services/dumpster-rental-holiday-fl` | 1 |
| ✅ | 3 | `/services/dumpster-rental-trinity-fl` | 1 |
| ✅ | 3 | `/services/dumpster-rental-hudson-fl` | 1 |
| ✅ | 3 | `/services/dumpster-rental-palm-harbor` | 1 |
| ✅ | 3 | `/services/dumpster-rental-odessa-fl` | 1 |
| ✅ | 5 | `/services/dumpster-rental-spring-hill` | 2 |
| ✅ | 5 | `/services/dumpster-rental-land-o-lakes-fl` | 2 |
| ✅ | 5 | `/services/dumpster-rental-wesley-chapel-fl` | 2 |
| ✅ | 5 | `/services/dumpster-rental-lutz-fl` | 2 |
| ✅ | 5 | `/services/dumpster-rental-dunedin-fl` | 2 |
| ✅ | 5 | `/services/dumpster-rental-oldsmar-fl` | 2 |
| ✅ | 5 | `/services/dumpster-rental-clearwater-fl` | 2 |
| ✅ | 5 | `/services/dumpster-rental-safety-harbor-fl` | 2 |
| ✅ | 5 | `/services/dumpster-rental-westchase-fl` | 2 |
| ✅ | 5 | `/services/dumpster-rental-keystone-fl` | 2 |
| ✅ | 5 | `/services/dumpster-rental-zephyrhills-fl` | 3 ❓ D16 |
| ✅ | 5 | `/services/dumpster-rental-dade-city-fl` | 3 ❓ D16 |
| ✅ | 5 | `/services/dumpster-rental-san-antonio-fl` | 3 ❓ D16 |
| ✅ | 5 | `/services/dumpster-rental-brooksville-fl` | 3 ❓ D16 |
| ✅ | 5 | `/services/dumpster-rental-largo-fl` | 3 ❓ D16 |
| ✅ | 5 | `/services/dumpster-rental-seminole-fl` | 3 ❓ D16 |
| ✅ | 5 | `/services/dumpster-rental-pinellas-park-fl` | 3 ❓ D16 |
| ✅ | 5 | `/services/dumpster-rental-st-petersburg-fl` | 3 ❓ D16 |
| ✅ | 5 | `/services/dumpster-rental-pinellas-county` | County |
| ✅ | 5 | `/services/dumpster-rental-hillsborough-county-fl` | County |
| ✅ | 5 | `/services/dumpster-rental-hernando-county-fl` | County |
| ✅ | 5 | `/services/dumpster-rental-tampa-bay` | Region |

### 4.5 Blog posts (9)

| Status | Wave | URL | Action |
| --- | --- | --- | --- |
| ✅ | 6 | `/blog/affordable-dumpster-rental` | Rebuild |
| ✅ | 6 | `/blog/appliance-removal-in-depth-guide` | Rebuild |
| ✅ | 6 | `/blog/complete-guide-to-estate-cleanout-services` | Rebuild |
| ✅ | 6 | `/blog/dump-trailer-services-explained` | Rebuild |
| ✅ | 6 | `/blog/guide-to-roll-off-dumpster-trailers-choosing-the-right-size` | Rebuild |
| ✅ | 6 | `/blog/haul-junk-away-your-guide-to-decluttering` | Rebuilt; merge still open (D15) |
| ✅ | 6 | `/blog/how-to-rent-a-dumpster-tips-tricks-and-advice` | Rebuild |
| ✅ | 6 | `/blog/top-five-projects-that-call-for-a-dumpster-rental` | Rebuild |
| ✅ | 6 | `/blog/ultimate-guide-to-junk-removal` | Rebuild |

### 4.6 Policy / utility (new, ship with Phase 1)

| Status | URL | Ref |
| --- | --- | --- |
| ✅ | `/privacy-policy` | conversion §5 |
| ✅ | `/sms-terms` | conversion §5 |
| ✅ | `/rental-terms` | brand.md §7 |
| ✅ | Custom `404` (SEO C.4 #39) | best-seo §9 |

*(Policy pages are tracked here but not counted in the 74.)*

---

## 5. Technical SEO

| Status | # | Task | Ref |
| --- | --- | --- | --- |
| ❌ | 5.1 | Verify apex + http → `https://www.` 301 (SEO C.4 #38). 2026-10-26: `http://` apex 308s to `https://` apex (two hops); apex → www unconfirmed (rate-limited) | pre-launch §5 |
| ❌ | 5.2 | GSC 404 + backlink + Wayback audit for legacy URLs; add 301s | pre-launch §5 |
| ✅ | 5.3 | `redirects()` in `next.config.mjs` for approved merges (D15). Added for the 3 service merges; add the blog post if merged | pre-launch §5 |
| ✅ | 5.4 | Crawl old sitemap vs. new build: every URL 200/301 | pre-launch §8 |
| ❌ | 5.5 | Validate every template in Rich Results Test (SEO C.3 #32) | best-seo §8 |
| ✅ | 5.6 | `Product`/`Offer` schema on size + pricing pages | best-seo §8 |
| ❌ | 5.7 | Submit sitemap to GSC + Bing after launch (SEO C.4 #41) | best-seo §9 |
| ✅ | 5.8 | Mobile test top 10 pages (SEO C.4 #42) | best-seo §9 |
| ✅ | 5.9 | Preconnect/dns-prefetch for GA, Ads, reCAPTCHA (SEO C.4 #43) | best-seo §9 |
| ❌ | 5.10 | Keyword-rich image filenames on rebuilt pages (SEO C.2 #19) | brand.md §5.4 |
| ✅ | 5.11 | ~~Service Areas dropdown in nav~~ Superseded: owner chose a plain "Service Areas" link (SEO C.5 #47) | service-pages §8 |
| ❌ | 5.12 | Baseline Core Web Vitals before + after (home, NPR, pricing, contact) (SEO C.7 #74) | best-seo §9 |
| ❌ | 5.13 | LCP < 2.5s mobile per template; bundle < 200KB initial JS (SEO C.7 #73) | best-seo §9 |
| ✅ | 5.14 | City pages ≥40% unique text (diff check) before each ships. 2026-10-26: all 28 pass at 42–47% vs. their closest sibling | city-pages §4 |
| ❌ | 5.15 | **Alex verifies city facts**: each `content/cities/*.js` and service+city file has a `verify` list (permit phones, facilities, HOA notes, drive times). Confirm, then set `lastVerified` | city-pages §8 |

---

## 6. Conversion & sales

| Status | # | Task | Ref |
| --- | --- | --- | --- |
| ✅ | 6.1 | Consistent primary CTA "Book Your Dumpster" sitewide | brandscript §5 |
| ✅ | 6.2 | Price visible above the fold on home, rental, city pages | conversion §2 |
| ✅ | 6.3 | 2-step hero booking card | conversion §3 |
| ✅ | 6.4 | Price calculator / size quiz (Audit #5) | conversion §4 |
| ❌ | 6.5 | `/book` online booking (Audit #6) | D17 |
| ❌ | 6.6 | SMS consent on all phone-collecting forms (Audit #3). Removed from the booking form at owner request; revisit with 6.7 | conversion §5 |
| ❌ | 6.7 | A2P 10DLC registration for the texting number | conversion §5 |
| ❌ | 6.8 | Review reCAPTCHA threshold (0.9) vs. rejected-lead logs; add honeypot. Honeypot live on all forms + API; threshold review needs Vercel logs | conversion §1 |
| ✅ | 6.9 | Consolidate lead API routes into one (`sendinfo`) | conversion §1 |
| ❌ | 6.10 | Instant auto-reply text + email with price | conversion §6 |
| ❌ | 6.11 | After-hours auto-reply + booking link | conversion §6 |
| ❌ | 6.12 | CRM / system of record with lead statuses (D17) | conversion §6 |
| ❌ | 6.13 | Sales follow-up sequence (unbooked quotes) | brandscript §12 |
| ❌ | 6.14 | Lead magnet built (size quiz or permit checklist). Size quiz live on `/dumpster-rental-pricing`; no email capture yet | brandscript §11 |
| ❌ | 6.15 | Nurture sequence (lead magnet) | brandscript §12 |
| ✅ | 6.16 | Thank-you page: price, next steps, expected reply time | conversion §3 |
| ❌ | 6.17 | Contractor account offer + request form | conversion §3 |
| ❌ | 6.18 | Guarantee live on site (D6) | conversion §8 |
| ❌ | 6.19 | Live chat / AI intake evaluation (Audit #4) | conversion §3 |
| ❌ | 6.20 | Google Ads landing-page alignment (keyword + city → matching page); LSA evaluation | conversion §9 |

---

## 7. Local SEO, GBP, citations, reviews

| Status | # | Task | Ref |
| --- | --- | --- | --- |
| ❌ | 7.1 | GBP primary category: Dumpster rental service (SEO C.6 #53) | best-seo §10 |
| ❌ | 7.2 | GBP secondary categories (SEO C.6 #54) | best-seo §10 |
| ❌ | 7.3 | GBP description rewritten from the one-liner (SEO C.6 #55) | brandscript §9 |
| ❌ | 7.4 | Every service in GBP with description (SEO C.6 #56) | best-seo §10 |
| ❌ | 7.5 | Each size as a GBP Product with price (SEO C.6 #57) | D1 |
| ❌ | 7.6 | 20+ geotagged real photos + video (SEO C.6 #58, #59) | 2.8 |
| ❌ | 7.7 | Weekly GBP post (SEO C.6 #61) | new-seo-pages Lane D |
| ❌ | 7.8 | Seed 8–10 GBP Q&A (SEO C.6 #62) | best-seo §10 |
| ❌ | 7.9 | NAP identical across site, GBP, citations (SEO C.6 #63) | brand.md §1 |
| ❌ | 7.10 | Bing Places + Apple Business Connect (SEO C.10 #94, #95) | best-seo §10 |
| ❌ | 7.11 | Yelp, Angi, HomeAdvisor, Thumbtack (SEO C.10 #96, #98–#100) | best-seo §10 |
| ❌ | 7.12 | BBB profile + badge on site (SEO C.10 #97, Audit #2) | best-seo §10 |
| ❌ | 7.13 | Nextdoor business page (SEO C.10 #101) | best-seo §10 |
| ❌ | 7.14 | West Pasco Chamber (SEO C.10 #102) | best-seo §11 |
| ❌ | 7.15 | Secondary directories (SEO C.10 #103–#105) | best-seo §11 |
| ❌ | 7.16 | Automated review-request SMS + email at pickup (SEO C.12 #115, #116) | conversion §7 |
| ❌ | 7.17 | QR review cards/flyers for trailers + invoices (SEO C.12 #117) | conversion §7 |
| ❌ | 7.18 | Driver/owner on-site review ask script (SEO C.12 #118) | conversion §7 |
| ❌ | 7.19 | Respond to every review within 24h (ongoing) (SEO C.12 #120) | conversion §7 |
| ❌ | 7.20 | Trade-partner outreach: roofers, realtors, PMs, movers (SEO C.11 #107–#110) | best-seo §11 |
| ❌ | 7.21 | Local PR / community story (SEO C.11 #106, #114) | best-seo §11 |
| ❌ | 7.22 | Google Alerts for brand mentions (SEO C.11 #113) | best-seo §11 |

---

## 8. Measurement

| Status | # | Task | Ref |
| --- | --- | --- | --- |
| ✅ | 8.1 | GA4 events: call, text, form, booking, price_shown, lead_magnet (SEO C.13 #125–#127) | conversion §10 |
| ❌ | 8.2 | Verify Google Ads conversions fire on every new template. ⚠️ `_document.js` configures `AW-17610711210` but `/thank-you` fires `AW-11112846382`; confirm which account is live | conversion §9 |
| ❌ | 8.3 | Call tracking with DNI (CallRail or similar) (SEO C.13 #124) | conversion §10 |
| ❌ | 8.4 | Rank tracker: 30–50 keywords + local geo-grid for NPR/Pasco (SEO C.13 #123) | best-seo §12 |
| ❌ | 8.5 | Baseline metrics captured **before** launch (conv. rate, leads/mo, rankings, GBP stats) | conversion goal table |
| ❌ | 8.6 | Lead → booked job tracking in CRM | conversion §6 |
| ❌ | 8.7 | Monthly report template (SEO C.13 #129) | best-seo §12 |
| ❌ | 8.8 | Monthly report sent (ongoing) (SEO C.13 #130) | best-seo §12 |
| ❌ | 8.9 | Hotjar recordings/heatmaps reviewed on home, pricing, NPR after launch | conversion §11 |
| ✅ | 8.10 | Scroll-depth event on money pages (SEO C.13 #128) | conversion §10 |
| ❌ | 8.11 | Post-launch 30/60/90-day review vs. baseline | — |

---

## 9. Cleanup & tech debt

| Status | # | Task | Ref |
| --- | --- | --- | --- |
| ✅ | 9.1 | Delete legacy components no longer imported (3 navbars, 2 footers, pricing variants, heroes, etc.) (SEO C.7 #69) | brand.md §8 |
| ✅ | 9.2 | Remove commented-out imports/sections from pages (SEO C.7 #70) | — |
| ✅ | 9.3 | Replace raw `<img>` with `next/image`; hero `priority`; lazy below fold (SEO C.7 #66–#68) | best-seo §9 |
| ✅ | 9.4 | Convert `public/` PNGs to WebP; delete unused assets (`vercel.svg`, `next.svg`, `thirteen.svg`, etc.) (SEO C.7 #71) | — |
| ❌ | 9.5 | Code-split heavy client components (SEO C.7 #72) | — |
| ✅ | 9.6 | Grep: zero hard-coded prices / review counts / phone numbers outside `site-config` | pre-launch §8 |
| ✅ | 9.7 | Remove unused API routes (`hello`, `sendemail`, `sendgrid`, `sendcontacttwo`, `senddata` if FB form migrates) | 6.9 |
| ✅ | 9.8 | Move `RECAPTCHA_*` docs into `docs/`; archive `seo-updates.md` + audit doc as legacy | README |
| ✅ | 9.9 | Update root `README.md` to point at `docs/` | README |

---

## 10. Phase 2: new pages

44 pages at ~4/month, tracked row-by-row in **[new-seo-pages.md](./new-seo-pages.md#build-tracker)**. Summary:

| Months | Focus | Pages | ✅ |
| --- | --- | --- | --- |
| 1–2 | Revenue gaps: booking, Port Richey, estate cleanout, roofing, contractors/roofers, same-day, prohibited items | 8 | 0 |
| 3–5 | Question library R1 + Tarpon Springs + realtors/PMs + move-out + commercial | 12 | 0 |
| 6–9 | Storm, sizing series, permit-by-county, reviews/FAQ hubs, cost posts | 16 | 0 |
| 10–11 | Edge CDPs, HQ service-city pages, how-to posts | 8 | 0 |
