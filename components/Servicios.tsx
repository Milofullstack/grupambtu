// import EdgeReveal from "./EdgeReveal";
import { Wrench, Building2, Home, Scale } from "lucide-react";

export default function Servicios() {
  const servicios = [
    {
      icon: <Wrench className="w-12 h-12 text-gray-700" />,
      title: "Gestión de la Construcción",
      desc: "Supervisamos proyectos de principio a fin, garantizando eficiencia y calidad.",
    },
    {
      icon: <Building2 className="w-12 h-12 text-gray-700" />,
      title: "Desarrollo Inmobiliario",
      desc: "Planificamos y desarrollamos promociones adaptadas al entorno mallorquín.",
    },
    {
      icon: <Home className="w-12 h-12 text-gray-700" />,
      title: "Inmobiliaria",
      desc: "Compra, venta y alquiler con las comisiones más competitivas del mercado.",
    },
    {
      icon: <Scale className="w-12 h-12 text-gray-700 font-philosopher" />,
      title: "Asesoramiento Legal y Urbanístico",
      desc: "Te ayudamos a regularizar y legalizar tu propiedad con nuestro equipo técnico.",
    },
  ];

  return (
    <section id="servicios" className="w-full h-full lg:h-screen py-10 bg-gray-100 overflow-hidden">
      
      <div className="max-w-8xl mx-auto px-8 md:px-16 lg:px-32 text-center lg:h-full lg:flex lg:flex-col lg:justify-center">
        
          <h2 className="text-3xl md:text-4xl font-[font--philosopher] font-medium mb-10">
            Nuestros Servicios
          </h2>
        

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 shadow-2xl">
          {servicios.map((servicio, index) => (
            
              <div key={index} className="
                    group flex items-center justify-start gap-6
                    bg-gray-200
                    p-8 md:p-10 text-left
                    h-full
                "
              >
                {/* Icono a la izquierda */}
                <div className="shrink-0 text-gray-700 group-hover:text-black transition-colors duration-500">
                  {servicio.icon}
                </div>

                {/* Texto a la derecha */}
                <div> 
                  <h3 className="text-lg md:text-xl font-philosopher font-medium text-gray-900 group-hover:text-black transition-colors duration-500">
                    {servicio.title}
                  </h3>
                  <p className="mt-3 text-lg md:text-xl text-gray-600 font-light">
                    {servicio.desc}
                  </p>
                </div>
              </div>
            
          ))}
        </div>
      </div>
    </section>
  );
}