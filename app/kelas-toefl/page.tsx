import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FooterSection } from "@/components/landing-page/footer-section";
import { Button } from "@/components/ui/button";
import { BookOpen, Headphones, PenTool, FileText, Video, Users, MonitorPlay, CheckCircle2, Trophy, Globe, GraduationCap, ClipboardCheck, Award } from "lucide-react";
import { ArrowRight, ArrowDown } from "lucide-react";
import { ScrollButton } from "@/components/scroll-button";

export default function ClassToeflPage() {
  return (
    <main className="min-h-screen bg-background font-sans overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative py-12 lg:pt-24 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-transparent to-transparent"></div>

        <div className="container px-4 mx-auto text-center relative z-10">
          <Image src="/assets/logo-2.png" alt="Study TOEFL Logo" width={400} height={150} className="mx-auto mb-6 h-24 md:h-32 w-auto object-contain" priority />

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-foreground mb-6 max-w-4xl mx-auto leading-tight">
            KELAS TOEFL ONLINE <br /> <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">CUMA 99RB AJA</span>
          </h1>

          <h2 className="text-xl md:text-2xl font-medium text-muted-foreground mb-4 max-w-2xl mx-auto">Kuasai TOEFL Dengan Bimbingan Terarah.</h2>

          <p className="text-base md:text-lg text-muted-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed">Belajar TOEFL jadi lebih mudah, terarahkan, dan menyenangkan. Siap untuk Mendapatkan Kuliah, Beasiswa, atau Pekerjaan Impian.</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="rounded-full px-8 text-lg h-12 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300">
              Lihat Modul Ajar <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* 2. MATERI YANG AKAN DIAJARKAN */}
      <section className="py-12 bg-muted">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">MATERI YANG AKAN DIAJARKAN</h2>
            <p className="text-lg text-muted-foreground">
              Kurikulum berbasis TOEFL yang dirancang khusus untuk meraih score tertinggi dengan mengoptimalkan skill dalam memahami soal soal TOEFL dengan mudah. bukan sekedar bimbingan kelas biasa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <MateriCard
              icon={<Headphones className="w-10 h-10 text-primary" />}
              title="Listening Skill"
              description="
Mempertajam Skill pendengaran Sehingga Dengan Mudah Memahami Isi Percakapan"
            />
            <MateriCard icon={<BookOpen className="w-10 h-10 text-primary" />} title="Reading Skill" description="Meningkatkan Kemampuan dalam Memahami Teks Panjang Dengan Mudah Dalam Bahasa Inggris." />
            <MateriCard icon={<PenTool className="w-10 h-10 text-primary" />} title="Structure & Written Expression Skill" description="Meningkatkan Kemampuan Analisa dalam Menyusun Kalimat Berbahasa Inggris." />
          </div>
        </div>
      </section>

      {/* 3. FASILITAS YANG KAMU DAPATKAN */}
      <section className="py-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
          <div className="w-64 h-64 rounded-full bg-primary blur-3xl"></div>
        </div>
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">FASILITAS YANG KAMU DAPATKAN</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FasilitasCard icon={<MonitorPlay />} title="10x Live Interactive Class" />
            <FasilitasCard icon={<BookOpen />} title="E-Book" />
            <FasilitasCard icon={<Video />} title="Video Recording" />
            <FasilitasCard icon={<ClipboardCheck />} title="FREE TEST TOEFL PREDICTION" />
            <FasilitasCard icon={<Award />} title="Free E-Certificate (Bisa digunakan Untuk Daftar CPNS, BUMN, Kediknasan atau Lampiran Skripsi Maupun Wisuda)" />
          </div>
        </div>
      </section>

      {/* 4. LIMITED OFFER */}
      <section className="py-12 bg-gradient-to-br from-primary via-primary/90 to-secondary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>
        <div className="container px-4 mx-auto text-center relative z-10">
          <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-sm text-sm font-semibold mb-4 border border-white/20">LIMITED OFFER</span>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-2xl mx-auto font-light">Investasi kecil untuk peluang besar di masa depan. Jangan lewatkan kesempatan ini.</p>
          <ScrollButton
            targetId="daftar-sekarang"
            size="lg"
            variant="secondary"
            className="bg-white text-primary hover:bg-white/90 font-bold text-lg px-10 py-8 rounded-full shadow-2xl transform hover:scale-105 transition-transform duration-200 h-auto"
          >
            Ambil Kuotamu Sekarang
          </ScrollButton>
        </div>
      </section>

      {/* 5. PEMBUKA PELUANG MASA DEPANMU */}
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
              <div className="relative bg-muted rounded-3xl p-8 border border-border/50 shadow-xl">
                <div className="relative z-10">
                  <blockquote className="text-xl font-medium italic text-foreground/80 mb-6">"Jangan Kau Gantungkan Kemampuanmu Pada Para Joki, Karena Sejatinya Kamu Sangat Mampu."</blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TARGET SELAISI INI */}
      <section className="py-12 bg-muted/50 border-y border-border/50">
        <div className="container px-4 mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-2">TARGET SESI INI</h2>
            <div className="text-5xl md:text-7xl font-black text-foreground">
              Score <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">500++</span>
            </div>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-foreground/90">Sangat Cocok Untuk</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <TargetCard title="Pelajar" />
            <TargetCard title="Mahasiswa" />
            <TargetCard title="Dosen" />
            <TargetCard title="Pemburu Beasiswa" />
            <TargetCard title="Pekerja Instansi Pemerintah" />
          </div>
        </div>
      </section>

      {/* 7. SEGERA DAFTAR SEKARANG */}
      <section id="daftar-sekarang" className="py-12 relative overflow-hidden">
        <div className="container px-4 mx-auto max-w-3xl text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">SEGERA DAFTAR SEKARANG</h2>
          <div className="bg-destructive/10 text-destructive font-semibold py-2 px-6 rounded-lg inline-block mb-6">Kuota Sangat Terbatas!</div>
          <p className="text-xl text-muted-foreground mb-10">Sebentar Lagi Promo Akan Segera Ditutup, Jangan Biarkan Kesempatanmu Hilang Begitu Saja</p>

          <div className="flex justify-center gap-2 mb-8 text-blue-500">
            <ArrowDown className="w-10 h-10 md:w-10 md:h-10 animate-bounce" />
            <ArrowDown className="w-10 h-10 md:w-10 md:h-10 animate-bounce delay-100" />
            <ArrowDown className="w-10 h-10 md:w-10 md:h-10 animate-bounce delay-200" />
          </div>

          <Button className="w-full md:w-auto text-lg px-12 py-8 rounded-2xl bg-primary hover:bg-primary/90 shadow-xl shadow-primary/25 border-t border-white/20">
            <span className="flex flex-col items-center">
              <span className="font-bold">DAFTAR SEKARANG</span>
              <span className="text-sm font-normal opacity-90">Hanya 99rb</span>
            </span>
            <ArrowRight className="ml-3 w-6 h-6" />
          </Button>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}

// -- Sub-components --

function MateriCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-card hover:bg-card/80 border border-border/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group">
      <div className="mb-4 bg-muted/50 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}

function FasilitasCard({ icon, title }: { icon: React.ReactElement; title: string }) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-background border border-border rounded-2xl hover:border-primary/50 transition-colors duration-300">
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">{React.cloneElement(icon, { className: "w-6 h-6" } as any)}</div>
      <h3 className="font-semibold text-lg">{title}</h3>
    </div>
  );
}

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

function TargetCard({ title }: { title: string }) {
  return (
    <div className="bg-card text-card-foreground p-6 rounded-2xl border border-border shadow-sm flex items-center justify-center min-h-[120px]">
      <h3 className="text-xl font-bold">{title}</h3>
    </div>
  );
}
