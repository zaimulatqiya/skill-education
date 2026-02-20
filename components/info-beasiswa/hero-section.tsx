"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MessageCircle, CheckCircle } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-between bg-[#0B1221] overflow-hidden text-white pt-12 pb-0">
      {/* Background Gradient Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl opacity-30 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600 rounded-full blur-[100px]" />
      </div>

      <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center flex-grow justify-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex flex-col items-center gap-4 mb-8">
          <Image src="/assets/logo SE.png" alt="Skill Education Logo" width={0} height={0} sizes="100vw" className="w-48 md:w-56 h-auto mb-2 object-contain" priority />

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Beasiswa 50% <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1BB6E9] to-blue-400">Kampung Inggris</span>
          </h1>

          <p className="text-slate-300 max-w-2xl text-sm md:text-base mb-6">Upgrade skill bahasa Inggrismu dengan metode belajar terbaik dan lingkungan yang mendukung. Raih impianmu sekarang juga!</p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById("form-pendaftaran-beasiswa")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-[#2563EB] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-blue-600/20 hover:shadow-blue-600/40 transition-all w-full md:w-auto min-w-[200px] cursor-pointer"
          >
            DAFTAR SEKARANG
          </motion.button>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="relative w-full max-w-lg md:max-w-2xl mt-auto">
          {/* Main Image */}
          <div className="relative w-full h-[400px] md:h-[550px]">
            <Image src="/assets/transparant/1.png" alt="Student" fill className="object-contain object-bottom drop-shadow-2xl" priority />
          </div>

          {/* Floating Badges - Repositioned for the new layout */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-0 md:-left-4 bg-slate-800/90 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-slate-700"
          >
            <MessageCircle className="text-[#1BB6E9] w-8 h-8" strokeWidth={1.5} />
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-1/3 right-0 md:-right-4 bg-slate-800/90 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-slate-700"
          >
            <CheckCircle className="text-[#1BB6E9] w-8 h-8" strokeWidth={1.5} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
