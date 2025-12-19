"use client";

import Link from "next/link";
import Image from "next/image";
import { cloudImage } from "../lib/cloudinary";
import EdgeReveal from "./EdgeReveal";

export default function Filosofia() {
  const imageUrl = cloudImage("German");

  return (
    <section
      id="filosofia"
      className="relative w-full h-svh bg-[#f8f6f2]"
    >
      {/* IMAGEN BACKGROUND (sm → md) */}
      <div className="absolute inset-0 xl:hidden">
        <Image
          src={imageUrl}
          alt="reunion de equipo grupambtu"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative mx-auto px-8  py-20 lg:py-0 h-full flex flex-col xl:flex-row items-center justify-center gap-10">
        {/* IMAGEN NORMAL (lg+) */}
        <div className="relative hidden xl:block w-full  h-[60vh] lg:h-svh">
          <Image
            src={imageUrl}
            alt="reunion de equipo grupambtu"
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
            text-right xl:text-left
            items-start md:items-end xl:items-start
            text-white xl:text-black
          "
        >
          <EdgeReveal>
            <h2 className="text-3xl md:text-5xl text-start md:text-left font-philosopher font-extralight">
              Una visión diferente
            </h2>
          </EdgeReveal>

          <EdgeReveal>
            <p className="text-2xl md:text-3xl text-start md:text-left font-garamond font-light leading-relaxed max-w-2xl text-white/90 xl:text-gray-500">
              Nuestra filosofía nace del deseo de construir con sentido,
              cuidar el entorno y crear hogares donde las personas vivan con
              dignidad.
            </p>
          </EdgeReveal>

          <EdgeReveal>
            <div className="pt-10 flex justify-center xl:justify-center items-center w-full">
              <Link href="/about">
                <button
                  className="
                    group relative isolate overflow-hidden self-center
                    inline-flex items-center
                    rounded-2xl
                    border border-white xl:border-black
                    px-6 py-2 md:px-10 md:py-4
                    font-philosopher text-xl
                    text-white xl:text-black
                    transition-transform duration-300
                    hover:scale-105 active:scale-95
                  "
                >
                  <span
                    className="
                      relative z-10 transition-colors duration-500
                      group-hover:text-black xl:group-hover:text-white
                    "
                  >
                    Nuestra filosofía
                  </span>

                  <span
                    aria-hidden
                    className="
                      pointer-events-none absolute inset-0 z-0
                      bg-gray-300 xl:bg-gray-400
                      origin-left scale-x-0 transform-gpu
                      transition-transform duration-700 ease-out
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