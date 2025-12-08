"use client";
import { useScrollEdgeReveal } from "@/hooks/useScrollEdgeReveal";

type Props = {
  children: React.ReactNode;
  offset?: number; // controla cuándo aparece/desaparece
  className?: string;
};

export default function EdgeReveal({ children, offset = 20, className = "" }: Props) {
  const { ref, visible } = useScrollEdgeReveal(offset);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
        ${className}`}
    >
      {children}
    </div>
  );
}