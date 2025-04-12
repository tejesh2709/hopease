"use client"
import { NavBar, HeroSection, Features, Footer } from "@/components";
export default function Home() {
  return (
    <div className="h-full">
      <NavBar />
      <HeroSection />
      <Features />
      <Footer />
    </div>
  );
}
