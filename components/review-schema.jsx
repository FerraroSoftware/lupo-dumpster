import Script from "next/script";

const ReviewSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Lupo Enterprises LLC",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "95",
      bestRating: "5",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "David Coakley",
        },
        datePublished: "2023-09-17",
        reviewBody:
          "Needed a dumpster in a bad way and reached out to several companies, Lupo was quick to respond, pricing was great, and the dumpster was dropped off less than 24 hours from the time we received our quote. I ended up needing a second dumpster and they accommodated that as well.",
        name: "Quick Response and Great Pricing",
        reviewRating: {
          "@type": "Rating",
          bestRating: "5",
          ratingValue: "5",
          worstRating: "1",
        },
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Kerry Smith",
        },
        datePublished: "2024-04-17",
        reviewBody:
          "I contacted Lupo to rent a dumpster for home renovation project. I shopped around and made a few calls before deciding on Lupo. Booking the dumpster was very easy and it was delivered the very same day. My contractor took a few days longer than expected but they were very accommodating with the timeline.",
        name: "Easy Booking and Flexible Service",
        reviewRating: {
          "@type": "Rating",
          bestRating: "5",
          ratingValue: "5",
          worstRating: "1",
        },
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Kristi Kostencki",
        },
        datePublished: "2023-09-17",
        reviewBody:
          "Hands down the BEST!!!! I have terminal cancer and they truly worked with me in every single way that they possibly could made this experience seamless their customer service is impeccable dumpsters are very reasonably priced the best out there.",
        name: "Exceptional Customer Service During Difficult Times",
        reviewRating: {
          "@type": "Rating",
          bestRating: "5",
          ratingValue: "5",
          worstRating: "1",
        },
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Owen Rigsby",
        },
        datePublished: "2024-01-17",
        reviewBody:
          "After the passing of our father, we needed to clean 40 years of collected stuff out of the house. Lupo did an excellent job of providing a dumpster for all the excess material not suitable for the thrift store. Great communication. Had the dumpster for over a week and they were very accommodating.",
        name: "Compassionate Service for Estate Cleanout",
        reviewRating: {
          "@type": "Rating",
          bestRating: "5",
          ratingValue: "5",
          worstRating: "1",
        },
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Brian Ostapow",
        },
        datePublished: "2024-07-17",
        reviewBody:
          "Were able to work with me for the drop off time. And pickup was very quick once the trailer was loaded. Great people. Only company I would use in the area!",
        name: "Flexible Scheduling and Quick Service",
        reviewRating: {
          "@type": "Rating",
          bestRating: "5",
          ratingValue: "5",
          worstRating: "1",
        },
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Crystal Dean",
        },
        datePublished: "2024-03-17",
        reviewBody:
          "Friendly and fast service. Their prices were alot better then most places and I loved that there wasn't any extra fees.",
        name: "No Hidden Fees and Great Prices",
        reviewRating: {
          "@type": "Rating",
          bestRating: "5",
          ratingValue: "5",
          worstRating: "1",
        },
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Sherri Johnson",
        },
        datePublished: "2024-08-17",
        reviewBody:
          "Thank you so much Lupo. Your service was excellent. I give you a 10. Definitely will always use you and share my experience",
        name: "Perfect 10/10 Service",
        reviewRating: {
          "@type": "Rating",
          bestRating: "5",
          ratingValue: "5",
          worstRating: "1",
        },
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Melody Cochran",
        },
        datePublished: "2024-07-17",
        reviewBody:
          "Very professional. Communication was outstanding. Great service!!",
        name: "Outstanding Communication and Professional Service",
        reviewRating: {
          "@type": "Rating",
          bestRating: "5",
          ratingValue: "5",
          worstRating: "1",
        },
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Joseph Scicolone",
        },
        datePublished: "2024-05-17",
        reviewBody:
          "I have worked with lupo several times and have had a good experience each time. Their prices are fair and they show up when they say they are going to.",
        name: "Reliable Repeat Customer Experience",
        reviewRating: {
          "@type": "Rating",
          bestRating: "5",
          ratingValue: "5",
          worstRating: "1",
        },
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "James R",
        },
        datePublished: "2024-08-17",
        reviewBody:
          "We used the 16 cf dumpster twice,most affordable,and allow desent time too fill!",
        name: "Most Affordable with Flexible Timeline",
        reviewRating: {
          "@type": "Rating",
          bestRating: "5",
          ratingValue: "5",
          worstRating: "1",
        },
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Eckon LLC",
        },
        datePublished: "2024-03-17",
        reviewBody:
          "Quick and reliable with affordable prices. I call Lupo enterprises anytime I need something done right. Wether it's junk removal, dumpster rental or even lawn maintenance I know I can count on Lupo enterprises to get it done.",
        name: "Multi-Service Reliability",
        reviewRating: {
          "@type": "Rating",
          bestRating: "5",
          ratingValue: "5",
          worstRating: "1",
        },
      },
    ],
  };

  return (
    <Script
      id="review-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default ReviewSchema;
