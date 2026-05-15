"use client";

import { motion } from "framer-motion";

export default function LegacyHero() {
  return (
    <section className="relative pt-40 pb-24 bg-black text-white overflow-hidden text-center">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent" />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl sm:text-7xl font-serif font-bold mb-6">A Cinematic Legacy</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto italic font-light">
            "Celebrating four decades of iconic performances, from the sands of Tatooine 
            to the West End stage."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
