"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const coverage = [
  { outlet: "Variety", title: "From Oola to Author: Femi Taylor's Remarkable Second Act", year: "2025" },
  { outlet: "BBC Culture", title: "The Star Wars Performer Who Never Aged On Screen", year: "2024" },
  { outlet: "The Stage", title: "Cats Legend Returns to Tell Her Story", year: "2024" },
  { outlet: "Empire Magazine", title: "Inside the Special Edition Recall", year: "2023" },
];

export default function MediaCoverage() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4">Recent Coverage</h2>
          <p className="text-muted-foreground">Press features and interviews about Femi&apos;s career and book.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {coverage.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 bg-background rounded-3xl border border-border hover:border-primary/50 transition-all cursor-pointer"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-primary">{item.outlet}</span>
              <h3 className="text-lg font-serif font-bold mt-2 mb-2 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>{item.year}</span>
                <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
