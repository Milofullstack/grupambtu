"use client";

import { useState } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mdandgwv";

export default function ContactPage() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);

    try {
const res = await fetch(FORMSPREE_ENDPOINT, {
  method: "POST",
  body: formData,
  headers: { Accept: "application/json" },
});

console.log("STATUS:", res.status);

const data = await res.json();
console.log("RESPONSE BODY:", data);

if (res.ok) {
  setStatus("success");
  e.currentTarget.reset();
} else {
  setStatus("error");
}
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <Navbar forceDarkAtTop={true} />
      <main className="w-full min-h-svh bg-[#f8f6f2]">
        <section
          id="/contact"
          className="max-w-5xl mx-auto px-8 md:px-16 pt-46 flex flex-col gap-16"
        >
          {/* INTRO */}
          <header className="flex flex-col gap-6 max-w-2xl">
            <h1 className="font-philosopher text-4xl text-black md:text-5xl">
              Contacto
            </h1>

            <p className="font-garamond text-lg text-black">
              Cuéntanos tu situación y revisaremos tu caso con atención. Este
              formulario está pensado para consultas reales relacionadas con
              vivienda y proyectos de Grup Ambtu.
            </p>
          </header>

          {/* CONTENIDO DINÁMICO */}
          {status === "success" ? (
            <div className="max-w-3xl flex flex-col gap-6 py-12">
              <h2 className="font-philosopher text-3xl text-black">
                Mensaje enviado correctamente
              </h2>

              <p className="font-garamond text-lg text-black">
                Hemos recibido tu mensaje y lo revisaremos con atención.  
                Si encaja con nuestro enfoque, nos pondremos en contacto contigo
                en un plazo aproximado de <strong>24–48 horas</strong>.
              </p>

              <p className="font-garamond text-sm text-black/70">
                Si no recibes respuesta en ese tiempo, revisa tu carpeta de spam
                o correo no deseado.
              </p>

              <p className="font-garamond text-sm text-black/70">
                Gracias por contactar con Grup Ambtu.
              </p>
            </div>
          ) : (
            <>
              {/* FORMULARIO */}
              <form
                className="w-full max-w-3xl flex flex-col gap-8"
                onSubmit={handleSubmit}
              >
                {/* NOMBRE */}
                <div className="flex flex-col gap-2">
                  <label className="font-garamond text-lg text-black">
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="border border-gray-300 px-4 py-3 bg-white focus:outline-none focus:border-black"
                    placeholder="Tu nombre"
                  />
                </div>

                {/* EMAIL */}
                <div className="flex flex-col gap-2">
                  <label className="font-garamond text-lg text-black">
                    Email
                  </label>
                  <input
                    type="email"
                    name="_replyto"
                    required
                    className="border border-gray-300 px-4 py-3 bg-white focus:outline-none focus:border-black"
                    placeholder="tu@email.com"
                  />
                </div>

                {/* MENSAJE */}
                <div className="flex flex-col gap-2">
                  <label className="font-garamond text-lg text-black">
                    Mensaje
                  </label>
                  <textarea
                    name="message"
                    rows={6}
                    required
                    className="border border-gray-300 px-4 py-3 bg-white focus:outline-none focus:border-black resize-none"
                    placeholder="Explícanos brevemente tu situación"
                  />
                </div>

                {/* AVISO */}
                <p className="font-garamond text-lg text-black max-w-xl">
                  Revisamos personalmente cada mensaje. Si encaja con nuestro
                  enfoque, nos pondremos en contacto contigo en un plazo
                  aproximado de 24–48 horas.
                </p>

                {/* RGPD */}
                <div className="flex items-start gap-3 max-w-xl">
                  <input
                    type="checkbox"
                    name="privacy"
                    id="privacy"
                    required
                    className="mt-1 h-4 w-4 accent-black"
                  />

                  <label
                    htmlFor="privacy"
                    className="font-garamond text-sm text-black leading-relaxed"
                  >
                    He leído y acepto la{" "}
                    <a
                      href="/legal/privacidad"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-black/70"
                    >
                      política de privacidad
                    </a>
                    .
                  </label>
                </div>

                {/* BOTÓN */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="self-center px-8 py-3 rounded-2xl border text-black border-black font-garamond text-lg hover:bg-black hover:text-white transition-colors disabled:opacity-50"
                >
                  {status === "sending" ? "Enviando..." : "Enviar mensaje"}
                </button>

                {status === "error" && (
                  <p className="font-garamond text-sm text-red-600 text-center">
                    Ha ocurrido un error. Por favor, inténtalo de nuevo más
                    tarde.
                  </p>
                )}
              </form>

              {/* INFO ADICIONAL */}
              <footer className="flex flex-col gap-4 max-w-xl pt-12 border-t border-gray-300">
                <p className="font-garamond text-sm text-black">
                  También puedes escribirnos directamente a:
                </p>

                <p className="font-garamond text-sm">
                  <span className="font-medium">contacto@grupambtu.com</span>
                </p>
              </footer>
            </>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
