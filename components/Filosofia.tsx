import Link from "next/link";
import Image from "next/image";
import { cloudImage } from "../lib/cloudinary";
import EdgeReveal from "./EdgeReveal";

export default function Filosofia() {
    const imageUrl = cloudImage("filosofia2_cora0m")
  return (
    <section id="proyectos" className="w-full h-full xl:h-svh bg-gray-200 py-10 xl:-py-0">
      <div className="w-full h-full">
      <div className="mx-auto xl:pr-16 flex flex-col xl:flex-row items-center justify-center gap-10 h-full">
        
        {/* Imagen */}
        <div className="relative w-full xl:w-3/5 h-[60vh] md:h-[65vh] lg:h-[70vh]  xl:h-[65vh] aspect-video shadow-2xl">
          <Image
            src={imageUrl}
            alt="reunion de equipo grupambtu"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Texto */}
        <div className="md:max-w-2xl lg:max-w-5xl h-full px-8 xl:px-0 xl:w-2/5 flex flex-col gap-20 justify-center text-left">
          <EdgeReveal>
            <h2 className="text-black text-3xl md:text-5xl font-[font--philosopher] text-left font-extralight">
              Una vision diferente
            </h2>
            </EdgeReveal>
          

          <EdgeReveal>
            <p className="text-xl md:text-2xl text-gray-500 font-[font--garabond] font-light leading-relaxed animate-fade-in-up">
                Nuestra filosofía nace del deseo de construir con sentido,
                cuidar el entorno y crear hogares donde las personas vivan con
                dignidad.
            </p>
          </EdgeReveal>

          <EdgeReveal>
           <div className="sm:flex sm:justify-center">
             <Link href="/about">
              <button
                className="group relative isolate overflow-hidden
                mt-4 inline-flex items-center
                rounded-2xl border border-black px-6 py-2 md:px-10 md:py-4
                font-[font--philosopher] text-xl text-black
                transition-transform duration-300
                hover:scale-105 active:scale-95 animate-fade-in-up"
              >
                <span className="relative lg:text-2xl z-10 transition-colors duration-500 group-hover:text-white">
                  Nuestra filosofía
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