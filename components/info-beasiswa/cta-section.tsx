"use client";

import { motion } from "framer-motion";
import { RegistrationForm } from "@/components/registration-form";
import { CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import Image from "next/image";

export function CTASection() {
  return (
    <section id="registration-form" className="relative py-20 lg:py-28 overflow-hidden bg-[#0B0F19]">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] bg-blue-600/20 rounded-full blur-[100px] animate-pulse duration-[5000ms]"></div>
        <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] bg-indigo-600/10 rounded-full blur-[100px]"></div>
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay"></div>
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Left Column: Copywriting */}
          <div className="lg:flex-1 text-left space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 font-semibold text-sm"
            >
              <Zap className="w-4 h-4 fill-red-400" />
              <span>Kesempatan Terbatas!</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight shadow-text"
            >
              Bergabung Sekarang <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Tunggu apa lagi? Daftar sekarang</span>
            </motion.h2>

            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-lg text-slate-300 leading-relaxed max-w-xl">
              Dapatkan beasiswa pendidikan bahasa Inggris terbaik. Bergabunglah sekarang dan mulailah perjalananmu menuju kesuksesan bersama kami.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="space-y-4">
              <FeatureRow text="Program Beasiswa Potongan 50%" />
              <FeatureRow text="Kurikulum Standar Internasional" />
              <FeatureRow text="Lingkungan Belajar yang Suportif" />
              <FeatureRow text="Siap Karir & Studi Lanjut" />
            </motion.div>
          </div>

          {/* Right Column: Form Card */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="lg:w-[600px] w-full shrink-0">
            <div className="relative group">
              {/* Card Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-b from-blue-600 to-cyan-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>

              <div id="form-pendaftaran-beasiswa" className="relative bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden scroll-mt-24">
                <div className="bg-blue-50/50 p-6 border-b border-blue-100">
                  <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-blue-600" />
                    Formulir Pendaftaran Beasiswa
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">Lengkapi data diri Anda untuk mengamankan slot.</p>
                </div>

                <div className="p-6 md:p-8">
                  <RegistrationForm source="beasiswa" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FeatureRow({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 group">
      <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 group-hover:bg-blue-500 group-hover:scale-110 transition-all duration-300">
        <CheckCircle2 className="w-4 h-4 text-blue-500 group-hover:text-white transition-colors" />
      </div>
      <span className="text-slate-200 font-medium group-hover:text-white transition-colors">{text}</span>
    </div>
  );
}
