import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function AvisoLegalPage() {
  return (
    <>
      <Navbar forceDarkAtTop={true} />
      <section className=" bg-[#f8f6f2]">
        <div className="mx-auto max-w-4xl px-8 md:px-16 py-42 text-gray-700">
          <h1 className="font-philosopher text-4xl md:text-5xl text-black mb-12">
            Aviso Legal
          </h1>

          <div className="space-y-8 font-garamond text-lg leading-relaxed">
            <p>
              En cumplimiento con el deber de información establecido en la Ley
              34/2002, de 11 de julio, de servicios de la sociedad de la
              información y de comercio electrónico (LSSI-CE), se facilitan a
              continuación los datos identificativos del titular del sitio web.
            </p>

            <p>
              <strong>Titular:</strong> Groupantoo
              <br />
              <strong>Forma jurídica:</strong> Sociedad (datos fiscales
              pendientes de incorporación)
              <br />
              <strong>NIF:</strong> Pendiente de asignación
              <br />
              <strong>Domicilio social:</strong> Según consta en el sitio web
              corporativo
              <br />
              <strong>Email de contacto:</strong> info@groupantoo.com
              <br />
              <strong>Teléfono:</strong> +34 971 XXX XXX
            </p>

            <p>
              El presente sitio web tiene carácter corporativo e informativo. Su
              finalidad es ofrecer información sobre la actividad de Groupantoo
              y facilitar el contacto con la entidad a través de los medios
              habilitados.
            </p>

            <p>
              El acceso y uso de este sitio web atribuye la condición de
              usuario, implicando la aceptación plena de las condiciones aquí
              expuestas. El titular se reserva el derecho a modificar, en
              cualquier momento y sin previo aviso, la presentación,
              configuración y contenidos del sitio web.
            </p>

            <p>
              Todos los contenidos del sitio web, incluyendo textos, imágenes,
              diseño gráfico y código fuente, son titularidad de Groupantoo o de
              terceros debidamente autorizados, quedando prohibida su
              reproducción, distribución o transformación sin autorización
              expresa.
            </p>

            <p>
              La legislación aplicable será la española. Para la resolución de
              cualquier controversia que pudiera derivarse del acceso o uso del
              sitio web, las partes se someterán a los Juzgados y Tribunales
              competentes conforme a derecho.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
