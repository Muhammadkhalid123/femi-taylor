"use client";

import { motion } from "framer-motion";

const past = [
  { year: "2025", event: "London Film & Comic Con", highlight: "Sold-out signing queue" },
  { year: "2025", event: "NYC Book Festival", highlight: "Featured author keynote" },
  { year: "2024", event: "Star Wars Celebration Europe", highlight: "Oola legacy panel" },
  { year: "2024", event: "West End Reunion", highlight: "Cats original cast reunion" },
];

export default function PastEvents() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif font-bold mb-4">Past Highlights</h2>
          <p className="text-muted-foreground">Memorable appearances from recent years.</p>
        </motion.div>

        <div className="space-y-4 max-w-3xl mx-auto">
          {past.map((item, i) => (
            <motion.div
              key={`${item.year}-${item.event}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center gap-6 p-6 bg-background rounded-2xl border border-border"
            >
              <span className="text-2xl font-bold text-accent shrink-0 w-16">{item.year}</span>
              <div>
                <h3 className="font-serif font-bold">{item.event}</h3>
                <p className="text-sm text-muted-foreground">{item.highlight}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
