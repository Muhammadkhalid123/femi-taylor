import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Link from "next/link";
import { ArrowRight, ShoppingBag, Mail } from "lucide-react";

export default function CartPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-40 pb-20 text-center">
        <div className="max-w-xl mx-auto px-6">
          <div className="inline-flex p-6 bg-primary/5 rounded-full text-primary mb-6">
            <ShoppingBag size={48} className="text-accent" />
          </div>
          
          <h1 className="text-4xl font-serif font-bold mb-4">Direct Order Inquiries</h1>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            We have transitioned from standard online cart checkout to a direct inquiry system. 
            This allows us to personalize every order, manage signed memorabilia requests, 
            and coordinate international shipping preferences directly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
            >
              <Mail size={18} />
              Submit Order Inquiry
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-muted text-muted-foreground rounded-full font-bold hover:bg-muted/80 transition-all"
            >
              Explore Portfolio
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
