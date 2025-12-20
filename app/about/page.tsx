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
          <h2 className="pt-20 text-2xl md:text-4xl lg:text-6xl text-center md:text-left font-philosopher text-shadow-lg  text-white mb-6 animate-fade-in-up">
            Grup Ambtu
          </h2>
          <p className="pt-10 text-md md:text-2xl lg:text-3xl text-white font-medium leading-relaxed text-shadow-lg text-center md:text-left font-garamond text-pretty animate-fade-in-up">
            Grup Ambtu nació con una misión clara: garantizar el acceso a una vivienda digna y asequible para quienes viven y trabajan en Baleares. Desde sus inicios, el grupo ha impulsado proyectos reales, como la entrega de las primeras 10 viviendas a precio limitado en Manacor en 2025, demostrando que un modelo más justo es posible. Su labor se centra en atender a los residentes de las islas, no en la especulación inmobiliaria.
          </p>
      </SectionSplit>

      {/* Segunda sección */}
      <SectionSplit title="Compromiso Social" imageId="DSC08354_a54uba" align="right">
        <EdgeReveal>
          <h2 className="text-2xl md:text-4xl lg:text-6xl text-center md:text-left font-philosopher leading-relaxed text-shadow-lg text-white mb-6">
            Compromiso Social
          </h2>
          </EdgeReveal>
          <EdgeReveal>
          <p className="text-sm md:text-2xl lg:text-3xl pt-10 text-white text-center md:text-left leading-relaxed text-shadow-lg font-garamond text-pretty">
            Nuestro trabajo se fundamenta en criterios transparentes, evaluación justa y responsabilidad ética. Este compromiso se refleja en hechos: Grup Ambtu ha sido reconocido públicamente con el Premio a la Responsabilidad Social y Ética Empresarial otorgado por PIMEM en 2025, un reconocimiento a su labor en defensa de los residentes y su postura clara:<span className="font-garamond font-semibold text-xl md:text-3xl lg:text-4xl font-sans text-white">"viviendas para los residentes, hoteles para los turistas”.</span></p>
            </EdgeReveal>
            <EdgeReveal> 
            <p className="text-md md:text-2xl lg:text-3xl pt-10 text-white text-center md:text-left leading-relaxed text-shadow-lg font-garamond text-pretty">
             La empresa actúa con responsabilidad, utilizando datos reales como las más de 9.100 personas inscritas en listas de demanda de vivienda en Baleares para orientar sus decisiones y priorizar proyectos donde más se necesitan.
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
          <h2 className="text-2xl md:text-4xl lg:text-6xl text-center md:text-left font-philosopher leading-relaxed text-shadow-lg text-white mb-6">
            Vivienda Digna
          </h2>
          </EdgeReveal>
          <EdgeReveal>
          <p className="pt-10 text-sm md:text-2xl lg:text-3xl  text-white font-medium leading-relaxed text-shadow-lg text-center md:text-left font-garamond text-pretty">
            Creemos que la vivienda debe ser accesible para quienes viven y trabajan en Baleares. Esta convicción guía cada proyecto: desde la identificación de más de 227 edificios con potencial para crear hasta 2.000 viviendas nuevas, hasta el análisis de 750 locales susceptibles de convertirse en hogares asequibles. </p>
            </EdgeReveal>
            <EdgeReveal>
            <p className="pt-10 text-sm md:text-2xl lg:text-3xl  text-white font-medium leading-relaxed text-shadow-lg text-center md:text-left font-garamond text-pretty"> Nuestro trabajo está orientado a la realidad de las islas y a la necesidad urgente de vivienda digna para residentes, jóvenes, trabajadores esenciales y familias locales. Cada iniciativa parte del mismo principio: un hogar no debe ser un privilegio, sino un derecho garantizado.
          </p>
        </EdgeReveal>
        </SectionSplit>

              <SectionSplit
        title="Grup Ambtu"
        imageId="German"
        align="right"
      >
        <EdgeReveal>
          <h2 className="text-2xl md:text-4xl lg:text-6xl text-center md:text-left font-philosopher leading-relaxed text-shadow-lg text-white mb-6">
            Futuro y Responsabilidad
          </h2>
          </EdgeReveal>
          <EdgeReveal>
          <p className=" pt-10 text-sm md:text-2xl lg:text-3xl text-white text-center md:text-left leading-relaxed text-shadow-lg font-garamond text-pretty">
            El futuro de Baleares requiere soluciones reales y sostenibles. Grup Ambtu ha identificado 227 edificios con capacidad para desarrollar hasta 2.000 viviendas nuevas, además de 750 locales susceptibles de convertirse en hogares. Este trabajo se basa en datos como las más de 9.100 personas en lista de demanda, priorizando a quienes viven y trabajan en las islas. Nuestro compromiso es actuar con responsabilidad urbanística y ofrecer proyectos que respondan a necesidades reales, no a intereses especulativos.
          </p>
          </EdgeReveal>
      </SectionSplit>
        <Footer/>
    </>
  );
}
