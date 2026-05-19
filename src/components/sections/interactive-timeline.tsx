"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

const timelineData = [
  {
    year: "1961",
    title: "Roots in Nigeria",
    description: "Born in Ibadan, Nigeria, setting the stage for a global journey of cultural discovery and resilience."
  },
  {
    year: "1981",
    title: "Cats (London)",
    description: "Originated the legendary role of Tantomile in the original West End cast of Cats, changing musical theatre history forever."
  },
  {
    year: "1983",
    title: "Star Wars Icon",
    description: "Cast as the iconic Twi'lek dancer Oola in 'Return of the Jedi', etching her name into cinematic science-fiction history."
  },
  {
    year: "1997",
    title: "The Special Edition",
    description: "Recalled to the set by George Lucas to reprise her iconic role, being the only original performer to film new scenes for the Special Edition."
  },
  {
    year: "1998",
    title: "Cats Film",
    description: "Invited by Andrew Lloyd Webber to create and perform the brand-new character 'Exotica' specifically for the Cats cinematic release."
  },
  {
    year: "Present",
    title: "The Author's Journey",
    description: "Connecting with fans globally, speaking at international conventions, and sharing her deep artistic legacy through writing and memoirs."
  }
];

export default function InteractiveTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress through this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Smooth out the progress indicator line
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-4 tracking-tight">
            Milestones of a Lifetime
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            Scroll down to walk through Femi Taylor's extraordinary legacy on stage, screen, and page.
          </p>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mt-6" />
        </div>

        {/* Timeline body */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Static Track Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-muted -translate-x-1/2" />
          
          {/* Active Scrolling Progress Line */}
          <motion.div
            style={{ scaleY }}
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-primary origin-top -translate-x-1/2 shadow-[0_0_8px_rgba(147,51,234,0.5)]"
          />

          <div className="space-y-16">
            {timelineData.map((item, index) => (
              <div
                key={item.year}
                className="relative flex flex-col md:flex-row items-start md:items-center justify-between pl-16 md:pl-0"
              >
                
                {/* Content Card (Left-side on desktop for even indices, right-side for odd) */}
                <div
                  className={cn(
                    "w-full md:w-[calc(50%-3rem)]",
                    index % 2 === 0 ? "md:mr-auto text-left md:text-right" : "md:ml-auto text-left"
                  )}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 40, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                    className={cn(
                      "bg-muted/30 hover:bg-muted/50 border border-border/80 p-6 sm:p-8 rounded-3xl transition-all hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/20 flex flex-col group",
                      index % 2 === 0 ? "md:items-end" : "md:items-start"
                    )}
                  >
                    <span className="text-accent font-bold text-3xl mb-2 tracking-wide block group-hover:scale-105 transition-transform duration-300">
                      {item.year}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                      {item.description}
                    </p>
                  </motion.div>
                </div>

                {/* Pulsing circle node */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-8 md:top-auto flex items-center justify-center z-10">
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1.2, opacity: 1 }}
                    viewport={{ once: false, margin: "-120px" }}
                    transition={{ type: "spring", stiffness: 150 }}
                    className="w-6 h-6 rounded-full bg-background border-4 border-primary flex items-center justify-center shadow-lg cursor-pointer"
                  >
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  </motion.div>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
