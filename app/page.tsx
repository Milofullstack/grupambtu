import Hero from "../components/Hero";
import Filosofia from "../components/Filosofia";
import Proyectos from "../components/Proyectos";
import Equipo from "../components/Equipo";
import Servicios from "../components/Servicios";
import Contacto from "../components/Contacto";
import Location from "@/components/Location"
import Footer from "../components/Footer";
import TeamIntro from "@/components/team/teamIntro";
import EdgeReveal from "@/components/EdgeReveal";

export default function Home() {
  return (
   <>
   <Hero />
   {/* <TeamIntro
  bgColor="bg-[#f8f6f2]"
  imageId="German"
  imageAlt="Equipo técnico de Grup Ambtu"
  title={
    <EdgeReveal>
      <h1 className="font-philosopher text-4xl md:text-6xl text-black">
        Nuestro equipo
      </h1>
    </EdgeReveal>
  }
  columns={[
    <EdgeReveal key="col1">
      <p className="font-garamond text-xl text-gray-700 leading-relaxed">
        Nuestra filosofía nace del deseo de construir con sentido,
              cuidar el entorno y crear hogares donde las personas vivan con
              dignidad.
      </p>
    </EdgeReveal>,
    <EdgeReveal key="col2" className="animate-fade-in-up">
      <p className="font-garamond text-xl text-gray-700 leading-relaxed">
        Frente a esta realidad, ningún perfil individual —por brillante que
        sea— puede ofrecer respuestas completas...
      </p>
    </EdgeReveal>,
  ]}
/> */}
   <Filosofia />
   <Proyectos />
   <Equipo />
   <Servicios />
   <Location/>
   <Contacto />
   <Footer/>
   </>
  );
}
