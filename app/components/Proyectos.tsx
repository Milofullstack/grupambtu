import Link from "next/link";
import Image from "next/image";
import { cloudImage } from "../lib/cloudinary";

export default function Filosofia() {
    const imageUrl = cloudImage("Grup_Ambtú_dj0dri")
  return (
<section
      id="historia"
      className="relative w-full h-svh bg-center bg-cover bg-no-repeat"
    >
        <div className="absolute inset-0 -z-10">        
        <Image
        src={imageUrl}
        alt="oficina Grupambtu"
        fill
        className="object-cover object-left"
        >

        </Image>
        </div>
        <div className="absolute inset-0 bg-black/50 -z-10" />
      <div className="w-full h-full flex items-center justify-start">
        <div className="max-w-full w-full mx-auto px-8 md:px-24 flex items-center  justify-start">
          <div className="w-full xl:w-3/5 flex flex-col gap-10 md:gap-10 2xl:gap-30 justify-between text-left">
            
              <h2 className="text-white mt-16 lg:mt-0 text-3xl md:text-7xl font-[font--philosopher] font-medium">
              Viviendas <br />de <br />Precio Limitado
              </h2>
            
            
              <p className="mt-4 text-xl md:text-2xl lg:text-3xl  text-gray-200 font-medium font-[font--garamond] text-shadow-lg leading-relaxed">
              En GrupAmbtu impulsamos proyectos que combinan viabilidad,
              innovación y compromiso social. Fuimos pioneros en la primera
              promoción de Viviendas de Protección Limitada en Mallorca, un
              modelo que redefine el acceso a la vivienda con criterios de
              sostenibilidad, eficiencia y valor real para las personas.
              </p>
            
           
              <div
              className="flex justify-center">
                <Link href="/empresa">
                <button
                  className="bg-none text-white text-shadow-md
            group relative isolate overflow-hidden
            mt-8 inline-flex items-center
            rounded-2xl border border-white px-6 py-2 md:px-10 md:py-4
            font-[font--philosopher] text-xl
            transition-transform duration-300
            hover:scale-105 active:scale-95
            "
                >
                  <span className="relative z-10 md:text-2xl transition-colors duration-500 group-hover:text-black">
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
            
          </div>
        </div>
        </div>
      
    </section>
  );
}

