import Link from "next/link";
import Image from "next/image";
import { cloudImage } from "../lib/cloudinary";
import EdgeReveal from "./EdgeReveal";

export default function Filosofia() {
    const imageUrl = cloudImage("filosofia2_cora0m")
  return (
    <section id="filosofia" className="w-full h-full xl:h-svh bg-gray-200 py-20 xl:my-6">
      <div className="w-full h-full">
      <div className="mx-auto px-8 xl:pr-16 xl:px-0 flex flex-col xl:flex-row items-center justify-center gap-8 h-full">
        
        {/* Imagen */}
        <div className="relative  w-full 
          h-[50vh] lg:h-svh shrink ">
          <Image
            src={imageUrl}
            alt="reunion de equipo grupambtu"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        {/* Texto */}
        <div className=" lg:max-w-5xl w-full h-full px-8 xl:px-0 xl:w-2/5 flex flex-col gap-20 justify-center sm:text-center md:text-left">
          <EdgeReveal>
            <h2 className="sm:pt-14 text-center md:text-left text-black text-3xl md:text-5xl font-philosopher font-extralight">
              Una vision diferente
            </h2>
            </EdgeReveal>
          

          <EdgeReveal>
            <p className="text-center md:text-left text-2xl md:text-3xl text-gray-500 font-garamond font-light leading-relaxed">
                Nuestra filosofía nace del deseo de construir con sentido,
                cuidar el entorno y crear hogares donde las personas vivan con
                dignidad.
            </p>
          </EdgeReveal>

          <EdgeReveal>
           <div className="w-full flex justify-center items-center">
             <Link href="/about">
              <button
                className="group relative isolate overflow-hidden
                mt-4 inline-flex items-center
                rounded-2xl border border-black px-6 py-2 md:px-10 md:py-4
                font-philosopher text-xl text-black
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