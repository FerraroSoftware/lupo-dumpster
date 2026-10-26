# Lupo Dumpster Rentals — Project Docs

These docs are the operating manual for the **full website rebuild** of lupodumpsterrentals.com. The current site ranks, but it does not sell: inconsistent pricing and proof claims, a generic template look, and messaging about *us* instead of *the customer*. The rebuild moves the entire site onto the **StoryBrand 2.0** framework (*Building a StoryBrand 2.0*, Donald Miller), a new design system, and a stricter SEO standard.

**What stays the same:** the **name** (Lupo Dumpster Rentals / Lupo Enterprises LLC) and the **colors** (Lupo Red + black/ink). Everything else (layout, typography, copy, components, page structure) is being rebuilt.

---

## Start here

| Doc | What it's for | Read it when… |
| --- | --- | --- |
| [todo.md](./todo.md) | **Master status tracker.** Every decision, workstream, and page with its status. | Every working session. Flip statuses as you go. |
| [brandscript.md](./brandscript.md) | The **StoryBrand 2.0 BrandScript**: character, problem, guide, plan, CTA, stakes, success, one-liner, website wireframe, lead generator, emails. | Before writing *any* copy. |
| [brand.md](./brand.md) | Company facts, positioning, the kept colors (tokenized), new typography, logo, imagery, voice, UI rules. | Before designing or building anything visual. |
| [best-seo-practices.md](./best-seo-practices.md) | The SEO quality bar for every page (titles, H1s, schema, linking, local SEO, technical). | Before publishing any page. |
| [service-pages.md](./service-pages.md) | How to build a service, size, pricing, or industry page (StoryBrand section spine + scaffold). | Building any `/services/*` (non-city) page. |
| [city-pages.md](./city-pages.md) | How to build a city/county page **without** it being a doorway page. | Building or editing any `/services/dumpster-rental-{city}` page. |
| [blogging.md](./blogging.md) | How to write an SEO + AI-answer-engine blog post in MDX. | Every blog post. |
| [conversion.md](./conversion.md) | Sales/CRO system: lead capture, pricing calculator, booking, SMS, speed-to-lead, reviews, offers, tracking. | Working on forms, CTAs, offers, ads, or follow-up. |
| [accessibility.md](./accessibility.md) | WCAG 2.1 AA rules, including the red-on-dark contrast rule. | Every new page or component. |
| [pre-launch.md](./pre-launch.md) | **Phase 1**: rebuild every existing URL (74) at the same address, with per-page intent and cannibalization fixes. | Planning the rebuild order. |
| [new-seo-pages.md](./new-seo-pages.md) | **Phase 2**: net-new pages and blog posts after launch, in priority order. | After Phase 1 ships. |

## Reading order for a new contributor

1. `brandscript.md` → understand the story we're telling.
2. `brand.md` → understand how it looks and sounds.
3. `best-seo-practices.md` → understand the quality bar.
4. `todo.md` → pick the next open item.

## Ground rules

- **One source of truth per concern.** Facts (phone, prices, sizes, review counts) go in `lib/site-config.js`, never hard-coded in components or posts. `npm run indexes` regenerates `llms.txt` and the blog index from it.
- **When docs and code disagree, fix one of them in the same PR.** Don't let them drift.
- **Statuses live in `todo.md` only.** Other docs describe *how*; `todo.md` tracks *whether*.
- **No unverifiable claims.** "#1," "best pricing guaranteed," and customer counts need proof or they come out (see `brand.md` §7).

## Legacy docs (`docs/legacy/`, `docs/recaptcha/`)

These predate the rebuild. They're still useful as reference, but the docs in this folder win when they conflict.

| File | Status |
| --- | --- |
| [`legacy/seo-updates.md`](./legacy/seo-updates.md) | Deep-dive SEO plan (Apr 2026). Its Appendix C tracker is **superseded** by `todo.md`; open items were carried over. |
| [`legacy/website-audit-updates-june-26-2026.md`](./legacy/website-audit-updates-june-26-2026.md) | Verified audit findings. All valid items carried into `todo.md` and `conversion.md`. |
| [`recaptcha/`](./recaptcha/RECAPTCHA_README.md) | Still accurate for the lead form's bot protection. |
| [`legacy/notes.txt`](./legacy/notes.txt) | Old page wishlist + legacy URLs. Carried into `new-seo-pages.md` and the redirect audit in `pre-launch.md`. |
