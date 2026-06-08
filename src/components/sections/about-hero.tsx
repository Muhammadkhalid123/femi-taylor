"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-6xl font-serif font-bold mb-6 text-foreground">
              A Journey of <span className="text-primary italic">Grace,</span> <br />
              Art, and Resilience.
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              From her beginnings in Ibadan, Nigeria, to the stages of London and the iconic worlds of film and theatre, Femi Taylor’s journey is one shaped by artistry, resilience, and self-discovery. Through every chapter of her life, she has continued to evolve, finding new ways to express herself both on and beyond the stage.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative"
          >
            <div className="relative w-full max-w-md aspect-[4/5] mx-auto rounded-2xl overflow-hidden shadow-2xl border-8 border-white dark:border-gray-800">
              <Image
                src="/portfolio/WhatsApp Image 2026-05-14 at 9.41.37 PM.jpeg"
                alt="Femi Taylor Portrait"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
