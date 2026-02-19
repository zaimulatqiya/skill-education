import React from "react";

function TargetCard({ title }: { title: string }) {
  return (
    <div className="bg-card text-card-foreground p-6 rounded-2xl border border-border shadow-sm flex items-center justify-center min-h-[120px]">
      <h3 className="text-xl font-bold">{title}</h3>
    </div>
  );
}

export function TargetSection() {
  return (
    <section className="py-12 bg-muted/50 border-y border-border/50">
      <div className="container px-4 mx-auto text-center">
        <div className="mb-12">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-2">TARGET SESI INI</h2>
          <div className="text-5xl md:text-7xl font-black text-foreground">
            Score <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">500++</span>
          </div>
        </div>

        <h3 className="text-2xl md:text-3xl font-bold mb-8 text-foreground/90">Sangat Cocok Untuk</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mx-auto">
          <TargetCard title="Pelajar" />
          <TargetCard title="Mahasiswa" />
          <TargetCard title="Dosen" />
          <TargetCard title="Pemburu Beasiswa" />
          <TargetCard title="Pekerja Instansi Pemerintah" />
        </div>
      </div>
    </section>
  );
}
