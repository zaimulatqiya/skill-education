"use client";

import { motion } from "framer-motion";
import { MapPin, ExternalLink } from "lucide-react";

export function LocationSection() {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] bg-[#0B1221] overflow-hidden">
      {/* Google Maps Embed Background */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15814.995393285746!2d112.1646279!3d-7.7675762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e785cf0887e0767%3A0xe962534f3ad46870!2sKampung%20Inggris%20Pare!5e0!3m2!1sid!2sid!4v1706346782392!5m2!1sid!2sid"
        width="100%"
        height="100%"
        className="absolute inset-0 border-0 filter grayscale-[20%] opacity-80 md:opacity-100" // Slightly dimmed on mobile for better overlay visibility
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Map Location"
      />

      {/* Floating Info Overlay */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none p-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative pointer-events-auto bg-white/90 backdrop-blur-md border border-white/20 p-6 md:p-8 rounded-3xl shadow-2xl max-w-sm md:max-w-md w-full text-center hover:scale-105 transition-transform duration-300"
        >
          {/* Decorative Pulse Ring */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-25 h-12 w-12"></div>
              <div className="bg-blue-600 rounded-full h-12 w-12 flex items-center justify-center border-4 border-white shadow-lg z-10 relative">
                <MapPin className="w-6 h-6 text-white" fill="currentColor" />
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col items-center">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">Kampung Inggris</h3>
            <p className="text-slate-600 font-medium mb-1">Pare, Kediri, Jawa Timur</p>
            <p className="text-slate-500 text-sm mb-6">Pusat pembelajaran bahasa terbesar di Indonesia</p>

            <a
              href="https://maps.app.goo.gl/j4VstBCNcCwynLtX9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all shadow-lg hover:shadow-blue-500/30 active:scale-95 group"
            >
              <span>Buka di Google Maps</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
