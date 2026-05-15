"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, X } from "lucide-react";
import Link from "next/link";

interface CartToastProps {
  message: string | null;
  onDismiss: () => void;
}

export default function CartToast({ message, onDismiss }: CartToastProps) {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: "-50%" }}
          animate={{ opacity: 1, y: 0, x: "-50%" }}
          exit={{ opacity: 0, y: 20, x: "-50%" }}
          className="fixed bottom-6 left-1/2 z-[100] flex items-center gap-4 px-6 py-4 bg-foreground text-background rounded-full shadow-2xl"
        >
          <ShoppingCart size={18} className="text-accent" />
          <span className="text-sm font-medium">{message}</span>
          <Link
            href="/cart"
            onClick={onDismiss}
            className="text-xs font-bold text-accent hover:underline"
          >
            View cart
          </Link>
          <button
            type="button"
            onClick={onDismiss}
            className="p-1 hover:opacity-70 transition-opacity"
            aria-label="Dismiss"
          >
            <X size={16} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
