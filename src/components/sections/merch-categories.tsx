"use client";

import { motion } from "framer-motion";
import { Book, Package, Gift } from "lucide-react";

const categories = [
  { icon: Book, name: "Books", count: "3 editions", description: "Hardcover, paperback, and signed copies" },
  { icon: Package, name: "Bundles", count: "2 packs", description: "Book + poster or convention exclusives" },
  { icon: Gift, name: "Collectibles", count: "5 items", description: "Limited prints, pins, and memorabilia" },
];

export default function MerchCategories() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4">Shop by Category</h2>
          <p className="text-muted-foreground">Find the perfect item for every fan.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-muted/50 border border-border hover:border-primary/50 hover:shadow-lg transition-all cursor-pointer text-center"
            >
              <cat.icon size={36} className="text-primary mx-auto mb-4" />
              <h3 className="text-xl font-serif font-bold mb-1">{cat.name}</h3>
              <span className="text-xs text-accent font-bold uppercase tracking-widest">{cat.count}</span>
              <p className="text-sm text-muted-foreground mt-3">{cat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
