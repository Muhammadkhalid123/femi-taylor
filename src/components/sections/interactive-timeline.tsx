"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

const timelineData = [
  {
    year: "1963",
    title: "A New Beginning",
    description: "Following her adoption, Femi began a new chapter of life in England, carrying with her roots that would remain part of her story forever."
  },
  {
    year: "1965",
    title: "Discovering Dance",
    description: "After attending her first dance class, Femi found something she instinctively knew she loved. It was the beginning of a lifelong passion."
  },
  {
    year: "1976",
    title: "London School of Contemporary Dance",
    description: "Awarded a place at one of Britain’s leading dance institutions, beginning professional training that would shape her future career."
  },
  {
    year: "1977",
    title: "Bubbling Brown Sugar",
    description: "Cast in her first major West End production. Beyond the discipline of professional theatre, the show celebrated Black culture, confidence, and identity, and marked the beginning of Femi feeling truly beautiful in her own skin."
  },
  {
    year: "1978",
    title: "The Apple",
    description: "Appeared as a dancer in the cult musical film The Apple, adding screen experience to her growing stage career."
  },
  {
    year: "1979",
    title: "Training in New York",
    description: "Travelled to New York to study at The Alvin Ailey School, immersing herself in one of the world’s most influential centres of dance training."
  },
  {
    year: "1979",
    title: "The Wiz",
    description: "Performed in The Wiz at Sheffield’s Crucible Theatre, further expanding her theatrical experience and versatility as a performer."
  },
  {
    year: "1981",
    title: "Cats (London)",
    description: "Joined the original London cast of Andrew Lloyd Webber’s Cats, originating the role of Tantomile in a production that would become one of the most successful musicals of all time."
  },
  {
    year: "1982",
    title: "Valmouth",
    description: "Appeared in Valmouth at Chichester Festival Theatre, continuing to build a diverse and respected theatre career."
  },
  {
    year: "1983",
    title: "Returning to Nigeria",
    description: "Returned to Nigeria to meet her biological father and four siblings, reconnecting with a part of her identity she had never known."
  },
  {
    year: "1983",
    title: "A Place of Her Own",
    description: "Purchased her first apartment, marking an important step towards independence and self-reliance."
  },
  {
    year: "1987",
    title: "A New Chapter in Australia",
    description: "After leaving a difficult period behind, Femi relocated to Australia and joined the Melbourne production of Cats"
  },
  {
    year: "1989",
    title: "Australian Film Work",
    description: "Expanded her screen career in Australia, appearing in the films Flirting and A Kink in the Picasso."
  },
  {
    year: "1990",
    title: "Buddy",
    description: "Toured Australia in Buddy, continuing to build a successful theatre career abroad."
  },
  {
    year: "1993",
    title: "Returning Home",
    description: "Returned to the United Kingdom after six years living and working in Australia."
  },
  {
    year: "1995",
    title: "Return to Star Wars",
    description: "Invited back by George Lucas to reprise the role of Oola, becoming the only original performer to film new scenes for the Special Edition."
  },
  {
    year: "1996",
    title: "Jesus Christ Superstar",
    description: "Appeared in Jesus Christ Superstar, marking the culmination of an extraordinary chapter in West End theatre."
  },
  {
    year: "2000 & 2002",
    title: "Motherhood",
    description: "The birth of my two sons."
  },
  {
    year: "2007",
    title: "A New Creative Direction",
    description: "Graduated from KLC School of Design, earning a diploma in Interior Design and beginning a new creative chapter."
  },
  {
    year: "2016",
    title: "Zambezi Designs",
    description: "Founded Zambezi Designs, combining creativity, vision, and independence."
  },
  {
    year: "Present",
    title: "The Writer’s Journey",
    description: "Drawing together a lifetime of experiences, Femi now shares her story through writing, reflection, and memoir."
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
