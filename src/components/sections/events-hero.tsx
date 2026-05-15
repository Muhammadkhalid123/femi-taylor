"use client";

import { motion } from "framer-motion";

export default function EventsHero() {
  return (
    <section className="pt-32 pb-16 bg-muted/30 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-4">Appearances & Events</h1>
          <p className="text-lg text-muted-foreground italic">
            "Meet Femi at book signings, conventions, and speaking engagements worldwide."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
