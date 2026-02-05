"use client";

import { motion } from "framer-motion";
import { ArrowDown, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { RegistrationModal } from "@/components/registration-modal";

// Placeholder for user avatars
const avatars = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=64&h=64&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=64&h=64&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=64&h=64&auto=format&fit=crop",
];

export function CTASection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative py-12 px-4 md:px-6 bg-slate-50 overflow-hidden">
      {/* Floating Decorative Elements (Avatars) */}

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white rounded-[3rem] p-8 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.05)] text-center relative overflow-hidden"
        >
          {/* Badge */}
          <div className="inline-block bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider mb-6">BERGABUNG SEKARANG</div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">Tunggu apa lagi? Daftar sekarang</h2>

          <p className="text-slate-500 mb-8 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">Dapatkan akses penuh ke fitur eksklusif dan bergabunglah dengan komunitas profesional yang terus berkembang setiap harinya.</p>

          {/* Arrows Decoration */}
          <div className="flex justify-center gap-2 mb-8 text-blue-500">
            <ArrowDown className="w-10 h-10 md:w-10 md:h-10 animate-bounce" />
            <ArrowDown className="w-10 h-10 md:w-10 md:h-10 animate-bounce delay-100" />
            <ArrowDown className="w-10 h-10 md:w-10 md:h-10 animate-bounce delay-200" />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsModalOpen(true)}
            className="bg-[#2563EB] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-blue-600/20 hover:shadow-blue-600/40 transition-all w-full md:w-auto min-w-[200px] cursor-pointer"
          >
            DAFTAR SEKARANG
          </motion.button>
        </motion.div>

        <RegistrationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

        <div className="mt-8 text-center">
          <p className="text-slate-400 text-sm">Gratis pendaftaran. Tidak perlu kartu kredit. Batalkan kapan saja.</p>
        </div>
      </div>
    </section>
  );
}
