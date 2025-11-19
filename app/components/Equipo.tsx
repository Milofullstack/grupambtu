import Link from "next/link";
// import EdgeReveal from "./EdgeReveal";
import Image from "next/image";
import { cloudImage } from "../lib/cloudinary";

export default function Equipo() {
  const imageUrl = cloudImage("grup2_zh00rk")
  return (
    <section id="proyectos" className="w-full h-full xl:h-screen bg-gray-200 py-32">
      <div className="w-full h-full">
      <div className="mx-auto xl:pl-16 flex flex-col xl:flex-row-reverse items-center justify-center gap-10 h-full">
        
        {/* Imagen */}
        <div className="relative w-full xl:w-3/5 h-[60vh] md:h-[50vh] lg:h-[60vh] aspect-video shadow-2xl">
          <Image
            src={imageUrl}
            alt="Descripción de la imagen"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Texto */}
        <div className="w-full h-full px-8 xl:px-0 xl:w-2/5 flex flex-col gap-20 justify-center text-left">
          
            <h2 className="text-black text-3xl md:text-5xl font-[font--philosopher] font-medium">
             Nuestro equipo
            </h2>
          

          
            <p className="text-xl md:text-3xl text-gray-500 font-[font--garamond] font-medium leading-relaxed">
              Contamos con un equipo de profesionales creativos que evalúa cada proyecto con cuidado para ajustarse a las limitaciones financieras y de tiempo, aportando experiencia en desarrollos de pequeña y gran escala desde 2000.
            </p>
          

       
            <div className="flex justify-center">
<Link href="/equipo">
              <button
                className="group relative isolate overflow-hidden
                mt-4 inline-flex items-center
                rounded-2xl border border-black px-6 py-2 md:px-10 md:py-4
                font-[font--philosopher] text-xl text-black
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
          
        </div>
      </div>
      </div>
    </section>
  );
}