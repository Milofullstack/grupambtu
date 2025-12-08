import { useEffect, useRef, useState } from "react";

export function useScrollEdgeReveal(offset: number = 150) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleScroll = () => {
      const rect = el.getBoundingClientRect();
      const scrollingDown = window.scrollY > lastY.current;
      lastY.current = window.scrollY;

      // ⬇️ Scroll hacia abajo → aparece (offset controla antes/después)
      if (scrollingDown && rect.bottom <= window.innerHeight - offset) {
        setVisible(true);
      }

      // ⬆️ Scroll hacia arriba → desaparece (offset simétrico)
      if (!scrollingDown && rect.top >= window.innerHeight + offset) {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [offset]);

  return { ref, visible };
}