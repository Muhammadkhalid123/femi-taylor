import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import LegacyHero from "@/components/sections/legacy-hero";
import StarWarsSection from "@/components/sections/star-wars-section";
import CatsSection from "@/components/sections/cats-section";
import FanMoments from "@/components/sections/fan-moments";
import PhotoGallery from "@/components/sections/photo-gallery";
import PageCta from "@/components/sections/page-cta";

export default function LegacyPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <LegacyHero />
      <StarWarsSection />
      <CatsSection />
      <FanMoments />
      <PhotoGallery />
      <PageCta
        title="Own a Piece of the Legacy"
        description="Signed books, exclusive prints, and memorabilia from four decades in the arts."
        primaryLabel="Visit the Shop"
        primaryHref="/shop"
        secondaryLabel="Get the Book"
        secondaryHref="/book"
        variant="accent"
      />
      <Footer />
    </main>
  );
}
