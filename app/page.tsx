"use client";

import { useEffect } from "react";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import StatsSection from "@/components/stats-section";
import GallerySection from "@/components/gallery-section";
import Footer from "@/components/footer";

export default function Home() {
  useEffect(() => {
    // Preload any assets or initialize animations here
  }, []);

  return (
    <main className="relative min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <GallerySection />
      <Footer />
    </main>
  );
}
