import Script from "next/script";

const HomePageSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Lupo Enterprises LLC",
    url: "https://www.lupodumpsterrentals.com",
    logo: "https://www.lupodumpsterrentals.com/logo.svg",
    image:
      "https://www.lupodumpsterrentals.com/dumpster-rental-pasco-county.jpg",
    description:
      "Lupo Enterprises LLC provides dependable dumpster rental and junk removal services across Pasco and Pinellas County. We offer cleanouts, hauling, and dumpster rentals for homes, businesses, and contractors.",
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
      areaServed: [
        "Pasco County",
        "Pinellas County",
        "New Port Richey",
        "Port Richey",
        "Trinity",
        "Holiday",
        "Hudson",
        "Land O' Lakes",
        "Wesley Chapel",
        "Dade City",
        "Zephyrhills",
        "San Antonio",
        "Odessa",
        "Lutz",
        "Clearwater",
        "St. Petersburg",
        "Pinellas Park",
        "Largo",
        "Seminole",
        "Dunedin",
      ],
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
      latitude: 28.1908,
      longitude: -82.7312,
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
          description:
            "Affordable dumpster rentals for homeowners, contractors, and businesses in Pasco and Pinellas County.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Junk Removal",
          description:
            "Fast junk removal and cleanout services including debris, furniture, appliances, and yard waste.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Cleanouts & Hauling",
          description:
            "Comprehensive cleanout and hauling services for estate cleanups, renovations, and property clear-outs.",
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
      id="structured-data-home"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default HomePageSchema;
