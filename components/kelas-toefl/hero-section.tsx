"use client";

import React from "react";
import Image from "next/image";
import { ScrollButton } from "@/components/scroll-button";
import { ArrowRight, ArrowDownRight, Trophy, CheckCircle2 } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative pt-12 lg:pt-24 pb-0 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-transparent to-transparent"></div>

      <div className="container px-4 mx-auto text-center relative z-10 flex flex-col items-center">
        <Image src="/assets/logo-2.png" alt="Study TOEFL Logo" width={400} height={150} className="mx-auto mb-6 h-24 md:h-32 w-auto object-contain" priority />

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-foreground mb-6 max-w-4xl mx-auto leading-tight">
          KELAS TOEFL ONLINE <br /> <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">CUMA 99RB AJA</span>
        </h1>

        <h2 className="text-xl md:text-2xl font-medium text-muted-foreground mb-4 max-w-2xl mx-auto">Kuasai TOEFL Dengan Bimbingan Terarah.</h2>

        <p className="text-base md:text-lg text-muted-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed">Belajar TOEFL jadi lebih mudah, terarahkan, dan menyenangkan. Siap untuk Mendapatkan Kuliah, Beasiswa, atau Pekerjaan Impian.</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center relative z-20 mb-4 sm:mb-6">
          <ScrollButton targetId="daftar-sekarang" size="lg" className="group rounded-full px-8 text-lg h-12 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-150 cursor-pointer hover:scale-105 active:scale-90">
            DAFTAR SEKARANG
            <ArrowRight className="ml-2 w-5 h-5 group-hover:hidden" />
            <ArrowDownRight className="ml-2 w-5 h-5 hidden group-hover:block" />
          </ScrollButton>
        </div>

        <div className="relative w-full max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto h-[300px] md:h-[400px] lg:h-[500px] flex items-end justify-center z-10 mt-0">
          {/* Background Glow */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-[60%] bg-gradient-to-t from-primary/20 to-transparent blur-3xl rounded-full pointer-events-none"></div>

          {/* Floating Elements Left */}
          <div className="absolute -left-4 sm:-left-12 top-[10%] sm:top-[20%] z-20 animate-bounce duration-[3000ms]">
            <div className="bg-background/80 backdrop-blur-md border border-primary/20 shadow-lg shadow-primary/10 rounded-2xl p-2 sm:p-3 flex items-center gap-2 sm:gap-3 scale-90 sm:scale-100 origin-left">
              <div className="bg-primary/10 p-1.5 sm:p-2 rounded-full">
                <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-primary fill-primary/20" />
              </div>
              <div className="hidden sm:block text-left">
                <p className="text-[10px] sm:text-xs text-muted-foreground font-medium">Platform Belajar</p>
                <p className="text-xs sm:text-sm font-bold text-foreground">Terbaik #1</p>
              </div>
            </div>
          </div>

          {/* Floating Elements Right */}
          <div className="absolute -right-4 sm:-right-8 bottom-[20%] z-20 animate-bounce duration-[3000ms]">
            <div className="bg-background/80 backdrop-blur-md border border-green-500/20 shadow-lg shadow-green-500/10 rounded-2xl p-2 sm:p-3 flex items-center gap-2 sm:gap-3 scale-90 sm:scale-100 origin-right">
              <div className="bg-green-500/10 p-1.5 sm:p-2 rounded-full">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
              </div>
              <div className="hidden sm:block text-left">
                <p className="text-[10px] sm:text-xs text-muted-foreground font-medium">Qualified</p>
                <p className="text-xs sm:text-sm font-bold text-foreground">Tutor Expert</p>
              </div>
            </div>
          </div>

          <div className="relative w-full h-full">
            <Image
              src="/assets/transparant/9.png"
              alt="Ilustrasi Kelas TOEFL"
              fill
              className="object-contain object-bottom relative z-10 drop-shadow-[0_20px_50px_rgba(37,99,235,0.3)] hover:scale-105 transition-transform duration-500"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
