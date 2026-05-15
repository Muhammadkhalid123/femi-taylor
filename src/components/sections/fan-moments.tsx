"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const moments = [
  {
    quote: "Meeting Femi at Celebration was a dream come true. Her warmth and grace are unforgettable.",
    author: "David K., Convention Attendee",
  },
  {
    quote: "Oola was my first favorite Star Wars character. Hearing Femi tell the story behind the role was magical.",
    author: "Elena R., Superfan",
  },
  {
    quote: "The Cats reunion panel brought tears to everyone's eyes. A true legend of the stage.",
    author: "Michael P., Theatre Lover",
  },
];

export default function FanMoments() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4">Fan Moments</h2>
          <p className="text-muted-foreground">Stories from the community that celebrates Femi&apos;s legacy.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {moments.map((moment, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-background rounded-3xl border border-border"
            >
              <Quote size={24} className="text-accent mb-4" />
              <p className="text-muted-foreground italic leading-relaxed mb-6">&ldquo;{moment.quote}&rdquo;</p>
              <footer className="text-sm font-bold">{moment.author}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
