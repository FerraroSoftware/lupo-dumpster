import Head from "next/head";
import { reviews, serviceAreas, siteConfig } from "@/lib/site-config";

const ORG_ID = `${siteConfig.url}/#organization`;

function JsonLd({ id, data }) {
  return (
    <Head>
      <script type="application/ld+json" key={id} dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
    </Head>
  );
}

/** Sitewide business + website entities. Page schemas point at them by `@id`. */
export function SiteSchema() {
  const { address: a } = siteConfig;
  return (
    <JsonLd
      id="site-schema"
      data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "LocalBusiness",
            "@id": ORG_ID,
            name: siteConfig.name,
            legalName: siteConfig.legalName,
            url: `${siteConfig.url}/`,
            logo: `${siteConfig.url}/images/brand/lupo-logo.png`,
            image: `${siteConfig.url}/images/og/lupo-default-og.jpg`,
            telephone: siteConfig.phoneE164,
            email: siteConfig.email,
            foundingDate: String(siteConfig.foundedYear),
            founder: siteConfig.founders.map((name) => ({ "@type": "Person", name })),
            priceRange: "$$",
            openingHours: siteConfig.openingHours,
            address: {
              "@type": "PostalAddress",
              streetAddress: a.street,
              addressLocality: a.city,
              addressRegion: a.state,
              postalCode: a.zip,
              addressCountry: "US",
            },
            geo: { "@type": "GeoCoordinates", ...siteConfig.geo },
            areaServed: serviceAreas.map((r) => ({ "@type": "AdministrativeArea", name: `${r.county}, FL` })),
            sameAs: Object.values(siteConfig.social),
          },
          {
            "@type": "WebSite",
            "@id": `${siteConfig.url}/#website`,
            name: siteConfig.name,
            alternateName: siteConfig.legalName,
            url: `${siteConfig.url}/`,
            inLanguage: "en-US",
            publisher: { "@id": ORG_ID },
          },
        ],
      }}
    />
  );
}

/** Rating + the reviews shown on the page. Only render where those reviews are visible. */
export function ReviewSchema({ items = reviews }) {
  return (
    <JsonLd
      id="review-schema"
      data={{
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": ORG_ID,
        name: siteConfig.name,
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: siteConfig.rating.value,
          reviewCount: siteConfig.rating.count,
          bestRating: "5",
          worstRating: "1",
        },
        review: items.map((r) => ({
          "@type": "Review",
          author: { "@type": "Person", name: r.name },
          datePublished: r.date,
          reviewBody: r.text,
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        })),
      }}
    />
  );
}
