import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import AboutHero from "@/components/sections/about-hero";
import BioTabs from "@/components/sections/bio-tabs";
import AboutPhilosophy from "@/components/sections/about-philosophy";
import InteractiveTimeline from "@/components/sections/interactive-timeline";
import SuccessStories from "@/components/sections/success-stories";
import PageCta from "@/components/sections/page-cta";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
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
