import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function PoliticaPrivacidadPage() {
  return (
    <>
      <Navbar forceDarkAtTop={true} />
      <section className=" bg-[#f8f6f2]">
        <div className="mx-auto max-w-4xl px-8 md:px-16 py-42 text-gray-700">
          <h1 className="font-philosopher text-4xl md:text-5xl text-black mb-12">
            Política de Privacidad
          </h1>

          <div className="space-y-8 font-garamond text-lg leading-relaxed">
            <p>
              Groupantoo se compromete a proteger la privacidad de los usuarios
              y a tratar sus datos personales conforme a lo dispuesto en el
              Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018, de
              Protección de Datos Personales y garantía de los derechos
              digitales (LOPDGDD).
            </p>

            <p>
              <strong>Responsable del tratamiento:</strong>
              <br />
              Groupantoo
              <br />
              Email de contacto: info@groupantoo.com
            </p>

            <p>
              <strong>Datos personales tratados:</strong>
              <br />
              Los únicos datos personales que se recogen a través del sitio web
              son el nombre y la dirección de correo electrónico facilitados por
              el usuario mediante el formulario de contacto.
            </p>

            <p>
              <strong>Finalidad del tratamiento:</strong>
              <br />
              Atender y responder a las consultas o solicitudes de información
              enviadas por los usuarios, así como mantener comunicaciones
              relacionadas con dichas solicitudes.
            </p>

            <p>
              <strong>Base legal del tratamiento:</strong>
              <br />
              El consentimiento expreso del usuario, otorgado mediante la
              aceptación de la presente Política de Privacidad antes del envío
              del formulario.
            </p>

            <p>
              <strong>Destinatarios de los datos:</strong>
              <br />
              Los datos podrán ser tratados por proveedores de servicios
              externos utilizados para la gestión del formulario de contacto
              (como FormsPre), los cuales actúan como encargados del
              tratamiento. Dichos proveedores pueden implicar transferencias
              internacionales de datos, aplicándose las garantías adecuadas
              conforme a la normativa vigente.
            </p>

            <p>
              <strong>Plazo de conservación:</strong>
              <br />
              Los datos personales se conservarán durante un máximo de 12 meses
              desde la última comunicación, tras lo cual serán eliminados.
            </p>

            <p>
              <strong>Derechos de las personas usuarias:</strong>
              <br />
              El usuario puede ejercer en cualquier momento sus derechos de
              acceso, rectificación, supresión, limitación del tratamiento,
              oposición y portabilidad mediante solicitud escrita dirigida al
              email de contacto indicado anteriormente.
            </p>

            <p>
              Asimismo, el usuario tiene derecho a presentar una reclamación
              ante la Agencia Española de Protección de Datos (www.aepd.es) si
              considera que el tratamiento de sus datos no se ajusta a la
              normativa vigente.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
