// import EdgeReveal from "./EdgeReveal";
import { Wrench, Building2, Home, Scale } from "lucide-react";
import Image from "next/image";
import { cloudImage } from "@/lib/cloudinary";
import EdgeReveal from "./EdgeReveal";

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
      icon: <Scale className="w-12 h-12 text-white font-philosopher" />,
      title: "Asesoramiento Legal y Urbanístico",
      desc: "Te ayudamos a regularizar y legalizar tu propiedad con nuestro equipo técnico.",
    },
  ];

  return (
    <section id="servicios" className="relative w-full h-full lg:h-screen bg-[#f8f6f2]  overflow-hidden">
        <div className="w-full h-full">
        {/* <div className="absolute inset-0 -z-10">        
        <Image
        src={imageUrl}
        alt="oficina Grupambtu"
        fill
        className="object-cover object-left"
        >

        </Image>
        </div> */}
        {/* <div className="absolute inset-0 bg-black/30 -z-10" /> */}
      
      <div className="max-w-8xl mx-auto px-8 md:px-16 lg:px-32 py-10 text-center lg:h-full lg:flex lg:flex-col lg:justify-center">
        <EdgeReveal>
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-philosopher text-black font-medium mb-20">
            Nuestros Servicios
          </h2>
        </EdgeReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2  bg-[#f8f6f2]">
          {servicios.map((servicio, index) => (
            
              <div key={index} className="
                    group flex items-center justify-start gap-10
                    bg-black/40 backdrop-blur-sm rounded-2xl
                    border border-white/40
                    p-8 md:p-10 text-left
                    h-full
                "
              >
                {/* Icono a la izquierda */}
                <EdgeReveal>
                <div className="shrink-0 text-white ">
                  {servicio.icon}
                </div></EdgeReveal>

                {/* Texto a la derecha */}
                <div> 
                  <EdgeReveal>
                  <h3 className="text-lg md:text-xl font-philosopher font-medium text-white">
                    {servicio.title}
                  </h3>
                  </EdgeReveal>
                  <EdgeReveal>
                  <p className="mt-3 text-lg md:text-xl text-white font-philosopher font-light">
                    {servicio.desc}
                  </p>
                  </EdgeReveal>
                </div>
              </div>
            
          ))}
          
        </div>
      </div>
        </div>
        
    </section>
  );
}