"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CatsSection() {
  return (
    <section className="py-24 bg-muted/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">
              West End & Film
            </h2>
            <h3 className="text-4xl sm:text-5xl font-serif font-bold mb-6">
              The Magic of Cats
            </h3>
            <div className="prose prose-lg dark:prose-invert text-muted-foreground">
              <p>
                Before the galaxy, there were the Jellicle Cats. Femi originated the role of 
                Tantomile in the 1981 original London production of Andrew Lloyd Webber's Cats, 
                a production that redefined musical theatre.
              </p>
              <p className="mt-4">
                Her connection to the show came full circle in 1998, when she was cast in 
                the filmed version of Cats. In a rare tribute to her talent, the character 
                'Exotica' was created specifically for her by the creative team.
              </p>
            </div>
            
            <ul className="mt-10 space-y-4">
              <li className="flex items-center gap-4 p-4 bg-background rounded-xl border border-border shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">1</div>
                <div>
                  <h4 className="font-bold">Original London Cast</h4>
                  <p className="text-xs text-muted-foreground">Theatre History (1981)</p>
                </div>
              </li>
              <li className="flex items-center gap-4 p-4 bg-background rounded-xl border border-border shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">2</div>
                <div>
                  <h4 className="font-bold">Created Role: Exotica</h4>
                  <p className="text-xs text-muted-foreground">Cats Film (1998)</p>
                </div>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 relative"
          >
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border-8 border-white dark:border-gray-800">
              <Image
                src="https://images.unsplash.com/photo-1514302240736-b1fee598926e?auto=format&fit=crop&q=80" // Placeholder
                alt="Cats Musical"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
