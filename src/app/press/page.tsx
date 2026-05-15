import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import PressHero from "@/components/sections/press-hero";
import BioVersions from "@/components/sections/bio-versions";
import MediaCoverage from "@/components/sections/media-coverage";
import PressQuotes from "@/components/sections/press-quotes";
import PressKitDownloads from "@/components/sections/press-kit-downloads";
import PageCta from "@/components/sections/page-cta";

export default function PressPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PressHero />
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BioVersions />
        </div>
      </section>
      <MediaCoverage />
      <PressQuotes />
      <section className="py-24 bg-muted/30">
        <div className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8">
          <PressKitDownloads />
        </div>
      </section>
      <PageCta
        title="Media Inquiries Welcome"
        description="Interview requests, press kits, and high-resolution assets available for accredited media."
        primaryLabel="Contact Media Team"
        primaryHref="/contact"
        secondaryLabel="Download Press Kit"
        secondaryHref="/press"
      />
      <Footer />
    </main>
  );
}
