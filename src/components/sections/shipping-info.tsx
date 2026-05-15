"use client";

import { motion } from "framer-motion";

const info = [
  { region: "UK & Europe", time: "3–5 business days", cost: "Free over £50" },
  { region: "USA & Canada", time: "5–8 business days", cost: "From $8.99" },
  { region: "Rest of World", time: "7–14 business days", cost: "Calculated at checkout" },
];

export default function ShippingInfo() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif font-bold mb-4">Shipping & Delivery</h2>
          <p className="text-muted-foreground">We ship signed books and merchandise worldwide.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {info.map((row, i) => (
            <motion.div
              key={row.region}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl border border-border bg-muted/30 text-center"
            >
              <h3 className="font-bold mb-2">{row.region}</h3>
              <p className="text-sm text-muted-foreground">{row.time}</p>
              <p className="text-sm text-primary font-bold mt-2">{row.cost}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
