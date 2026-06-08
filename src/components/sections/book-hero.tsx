"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Check } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const formats = [
  { id: "hardcover", label: "Hardcover", price: "$24.99" },
  { id: "paperback", label: "Paperback", price: "$14.99" },
  { id: "ebook", label: "E-Book", price: "$9.99" },
];

export default function BookHero() {
  const [selectedFormat, setSelectedFormat] = useState("hardcover");
  const selectedLabel = formats.find((f) => f.id === selectedFormat)?.label || "Hardcover";

  return (
    <section className="relative pt-32 pb-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Book Cover */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative"
          >
            <div className="relative w-full max-w-md aspect-[2/3] mx-auto shadow-[30px_30px_60px_-15px_rgba(0,0,0,0.4)] rounded-lg overflow-hidden border-4 border-white dark:border-gray-800">
              <Image
                src="/femi-book.jpeg"
                alt="From Mud Hut to Star Wars and Beyond Book Cover"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Book Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-6xl font-serif font-bold mb-4 leading-tight text-foreground">
              From Mud Hut to <span className="italic">Star Wars</span> and Beyond
            </h1>
            <p className="text-2xl text-primary font-medium mb-8 italic">
              The untold story of a Star Wars icon discovering her voice before and beyond the spotlight..
            </p>

            <div className="space-y-6 mb-10">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Discover the memoir of Femi Taylor, a deeply personal journey of art, identity, resilience, and self-discovery. From her roots in Nigeria to a life on stage, screen, and beyond, Femi shares the experiences that shaped the woman behind the story.
              </p>

              {/* Format Selector */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {formats.map((format) => (
                  <button
                    key={format.id}
                    onClick={() => setSelectedFormat(format.id)}
                    className={`p-4 rounded-2xl border-2 transition-all flex flex-col items-center gap-1 ${selectedFormat === format.id
                      ? "border-primary bg-primary/5 shadow-md"
                      : "border-border hover:border-primary/50"
                      }`}
                  >
                    <span className="text-xs uppercase tracking-widest font-bold opacity-60">
                      {format.label}
                    </span>
                    <span className="text-xl font-bold">{format.price}</span>
                    {selectedFormat === format.id && (
                      <Check size={16} className="text-primary mt-1" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link
                href={`/contact?subject=Inquiry about ordering ${selectedLabel} edition of From Mud Hut to Star Wars and Beyond`}
                className="w-full sm:w-auto px-10 py-5 bg-primary text-white rounded-full font-bold flex items-center justify-center gap-3 hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 transform hover:-translate-y-1"
              >
                <Mail size={20} />
                Inquire to Buy
              </Link>
              <Link
                href="/contact?subject=Inquiry about Signed Edition of From Mud Hut to Star Wars and Beyond"
                className="w-full sm:w-auto px-10 py-5 bg-accent text-accent-foreground rounded-full font-bold flex items-center justify-center gap-3 hover:bg-accent/90 transition-all transform hover:-translate-y-1"
              >
                <Mail size={20} />
                Get Signed Edition
              </Link>
            </div>

            <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-sm text-muted-foreground font-medium">
              <span className="flex items-center gap-1">
                <Check size={16} className="text-green-500" /> Secure Checkout
              </span>
              <span className="flex items-center gap-1">
                <Check size={16} className="text-green-500" /> Fast Shipping
              </span>
              <span className="flex items-center gap-1">
                <Check size={16} className="text-green-500" /> 100% Secure
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
