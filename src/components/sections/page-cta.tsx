"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface PageCtaProps {
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  variant?: "default" | "accent";
}

export default function PageCta({
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  variant = "default",
}: PageCtaProps) {
  const isAccent = variant === "accent";

  return (
    <section
      className={
        isAccent
          ? "py-24 bg-primary text-primary-foreground"
          : "py-24 bg-muted/30"
      }
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-serif font-bold mb-4">{title}</h2>
          <p
            className={
              isAccent ? "text-primary-foreground/80 mb-10" : "text-muted-foreground mb-10"
            }
          >
            {description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={primaryHref}
              className={
                isAccent
                  ? "px-8 py-4 bg-accent text-accent-foreground rounded-full font-bold hover:opacity-90 transition-all flex items-center gap-2"
                  : "px-8 py-4 bg-primary text-white rounded-full font-bold hover:bg-primary/90 transition-all flex items-center gap-2"
              }
            >
              {primaryLabel}
              <ArrowRight size={18} />
            </Link>
            {secondaryLabel && secondaryHref && (
              <Link
                href={secondaryHref}
                className={
                  isAccent
                    ? "px-8 py-4 border border-white/30 rounded-full font-bold hover:bg-white/10 transition-all"
                    : "px-8 py-4 border border-primary text-primary rounded-full font-bold hover:bg-primary/5 transition-all"
                }
              >
                {secondaryLabel}
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
