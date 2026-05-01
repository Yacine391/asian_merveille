import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Story from "@/components/Story";
import Features from "@/components/Features";
import Gallery from "@/components/Gallery";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Products />
      <Story />
      <Features />
      <Gallery />
      <CTA />
      <Footer />
    </main>
  );
}
