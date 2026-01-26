import Image from "next/image";

export function HeaderSection() {
  return (
    <div className="flex flex-col items-center mb-6 group cursor-default">
      <div className="relative mb-12 transition-all duration-500 hover:scale-105">
        <Image src="/assets/logo SE.png" alt="Skill Education Logo" width={224} height={224} className="object-contain" priority />
      </div>

      <h2 className="text-blue-400 font-bold tracking-widest text-sm uppercase mb-3 text-center">Situs Resmi Informasi dan Pendaftaran Kampung Inggris </h2>
    </div>
  );
}
