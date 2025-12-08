"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { cloudImage } from "@/lib/cloudinary";
import { useScrollNavbar } from "@/hooks/useScrollNavbar";

export default function Navbar() {
  const { isAtTop, showNavbar } = useScrollNavbar();
  const [isOpen, setIsOpen] = useState(false);

  const whiteLogo = cloudImage("ligthLogo_is6zy8");
  const blackLogo = cloudImage("logo3_kze5lx");

  // CLIENT-SAFE STYLES
  const bgColor = isAtTop && !isOpen ? "bg-transparent" : "bg-white";
  const borderColor =
    isAtTop && !isOpen ? "border-transparent" : "border-gray-300";

  const linkColors = isAtTop && !isOpen ? "text-white" : "text-black";
  const iconColor = isAtTop && !isOpen ? "text-white" : "text-black";
  const logoSrc = isAtTop && !isOpen ? whiteLogo : blackLogo;

  return (
    <>
      {/* Hover zone */}
<div
  className="fixed top-0 left-0 w-full h-[30px] z-60"
/>

      <header
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-700
          ${showNavbar ? "translate-y-0" : "-translate-y-full"}
          ${bgColor}
        `}
      >
        <nav
          className={`flex items-center justify-between gap-6 border-b ${borderColor}
            transition-colors px-6 md:px-12 lg:px-20 py-4
          `}
        >
          {/* HAMBURGUESA */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className={`w-7 h-7 ${iconColor}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
                    {/* LOGO */}
          <Link href="/" className="min-w-[120px]">
            <Image
              src={logoSrc}
              alt="Grup Ambtu"
              width={120}
              height={120}
              className="cursor-pointer select-none"
            />
          </Link>

          {/* MENÚ */}
          <ul
            className={`
              absolute md:static top-full left-0 w-full md:w-auto
              flex flex-col md:flex-row items-center gap-10 md:gap-6 lg:gap-10 font-[--font-philosopher]
              ${isOpen ? "block bg-white py-8" : "hidden md:flex"}
            `}
          >
            {[
              { href: "/", label: "Inicio" },
              { href: "/about", label: "Empresa" },
              { href: "/proyects", label: "Proyectos" },
              { href: "/contacto", label: "Contacto" },
              { href: "/social-media", label: "Social Media" },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`${linkColors} text-md md:text-lg lg:text-xl transition-colors hover:text-gray-400 hover:scale-110`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
