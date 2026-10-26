# Blogging Guide — How to Write an SEO + AI-Answer Blog Post

> **Read this every time you create or revise a blog post.** It's the single source of truth for how Lupo blog posts are written, structured, and wired so they rank in Google **and** get cited by AI answer engines (Google AI Overviews, ChatGPT, Perplexity, Gemini). Pair it with [best-seo-practices.md](./best-seo-practices.md) and the topic plan in [new-seo-pages.md](./new-seo-pages.md).

**The job of the blog:** answer the questions people ask *before* they rent ("what size do I need," "do I need a permit in Pasco," "what can't go in a dumpster") and hand them to a service or city page to book. Every post is a StoryBrand mini-story: their problem → our answer → the plan → book.

---

## 1. Non-negotiables

A post is not finished until **all** of these are true:

- [ ] Lives at `pages/blog/<slug>/index.mdx`; the folder name **is** the slug and URL.
- [ ] `export const article = {…}` has `date`, `title`, `description`, `image`, `imageAlt`, **`keywords` (4–8)**, `category`, `readTime`, and `updated` when revised *(new fields, see §2)*.
- [ ] Title ≤ 60 chars, primary keyword near the front.
- [ ] Description ≤ 155 chars, benefit-led, includes the primary keyword.
- [ ] Opens with a **40–60-word direct answer** to the title's question.
- [ ] **1,200–1,500 words** for a standard post (aim ~1,350); deep guides 1,500–2,500. 1,000 is a floor, not a goal.
- [ ] Body starts at `##` (the layout renders the H1 from `title`).
- [ ] At least one **table or checklist**; short paragraphs; scannable H2s.
- [ ] **Local specifics**: Pasco/Pinellas/Hernando rules, real phone numbers, real facilities, Florida weather/hurricane context where relevant.
- [ ] **2–4 internal links** to service/city/pricing pages + 1–2 sibling posts, descriptive anchors.
- [ ] A clear **CTA**: book the size the post recommends (the layout's `RequestForm` handles the form; add an in-body CTA too).
- [ ] Unique cover image (see §6).
- [ ] Every price, size, or weight number matches `lib/site-config.js`.

---

## 2. File structure & front-matter

Current convention (keep it) plus the new fields:

```mdx
import Bloglayout from "../../../components/Bloglayout";

export const article = {
  date: "2026-11-03",
  // updated: "2027-02-01",   // add when materially revised → dateModified
  title: "Do You Need a Dumpster Permit in Pasco County?",
  description:
    "When Pasco County requires a dumpster permit, when it doesn't, and who to call — plus city rules for New Port Richey and Port Richey.",
  image: "/images/blog/pasco-dumpster-permit.webp",
  imageAlt: "Dump trailer parked in a New Port Richey driveway, no permit needed",
  category: "Permits & Rules",
  readTime: "6 min read",
  keywords: [
    "dumpster permit Pasco County",
    "do I need a permit for a dumpster",
    "New Port Richey dumpster permit",
    "dumpster on street Pasco County",
    "Pasco County right of way permit",
  ],
};

<Bloglayout
  title={article.title}
  date={article.date}
  dateModified={article.updated}
  description={article.description}
  image={article.image}
  imageAlt={article.imageAlt}
>

In most of Pasco County you **don't** need a permit if the dumpster sits on your own
driveway or yard. You **do** need one if it goes on the street, sidewalk, or any public
right-of-way…

## When a Permit Is Required
…

</Bloglayout>
```

### Field reference

| Field | Required | Notes |
| --- | --- | --- |
| `date` | ✅ | ISO `YYYY-MM-DD`. Blog index sorts by it (`lib/loadMDXMetadata.js`). |
| `updated` | ⬜ | Pass as `dateModified`; shows "Updated" and feeds `BlogPosting.dateModified`. |
| `title` | ✅ | ≤ 60 chars; question format works well. |
| `description` | ✅ | ≤ 155 chars. |
| `image` / `imageAlt` | ✅ | Unique per post; `/images/blog/<topic>.webp`, ~1200×630. |
| `category` | ✅ *(new)* | One of: **Sizing & Pricing · Permits & Rules · Projects & How-To · Junk Removal & Cleanouts · Local Guides · Storm & Hurricane** |
| `readTime` | ✅ *(new)* | ~200 wpm. |
| `keywords` | ✅ *(new)* | 4–8; primary first. Rendered into `<meta name="keywords">` and schema `keywords`. |

> **Wiring todo:** `Bloglayout` needs to accept `keywords`, `category`, and `readTime`, and the blog index should show category + read time. Tracked in `todo.md` §3.

### What's automatic (don't duplicate)

| Concern | Handled by |
| --- | --- |
| Blog index listing | `lib/loadMDXMetadata.js` (reads `article`) |
| Sitemap entry | `next-sitemap` at postbuild |
| Canonical + OG + Twitter | `Bloglayout` → `<Seo type="article">` |
| `BlogPosting` JSON-LD (author = Alex Lupo) | `Bloglayout` |
| Breadcrumbs | `Bloglayout` |
| GFM tables | `remark-gfm` in `next.config.mjs` |

---

## 3. Writing for SEO

- **One primary keyword per post**, chosen from [new-seo-pages.md](./new-seo-pages.md). Never two posts on the same keyword.
- Keyword in: title, first 100 words, one H2, `keywords[0]`, image alt (naturally).
- H2s follow the questions people actually ask (use Google "People also ask," GSC queries, and customer calls).
- **Link to money pages.** Every post links to at least one of: a size page, the pricing page, the NPR hub, or the relevant city page.
- **Use tables** for comparisons (10 vs 15 vs 20 yd; rental vs. junk removal; allowed vs. prohibited). They win featured snippets.

## 4. Writing for AI answer engines (GEO)

- **Lead with the answer** in 40–60 words, no preamble.
- **Self-contained sections:** each H2 fully answers one question.
- **Be specific:** real dimensions, weights, prices, phone numbers, county names, timelines ("most rentals are 3 days *(confirm)*").
- **FAQ block** at the end (`## Frequently Asked Questions` + H3 questions, 40–60-word answers).
- **E-E-A-T:** first-hand experience ("On a typical 25-square roof tear-off we see…"); Alex byline is automatic.

## 5. Voice & accuracy

- Follow [brand.md §6](./brand.md#6-voice--tone): plain, helpful, local, specific.
- **Verify every rule, fee, phone number, and facility** before publishing. Permit rules and landfill details change; note `updated` when you re-verify.
- No guarantees or competitor bashing. Compare to "DIY dump runs" or "national brokers" generically.

---

## 6. Cover images

**Prefer a real Lupo photo** (trailer in a driveway, a full load, a cleanout before/after). Real photos build trust that AI images can't.

When a real photo doesn't fit the topic, generate one in the **house style**:

- **Look:** photorealistic, natural Florida daylight, suburban Pasco/Pinellas setting (stucco homes, palms, screened lanais, driveways).
- **Palette:** brand-consistent, with **red accents** (a red tarp, red work gloves, a red tool) against neutral/dark tones. Never a fake Lupo logo or lettering.
- **Subjects:** debris, renovation scenes, garages, roofs, yards, generic dump trailers (unbranded), hands loading, measuring tape on a trailer.
- **No text, logos, or watermarks.** Wide landscape, ~1200×630.
- **Make each cover distinct:** change at least two of composition (top-down / eye-level / wide), setting (garage / roof / yard / street), subject (people vs. still life), and time of day compared to recent covers in `public/images/blog/`.

**Example prompt:**
> Photorealistic photo of an unbranded black dump trailer parked on a concrete driveway in front of a Florida stucco home with palm trees, half full of old drywall and cabinets from a kitchen remodel, a red tarp folded on top, bright late-morning sun, shallow depth of field, no text, no logos, wide 1200×630 composition.

Save as `public/images/blog/<topic>.webp`.

---

## 7. Existing posts (migrate + upgrade in Phase 1)

| Post | Primary keyword (proposed) | Notes |
| --- | --- | --- |
| `affordable-dumpster-rental` | affordable dumpster rental | Rewrite around flat-rate pricing; link pricing page |
| `appliance-removal-in-depth-guide` | appliance removal guide | Add FL Freon/recycling specifics |
| `complete-guide-to-estate-cleanout-services` | estate cleanout guide | No estate-cleanout service page exists yet (Phase 2) |
| `dump-trailer-services-explained` | dump trailer rental | Explain trailer vs. roll-off honestly |
| `guide-to-roll-off-dumpster-trailers-choosing-the-right-size` | what size dumpster do I need | Overlaps a planned size guide; make this the canonical sizing post |
| `haul-junk-away-your-guide-to-decluttering` | haul junk away | Low intent; consider merging into junk removal guide |
| `how-to-rent-a-dumpster-tips-tricks-and-advice` | how to rent a dumpster | Add step-by-step + local permit link |
| `top-five-projects-that-call-for-a-dumpster-rental` | projects that need a dumpster | Link size pages per project |
| `ultimate-guide-to-junk-removal` | junk removal guide | Possible overlap with haul-away post |

All posts: add the new front-matter fields, a direct-answer opener, an FAQ, a unique cover, and links to money pages.

---

## 8. Pre-publish checklist

- [ ] Folder = slug; URL is `/blog/<slug>`.
- [ ] `article` has all required fields incl. `keywords`, `category`, `readTime`.
- [ ] Title ≤ 60; description ≤ 155; both contain the primary keyword; not cannibalizing another post/page.
- [ ] 40–60-word direct answer; 1,200–1,500 words; ≥1 table/checklist; FAQ.
- [ ] Local facts verified; numbers match `site-config`.
- [ ] 2–4 internal links to service/city/pricing pages + 1–2 posts.
- [ ] Unique cover image saved and wired; alt text set.
- [ ] `npm run build` passes; check the rendered page + `BlogPosting` JSON-LD in view-source.
- [ ] Status flipped in [todo.md](./todo.md).
