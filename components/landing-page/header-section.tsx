import Image from "next/image";

export function HeaderSection() {
  return (
    <div className="flex flex-col items-center mb-6 group cursor-default">
      <div className="relative mb-6 transition-all duration-500 hover:scale-105">
        <Image src="/assets/logo SE.png" alt="Skill Education Logo" width={224} height={224} className="object-contain" priority />
      </div>

      <div className="text-center mb-6 space-y-2">
        <h2 className="text-blue-400 font-bold uppercase tracking-widest text-sm md:text-base">
          By Mr. Language
          <br />
          <span className="text-white font-medium normal-case">Lembaga Kursus dan Pelatihan Bahasa Inggris</span>
        </h2>
      </div>

      <h2 className="text-blue-400 font-bold tracking-widest text-sm uppercase mb-3 text-center">Situs Resmi Informasi dan Pendaftaran Kampung Inggris </h2>
    </div>
  );
}
