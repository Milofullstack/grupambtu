"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { cloudImage } from "@/lib/cloudinary";

const words = [
  "impacto social",
  "compromiso real",
  "propósito",
  "responsabilidad",
];

export default function ProjectsIntro() {
    const imageUrl = cloudImage("edificio1_qtgpsu")
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500); 
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full min-h-svh flex items-center py-20 bg-[bg-[#f8f6f2]">
      <div className="max-w-7xl w-full mx-auto px-8 md:px-24 flex flex-col gap-10">
              <div className="absolute inset-0 -z-10">
                <Image src={imageUrl} alt="grupambtu" fill className="object-cover object-top" />
              </div>
              <div className="absolute inset-0 bg-black/50 -z-10" />
        
        {/* TITLE */}
        <h2 className="font-[font--philosopher] text-4xl md:text-6xl font-semibold text-shadow-lg leading-tight text-white">
          Proyectos que transforman la vida de quienes viven aquí.
        </h2>

        {/* ROTATING TEXT */}
        <div className="text-2xl md:text-4xl font-[font--cormorant] text-white flex">
          <span>Proyectos con&nbsp;</span>
          <span className="relative h-10 md:h-12 font-bold text-shadow-lg overflow-hidden inline-block">
            <span
              key={index}
              className="block animate-rotate-up"
            >
              {words[index]}
            </span>
          </span>
        </div>

        {/* SUBTEXT */}
        <p className="text-lg md:text-2xl  text-white/70 text-shadow-lg leading-relaxed">
          Nuestro trabajo no empieza en los edificios. Empieza en las personas que necesitan un hogar.
        </p>

      </div>
    </section>
  );
}