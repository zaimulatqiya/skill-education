"use client";

import { motion } from "framer-motion";
import { ShieldCheckIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useLandingPageLinks } from "@/hooks/use-landing-page-links";
import { div } from "framer-motion/client";

import { pricingData } from "@/lib/pricing-data";

export function PricingSection() {
  const { links } = useLandingPageLinks();

  return (
    <section className="relative overflow-hidden py-12 bg-white">
      <div className="mx-auto w-full max-w-6xl space-y-5 px-4 font-sans">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mx-auto max-w-xl space-y-5 text-center relative z-10 mb-12"
        >
          <div className="flex justify-center">
            <Badge variant="secondary" className="px-4 py-1 text-blue-600 bg-blue-50 font-bold uppercase tracking-wider border-blue-100">
              Special Offer
            </Badge>
          </div>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl text-slate-900">Biaya Program</h2>
          <p className="text-slate-500 text-sm md:text-base">Investasi terbaik untuk masa depanmu dengan harga yang sangat terjangkau.</p>
        </motion.div>

        {/* Pricing Grid Background */}
        <div className="relative">
          {/* Grid Background Pattern */}
          <div
            className={cn(
              "pointer-events-none absolute inset-0 size-full z-0",
              "bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)]",
              "bg-[size:32px_32px]",
              "[mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)] opacity-40",
            )}
          />

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} viewport={{ once: true }} className="mx-auto w-full max-w-6xl relative z-10">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {links?.pricing?.program_packages?.map((plan) => (
                <div key={plan.id} className={cn("bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 hover:shadow-2xl hover:border-blue-200 transition duration-300 group", plan.is_best_value ? "relative" : "")}>
                  {plan.is_best_value && <div className="absolute top-0 right-0 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-bl-lg z-10">BEST VALUE</div>}

                  <div className="bg-blue-600 p-6 text-center group-hover:bg-blue-700 transition">
                    <h4 className="text-white text-xl font-semibold">{plan.title}</h4>
                  </div>

                  <div className="p-8 text-center bg-white">
                    <p className="text-red-400 line-through text-lg font-medium mb-1">
                      {new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(plan.original_price)}
                    </p>
                    <p className="text-slate-900 text-3xl font-bold tracking-tight">{new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(plan.price)}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-slate-500 flex items-center justify-center gap-x-2 text-sm bg-blue-50/50 py-2 px-4 rounded-full w-fit mx-auto border border-blue-100">
              <ShieldCheckIcon className="size-4 text-blue-600" />
              <span>Garansi fasilitas terbaik & pembelajaran intensif</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
