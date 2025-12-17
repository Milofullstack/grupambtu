"use client";
import Image from "next/image";
import { cloudImage } from "@/lib/cloudinary";
import { useEffect, useState } from "react";
export default function ProjectsIntro() {
  const words = ["alma", "consciencia", "futuro"];
const [index, setIndex] = useState(0);

useEffect(() => {
  const id = setInterval(() => {
    setIndex((prev) => prev + 1);
  }, 2500);

  return () => clearInterval(id);
}, []);

const safeIndex = index % words.length;
  const imageUrl = cloudImage("edificio1_qtgpsu");
  return (
    <section className="relative w-full h-svh overflow-hidden bg-[#f8f6f2]">
      
      {/* IMAGEN MOBILE */}
      <div className="absolute inset-0 xl:hidden">
        
        <Image
          src={imageUrl}
          alt="Grup Ambtu"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      <div className="relative grid h-full grid-cols-1 xl:grid-cols-2">
        
        {/* TEXTO */}
        <div className="flex flex-col justify-center px-8 md:px-16 xl:px-24 gap-8 text-white xl:text-black bg-transparent  pt-32 md:pt-0">
          
          <h1 className="font-philosopher text-center xl:text-left text-4xl md:text-5xl xl:text-6xl leading-tight animate-fade-in-up">
            
            Proyectos que transforman la vida de quienes viven aquí.
            
          </h1>
          <p className="text-center w-full xl xl:text-left text-4xl md:text-5xl xl:text-6xl font-philosopher animate-fade-in-up">
            
            proyectos con <span className="italic inline-block h-[1em]  align-bottom">
  <span
    key={safeIndex}
    className="inline-block animate-slide-up align-baseline"
  >
    {words[safeIndex]}
  </span>
</span>
          </p>
          <p className="text-center xl:text-left text-2xl lg:text-3xl text-white xl:text-black font-philosopher  text-pretty animate-fade-in-up">
          Nuestro trabajo no empieza en los edificios. <br />Empieza en las personas que necesitan un hogar.
        </p>
        </div>
        {/* IMAGEN DESKTOP */}
        <div className="relative hidden xl:block">
          
          <Image
            src={imageUrl}
            alt="Grup Ambtu"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
