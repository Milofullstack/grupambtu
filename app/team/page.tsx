import Image from "next/image";
import { cloudImage } from "@/lib/cloudinary";
import TeamIntro from "@/components/team/teamIntro";
import EdgeReveal from "@/components/EdgeReveal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function EquipoPage() {
  return (
    <>
      <Navbar forceDarkAtTop={true} />
      <TeamIntro
        bgColor="bg-[#f8f6f2]"
        imageId="German"
        imageAlt="Equipo técnico de Grup Ambtu"
        title={  
            <h1 className="font-philosopher text-4xl md:text-6xl text-black animate-fade-in-up">
              Nuestro equipo
            </h1>
        }
        columns={[
          <div key="col1" className="animate-fade-in-up">
            <p className="font-garamond text-xl text-gray-700 leading-relaxed">
              La complejidad del acceso a la vivienda ha dejado de ser una
              cuestión técnica aislada. Hoy es un problema sistémico, atravesado
              por normativa cambiante, limitaciones económicas, presión
              territorial y una demanda social creciente que no admite
              soluciones simplistas. En este contexto, proyectar vivienda ya no
              consiste únicamente en diseñar edificios. Exige comprender el
              territorio, anticipar procesos administrativos, coordinar agentes
              diversos y tomar decisiones responsables que resistan el paso del
              tiempo.
            </p>
          </div>,
          <div key="col2" className="animate-fade-in-up">
            <p className="font-garamond text-xl text-gray-700 leading-relaxed">
              Frente a esta realidad, ningún perfil individual —por brillante
              que sea— puede ofrecer respuestas completas. Arquitectos,
              ingenieros, técnicos, gestores y especialistas deben trabajar de
              forma coordinada, compartiendo conocimiento y criterio, para
              transformar complejidad en soluciones habitables y viables.
            </p>
          </div>,
        ]}
      />
      <main className="w-full bg-[#f8f6f2]">
        {/* ARQUITECTURA */}
        <section className="mx-auto max-w-6xl  px-8 md:px-16 pt-32">
          <div className="flex flex-col gap-16">
            <EdgeReveal>
              <h2 className="font-philosopher text-3xl md:text-5xl text-black">
                Arquitectura
              </h2>
            </EdgeReveal>

            <EdgeReveal>
              <p className="font-garamond text-xl text-gray-700 max-w-3xl">
                La arquitectura asume el reto de equilibrar ambición y realismo.
                Entre lo expresivo y lo estrictamente funcional, el equipo busca
                un punto intermedio donde el diseño sea eficiente, sostenible y
                económicamente viable, sin renunciar a la calidad espacial. Cada
                proyecto se concibe como parte de un entorno mayor: el edificio
                no es un objeto aislado, sino un elemento que dialoga con la
                ciudad, el paisaje y las personas que lo habitan.
              </p>
            </EdgeReveal>

            {/* Grid proyectos */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {["edificio3_vmunh8", "edificio2_scggws", "edificio1_qtgpsu"].map(
                (id) => (
                  <div key={id} className="relative h-[30vh]">
                    <Image
                      src={cloudImage(id)}
                      alt=""
                      fill
                      className="object-cover"
                    />
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* LANDSCAPE */}
        <section className="mx-auto max-w-6xl px-8 md:px-16 py-32">
          <div className="flex flex-col gap-16">
            <EdgeReveal>
              <h2 className="font-philosopher text-3xl md:text-5xl text-black">
                Landscape & Territorio
              </h2>
            </EdgeReveal>

            <EdgeReveal>
              <p className="font-garamond text-xl text-gray-700 max-w-3xl">
                El territorio no es un fondo neutro sobre el que construir. Es
                un sistema vivo, con límites, oportunidades y responsabilidades.
                El trabajo sobre paisaje y entorno integra criterios
                ambientales, sociales y urbanos, buscando soluciones que
                respeten el lugar, mejoren la calidad del espacio público y
                refuercen el vínculo entre vivienda y comunidad.s
              </p>
            </EdgeReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {["land1", "land2", "land3"].map((id) => (
                <div key={id} className="relative h-[30vh]">
                  <Image
                    src={cloudImage(id)}
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ENGINEERING */}
        <section className="mx-auto max-w-6xl px-8 md:px-16 py-32">
          <div className="flex flex-col gap-16">
            <EdgeReveal>
              <h2 className="font-philosopher text-3xl md:text-5xl text-black">
                Engineering
              </h2>
            </EdgeReveal>

            <EdgeReveal>
              <p className="font-garamond text-xl text-gray-700 max-w-3xl">
                La ingeniería convierte la intención arquitectónica en realidad
                construida. Desde la estructura hasta las instalaciones, su
                trabajo garantiza que cada decisión esté respaldada por
                criterios técnicos sólidos, normativos y económicos. La
                colaboración constante con arquitectura permite iterar
                soluciones de forma ágil, optimizando materiales, sistemas y
                procesos para asegurar eficiencia, seguridad y durabilidad.
              </p>
            </EdgeReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {["eng1", "eng2", "eng3"].map((id) => (
                <div key={id} className="relative h-[30vh]">
                  <Image
                    src={cloudImage(id)}
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
