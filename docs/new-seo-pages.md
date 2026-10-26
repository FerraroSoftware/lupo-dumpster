# New SEO Pages Plan (Phase 2) — Net-New Pages After Launch

> **Goal of Phase 2:** after [Phase 1](./pre-launch.md) rebuilds all 74 existing URLs, grow the site with **net-new pages at ~4/month**, in priority order: revenue gaps first, then the question library that feeds them, then long-tail authority. Every page follows [best-seo-practices.md](./best-seo-practices.md) and its type guide ([service-pages.md](./service-pages.md), [city-pages.md](./city-pages.md), [blogging.md](./blogging.md)).
>
> Carries over the open content items from legacy [`seo-updates.md`](./legacy/seo-updates.md) (C.8 / C.9) and [`notes.txt`](./legacy/notes.txt), re-prioritized for sales.

## Rules for new pages

- **Validate before building.** Each row needs a demand check (GSC queries we already get impressions for + a keyword tool: volume, difficulty, local SERP). Record the evidence in the Notes column. **No row has invented volume numbers.** If a page has no demand, drop it.
- **One primary keyword per page; no cannibalization** with Phase 1 pages (see the [cluster map](./pre-launch.md#3-cannibalization-clusters-fix-these-first)).
- **Tiers:** `T` = service/city/industry/core page (sells), `R` = blog post (informs, then links to a `T` page). T1/R1 first.
- **URL depth ≤ 3 segments.** Service and city pages stay under `/services/`; industries under `/industries/`.
- **City pages must meet the anti-doorway bar** or they don't ship.
- **When you ship a page:** add it to nav/footer config (if primary), confirm it's in the sitemap after build, update `llms.txt`, generate/shoot a unique hero image, link to it from its hub + 2–3 related pages, and flip it to ✅ below and in [todo.md](./todo.md).

## Build tracker

Legend: ✅ published · 🟨 in progress · ⬜ not started · ❓ needs decision/validation. **0 / 44 published.**

| Status | # | Month | URL | Tier | Primary keyword | Notes / evidence |
| --- | --- | --- | --- | --- | --- | --- |
| ⬜ | 1 | 1 | `/book` | Core | book a dumpster online | Online booking flow ([conversion.md §4](./conversion.md#4-pricing-calculator--booking-decisions)); noindex optional |
| ⬜ | 2 | 1 | `/services/dumpster-rental-port-richey-fl` | T1 | dumpster rental Port Richey FL | Separate city from NPR; flagged in seo-updates C.8 #76 |
| ⬜ | 3 | 1 | `/services/estate-cleanout` | T1 | estate cleanout service | Blog post exists, no service page to convert it |
| ⬜ | 4 | 1 | `/services/roofing-dumpster-rental` | T1 | roofing dumpster rental | `roofers-section` exists; roofing tear-off = repeat contractor revenue |
| ⬜ | 5 | 2 | `/industries/roofers` | T1 | dumpster rental for roofers | Contractor character (brandscript §1); seo-updates C.8 #80 |
| ⬜ | 6 | 2 | `/industries/contractors` | T1 | contractor dumpster rental | seo-updates C.8 #81; contractor account offer |
| ⬜ | 7 | 2 | `/services/same-day-dumpster-rental` | T1 | same day dumpster rental | Speed promise; confirm same-day conditions |
| ⬜ | 8 | 2 | `/what-can-go-in-a-dumpster` | T1 | what can you put in a dumpster | Objection killer + prohibited-items list; linked from every price card |
| ⬜ | 9 | 3 | `/blog/dumpster-rental-cost-pasco-county` | R1 | dumpster rental cost Pasco County | seo-updates C.9 #85; links pricing |
| ⬜ | 10 | 3 | `/blog/do-i-need-a-dumpster-permit-pasco-county` | R1 | dumpster permit Pasco County | seo-updates C.9 #86; feeds permit checklist lead magnet |
| ⬜ | 11 | 3 | `/blog/10-vs-15-vs-20-yard-dumpster` | R1 | 10 vs 20 yard dumpster | seo-updates C.9 #87; comparison intent, distinct from the "what size" guide |
| ⬜ | 12 | 3 | `/blog/how-long-can-you-keep-a-rental-dumpster` | R1 | how long can you keep a dumpster | seo-updates C.9 #88; needs confirmed rental period + extra-day fee |
| ⬜ | 13 | 4 | `/services/dumpster-rental-tarpon-springs-fl` | T1 | dumpster rental Tarpon Springs | Named in seo-updates §8.1, no page; ❓ confirm served |
| ⬜ | 14 | 4 | `/industries/realtors` | T2 | dumpster rental for realtors | seo-updates C.8 #82; listing-prep speed |
| ⬜ | 15 | 4 | `/industries/property-managers` | T2 | property management junk removal | seo-updates C.8 #83; turnovers, recurring |
| ⬜ | 16 | 4 | `/blog/hurricane-debris-cleanup-pasco-county` | R1 | hurricane debris cleanup Pasco | Seasonal; **publish by May** before hurricane season; refresh yearly |
| ⬜ | 17 | 5 | `/services/move-out-cleanout` | T2 | move out cleanout | Property Pro character |
| ⬜ | 18 | 5 | `/services/commercial-dumpster-rental` | T2 | commercial dumpster rental | From `notes.txt`; ❓ confirm commercial capacity/recurring service |
| ⬜ | 19 | 5 | `/blog/dump-trailer-vs-roll-off-dumpster` | R1 | dump trailer vs roll off dumpster | Turns our equipment into a differentiator (brand.md §4) |
| ⬜ | 20 | 5 | `/blog/how-much-weight-can-a-dumpster-hold` | R1 | dumpster weight limit | Weight limits + overage fee transparency |
| ⬜ | 21 | 6 | `/services/storm-debris-removal` | T2 | storm debris removal | Hurricane season; pairs with #16 |
| ⬜ | 22 | 6 | `/blog/how-many-roofing-squares-fit-in-a-dumpster` | R2 | roofing dumpster size | Feeds #4 and #5 |
| ⬜ | 23 | 6 | `/blog/what-size-dumpster-for-kitchen-remodel` | R2 | dumpster size kitchen remodel | Project-sizing series (June audit item 7) |
| ⬜ | 24 | 6 | `/blog/where-to-dump-trash-pasco-county` | R2 | Pasco County dump / landfill | Local facility guide; real hours/fees; strong link-earner |
| ⬜ | 25 | 7 | `/services/10-yard-dumpster-rental-new-port-richey-fl` | T2 | 10 yard dumpster rental New Port Richey | seo-updates C.8 #77; ❓ only if GSC shows demand; must be unique |
| ⬜ | 26 | 7 | `/services/20-yard-dumpster-rental-new-port-richey-fl` | T2 | 20 yard dumpster rental New Port Richey | seo-updates C.8 #78; same caveat |
| ⬜ | 27 | 7 | `/blog/pinellas-county-dumpster-permit-guide` | R2 | dumpster permit Pinellas County | Permit-by-county series (June audit item 7) |
| ⬜ | 28 | 7 | `/blog/hernando-county-dumpster-permit-guide` | R2 | dumpster permit Hernando County | Same series |
| ⬜ | 29 | 8 | `/reviews` | Core | Lupo Dumpster Rentals reviews | Real Google reviews by city/service; AggregateRating allowed here |
| ⬜ | 30 | 8 | `/faq` | Core | dumpster rental FAQ | Consolidated objections; FAQPage schema |
| ⬜ | 31 | 8 | `/blog/how-to-prepare-your-driveway-for-a-dumpster` | R2 | dumpster on driveway | Driveway-protection objection |
| ⬜ | 32 | 8 | `/blog/hoa-dumpster-rules-florida` | R2 | HOA dumpster rules | Common blocker in Trinity / Wesley Chapel communities *(verify)* |
| ⬜ | 33 | 9 | `/blog/how-much-does-junk-removal-cost-pasco-county` | R2 | junk removal cost | Needs confirmed junk-removal pricing model |
| ⬜ | 34 | 9 | `/blog/how-to-dispose-of-a-mattress-pasco-county` | R2 | how to dispose of a mattress Pasco | Informational; links `/services/mattress-disposal` (service page keeps transactional intent) |
| ⬜ | 35 | 9 | `/blog/how-to-clean-out-a-hoarder-house` | R2 | how to clean out a hoarder house | Family guide; compassionate; links hoarding service |
| ⬜ | 36 | 9 | `/blog/moving-out-junk-checklist` | R3 | moving junk removal checklist | Feeds #17 |
| ⬜ | 37 | 10 | `/services/dumpster-rental-bayonet-point-fl` | T3 | dumpster rental Bayonet Point | Real CDP near HQ; ❓ demand + anti-doorway bar |
| ⬜ | 38 | 10 | `/services/dumpster-rental-elfers-fl` | T3 | dumpster rental Elfers | Same |
| ⬜ | 39 | 10 | `/services/dumpster-rental-jasmine-estates-fl` | T3 | dumpster rental Jasmine Estates | Same |
| ⬜ | 40 | 10 | `/blog/what-size-dumpster-for-bathroom-remodel` | R3 | dumpster size bathroom remodel | Project-sizing series |
| ⬜ | 41 | 11 | `/services/junk-removal-holiday-fl` | T3 | junk removal Holiday FL | HQ city service page; unique local content required |
| ⬜ | 42 | 11 | `/services/junk-removal-trinity-fl` | T3 | junk removal Trinity FL | ❓ demand |
| ⬜ | 43 | 11 | `/blog/how-to-load-a-dumpster` | R3 | how to load a dumpster | Customer-success content; also used in post-booking email |
| ⬜ | 44 | 11 | `/blog/dumpster-rental-checklist` | R3 | dumpster rental checklist | Pairs with the size-guide lead magnet |

### Policy / utility pages (build in Phase 1 if possible; not SEO targets)

| Status | URL | Notes |
| --- | --- | --- |
| ⬜ | `/privacy-policy` | Required for SMS + forms |
| ⬜ | `/sms-terms` | Required for A2P 10DLC |
| ⬜ | `/rental-terms` | What's included, fees, prohibited items, damage policy |
| ⬜ | `/404` (custom) | Links to services, cities, call button; real 404 status |

### Intentionally excluded

- **Neighborhood-level pages** (Gulf Harbors, Seven Springs, Beacon Square…): high doorway risk with little standalone demand. Neighborhoods stay as content inside city pages. (Supersedes seo-updates C.8 #79.)
- **"Best dumpster rental companies in Pasco County"** listicle (seo-updates C.9 #89): self-serving listicles are low-trust and risky. Revisit only with a genuinely fair comparison.
- **Service × city matrix** (every service on every city): see city-pages.md §6.

---

## Site math

| Bucket | Count |
| --- | --- |
| Phase 1 pages (rebuilt) | 74 *(minus any approved merges)* |
| Phase 2 SEO pages | 44 |
| Policy/utility pages | 4 |
| **Total at completion** | **~122** |

| Phase 2 by type | Count |
| --- | --- |
| Service pages | 6 |
| City / service-city pages | 9 |
| Industry pages | 4 |
| Core/resource pages | 4 |
| Blog posts | 21 |

---

## Content engine lanes

- **Lane A: revenue gaps (Months 1–5).** Booking, Port Richey, estate cleanout, roofing, industries, same-day, prohibited items.
- **Lane B: question library (Months 3–11).** Cost, permits, sizing, weight, rental length, hurricane, disposal. Every post opens with a 40–60-word direct answer and links to a `T` page.
- **Lane C: seasonal & newsjacking (ongoing).** Hurricane season prep (May), post-storm cleanup (as storms hit, within 48h), spring cleaning (March), move-out season (May–Aug), county rule changes.
- **Lane D: GBP posts (weekly).** Repurpose each new page/post into a GBP post with a real photo.

After the build-out, shift to **2 blog posts/month + quarterly refresh** of the home, pricing, NPR hub, and Tier 1 city pages.
