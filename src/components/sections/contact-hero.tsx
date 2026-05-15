"use client";

import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="pt-32 pb-16 bg-muted/30 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-6xl font-serif font-bold mb-4">Contact</h1>
          <p className="text-lg text-muted-foreground italic max-w-2xl mx-auto">
            Questions about orders, media inquiries, or booking Femi for your event — we&apos;re here to help.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
