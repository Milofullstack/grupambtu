import Link from "next/link";
// import EdgeReveal from "./EdgeReveal";
import Image from "next/image";
import { cloudImage } from "../lib/cloudinary";
import EdgeReveal from "./EdgeReveal";

export default function Equipo() {
  const imageUrl = cloudImage("grup2_zh00rk");
  return (
    <section
      id="equipo"
      className="w-full h-full xl:h-screen bg-gray-200  py-20 xl:my-6"
    >
      <div className="w-full h-full">
        <div className="mx-auto px-8 xl:pl-16 xl:px-0 flex flex-col xl:flex-row-reverse items-center justify-center gap-10 h-full">
          {/* Imagen */}
          <div className="relative 
          w-full 
          h-[50vh] lg:h-svh shrink ">
            <Image
              src={imageUrl}
              alt="Descripción de la imagen"
              fill
              className="object-cover object-center"
              priority
            />
             <div className="absolute inset-0 bg-black/10" />
          </div>

          {/* Texto */}
          <div className="lg:max-w-5xl w-full h-full px-8 xl:px-0 xl:w-2/5 flex flex-col gap-20 justify-center text-center md:text-left">
            <EdgeReveal>
              <h2 className=" md:pt-0 text-center md:text-left text-black text-3xl md:text-5xl font-philosopher font-extralight">
                Nuestro equipo
              </h2>
            </EdgeReveal>

            <EdgeReveal>
              <p className="text-xl md:text-2xl text-center md:text-left text-gray-500 font-garamond font-light leading-relaxed">
                Contamos con un equipo de profesionales creativos que evalúa
                cada proyecto con cuidado para ajustarse a las limitaciones
                financieras y de tiempo, aportando experiencia en desarrollos de
                pequeña y gran escala desde 2000.
              </p>
            </EdgeReveal>

            <EdgeReveal>
              <div className="flex justify-center">
                <Link href="/equipo">
                  <button
                    className="group relative isolate overflow-hidden
                mt-4 inline-flex items-center
                rounded-2xl border border-black px-6 py-2 md:px-10 md:py-4
                font-philosopher text-xl text-black
                transition-transform duration-300
                hover:scale-105 active:scale-95"
                  >
                    <span className="relative lg:text-2xl z-10 transition-colors duration-500 group-hover:text-white">
                      Conoce nuestro equipo
                    </span>

                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-0 z-0
                  bg-gray-600 origin-right scale-x-0 transform-gpu
                  transition-transform duration-1000 ease-out
                  group-hover:scale-x-100"
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
