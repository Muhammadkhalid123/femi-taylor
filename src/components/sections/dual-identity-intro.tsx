"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Star } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function DualIdentityIntro() {
  const [focused, setFocused] = useState<"performer" | "author" | null>(null);

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* The Performer */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onMouseEnter={() => setFocused("performer")}
            onMouseLeave={() => setFocused(null)}
            onClick={() => setFocused(focused === "performer" ? null : "performer")}
            className={cn(
              "group relative p-8 rounded-2xl bg-muted/50 border border-border transition-all cursor-pointer",
              focused === "performer" ? "border-primary shadow-xl scale-[1.02]" : "hover:border-primary/50",
              focused === "author" && "opacity-60 scale-[0.98]"
            )}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-full text-primary">
                <Star size={24} />
              </div>
              <h3 className="text-2xl font-serif font-bold">The Performer</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-8">
              From the worlds of theatre and film to international conventions and live events, Femi Taylor’s career has spanned more than four decades. Best known for her portrayal of Oola in Star Wars: Return of the Jedi and as a member of the original London cast of Cats, her work reflects a lifelong dedication to performance, creativity, and storytelling.
            </p>
            <Link href="/legacy" className="text-primary font-medium hover:underline inline-flex items-center gap-2">
              Explore Performance History →
            </Link>
          </motion.div>

          {/* The Author */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onMouseEnter={() => setFocused("author")}
            onMouseLeave={() => setFocused(null)}
            onClick={() => setFocused(focused === "author" ? null : "author")}
            className={cn(
              "group relative p-8 rounded-2xl bg-primary text-primary-foreground border border-primary transition-all cursor-pointer",
              focused === "author" ? "shadow-2xl shadow-primary/30 scale-[1.02]" : "hover:shadow-2xl hover:shadow-primary/20",
              focused === "performer" && "opacity-60 scale-[0.98]"
            )}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-white/20 rounded-full text-white">
                <BookOpen size={24} />
              </div>
              <h3 className="text-2xl font-serif font-bold">The Author</h3>
            </div>
            <p className="opacity-90 leading-relaxed mb-6">
              Now, Femi brings her unique journey and experiences to the page. From Ibadan, Nigeria, to the worlds of theatre, film, and Star Wars, her writing explores a life shaped by artistry, love, resilience, and self-discovery. Through honest and deeply personal storytelling, she reflects on the moments that have shaped her both on and beyond the stage and screen.
            </p>
            <ul className="space-y-3 mb-8 text-sm opacity-90">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                Personal Journey & Memoirs
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                Behind-the-scenes insights
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                Inspirational Storytelling
              </li>
            </ul>
            <Link href="/book" className="text-accent font-medium hover:underline inline-flex items-center gap-2">
              Read Her Story →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
