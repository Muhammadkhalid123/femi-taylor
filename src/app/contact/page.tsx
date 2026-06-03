import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import ContactHero from "@/components/sections/contact-hero";
import ContactDetails from "@/components/sections/contact-details";
import ContactFormSection from "@/components/sections/contact-form-section";
import ContactFaq from "@/components/sections/contact-faq";
import FanMoments from "@/components/sections/fan-moments";
import NewsletterCta from "@/components/sections/newsletter-cta";

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ContactHero />
      {/* <ContactDetails /> */}
      <ContactFormSection />
      <ContactFaq />
      {/* <FanMoments /> */}
      <NewsletterCta />
      <Footer />
    </main>
  );
}
