import { LegalPage } from "@/components/site/legal-page";
import { siteConfig } from "@/lib/site-config";

// TODO(legal): confirm wording against the A2P 10DLC campaign registration (todo 6.7).
const sections = [
  {
    title: "Program description",
    body: [
      `${siteConfig.name} sends text messages about your quote, booking, delivery, pickup, and service, and replies to texts you send us. Messages come from ${siteConfig.phone}.`,
    ],
  },
  {
    title: "Consent",
    body: [
      "You agree to receive texts when you text us first or when you give us your mobile number and ask us to text you. Consent to receive texts is not a condition of booking or purchase.",
    ],
  },
  {
    title: "Message frequency and cost",
    body: [
      "Message frequency varies based on your conversation and booking. Message and data rates may apply, depending on your mobile plan.",
    ],
  },
  {
    title: "How to opt out or get help",
    body: [
      "Reply STOP to any message to stop receiving texts. You'll get one final message confirming you've been unsubscribed. Reply HELP for help, or call us.",
    ],
  },
  {
    title: "Carriers",
    body: ["Carriers are not liable for delayed or undelivered messages."],
  },
  {
    title: "Privacy",
    body: [
      "We never share your mobile number or texting consent with third parties or affiliates for their marketing. See our Privacy Policy for how we handle your information.",
    ],
  },
];

export default function SmsTerms() {
  return (
    <LegalPage
      title="SMS Terms"
      metaTitle={`SMS Terms | ${siteConfig.name}`}
      description={`Text message terms for ${siteConfig.name}: what we send, message frequency, rates, and how to reply STOP to opt out or HELP for help.`}
      path="/sms-terms"
      updated="October 26, 2026"
      sections={sections}
    />
  );
}
