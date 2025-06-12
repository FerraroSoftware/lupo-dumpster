import Script from "next/script";

const LocationSchema = ({
  areaServed,
  geoCoordinates,
  locationUrl,
  locationName,
}) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `Lupo Enterprises LLC - ${locationName}`,
    url: locationUrl,
    logo: "https://www.lupodumpsterrentals.com/logo.svg",
    image:
      "https://www.lupodumpsterrentals.com/dumpster-rental-pasco-county.jpg",
    description: `Lupo Enterprises LLC provides dependable dumpster rental and junk removal services in the ${locationName} area. We offer cleanouts, hauling, and dumpster rentals for homes, businesses, and contractors.`,
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
      areaServed: areaServed,
      availableLanguage: "English",
    },
    telephone: "+1-727-317-6717",
    priceRange: "$",
    openingHours: [
      "Mo 07:00-20:00",
      "Tu 07:00-20:00",
      "We 07:00-20:00",
      "Th 07:00-20:00",
      "Fr 07:00-20:00",
      "Sa 07:00-20:00",
      "Su 07:00-20:00",
    ],
    geo: {
      "@type": "GeoCoordinates",
      latitude: geoCoordinates.latitude,
      longitude: geoCoordinates.longitude,
    },
    sameAs: [
      "https://www.facebook.com/LupoLLC/",
      "https://www.instagram.com/lupodumpsterrentals/?hl=en",
    ],
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Dumpster Rental",
          description: `Affordable dumpster rentals for homeowners, contractors, and businesses in ${locationName}.`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Junk Removal",
          description: `Efficient junk removal services in ${locationName}, including furniture, debris, and appliance disposal.`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Cleanouts & Hauling",
          description: `Complete cleanout and hauling solutions for estate cleanups, moves, and renovations in ${locationName}.`,
        },
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "140",
    },
  };

  return (
    <Script
      id="structured-data-location"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default LocationSchema;
