"use client";

export default function BookingInquiry() {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-serif font-bold mb-6">Book Femi for Your Event</h2>
        <p className="text-xl text-primary-foreground/80 mb-10 font-light">
          Interested in having Femi Taylor speak at your conference, appear at your 
          convention, or host a book signing? We'd love to hear from you.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/contact?type=booking"
            className="px-10 py-5 bg-accent text-accent-foreground rounded-full font-bold hover:bg-accent/90 transition-all transform hover:scale-105"
          >
            Send Booking Inquiry
          </a>
          <a
            href="/press"
            className="px-10 py-5 bg-white/10 border border-white/20 rounded-full font-bold hover:bg-white/20 transition-all"
          >
            Download Press Kit
          </a>
        </div>
      </div>
    </section>
  );
}
