"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Star, Sparkles } from "lucide-react";
import Image from "next/image";

const facilities = ["Program Super Intensive 1 Bulan", "Asrama English Area 24 Jam", "Modul Belajar Eksklusif", "Sertifikat Terakreditasi", "Merchandise & Kaos Eksklusif", "Pendampingan Tutor Professional"];

export function FacilitiesSection() {
  return (
    <section className="pt-12 pb-0 px-4 md:px-6 bg-[#2563EB] text-white overflow-hidden relative">
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Fasilitas apa yang akan didapatkan?</h2>
        </div>

        {/* Updated Layout: Flex-col-reverse for Mobile (List Top, Image Bottom), Row for Desktop */}
        <div className="flex flex-col-reverse md:flex-row items-center md:items-end justify-center gap-12 max-w-6xl mx-auto">
          {/* Image Side - Sticking to Bottom */}
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="relative w-full max-w-sm md:max-w-md h-[400px] md:h-[500px] flex-shrink-0 mt-auto">
            {/* --- Decorative Elements --- */}

            {/* 1. Large Organic Blob */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-[80%] bg-gradient-to-tr from-white/10 to-white/5 rounded-[40%_60%_70%_30%_/_40%_50%_60%_50%] blur-sm border border-white/10 animate-[morph_8s_ease-in-out_infinite] z-0" />

            {/* 2. Thin Outline Circles (Ripples) */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[300px] h-[300px] md:w-[450px] md:h-[450px] border border-white/10 rounded-full z-0 pointer-events-none" />
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-[220px] h-[220px] md:w-[350px] md:h-[350px] border border-white/10 border-dashed rounded-full z-0 pointer-events-none animate-[spin_20s_linear_infinite]" />

            {/* 3. Floating Icons (Scattered) */}
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-20 right-4 md:right-8 z-10 p-2 bg-white/20 backdrop-blur-md rounded-xl border border-white/20 shadow-lg"
            >
              <Star className="w-6 h-6 text-yellow-300 fill-yellow-300" />
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              className="absolute top-32 left-4 md:left-8 z-10 p-2 bg-white/20 backdrop-blur-md rounded-full border border-white/20 shadow-lg"
            >
              <Sparkles className="w-5 h-5 text-blue-200" />
            </motion.div>

            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }} className="absolute bottom-1/3 -left-2 md:-left-6 z-10 bg-white/20 backdrop-blur-md text-white rounded-full p-1.5 shadow-xl">
              <CheckCircle2 className="w-5 h-5" />
            </motion.div>

            <div className="absolute top-10 left-1/2 w-4 h-4 border-2 border-yellow-300/50 rounded-full z-0" />

            {/* Main Image */}
            <div className="relative w-full h-full z-10">
              <Image src="/assets/transparant/2.png" alt="Facilities" fill className="object-contain object-bottom drop-shadow-2xl scale-110 origin-bottom" />
            </div>
          </motion.div>

          {/* List Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 md:gap-y-6 w-full mb-0 md:mb-32 relative z-10 pb-8 md:pb-0">
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-colors group cursor-default"
              >
                <div className="bg-white/20 p-1.5 rounded-full group-hover:scale-110 transition-transform flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-[#fbbf24]" />
                </div>
                <span className="font-medium text-sm md:text-base">{facility}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
