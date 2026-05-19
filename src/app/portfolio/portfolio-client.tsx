"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2, Sparkles, Filter } from "lucide-react";
import { cn } from "@/lib/utils";

interface PortfolioImage {
  src: string;
  title: string;
  category: string;
}

interface PortfolioClientProps {
  initialImages: PortfolioImage[];
}

const CATEGORIES = [
  "All",
  "Star Wars",
  "Theatre & Dance",
  "Conventions & Fans",
  "Portraits & Press",
];

export default function PortfolioClient({ initialImages }: PortfolioClientProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter images based on selected tab
  const filteredImages = selectedCategory === "All"
    ? initialImages
    : initialImages.filter((img) => img.category === selectedCategory);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "Escape") {
        setLightboxIndex(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredImages]);

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => 
      prev === 0 ? filteredImages.length - 1 : (prev as number) - 1
    );
  };

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => 
      prev === filteredImages.length - 1 ? 0 : (prev as number) + 1
    );
  };

  return (
    <section className="py-12 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 text-primary text-xs font-bold tracking-widest uppercase mb-6"
          >
            <Sparkles size={12} className="text-accent animate-pulse" />
            Legacy Archive
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-serif font-bold mb-6 tracking-tight text-foreground"
          >
            The Official <span className="text-primary italic">Portfolio</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            Explore the visual chronicle of Femi Taylor's extraordinary career. From her iconic performance 
            as Oola in <em>Star Wars: Return of the Jedi</em> and Cats on stage and screen, to live events 
            and global conventions.
          </motion.p>
        </div>

        {/* Filter Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 pb-4 border-b border-border"
        >
          <div className="flex items-center gap-2 text-muted-foreground text-sm font-semibold">
            <Filter size={16} className="text-primary" />
            <span>Filter By:</span>
          </div>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => {
                  setSelectedCategory(category);
                  setLightboxIndex(null);
                }}
                className={cn(
                  "px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300",
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-105"
                    : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Image Grid */}
        {filteredImages.length === 0 ? (
          <div className="text-center py-20 bg-muted/20 rounded-3xl border border-dashed">
            <p className="text-muted-foreground text-lg">No images found in this category.</p>
          </div>
        ) : (
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  key={image.src}
                  className="group relative aspect-square rounded-3xl overflow-hidden bg-muted border border-border hover:shadow-2xl hover:shadow-primary/5 cursor-pointer"
                  onClick={() => setLightboxIndex(index)}
                >
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  
                  {/* Subtle Glass overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                    <span className="text-[10px] text-accent uppercase tracking-widest font-bold mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                      {image.category}
                    </span>
                    <h3 className="text-white text-base font-serif font-bold mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {image.title}
                    </h3>
                    <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 p-2.5 rounded-full text-white transform scale-75 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <Maximize2 size={16} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/98 flex flex-col justify-between py-6 px-4 md:px-12 select-none"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Top Toolbar */}
            <div className="flex justify-between items-center w-full max-w-7xl mx-auto z-10">
              <div className="text-white">
                <span className="text-xs uppercase tracking-widest text-accent font-bold">
                  {filteredImages[lightboxIndex].category}
                </span>
                <h4 className="text-sm font-serif font-semibold text-gray-300">
                  {filteredImages[lightboxIndex].title}
                </h4>
              </div>
              
              <button
                type="button"
                onClick={() => setLightboxIndex(null)}
                className="p-3 text-white hover:text-accent bg-white/5 hover:bg-white/10 rounded-full transition-all duration-300"
                aria-label="Close Lightbox"
              >
                <X size={24} />
              </button>
            </div>

            {/* Main Image Container */}
            <div className="relative flex-1 flex items-center justify-center w-full max-w-5xl mx-auto">
              
              {/* Prev Button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-0 md:-left-8 p-3 text-white hover:text-accent bg-white/5 hover:bg-white/10 rounded-full transition-all duration-300 z-10"
                aria-label="Previous Image"
              >
                <ChevronLeft size={28} />
              </button>

              {/* Central Image with Exit/Entry Animations */}
              <motion.div
                key={lightboxIndex}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-[65vh] md:h-[75vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={filteredImages[lightboxIndex].src}
                  alt={filteredImages[lightboxIndex].title}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </motion.div>

              {/* Next Button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-0 md:-right-8 p-3 text-white hover:text-accent bg-white/5 hover:bg-white/10 rounded-full transition-all duration-300 z-10"
                aria-label="Next Image"
              >
                <ChevronRight size={28} />
              </button>
            </div>

            {/* Bottom Status / Counter */}
            <div className="text-center text-xs text-gray-500 font-mono tracking-widest z-10">
              {lightboxIndex + 1} / {filteredImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
