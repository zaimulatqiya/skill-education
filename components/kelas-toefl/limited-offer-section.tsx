import React from "react";
import { ScrollButton } from "@/components/scroll-button";

export function LimitedOfferSection() {
  return (
    <section className="py-24 relative overflow-hidden flex items-center justify-center">
      {/* Background with Fluid Gradient and Noise */}
      <div className="absolute inset-0 bg-[#020817] z-0">
        <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] bg-primary/30 rounded-full blur-[120px] mix-blend-screen animate-pulse duration-[5000ms]"></div>
        <div className="absolute -bottom-[20%] -right-[10%] w-[70%] h-[70%] bg-secondary/30 rounded-full blur-[120px] mix-blend-screen animate-pulse duration-[7000ms] delay-1000"></div>
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>
      </div>

      <div className="container px-4 mx-auto text-center relative z-10">
        <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 backdrop-blur-md text-sm font-semibold mb-6 border border-white/10 text-blue-50 shadow-[0_0_15px_rgba(255,255,255,0.1)]">LIMITED OFFER</span>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight drop-shadow-xl leading-tight max-w-5xl mx-auto">Investasi kecil untuk peluang besar di masa depan.</h2>

        <p className="text-lg md:text-xl text-blue-100/80 mb-10 max-w-2xl mx-auto font-light leading-relaxed">Jangan lewatkan kesempatan ini.</p>

        <ScrollButton
          targetId="daftar-sekarang"
          size="lg"
          className="group relative bg-gradient-to-r from-primary to-secondary hover:scale-105 text-white font-bold text-lg px-10 py-6 h-auto rounded-full shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)] transition-all duration-300 border border-white/20 cursor-pointer"
        >
          Ambil Kuotamu Sekarang
        </ScrollButton>
      </div>
    </section>
  );
}
