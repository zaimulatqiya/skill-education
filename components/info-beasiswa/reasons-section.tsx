"use client";

import { motion } from "framer-motion";
import { Wallet, Smile, GraduationCap, Users, Award, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";

const reasons = [
  {
    icon: Wallet,
    title: "Biaya Terjangkau",
    description: "Nikmati fasilitas belajar terbaik dengan biaya yang sangat ramah di kantong pelajar.",
  },
  {
    icon: Smile,
    title: "Metode & Seru",
    description: "Belajar bahasa Inggris jadi lebih mudah dan menyenangkan tanpa rasa bosan.",
  },
  {
    icon: GraduationCap,
    title: "Tutor Expert",
    description: "Dibimbing langsung oleh tutor berpengalaman yang asik dan profesional.",
  },
  {
    icon: Users,
    title: "Teman Se-Indonesia",
    description: "Perluas relasi dengan teman-teman baru dari berbagai daerah di Indonesia.",
  },
  {
    icon: Globe,
    title: "English Area",
    description: "Lingkungan wajib berbahasa Inggris untuk mempercepat kelancaran bicaramu.",
  },
  {
    icon: Award,
    title: "Sertifikat Resmi",
    description: "Dapatkan sertifikat yang diakui dan bisa digunakan untuk kebutuhan karirmu.",
  },
];

export function ReasonsSection() {
  return (
    <section className="py-12 px-4 md:px-6 bg-slate-50 overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="text-[#1BB6E9] font-semibold text-sm tracking-uppercase mb-2 block">WHY CHOOSE US?</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Alasan kenapa harus belajar di <br />
            <span className="text-[#0D5BD7]">Kampung Inggris?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-rotate-1"
            >
              <Card className="p-6 h-full text-white rounded-2xl border border-white/20 bg-[#2563EB] shadow-2xl relative backdrop-blur-xl overflow-hidden hover:border-white/40 hover:shadow-blue-500/20 hover:shadow-3xl">
                {/* Background Animations */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                  <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-gradient-to-tr from-blue-300/30 to-transparent blur-3xl opacity-30 group-hover:opacity-50 transform group-hover:scale-110 transition-all duration-700 animate-bounce"></div>
                  <div className="absolute top-10 left-10 w-16 h-16 rounded-full bg-white/10 blur-xl animate-ping"></div>
                  <div className="absolute bottom-16 right-16 w-12 h-12 rounded-full bg-white/10 blur-lg animate-ping"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  <div className="relative mb-4 flex-shrink-0 self-start">
                    {/* Simplified Icon Container to match size request */}
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <reason.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <h3 className="mb-2 text-xl font-bold bg-clip-text text-white animate-pulse transform group-hover:scale-105 transition-transform duration-300 origin-left">{reason.title}</h3>

                  <div className="space-y-1 mb-4 flex-grow">
                    <p className="text-blue-100 text-sm leading-relaxed transform group-hover:text-white transition-colors duration-300">{reason.description}</p>
                  </div>

                  {/* Decorative Elements */}
                  <div className="mt-auto w-1/3 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent rounded-full transform group-hover:w-1/2 group-hover:h-1.5 transition-all duration-500 animate-pulse"></div>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-white/10 to-transparent rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
