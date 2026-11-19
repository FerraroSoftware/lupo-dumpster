# Pricing (on hold)

As of Nov 19, 2026, prices are off the website. Every page now leads to a free quote. This doc keeps the last published prices so they can go back up later.

**Restore point:** commit `25452df` (Nov 2, 2026) is the last version of the site with prices shown. `git show 25452df:lib/site-config.js` has the full size data.

## Last published dumpster prices

All prices were flat and included delivery, pickup, and disposal up to the included weight.

| Size | Dimensions | Holds about | Weight included | Price |
| --- | --- | --- | --- | --- |
| 10-yard | 12' L × 8' W × 3.5' H | 3 pickup-truck loads | 2 tons | $325 |
| 15-yard (most popular) | 14' L × 8' W × 4' H | 4–5 pickup-truck loads | 3 tons | $400 |
| 20-yard | 16' L × 8' W × 5' H | 6–7 pickup-truck loads | 4 tons | $500 |

- "Starting at" price used in titles and descriptions: **$325**.
- Rental length, extra-day fee, and overweight fee were never published (`rentalDays: null`, TODO D1).

## Facebook ad offer

- 10-yard for **$275** for **3 days**, labeled "Online special" on `/facebook-offer`.
- The page now asks for a free quote instead. If the ad still mentions $275, update the ad or the page so they match.

## Junk removal

Never had a published price. It was always "priced per job after a description or photos." It's now a free quote, the same as dumpsters.

## Where prices used to show

- `lib/site-config.js` `sizes[].price`, `lowestPrice`, `priceOf()`, and `facebookOffer`.
- The booking card's size picker, price cards, size spotlight, and the "Rather load it yourself?" box on junk pages.
- The `/dumpster-rental-pricing` page, which is now sizes plus a free quote, at the same URL.
- Structured data: Product + Offer on the pricing and size pages, and AggregateOffer on service and city pages.
- Page titles and meta descriptions ("from $325"), service and city content, all blog posts, `llms.txt`, and the rental terms.

## Turning prices back on

1. Restore `price` on each size and the `lowestPrice` and `priceOf` helpers from `25452df`.
2. Bring back the price cards, the Product/Offer schema, and the price lines in content. Diffing against `25452df` shows every spot.
3. Update this doc.
