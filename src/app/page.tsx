import { BookingSection } from "@/sections/BookingSection";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { Pricing } from "@/sections/Pricing";
import { ProductShowcase } from "@/sections/ProductShowcase";
import { Testimonials } from "@/sections/Testimonials";
export default function Home() {
  return (
    <>
      <Header />
      <section id="customers">
        <Hero />
      </section>
      <LogoTicker />
      <section id="products">
        <ProductShowcase />
      </section>
      <section id="pricing">
        <Pricing />
      </section>
      {/* <Testimonials /> */}
      <section id="booking">
        <BookingSection />
      </section>
      <Footer />
    </>
  );
}
