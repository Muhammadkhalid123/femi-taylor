import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import BookHero from "@/components/sections/book-hero";
import BookDetailsSection from "@/components/sections/book-details-section";
import ReadingGuide from "@/components/sections/reading-guide";
import AuthorNoteSection from "@/components/sections/author-note-section";
import ReviewsSection from "@/components/sections/reviews-section";
import SampleChapterSection from "@/components/sections/sample-chapter-section";
import PageCta from "@/components/sections/page-cta";
import { BOOK_LINKS } from "@/lib/book-links";

export default function BookPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <BookHero />
      <BookDetailsSection />
      <ReadingGuide />
      <AuthorNoteSection />
      <ReviewsSection variant="full" />
      {/* <SampleChapterSection /> */}
      <PageCta
        title="Ready to Begin the Journey?"
        description="Order your copy today on Amazon or submit an inquiry for signed editions."
        primaryLabel="Buy on Amazon"
        primaryHref={BOOK_LINKS.main}
        secondaryLabel="Inquire for Signed Edition"
        secondaryHref="/contact?subject=Inquiry about Signed Edition of From Mud Huts to Star Wars and Beyond"
      />
      <Footer />
    </main>
  );
}
