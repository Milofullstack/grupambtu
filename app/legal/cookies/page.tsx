import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function PoliticaCookiesPage() {
  return (
    <>
      <Navbar forceDarkAtTop={true} />
      <section className=" bg-[#f8f6f2]">
        <div className="mx-auto max-w-4xl px-8 md:px-16 py-42 text-gray-700">
          <h1 className="font-philosopher text-4xl md:text-5xl text-black mb-12">
            Política de Cookies
          </h1>

          <div className="space-y-8 font-garamond text-lg leading-relaxed">
            <p>
              Este sitio web utiliza cookies propias de carácter técnico,
              estrictamente necesarias para su correcto funcionamiento y para
              garantizar la seguridad en la navegación.
            </p>

            <p>
              No se utilizan cookies analíticas, publicitarias ni de terceros
              que requieran el consentimiento previo del usuario.
            </p>

            <p>
              <strong>Cookies técnicas:</strong>
              <br />
              Permiten la navegación a través del sitio web y el uso de las
              diferentes opciones o servicios que en él existen. Estas cookies
              no recopilan información personal y están exentas de la obligación
              de consentimiento según la normativa vigente.
            </p>

            <p>
              <strong>Servicios de terceros:</strong>
              <br />
              El sitio web puede ofrecer contenidos de terceros, como mapas de
              Google Maps. Dichos contenidos permanecen bloqueados por defecto y
              solo se cargan cuando el usuario lo autoriza expresamente mediante
              la acción correspondiente. Al cargar estos contenidos, pueden
              transmitirse datos personales, como la dirección IP, a dichos
              terceros.
            </p>

            <p>
              El usuario puede configurar su navegador para bloquear o eliminar
              las cookies instaladas en su equipo. No obstante, la desactivación
              de cookies técnicas puede afectar al correcto funcionamiento del
              sitio web.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
