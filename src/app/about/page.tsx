import type { Metadata } from "next";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Breadcrumbs from "@/components/layout/breadcrumbs";
import AboutHero from "@/components/sections/about-hero";
import BioTabs from "@/components/sections/bio-tabs";
import AboutPhilosophy from "@/components/sections/about-philosophy";
import InteractiveTimeline from "@/components/sections/interactive-timeline";
import SuccessStories from "@/components/sections/success-stories";
import PageCta from "@/components/sections/page-cta";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "About Femi Taylor | Biography & Career",
  description:
    "Explore Femi Taylor's journey from Ibadan, Nigeria to Star Wars and Cats. Biography, milestones, and the story behind the performer and author.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About" }]} />
      <AboutHero />
      <BioTabs />
      <AboutPhilosophy />
      <InteractiveTimeline />
      <SuccessStories />
      <PageCta
        title="Discover the Full Story"
        description="From Star Wars to Cats to the written page — explore every chapter of Femi's remarkable journey."
        primaryLabel="Read the Book"
        primaryHref="/book"
        secondaryLabel="View Legacy"
        secondaryHref="/legacy"
        variant="accent"
      />
      <Footer />
    </main>
  );
}
