import Script from "next/script";

const LocationSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Lupo Enterprises LLC - Pasco County Dumpster Rental Professionals",
    url: "https://www.lupodumpsterrentals.com/",
    logo: "https://www.lupodumpsterrentals.com/logo.svg",
    image: "https://www.lupodumpsterrentals.com/dump-trailer.png",
    description:
      "Lupo Enterprises LLC is a locally owned and operated business specializing in dumpster rentals, junk removal services, and more in Pasco County, Florida.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-727-317-6717",
      contactType: "Customer Service",
      areaServed: "Pasco County",
      availableLanguage: "English",
    },
    telephone: "+1-727-317-6717",
    priceRange: "$$",
    openingHours: ["Mo-Su 07:00-20:00"],
    geo: {
      "@type": "GeoCoordinates",
      latitude: 28.1877, // replace with actual latitude
      longitude: -82.7393, // replace with actual longitude
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "5647 Andrea Dr",
      addressLocality: "Holiday",
      addressRegion: "FL",
      postalCode: "34690",
      addressCountry: "US",
    },
    sameAs: [
      "https://www.facebook.com/LupoLLC",
      "https://www.instagram.com/lupodumpsterrentals/?hl=en",
    ],
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Dumpster Rentals",
          description:
            "Affordable and reliable dumpster rental services in Pasco County, Florida.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Junk Removal",
          description:
            "Professional junk removal services, including haul away and junk pick up in Pasco County, Florida.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Hoarding Cleanup",
          description:
            "Specialized hoarding cleanup services in Pasco County, Florida.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Construction Debris Removal",
          description:
            "Construction debris removal services for residential and commercial sites in Pasco County, Florida.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Appliance Removal",
          description:
            "Fast and efficient appliance removal services in Pasco County, Florida.",
        },
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "131",
    },
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default LocationSchema;
