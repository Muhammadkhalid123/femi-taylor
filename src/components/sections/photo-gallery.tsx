"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  { src: "/portfolio/WhatsApp Image 2026-05-14 at 9.41.37 PM.jpeg", caption: "Professional Portrait" },
  { src: "/portfolio/WhatsApp Image 2026-05-16 at 2.17.36 PM.jpeg", caption: "Oola / Star Wars Legacy" },
  { src: "/portfolio/catts.png", caption: "Cats / Stage Performance" },
  { src: "/portfolio/WhatsApp Image 2026-05-14 at 9.41.39 PM.jpeg", caption: "Behind the Curtain" },
  { src: "/portfolio/WhatsApp Image 2026-05-14 at 9.41.41 PM.jpeg", caption: "Fan Conventions" },
  { src: "/portfolio/WhatsApp Image 2026-05-14 at 9.42.47 PM.jpeg", caption: "Legacy Moments" },
];

export default function PhotoGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const goPrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + images.length) % images.length);
  };

  const goNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % images.length);
  };

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4">Gallery</h2>
          <p className="text-muted-foreground">Click any photo to view full size</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
          {images.map((image, index) => (
            <motion.button
              key={index}
              type="button"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setLightboxIndex(index)}
              className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer text-left"
            >
              <Image
                src={image.src}
                alt={image.caption}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-white text-sm font-bold">{image.caption}</span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setLightboxIndex(null)}
          >
            <button
              type="button"
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 p-2 text-white hover:text-accent transition-colors z-10"
              aria-label="Close gallery"
            >
              <X size={32} />
            </button>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-4 p-3 text-white hover:bg-white/10 rounded-full transition-colors z-10"
              aria-label="Previous image"
            >
              <ChevronLeft size={32} />
            </button>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-4 p-3 text-white hover:bg-white/10 rounded-full transition-colors z-10"
              aria-label="Next image"
            >
              <ChevronRight size={32} />
            </button>
            <motion.div
              key={lightboxIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl aspect-[4/3]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[lightboxIndex].src}
                alt={images[lightboxIndex].caption}
                fill
                className="object-contain"
              />
              <p className="absolute bottom-0 left-0 right-0 text-center text-white py-4 bg-gradient-to-t from-black/80">
                {images[lightboxIndex].caption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
