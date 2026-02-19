import React from "react";
import { CheckCircle2, GraduationCap } from "lucide-react";

function FeatureItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 shrink-0">
        <CheckCircle2 className="w-4 h-4" />
      </div>
      <span className="text-lg font-medium">{text}</span>
    </div>
  );
}

export function FutureSection() {
  return (
    <section className="py-12">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              BUKA PELUANG <br />
              MASA DEPANMU
            </h2>

            <div className="space-y-4">
              <FeatureItem text="Raih Peluang Impianmu" />
              <FeatureItem text="Raih Prestasi & Sertifikat" />
              <FeatureItem text="Raih Beasiswa Bergengsi!" />
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="relative bg-muted rounded-3xl p-8 border border-border/50 shadow-xl overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-[0.03]">
                <GraduationCap className="w-48 h-48" />
              </div>
              <div className="relative z-10">
                <blockquote className="text-xl lg:text-2xl font-medium italic text-foreground/80 mb-6">"Jangan Kau Gantungkan Kemampuanmu Pada Para Joki, Karena Sejatinya Kamu Sangat Mampu."</blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
