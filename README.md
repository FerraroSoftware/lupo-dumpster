# Lupo Dumpster Rentals

Marketing and lead-generation website for **Lupo Enterprises LLC**, a locally owned dumpster rental and junk removal company serving Pasco, Pinellas, Hernando, and Hillsborough counties in Florida. Built with Next.js, Tailwind CSS, and SendGrid, with Google reCAPTCHA v3 protection, structured data (JSON-LD) for SEO, and Zapier CRM integration for incoming leads.

Live site: https://www.lupodumpsterrentals.com

---

## About the Company

**Lupo Enterprises LLC** (dba Lupo Dumpster Rentals) is a family-owned waste management business founded in 2020 by Alex Lupo out of Holiday, FL. The company provides dump-trailer rentals, full-service junk removal, hoarding cleanouts, construction debris hauling, and bobcat services across the Tampa Bay region.

| | |
|---|---|
| **Legal Name** | Lupo Enterprises LLC |
| **License #** | L20000153106 |
| **Founded** | June 2020 |
| **Founder** | Alex Lupo |
| **Address** | 5647 Andrea Dr, Holiday, FL 34690 |
| **Phone** | (727) 317-6717 |
| **Email** | a.lupollc@gmail.com |
| **Hours** | Mon–Sun, 7:00 AM – 8:00 PM ET |
| **Rating** | 4.9 / 5 stars (130+ Google reviews) |
| **Social** | [Facebook](https://www.facebook.com/LupoLLC) · [Instagram](https://www.instagram.com/lupodumpsterrentals/) |

### Services

- **Dumpster Trailer Rentals** — 10, 15, and 20 cubic yard dump trailers
- **Junk Removal & Haul-Away** — residential and commercial
- **Construction Debris Removal** — contractor, remodeler, and roofer-friendly
- **Hoarding Cleanups** — discreet, compassionate service
- **Garage, Estate, and Property Cleanouts**
- **Appliance, Furniture, and Mattress Disposal**
- **Yard Waste & Trash Removal**
- **Bobcat Services** — demolition, grading, and site prep

### Service Area (Florida)

Pasco County, Pinellas County, Hernando County, Hillsborough County — including New Port Richey, Holiday, Trinity, Hudson, Spring Hill, Odessa, Palm Harbor, Clearwater, Dunedin, Largo, Oldsmar, Safety Harbor, Seminole, Pinellas Park, St. Petersburg, Westchase, Lutz, Land O' Lakes, Wesley Chapel, Zephyrhills, Dade City, San Antonio, Keystone, Brooksville, and the wider Tampa Bay area.

---

## Tech Stack

- **Framework:** [Next.js 13](https://nextjs.org/) (Pages Router) with MDX support via `@next/mdx`
- **Language:** JavaScript / JSX (React 18)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) + `tailwindcss-animate` + `@tailwindcss/typography`
- **UI Primitives:** [Radix UI](https://www.radix-ui.com/) (accordion, select, popover, label, slot), shadcn-style components in `components/ui/`
- **Icons:** `lucide-react`, `@heroicons/react`
- **Animation:** `framer-motion`
- **Forms & Validation:** `react-hook-form` + `zod`
- **Date Handling:** `date-fns`, `react-day-picker`
- **Notifications:** `react-toastify`
- **Email:** [SendGrid](https://sendgrid.com/) (`@sendgrid/mail`)
- **CRM Integration:** Zapier inbound webhook
- **Bot Protection:** Google reCAPTCHA v3 (score threshold 0.9)
- **Analytics & Tracking:**
  - Google Analytics 4 (`G-V0GLH72P5Z`)
  - Google Ads conversion tracking (`AW-17610711210`) including phone-call and button-click conversions
  - Meta (Facebook) Pixel (`892278365833500`)
  - [Hotjar](https://www.hotjar.com/) (site `6406197`)
  - [Vercel Analytics](https://vercel.com/analytics)
- **SEO:** Page-level `<Head>` metadata, canonical URLs, `robots.txt`, `sitemap.xml`, and JSON-LD structured data for Organization, LocalBusiness, Service, FAQ, and Reviews (`components/*-schema.jsx`). Also includes an `llms.txt` file describing the business for LLM crawlers.
- **Hosting:** Vercel

---

## Project Structure

```
lupo-dumpster/
├── pages/
│   ├── _app.js                 Global layout, nav, schema, analytics, pixel
│   ├── _document.js            GA, Google Ads, reCAPTCHA script injection
│   ├── index.jsx               Home page
│   ├── about-us.jsx            Company history & stats
│   ├── contact.jsx             Quote-request page
│   ├── dumpster-rental-pricing.jsx
│   ├── service-locations.jsx
│   ├── facebook-offer.jsx      Landing page for FB ad campaigns
│   ├── thank-you.jsx           Post-submit confirmation (Ads conversion)
│   ├── services/               50+ service & location landing pages
│   ├── blog/                   MDX blog posts + index
│   └── api/
│       ├── sendinfo.js         Primary form handler (SendGrid + Zapier + reCAPTCHA)
│       ├── sendemail.js        Legacy email handler
│       ├── sendgrid.js         Legacy SendGrid handler
│       ├── sendcontacttwo.js   Alternate contact form handler
│       └── senddata.js         Data endpoint
├── components/
│   ├── new/                    Current redesigned UI (hero, request-form,
│   │                           testimonials, services, process, FAQ, etc.)
│   ├── ui/                     shadcn-style primitives (button, input, card,
│   │                           select, popover, accordion, calendar, …)
│   ├── *-schema.jsx            JSON-LD structured-data injectors
│   └── *.jsx                   Legacy component library (many variants kept
│                               for A/B testing and page-specific layouts)
├── lib/
│   ├── recaptcha.js            Server-side reCAPTCHA v3 verification
│   ├── recaptcha-test.js       Browser test helper
│   ├── formatDate.js
│   ├── loadMDXMetadata.js      MDX blog metadata loader
│   └── utils.js                `cn()` class-merge helper
├── public/                     Images, videos, logos, favicon, robots.txt,
│                               sitemap.xml, llms.txt
├── styles/                     Global CSS (Tailwind base + overrides)
├── mdx-components.js           MDX component map
├── next.config.mjs             Next.js + MDX config
├── tailwind.config.js
├── components.json             shadcn/ui config
└── package.json
```

### Blog Posts (MDX)

Located in `pages/blog/`:

- Affordable Dumpster Rental
- Appliance Removal — In-Depth Guide
- Complete Guide to Estate Cleanout Services
- Dump Trailer Services Explained
- Guide to Roll-Off Dumpster Trailers — Choosing the Right Size
- Haul Junk Away — Your Guide to Decluttering
- How to Rent a Dumpster — Tips, Tricks, and Advice
- Top Five Projects That Call for a Dumpster Rental
- Ultimate Guide to Junk Removal

---

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- A SendGrid account and API key
- Google reCAPTCHA v3 keys (site + secret)
- (Optional) A Zapier inbound webhook URL for CRM / SMS automation

### Install & Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start Next.js dev server on port 3000 |
| `npm run build` | Production build |
| `npm run start` | Start the production server |
| `npm run lint` | Run `next lint` |

### Environment Variables

Create a `.env.local` (or `.env`) in the project root:

```bash
# SendGrid (transactional email)
SENDGRID_API_KEY=SG.xxxxxxxxxxxxxxxxxxxx

# Google reCAPTCHA v3
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=6Lxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
RECAPTCHA_SECRET_KEY=6Lxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# Optional — Zapier webhook for CRM / SMS / Google Sheets
ZAPIER_WEBHOOK_URL=https://hooks.zapier.com/hooks/catch/XXXXXXX/XXXXXX/
```

Keep `.env` / `.env.local` out of version control. Never commit production keys.

---

## Lead Flow

1. Visitor fills out the quote form (`components/new/request-form.jsx` or `request-form-hero.jsx`).
2. The browser requests a reCAPTCHA v3 token with the `submit_form` action.
3. The form POSTs to `/api/sendinfo` with `firstName`, `lastName`, `email`, `phone`, `serviceNeeded`, `message`, and `recaptchaToken`.
4. The API route:
   - Verifies the token via `lib/recaptcha.js` (minimum score **0.9**).
   - Sends a formatted email through SendGrid to `a.lupollc@gmail.com` (cc: `contact@blackcatwebsitedesign.com`, `alupo825@gmail.com`).
   - Forwards the lead to the Zapier webhook with an Eastern-time timestamp.
5. The visitor is redirected to `/thank-you`, which fires the Google Ads conversion tag.

For the full reCAPTCHA playbook, see `RECAPTCHA_README.md`, `RECAPTCHA_SETUP.md`, `RECAPTCHA_IMPLEMENTATION.md`, and `RECAPTCHA_FLOW.txt`.

---

## SEO & Structured Data

The following JSON-LD schemas are injected globally from `pages/_app.js`:

- `components/organization-schema.jsx` — `Organization` (Lupo Enterprises LLC)
- `components/LocationSchema.jsx` — `LocalBusiness` with geo coordinates, hours, offers, and aggregate rating
- `components/service-schema.jsx` — `Service` with an `OfferCatalog` of all services
- `components/faq-schema.jsx` — `FAQPage`
- `components/review-schema.jsx` — `Review` / `AggregateRating` (currently disabled)

Additional SEO assets live in `public/`:

- `robots.txt`
- `sitemap.xml`
- `llms.txt` — machine-readable business summary for LLM crawlers

Each page sets its own `<title>`, `meta description`, canonical URL, and Open Graph tags.

---

## Deployment

The site is deployed on **Vercel**. Pushing to the production branch triggers an automatic build and deploy.

Before shipping changes:

1. Set all environment variables (`SENDGRID_API_KEY`, `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`, `RECAPTCHA_SECRET_KEY`, `ZAPIER_WEBHOOK_URL`) in **Vercel → Project → Settings → Environment Variables**.
2. Add the production domain in the [Google reCAPTCHA admin](https://www.google.com/recaptcha/admin).
3. Verify the sending domain and sender identity in SendGrid.
4. Run `npm run build` locally to catch any build-time errors before pushing.

---

## Notes & Conventions

- Most legacy page variants and component duplicates are intentionally kept (e.g., `Navbar`, `Navbartwo`, `Navbarthree`, `HeroUpdated`, `NewPricing`/`NewPricingtwo`/`NewPricingthree`) to support A/B testing and page-specific layouts. The current active navbar is `components/Navitem.jsx` (`LupoNavbar`) mounted in `_app.js`.
- Service and location landing pages each live as a standalone `.jsx` file under `pages/services/` so that per-page copy, images, and schema can be tuned for local SEO.
- Path alias `@/` maps to the project root (configured in `jsconfig.json`), so imports like `@/components/new/navbar` resolve from anywhere.
- Tailwind design tokens are defined with CSS variables in `styles/globals.css` and extended in `tailwind.config.js` (shadcn-style theming).

---

## Credits

- **Business Owner:** Alex Lupo — Lupo Enterprises LLC
- **Design & Development:** [Black Cat Website Design](https://blackcatwebsitedesign.com)

---

© Lupo Enterprises LLC. All rights reserved.
