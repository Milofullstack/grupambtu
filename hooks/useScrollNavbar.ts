"use client";

import { useState, useEffect, useRef } from "react";

export function useScrollNavbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);

  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // ─────────────
      // 1) SI ESTÁ ARRIBA → SIEMPRE visible
      // ─────────────
      if (currentScrollY < 60) {
        setShowNavbar(true);
        setIsAtTop(true);
      } else {
        setIsAtTop(false);
      }

      // ─────────────
      // 2) Detectamos dirección real
      // ─────────────
      const isScrollingDown = currentScrollY > lastScrollY.current;
      const isScrollingUp = currentScrollY < lastScrollY.current;

      // ─────────────
      // 3) Ocultar (solo si realmente baja)
      // ─────────────
      if (isScrollingDown && currentScrollY > 20) {
        setShowNavbar(false);
      }

      // ─────────────
      // 4) Mostrar al subir (evitando micro-scroll con delta > 6px)
      // ─────────────
      if (isScrollingUp && lastScrollY.current - currentScrollY > 6) {
        setShowNavbar(true);
      }

      // actualizar referencia
      lastScrollY.current = currentScrollY;
    };

    // estado inicial
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { isAtTop, showNavbar };
}