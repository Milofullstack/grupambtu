"use client";
import Link from "next/link";
import Image from "next/image";
import { useScrollDirection } from "@/app/hooks/useScrollNavbar";
import { cloudImage } from "../lib/cloudinary";

export default function Navbar() {
  const whiteLogo = cloudImage("ligthLogo_is6zy8");
  const blackLogo = cloudImage("logo3_kze5lx");

  const {
    isOpen,
    setIsOpen,
    showNavbar,
    handleMouseEnterTop,
    isAtTop,
    ready,
  } = useScrollDirection();

  // 🔥 evitar mismatch: mientras no esté ready, forzamos valores neutrales
  const effectiveIsAtTop = ready ? isAtTop : false;

  // transparente solo arriba y menú cerrado
  const isTransparent = ready && effectiveIsAtTop && !isOpen;

  // colores de links
  const linkColors = isOpen
    ? "text-black hover:text-gray-600"
    : isTransparent
    ? "text-white hover:text-gray-200"
    : "text-black hover:text-gray-600";

  const showLightLogo = isTransparent && !isOpen;

  return (
    <div>
      {/* Área sensible al hover en la parte superior */}
      <div
        className="fixed top-0 left-0 w-full h-[30px] z-60"
        onMouseEnter={handleMouseEnterTop}
      />

      <header
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-1000
          ${showNavbar ? "translate-y-0" : "-translate-y-full"} hover:translate-y-0
          ${isTransparent ? "bg-transparent" : "bg-white"}`}
      >
        <nav
          className={`flex items-center justify-between gap-6 border-b
            ${isTransparent ? "border-transparent" : "border-gray-300"}
            transition-colors`}
        >
          <div className="py-4 mx-8 md:mx-16 lg:mx-24">
            {/* Botón Hamburguesa */}
            <button
              className="md:hidden focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Abrir menú"
              aria-expanded={isOpen}
              aria-controls="main-menu"
            >
              <svg
                className={`w-6 h-6 md:w-8 md:h-8 ${
                  isTransparent ? "text-white" : "text-black"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>

            {/* Menú */}
            <ul
              id="main-menu"
              className={`
                flex flex-col items-center md:flex-row font-[font--philosopher] font-medium text-xl lg:text-2xl md:items-center
                gap-5 md:gap-8 lg:gap-12 2xl:gap-20
                absolute md:static top-full left-0 w-full md:w-auto
                ${isOpen ? "block" : "hidden md:flex"}
                ${isOpen ? "bg-white" : "bg-transparent"}
                px-10 py-10 md:p-0
                transition-colors
              `}
            >
              {[
                { href: "/", label: "Inicio" },
                { href: "/empresa", label: "Empresa" },
                { href: "/historia", label: "Historia" },
                { href: "/proyectos", label: "Proyectos" },
                { href: "/contacto", label: "Contacto" },
                { href: "/social-media", label: "Social Media" },
              ].map((item) => (
                <li key={item.href} className="transition-transform duration-200 hover:scale-105">
                  <Link
                    href={item.href}
                    className={`${linkColors} transition-colors`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center pt-4 pr-6 md:pr-8 lg:pr-16">
            <Link href="/" className="block">
              <Image
                src={showLightLogo ? whiteLogo : blackLogo}
                alt="Grup Ambtu"
                width={105}
                height={85}
                className="block cursor-pointer min-w-[125px] md:w-[125px] md:h-[125px]"
              />
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
}