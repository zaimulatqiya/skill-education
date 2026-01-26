import Link from "next/link";
import { Instagram, Youtube, LucideIcon } from "lucide-react";

interface SocialItemProps {
  href: string;
  icon: LucideIcon | React.ElementType;
  className: string;
}

function SocialLink({ href, icon: Icon, className }: SocialItemProps) {
  return (
    <Link href={href} className={`hover:scale-110 transition-all duration-300 ${className}`}>
      <Icon className="w-7 h-7" />
    </Link>
  );
}

export function SocialLinks() {
  return (
    <div className="mt-12 flex items-center gap-6">
      {/* Instagram: Pink default on mobile, Hover pink on desktop */}
      <SocialLink href="#" icon={Instagram} className="text-pink-500 sm:text-slate-500 sm:hover:text-pink-500" />

      {/* Tiktok: White default on mobile, Hover white on desktop */}
      <Link href="#" className="text-white sm:text-slate-500 sm:hover:text-white hover:scale-110 transition-all duration-300">
        <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
        </svg>
      </Link>

      {/* Youtube: Red default on mobile, Hover red on desktop */}
      <SocialLink href="#" icon={Youtube} className="text-red-500 sm:text-slate-500 sm:hover:text-red-500" />
    </div>
  );
}
