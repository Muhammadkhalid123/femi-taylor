"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    author: "James L.",
    role: "Longtime Fan",
    text: "An incredible insight into a cinematic legend. Femi's story is as captivating as her performance on screen.",
    rating: 5,
  },
  {
    author: "Sarah M.",
    role: "Reader",
    text: "Deeply moving and inspirational. A must-read for anyone who loves dance or film history.",
    rating: 5,
  },
  {
    author: "Robert T.",
    role: "Collector",
    text: "The signed edition is a prized possession. The book itself is beautifully written and filled with heart.",
    rating: 5,
  },
];

interface ReviewsSectionProps {
  variant?: "sidebar" | "full";
}

export default function ReviewsSection({ variant = "sidebar" }: ReviewsSectionProps) {
  if (variant === "full") {
    return (
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">What Readers Say</h2>
            <p className="text-muted-foreground">Praise from fans, collectors, and fellow artists.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-background border border-border rounded-3xl shadow-sm"
              >
                <div className="flex gap-1 text-accent mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div>
                  <span className="font-bold">{review.author}</span>
                  <span className="block text-xs uppercase tracking-widest text-muted-foreground mt-1">
                    {review.role}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="mt-12 space-y-6">
      <h3 className="text-xl font-serif font-bold px-2">Reader Reviews</h3>
      <div className="space-y-4">
        {reviews.map((review, index) => (
          <div key={index} className="p-6 bg-background border border-border rounded-2xl shadow-sm">
            <div className="flex gap-1 text-accent mb-3">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} size={14} fill="currentColor" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              &ldquo;{review.text}&rdquo;
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-foreground">{review.author}</span>
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground">{review.role}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
