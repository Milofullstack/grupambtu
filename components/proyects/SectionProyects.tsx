"use client";

import Image from "next/image";
import { cloudImage } from "@/lib/cloudinary";

type Props = {
  title: string;
  imageId: string;
  align?: "left" | "right";
  children: React.ReactNode;
};

export default function SectionProyects({
  title,
  imageId,
  align = "left",
  children,
}: Props) {
  const imageUrl = cloudImage(imageId);
  const isRight = align === "right";

  return (
    <section className="relative w-full h-svh overflow-hidden xl:bg-[#f8f6f2]">
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

      <div className="relative grid h-full grid-cols-1 xl:grid-cols-2">
        {/* BLOQUE TEXTO */}
        <div
          className={`
            flex flex-col justify-center
            px-8 md:px-16 xl:px-24
            gap-6
            text-white xl:text-black
            text-center xl:text-left
            items-center xl:items-start
            ${isRight ? "xl:order-2" : "xl:order-1"}
          `}
        >

          <div className="font-garamond text-lg max-w-3xl">
            {children}
          </div>
        </div>

        {/* IMAGEN DESKTOP */}
        <div
          className={`
            relative hidden xl:block
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