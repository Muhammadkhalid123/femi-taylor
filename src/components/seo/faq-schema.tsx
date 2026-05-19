import { JsonLd } from "@/components/seo/json-ld";

const faqs = [
  {
    question: "How do I order a signed book?",
    answer:
      "Visit the Shop page and choose items marked as signed editions. Signed copies ship within 5–7 business days.",
  },
  {
    question: "How do I book Femi for an event?",
    answer:
      "Use the Contact page and select Event Booking. Include your date, location, and event details.",
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes. Worldwide shipping is available with costs shown at checkout.",
  },
  {
    question: "How can media request an interview?",
    answer:
      "Select Media Inquiry on the Contact page or download materials from the Press page.",
  },
];

export function FaqSchema() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      }}
    />
  );
}
