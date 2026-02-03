import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { AtSign, Instagram, TriangleAlert, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Ujian Ulang Test TOEFL | Skill Education",
  description: "Syarat dan panduan untuk mengikuti ujian ulang Test TOEFL di Skill Education.",
};

export default function UjianUlangPage() {
  return (
    <div className="bg-slate-50 text-slate-900 antialiased selection:bg-blue-100 selection:text-blue-700 min-h-screen relative overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-400/20 blur-[100px] rounded-full pointer-events-none -z-10" />
      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-indigo-400/20 blur-[120px] rounded-full pointer-events-none -z-10" />

      <main className="flex min-h-screen flex-col items-center justify-center px-4 py-12 sm:px-6">
        {/* Logo Area */}
        <div className="mb-8">
          <Image src="/assets/logo-2.png" alt="Skill Education Logo" width={180} height={180} className="h-auto w-auto" priority />
        </div>

        {/* Main Card */}
        <div className="w-full max-w-lg rounded-3xl border border-slate-200 bg-white/80 backdrop-blur-xl shadow-2xl shadow-slate-200/50">
          {/* Header Section */}
          <div className="border-b border-slate-100 bg-slate-50/50 rounded-t-3xl px-6 py-8 text-center sm:px-8">
            <h2 className="text-lg font-medium leading-snug text-slate-900 sm:text-xl">
              Syarat Mengikuti <span className="text-blue-600">Ujian Ulang</span> TEST TOEFL
            </h2>
            <p className="mt-2 text-base text-slate-500">Selesaikan misi di bawah ini secara berurutan.</p>
          </div>

          {/* Content Section */}
          <div className="flex flex-col gap-6 px-6 py-8 sm:px-8">
            {/* Step 1 */}
            <div className="group relative rounded-2xl border border-slate-200 bg-white p-5 transition-all hover:border-slate-300 hover:shadow-md hover:shadow-slate-200/50">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600 ring-1 ring-inset ring-blue-200">
                  <span className="font-mono text-sm font-bold">1</span>
                </div>
                <div className="flex-1 space-y-3">
                  <div>
                    <h3 className="font-medium text-slate-900">Tag 3 Teman</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-500">Tag 3 temenmu di kolom komentar postingan Instagram Skill Education.</p>
                  </div>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 rounded-lg bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 transition-colors hover:bg-blue-100 border border-blue-200 hover:border-blue-300 active:scale-[0.98]"
                  >
                    <AtSign className="w-[18px] h-[18px]" />
                    <span>Klik Tombol Disini</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="group relative rounded-2xl border border-slate-200 bg-white p-5 transition-all hover:border-slate-300 hover:shadow-md hover:shadow-slate-200/50">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-pink-100 text-pink-600 ring-1 ring-inset ring-pink-200">
                  <span className="font-mono text-sm font-bold">2</span>
                </div>
                <div className="flex-1 space-y-3">
                  <div>
                    <h3 className="font-medium text-slate-900">Follow Instagram</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-500">Wajib follow akun Instagram resmi Skill Education.</p>
                  </div>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 rounded-lg bg-pink-50 px-4 py-2 text-sm font-medium text-pink-700 transition-colors hover:bg-pink-100 border border-pink-200 hover:border-pink-300 active:scale-[0.98]"
                  >
                    <Instagram className="w-[18px] h-[18px]" />
                    <span>Klik Tombol Disini</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Warning Block */}
            <div className="relative overflow-hidden rounded-xl border border-amber-200 bg-amber-50 p-5">
              <div className="absolute -left-4 -top-4 h-16 w-16 rounded-full bg-amber-100 blur-xl" />
              <div className="relative flex gap-3">
                <TriangleAlert className="mt-0.5 shrink-0 text-amber-500 w-6 h-6" />
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold tracking-wide text-amber-700 uppercase">Warning !!!</h4>
                  <p className="text-sm leading-relaxed text-amber-600/90">Jangan klik syarat nomer 3 sebelum syarat nomer 1 & 2 terpenuhi. Data tidak akan terinput otomatis jika Anda melewati langkah sebelumnya.</p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="group relative rounded-2xl border border-slate-200 bg-white p-5 transition-all hover:border-slate-300 hover:shadow-md hover:shadow-slate-200/50">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 ring-1 ring-inset ring-emerald-200">
                  <span className="font-mono text-sm font-bold">3</span>
                </div>
                <div className="flex-1 space-y-3">
                  <div>
                    <h3 className="font-medium text-slate-900">Gabung Group</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-500">Langkah terakhir, bergabunglah ke dalam grup peserta.</p>
                  </div>
                  <Link
                    href="#"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-400 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-200 transition-all hover:brightness-105 active:scale-[0.98]"
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
