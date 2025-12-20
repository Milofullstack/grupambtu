"use client";

import Link from "next/link";
import Image from "next/image";
import { cloudImage } from "../lib/cloudinary";
import EdgeReveal from "./EdgeReveal";

export default function Equipo() {
  const imageUrl = cloudImage("DSC08369_hsdoi9");

  return (
    <section
      id="equipo"
      className="relative w-full h-svh  bg-[#f8f6f2]"
    >
      {/* IMAGEN BACKGROUND (sm → md) */}
      <div className="absolute inset-0 xl:hidden">
        <Image
          src={imageUrl}
          alt="Nuestro equipo"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative mx-auto px-8  py-20 lg:py-0 h-full flex flex-col lg:flex-row-reverse items-center justify-center gap-10 lg:gap-0">
        {/* IMAGEN NORMAL (lg+) */}
        <div className="relative hidden xl:block w-full  h-[60vh] lg:h-screen">
          <Image
            src={imageUrl}
            alt="Nuestro equipo"
            fill
            className="object-contain object-center"
            priority
          />
        </div>

        {/* TEXTO */}
        <div
          className="
            relative z-10
            w-full xl:w-1/2
            flex flex-col justify-center
            gap-12
            px-6 md:px-12 lg:px-16
            text-white xl:text-black
            text-left
          "
        >
          <EdgeReveal>
            <h2 className="text-3xl md:text-5xl xl:text-4xl font-philosopher font-extralight">
              Nuestro equipo
            </h2>
          </EdgeReveal>

          <EdgeReveal>
            <p className="text-2xl md:text-3xl xl:text-2xl font-garamond font-light leading-relaxed max-w-2xl text-white/90 xl:text-gray-500">
              Contamos con un equipo de profesionales creativos que evalúa cada
              proyecto con cuidado para ajustarse a las limitaciones financieras
              y de tiempo, aportando experiencia en desarrollos de pequeña y gran
              escala desde 2000.
            </p>
          </EdgeReveal>

          <EdgeReveal>
            <div className="pt-10 flex justify-center xl:justify-start">
              <Link href="/team">
                <button
                  className="self-center
                    group relative isolate overflow-hidden
                    inline-flex items-center
                    rounded-2xl border border-white xl:border-black
                    px-8 py-3 md:px-12 md:py-4
                    font-philosopher text-xl
                    text-white xl:text-black
                    transition-transform duration-300
                    hover:scale-105 active:scale-95
                  "
                >
                  <span className="relative z-10 transition-colors duration-500 group-hover:text-black xl:group-hover:text-white">
                    Conoce nuestro equipo
                  </span>

                  <span
                    aria-hidden
                    className="
                      pointer-events-none absolute inset-0 z-0
                      bg-gray-300 lg:bg-[#9e7b54]
                      origin-right scale-x-0 transform-gpu
                      transition-transform duration-1500 ease-out
                      group-hover:scale-x-100
                    "
                  />
                </button>
              </Link>
            </div>
          </EdgeReveal>
        </div>
      </div>
    </section>
  );
}