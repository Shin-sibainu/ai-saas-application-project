"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero";
import { FeaturesSection } from "@/components/sections/features";
import { UseCasesSection } from "@/components/sections/use-cases";
import { PricingSection } from "@/components/sections/pricing";
import { FAQSection } from "@/components/sections/faq";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <UseCasesSection />
        <PricingSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
