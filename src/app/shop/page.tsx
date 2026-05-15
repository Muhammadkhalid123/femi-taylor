import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import ShopHero from "@/components/shop/shop-hero";
import MerchCategories from "@/components/sections/merch-categories";
import ProductGrid from "@/components/shop/product-grid";
import ShopBenefits from "@/components/sections/shop-benefits";
import ShippingInfo from "@/components/sections/shipping-info";
import PageCta from "@/components/sections/page-cta";

export default function ShopPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ShopHero />
      <MerchCategories />
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProductGrid />
        </div>
      </section>
      <ShopBenefits />
      <ShippingInfo />
      <PageCta
        title="Limited Signed Editions"
        description="Don't miss exclusive signed books and convention-only bundles."
        primaryLabel="View Cart"
        primaryHref="/cart"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
        variant="accent"
      />
      <Footer />
    </main>
  );
}
