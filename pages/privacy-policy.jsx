import { LegalPage } from "@/components/site/legal-page";
import { siteConfig } from "@/lib/site-config";

// TODO(legal): have an attorney review before launch.
const sections = [
  {
    title: "What we collect",
    body: [
      "When you book, request a quote, call, or text us, we collect what you give us: your name, phone number, email address, delivery address or ZIP code, and details about your project.",
      "Like most websites, we also collect basic technical information automatically, such as your browser type, the pages you visit, and how you found us. We use cookies and similar tools from Google Analytics, Google Ads, Meta (Facebook), Hotjar, and Vercel Analytics to do this.",
    ],
  },
  {
    title: "How we use it",
    body: [
      "We use your information to schedule and deliver your rental or service, send quotes and confirmations, answer your questions, process payments, and improve our website and advertising.",
      "We don't sell your personal information.",
    ],
  },
  {
    title: "Text messages",
    body: [
      "If you text us or ask us to text you, we use your number only to communicate about your quote, booking, and service. Mobile numbers and texting consent are never shared with third parties or affiliates for their marketing. See our SMS Terms for details.",
    ],
  },
  {
    title: "Who we share it with",
    body: [
      "We share information only with service providers that help us run the business, such as our email, texting, scheduling, payment, analytics, and advertising tools, and only as needed for them to do that work. We may also share information if the law requires it.",
    ],
  },
  {
    title: "Spam protection",
    body: [
      "Our forms use Google reCAPTCHA to block spam. Google's Privacy Policy and Terms of Service apply to that service.",
    ],
  },
  {
    title: "Your choices",
    body: [
      "You can ask us to see, correct, or delete the personal information we have about you by calling or emailing us. You can block or delete cookies in your browser settings, and you can opt out of texts at any time by replying STOP.",
    ],
  },
  {
    title: "Data security and retention",
    body: [
      "We keep your information only as long as we need it to provide service, keep business records, and meet legal requirements, and we take reasonable steps to protect it.",
    ],
  },
  {
    title: "Changes to this policy",
    body: ["If we change this policy, we'll post the new version here with an updated date."],
  },
];

export default function PrivacyPolicy() {
  return (
    <LegalPage
      title="Privacy Policy"
      metaTitle={`Privacy Policy | ${siteConfig.name}`}
      description={`How ${siteConfig.name} collects, uses, and protects the information you share when you book, request a quote, call, or text us.`}
      path="/privacy-policy"
      updated="October 26, 2026"
      intro={`This policy explains how ${siteConfig.legalName}, doing business as ${siteConfig.name}, handles your information.`}
      sections={sections}
    />
  );
}
