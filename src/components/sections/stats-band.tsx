"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "40+", label: "Years in the Arts" },
  { value: "2", label: "Iconic Franchises" },
  { value: "1", label: "Special Edition Recall" },
  { value: "Global", label: "Fan Community" },
];

export default function StatsBand() {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <span className="block text-4xl sm:text-5xl font-serif font-bold text-accent mb-2">
                {stat.value}
              </span>
              <span className="text-sm uppercase tracking-widest opacity-80">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
