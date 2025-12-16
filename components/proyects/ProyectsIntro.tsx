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
              <div className="absolute inset-0 bg-black/20 -z-10" />
        
        {/* TITLE */}
        <h2 className="font-philosopher text-4xl md:text-5xl font-semibold  leading-relaxed text-white">
          Proyectos que transforman la vida de quienes viven aquí.
        </h2>

        {/* ROTATING TEXT */}
        <div className=" text-xl md:text-2xl lg:text-5xl font-philosopher  text-white flex w-full">
          <span>Proyectos con&nbsp;</span>
          <span className="text-xl md:text-2xl lg:text-5xl h-10 text-white md:h-15 font-bold  overflow-hidden inline-block">
            <span
              key={index}
              className="block animate-rotate-up"
            >
              {words[index]}
            </span>
          </span>
        </div>

        {/* SUBTEXT */}
        <p className="text-xl md:text-3xl font-garamond  text-white/70  leading-relaxed">
          Nuestro trabajo no empieza en los edificios. <br />Empieza en las personas que necesitan un hogar.
        </p>

      </div>
    </section>
  );
}