"use client";

import { useState, useEffect } from "react";

export function useScrollDirection() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);

  // 🔥 solución final: inicializar listo SOLO en el cliente
  const [ready] = useState(() => typeof window !== "undefined");

  useEffect(() => {
    if (!ready) return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 30) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setIsAtTop(currentScrollY <= 10);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, ready]);

  const handleMouseEnterTop = () => setShowNavbar(true);

  return { isOpen, setIsOpen, showNavbar, handleMouseEnterTop, isAtTop, ready };
}