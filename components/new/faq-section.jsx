import { HelpCircle } from "lucide-react";

// Hardcoded list of Frequently Asked Questions
const faqsList = [
  {
    question: "How much does it cost to rent a dumpster in Trinity, FL?",
    answer:
      "Dumpster rental prices in Trinity vary based on size, rental duration, and the type of debris. Contact Lupo Dumpster Rentals for a transparent, free quote tailored to your specific Trinity project!",
  },
  {
    question: "What dumpster sizes do you offer for Trinity residents?",
    answer:
      "We offer 10-yard, 15-yard, and 20-yard dumpsters, perfect for any project size in Trinity, from small home cleanouts to larger construction jobs. Our team can help you select the best fit.",
  },
  {
    question: "How long can I keep the dumpster at my Trinity location?",
    answer:
      "Our standard rental period is typically 7 days, but we offer flexible options for Trinity customers. If you need it longer, just let us know, and we'll work with your schedule.",
  },
  {
    question: "Do I need a permit for a dumpster in Trinity, FL?",
    answer:
      "If the dumpster is placed on private property in Trinity (like your driveway), a permit is usually not required. However, if it needs to be on a public street, a permit from Pasco County might be necessary. We can advise you on this.",
  },
  {
    question: "How quickly can I get a dumpster delivered to Trinity?",
    answer:
      "We pride ourselves on prompt service! In many cases, we can offer same-day or next-day dumpster delivery to Trinity. Call us to check availability.",
  },
  {
    question: "What if I fill my dumpster sooner than expected?",
    answer:
      "No problem! Just give us a call, and we can arrange an early pickup for your Trinity location and, if needed, swap it for an empty one (additional charges may apply).",
  },
];

export function FaqSection({ title, subtitle }) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <HelpCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-3xl font-bold tracking-tight text-black">
            {title}
          </h2>
          <p className="mt-4 text-lg text-zinc-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-6">
          {faqsList.map((faq, index) => (
            <div
              key={index}
              className="bg-zinc-50 rounded-lg p-6 border border-zinc-100"
            >
              <h3 className="text-xl font-bold mb-3 text-black">
                {faq.question}
              </h3>
              <p className="text-zinc-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
