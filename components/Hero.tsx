"use client";
// import { cloudVideo } from "@/app/lib/cloudinary";
// import { cloudImage } from "@/app/lib/cloudinary";

export default function Hero() {
  // const videoUrl = cloudVideo("")
  return (
    <section id="hero" className="relative w-full h-svh overflow-hidden pt-26 lg:pt-28 xl:pt-36">
      {/* 🎥 Video de fondo */}
      <div className="absolute inset-0 -z-10">
        <iframe
          className="absolute top-0 left-0 w-full h-full scale-[1.2]"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&playlist=WS57cos6aig&controls=0&showinfo=0&modestbranding=1"
          title="Video de fondo"
          allow="autoplay; fullscreen"
          loading="lazy"
        />
      </div>

      {/* 🩶 Capa de oscurecimiento */}
      <div className="absolute inset-0 bg-black/50 -z-10" />

      {/* 🧱 Contenido principal */}
      <div className="w-full h-full flex items-center justify-start">
        <div className="max-w-5xl w-full mx-auto px-8 flex justify-between">
          <div className="w-full flex flex-col gap-10 md:gap-20 justify-between text-center">
            <h1 className="text-white text-3xl md:text-5xl font-[--font-philosopher] text-shadow-md text-pretty animate-fade-in-up">
              GrupAmbtu no es solo una promotora inmobiliaria - es un
              compromiso.
            </h1>

            <h2 className="mt-4 px-20 text-xl md:text-2xl lg:text-3xl text-gray-100 text-shadow-lg font-normal text-pretty font-[--font-garamond] leading-relaxed animate-fade-in-up">
              Nacidos en Mallorca con la convicción de que vivir bien no puede
              ser un privilegio, trabajamos para convertir ideas en hogares con
              alma.
            </h2>

            <div className=" flex justify-center">
              <button
                className="bg-none text-white text-shadow-md
                  group relative isolate overflow-hidden
                  mt-8 inline-flex items-center
                  rounded-2xl border border-white px-6 py-2 lg:px-10 lg:py-4
                  font-[--font-philosopher] text-xl
                  transition-transform duration-300
                  hover:scale-105 active:scale-95 animate-fade-in-up"
              >
                <span className="relative lg:text-2xl z-10 transition-colors duration-500 group-hover:text-black">
                  Contáctanos
                </span>

                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 z-0
                  bg-gray-300 origin-right scale-x-0 transform-gpu
                  transition-transform duration-1000 ease-out
                  group-hover:scale-x-100"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
