import React from "react";
import { Headphones, BookOpen, PenTool } from "lucide-react";

function MateriCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-card hover:bg-card/80 border border-border/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group">
      <div className="mb-4 bg-muted/50 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}

export function MateriSection() {
  return (
    <section id="materi-toefl" className="py-12 bg-muted">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">MATERI YANG AKAN DIAJARKAN</h2>
          <p className="text-lg text-muted-foreground">
            Kurikulum berbasis TOEFL yang dirancang khusus untuk meraih score tertinggi dengan mengoptimalkan skill dalam memahami soal soal TOEFL dengan mudah. bukan sekedar bimbingan kelas biasa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <MateriCard icon={<Headphones className="w-10 h-10 text-primary" />} title="Listening Skill" description="Mempertajam Skill pendengaran Sehingga Dengan Mudah Memahami Isi Percakapan" />
          <MateriCard icon={<BookOpen className="w-10 h-10 text-primary" />} title="Reading Skill" description="Meningkatkan Kemampuan dalam Memahami Teks Panjang Dengan Mudah Dalam Bahasa Inggris." />
          <MateriCard icon={<PenTool className="w-10 h-10 text-primary" />} title="Structure & Written Expression Skill" description="Meningkatkan Kemampuan Analisa dalam Menyusun Kalimat Berbahasa Inggris." />
        </div>
      </div>
    </section>
  );
}
