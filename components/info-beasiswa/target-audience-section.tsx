"use client";

import { motion } from "framer-motion";

const targets = ["Pelajar", "Guru", "Pejuang BUMN", "Gap Year", "Mahasiswa", "Umum"];

export function TargetAudienceSection() {
  return (
    <section className="py-16 px-4 md:px-6 bg-slate-50">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-10">Sangat cocok diikuti oleh:</h2>

        <div className="flex flex-wrap justify-center gap-4">
          {targets.map((target, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 bg-white border border-slate-200 rounded-full text-slate-700 font-medium shadow-sm hover:shadow-md hover:border-[#1BB6E9] hover:text-[#1BB6E9] transition-all cursor-pointer"
            >
              {target}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
