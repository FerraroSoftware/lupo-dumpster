import Script from "next/script";

const FaqSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What sizes of dumpsters do you offer in Pasco County?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Lupo Enterprises LLC offers various dumpster sizes to meet your needs, from small residential cleanouts to large construction projects. Contact us at 727-317-6717 for specific sizing options and recommendations based on your project.",
        },
      },
      {
        "@type": "Question",
        name: "How much does dumpster rental cost in Pasco County?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our dumpster rental prices are competitive and vary based on size, rental duration, and location within Pasco County. Call 727-317-6717 for a free quote tailored to your specific needs.",
        },
      },
      {
        "@type": "Question",
        name: "What areas in Pasco County do you serve?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Lupo Enterprises LLC provides dumpster rental and junk removal services throughout Pasco County, Florida, including Holiday, New Port Richey, Port Richey, Trinity, Odessa, Land O' Lakes, and surrounding areas.",
        },
      },
      {
        "@type": "Question",
        name: "What can I put in the dumpster?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can dispose of most household junk, construction debris, furniture, appliances, and general waste. We cannot accept hazardous materials, chemicals, paint, tires, or electronics. Contact us at 727-317-6717 if you have questions about specific items.",
        },
      },
      {
        "@type": "Question",
        name: "How long can I keep the dumpster?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Standard rental periods are flexible to meet your project timeline. We offer daily, weekly, and extended rental options. Contact Lupo Enterprises LLC at 727-317-6717 to discuss your specific rental duration needs.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer same-day dumpster delivery?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we strive to provide same-day or next-day delivery when possible, depending on availability and location within Pasco County. Call 727-317-6717 to check availability for your area.",
        },
      },
      {
        "@type": "Question",
        name: "What junk removal services do you provide?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Lupo Enterprises LLC offers comprehensive junk removal services including furniture removal, appliance removal, construction debris removal, hoarding cleanup, and general junk haul away services throughout Pasco County, Florida.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide hoarding cleanup services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we specialize in compassionate and professional hoarding cleanup services in Pasco County. Our team handles these sensitive situations with discretion and care. Contact us at 727-317-6717 to discuss your specific needs.",
        },
      },
      {
        "@type": "Question",
        name: "What are your business hours?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Lupo Enterprises LLC is open Monday through Sunday from 7:00 AM to 8:00 PM. We're available 7 days a week to serve your dumpster rental and junk removal needs in Pasco County.",
        },
      },
      {
        "@type": "Question",
        name: "How do I schedule a dumpster rental or junk removal service?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Scheduling is easy! Call us at 727-317-6717 or visit our website at lupodumpsterrentals.com. Our friendly customer service team will help you choose the right service and schedule delivery or pickup at your convenience.",
        },
      },
    ],
  };

  return (
    <Script
      id="faq-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default FaqSchema;
