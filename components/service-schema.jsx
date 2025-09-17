import Script from "next/script";

const ServiceSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Dumpster Rental Services",
    provider: {
      "@type": "LocalBusiness",
      name: "Lupo Enterprises LLC",
      url: "https://www.lupodumpsterrentals.com/",
      telephone: "+1-727-317-6717",
      address: {
        "@type": "PostalAddress",
        streetAddress: "5647 Andrea Dr",
        addressLocality: "Holiday",
        addressRegion: "FL",
        postalCode: "34690",
        addressCountry: "US",
      },
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Dumpster Rental Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Dumpster Rentals",
            description:
              "Affordable and reliable dumpster rental services in Pasco County, Florida. Various sizes available for residential and commercial projects.",
            serviceArea: {
              "@type": "GeoCircle",
              geoMidpoint: {
                "@type": "GeoCoordinates",
                latitude: 28.1877,
                longitude: -82.7393,
              },
              geoRadius: "50000", // 50km radius
            },
            category: "Dumpster Rental",
          },
          priceRange: "$$",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Junk Removal",
            description:
              "Professional junk removal services, including haul away and junk pick up in Pasco County, Florida. Same-day service available.",
            serviceArea: {
              "@type": "GeoCircle",
              geoMidpoint: {
                "@type": "GeoCoordinates",
                latitude: 28.1877,
                longitude: -82.7393,
              },
              geoRadius: "50000",
            },
            category: "Junk Removal",
          },
          priceRange: "$$",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Hoarding Cleanup",
            description:
              "Specialized hoarding cleanup services in Pasco County, Florida. Compassionate and discreet service with proper disposal methods.",
            serviceArea: {
              "@type": "GeoCircle",
              geoMidpoint: {
                "@type": "GeoCoordinates",
                latitude: 28.1877,
                longitude: -82.7393,
              },
              geoRadius: "50000",
            },
            category: "Specialized Cleaning",
          },
          priceRange: "$$",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Construction Debris Removal",
            description:
              "Construction debris removal services for residential and commercial sites in Pasco County, Florida. Heavy-duty equipment available.",
            serviceArea: {
              "@type": "GeoCircle",
              geoMidpoint: {
                "@type": "GeoCoordinates",
                latitude: 28.1877,
                longitude: -82.7393,
              },
              geoRadius: "50000",
            },
            category: "Construction Services",
          },
          priceRange: "$$",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Appliance Removal",
            description:
              "Fast and efficient appliance removal services in Pasco County, Florida. Eco-friendly disposal and recycling options.",
            serviceArea: {
              "@type": "GeoCircle",
              geoMidpoint: {
                "@type": "GeoCoordinates",
                latitude: 28.1877,
                longitude: -82.7393,
              },
              geoRadius: "50000",
            },
            category: "Appliance Services",
          },
          priceRange: "$$",
        },
      ],
    },
    areaServed: {
      "@type": "State",
      name: "Florida",
      containsPlace: {
        "@type": "City",
        name: "Pasco County",
      },
    },
  };

  return (
    <Script
      id="service-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default ServiceSchema;
