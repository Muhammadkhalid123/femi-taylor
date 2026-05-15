import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import EventsHero from "@/components/sections/events-hero";
import EventTypes from "@/components/sections/event-types";
import EventsGrid from "@/components/sections/events-grid";
import PastEvents from "@/components/sections/past-events";
import BookingInquiry from "@/components/sections/booking-inquiry";
import PageCta from "@/components/sections/page-cta";

export default function EventsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <EventsHero />
      <EventTypes />
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <EventsGrid />
        </div>
      </section>
      <PastEvents />
      <BookingInquiry />
      <PageCta
        title="Can't Make an Event?"
        description="Subscribe for updates on new appearances, virtual Q&As, and exclusive online sessions."
        primaryLabel="Stay Updated"
        primaryHref="/contact"
        secondaryLabel="Contact for Booking"
        secondaryHref="/contact"
      />
      <Footer />
    </main>
  );
}
