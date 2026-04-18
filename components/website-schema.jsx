import Script from "next/script";

/**
 * WebSite JSON-LD — injected globally from `pages/_app.js`.
 *
 * Declares the site's identity to search engines and, via `potentialAction`,
 * opts the domain into Google's SERP **sitelinks search box** (the in-result
 * search bar that appears on high-authority branded queries like
 * "lupo dumpster rentals"). Google only honors the search box when the schema
 * is present and the target URL responds to the `{search_term_string}`
 * placeholder.
 *
 * Paired with:
 *   - OrganizationSchema (global) — who we are
 *   - WebsiteSchema (this file) — what the site is + its search endpoint
 *   - Page-specific LocalBusiness / Service / BreadcrumbList schemas
 *
 * Ref: https://developers.google.com/search/docs/appearance/structured-data/sitelinks-searchbox
 */
const WebsiteSchema = () => {
  const siteUrl = "https://www.lupodumpsterrentals.com";
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: "Lupo Dumpster Rentals",
    alternateName: "Lupo Enterprises LLC",
    url: `${siteUrl}/`,
    inLanguage: "en-US",
    publisher: {
      "@id": `${siteUrl}/#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/?s={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <Script
      id="website-schema"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default WebsiteSchema;
