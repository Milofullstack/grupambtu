"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function ContactPage() {
  return (
    <>
    <Navbar forceDarkAtTop={true} />
    <main className="w-full min-h-svh bg-[#f8f6f2]">
      {/* CONTENEDOR */}
      <section id="/contact" className="max-w-5xl mx-auto px-8 md:px-16 pt-46 flex flex-col gap-16">
        
        {/* INTRO */}
        <header className="flex flex-col gap-6 max-w-2xl">
          <h1 className="font-philosopher text-4xl md:text-5xl">
            Contacto
          </h1>

          <p className="font-garamond text-lg text-gray-700">
            Cuéntanos tu situación y revisaremos tu caso con atención.
            Este formulario está pensado para consultas reales relacionadas
            con vivienda y proyectos de Grup Ambtu.
          </p>
        </header>

        {/* FORMULARIO */}
        <form
          className="w-full max-w-3xl flex flex-col gap-8"
          onSubmit={(e) => e.preventDefault()}
        >
          {/* NOMBRE */}
          <div className="flex flex-col gap-2">
            <label className="font-garamond text-sm">
              Nombre
            </label>
            <input
              type="text"
              className="border border-gray-300 px-4 py-3 bg-white focus:outline-none focus:border-black"
              placeholder="Tu nombre"
              required
            />
          </div>

          {/* EMAIL */}
          <div className="flex flex-col gap-2">
            <label className="font-garamond text-sm">
              Email
            </label>
            <input
              type="email"
              className="border border-gray-300 px-4 py-3 bg-white focus:outline-none focus:border-black"
              placeholder="tu@email.com"
              required
            />
          </div>

          {/* MENSAJE */}
          <div className="flex flex-col gap-2">
            <label className="font-garamond text-sm">
              Mensaje
            </label>
            <textarea
              rows={6}
              className="border border-gray-300 px-4 py-3 bg-white focus:outline-none focus:border-black resize-none"
              placeholder="Explícanos brevemente tu situación"
              required
            />
          </div>

          {/* AVISO */}
          <p className="font-garamond text-sm text-gray-600 max-w-xl">
            Revisamos personalmente cada mensaje. Si encaja con nuestro
            enfoque, nos pondremos en contacto contigo en un plazo aproximado
            de 24–48 horas.
          </p>

          {/* BOTÓN */}
          <button
            type="submit"
            className="self-start px-8 py-3 border border-black font-garamond text-sm hover:bg-black hover:text-white transition-colors"
          >
            Enviar mensaje
          </button>
        </form>

        {/* INFO ADICIONAL */}
        <footer className="flex flex-col gap-4 max-w-xl pt-12 border-t border-gray-300">
          <p className="font-garamond text-sm text-gray-700">
            También puedes escribirnos directamente a:
          </p>

          <p className="font-garamond text-sm">
            <span className="font-medium">contacto@grupambtu.com</span>
          </p>

          <p className="font-garamond text-sm text-gray-600">
            Trabajamos principalmente en Mallorca y alrededores.
          </p>

          <p className="font-garamond text-xs text-gray-500 pt-4">
            Al enviar este formulario aceptas nuestra política de privacidad.
          </p>
        </footer>
      </section>
    </main>
    <Footer/>
    </>
  );
}