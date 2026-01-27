import React from "react";
import { HeroSection } from "@/components/info-beasiswa/hero-section";
import { ReasonsSection } from "@/components/info-beasiswa/reasons-section";
import { TargetAudienceSection } from "@/components/info-beasiswa/target-audience-section";
import { FacilitiesSection } from "@/components/info-beasiswa/facilities-section";
import { DormSection } from "@/components/info-beasiswa/dorm-section";
import { PricingSection } from "@/components/info-beasiswa/pricing-section";
import { CTASection } from "@/components/info-beasiswa/cta-section";
import { LocationSection } from "@/components/info-beasiswa/location-section";
import { FooterSection } from "@/components/landing-page/footer-section";

// Info Beasiswa Page Component
export default function InfoBeasiswaPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />

      <ReasonsSection />

      <TargetAudienceSection />

      <FacilitiesSection />

      <DormSection />

      <PricingSection />

      <CTASection />

      <LocationSection />

      <div className="bg-white pb-8">
        <FooterSection />
      </div>
    </main>
  );
}
