"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80" // Placeholder for a cinematic stage/theatre image
          alt="Femi Taylor Hero"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-accent font-medium tracking-[0.2em] mb-4 text-sm sm:text-base">
            STAR WARS ICON | CATS ORIGINAL CAST | AUTHOR
          </h2>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-serif font-bold mb-6 leading-tight">
            FEMI TAYLOR
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light italic">
            "From Mud Huts to Star Wars and Beyond"
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/book"
              className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-full font-medium transition-all transform hover:scale-105"
            >
              Order the Book Now
            </Link>
            <Link
              href="/legacy"
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 rounded-full font-medium transition-all"
            >
              Explore Her Legacy
            </Link>
          </div>
        </motion.div>
      </div>

      <button
        type="button"
        onClick={scrollToContent}
        aria-label="Scroll to content"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 group"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-widest text-accent/80 opacity-0 group-hover:opacity-100 transition-opacity">
            Explore
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-accent to-transparent" />
        </motion.div>
      </button>
    </section>
  );
}
