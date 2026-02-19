"use client";

import React from "react";
import { FooterSection } from "@/components/landing-page/footer-section";
import { HeroSection } from "@/components/kelas-toefl/hero-section";
import { MateriSection } from "@/components/kelas-toefl/materi-section";
import { FasilitasSection } from "@/components/kelas-toefl/fasilitas-section";
import { LimitedOfferSection } from "@/components/kelas-toefl/limited-offer-section";
import { FutureSection } from "@/components/kelas-toefl/future-section";
import { TargetSection } from "@/components/kelas-toefl/target-section";
import { RegistrationSection } from "@/components/kelas-toefl/registration-section";

export default function ClassToeflPage() {
  return (
    <main className="min-h-screen bg-background font-sans overflow-x-hidden">
      <HeroSection />
      <MateriSection />
      <FasilitasSection />
      <LimitedOfferSection />
      <FutureSection />
      <TargetSection />
      <RegistrationSection />
      <FooterSection />
    </main>
  );
}
