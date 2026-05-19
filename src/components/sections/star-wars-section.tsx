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
              The Legend of Oola
            </h3>
            <div className="prose prose-lg dark:prose-invert text-muted-foreground">
              <p>
                In 1983, Femi Taylor made cinematic history as Oola, the Twi'lek slave dancer 
                in Jabba's Palace. Her performance, though brief, became one of the most 
                memorable and beloved in the Star Wars saga.
              </p>
              <p className="mt-4">
                Fourteen years later, Femi achieved the unique distinction of being the only 
                original performer called back by George Lucas to film additional scenes 
                for the 1997 Special Edition—looking exactly the same as she did in 1983.
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
                src="/portfolio/WhatsApp Image 2026-05-16 at 2.17.36 PM.jpeg"
                alt="Oola Star Wars"
                fill
                className="object-cover"
              />
            </div>
            {/* Quote Overlay */}
            <div className="absolute -bottom-6 -right-6 md:right-12 bg-accent text-accent-foreground p-6 rounded-2xl shadow-xl max-w-xs">
              <p className="text-sm font-bold italic">
                "Being part of the Star Wars universe is a gift that keeps on giving."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
