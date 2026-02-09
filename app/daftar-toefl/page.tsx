"use client";

import React from "react";
import type { Metadata } from "next";
import { LoadingLink } from "@/components/loading-link";
import { useLandingPageLinks } from "@/hooks/use-landing-page-links";
import Image from "next/image";
import { Send, TriangleAlert, Users } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function DaftarToeflPage() {
  const { links, loading } = useLandingPageLinks();

  return (
    <div className="bg-slate-950 text-slate-200 antialiased selection:bg-blue-500/30 selection:text-blue-200 min-h-screen relative overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none -z-10" />
      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-indigo-900/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <main className="flex min-h-screen flex-col items-center justify-center px-4 py-12 sm:px-6">
        {/* Logo Area */}
        <div className="mb-8 md:mb-12 transition-all duration-300 hover:scale-105">
          <Image src="/assets/logo SE.png" alt="Skill Education Logo" width={220} height={220} className="h-auto w-[180px] md:w-[220px]" priority />
        </div>

        {/* Main Card */}
        <div className="w-full max-w-lg md:max-w-3xl lg:max-w-4xl rounded-3xl border border-slate-800 bg-slate-900/50 backdrop-blur-xl shadow-2xl shadow-black/40 transition-all duration-300">
          {/* Header Section */}
          <div className="border-b border-slate-800/60 bg-white/5 rounded-t-3xl px-6 py-8 md:py-10 text-center sm:px-8">
            <h2 className="text-xl font-medium leading-snug text-white sm:text-2xl md:text-3xl">
              Syarat Mengikuti <span className="text-blue-400 font-bold">TEST TOEFL</span>
            </h2>
            <p className="mt-3 text-base text-slate-400 md:text-lg">Adalah Sebagai Berikut :</p>
          </div>

          {/* Content Section */}
          <div className="flex flex-col gap-6 px-6 py-8 sm:px-8 md:p-10 md:grid md:grid-cols-2 md:gap-8">
            {/* Step 1 */}
            <div className="group relative rounded-2xl border border-slate-800 bg-slate-900/40 p-5 md:p-6 transition-all hover:border-slate-700 hover:bg-slate-800/50 hover:shadow-lg hover:shadow-sky-500/5">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 md:h-12 md:w-12 shrink-0 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400 ring-1 ring-inset ring-sky-500/20">
                  <span className="font-mono text-sm md:text-base font-bold">1</span>
                </div>
                <div className="flex-1 space-y-3 md:space-y-4">
                  <div>
                    <h3 className="font-medium text-white md:text-lg">Join Saluran WhatsApp</h3>
                  </div>
                  <LoadingLink
                    href={links?.test_toefl.whatsapp || "#"}
                    className="inline-flex items-center gap-2 rounded-lg bg-slate-800 px-4 py-2 text-sm md:text-base font-medium text-white transition-colors hover:bg-green-600 hover:text-white border border-slate-700 hover:border-green-500/50 active:scale-[0.98] w-full justify-center md:py-2.5"
                  >
                    <FontAwesomeIcon icon={faWhatsapp} className="h-[18px] w-[18px] md:h-5 md:w-5" />
                    <span>Klik Tombol Disini</span>
                  </LoadingLink>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="group relative rounded-2xl border border-slate-800 bg-slate-900/40 p-5 md:p-6 transition-all hover:border-slate-700 hover:bg-slate-800/50 hover:shadow-lg hover:shadow-sky-500/5">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 md:h-12 md:w-12 shrink-0 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400 ring-1 ring-inset ring-sky-500/20">
                  <span className="font-mono text-sm md:text-base font-bold">2</span>
                </div>
                <div className="flex-1 space-y-3 md:space-y-4">
                  <div>
                    <h3 className="font-medium text-white md:text-lg">Join Saluran Telegram</h3>
                  </div>
                  <LoadingLink
                    href={links?.test_toefl.telegram || "#"}
                    className="inline-flex items-center gap-2 rounded-lg bg-slate-800 px-4 py-2 text-sm md:text-base font-medium text-white transition-colors hover:bg-sky-600 hover:text-white border border-slate-700 hover:border-sky-500/50 active:scale-[0.98] w-full justify-center md:py-2.5"
                  >
                    <Send className="w-[18px] h-[18px] md:w-5 md:h-5" />
                    <span>Klik Tombol Disini</span>
                  </LoadingLink>
                </div>
              </div>
            </div>

            {/* Warning Block */}
            <div className="relative overflow-hidden rounded-xl border border-amber-500/20 bg-amber-500/5 p-5 md:p-6 md:col-span-2">
              <div className="absolute -left-4 -top-4 h-16 w-16 rounded-full bg-amber-500/10 blur-xl" />
              <div className="relative flex gap-3 md:gap-5 md:items-center">
                <TriangleAlert className="mt-0.5 shrink-0 text-amber-400 w-6 h-6 md:w-8 md:h-8" />
                <div className="space-y-1">
                  <h4 className="text-sm md:text-base font-semibold tracking-wide text-amber-200 uppercase">Warning !!!</h4>
                  <p className="text-sm md:text-base leading-relaxed text-amber-200/70">Jangan Klik Syarat Nomer 3 Sebelum Syarat Nomer 1 & 2 Terpenuhi, Karena Data tidak akan terinput otomatis sebelum melakukan syarat 1 & 2</p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="group relative rounded-2xl border border-slate-800 bg-slate-900/40 p-5 md:p-6 transition-all hover:border-slate-700 hover:bg-slate-800/50 hover:shadow-lg hover:shadow-blue-500/5 md:col-span-2">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 md:h-12 md:w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 ring-1 ring-inset ring-blue-500/20">
                  <span className="font-mono text-sm md:text-base font-bold">3</span>
                </div>
                <div className="flex-1 space-y-3 md:space-y-4">
                  <div>
                    <h3 className="font-medium text-white md:text-lg">Gabung Group</h3>
                  </div>
                  <LoadingLink
                    href={links?.test_toefl.group || "#"}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-emerald-600 to-emerald-500 px-4 py-2.5 md:py-3 text-sm md:text-base font-semibold text-white shadow-lg shadow-emerald-500/20 transition-all hover:brightness-110 active:scale-[0.98]"
                  >
                    <Users className="w-5 h-5 md:w-6 md:h-6" />
                    <span>Klik Tombol Disini</span>
                  </LoadingLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
