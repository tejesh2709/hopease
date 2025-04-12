"use client"
import { NavBar, HeroSection, Features, TrySection, Footer } from "@/components";
export default function Home() {
  return (
    <div className="h-full">
      <NavBar />
      <HeroSection />
      <Features />
      <TrySection />
      <Footer />
    </div>
  );
}
