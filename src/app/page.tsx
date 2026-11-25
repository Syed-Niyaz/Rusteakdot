import { SiteHeader } from "@/components/site-header";
import { MainHomeScrollingExperience } from "@/components/sofa-sequence/sofa-sequence";
import { ProductsEcommerceSection } from "@/components/products-ecommerce-section";
import { DeliveryJourneyBand } from "@/components/delivery-journey-band";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="w-full min-h-screen bg-[#faf9f6]">
        {/* Main 360° Scrolling Sofa Experience */}
        <MainHomeScrollingExperience />

        {/* Second Section: E-Commerce Bespoke Products Catalog */}
        <ProductsEcommerceSection />

        {/* Third Section: Animated White-Glove Delivery Journey */}
        <DeliveryJourneyBand />
      </main>

      <Footer />
    </>
  );
}
