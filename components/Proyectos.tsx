import Link from "next/link";
import Image from "next/image";
import { cloudImage } from "../lib/cloudinary";
import EdgeReveal from "./EdgeReveal";

export default function Filosofia() {
  const imageUrl = cloudImage("edificio3_vmunh8");
  return (
    <section id="proyectos" className="relative w-full h-svh">
      <div className="absolute inset-0 -z-10">
        <Image
          src={imageUrl}
          alt="oficina Grupambtu"
          fill
          className="object-cover object-left"
        ></Image>
      </div>
      <div className="absolute inset-0 bg-black/30 -z-10" />
      <div className="w-full h-full flex items-center justify-start">
        <div className="max-w-5xl w-full mx-auto px-8 md:px-24 flex items-center justify-start">
          <div className="w-full flex flex-col gap-8 md:gap-10 2xl:gap-20 justify-between text-center">
            <EdgeReveal>
              <h2 className="text-[#f5f5f5] mt-16 lg:mt-0 text-4xl md:text-7xl font-philosopher font-bold text-shadow-lg">
                Viviendas de Precio Limitado
              </h2>
            </EdgeReveal>

            <EdgeReveal>
              <p className="mt-4 text-lg md:text-2xl lg:text-3xl text-[#f5f5f5] font-medium font-garamond text-shadow-lg leading-relaxed">
                En GrupAmbtu impulsamos proyectos que combinan viabilidad,
                innovación y compromiso social. Fuimos pioneros en
                <span className="font-bold">
                  la primera promoción de Viviendas de Protección Limitada en
                  Mallorca,
                </span>
                un modelo que redefine el acceso a la vivienda con criterios de
                sostenibilidad, eficiencia y valor real para las personas.
              </p>
            </EdgeReveal>

            <EdgeReveal>
              <div className="flex justify-center">
                <Link href="/projects">
                  <button
                    className="bg-none text-white text-shadow-md
            group relative isolate overflow-hidden
            mt-8 inline-flex items-center
            rounded-2xl border border-white px-6 py-2 md:px-10 md:py-4
            font-philosopher text-xl
            transition-transform duration-300
            hover:scale-105 active:scale-95
            "
                  >
                    <span className="relative z-10 lg:text-2xl transition-colors duration-500 font-philosopher group-hover:text-black">
                      Conoce nuestros proyectos
                    </span>

                    {/* capa que “se llena” de derecha a izquierda */}
                    <span
                      aria-hidden
                      className="
              pointer-events-none absolute inset-0 z-0
              bg-gray-300
              origin-right scale-x-0 transform-gpu
              transition-transform duration-1000 ease-out
              group-hover:scale-x-100
              "
                    />
                  </button>
                </Link>
              </div>
            </EdgeReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
