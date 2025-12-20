"use client";

import { useState } from "react";

type Props = {
  /** URL del iframe de Google Maps (Embed) */
  embedSrc: string;
  mapsUrl?: string;
  /** Título accesible */
  title?: string;
  /** Altura del bloque (tailwind) */
  heightClassName?: string; // ej: "h-[320px] md:h-[420px] xl:h-[520px]"
  /** Texto opcional */
  consentText?: string;
  /** Botón */
  buttonText?: string;
};

export default function GoogleMapConsent({
  embedSrc,
  title = "Mapa de Google Maps",
  heightClassName = "h-[320px] md:h-[420px] xl:h-[520px]",
  consentText = "Este contenido pertenece a Google Maps. Al cargar el mapa, Google puede tratar datos (como tu IP) y usar cookies según su política.",
  buttonText = "Cargar mapa",
  mapsUrl="https://www.google.com/maps/place/Avinguda+des+Torrent,+21,+07500+Manacor"
}: Props) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={`relative w-full overflow-hidden rounded-3xl ${heightClassName}`}
    >
      {!loaded ? (
        <div className="absolute inset-0">
          {/* Fondo / placeholder editorial */}
          <div className="absolute inset-0 bg-[#111]/10" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/35 to-black/45" />

          <div className="relative h-full w-full flex flex-col items-center justify-center px-6 text-center">
            <p className="font-garamond text-base md:text-lg text-white/90 max-w-2xl leading-relaxed">
              {consentText}
            </p>

            <button
              type="button"
              onClick={() => setLoaded(true)}
              className="
                mt-6 inline-flex items-center justify-center
                rounded-2xl border border-white/70
                px-6 py-3 md:px-10 md:py-4
                font-philosopher text-lg md:text-xl text-white
                transition-transform duration-300
                hover:scale-105 active:scale-95
              "
            >
              {buttonText}
            </button>

            {mapsUrl && (
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 font-garamond text-sm text-white/80 underline"
              >
                Abrir en Google Maps
              </a>
            )}
          </div>
        </div>
      ) : (
        <iframe
          title={title}
          src={embedSrc}
          className="absolute inset-0 h-full w-full"
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      )}
    </div>
  );
}
