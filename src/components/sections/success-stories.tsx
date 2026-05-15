"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const stories = [
  {
    title: "The Surprise Audition",
    content: "Being cast in Star Wars at age 22 without knowing what she was auditioning for—a moment that changed her life forever."
  },
  {
    title: "Dual Mastery",
    content: "Performing in the original London cast of Cats while simultaneously filming Star Wars, showcasing incredible discipline and talent."
  },
  {
    title: "The Chosen One",
    content: "Being the only original performer recalled 14 years later for the Special Edition, a testament to her timeless talent."
  },
  {
    title: "A Character Created for Her",
    content: "Having the character 'Exotica' created specifically for her in the Cats film, an honor reserved for the most exceptional artists."
  }
];

export default function SuccessStories() {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4">Success Stories</h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto italic">
            "Highlights of a career built on passion, persistence, and pure artistry."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-6 p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all"
            >
              <div className="shrink-0 text-accent">
                <CheckCircle2 size={32} />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold mb-3">{story.title}</h3>
                <p className="text-primary-foreground/90 leading-relaxed font-light">
                  {story.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
