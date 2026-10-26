# Lupo Dumpster Rentals

Marketing and lead-generation site for **Lupo Enterprises LLC** (dba Lupo Dumpster Rentals), a family-owned dumpster rental and junk removal company based in Holiday, FL, serving Pasco, Pinellas, Hernando, and North Hillsborough counties.

Live site: https://www.lupodumpsterrentals.com

**Start with [`docs/`](./docs/README.md).** It holds the brand rules, BrandScript, SEO and conversion playbooks, page specs, and the master status tracker ([`docs/todo.md`](./docs/todo.md)).

---

## Stack

- Next.js 13 (Pages Router), React 18
- Tailwind CSS 3 + `@tailwindcss/typography`
- MDX blog posts (`@next/mdx`, `remark-gfm`)
- SendGrid (lead email), Zapier webhook (CRM hand-off), Google reCAPTCHA v3
- Vercel hosting + Analytics; GA4, Google Ads, Meta Pixel, Hotjar

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in the keys below
npm run dev
```

| Variable | Used by |
| --- | --- |
| `SENDGRID_API_KEY` | `pages/api/sendinfo.js` |
| `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` | Forms (client) |
| `RECAPTCHA_SECRET_KEY` | `lib/recaptcha.js` |
| `ZAPIER_WEBHOOK_URL` | `pages/api/sendinfo.js` (optional) |

| Script | What it does |
| --- | --- |
| `npm run dev` | Dev server |
| `npm run build` | Runs `indexes` first, then `next build`, then `next-sitemap` |
| `npm run indexes` | Regenerates `public/llms.txt` and `lib/blog-index.json` from config + posts. Run after adding or retitling a post |
| `npm run lint` | ESLint |

## Where things live

| Path | Purpose |
| --- | --- |
| `lib/site-config.js` | **Single source of truth** for business facts: NAP, hours, rating, sizes, prices, inclusions, accepted/prohibited items, service areas, navigation. Never hard-code these anywhere else |
| `lib/cities.js` | City registry: county, ZIPs, neighborhoods, nearby cities, permit phones |
| `content/services/*.js` | Copy for each service page, rendered by `components/site/service-page.jsx` |
| `content/cities/*.js` | Unique local copy for each city page, rendered by `components/site/city-page.jsx`. Each has a `verify` list of facts to confirm with Alex |
| `components/site/` | The design system: header, footer, heroes, booking card, quote card, size quiz, section blocks, schema |
| `pages/` | Routes. Service and city pages are thin wrappers around the templates above |
| `pages/blog/<slug>/index.mdx` | Blog posts. Metadata lives in `export const article`; prices and phone come from `site-config` |
| `pages/api/sendinfo.js` | The only lead endpoint: reCAPTCHA check, honeypot, SendGrid email, Zapier webhook |
| `lib/analytics.js` | GA4 events: `call_click`, `text_click`, `price_shown`, `booking_started`, `generate_lead`, `size_quiz_complete`, `scroll_depth` |
| `scripts/generate-indexes.mjs` | Builds `llms.txt` and the blog index |
| `next.config.mjs` | MDX setup and permanent redirects for merged/retired URLs |
| `assets/unused-public/` | Images pulled out of `public/` because no page uses them. Not deployed |

## Lead flow

1. Visitor submits the booking card, quote card, Facebook offer form, or Text Us widget.
2. The browser gets a reCAPTCHA v3 token (`submit_form`) and POSTs to `/api/sendinfo`.
3. The route drops honeypot hits, verifies the token (score ≥ 0.9), emails the lead, and forwards it to Zapier.
4. The visitor lands on `/thank-you`, which fires the Google Ads and Meta conversion events.

reCAPTCHA details: [`docs/recaptcha/`](./docs/recaptcha/RECAPTCHA_README.md).

## Structured data

- Sitewide (`components/site/site-schema.jsx`): `LocalBusiness` (`#organization`) + `WebSite`.
- Home: `AggregateRating` + the reviews shown on the page.
- Service/city pages: `Service`, `FAQPage`, `BreadcrumbList`; size pages add `Product`/`Offer`.
- Pricing: `Product`/`Offer` per size. Blog: `BlogPosting` + `FAQPage`.

All JSON-LD renders server-side in `<Head>` so crawlers see it without JavaScript.

## Before shipping

1. `npm run lint && npm run build`.
2. Check [`docs/pre-launch.md`](./docs/pre-launch.md) for the release checklist and redirect map.
3. Update statuses in [`docs/todo.md`](./docs/todo.md) in the same PR.

---

Business owner: Alex Lupo, Lupo Enterprises LLC · Design & development: [Black Cat Website Design](https://blackcatwebsitedesign.com)
