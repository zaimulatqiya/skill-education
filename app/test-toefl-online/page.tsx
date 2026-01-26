import { BackgroundEffects } from "@/components/landing-page/background-effects";
import { FooterSection } from "@/components/landing-page/footer-section";
import { CheckCircle2, Award, Clock, Smartphone, ShieldCheck, FileCheck, Landmark, GraduationCap, MapPin, Building2, AlertCircle, Globe, Zap, TrendingUp, Laptop, Medal, Users, ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function TestToeflPage() {
  return (
    <div className="min-h-screen w-full bg-[#02040a] text-slate-300 font-sans selection:bg-blue-500/30 selection:text-blue-200 overflow-x-hidden">
      <BackgroundEffects />

      <main className="relative z-10 w-full">
        {/* HERO SECTION */}
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 py-20 text-center container mx-auto max-w-5xl">
          <div className="space-y-6 flex flex-col items-center">
            {/* Logo */}
            <div className="relative mb-6 transform hover:scale-105 transition-transform duration-500">
              <div className="absolute inset-0 bg-blue-500/30 rounded-full blur-2xl animate-pulse"></div>
              <Image src="/assets/logo SE.png" alt="Skill Education Logo" width={160} height={160} className="object-contain relative z-10" priority />
            </div>

            {/* Title & Subtext */}
            <h2 className="text-blue-400 font-bold uppercase tracking-widest text-sm md:text-base">
              By Mr. Language
              <br />
              <span className="text-white font-medium normal-case">Lembaga Kursus dan Pelatihan Bahasa Inggris</span>
            </h2>
            <p className="text-xs text-white/60 font-mono tracking-tight">
              NPSN : K16907839 <span className="mx-2">|</span> SK DIKNAS : 421.9/308/418.49/2021
            </p>

            <div className="mt-8 space-y-4">
              <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight uppercase bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400">
                <span className="block text-blue-400 text-3xl md:text-5xl mb-2">Gratis!!!</span>
                Test TOEFL Prediction
              </h1>
            </div>

            {/* Illustration Placeholder */}
            <div className="relative mt-12 w-64 h-64 md:w-80 md:h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-full opacity-20 blur-3xl animate-pulse-glow"></div>
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="absolute inset-4 bg-blue-900/30 border border-blue-500/30 rounded-full backdrop-blur-sm overflow-hidden flex items-end justify-center">
                  <Image src="/assets/transparant/13.png" alt="Peserta TOEFL" fill className="object-cover object-top hover:scale-110 transition-transform duration-700" priority />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BENEFITS SECTION */}
        <section className="py-24 bg-white relative">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                  Keunggulan Kenapa Harus <br />
                  <span className="text-blue-600">Mengikuti Program Ini?</span>
                </h2>
              </div>
              <div className="w-24 h-1 bg-slate-200 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="group p-8 rounded-2xl bg-white border border-slate-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-blue-100 transition-all duration-300">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Online System</h3>
                <p className="text-slate-500 leading-relaxed text-sm">Test dikerjakan secara online via Web, bisa diakses dari mana saja.</p>
              </div>

              {/* Card 2 */}
              <div className="group p-8 rounded-2xl bg-white border border-slate-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-blue-100 transition-all duration-300">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Percaya Diri</h3>
                <p className="text-slate-500 leading-relaxed text-sm">Menjadikan percaya diri dalam menghadapi soal-soal TOEFL yang sebenarnya.</p>
              </div>

              {/* Card 3 */}
              <div className="group p-8 rounded-2xl bg-white border border-slate-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-blue-100 transition-all duration-300">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Instant Result</h3>
                <p className="text-slate-500 leading-relaxed text-sm">Skor TOEFL bisa langsung diketahui setelah menyelesaikan test.</p>
              </div>

              {/* Card 4 */}
              <div className="group p-8 rounded-2xl bg-white border border-slate-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-blue-100 transition-all duration-300">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Laptop className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Web Based</h3>
                <p className="text-slate-500 leading-relaxed text-sm">Test dikerjakan secara Online Via Web tanpa perlu install aplikasi.</p>
              </div>

              {/* Card 5 */}
              <div className="group p-8 rounded-2xl bg-white border border-slate-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-blue-100 transition-all duration-300">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Medal className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Official Cert</h3>
                <p className="text-slate-500 leading-relaxed text-sm">Sertifikat resmi dikeluarkan oleh lembaga "Mr. Language".</p>
              </div>

              {/* Card 6 */}
              <div className="group p-8 rounded-2xl bg-white border border-slate-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-blue-100 transition-all duration-300">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Expert Made</h3>
                <p className="text-slate-500 leading-relaxed text-sm">Seluruh soal test dibuat oleh tenaga ahli berpengalaman.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CERTIFICATE USAGE SECTION */}
        <section className="py-20 bg-[#0B1120] px-6 text-white relative">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-bold tracking-wide uppercase">Sertifikat Dapat Digunakan Sebagai</h2>
              <div className="mt-4 flex justify-center gap-2">
                <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                <div className="h-2 w-12 rounded-full bg-blue-500"></div>
                <div className="h-2 w-2 rounded-full bg-blue-500"></div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Image Side */}
              <div className="relative md:order-1 order-2">
                <div className="relative w-full max-w-sm mx-auto aspect-square bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full p-8 animate-pulse-glow">
                  <div className="w-full h-full bg-blue-600/10 rounded-full border border-blue-500/30 backdrop-blur-sm relative overflow-hidden">
                    <Image src="/assets/transparant/13.png" alt="Student Success" fill className="object-cover object-top hover:scale-105 transition-transform duration-500" />
                  </div>
                </div>
              </div>

              {/* List Side */}
              <div className="space-y-4 md:order-2 order-1">
                {[
                  { text: "Persyaratan Sidang Skripsi Atau Wisuda", icon: GraduationCap },
                  { text: "Melamar Kerja Pemerintahan Atau Swasta", icon: Building2 },
                  { text: "Pelengkap Lampiran Untuk Test CPNS dan BUMN", icon: FileCheck },
                  { text: "Pelengkap Lampiran untuk Persyaratan S1, S2 atau S3 Dalam Negeri", icon: Landmark },
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
        <section className="py-20 bg-white px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-10 uppercase border-b-4 border-yellow-400 inline-block pb-2">Contoh Sertifikat TOEFL</h2>

            <div className="bg-white p-2 rounded-xl border border-slate-200 shadow-2xl mb-10 transform hover:scale-[1.01] transition-transform duration-500 max-w-3xl mx-auto">
              <div className="aspect-[1.414/1] w-full bg-slate-100 rounded-lg relative overflow-hidden flex items-center justify-center border border-slate-100">
                {/* Placeholder Certificate Visual */}

                <Image src="/assets/sertif.jpg" alt="Contoh Sertifikat TOEFL" fill className="object-contain" />
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
                <li>Kebijakan penerimaan sertifikat sepenuhnya menjada hak institusi atau perusahaan tujuan.</li>
                <li>Pastikan data diri yang diinput sesuai dengan identitas resmi (KTP/KTM).</li>
                <li>Sistem monitoring kami menjamin integritas pelaksanaan ujian.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-20 bg-[#02040a] relative overflow-hidden px-6 text-center">
          <div className="container mx-auto max-w-2xl relative z-10">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Segera Daftar Disini Karena
              <br />
              <span className="text-blue-500">Kuota Sangat Terbatas</span>
            </h2>

            <div className="flex justify-center my-8 animate-bounce">
              <div className="flex gap-2">
                <ArrowDown className="w-10 h-10 text-white" />
                <ArrowDown className="w-10 h-10 text-white" />
                <ArrowDown className="w-10 h-10 text-white" />
              </div>
            </div>

            <Link href="#" className="block w-full max-w-sm mx-auto">
              <button className="w-full h-16 text-lg font-bold bg-blue-600 hover:bg-blue-500 text-white rounded-xl shadow-lg shadow-blue-900/40 hover:scale-105 transition-all duration-300 active:scale-95 border-b-4 border-blue-800 hover:border-blue-700">
                DAFTAR SEKARANG
              </button>
            </Link>
          </div>

          <div className="mt-12 border-t border-slate-900 pt-8">
            <FooterSection />
          </div>
        </section>
      </main>
    </div>
  );
}
