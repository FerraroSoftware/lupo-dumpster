import Script from "next/script";

const OrganizationSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Lupo Enterprises LLC",
    legalName: "Lupo Enterprises LLC",
    url: "https://www.lupodumpsterrentals.com/",
    logo: "https://www.lupodumpsterrentals.com/logo.svg",
    image: "https://www.lupodumpsterrentals.com/dump-trailer.png",
    description:
      "Lupo Enterprises LLC is a locally owned and operated business specializing in dumpster rentals, junk removal services, and more in Pasco County, Florida.",
    foundingDate: "2020",
    address: {
      "@type": "PostalAddress",
      streetAddress: "5647 Andrea Dr",
      addressLocality: "Holiday",
      addressRegion: "FL",
      postalCode: "34690",
      addressCountry: "US",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-727-317-6717",
      contactType: "Customer Service",
      areaServed: "Pasco County",
      availableLanguage: "English",
    },
    sameAs: [
      "https://www.facebook.com/LupoLLC",
      "https://www.instagram.com/lupodumpsterrentals/?hl=en",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Dumpster Rental Services",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Dumpster Rentals",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Residential Dumpster Rental",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Commercial Dumpster Rental",
              },
            },
          ],
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "131",
    },
  };

  return (
    <Script
      id="organization-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default OrganizationSchema;
