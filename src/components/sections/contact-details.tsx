"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Clock } from "lucide-react";

const details = [
  { icon: Mail, title: "Email", lines: ["contact@femitaylor.com", "press@femitaylor.com"] },
  { icon: MapPin, title: "Representation", lines: ["London, United Kingdom", "Global Talent Management"] },
  { icon: Clock, title: "Response Time", lines: ["2–3 business days", "Media: 24–48 hours"] },
];

export default function ContactDetails() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {details.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-muted/50 border border-border text-center"
            >
              <item.icon size={28} className="text-primary mx-auto mb-4" />
              <h3 className="font-serif font-bold text-lg mb-3">{item.title}</h3>
              {item.lines.map((line) => (
                <p key={line} className="text-sm text-muted-foreground">
                  {line}
                </p>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
