"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function StarWarsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">
              Return of the Jedi
            </h2>
            <h3 className="text-4xl sm:text-5xl font-serif font-bold mb-6">
              The Legacy of Oola
            </h3>
            <div className="prose prose-lg dark:prose-invert text-muted-foreground">
              <p>
                In 1983, Femi Taylor appeared as Oola in Return of the Jedi, creating a character whose impact would far outlive her brief appearance on screen. Oola remains one of the most recognisable and beloved characters in the Star Wars universe.
              </p>
              <p className="mt-4">
                More than a decade later, George Lucas invited Femi to reprise the role for the Special Edition, making her the only original performer recalled to film new scenes. The return remains a unique chapter in both her career and Star Wars history.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-8">
              <div className="border-l-4 border-accent pl-6">
                <span className="block text-3xl font-bold">1983</span>
                <span className="text-sm text-muted-foreground uppercase tracking-wider">Original Release</span>
              </div>
              <div className="border-l-4 border-accent pl-6">
                <span className="block text-3xl font-bold">1997</span>
                <span className="text-sm text-muted-foreground uppercase tracking-wider">Special Edition</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 relative"
          >
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border-8 border-muted">
              <Image
                src="/portfolio/WhatsApp Image 2026-05-16 at 2.17.39 PM.jpeg"
                alt="Oola Star Wars"
                fill
                className="object-contain"
              />
            </div>
            {/* Quote Overlay */}
            <div className="absolute -bottom-6 -right-6 md:right-12 bg-accent text-accent-foreground p-6 rounded-2xl shadow-xl max-w-xs">
              <p className="text-sm font-bold italic">
                “I never imagined that a role filmed in 1983 would continue to connect me with people across generations and around the world.”
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
