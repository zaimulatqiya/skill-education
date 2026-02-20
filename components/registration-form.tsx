"use client";

import { useState } from "react";
import { User, MapPin, Calendar, Phone, ChevronDown, Loader2, Hash, BookOpen, Clock } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLandingPageLinks } from "@/hooks/use-landing-page-links";
import { pricingData } from "@/lib/pricing-data";

interface RegistrationFormProps {
  source?: "beasiswa" | "toefl-online" | "default";
}

export function RegistrationForm({ source = "default" }: RegistrationFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    birthPlace: "",
    birthDate: "",
    whatsapp: "",
    age: "",
    programPackage: "",
    startPeriod: "",
  });
  const [loading, setLoading] = useState(false);

  const { links } = useLandingPageLinks();
  const programPackages = links?.pricing?.program_packages || pricingData;

  const getProgramOptions = () => {
    if (source === "beasiswa") {
      return programPackages.map((pkg) => `Paket - ${pkg.title}`);
    }
    if (source === "toefl-online") {
      return ["TOEFL Basic Class (Rp 99.000)", "TOEFL Intensive Class", "TOEFL Private Class"];
    }
    return ["Program Reguler", "Program Intensive", "Program Private"];
  };

  const getStartPeriodOptions = () => {
    if (links?.schedules && links.schedules.length > 0) {
      // Filter schedules based on program source match with program_type
      const filteredSchedules = links.schedules.filter((schedule) => {
        // Assume default to toefl if no program type is provided in DB, or if source doesn't match beasiswa
        const type = schedule.program_type || "toefl";
        if (source === "beasiswa") return type === "beasiswa";
        return type === "toefl";
      });

      if (filteredSchedules.length > 0) {
        return filteredSchedules.map((schedule) => schedule.day + " " + schedule.month + " " + schedule.year);
      }
    }

    // Generate simple dynamic period options or static ones if no data
    return ["Periode 10 - Bulan Ini", "Periode 25 - Bulan Ini", "Periode 10 - Bulan Depan", "Periode 25 - Bulan Depan"];
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate network request
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Form submitted:", formData);

    let intro = "Halo admin, saya ingin mendaftar.";
    if (source === "beasiswa") {
      intro = "Halo admin, saya ingin mendaftar Program Beasiswa 50% Kampung Inggris.";
    } else if (source === "toefl-online") {
      intro = "Halo admin, saya ingin mendaftar Kelas TOEFL Online.";
    } else {
      intro = "Halo, saya ingin mendaftar Program Skill Education.";
    }

    const ageStr = source === "beasiswa" ? `\nUsia: ${formData.age} tahun` : "";
    const programStr = source === "toefl-online" ? "" : `\n\nProgram Pilihan: ${formData.programPackage}`;
    const message = `${intro}\n\nBiodata saya:\nNama: ${formData.fullName}${ageStr}\nTempat Lahir: ${formData.birthPlace}\nTanggal Lahir: ${formData.birthDate}\nWhatsApp: ${formData.whatsapp}${programStr}\nMulai Belajar: ${formData.startPeriod}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/6289521116925?text=${encodedMessage}`;

    // Track Lead event
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "Lead");
    }

    setLoading(false);

    // Reset form for security
    setFormData({
      fullName: "",
      birthPlace: "",
      birthDate: "",
      whatsapp: "",
      age: "",
      programPackage: "",
      startPeriod: "",
    });

    window.open(whatsappUrl, "_blank");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="w-full mx-auto text-left">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Nama Lengkap */}
        <div className="md:col-span-2 space-y-2 text-left">
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

        {/* Usia */}
        {source === "beasiswa" && (
          <div className="md:col-span-2 space-y-2 text-left">
            <label className="block text-sm font-medium text-foreground/80 ml-1">Usia</label>
            <div className="relative group">
              <div className="absolute left-4 top-3.5 text-muted-foreground group-focus-within:text-primary transition-colors">
                <Hash size={18} />
              </div>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
                min="0"
                max="100"
                className="w-full bg-background/50 border border-input rounded-xl py-3 pl-11 pr-4 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                placeholder="Usia Anda"
              />
            </div>
          </div>
        )}

        {/* Paket Program (Dropdown) */}
        {source !== "toefl-online" && (
          <div className="md:col-span-2 space-y-2 text-left">
            <label className="block text-sm font-medium text-foreground/80 ml-1">Paket Program</label>
            <div className="relative group">
              <div className="absolute left-4 top-3.5 z-10 text-muted-foreground group-focus-within:text-primary transition-colors">
                <BookOpen size={18} />
              </div>
              <Select name="programPackage" value={formData.programPackage} onValueChange={(value) => setFormData((prev) => ({ ...prev, programPackage: value }))} required>
                <SelectTrigger className="w-full bg-background/50 border border-input rounded-xl py-6 pl-11 pr-4 text-foreground focus:ring-1 focus:ring-primary/50 transition-all">
                  <SelectValue placeholder="Pilih Paket Program" />
                </SelectTrigger>
                <SelectContent position="popper">
                  {getProgramOptions().map((option, idx) => (
                    <SelectItem key={idx} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        )}

        {/* Start Pembelajaran (Dropdown) */}
        <div className="md:col-span-2 space-y-2 text-left">
          <label className="block text-sm font-medium text-foreground/80 ml-1">Start Pembelajaran</label>
          <div className="relative group">
            <div className="absolute left-4 top-3.5 z-10 text-muted-foreground group-focus-within:text-primary transition-colors">
              <Clock size={18} />
            </div>
            <Select name="startPeriod" value={formData.startPeriod} onValueChange={(value) => setFormData((prev) => ({ ...prev, startPeriod: value }))} required>
              <SelectTrigger className="w-full bg-background/50 border border-input rounded-xl py-6 pl-11 pr-4 text-foreground focus:ring-1 focus:ring-primary/50 transition-all">
                <SelectValue placeholder="Pilih Jadwal Mulai" />
              </SelectTrigger>
              <SelectContent position="popper">
                {getStartPeriodOptions().map((option, idx) => (
                  <SelectItem key={idx} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* WhatsApp */}
        <div className="md:col-span-2 space-y-2 text-left">
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

        <div className="pt-4 md:col-span-2">
          <button
            type="submit"
            disabled={
              loading || !formData.fullName || (source === "beasiswa" && !formData.age) || (source !== "toefl-online" && !formData.programPackage) || !formData.startPeriod || !formData.birthPlace || !formData.birthDate || !formData.whatsapp
            }
            className={`w-full font-bold py-4 rounded-xl shadow-lg transition-all duration-200 flex items-center justify-center ${
              loading || !formData.fullName || (source === "beasiswa" && !formData.age) || (source !== "toefl-online" && !formData.programPackage) || !formData.startPeriod || !formData.birthPlace || !formData.birthDate || !formData.whatsapp
                ? "bg-slate-200 text-slate-400 cursor-not-allowed shadow-none"
                : "bg-[#2563EB] hover:bg-blue-700 text-white shadow-blue-600/20 hover:shadow-blue-600/30 transform hover:-translate-y-0.5 cursor-pointer active:scale-[0.98]"
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
          <p className="text-center text-xs text-muted-foreground mt-4">Demi keamanan data Anda, form akan otomatis di-reset setelah dialihkan ke WhatsApp.</p>
        </div>
      </form>
    </div>
  );
}
