"use client";

import React, { useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const images = [
  {
    src: "/assets/gallery/foto6.jpg",
    alt: "Hunian Strategis Modern",
  },
  {
    src: "/assets/gallery/foto7.jpg",
    alt: "Kamar Tidur yang Nyaman",
  },
  {
    src: "/assets/gallery/foto8.jpg",
    alt: "Parkir Luas Teratur",
  },
  {
    src: "/assets/gallery/foto1.jpg",
    alt: "Lingkungan Aman dan Nyaman",
  },
  {
    src: "/assets/gallery/foto2.jpg",
    alt: "Ruang Santai",
  },
  {
    src: "/assets/gallery/foto10.jpg",
    alt: "Sanitasi Bersih dan Terawat",
  },
  {
    src: "/assets/gallery/foto3.jpg",
    alt: "Komunitas Pembelajar MR.Languange",
  },
  {
    src: "/assets/gallery/foto4.jpg",
    alt: "Belajar Seru Berkualitas",
  },
];

export function DormSection() {
  const [currentIndex, setCurrentIndex] = useState(2); // Start at middle

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }, []);

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(timer);
  }, [handleNext]);

  return (
    <section className="py-12 px-4 md:px-6 bg-slate-50 overflow-hidden">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">Asrama & Suasana Kelas</h2>
        <p className="text-slate-500 mb-12">Fasilitas penunjang kenyamanan belajar siswa</p>

        {/* Carousel Container */}
        <div className="relative w-full h-[300px] md:h-[450px] flex items-center justify-center perspective-1000">
          <div className="relative w-full h-full flex items-center justify-center [perspective:1000px]">
            {images.map((image, index) => {
              const offset = index - currentIndex;
              const total = images.length;

              // Calculate effective position for wrap-around
              let pos = (offset + total) % total;
              // Center logic: wrap positions > half total to negative
              if (pos > Math.floor(total / 2)) {
                pos = pos - total;
              }

              const isCenter = pos === 0;
              const isAdjacent = Math.abs(pos) === 1;

              // Hide far away items for cleaner look
              const isVisible = Math.abs(pos) <= 2;

              return (
                <motion.div
                  key={index}
                  className={cn(
                    "absolute transition-all duration-500 ease-in-out",
                    "flex items-center justify-center rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-slate-200",
                    // Landscape Dimensions
                    "w-[280px] h-[180px] md:w-[600px] md:h-[350px]",
                  )}
                  style={{
                    zIndex: isCenter ? 20 : isAdjacent ? 10 : 1,
                    // Manual interpolation for better control over CSS variables or just inline styles
                  }}
                  animate={{
                    // Use X axis for spread, change scale based on distance
                    x: `${pos * 55}%`, // Spacing factor
                    scale: isCenter ? 1 : isAdjacent ? 0.8 : 0.6,
                    opacity: isCenter ? 1 : isAdjacent ? 0.6 : 0,
                    filter: isCenter ? "blur(0px)" : "blur(2px)",
                    rotateY: 0, // Keep flat for cleaner landscape look, or add small rotation
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                  }}
                >
                  <div className="relative w-full h-full">
                    <Image src={image.src} alt={image.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                    {/* Caption Overlay */}
                    {isCenter && (
                      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4 text-white text-left opacity-0 animate-fade-in opacity-100 transition-opacity duration-300 delay-200">
                        <p className="font-semibold text-sm md:text-lg">{image.alt}</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Controls */}
          <button
            onClick={handlePrev}
            className="absolute left-0 md:left-10 w-12 h-12 rounded-full bg-white/80 hover:bg-white text-slate-800 flex items-center justify-center shadow-lg z-30 transition-all hover:scale-110"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 md:right-10 w-12 h-12 rounded-full bg-white/80 hover:bg-white text-slate-800 flex items-center justify-center shadow-lg z-30 transition-all hover:scale-110"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
