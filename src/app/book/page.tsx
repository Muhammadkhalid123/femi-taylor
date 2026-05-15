import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import BookHero from "@/components/sections/book-hero";
import BookDetailsSection from "@/components/sections/book-details-section";
import ReadingGuide from "@/components/sections/reading-guide";
import AuthorNoteSection from "@/components/sections/author-note-section";
import ReviewsSection from "@/components/sections/reviews-section";
import SampleChapterSection from "@/components/sections/sample-chapter-section";
import PageCta from "@/components/sections/page-cta";

export default function BookPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <BookHero />
      <BookDetailsSection />
      <ReadingGuide />
      <AuthorNoteSection />
      <ReviewsSection variant="full" />
      <SampleChapterSection />
      <PageCta
        title="Ready to Begin the Journey?"
        description="Order your copy today — signed editions available while supplies last."
        primaryLabel="Order Now"
        primaryHref="/shop"
        secondaryLabel="Browse Shop"
        secondaryHref="/shop"
      />
      <Footer />
    </main>
  );
}
