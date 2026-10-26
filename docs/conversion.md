# Conversion & Sales System

> **Read this when working on forms, CTAs, pricing, offers, ads, follow-up, or reviews.** SEO brings people to the page; this doc is about turning them into booked rentals. Messaging comes from [brandscript.md](./brandscript.md).

## The goal

**More booked dumpsters per visitor**, measured by landing page. Every change in this doc should move one of these numbers:

| Metric | Definition | Baseline | Target |
| --- | --- | --- | --- |
| Lead conversion rate | (forms + calls + texts + bookings) ÷ sessions | ⬜ measure | ⬜ set after 30 days of clean data |
| Booking rate | booked jobs ÷ leads | ⬜ (needs CRM data) | ⬜ |
| Speed to lead | minutes from lead → first human reply | ⬜ | **< 5 min** during hours |
| Cost per booked job (ads) | ad spend ÷ booked jobs | ⬜ | ⬜ |
| Review velocity | new Google reviews / month | ⬜ | 5–10 |

---

## 1. Current funnel (as built)

1. Visitor lands (organic, Google Ads, Facebook).
2. Converts via: **call** (`tel:` links + `TextUsButton`), **quote form** (`components/new/request-form.jsx`, 6 fields: first, last, email, phone, service, message), or the **FB offer page** (`/facebook-offer`, separate $275 deal + `/api/senddata`).
3. Form → `/api/sendinfo` → reCAPTCHA v3 (score ≥ 0.9) → SendGrid email to Alex + Zapier webhook → redirect to `/thank-you` (fires Ads conversion).

### Gaps (from the June 2026 audit + this review)

| Gap | Impact |
| --- | --- |
| No price on the form/booking path; visitor must wait for a callback | High: price-shoppers bounce |
| No online booking (date + size + address) | High: ready-to-buy visitors still have to wait |
| No instant price calculator | High: our flat price is the differentiator and it's buried |
| No SMS opt-in; can't text after-hours leads | High |
| No lead generator for not-ready visitors | Medium |
| No live chat / after-hours capture | Medium |
| reCAPTCHA threshold 0.9 is very strict, so real leads may be silently rejected | **Check logs.** Consider 0.5–0.7 + honeypot |
| Prices and proof claims inconsistent across pages | High: kills trust |
| No call tracking by landing page | Can't tell which pages sell |
| Multiple legacy API routes (`sendemail`, `sendgrid`, `sendcontacttwo`, `senddata`) | Maintenance/risk; consolidate |

---

## 2. Conversion principles

1. **Show the price.** Flat-rate pricing is the best sales weapon we have. Price on the home hero, every rental page, every city page.
2. **One primary action.** "Book Your Dumpster" everywhere, same red button. Call and Text are always the secondary pair.
3. **Phone-first, text-friendly.** Most visitors are on mobile; many prefer texting. The sticky bar (Call · Text · Book) is always visible on mobile.
4. **Reduce fields.** Ask only what's needed to quote/book. Name, phone, ZIP/address, size, date. Email optional.
5. **Proof next to every ask.** A star rating + one real review beside every form and price card.
6. **Answer objections before they're asked:** what's included, weight limits, what can't go in, permits, driveway protection, how long.
7. **Speed wins.** The first company to respond usually gets the job.

---

## 3. Lead capture points (target state)

| # | Capture point | Where | Fields | Priority |
| --- | --- | --- | --- | --- |
| 1 | **Sticky mobile bar**: Call · Text · Book | Every page (mobile) | n/a | P0 |
| 2 | **Header CTA**: Book Your Dumpster | Every page | n/a | P0 |
| 3 | **Hero booking card** | Home, rental, city pages | Size, ZIP, date → step 2: name, phone | P0 |
| 4 | **Price calculator / size quiz** | Pricing, home, size pages, blog | Project type, items, size → price → name/phone/email to "hold" | P1 |
| 5 | **Online booking** | `/book` *(new)* | Size, delivery date, address, name, phone, email, notes, SMS consent; payment optional *(decision)* | P1 |
| 6 | **Text Us widget** | Every page | Name, phone, message, SMS consent | P0 (exists; restyle + consent) |
| 7 | **Lead magnet** (size guide / permit checklist) | Mid-page bands, blog, exit intent | Email (+ optional phone/SMS consent) | P2 |
| 8 | **Contractor account request** | `/industries/contractors`, `/industries/roofers` | Company, name, phone, email, typical volume | P2 |
| 9 | **Live chat / AI intake** | Every page, after-hours | Chat → name/phone | P3 *(decision)* |

### Form spec (hero booking card, 2 steps)

- **Step 1** (no commitment): Size (10/15/20 + "Not sure") · ZIP · Preferred date → shows the **flat price + included items** instantly.
- **Step 2:** First name · Phone · (Email optional) · ☐ SMS consent → **"Reserve My Dumpster"**.
- On submit: thank-you page with the price, what happens next, and an expected callback time ("We'll text you within 15 minutes during business hours" *(confirm)*).

---

## 4. Pricing calculator & booking (decisions)

| Decision | Options | Recommendation |
| --- | --- | --- |
| Calculator logic | Simple (size → flat price) vs. project-based quiz → recommended size → price | Quiz → size → price (doubles as lead magnet) |
| ZIP pricing | Same price everywhere vs. delivery-zone surcharge for edge cities | **(confirm with Alex)**; if zones exist, show them openly |
| Booking | Request-to-book (Alex confirms) vs. real-time calendar | Start with request-to-book + date picker; move to real-time once availability is reliable |
| Payment | None / deposit / full prepay (Stripe) | Start with none; test a deposit later for no-show reduction |
| Booking software | Custom (Next.js + Zapier/CRM) vs. off-the-shelf (e.g. Docket, CurbWaste, Jobber, Housecall Pro) | **(decision)** Off-the-shelf may give dispatch + invoicing + reminders for free |

---

## 5. SMS opt-in & compliance

Texting leads is high-ROI and legally sensitive.

- **Explicit, unchecked** consent checkbox on every form that collects a phone number for texting:
  > ☐ Yes, text me about my quote and rental. Msg & data rates may apply. Msg frequency varies. Reply STOP to opt out, HELP for help. See our [SMS Terms](/sms-terms) and [Privacy Policy](/privacy-policy).
- Consent is **not** a condition of purchase.
- Store consent (timestamp, page, IP, wording version) with the lead (Zapier → CRM).
- Register the sending number for **A2P 10DLC** with the SMS provider.
- Create `/privacy-policy` and `/sms-terms` pages *(new; neither exists today)*.
- Quiet hours: no marketing texts before 8 AM or after 9 PM local *(confirm with provider/legal)*.

---

## 6. Speed-to-lead & follow-up

| Trigger | Action | Owner/tool |
| --- | --- | --- |
| Form/booking submitted | Instant auto-text + email: "Got it, {name}. Your {size} is ${price} flat. We'll confirm shortly." | Zapier → SMS provider |
| Within 5 min (business hours) | Human call/text | Alex / Amanda |
| After hours | Auto-text: "We open at 7 AM; first call of the day goes to you." + booking link | Automation |
| Unbooked after 24h | Sales sequence (brandscript §12) | Email + SMS |
| Lead magnet download | Nurture sequence (brandscript §12) | Email |
| Job completed | Review request (see §7) | SMS + email |

**CRM (decision):** today leads go to Gmail + a Zapier webhook. Pick one system of record (HubSpot free, Jobber, Housecall Pro, or the booking software) so every lead has a status: new → contacted → quoted → booked → completed → reviewed.

---

## 7. Reviews engine

Reviews drive both Map Pack rankings and conversion.

- **Ask every customer**, every job: automated SMS + email at pickup with a direct Google review link (`g.page/r/...`).
- **Coach the content:** "If you mention the size and your town (e.g. '15-yard in Trinity'), it helps neighbors find us."
- QR code on the trailer, the invoice, and a driver card.
- Respond to every review within 24h (use the customer's city/service naturally).
- **On-site:** show real Google reviews (embedded widget or synced data) with name, date, city. Review count + rating come from **one config value**, updated monthly.
- Never gate (don't only ask happy customers) and never incentivize reviews (against Google policy).

---

## 8. Offers & guarantees

| Item | Status | Action |
| --- | --- | --- |
| **$275 10-yd / 3-day Facebook offer** | Live on `/facebook-offer`, not reflected anywhere else | Decide: keep as ad-only offer (fine, but say "online special") or retire. Keep it consistent with site prices. |
| "Best Pricing Guaranteed" | Claimed in hero with no terms | Remove, or define a real price-match policy in writing |
| On-time delivery promise | Not stated | **(decision)** A real guarantee (e.g. "$25 off if we're late") is a powerful agreement plan |
| Repeat-customer / contractor pricing | Unknown | **(decision)** Contractor accounts are recurring revenue; make an offer for them |
| Seasonal promos | `seasonal-promo.jsx` exists, unused | Hurricane-season prep/cleanup, spring cleaning, move-out season |

---

## 9. Paid traffic alignment

- **Google Ads:** landing pages must match the ad's keyword + city (send "dumpster rental new port richey" to the NPR page, not home). Conversion tags exist (`AW-17610711210`, calls + form + button clicks). Verify they fire on the new pages.
- **Local Services Ads (Google Guaranteed):** evaluate for junk removal / dumpster categories *(check availability in this market)*; LSA leads are pay-per-lead and show above regular ads.
- **Meta:** keep `/facebook-offer` as a dedicated `noindex` landing page; rebuild it in the new design with the same StoryBrand flow.
- Every ad landing page: price visible, Book + Call + Text above the fold, no nav distractions (optional).

---

## 10. Tracking (events to verify on every template)

| Event | GA4 name | Ads conversion |
| --- | --- | --- |
| Call click (`tel:`) | `click_call` | ✅ |
| Text click (`sms:` / widget open) | `click_text` | ✅ |
| Form submit (success) | `generate_lead` | ✅ |
| Booking submitted | `booking_request` | ✅ |
| Calculator completed (price shown) | `price_shown` | micro |
| Lead magnet download | `lead_magnet` | micro |
| Scroll 75% on money pages | `scroll_75` | no |

Add **call tracking** (CallRail or similar, with dynamic number insertion that keeps the real number in schema/NAP) to attribute calls to landing pages and keywords.

**Performance note:** Meta Pixel currently loads `beforeInteractive`, which delays every page. Move to `afterInteractive`; move Hotjar to `lazyOnload`.

---

## 11. CRO testing backlog (after launch, once tracking is clean)

1. Hero: price in H1 subhead vs. not
2. Booking card: 2-step vs. single step
3. Primary CTA wording: "Book Your Dumpster" vs. "Check Availability"
4. Video hero vs. static photo hero (also an LCP test)
5. Reviews: carousel vs. 3 static cards
6. Sticky bar: 3 buttons vs. Call + Book only
