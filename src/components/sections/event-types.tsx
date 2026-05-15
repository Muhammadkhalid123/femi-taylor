"use client";

import { motion } from "framer-motion";
import { Mic, Pen, Users } from "lucide-react";

const types = [
  {
    icon: Users,
    title: "Conventions",
    description: "Star Wars celebrations, comic cons, and fan gatherings with panels and photo ops.",
  },
  {
    icon: Pen,
    title: "Book Signings",
    description: "Intimate readings, Q&A sessions, and signed copy events at bookstores worldwide.",
  },
  {
    icon: Mic,
    title: "Speaking Engagements",
    description: "Keynotes on resilience, creativity, and building a career across continents.",
  },
];

export default function EventTypes() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4">Event Types</h2>
          <p className="text-muted-foreground">Ways to experience Femi&apos;s story in person.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {types.map((type, i) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-muted/50 border border-border hover:border-primary/50 transition-all"
            >
              <type.icon size={32} className="text-primary mb-6" />
              <h3 className="text-xl font-serif font-bold mb-3">{type.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{type.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
