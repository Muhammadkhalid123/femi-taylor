"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Truck, Award } from "lucide-react";

const benefits = [
  { icon: Award, title: "Authenticity Guaranteed", text: "Every signed item is personally autographed by Femi Taylor." },
  { icon: Truck, title: "Worldwide Shipping", text: "Secure delivery to fans across the globe with tracked parcels." },
  { icon: ShieldCheck, title: "Secure Checkout", text: "SSL-encrypted payments and buyer protection on every order." },
];

export default function ShopBenefits() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-8"
            >
              <b.icon size={32} className="text-primary mx-auto mb-4" />
              <h3 className="font-serif font-bold text-lg mb-2">{b.title}</h3>
              <p className="text-sm text-muted-foreground">{b.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
