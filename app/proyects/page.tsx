import SectionSplit from "@/components/proyects/SectionProyects";
import EdgeReveal from "@/components/EdgeReveal";
import Footer from "@/components/Footer";
import ProyectsIntro from "@/components/proyects/ProyectsIntro";

export default function AboutPage() {
  return (
    <>
    <ProyectsIntro/>
      {/* Primera sección */}
      <SectionSplit title="Grup Ambtu" imageId="edificio7_hv8hlm" align="left">
        <EdgeReveal>
        <h2 className="text-4xl lg:text-6xl font-[font--philosopher] text-white text-shadow-lg mb-6 animate-fade-in-up">
          Viviendas entregadas en Manacor
        </h2>
        <p className="text-2xl lg:text-3xl text-white font-[font--philosopher] text-shadow-lg text-pretty animate-fade-in-up">
          En 2025, Grup Ambtu completó y entregó su primer conjunto de viviendas
          a precio limitado en Baleares, ubicadas en la Avenida del Tren de
          Manacor. Son 10 viviendas diseñadas con criterios de eficiencia
          energética (calificación B), calidad constructiva y accesibilidad
          económica real, con precios entre 119.000 € y 161.780 €. Este proyecto
          confirma que un modelo de vivienda digna, sostenible y asequible para
          residentes es posible hoy, no en teoría.
        </p>
        </EdgeReveal>
      </SectionSplit>

      {/* Segunda sección */}
      <SectionSplit
        title="Compromiso Social"
        imageId="edificio4_lpiwxj"
        align="right"
      >
        <EdgeReveal>
          <h2 className="text-4xl lg:text-6xl font-[font--philosopher] text-shadow-lg text-white mb-6">
            Plan estratégico para 2.000 viviendas nuevas en Baleares
          </h2>
          <p className="text-2xl lg:text-3xl text-white font-[font--philosopher] text-shadow-lg text-pretty">
            A partir del análisis técnico de 227 edificios con capacidad de
            reconversión o desarrollo, Grup Ambtu ha diseñado un plan de
            crecimiento que permitiría añadir hasta 2.000 nuevas viviendas al
            parque residencial de las islas. Cada proyecto se plantea con
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
        align="left"
      >
        <EdgeReveal>
          <h2 className="text-4xl lg:text-6xl font-[font--philosopher] text-shadow-lg text-white mb-6">
            La necesidad real: 9.100 residentes en lista de espera
          </h2>
          <p className="text-2xl lg:text-3xl text-white font-[font--philosopher] text-shadow-lg text-pretty">
            Actualmente, más de 9.100 personas aguardan la oportunidad de
            acceder a una vivienda digna en Baleares. Este volumen de demanda
            guía el sistema de puntuación desarrollado por Grup Ambtu y marca
            dónde tiene sentido iniciar nuevos proyectos: zonas con alta
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
        align="right"
      >
        <EdgeReveal>
          <h2 className="text-4xl lg:text-6xl font-[font--philosopher] text-white mb-6">
            Reconocimiento público: Premio PIMEM 2025
          </h2>
          <p className="text-2xl lg:text-3xl text-white font-[font--philosopher] text-pretty">
            En noviembre de 2025, Grup Ambtu fue distinguido por PIMEM con el
            premio a la Responsabilidad Social y Ética Empresarial. El galardón
            reconoce la labor del grupo en la promoción de vivienda para
            residentes y su defensa pública de un modelo equilibrado entre
            turismo y vivienda. La frase que marcó la ceremonia resume su
            misión: “Viviendas para los residentes. Hoteles para los turistas.”
            Una declaración de principios en un momento crítico para las islas.
          </p>
        </EdgeReveal>
      </SectionSplit>
      <Footer />
    </>
  );
}
