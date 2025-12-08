// import EdgeReveal from "./EdgeReveal";
import Link from "next/link";

export default function Contacto() {
  return (
    <section id="contacto" className="w-full bg-white pt-20 pb-10">
      <div className="max-w-8xl mx-auto px-8 md:px-16 lg:px-32 flex flex-col gap-16 justify-between items-center">
        <h2 className="text-black text-3xl md:text-5xl font-philosopher mb-6">
          ¿Quieres conocernos mejor?
        </h2>
        <p className="text-lg md:text-2xl text-gray-600 mb-10 font-thin font-philosopher">
          Nuestro equipo te espera en la oficina para resolver tus dudas,
          compartir proyectos o simplemente charlar sobre cómo entendemos la
          vivienda.
        </p>
      
      <div className="flex flex-col  justify-between text-start">
        {/* Datos de contacto */}
        <div className="space-y-4 text-md md:text-lg text-gray-700 font-light font-philosopher">
          <p>
            <strong>Dirección:</strong> Avinguda des Torrent nº 21
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:info@grupambtu.com"
              className="underline hover:text-black"
            >
              info@grupambtu.com
            </a>
          </p>
          <p>
            <strong>Teléfonos:</strong> 971 046 747 / 672 712 961
          </p>
        </div>

        {/* Botón de llamada a la acción */}
        <div className="mt-10 flex justify-start">
          <Link href="/contacto">
            <button className="group text-black relative isolate overflow-hidden inline-flex items-center rounded-2xl border border-black px-8 py-3 font-philosopher text-lg transition-transform duration-300 hover:scale-105 active:scale-95"> 
              <span className="relative z-10 transition-colors duration-200 group-hover:text-white">
                Ir a página de contacto
              </span>
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 z-0 bg-gray-700 origin-right scale-x-0 transform-gpu transition-transform duration-1000 ease-out group-hover:scale-x-100"
              />
            </button>
          </Link>
        </div>
      </div>

      
        <div className="mt-24 w-full h-[1px] bg-gray-300 rounded-full" />
      
      </div>
    </section>
  );
}
