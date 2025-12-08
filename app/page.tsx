import Hero from "../components/Hero";
import Filosofia from "../components/Filosofia";
import Proyectos from "../components/Proyectos";
import Equipo from "../components/Equipo";
import Servicios from "../components/Servicios";
import Contacto from "../components/Contacto";
import Location from "@/components/Location"
import Footer from "../components/Footer";

export default function Home() {
  return (
   <>
   <Hero />
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
