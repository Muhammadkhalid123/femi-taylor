"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Download, ArrowRight, ChevronDown, Mail } from "lucide-react";
import Link from "next/link";

const sampleText = `I still remember the first time I stepped onto that stage in London. The lights were blinding, the orchestra was swelling, and my heart was pounding so hard I thought everyone in the audience could hear it.

Growing up in Ibadan, Nigeria, I never imagined I would one day be part of a production that would change musical theatre forever. But dance was my language — my way of telling stories when words failed me.

That night, as Tantomile, I understood that performance is not about perfection. It is about presence. About letting the audience feel something true, even if only for a moment.`;

export default function SampleChapter() {
  const [isReading, setIsReading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 2000);
  };

  return (
    <div className="bg-muted/50 p-8 rounded-3xl border border-border sticky top-32">
      <div className="text-center mb-8">
        <div className="inline-flex p-4 bg-primary/10 rounded-full text-primary mb-4">
          <FileText size={32} />
        </div>
        <h3 className="text-2xl font-serif font-bold">Look Inside</h3>
        <p className="text-sm text-muted-foreground mt-2">
          Read the first chapter for free before you buy.
        </p>
      </div>

      <div className="space-y-4">
        <button
          type="button"
          onClick={() => setIsReading(!isReading)}
          className="w-full py-4 bg-background border border-border rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-muted transition-all"
        >
          <FileText size={18} />
          {isReading ? "Hide Chapter" : "Read Online"}
          <ChevronDown
            size={18}
            className={`transition-transform ${isReading ? "rotate-180" : ""}`}
          />
        </button>

        <AnimatePresence>
          {isReading && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="p-4 bg-background rounded-xl border border-border max-h-64 overflow-y-auto text-sm text-muted-foreground leading-relaxed italic whitespace-pre-line">
                {sampleText}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          type="button"
          onClick={handleDownload}
          className="w-full py-4 bg-background border border-border rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-muted transition-all"
        >
          <Download size={18} />
          {downloaded ? "Download started!" : "Download PDF"}
        </button>
      </div>

      <div className="mt-8 pt-8 border-t border-border">
        <p className="text-sm italic text-muted-foreground text-center mb-6">
          &ldquo;I wanted to share this part of my story because it&apos;s where everything began.
          The fear, the excitement, and the unknown.&rdquo;
        </p>
        <Link
          href="/contact?subject=Inquiry about ordering the book My Journey"
          className="w-full py-4 bg-primary text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all text-center"
        >
          <span>Inquire to Order</span>
          <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
}
