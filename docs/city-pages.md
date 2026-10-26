# City Pages Guide — Local Pages That Rank Without Being Doorways

> **Read this every time you build or edit a `/services/dumpster-rental-{city}` page** (or any service + city page). City pages are the site's biggest traffic asset *and* its biggest risk: 28 pages on one template is exactly the pattern Google's doorway/scaled-content filters look for. Sitewide rules: [best-seo-practices.md](./best-seo-practices.md). Section spine: [service-pages.md §5](./service-pages.md#5-section-blueprint-storybrand-spine).

---

## 1. How city pages work today

- Each page file is a 3-line wrapper: `pages/services/dumpster-rental-{city}.jsx` → `<CityDumpsterPage data={getCity("{key}")} />`.
- Data lives in **`lib/cities.js`**: `city`, `county`, `urlSlug`, `zipCodes`, `neighborhoods`, `nearbyCities`, `geoCoords`, `countyPermitPhone`, `cityPermitPhone`, `isCountyPage`.
- Template: `components/new/city-dumpster-page.jsx` renders ~20 sections (hero, intro, why-local, sizes, pricing, form, process, neighborhoods, uses, disposal, permits, rental-vs-junk, comparison, map, nearby, other services, reviews, FAQ, CTA) + `LocationSchema` + breadcrumbs.

**The problem:** apart from neighborhoods, ZIPs, and permit phones, the copy is the same on all 28 pages with the city name swapped. That's thin, doorway-style content. The rebuild keeps the single template (good engineering) but **requires real unique content per city in the data file**.

---

## 2. The anti-doorway rule

A city page may only ship if it has **all** of the following unique to that city:

| Required unique field | Example (New Port Richey) |
| --- | --- |
| `localIntro` (120–200 words, written by hand) | Mentions Main Street/downtown, Gulf Harbors canal homes, older housing stock = lots of renovation/cleanout work |
| `typicalProjects` (3–5, specific to the area) | Hurricane/flood cleanout on the coast, mobile-home cleanouts, roof replacements, estate cleanouts |
| `landmarks` / reference points (2–4) | Sims Park, US-19 corridor, Gulf High *(verify)* |
| `driveTimeFromHQ` | "~10 minutes from our Holiday yard" *(verify)* |
| `permitNotes` (real, verified) | City vs. county right-of-way rules + real phone numbers |
| `disposalFacility` | The actual landfill/transfer station used for that area *(verify)* |
| `hoaNotes` (where relevant) | Communities with HOA dumpster rules *(verify)* |
| `localReviews` (≥1 real review from that city/neighborhood) | Pulled from Google |
| `localPhotos` (≥1 real job photo in that city) | `public/images/cities/new-port-richey-*.webp` |
| `localFaqs` (2–3 city-specific Qs) | "Can I put a dumpster on the street in New Port Richey?" |

**If a city can't meet the bar, don't ship it as a standalone page.** Fold it into its county page or the nearest strong city page and 301 the URL (decision per city in `todo.md`).

**Never:**
- Find-and-replace a city name into shared paragraphs
- Claim a "local office" or "yard" in a city where there isn't one
- List neighborhoods/ZIPs we don't actually serve
- Reuse the same review on multiple city pages as if it were local

---

## 3. Data model (target `lib/cities.js` entry)

```js
"new-port-richey-fl": {
  // existing
  city: "New Port Richey",
  state: "FL",
  county: "Pasco County",
  urlSlug: "new-port-richey-fl",
  zipCodes: ["34652", "34653", "34654", "34655"],
  neighborhoods: [/* … */],
  nearbyCities: [/* … */],
  geoCoords: { latitude: 28.2442, longitude: -82.7193 },
  countyPermitPhone: "(727) 847-8032",
  cityPermitPhone: "(727) 853-1026",

  // new: required for launch
  tier: 1,                       // 1 = core, 2 = secondary, 3 = edge (see §5)
  h1Desire: "Get Your Space Back",
  localIntro: "…hand-written…",
  typicalProjects: [/* 3–5 */],
  landmarks: [/* 2–4 */],
  driveTimeFromHQ: "about 10 minutes",
  permitNotes: "…verified…",
  disposalFacility: { name: "…", note: "…" },
  hoaNotes: "…optional…",
  localReviewIds: [/* ids into a reviews data file */],
  localPhotos: [{ src: "/images/cities/…webp", alt: "…" }],
  localFaqs: [{ q: "…", a: "…" }],
  lastVerified: "2026-10-25",
}
```

The template renders the unique blocks prominently (high on the page), not buried below the shared sections.

---

## 4. City page section order (StoryBrand + local)

| # | Section | Unique or shared |
| --- | --- | --- |
| 1 | Hero: H1 `{h1Desire} with Flat-Rate Dumpster Rental in {City}, FL` + direct answer + Book/Call/Text + price teaser | Mixed |
| 2 | Trust strip | Shared |
| 3 | **Local intro** (`localIntro` + local photo) | **Unique** |
| 4 | Stakes (shared failure cards, one line tailored with `typicalProjects`) | Mixed |
| 5 | Sizes & flat prices (config) | Shared |
| 6 | **Popular projects in {City}** (`typicalProjects`) | **Unique** |
| 7 | Plan (3 steps) + CTA | Shared |
| 8 | **Local reviews** (`localReviewIds`) | **Unique** |
| 9 | **Permits & rules in {City}** (`permitNotes`, `hoaNotes`, phones) | **Unique** |
| 10 | **Where your debris goes** (`disposalFacility`) | **Unique** |
| 11 | Neighborhoods & ZIPs served + map | **Unique** |
| 12 | What can / can't go in | Shared |
| 13 | Other services in {City} (links) | Shared links |
| 14 | Nearby cities (varied anchors) | Shared logic |
| 15 | FAQ: 2–3 `localFaqs` + 3–4 shared | Mixed |
| 16 | CTA band | Shared |

Target: **≥40% of rendered words unique** to the city. Check with a quick diff of two city pages' rendered text before shipping.

---

## 5. City tiers & priorities

Tiering decides depth of content and rebuild order. **Tier 1 gets the most unique content and ships first.**

| Tier | Cities (current pages) | Rationale |
| --- | --- | --- |
| **1 · Core** | New Port Richey (hub), Holiday (HQ), Trinity, Hudson, Port Richey *(new page)*, Palm Harbor, Odessa | Closest to HQ; fastest delivery; strongest Map Pack potential |
| **2 · Secondary** | Spring Hill, Land O' Lakes, Wesley Chapel, Lutz, Tarpon Springs *(new)*, Dunedin, Oldsmar, Clearwater, Safety Harbor, Westchase, Keystone | Real demand, reachable, need strong unique content |
| **3 · Edge** | Zephyrhills, Dade City, San Antonio, Brooksville, Largo, Seminole, Pinellas Park, St. Petersburg | Further from HQ. Ship only if we actually deliver there regularly and can meet the §2 bar; otherwise fold into county pages |
| **County / region** | Pinellas County, Hillsborough County, Hernando County, Tampa Bay | Area-wide pages that link down to city pages; must not compete with the home page (Pasco) |

> **(decision needed)** Confirm with Alex which edge cities are actually served and how often. Pages for areas we rarely serve hurt trust and conversion.

---

## 6. Service + city pages

Existing: `junk-removal-new-port-richey-fl`, `junk-removal-palm-harbor`, `junk-removal-port-richey`, `appliance-removal-new-port-richey-fl`, `construction-debris-removal-new-port-richey-fl`, `garage-cleaning-service-new-port-richey-fl`, `hoarding-cleanup-new-port-richey-fl`.

Same anti-doorway rule applies. Only build a service + city combo when (a) there's real search demand (check GSC/keyword tool) and (b) we can write unique content (local photos, local jobs, local reviews for that service). Don't mass-generate a service × city matrix.

---

## 7. Schema for city pages

- `LocalBusiness` with the **real HQ address** (Holiday) and `areaServed` = the city (`City` + `containedInPlace` county). Do **not** put a fake address in the city.
- `Service` with `areaServed` city + offers from config.
- `FAQPage` matching the visible FAQ; `BreadcrumbList`: Home → Service Locations → {City}.
- `AggregateRating` only if reviews display on the page and numbers match Google.

---

## 8. Pre-publish checklist (city)

- [ ] All §2 unique fields filled and **verified** (permit phones, facility, landmarks); `lastVerified` set
- [ ] ≥40% rendered text unique (diff against another city page)
- [ ] ≥1 real local review and ≥1 real local photo
- [ ] Title `Dumpster Rental in {City}, FL | Lupo Dumpster Rentals` (≤60; shorten brand if needed)
- [ ] H1 desire + keyword; direct answer mentions {City}, FL + county
- [ ] Links: home, NPR hub (if not NPR), 3–6 nearby cities (varied anchors), services in city, pricing
- [ ] Schema: LocalBusiness (HQ address + areaServed), Service, FAQPage, BreadcrumbList; valid
- [ ] Prices from config; CTA top/middle/bottom; sticky bar works
- [ ] Status flipped in [todo.md](./todo.md)
