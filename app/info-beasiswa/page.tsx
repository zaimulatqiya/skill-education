import { BackgroundEffects } from "@/components/landing-page/background-effects";
import { FooterSection } from "@/components/landing-page/footer-section";
import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";

export default function InfoBeasiswaPage() {
  return (
    <div className="min-h-screen w-full bg-[#02040a] text-slate-300 font-sans selection:bg-blue-500/30 selection:text-blue-200 overflow-x-hidden flex flex-col">
      {/* Background Ambient Effects */}
      <BackgroundEffects />

      <main className="flex-grow relative z-10 w-full flex flex-col items-center justify-center p-6">
        <div className="max-w-4xl w-full text-center space-y-8">
          {/* Back Button */}
          <div className="absolute top-6 left-6 md:top-12 md:left-12">
            <Link href="/" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group">
              <div className="p-2 rounded-full bg-slate-800/50 group-hover:bg-blue-600 transition-colors">
                <ArrowLeft className="w-5 h-5" />
              </div>
              <span className="text-sm font-medium">Kembali</span>
            </Link>
          </div>

          {/* Icon */}
          <div className="mx-auto w-24 h-24 bg-blue-500/10 rounded-3xl flex items-center justify-center border border-blue-500/20 shadow-[0_0_30px_-5px_theme(colors.blue.600/0.3)] mb-8 animate-pulse">
            <BookOpen className="w-10 h-10 text-blue-400" />
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight uppercase bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400">
            Info <span className="text-blue-500">Beasiswa</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">Halaman ini sedang dalam tahap pengembangan. Kami sedang mengumpulkan informasi beasiswa terbaik untuk masa depan pendidikanmu.</p>

          <div className="pt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/20 border border-blue-500/30 text-blue-300 text-sm font-mono">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
              </span>
              Coming Soon
            </div>
          </div>
        </div>
      </main>

      <div className="relative z-10 border-t border-slate-900">
        <FooterSection />
      </div>
    </div>
  );
}
