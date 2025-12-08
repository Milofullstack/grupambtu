import SectionSplit from "@/components/about/SectionAbout";
import EdgeReveal from "@/components/EdgeReveal";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>

      {/* Primera sección */}
      <SectionSplit
        title="Grup Ambtu"
        imageId="German"
        align="left"
      >
          <h2 className="text-4xl lg:text-6xl font-[font--philosopher] text-white mb-6 animate-fade-in-up">
            Grup Ambtu
          </h2>
          <p className="text-2xl lg:text-3xl text-white font-[font--philosopher] text-pretty animate-fade-in-up">
            Grup Ambtu nació con una misión: garantizar el acceso a vivienda
            digna en Baleares para quienes viven y trabajan allí. Nuestro
            compromiso no es inmobiliario: es social.
          </p>
      </SectionSplit>

      {/* Segunda sección */}
      <SectionSplit title="Compromiso Social" imageId="DSC08354_a54uba" align="right">
        <EdgeReveal>
          <h2 className="text-4xl lg:text-6xl font-[font--philosopher] text-white mb-6">
            Compromiso Social
          </h2>
          <p className="text-2xl lg:text-3xl text-white font-[font--philosopher] text-pretty">
            Nuestro trabajo se fundamenta en criterios transparentes, evaluación
            justa y responsabilidad ética.
          </p>
        </EdgeReveal>
      </SectionSplit>

      {/* Tercera sección */}
      <SectionSplit
        title="Vivienda Digna"
        imageId="DSC08369_hsdoi9"
        align="left"
      >
        <EdgeReveal>
          <h2 className="text-4xl lg:text-6xl font-[font--philosopher] text-white mb-6">
            Vivienda Digna
          </h2>
          <p className="text-2xl lg:text-3xl text-white font-[font--philosopher] text-pretty">
            Creemos que la vivienda debe ser accesible para quienes viven y trabajan en Baleares.
          </p>
        </EdgeReveal>
        </SectionSplit>
        <Footer/>
    </>
  );
}
