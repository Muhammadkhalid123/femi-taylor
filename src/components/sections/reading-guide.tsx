"use client";

import { motion } from "framer-motion";
import { BookMarked, Clock, Users } from "lucide-react";

const details = [
  { icon: BookMarked, label: "Pages", value: "312" },
  { icon: Clock, label: "Reading Time", value: "~6 hours" },
  { icon: Users, label: "Perfect For", value: "Fans & dreamers" },
];

export default function ReadingGuide() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif font-bold mb-4">Reading Guide</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know before diving into Femi&apos;s memoir.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {details.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-background rounded-3xl border border-border text-center"
            >
              <item.icon size={32} className="text-primary mx-auto mb-4" />
              <span className="block text-3xl font-bold mb-1">{item.value}</span>
              <span className="text-sm text-muted-foreground uppercase tracking-wider">{item.label}</span>
            </motion.div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto p-8 bg-background rounded-3xl border border-border">
          <h3 className="font-serif font-bold text-xl mb-4">What You&apos;ll Discover</h3>
          <ul className="space-y-3 text-muted-foreground">
            <li>• Behind-the-scenes stories from Star Wars and Cats</li>
            <li>• The journey from Ibadan, Nigeria to international stardom</li>
            <li>• Lessons on resilience, artistry, and reinvention</li>
            <li>• Never-before-shared photographs and personal reflections</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
