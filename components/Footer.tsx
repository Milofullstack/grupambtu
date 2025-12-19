import Link from "next/link";
import Image from "next/image";
import { cloudImage } from "../lib/cloudinary";

export default function Footer() {
  const imageUrl = cloudImage("logo3_kze5lx")
  return (
    <footer className="bg-[#f8f6f2] text-black ">
      <div className="w-full mb-20 pt-16  flex flex-col items-center"> 
        <Link href="/">
            <Image
              src={imageUrl}
               alt="Grup Ambtu"
              width={150}
              height={150}
              className="cursor-pointer"
            />
          </Link>
      </div>
      <div className="w-full mx-auto mb-24 py-12 px-16 mt-20 flex flex-col text-center md:flex-row justify-evenly gap-10 md:gap-20">
        
        {/* Columna 1: Navegación */}
        <div className="flex-1 md:flex-1">
          <h3 className="text-xl font-philosopher mb-4">Navegación</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-white">Inicio</Link></li>
            <li><Link href="/about" className="hover:text-white">Empresa</Link></li>
            <li><Link href="/projects" className="hover:text-white">Proyectos</Link></li>
            <li><Link href="/team" className="hover:text-white">Equipo</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contacto</Link></li>
          </ul>
        </div>

        {/* Columna 2: Legal */}
        <div className="flex-1 md:flex-1">
          <h3 className="text-xl font-philosopher mb-4">Información legal</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li><Link href="/aviso-legal" className="hover:text-white">Aviso legal</Link></li>
            <li><Link href="/privacidad" className="hover:text-white">Política de privacidad</Link></li>
            <li><Link href="/cookies" className="hover:text-white">Política de cookies</Link></li>
          </ul>
        </div>

        {/* Columna 3: Contacto + redes */}
        <div className="flex-1 md:flex-1">
          <h3 className="text-xl font-philosopher mb-4">Contacto</h3>
          <p className="text-sm text-gray-500 mb-2">info@grupambtu.com</p>
          <p className="text-sm text-gray-500 mb-4">Palma de Mallorca, Illes Balears</p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/grupambtu"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white text-gray-300 transition-colors text-xl"
              aria-label="Instagram"
            >
              {/* <FaInstagram /> */}
            </a>
          </div>
        </div>
      </div>

      {/* Línea final */}
      <div className="md:py-10 border-t border-gray-700 bg-[#f8f6f2] pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} GrupAmbtu. Todos los derechos reservados.
      </div>
    </footer>
  );
}