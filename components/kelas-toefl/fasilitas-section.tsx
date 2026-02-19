import React from "react";
import { MonitorPlay, BookOpen, Video, ClipboardCheck, Award } from "lucide-react";

function FasilitasCard({ icon, title }: { icon: React.ReactElement; title: string }) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-background border border-border rounded-2xl hover:border-primary/50 transition-colors duration-300">
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">{React.cloneElement(icon, { className: "w-6 h-6" } as any)}</div>
      <h3 className="font-semibold text-lg">{title}</h3>
    </div>
  );
}

export function FasilitasSection() {
  return (
    <section className="py-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
        <div className="w-64 h-64 rounded-full bg-primary blur-3xl"></div>
      </div>
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">FASILITAS YANG KAMU DAPATKAN</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          <FasilitasCard icon={<MonitorPlay />} title="10x Live Interactive Class" />
          <FasilitasCard icon={<BookOpen />} title="E-Book" />
          <FasilitasCard icon={<Video />} title="Video Recording" />
          <FasilitasCard icon={<ClipboardCheck />} title="FREE TEST TOEFL PREDICTION" />
          <FasilitasCard icon={<Award />} title="Free E-Certificate (Bisa digunakan Untuk Daftar CPNS, BUMN, Kediknasan atau Lampiran Skripsi Maupun Wisuda)" />
        </div>
      </div>
    </section>
  );
}
