"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, BookOpen, Music } from "lucide-react";
import { cn } from "@/lib/utils";

const tabs = [
  {
    id: "performer",
    label: "The Performer",
    icon: Star,
    content: {
      title: "Stage & Screen Legacy",
      description: "Femi Taylor's career is marked by iconic roles and groundbreaking performances. From the original London cast of Cats to the iconic Oola in Star Wars, her artistry as a dancer and actress has left an indelible mark on popular culture.",
      highlights: [
        "Star Wars: Return of the Jedi (Oola)",
        "Cats (Original London Cast - Tantomile)",
        "Cats (1998 Film - Exotica)",
        "Trained at London School of Contemporary Dance",
        "The Alvin Ailey School (New York)",
      ]
    }
  },
  {
    id: "author",
    label: "The Author",
    icon: BookOpen,
    content: {
      title: "A New Chapter",
      description: "Transitioning from performer to author, Femi now uses the power of words to share her unique perspective. Her writing is a bridge between her extraordinary experiences and the universal themes of identity, resilience, and growth.",
      highlights: [
        "Personal Memoirs & Reflections",
        "Behind-the-scenes Storytelling",
        "Inspirational Speaker",
        "Creative Consultant",
        "Global Fan Engagement",
      ]
    }
  }
];

export default function BioTabs() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tab Buttons */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-background rounded-full border border-border">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all",
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <tab.icon size={16} />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            {tabs.map((tab) => (
              tab.id === activeTab && (
                <motion.div
                  key={tab.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="bg-background p-8 sm:p-12 rounded-3xl border border-border shadow-sm"
                >
                  <h3 className="text-3xl font-serif font-bold mb-6 text-primary">
                    {tab.content.title}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {tab.content.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {tab.content.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center gap-3 text-foreground font-medium">
                        <div className="w-2 h-2 rounded-full bg-accent" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
