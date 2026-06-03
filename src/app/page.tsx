import HeroSection from "@/components/sections/hero-section";
import StatsBand from "@/components/sections/stats-band";
import DualIdentityIntro from "@/components/sections/dual-identity-intro";
import StarWarsSection from "@/components/sections/star-wars-section";
import InteractiveTimeline from "@/components/sections/interactive-timeline";
import SuccessStories from "@/components/sections/success-stories";
import ReviewsSection from "@/components/sections/reviews-section";
// import EventsPreview from "@/components/sections/events-preview";
// import NewsletterCta from "@/components/sections/newsletter-cta";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <StatsBand />
      <DualIdentityIntro />
      <StarWarsSection />
      <InteractiveTimeline />
      <SuccessStories />
      <ReviewsSection variant="full" />
      {/* <EventsPreview />
      <NewsletterCta /> */}
      <Footer />
    </main>
  );
}
