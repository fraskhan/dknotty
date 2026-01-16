import { Metadata } from "next";
import {
  Header,
  Hero,
  About,
  Products,
  Contact,
  Reviews,
  Footer,
} from "@/components/sections";

export const metadata: Metadata = {
  title: "D' Knotty Cottons | Handmade Crochet Shop - Zamboanga City",
  description:
    "Discover unique handmade crochet creations from Zamboanga City. Custom orders welcome! Crafted with love, just for you.",
  keywords: [
    "crochet",
    "handmade",
    "Zamboanga City",
    "custom orders",
    "yarn crafts",
    "D' Knotty Cottons",
  ],
  openGraph: {
    title: "D' Knotty Cottons | Handmade Crochet Shop",
    description:
      "Discover unique handmade crochet creations from Zamboanga City. Custom orders welcome!",
    type: "website",
    locale: "en_PH",
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Products />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
