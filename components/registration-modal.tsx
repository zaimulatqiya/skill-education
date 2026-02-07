"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, User, MapPin, Calendar, Phone, ChevronDown, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RegistrationModal({ isOpen, onClose }: RegistrationModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    birthPlace: "",
    birthDate: "",
    whatsapp: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate network request
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Handle form submission logic here
    console.log("Form submitted:", formData);

    // Construct WhatsApp message
    const message = `Halo, saya ingin mendaftar TOEFL Prediction.\n\nData Diri:\nNama: ${formData.fullName}\nTempat Lahir: ${formData.birthPlace}\nTanggal Lahir: ${formData.birthDate}\nWhatsApp: ${formData.whatsapp}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/6289521116925?text=${encodedMessage}`; // Replace number with actual one if known, using placeholder

    // Track Lead event
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "Lead");
    }

    setLoading(false);
    window.open(whatsappUrl, "_blank");
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg bg-card border border-primary/20 rounded-3xl shadow-2xl overflow-hidden"
            >
              {/* Decorative Header Background */}
              <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />

              {/* Close Button */}
              <button onClick={onClose} className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-muted-foreground hover:text-foreground transition-colors z-20 cursor-pointer">
                <X size={20} />
              </button>

              <div className="p-8 relative z-10">
                <div className="text-center mb-8">
                  <Image src="/assets/logo-2.png" alt="Logo" width={72} height={72} className="w-20 h-20 mx-auto mb-4 object-contain" />
                  <h2 className="text-2xl font-bold text-foreground mb-2">Formulir Pendaftaran</h2>
                  <p className="text-muted-foreground text-sm">Silahkan isi data diri Anda dengan benar</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Nama Lengkap */}
                  <div className="space-y-2 text-left">
                    <label className="block text-sm font-medium text-foreground/80 ml-1">Nama Lengkap</label>
                    <div className="relative group">
                      <div className="absolute left-4 top-3.5 text-muted-foreground group-focus-within:text-primary transition-colors">
                        <User size={18} />
                      </div>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="w-full bg-background/50 border border-input rounded-xl py-3 pl-11 pr-4 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                        placeholder="Nama lengkap sesuai KTP"
                      />
                    </div>
                  </div>

                  {/* Tempat Kelahiran */}
                  <div className="space-y-2 text-left">
                    <label className="block text-sm font-medium text-foreground/80 ml-1">Tempat Kelahiran</label>
                    <div className="relative group">
                      <div className="absolute left-4 top-3.5 text-muted-foreground group-focus-within:text-primary transition-colors">
                        <MapPin size={18} />
                      </div>
                      <input
                        type="text"
                        name="birthPlace"
                        value={formData.birthPlace}
                        onChange={handleChange}
                        required
                        className="w-full bg-background/50 border border-input rounded-xl py-3 pl-11 pr-4 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                        placeholder="Kota kelahiran"
                      />
                    </div>
                  </div>

                  {/* Tanggal Lahir */}
                  <div className="space-y-2 text-left">
                    <label className="block text-sm font-medium text-foreground/80 ml-1">Tanggal Lahir</label>
                    <div className="relative group">
                      <div className="absolute left-4 top-3.5 text-muted-foreground group-focus-within:text-primary transition-colors">
                        <Calendar size={18} />
                      </div>
                      <input
                        type="date"
                        name="birthDate"
                        value={formData.birthDate}
                        onChange={handleChange}
                        required
                        onClick={(e) => (e.target as HTMLInputElement).showPicker?.()}
                        className="w-full appearance-none bg-background/50 border border-input rounded-xl py-3 pl-11 pr-10 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-inner-spin-button]:hidden [&::-webkit-clear-button]:hidden cursor-pointer"
                      />
                      <div className="absolute right-4 top-3.5 text-muted-foreground pointer-events-none group-focus-within:text-primary transition-colors">
                        <ChevronDown size={18} />
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="space-y-2 text-left">
                    <label className="block text-sm font-medium text-foreground/80 ml-1">Nomer WhatsApp</label>
                    <div className="relative group">
                      <div className="absolute left-4 top-3.5 text-muted-foreground group-focus-within:text-primary transition-colors">
                        <Phone size={18} />
                      </div>
                      <input
                        type="tel"
                        name="whatsapp"
                        value={formData.whatsapp}
                        onChange={handleChange}
                        required
                        className="w-full bg-background/50 border border-input rounded-xl py-3 pl-11 pr-4 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                        placeholder="Contoh: 08123456789"
                      />
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={loading || !formData.fullName || !formData.birthPlace || !formData.birthDate || !formData.whatsapp}
                      className={`w-full font-bold py-4 rounded-xl shadow-lg transition-all duration-200 flex items-center justify-center ${
                        loading || !formData.fullName || !formData.birthPlace || !formData.birthDate || !formData.whatsapp
                          ? "bg-muted text-muted-foreground cursor-not-allowed shadow-none"
                          : "bg-primary hover:bg-primary/90 text-primary-foreground shadow-primary/20 hover:shadow-primary/30 transform hover:-translate-y-0.5 cursor-pointer active:scale-[0.98]"
                      }`}
                    >
                      {loading ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Memproses...
                        </>
                      ) : (
                        "Kirim Pendaftaran"
                      )}
                    </button>
                    <p className="text-center text-xs text-muted-foreground mt-4">Data Anda aman dan hanya digunakan untuk keperluan pendaftaran.</p>
                  </div>
                </form>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
