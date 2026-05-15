"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ShoppingCart, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/context/cart-context";
import { cn } from "@/lib/utils";

const formats = [
  { id: "hardcover", label: "Hardcover", price: 24.99 },
  { id: "paperback", label: "Paperback", price: 14.99 },
  { id: "ebook", label: "E-Book", price: 9.99 },
] as const;

export default function FeaturedBook() {
  const { addToCart } = useCart();
  const [selected, setSelected] = useState<(typeof formats)[number]>(formats[0]);

  const handleAddToCart = () => {
    addToCart({
      id: `featured-book-${selected.id}`,
      name: `My Journey (${selected.label})`,
      price: selected.price,
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80",
      quantity: 1,
    });
  };

  return (
    <section className="py-24 bg-muted/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative w-full max-w-sm aspect-[2/3] group"
          >
            <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full scale-110 opacity-50 group-hover:opacity-80 transition-opacity" />
            <div className="relative w-full h-full shadow-[20px_20px_60px_-15px_rgba(0,0,0,0.3)] rounded-lg overflow-hidden border-8 border-white dark:border-gray-800">
              <Image
                src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80"
                alt="Femi Taylor Book Cover"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground font-bold px-4 py-2 rounded-full shadow-lg transform rotate-12">
              Signed Copies Available
            </div>
          </motion.div>

          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">
                Latest Release
              </h3>
              <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-6">
                My Journey: From the Galaxy to the Page
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Discover the untold stories of a dancer, actress, and survivor.
                Femi Taylor shares her remarkable path from Nigeria to the world of Star Wars
                and beyond, offering an intimate look at a life of resilience and art.
              </p>

              <div className="grid grid-cols-3 gap-3 mb-10">
                {formats.map((format) => (
                  <button
                    key={format.id}
                    type="button"
                    onClick={() => setSelected(format)}
                    className={cn(
                      "p-4 rounded-2xl border text-center transition-all",
                      selected.id === format.id
                        ? "border-primary bg-primary/10 shadow-md scale-105"
                        : "border-border hover:border-primary/50"
                    )}
                  >
                    <span className="block text-xl font-bold text-foreground">
                      ${format.price.toFixed(2)}
                    </span>
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">
                      {format.label}
                    </span>
                  </button>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-full font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
                >
                  <ShoppingCart size={20} />
                  Order {selected.label}
                </button>
                <Link
                  href="/book"
                  className="w-full sm:w-auto px-8 py-4 bg-transparent border border-primary text-primary rounded-full font-bold flex items-center justify-center gap-2 hover:bg-primary/5 transition-all"
                >
                  Read Sample Chapter
                  <ArrowRight size={20} />
                </Link>
              </div>

              <p className="mt-8 text-sm text-muted-foreground">
                Also available on:
                <span className="font-medium ml-2 text-foreground underline decoration-accent cursor-pointer">Amazon</span>,
                <span className="font-medium ml-2 text-foreground underline decoration-accent cursor-pointer">Barnes & Noble</span>
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
