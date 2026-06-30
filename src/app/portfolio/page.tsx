import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Breadcrumbs from "@/components/layout/breadcrumbs";
import PageCta from "@/components/sections/page-cta";
import { createPageMetadata } from "@/lib/metadata";
import PortfolioClient from "./portfolio-client";

export const metadata: Metadata = createPageMetadata({
  title: "Official Portfolio | Femi Taylor",
  description: "Exquisite visual collection of Femi Taylor's iconic roles: Star Wars' Oola, Cats' Exotica, dance legacy, and fan convention moments.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  const categories = [
    { folder: "star-wars", label: "Star Wars", titlePrefix: "Oola / Star Wars Legacy" },
    { folder: "theatre-dance", label: "Theatre & Dance", titlePrefix: "Cats / Stage Performance" },
    { folder: "conventions-fans", label: "Conventions & Fans", titlePrefix: "Fan Convention & Event" },
    { folder: "portraits-press", label: "Portraits & Press", titlePrefix: "Professional Portrait" }
  ];

  const images: Array<{ src: string; title: string; category: string }> = [];

  categories.forEach((cat) => {
    const dirPath = path.join(process.cwd(), "public", "portfolio", cat.folder);
    try {
      if (fs.existsSync(dirPath)) {
        const files = fs.readdirSync(dirPath)
          .filter((file) => /\.(jpe?g|png|gif|webp)$/i.test(file))
          .sort((a, b) => {
            const numA = parseInt(a.replace(/\D/g, ""), 10) || 0;
            const numB = parseInt(b.replace(/\D/g, ""), 10) || 0;
            return numA - numB;
          });
        
        files.forEach((file) => {
          const num = parseInt(file.replace(/\D/g, ""), 10) || 1;
          images.push({
            src: `/portfolio/${cat.folder}/${file}`,
            title: `${cat.titlePrefix} #${num}`,
            category: cat.label,
          });
        });
      }
    } catch (error) {
      console.error(`Failed to read portfolio directory ${cat.folder}:`, error);
    }
  });

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Portfolio" }]} />
      
      <PortfolioClient initialImages={images} />
      
      <PageCta
        title="Bring the Legacy Home"
        description="Looking for signed memorabilia, convention appearances, or acting bookings?"
        primaryLabel="Inquire for Bookings"
        primaryHref="/contact"
        secondaryLabel="Explore the Book"
        secondaryHref="/book"
        variant="accent"
      />
      <Footer />
    </main>
  );
}
