# Pre-Launch Plan (Phase 1) — Rebuild Every Existing Page

> **Goal of Phase 1:** rebuild the **entire site** in the new brand system and StoryBrand 2.0 messaging, recreating **every page that exists today at the exact same URL**, with zero 404s and no lost rankings. Net-new pages come in [Phase 2](./new-seo-pages.md). Every page follows [best-seo-practices.md](./best-seo-practices.md).
>
> **Status for every page is tracked in [todo.md §4](./todo.md#4-pages--phase-1-rebuild-74-urls)**, not here. This doc defines *what* each page should become.

## The hard rules

1. **No 404s.** Every URL below returns `200` at the same path after launch (unless deliberately merged, which means a `301`, never a 404).
2. **No ranking resets.** Keep each page's URL, and keep (or improve) its primary keyword targeting. Don't rewrite a ranking page's intent unless it's in a cannibalization cluster below.
3. **Merges are 301s.** If two pages are consolidated, the weaker URL 301s to the stronger one, set in `next.config.mjs` `redirects()`, and the stronger page absorbs the useful content.
4. **Launch in waves, not big-bang** *(recommended)*: shared shell + home + pricing + NPR hub first, then the rest by template. See §6.

---

## 1. Current-state audit: what's wrong today

The site has real assets (5.0★ reviews, a founder story, 28 local pages, solid schema/SEO plumbing from the April 2026 work) but it **doesn't sell**. Ranked by impact on sales:

| # | Issue | Fix in rebuild |
| --- | --- | --- |
| 1 | **Messaging is about Lupo, not the customer.** Hero = "#1 Dumpster Rental Service…"; sections like "How We Compare" and "About Founder" carry the page. No stakes, no plan, no clear single CTA. | StoryBrand 2.0 spine on every page ([brandscript.md](./brandscript.md)). |
| 2 | **Conflicting prices.** $325/$400/$500 (live pricing), $260/$350/$360 and $300/$365/$450 (legacy components), $275 (FB offer). Rental days, weight overage, extra-day fees not stated consistently. | One price sheet in `lib/site-config.js`; every price reads from it. |
| 3 | **Conflicting/unverifiable proof.** 5.0★ 160+ vs 4.9★ 130+/144; "1,000+" vs "500+ happy customers"; "#1"; "Best Pricing Guaranteed"; Sunbiz # labeled as "License #". | Verified claims only, from config ([brand.md §7](./brand.md#7-claims--compliance)). |
| 4 | **Generic template look.** Default shadcn theme (tokens are untouched grays), Inter everywhere, red hard-coded 370+ times, stock/AI-looking imagery. | Brand 2.0 tokens, display typeface, real Lupo photography. |
| 5 | **No way to buy online.** No price-in-form, calculator, booking, SMS opt-in, or lead magnet. | [conversion.md](./conversion.md). |
| 6 | **Doorway risk on 28 city pages.** Same copy with the city swapped. | Unique local data per city ([city-pages.md](./city-pages.md)). |
| 7 | **Keyword cannibalization** across dumpster, junk, and trash pages (see §3). | Refocus or merge. |
| 8 | **Performance drag.** Autoplay MP4 hero, Meta Pixel `beforeInteractive`, large PNGs, 60+ legacy components. | Poster-image LCP, script strategy, WebP, delete legacy. |
| 9 | **Accessibility gaps.** Nav/footer nested inside `<main>`, no skip link, unpausable video, red-on-dark contrast. | [accessibility.md](./accessibility.md). |
| 10 | **Gmail address as business email; no privacy/SMS/terms pages.** | Domain email + policy pages. |

---

## 2. Action types

| Action | Meaning |
| --- | --- |
| **Rebuild** | Same URL, same intent. New design + new StoryBrand copy meeting the quality bar. (Every page gets at least this.) |
| **Refocus** | Same URL, re-aimed at a distinct intent to stop cannibalization with a sibling. |
| **Merge?** | Candidate to 301 into a stronger URL. **Decision needed** (see todo.md). Until decided, treat as Refocus. |
| **Rebuild (noindex)** | Conversion/ad page; rebuilt in the new design, stays out of the index. |

---

## 3. Cannibalization clusters (fix these first)

| Cluster | Pages competing | Resolution |
| --- | --- | --- |
| **A. Pasco dumpster rental** | `/` · `/services/dumpster-rental` (H1 "Roll-Off Dumpster Rental Services in Pasco County, FL") · `/services/dumpster-trailer-rental` · `/services` | `/` owns **dumpster rental Pasco County** (+ brand). `/services/dumpster-rental` refocuses to **residential/home dumpster rental** (homeowner projects, driveway, what's included). `/services/dumpster-trailer-rental` owns **dump trailer rental** (equipment intent; trailer vs. roll-off). `/services` = hub, owns **dumpster rental & junk removal services**. |
| **B. Junk removal** | `/services/junk-removal` · `/services/junk-pick-up` · `/services/haul-away-junk` | `junk-removal` = pillar (**junk removal Pasco County**). `haul-away-junk` → **single-item / same-day haul-away**. `junk-pick-up` → **Merge?** into `junk-removal`, or refocus to **curbside junk pickup** (we pick up what you've set out) *(confirm offering)*. |
| **C. Trash / garbage** | `/services/trash-pick-up` · `/services/trash-removal` · `/services/garbage-removal-service` · `/services/pasco-county-trash-pickup` | Lupo isn't a weekly municipal hauler *(confirm)*, so four trash pages is three too many. `trash-removal` = **one-time trash removal**; `pasco-county-trash-pickup` = local variant. `trash-pick-up` and `garbage-removal-service` → **Merge?** into `trash-removal`. |
| **D. Construction** | `/services/construction-dumpster-rental` · `/services/construction-debris-removal` | Distinct, keep both: rental (**construction dumpster rental**, contractor self-load) vs. service (**construction debris removal**, we load/haul). Cross-link. |
| **E. Sizes vs. pricing vs. sizing blog** | `/services/{10,15,20}-yard-dump-trailer` · `/dumpster-rental-pricing` · blog `guide-to-roll-off-dumpster-trailers-choosing-the-right-size` | Size pages own **{n} yard dumpster rental**; pricing owns **dumpster rental prices / cost**; the blog owns **what size dumpster do I need**. |
| **F. Garage** | `/services/garage-cleaning-service` | Searchers mean **garage cleanout** (junk out), not cleaning. Refocus copy to cleanout; URL stays. |
| **G. Regional** | `/services/dumpster-rental-tampa-bay` · `-pinellas-county` · `-hillsborough-county` · `-hernando-county` | County pages own **dumpster rental {County} County**; Tampa Bay owns the **regional** term and links to counties. None target "Pasco" (home owns it). |
| **H. Junk blog posts** | `ultimate-guide-to-junk-removal` · `haul-junk-away-your-guide-to-decluttering` | **Merge?** the decluttering post into the junk removal guide. |

---

## 4. Page inventory: all 74 URLs

### Core pages (9)

| URL | Type | Action | Primary keyword | Notes |
| --- | --- | --- | --- | --- |
| `/` | Home | **Rebuild** | dumpster rental Pasco County | StoryBrand wireframe ([brandscript §10](./brandscript.md#10-storybrand-website-wireframe--lupo-home-page)) |
| `/services` | Hub | **Rebuild** | dumpster rental & junk removal services | Group by service line |
| `/dumpster-rental-pricing` | Pricing | **Rebuild** | dumpster rental prices | Conversion engine: prices, inclusions, fees, calculator |
| `/service-locations` | Hub | **Rebuild** | dumpster rental service areas | Map + county-grouped city links |
| `/about-us` | Core | **Rebuild** | Lupo Dumpster Rentals (brand) | Guide story: empathy + authority; real license/insurance |
| `/contact` | Core | **Rebuild** | book a dumpster rental | Booking-first; NAP; hours; map |
| `/blog` | Hub | **Rebuild** | dumpster rental tips | Categories + featured posts |
| `/thank-you` | Conversion | **Rebuild (noindex)** | n/a | Show price + next steps + review proof; Ads conversion tag |
| `/facebook-offer` | Ad landing | **Rebuild (noindex)** | n/a | Align offer with price sheet |

### Core service pages (21)

| URL | Action | Primary keyword | Notes |
| --- | --- | --- | --- |
| `/services/dumpster-rental` | **Refocus** | residential dumpster rental | Cluster A |
| `/services/dumpster-trailer-rental` | **Refocus** | dump trailer rental | Cluster A |
| `/services/construction-dumpster-rental` | **Rebuild** | construction dumpster rental | Cluster D; link industries pages (Phase 2) |
| `/services/10-yard-dump-trailer` | **Rebuild** | 10 yard dumpster rental | Cluster E |
| `/services/15-yard-dump-trailer` | **Rebuild** | 15 yard dumpster rental | Cluster E |
| `/services/20-yard-dump-trailer` | **Rebuild** | 20 yard dumpster rental | Cluster E |
| `/services/junk-removal` | **Rebuild** | junk removal Pasco County | Cluster B pillar |
| `/services/junk-pick-up` | **Merge?** | junk pickup | Cluster B |
| `/services/haul-away-junk` | **Refocus** | junk haul away | Cluster B: single-item/same-day |
| `/services/trash-removal` | **Rebuild** | trash removal | Cluster C pillar |
| `/services/trash-pick-up` | **Merge?** | trash pickup | Cluster C |
| `/services/garbage-removal-service` | **Merge?** | garbage removal | Cluster C |
| `/services/pasco-county-trash-pickup` | **Refocus** | trash pickup Pasco County | Cluster C local |
| `/services/construction-debris-removal` | **Rebuild** | construction debris removal | Cluster D |
| `/services/appliance-removal` | **Rebuild** | appliance removal | FL recycling/Freon notes |
| `/services/furniture-removal` | **Rebuild** | furniture removal | |
| `/services/mattress-disposal` | **Rebuild** | mattress disposal | |
| `/services/yard-waste-removal` | **Rebuild** | yard waste removal | Storm debris angle |
| `/services/garage-cleaning-service` | **Refocus** | garage cleanout | Cluster F |
| `/services/hoarding-cleanup` | **Rebuild** | hoarding cleanup | Compassionate tone |
| `/services/bobcat-services` | **Rebuild** | bobcat services | Demolition / grading / site prep |

### Service + city pages (7)

| URL | Action | Primary keyword |
| --- | --- | --- |
| `/services/junk-removal-new-port-richey-fl` | **Rebuild** | junk removal New Port Richey |
| `/services/junk-removal-port-richey` | **Rebuild** | junk removal Port Richey |
| `/services/junk-removal-palm-harbor` | **Rebuild** | junk removal Palm Harbor |
| `/services/appliance-removal-new-port-richey-fl` | **Rebuild** | appliance removal New Port Richey |
| `/services/construction-debris-removal-new-port-richey-fl` | **Rebuild** | construction debris removal New Port Richey |
| `/services/garage-cleaning-service-new-port-richey-fl` | **Refocus** | garage cleanout New Port Richey |
| `/services/hoarding-cleanup-new-port-richey-fl` | **Rebuild** | hoarding cleanup New Port Richey |

### City & county dumpster rental pages (28)

All are **Rebuild** with the city-pages.md unique-content bar. Primary keyword = `dumpster rental {City} FL`. Tier from [city-pages.md §5](./city-pages.md#5-city-tiers--priorities).

| URL | Tier | Notes |
| --- | --- | --- |
| `/services/dumpster-rental-new-port-richey-fl` | 1 (hub) | #1 local money page; build first |
| `/services/dumpster-rental-holiday-fl` | 1 | HQ city |
| `/services/dumpster-rental-trinity-fl` | 1 | |
| `/services/dumpster-rental-hudson-fl` | 1 | |
| `/services/dumpster-rental-palm-harbor` | 1 | URL lacks `-fl`; keep as-is |
| `/services/dumpster-rental-odessa-fl` | 1 | |
| `/services/dumpster-rental-spring-hill` | 2 | URL lacks `-fl`; keep |
| `/services/dumpster-rental-land-o-lakes-fl` | 2 | |
| `/services/dumpster-rental-wesley-chapel-fl` | 2 | |
| `/services/dumpster-rental-lutz-fl` | 2 | |
| `/services/dumpster-rental-dunedin-fl` | 2 | |
| `/services/dumpster-rental-oldsmar-fl` | 2 | |
| `/services/dumpster-rental-clearwater-fl` | 2 | |
| `/services/dumpster-rental-safety-harbor-fl` | 2 | |
| `/services/dumpster-rental-westchase-fl` | 2 | |
| `/services/dumpster-rental-keystone-fl` | 2 | |
| `/services/dumpster-rental-zephyrhills-fl` | 3 | Confirm service frequency |
| `/services/dumpster-rental-dade-city-fl` | 3 | Confirm |
| `/services/dumpster-rental-san-antonio-fl` | 3 | Confirm |
| `/services/dumpster-rental-brooksville-fl` | 3 | Confirm |
| `/services/dumpster-rental-largo-fl` | 3 | Confirm |
| `/services/dumpster-rental-seminole-fl` | 3 | Confirm |
| `/services/dumpster-rental-pinellas-park-fl` | 3 | Confirm |
| `/services/dumpster-rental-st-petersburg-fl` | 3 | Confirm |
| `/services/dumpster-rental-pinellas-county` | County | Cluster G |
| `/services/dumpster-rental-hillsborough-county-fl` | County | Cluster G |
| `/services/dumpster-rental-hernando-county-fl` | County | Cluster G |
| `/services/dumpster-rental-tampa-bay` | Region | Cluster G |

### Blog posts (9)

All **Rebuild** (upgrade to blogging.md standard) at the same URL. Proposed keywords in [blogging.md §7](./blogging.md#7-existing-posts-migrate--upgrade-in-phase-1).

- `/blog/affordable-dumpster-rental`
- `/blog/appliance-removal-in-depth-guide`
- `/blog/complete-guide-to-estate-cleanout-services`
- `/blog/dump-trailer-services-explained`
- `/blog/guide-to-roll-off-dumpster-trailers-choosing-the-right-size`
- `/blog/haul-junk-away-your-guide-to-decluttering` *(Merge? — Cluster H)*
- `/blog/how-to-rent-a-dumpster-tips-tricks-and-advice`
- `/blog/top-five-projects-that-call-for-a-dumpster-rental`
- `/blog/ultimate-guide-to-junk-removal`

**Totals:** 9 core + 21 service + 7 service-city + 28 city/county + 9 blog = **74 URLs**.

---

## 5. Redirects & legacy URLs

- **Current redirects** (`next.config.mjs`): `/services/junk-pick-up` → `/services/junk-removal`; `/services/trash-pick-up` and `/services/garbage-removal-service` → `/services/trash-removal`. No `vercel.json`.
- **Host:** confirm apex `lupodumpsterrentals.com` and `http://` 301 to `https://www.lupodumpsterrentals.com` (Vercel domain settings, or a `redirects()` host rule).
- **Legacy URLs:** `notes.txt` lists paths like `/junk_removal`, `/debris_removal`, `/items/curbside_pickup`, `/pasco-county-fl`, `/dumpster-rental-clearwater`. It's unclear whether these are old Lupo URLs or a competitor's structure. **Check GSC → Pages → Not found (404)**, backlinks (Ahrefs/Semrush), and the Wayback Machine for any old Lupo URLs, and 301 each to its closest current page.
- **Merges** decided in §3 get added here as they're approved:

```js
// next.config.mjs (target)
async redirects() {
  return [
    // { source: "/services/trash-pick-up", destination: "/services/trash-removal", permanent: true },
  ];
}
```

---

## 6. Build order (waves)

| Wave | Scope | Why first |
| --- | --- | --- |
| **0 · Foundation** | Decisions, `site-config`, tokens, fonts, logo, shared shell (header, footer, sticky bar, skip link), core components, photo shoot | Everything depends on it |
| **1 · Money pages** | Home, pricing, contact/booking, NPR hub, thank-you | Highest traffic + conversion impact |
| **2 · Rental pages** | Dumpster rental, dump trailer rental, construction dumpster, 10/15/20 yd, services hub | Core product |
| **3 · Tier 1 cities** | Holiday, Trinity, Hudson, Palm Harbor, Odessa (+ remaining NPR service pages) | Map Pack core |
| **4 · Junk & specialty** | Junk/trash clusters (after merge decisions), appliance, furniture, mattress, yard, garage, hoarding, bobcat, debris | |
| **5 · Tier 2–3 cities + counties** | Remaining 22 location pages | Needs per-city research |
| **6 · Blog + misc** | 9 posts, blog index, about, service-locations, FB offer | |

Old and new pages can coexist during the waves since URLs don't change. Ship each wave behind a full QA pass.

---

## 7. Technical foundation that ships with the rebuild

- **Host + HTTPS:** www canonical, 301s for apex/http (verify).
- **Single facts source:** `lib/site-config.js` drives header, footer, schema, `Seo.jsx`, price cards, `llms.txt`.
- **Schema:** keep the April 2026 architecture (Organization, WebSite, Service sitewide; LocalBusiness/FAQ/Breadcrumb per page); move all numbers to config; validate every template.
- **Performance:** poster-image LCP for video hero, Pixel `afterInteractive`, Hotjar `lazyOnload`, `next/image` + WebP everywhere, delete legacy components, LCP < 2.5s mobile per template.
- **Custom 404** with real 404 status.
- **Accessibility:** landmarks, skip link, contrast, reduced motion, video pause.
- **Policies:** `/privacy-policy`, `/sms-terms`, `/rental-terms` *(new; noindex optional)*.

---

## 8. Phase 1 launch checklist

- [ ] All 74 URLs return `200` (or approved `301`) — crawl the old sitemap against the new build.
- [ ] Merge decisions made; redirects live and tested.
- [ ] Apex/http → www 301 verified.
- [ ] Every price, size, rating, and review count on the site reads from `site-config` (grep for `$` and "reviews" literals = 0 outside config).
- [ ] Every page follows the StoryBrand spine; hero passes the 3-question test on a phone.
- [ ] Tier 1 city pages meet the anti-doorway bar; Tier 2–3 either meet it or are folded/301'd.
- [ ] Schema validated on every template (Rich Results Test).
- [ ] LCP < 2.5s mobile on home, pricing, NPR hub, a service page, a blog post.
- [ ] Lighthouse a11y ≥ 95 + axe zero violations on each template.
- [ ] GA4 + Ads conversions fire on call, text, form, booking (tested on the new templates).
- [ ] Sitemap regenerated + submitted to GSC + Bing; `llms.txt` updated.
- [ ] Legacy components and API routes no longer referenced are deleted.
