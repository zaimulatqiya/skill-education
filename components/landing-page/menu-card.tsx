import Link from "next/link";
import { ChevronRight, LucideIcon } from "lucide-react";

export interface MenuCardProps {
  href: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  iconColorClass?: string;
  iconBgClass?: string;
  hoverIconBgClass?: string;
  hoverTextClass?: string;
  hoverIconTextClass?: string;
  hoverBorderClass?: string;
}

export function MenuCard({ href, icon: Icon, title, subtitle, iconColorClass, iconBgClass, hoverIconBgClass, hoverTextClass, hoverIconTextClass, hoverBorderClass }: MenuCardProps) {
  return (
    <Link href={href} className={`group relative flex items-center p-4 pr-5 rounded-xl bg-slate-900/40 border border-slate-800 hover:bg-slate-800/60 transition-all duration-300 backdrop-blur-sm ${hoverBorderClass}`}>
      <div className={`flex items-center justify-center w-12 h-12 rounded-lg ${iconBgClass} ${iconColorClass} ${hoverIconBgClass} group-hover:scale-110 transition-all duration-300 mr-5 shrink-0`}>
        <Icon className="w-6 h-6" />
      </div>

      <div className="flex-grow">
        <h3 className={`text-lg font-medium text-slate-100 ${hoverTextClass} transition-colors`}>{title}</h3>
        <p className="text-sm text-slate-500 group-hover:text-slate-400">{subtitle}</p>
      </div>

      <div className={`text-slate-600 ${hoverIconTextClass} group-hover:translate-x-1 transition-all`}>
        <ChevronRight className="w-5 h-5" />
      </div>
    </Link>
  );
}
