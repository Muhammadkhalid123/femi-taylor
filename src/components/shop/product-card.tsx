"use client";

import Image from "next/image";
import { ShoppingCart, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useCart } from "@/context/cart-context";

interface ProductProps {
  id: string;
  name: string;
  price: string;
  image: string;
  category: string;
  badge?: string;
}

export default function ProductCard({ id, name, price, image, category, badge }: ProductProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id,
      name,
      price: parseFloat(price.replace("$", "")),
      image,
      quantity: 1,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-background rounded-3xl border border-border overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {badge && (
          <div className="absolute top-4 right-4 bg-accent text-accent-foreground text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
            {badge}
          </div>
        )}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <button 
            onClick={handleAddToCart}
            className="bg-white text-black px-6 py-3 rounded-full font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform"
          >
            <ShoppingCart size={18} />
            Quick Add
          </button>
        </div>
      </div>
      
      <div className="p-6">
        <span className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground mb-2 block">
          {category}
        </span>
        <h3 className="text-lg font-serif font-bold mb-2 group-hover:text-primary transition-colors">
          {name}
        </h3>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold">{price}</span>
          <div className="flex gap-0.5 text-accent">
            <Star size={12} fill="currentColor" />
            <Star size={12} fill="currentColor" />
            <Star size={12} fill="currentColor" />
            <Star size={12} fill="currentColor" />
            <Star size={12} fill="currentColor" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
