// src/app/page.tsx

import NavBar from "@/components/home/NavBar";
import HeroSection from "@/components/home/HeroSection";
import MethodologySection from "@/components/home/MethodologySection";
import EducationalSection from "@/components/home/EducationalSection";
import Footer from "@/components/home/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F5F7F9] text-slate-800 font-sans selection:bg-blue-100">
      {/* 1. Sticky Navigation */}
      <NavBar />

      {/* 2. Main Hero with CTA */}
      <HeroSection />

      {/* 3. Dark Mode ML Pipeline Explanation */}
      <MethodologySection />

      {/* 4. White Clinical/Psychology Cards */}
      <EducationalSection />

      {/* 5. Trust Metric Footer */}
      <Footer />
    </div>
  );
}