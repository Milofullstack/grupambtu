"use client";

import Image from "next/image";
import { cloudImage } from "@/lib/cloudinary";

type Props = {
  title: string;
  imageId: string;
  align?: "left" | "right";
  children: React.ReactNode;
};

export default function SectionProjects({
  title,
  imageId,
  align = "left",
  children,
}: Props) {
  const imageUrl = cloudImage(imageId);
  const isRight = align === "right";

  return (
    <section className="relative w-full h-svh overflow-hidden bg-[#f8f6f2]">
      {/* IMAGEN MOBILE COMO FONDO */}
      <div className="absolute inset-0 xl:hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* CONTENEDOR FLEX */}
      <div className="relative flex flex-col xl:flex-row h-full py-20 md:py-0">
        {/* BLOQUE TEXTO */}
        <div
          className={`w-full h-full
            flex flex-col justify-center items-center
            text-center
            px-8 md:px-16 xl:px-24
            gap-10
            text-white xl:text-black
            xl:text-left xl:items-start
            xl:w-1/2
            ${isRight ? "xl:order-2" : "xl:order-1"}
          `}
        >
          <div className="flex flex-col justify-center items-center font-garamond text-lg max-w-3xl">
            {children}
          </div>
        </div>

        {/* IMAGEN DESKTOP */}
        <div
          className={`
            relative hidden xl:block
            xl:w-1/2
            ${isRight ? "xl:order-1" : "xl:order-2"}
          `}
        >
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}