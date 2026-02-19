"use client";

import React from "react";
import { RegistrationForm } from "@/components/registration-form";
import { CheckCircle2, ShieldCheck, Zap, Users } from "lucide-react";

export function RegistrationSection() {
  return (
    <section id="daftar-sekarang" className="py-20 lg:py-28 relative overflow-hidden bg-[#0B0F19]">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] bg-primary/20 rounded-full blur-[100px] animate-pulse duration-[5000ms]"></div>
        <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] bg-blue-600/10 rounded-full blur-[100px]"></div>
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay"></div>
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Left Column: Copywriting */}
          <div className="lg:flex-1 text-left space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 font-semibold text-sm">
              <Zap className="w-4 h-4 fill-red-400" />
              <span>Kuota Sangat Terbatas!</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              Amankan Kursi <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Masa Depanmu.</span>
            </h2>

            <p className="text-lg text-slate-300 leading-relaxed max-w-xl">Bergabunglah dengan ribuan alumni yang telah berhasil meraih skor impian mereka. Langkah kecil hari ini adalah lompatan besar untuk karirmu nanti.</p>

            <div className="space-y-4">
              <FeatureRow text="Jaminan Materi Terupdate & Relevan" />
              <FeatureRow text="Dibimbing Tutor Expert Berpengalaman" />
              <FeatureRow text="Akses Komunitas Belajar Eksklusif" />
              <FeatureRow text="Sertifikat Resmi & Diakui" />
            </div>
          </div>

          {/* Right Column: Form Card */}
          <div className="lg:w-[700px] w-full shrink-0">
            <div className="relative group">
              {/* Card Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>

              <div className="relative bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden">
                <div className="bg-blue-50/50 p-6 border-b border-blue-100">
                  <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-blue-600" />
                    Formulir Pendaftaran
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">Isi data diri Anda dengan benar.</p>
                </div>

                <div className="p-6 md:p-8">
                  <RegistrationForm source="toefl-online" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureRow({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 group">
      <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 group-hover:bg-green-500 group-hover:scale-110 transition-all duration-300">
        <CheckCircle2 className="w-4 h-4 text-green-500 group-hover:text-white transition-colors" />
      </div>
      <span className="text-slate-200 font-medium group-hover:text-white transition-colors">{text}</span>
    </div>
  );
}
