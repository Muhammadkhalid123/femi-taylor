"use client";

import { motion } from "framer-motion";
import { Heart, Globe, Sparkles } from "lucide-react";

const pillars = [
  {
    icon: Heart,
    title: "Resilience",
    text: "From Nigeria to the global stage, every challenge became a chapter in a larger story of perseverance.",
  },
  {
    icon: Globe,
    title: "Connection",
    text: "Art bridges cultures. Femi's work speaks to fans across generations, continents, and mediums.",
  },
  {
    icon: Sparkles,
    title: "Reinvention",
    text: "Dancer, actress, author — each identity builds on the last without leaving the others behind.",
  },
];

export default function AboutPhilosophy() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4">Her Philosophy</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The principles that guide Femi&apos;s work on stage, on screen, and on the page.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-muted/50 border border-border text-center hover:border-primary/50 transition-all"
            >
              <div className="inline-flex p-4 bg-primary/10 rounded-full text-primary mb-6">
                <pillar.icon size={28} />
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">{pillar.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{pillar.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
