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
  const portfolioDir = path.join(process.cwd(), "public", "portfolio");
  let filenames: string[] = [];
  
  try {
    if (fs.existsSync(portfolioDir)) {
      filenames = fs.readdirSync(portfolioDir).filter((file) => 
        /\.(jpe?g|png|gif|webp)$/i.test(file)
      );
    }
  } catch (error) {
    console.error("Failed to read portfolio directory:", error);
  }

  // Map the local WhatsApp images into a beautiful curated array with titles/categories
  const images = filenames.map((filename, index) => {
    let category = "Legacy";
    let title = "";
    
    // Distribute categories and names programmatically based on index for a rich variety
    const itemNum = Math.floor(index / 4) + 1;
    if (index % 4 === 0) {
      category = "Star Wars";
      title = `Oola / Star Wars Legacy #${itemNum}`;
    } else if (index % 4 === 1) {
      category = "Theatre & Dance";
      title = `Cats / Stage Performance #${itemNum}`;
    } else if (index % 4 === 2) {
      category = "Conventions & Fans";
      title = `Fan Convention & Event #${itemNum}`;
    } else {
      category = "Portraits & Press";
      title = `Professional Portrait #${itemNum}`;
    }

    return {
      src: `/portfolio/${filename}`,
      title,
      category,
    };
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
