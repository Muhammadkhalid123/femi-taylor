"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, MapPin, ArrowRight } from "lucide-react";

const events = [
  {
    date: "Jun 14, 2026",
    title: "Star Wars Celebration",
    location: "Anaheim, CA",
    type: "Convention",
  },
  {
    date: "Aug 2, 2026",
    title: "Book Signing & Q&A",
    location: "London, UK",
    type: "Literary",
  },
  {
    date: "Sep 20, 2026",
    title: "Cats Reunion Panel",
    location: "West End, London",
    type: "Theatre",
  },
];

export default function EventsPreview() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif font-bold mb-4">Upcoming Appearances</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Meet Femi at conventions, signings, and special events around the world.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {events.map((event, i) => (
            <motion.article
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-background rounded-3xl border border-border hover:border-primary/50 hover:shadow-lg transition-all"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-primary">{event.type}</span>
              <h3 className="text-xl font-serif font-bold mt-3 mb-4">{event.title}</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p className="flex items-center gap-2">
                  <Calendar size={16} className="text-accent" />
                  {event.date}
                </p>
                <p className="flex items-center gap-2">
                  <MapPin size={16} className="text-accent" />
                  {event.location}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-bold hover:bg-primary/90 transition-all"
          >
            View All Events
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
