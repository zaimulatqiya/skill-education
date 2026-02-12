"use client";

import { BackgroundEffects } from "@/components/landing-page/background-effects";
import { FooterSection } from "@/components/landing-page/footer-section";
import {
  CheckCircle2,
  Award,
  Clock,
  Smartphone,
  ShieldCheck,
  FileCheck,
  Landmark,
  GraduationCap,
  MapPin,
  Building2,
  AlertCircle,
  Globe,
  Zap,
  TrendingUp,
  Laptop,
  Medal,
  Users,
  ArrowDown,
  QrCode,
  Info,
  Send,
  TriangleAlert,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { LinkData } from "@/lib/get-landing-page-links";
import { LoadingLink } from "@/components/loading-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

interface TestToeflContentProps {
  links: LinkData | null;
}

export default function TestToeflContent({ links }: TestToeflContentProps) {
  const handleLead = () => {
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "Lead");
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#02040a] text-slate-300 font-sans selection:bg-blue-500/30 selection:text-blue-200 overflow-x-hidden">
      <BackgroundEffects />

      <main className="relative z-10 w-full">
        {/* HERO SECTION */}
        <section className="relative min-h-[90vh] flex flex-col items-center justify-between pt-12 text-center container mx-auto max-w-5xl overflow-hidden">
          <div className="space-y-6 flex flex-col items-center z-10">
            {/* Logo */}
            <div className="relative mb-6 transform hover:scale-105 transition-transform duration-500">
              <div className="absolute inset-0 bg-blue-500/30 rounded-full blur-2xl animate-pulse"></div>
              <Image src="/assets/logo SE.png" alt="Skill Education Logo" width={160} height={160} className="object-contain relative z-10" priority />
            </div>

            <div className="mt-8 space-y-4">
              <h1 className="text-2xl md:text-4xl font-black text-white tracking-tight leading-tight uppercase bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400">
                <span className="block text-blue-400 text-6xl md:text-6xl mb-2">Gratis!!!</span>
                Test TOEFL
              </h1>
              <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed tracking-wide px-4">Raih Score TOEFL Tertinggimu Dengan Mengikuti Program ini Untuk Mengetahui Seberapa Bagus Skill TOEFL mu</p>

              <div className="w-full flex justify-center pt-4 md:pt-6 relative z-20">
                <button
                  onClick={() => {
                    document.getElementById("daftar-section")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="block w-[90%] md:w-full max-w-sm mx-auto h-14 md:h-16 text-base md:text-lg font-bold bg-blue-600 hover:bg-blue-500 text-white rounded-xl shadow-lg shadow-blue-900/40 hover:scale-105 transition-all duration-300 active:scale-95 border-b-4 border-blue-800 hover:border-blue-700 cursor-pointer"
                >
                  DAFTAR SEKARANG
                </button>
              </div>
            </div>
          </div>

          {/* Hero Image - Pushed to bottom */}
          <div className="relative mt-8 w-full max-w-md md:max-w-xl mx-auto h-[400px] md:h-[500px] lg:h-[600px] flex items-end justify-center">
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none">
              {/* Organic Blob 1: Bright Yellow (Top Right) */}
              <div className="absolute top-0 right-0 md:-right-12 w-48 h-48 md:w-72 md:h-72 bg-yellow-400/20 rounded-full blur-[80px] mix-blend-screen animate-pulse"></div>

              {/* Organic Blob 2: Cyan (Bottom Left) */}
              <div className="absolute bottom-0 left-0 md:-left-12 w-56 h-56 md:w-80 md:h-80 bg-cyan-500/20 rounded-full blur-[80px] mix-blend-screen animate-pulse delay-1000"></div>

              {/* Organic Blob 3: Center Accent */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-600/10 rounded-full blur-[60px]"></div>

              {/* Small Scattered Circles / Particles */}
              <div className="absolute top-[20%] right-[15%] w-3 h-3 bg-yellow-300 rounded-full shadow-[0_0_15px_rgba(253,224,71,0.5)] animate-bounce duration-[3000ms]"></div>
              <div className="absolute bottom-[30%] left-[10%] w-2 h-2 bg-cyan-300 rounded-full shadow-[0_0_10px_rgba(103,232,249,0.5)] animate-bounce duration-[3000ms]"></div>
              <div className="absolute top-[10%] left-[20%] w-4 h-4 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"></div>

              {/* Geometric Lines */}
              <svg className="absolute top-0 right-0 w-32 h-32 opacity-20" viewBox="0 0 100 100">
                <path d="M20,20 L80,20 L80,80" fill="none" stroke="white" strokeWidth="1" />
              </svg>
              <svg className="absolute bottom-0 left-0 w-32 h-32 opacity-20 rotate-180" viewBox="0 0 100 100">
                <path d="M20,20 L80,20 L80,80" fill="none" stroke="white" strokeWidth="1" />
              </svg>
            </div>

            <div className="relative w-full h-full">
              <Image src="/assets/transparant/5.png" alt="Peserta TOEFL" fill className="object-contain object-bottom relative z-10 drop-shadow-2xl hover:scale-105 transition-transform duration-700 ease-out" priority />
            </div>
          </div>
        </section>

        {/* BENEFITS SECTION */}
        <section className="py-24 bg-white relative">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                  Keunggulan Program <br />
                  <span className="text-blue-600">Kenapa Harus Mengikuti Program Ini?</span>
                </h2>
              </div>
              <div className="w-24 h-1 bg-slate-200 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="group p-8 rounded-2xl bg-white border border-slate-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-blue-100 transition-all duration-300">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Medal className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Sertifikat Instan</h3>
                <p className="text-slate-500 leading-relaxed text-sm">Dapatkan hasil tes dan sertifikat langsung setelah ujian selesai.</p>
              </div>

              {/* Card 2 */}
              <div className="group p-8 rounded-2xl bg-white border border-slate-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-blue-100 transition-all duration-300">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Waktu Fleksibel</h3>
                <p className="text-slate-500 leading-relaxed text-sm">WEB TEST bisa diakses kapanpun.</p>
              </div>

              {/* Card 3 */}
              <div className="group p-8 rounded-2xl bg-white border border-slate-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-blue-100 transition-all duration-300">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Skor Real Time</h3>
                <p className="text-slate-500 leading-relaxed text-sm">Nilai TOEFL muncul otomatis begitu tes berakhir.</p>
              </div>

              {/* Card 4 */}
              <div className="group p-8 rounded-2xl bg-white border border-slate-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-blue-100 transition-all duration-300">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Laptop className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">100% Online</h3>
                <p className="text-slate-500 leading-relaxed text-sm">Kerjakan dari mana saja via laptop atau smartphone.</p>
              </div>

              {/* Card 5 */}
              <div className="group p-8 rounded-2xl bg-white border border-slate-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-blue-100 transition-all duration-300">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Sertifikat Resmi</h3>
                <p className="text-slate-500 leading-relaxed text-sm">Legalitas Resmi Lembaga Mr. Language Yang Sudah Ber SK Diknas.</p>
              </div>

              {/* Card 6 */}
              <div className="group p-8 rounded-2xl bg-white border border-slate-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-blue-100 transition-all duration-300">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Soal Berkualitas</h3>
                <p className="text-slate-500 leading-relaxed text-sm">Soal dibuat oleh tenaga ahli yang kompeten dan berpengalaman.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CERTIFICATE USAGE SECTION */}
        <section className="pt-20 pb-0 bg-[#0B1120] px-6 text-white relative overflow-hidden">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-bold tracking-wide uppercase">Sertifikat Dapat Digunakan Sebagai</h2>
              <div className="mt-4 flex justify-center gap-2">
                <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                <div className="h-2 w-12 rounded-full bg-blue-500"></div>
                <div className="h-2 w-2 rounded-full bg-blue-500"></div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-end">
              {/* Image Side */}
              <div className="relative md:order-1 order-2 h-[400px] md:h-[500px]">
                <div className="absolute inset-x-0 bottom-0 top-0 mx-auto w-full max-w-[400px]">
                  {/* Glow Behind */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-[60%] bg-blue-500/20 blur-[80px] rounded-full pointer-events-none"></div>

                  <Image src="/assets/transparant/3.png" alt="Student Success" fill className="object-contain object-bottom relative z-10 drop-shadow-2xl hover:scale-105 transition-transform duration-700 ease-out" />
                </div>
              </div>

              {/* List Side */}
              <div className="space-y-4 md:order-2 order-1 pb-12 md:pb-20">
                {[
                  { text: "Persyaratan Sidang Skripsi Atau Wisuda", icon: GraduationCap },
                  { text: "Pelengkap Persyaratan Kuliah S1, S2, S3 Dalam Negeri", icon: Building2 },
                  { text: "Pelengkap Lampiran Untuk Melamar Kerja di Swasta atau Pemerintahan (CPNS, BUMN atau Kediknasan)", icon: FileCheck },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-5 bg-slate-800/50 hover:bg-slate-800 border border-slate-700 hover:border-blue-500 rounded-xl transition-all duration-300 group cursor-default">
                    <div className="shrink-0 p-3 bg-blue-500/10 rounded-full group-hover:bg-blue-500 group-hover:text-white text-blue-400 transition-all">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <p className="font-medium text-slate-200 group-hover:text-white text-base leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CERTIFICATE PREVIEW SECTION */}
        <section className="py-24 bg-white px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 uppercase border-b-4 border-yellow-400 inline-block pb-2">Contoh Sertifikat TOEFL</h2>
            </div>

            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Certificate Image */}
              <div className="lg:col-span-7">
                <div className="bg-white p-2 rounded-xl border border-slate-200 shadow-xl transform hover:scale-[1.01] transition-transform duration-500">
                  <div className="w-full bg-slate-50 rounded-lg relative overflow-hidden border border-slate-100">
                    <Image src="/assets/sertifikat.jpg" alt="Contoh Sertifikat TOEFL" width={1000} height={700} className="w-full h-auto" priority />
                  </div>
                </div>
              </div>

              {/* Info Blocks */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 hover:border-blue-100">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
                      <Building2 className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">Tentang Kami</h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">Lembaga Mr. language Adalah Lembaga Yang Sudah Memiliki Izin Secara Sah (Lulus Melalui Audit) Dari Dinas Pendidikan Untuk Mengadakan Pelatihan Bahasa Inggris.</p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 hover:border-blue-100">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
                      <QrCode className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">Barcode</h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Professional Barcode yang tercantum di dalam sertifikat secara langsung terhubung ke Web Tentang Surat Pernyataan dengan menampilkan Biodata beserta Nilainya sebagai bahan Validasi, sehingga sertifikat tidak dapat
                    dimanipulasi.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 hover:border-blue-100">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
                      <Info className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">Note</h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Sudah Banyak Peserta (Alumni) kami yang menggunakan Sertifikat ini baik untuk keperluan pekerjaan maupun pendidikan. "Penerimaan atas sertifikat adalah sepenuhnya wewenang dari instansi yang dituju."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DISCLAIMER SECTION */}
        <section className="py-16 bg-blue-600 text-white px-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
            <ShieldCheck className="w-96 h-96 -rotate-12" />
          </div>

          <div className="container mx-auto max-w-4xl relative z-10">
            <div className="flex items-center gap-3 mb-8 justify-center md:justify-start">
              <AlertCircle className="w-8 h-8" />
              <h2 className="text-3xl font-bold">Disclaimer</h2>
            </div>

            <div className="grid gap-4 md:grid-cols-1 text-blue-50/90 text-sm md:text-base leading-relaxed">
              <ul className="space-y-3 list-disc pl-5">
                <li>Hasil skor merupakan prediksi kemampuan bahasa Inggris (Prediction Test).</li>
                <li>Kami tidak berafiliasi dengan ETS (Educational Testing Service).</li>
                <li>Kebijakan penerimaan sertifikat sepenuhnya menjadi hak institusi atau perusahaan yang dituju.</li>
                <li>Sistem monitoring kami menjamin integritas pelaksanaan ujian.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* REGISTRATION / DAFTAR SECTION (Replaces old CTA) */}
        <section id="daftar-section" className="py-20 bg-[#0B1120] relative overflow-hidden px-6">
          <div className="container mx-auto flex flex-col items-center justify-center">
            {/* Main Card from Daftar Page */}
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
                        onClick={handleLead}
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
          </div>
        </section>

        <div className="mt-4 pt-8">
          <FooterSection />
        </div>
      </main>
    </div>
  );
}
