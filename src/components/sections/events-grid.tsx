"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, ExternalLink } from "lucide-react";

const events = [
  {
    title: "Star Wars Celebration",
    date: "July 12-14, 2026",
    location: "London, UK",
    type: "Convention",
    description: "Joining fellow cast members for panels and autograph sessions."
  },
  {
    title: "London Book Fair",
    date: "August 5, 2026",
    location: "Olympia London",
    type: "Book Signing",
    description: "Official signing for 'My Journey: From the Galaxy to the Page'."
  },
  {
    title: "Global Sci-Fi Expo",
    date: "September 20-22, 2026",
    location: "New York City, USA",
    type: "Convention",
    description: "Exclusive Q&A session about the Star Wars legacy and her author journey."
  }
];

export default function EventsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {events.map((event, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-background rounded-3xl border border-border p-8 hover:shadow-xl transition-all group"
        >
          <div className="flex justify-between items-start mb-6">
            <span className="bg-primary/10 text-primary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
              {event.type}
            </span>
          </div>
          <h3 className="text-2xl font-serif font-bold mb-4 group-hover:text-primary transition-colors">
            {event.title}
          </h3>
          <div className="space-y-3 mb-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-accent" />
              {event.date}
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-accent" />
              {event.location}
            </div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-8">
            {event.description}
          </p>
          <button className="w-full py-3 bg-muted hover:bg-primary hover:text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2">
            Get Tickets
            <ExternalLink size={16} />
          </button>
        </motion.div>
      ))}
    </div>
  );
}
