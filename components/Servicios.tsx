// import EdgeReveal from "./EdgeReveal";
import { Wrench, Building2, Home, Scale } from "lucide-react";
import Image from "next/image";
import { cloudImage } from "@/lib/cloudinary";

export default function Servicios() {
  const imageUrl = cloudImage("edificio1_qtgpsu")
  const servicios = [
    {
      icon: <Wrench className="w-12 h-12 text-white" />,
      title: "Gestión de la Construcción",
      desc: "Supervisamos proyectos de principio a fin, garantizando eficiencia y calidad.",
    },
    {
      icon: <Building2 className="w-12 h-12 text-white" />,
      title: "Desarrollo Inmobiliario",
      desc: "Planificamos y desarrollamos promociones adaptadas al entorno mallorquín.",
    },
    {
      icon: <Home className="w-12 h-12 text-white" />,
      title: "Inmobiliaria",
      desc: "Compra, venta y alquiler con las comisiones más competitivas del mercado.",
    },
    {
      icon: <Scale className="w-12 h-12 text-whitefont-philosopher" />,
      title: "Asesoramiento Legal y Urbanístico",
      desc: "Te ayudamos a regularizar y legalizar tu propiedad con nuestro equipo técnico.",
    },
  ];

  return (
    <section id="servicios" className="relative w-full h-full lg:h-screen py-10  overflow-hidden">
        <div className="w-full h-full">
        <div className="absolute inset-0 -z-10">        
        <Image
        src={imageUrl}
        alt="oficina Grupambtu"
        fill
        className="object-cover object-left"
        >

        </Image>
        </div>
        <div className="absolute inset-0 bg-black/30 -z-10" />
      
      <div className="max-w-8xl mx-auto px-8 md:px-16 lg:px-32 text-center lg:h-full lg:flex lg:flex-col lg:justify-center">
        
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-[font--philosopher] text-white font-medium mb-20">
            Nuestros Servicios
          </h2>
        

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 shadow-2xl">
          {servicios.map((servicio, index) => (
            
              <div key={index} className="
                    group flex items-center justify-start gap-6
                    bg-black/40 backdrop-blur-sm
                    border border-white/40
                    p-8 md:p-10 text-left
                    h-full
                "
              >
                {/* Icono a la izquierda */}
                <div className="shrink-0 text-white">
                  {servicio.icon}
                </div>

                {/* Texto a la derecha */}
                <div> 
                  <h3 className="text-lg md:text-xl font-philosopher font-medium text-white">
                    {servicio.title}
                  </h3>
                  <p className="mt-3 text-lg md:text-xl text-white font-light">
                    {servicio.desc}
                  </p>
                </div>
              </div>
            
          ))}
        </div>
      </div>
        </div>
        
    </section>
  );
}