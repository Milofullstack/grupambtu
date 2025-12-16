import SectionSplit from "@/components/proyects/SectionProyects";
import EdgeReveal from "@/components/EdgeReveal";
import Footer from "@/components/Footer";
import ProyectsIntro from "@/components/proyects/ProyectsIntro";

export default function AboutPage() {
  return (
    <>
    {/* <Navbar forceDarkAtTop={true} /> */}
    <ProyectsIntro/>

      {/* Primera sección */}
      <SectionSplit title="Grup Ambtu" imageId="edificio7_hv8hlm" align="right">
        <EdgeReveal>
        <h2 className="text-4xl lg:text-6xl font-philosopher text-white xl:text-black  mb-6 animate-fade-in-up">
          Viviendas entregadas en Manacor
        </h2>
        </EdgeReveal>
        <EdgeReveal>
           <p className="text-lg md:text-2xl lg:text-3xl font-philosopher  text-pretty animate-fade-in-up">
          En 2025, Grup Ambtu completó y entregó su primer conjunto de viviendas
          a precio limitado en Baleares, ubicadas en la Avenida del Tren de
          Manacor.
          Son 10 viviendas diseñadas con criterios de eficiencia
          energética (calificación B), calidad constructiva y accesibilidad
          económica real, con precios entre 119.000 € y 161.780 € . </p> 
        </EdgeReveal>
       
          <EdgeReveal>
          <p className="text-lg md:text-2xl lg:text-3xl font-philosopher  text-pretty">Este proyecto
          confirma que un modelo de vivienda digna, sostenible y asequible para
          residentes es posible hoy, no en teoría.
        </p>
        </EdgeReveal>
      </SectionSplit>

      {/* Segunda sección */}
      <SectionSplit
        title="Compromiso Social"
        imageId="edificio4_lpiwxj"
        align="left"
      >
        <EdgeReveal>
          <h2 className="text-4xl lg:text-6xl font-philosopher  mb-6">
            Plan estratégico para 2.000 viviendas nuevas en Baleares
          </h2>
          </EdgeReveal>
          <EdgeReveal>
          <p className="text-lg md:text-2xl lg:text-3xl font-philosopher  text-pretty">
            A partir del análisis técnico de 227 edificios con capacidad de
            reconversión o desarrollo, Grup Ambtu ha diseñado un plan de
            crecimiento que permitiría añadir hasta 2.000 nuevas viviendas al
            parque residencial de las islas.</p>
            </EdgeReveal>
            <EdgeReveal>
            <p className="text-lg md:text-2xl lg:text-3xl font-philosopher  text-pretty"> Cada proyecto se plantea con
            tiempos de ejecución de 15 a 18 meses, priorizando eficiencia,
            calidad y respuesta a la demanda local. Este plan representa una
            solución de escala para un problema estructural.
          </p>
        </EdgeReveal>
      </SectionSplit>

      {/* Tercera sección */}
      <SectionSplit
        title="Vivienda Digna"
        imageId="edificio8_io5hdr"
        align="right"
      >
        <EdgeReveal>
          <h2 className="text-4xl lg:text-6xl font-philosopher  mb-6">
            La necesidad real: 9.100 residentes en lista de espera
          </h2>
          </EdgeReveal>
          <EdgeReveal>
          <p className="text-lg md:text-2xl lg:text-3xl font-philosopher  text-pretty">
            Actualmente, más de 9.100 personas aguardan la oportunidad de
            acceder a una vivienda digna en Baleares. Este volumen de demanda
            guía el sistema de puntuación desarrollado por Grup Ambtu y marca
            dónde tiene sentido iniciar nuevos proyectos:
            </p></EdgeReveal>
            <EdgeReveal>
            <p className="text-lg md:text-2xl lg:text-3xl font-philosopher  text-pretty"> zonas con alta
            demanda, residentes con vínculos laborales y familiares en la isla,
            y perfiles vulnerables o prioritarios. El objetivo es simple: que
            nadie quede atrás.
          </p>
        </EdgeReveal>
      </SectionSplit>
      {/*cuarta seccion*/}
      <SectionSplit
        title="Vivienda Digna"
        imageId="DSC08369_hsdoi9"
        align="left"
      >
        <EdgeReveal>
          <h2 className="text-4xl lg:text-6xl font-philosopher xl:mb-6">
            Reconocimiento público: Premio PIMEM 2025
          </h2>
          </EdgeReveal>
          <EdgeReveal>
          <p className="text-lg md:text-2xl lg:text-3xl  font-philosopher text-pretty">
            En noviembre de 2025, Grup Ambtu fue distinguido por PIMEM con el
            premio a la Responsabilidad Social y Ética Empresarial. El galardón
            reconoce la labor del grupo en la promoción de vivienda para
            residentes y su defensa pública de un modelo equilibrado entre
            turismo y vivienda.
            </p>
            </EdgeReveal>
            <EdgeReveal>
            <p className="text-lg md:text-2xl lg:text-3xl font-philosopher  text-pretty"> La frase que marcó la ceremonia resume su
            misión: “Viviendas para los residentes. Hoteles para los turistas.”
            Una declaración de principios en un momento crítico para las islas.
          </p>
        </EdgeReveal>
      </SectionSplit>
      <Footer />
    </>
  );
}
