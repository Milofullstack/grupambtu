import EdgeReveal from "@/components/EdgeReveal";
import Link from "next/link";

export default function Location() {
  return (
<section id="localizacion" className="w-full bg-white pt-20 pb-10">
  <div className="max-w-8xl mx-auto px-8 md:px-16 lg:px-32 flex flex-col gap-16 justify-between">
    <div className="flex flex-col gap-8 text-center">
        <EdgeReveal>
            <h2 className=" text-black text-3xl md:text-5xl font-[font--philosopher] font-medium text-pretty">
        Descubra nuestros proyectos en persona
      </h2>
        </EdgeReveal>
        <EdgeReveal>
            <p className="mt-4 text-xl md:text-2xl text-black font-[font--philosopher] font-light">
        Nuestras viviendas no se comprenden del todo hasta que se sienten de cerca.<br />
        Le invitamos a visitarnos en nuestra oficina para conocer cómo concebimos el hogar en Mallorca.
      </p>
        </EdgeReveal>
    </div>

    {/* Mapa de Google Maps */}
    <div className="w-full h-[40vh] rounded-md overflow-hidden shadow-md">
      <iframe
        title="Mapa oficina GrupAmbtu"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3187.894887509762!2d3.2063957151886983!3d39.579814979465735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12965e57e5e0a159%3A0x8237b857934a5461!2sAvinguda%20des%20Torrent%2C%2021%2C%2007500%20Manacor%2C%20Illes%20Balears!5e0!3m2!1ses!2ses!4v1698419730192!5m2!1ses!2ses"
        className="w-full h-full"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>

  </div>
</section>
  );
}