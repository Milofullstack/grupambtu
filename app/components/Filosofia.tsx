import Link from "next/link";
import Image from "next/image";
import { cloudImage } from "../lib/cloudinary";

export default function Filosofia() {
    const imageUrl = cloudImage("filosofia2_cora0m")
  return (
    <section id="proyectos" className="w-full h-svh xl:h-dvh bg-gray-200 py-32">
      <div className="w-full h-full">
      <div className="mx-auto xl:pr-16 flex flex-col xl:flex-row items-center justify-center gap-10 h-full">
        
        {/* Imagen */}
        <div className="relative w-full xl:w-3/5 h-[60vh] md:h-[50vh] lg:h-[60vh] aspect-video shadow-2xl">
          <Image
            src={imageUrl}
            alt="reunion de equipo grupambtu"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Texto */}
        <div className="w-full h-full px-8 xl:px-0 xl:w-2/5 flex flex-col gap-20 justify-center text-left">
          
            <h2 className="text-black text-3xl md:text-5xl font-[font--philosopher] font-medium">
              Una vision diferente
            </h2>
          

          
            <p className="text-xl md:text-3xl text-gray-500 font-[font--garabond] font-medium leading-relaxed animate-fade-in-up">
                Nuestra filosofía nace del deseo de construir con sentido,
                cuidar el entorno y crear hogares donde las personas vivan con
                dignidad.
            </p>
          

         
           <div className="sm:flex sm:justify-center">
             <Link href="/empresa">
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
          
        </div>
      </div>
      </div>
    </section>
  );
}