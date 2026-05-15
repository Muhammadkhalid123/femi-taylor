"use client";

import { useState } from "react";
import { Download, Archive, FileText, Image as ImageIcon, Check } from "lucide-react";

export default function PressKitDownloads() {
  const [downloaded, setDownloaded] = useState<string | null>(null);

  const handleDownload = (name: string) => {
    setDownloaded(name);
    setTimeout(() => setDownloaded(null), 2000);
  };

  const downloads = [
    { name: "Full Press Kit", icon: Archive, size: "24 MB" },
    { name: "High-Res Photos", icon: ImageIcon, size: "15 MB" },
    { name: "Official Biography", icon: FileText, size: "1.2 MB" },
    { name: "Book Excerpt", icon: FileText, size: "0.8 MB" },
  ];

  return (
    <div className="bg-background p-8 rounded-3xl border border-border shadow-sm sticky top-32">
      <h3 className="text-xl font-serif font-bold mb-6">Downloads</h3>
      <div className="space-y-4">
        {downloads.map((item, index) => (
          <button
            key={index}
            type="button"
            onClick={() => handleDownload(item.name)}
            className="w-full flex items-center justify-between p-4 bg-muted/50 hover:bg-muted rounded-xl transition-all group"
          >
            <div className="flex items-center gap-3">
              <item.icon size={20} className="text-primary" />
              <div className="text-left">
                <p className="text-sm font-bold group-hover:text-primary transition-colors">{item.name}</p>
                <p className="text-[10px] text-muted-foreground uppercase">{item.size}</p>
              </div>
            </div>
            {downloaded === item.name ? (
              <Check size={18} className="text-primary" />
            ) : (
              <Download size={18} className="text-muted-foreground group-hover:text-primary" />
            )}
          </button>
        ))}
      </div>

      <div className="mt-10 p-6 bg-primary/5 rounded-2xl border border-primary/10">
        <h4 className="text-sm font-bold mb-2">Interview Requests</h4>
        <p className="text-xs text-muted-foreground mb-4">
          For all media inquiries and interview requests, please use our official contact form.
        </p>
        <a
          href="/contact?type=media"
          className="text-primary text-sm font-bold hover:underline"
        >
          Contact Media Team →
        </a>
      </div>
    </div>
  );
}
