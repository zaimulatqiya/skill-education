import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Send, TriangleAlert, Users } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export const metadata: Metadata = {
  title: "Daftar TOEFL | Skill Education",
  description: "Syarat dan panduan untuk mendaftar TOEFL di Skill Education.",
};

export default function DaftarToeflPage() {
  return (
    <div className="bg-slate-950 text-slate-200 antialiased selection:bg-blue-500/30 selection:text-blue-200 min-h-screen relative overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none -z-10" />
      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-indigo-900/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <main className="flex min-h-screen flex-col items-center justify-center px-4 py-12 sm:px-6">
        {/* Logo Area */}
        <div className="mb-8">
          <Image src="/assets/logo SE.png" alt="Skill Education Logo" width={180} height={180} className="h-auto w-auto" priority />
        </div>

        {/* Main Card */}
        <div className="w-full max-w-lg rounded-3xl border border-slate-800 bg-slate-900/50 backdrop-blur-xl shadow-2xl shadow-black/40">
          {/* Header Section */}
          <div className="border-b border-slate-800/60 bg-white/5 rounded-t-3xl px-6 py-8 text-center sm:px-8">
            <h2 className="text-lg font-medium leading-snug text-white sm:text-xl">
              Syarat Mengikuti <span className="text-blue-400">TEST TOEFL</span>
            </h2>
            <p className="mt-2 text-base text-slate-400">Adalah Sebagai Berikut :</p>
          </div>

          {/* Content Section */}
          <div className="flex flex-col gap-6 px-6 py-8 sm:px-8">
            {/* Step 1 */}
            <div className="group relative rounded-2xl border border-slate-800 bg-slate-900/40 p-5 transition-all hover:border-slate-700 hover:bg-slate-800/50">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400 ring-1 ring-inset ring-sky-500/20">
                  <span className="font-mono text-sm font-bold">1</span>
                </div>
                <div className="flex-1 space-y-3">
                  <div>
                    <h3 className="font-medium text-white">Join Saluran WhatsApp</h3>
                  </div>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 rounded-lg bg-slate-800 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-green-600 hover:text-white border border-slate-700 hover:border-green-500/50 active:scale-[0.98]"
                  >
                    <FontAwesomeIcon icon={faWhatsapp} className="h-[18px] w-[18px]" />
                    <span>Klik Tombol Disini</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="group relative rounded-2xl border border-slate-800 bg-slate-900/40 p-5 transition-all hover:border-slate-700 hover:bg-slate-800/50">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400 ring-1 ring-inset ring-sky-500/20">
                  <span className="font-mono text-sm font-bold">2</span>
                </div>
                <div className="flex-1 space-y-3">
                  <div>
                    <h3 className="font-medium text-white">Join Saluran Telegram</h3>
                  </div>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 rounded-lg bg-slate-800 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-sky-600 hover:text-white border border-slate-700 hover:border-sky-500/50 active:scale-[0.98]"
                  >
                    <Send className="w-[18px] h-[18px]" />
                    <span>Klik Tombol Disini</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Warning Block */}
            <div className="relative overflow-hidden rounded-xl border border-amber-500/20 bg-amber-500/5 p-5">
              <div className="absolute -left-4 -top-4 h-16 w-16 rounded-full bg-amber-500/10 blur-xl" />
              <div className="relative flex gap-3">
                <TriangleAlert className="mt-0.5 shrink-0 text-amber-400 w-6 h-6" />
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold tracking-wide text-amber-200 uppercase">Warning !!!</h4>
                  <p className="text-sm leading-relaxed text-amber-200/70">Jangan Klik Syarat Nomer 3 Sebelum Syarat Nomer 1 & 2 Terpenuhi, Karena Data tidak akan terinput otomatis sebelum melakukan syarat 1 & 2</p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="group relative rounded-2xl border border-slate-800 bg-slate-900/40 p-5 transition-all hover:border-slate-700 hover:bg-slate-800/50">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 ring-1 ring-inset ring-blue-500/20">
                  <span className="font-mono text-sm font-bold">3</span>
                </div>
                <div className="flex-1 space-y-3">
                  <div>
                    <h3 className="font-medium text-white">Gabung Group</h3>
                  </div>
                  <Link
                    href="#"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-emerald-600 to-emerald-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition-all hover:brightness-110 active:scale-[0.98]"
                  >
                    <Users className="w-5 h-5" />
                    <span>Klik Tombol Disini</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
