import { BackgroundEffects } from "@/components/landing-page/background-effects";
import { HeaderSection } from "@/components/landing-page/header-section";
import { MenuCard } from "@/components/landing-page/menu-card";
import { SocialLinks } from "@/components/landing-page/social-links";
import { FooterSection } from "@/components/landing-page/footer-section";
import { MENU_ITEMS } from "@/lib/data";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#02040a] text-slate-300 p-6 pt-12 sm:p-12 relative overflow-hidden selection:bg-blue-500/30 selection:text-blue-200 font-sans">
      {/* Background Ambient Effects */}
      <BackgroundEffects />

      <main className="flex-grow flex flex-col items-center justify-center w-full max-w-lg mx-auto relative z-10">
        {/* Logo Section */}
        <HeaderSection />

        {/* Links Section */}
        <nav className="w-full space-y-4">
          {MENU_ITEMS.map((item, index) => (
            <MenuCard key={index} {...item} />
          ))}
        </nav>

        {/* Legal Info */}
        <div className="w-full text-center mt-6 mb-2">
          <p className="text-[10px] sm:text-xs text-white/60 font-mono tracking-tight">
            NPSN : K16907839 <span className="mx-2">|</span> SK DIKNAS No : 421.9/4657/418.20/2024
          </p>
        </div>

        {/* Social Media Section */}
        <SocialLinks />

        {/* Footer */}
        <FooterSection />
      </main>
    </div>
  );
}
