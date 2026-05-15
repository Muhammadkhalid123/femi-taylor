"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const timelineData = [
  {
    year: "1961",
    title: "Roots in Nigeria",
    description: "Born in Ibadan, Nigeria, setting the stage for a global journey."
  },
  {
    year: "1981",
    title: "Cats (London)",
    description: "Originated the role of Tantomile in the original London production of Cats."
  },
  {
    year: "1983",
    title: "Star Wars Icon",
    description: "Cast as Oola in 'Return of the Jedi', creating a cinematic legacy."
  },
  {
    year: "1997",
    title: "The Special Edition",
    description: "The only original performer recalled to reprise her role for the Special Edition."
  },
  {
    year: "1998",
    title: "Cats Film",
    description: "Created the character 'Exotica' specifically for the Cats film version."
  },
  {
    year: "Present",
    title: "The Author's Journey",
    description: "Bringing her stories to the world through her latest books and appearances."
  }
];

export default function InteractiveTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = timelineData[activeIndex];

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold mb-4">Milestones of a Lifetime</h2>
          <p className="text-muted-foreground mb-4">Click a year to explore each chapter</p>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {timelineData.map((item, index) => (
            <button
              key={item.year}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-bold transition-all",
                activeIndex === index
                  ? "bg-primary text-primary-foreground shadow-lg scale-105"
                  : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              {item.year}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="max-w-2xl mx-auto p-10 rounded-3xl bg-muted/50 border border-border text-center"
          >
            <span className="text-accent font-bold text-3xl mb-3 block">{active.year}</span>
            <h3 className="text-2xl font-serif font-bold mb-4">{active.title}</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">{active.description}</p>
          </motion.div>
        </AnimatePresence>

        <div className="hidden md:block mt-16 relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />
          <div className="space-y-8">
            {timelineData.map((item, index) => (
              <button
                key={item.year}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "relative flex w-full items-center gap-8 group",
                  index % 2 === 0 ? "flex-row-reverse text-right" : "flex-row text-left"
                )}
              >
                <div className="flex-1" />
                <motion.div
                  className={cn(
                    "w-5 h-5 rounded-full border-4 z-10 shrink-0 transition-colors",
                    activeIndex === index
                      ? "bg-primary border-background scale-125"
                      : "bg-muted border-background group-hover:bg-primary/50"
                  )}
                />
                <div className="flex-1">
                  <p
                    className={cn(
                      "text-sm font-bold transition-colors",
                      activeIndex === index ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                    )}
                  >
                    {item.year} — {item.title}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
