"use client";

import Image from "next/image";
import { cloudImage } from "@/lib/cloudinary";

interface Props {
  title: string;
  imageId: string;
  align?: "left" | "right";
  children: React.ReactNode;
}

export default function Proyects({
  title,
  imageId,
  align = "right",
  children,
}: Props) {
  const imageUrl = cloudImage(imageId);
  const isRight = align === "right";

  return (
    <section className="w-full min-h-svh flex flex-col lg:flex-row border-b border-gray-900">
      
      {/* TEXTO */}
      <div
        className={`
          flex items-center justify-center 
          w-full lg:w-1/2 
          px-8 md:px-16
          ${isRight ? "order-1 lg:order-none" : "order-1 lg:order-2"}
        `}
      >
        <div className="max-w-xl flex flex-col gap-10">
          {children}
        </div>
      </div>

      {/* IMAGEN (pantalla partida real) */}
      <div
        className={`
          relative 
          w-full lg:w-1/2 
          h-[50vh] lg:h-svh
          ${isRight ? "order-2 lg:order-0" : "order-2 lg:order-1"}
        `}
      >
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover object-center"
        />
      </div>
    </section>
  );
}