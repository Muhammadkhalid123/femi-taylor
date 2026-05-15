"use client";

import { motion } from "framer-motion";

const quotes = [
  {
    text: "Femi Taylor brings a rare authenticity to every conversation — her story resonates far beyond the Star Wars fandom.",
    source: "Entertainment Weekly",
  },
  {
    text: "A performer who has mastered reinvention without losing the magic of her origins.",
    source: "The Guardian",
  },
];

export default function PressQuotes() {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {quotes.map((q, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center md:text-left"
            >
              <p className="text-xl font-serif italic leading-relaxed mb-4">&ldquo;{q.text}&rdquo;</p>
              <footer className="text-accent font-bold text-sm uppercase tracking-widest">— {q.source}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
