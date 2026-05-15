"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Check } from "lucide-react";

export default function NewsletterCta() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <section className="py-24 bg-background border-t border-border">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex p-4 bg-primary/10 rounded-full text-primary mb-6">
            <Mail size={28} />
          </div>
          <h2 className="text-4xl font-serif font-bold mb-4">Stay in the Loop</h2>
          <p className="text-muted-foreground mb-8">
            Get updates on book releases, convention appearances, and exclusive behind-the-scenes content.
          </p>

          {subscribed ? (
            <div className="flex items-center justify-center gap-2 text-primary font-bold">
              <Check size={20} />
              You&apos;re on the list. Thank you!
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 px-5 py-4 rounded-full border border-border bg-muted/30 focus:ring-2 focus:ring-primary outline-none"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-primary text-white rounded-full font-bold hover:bg-primary/90 transition-all"
              >
                Subscribe
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
