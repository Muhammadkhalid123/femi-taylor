"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "How do I order a signed book?",
    a: "Visit the Shop page and select items marked 'Signed'. Signed copies are dispatched within 5–7 business days.",
  },
  {
    q: "How do I book Femi for an event?",
    a: "Use the contact form and select 'Event Booking' as your inquiry type. Include your event date, location, and details.",
  },
  {
    q: "Do you ship internationally?",
    a: "Yes. We ship worldwide. Delivery times and costs vary by region and are shown at checkout.",
  },
  {
    q: "How can media request an interview?",
    a: "Select 'Media Inquiry' in the contact form or visit the Press page to download the official press kit.",
  },
];

export default function ContactFaq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-background rounded-2xl border border-border overflow-hidden">
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left font-bold hover:bg-muted/30 transition-colors"
              >
                {faq.q}
                <ChevronDown
                  size={20}
                  className={cn("shrink-0 transition-transform", open === i && "rotate-180")}
                />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-muted-foreground">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
