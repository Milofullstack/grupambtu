"use client";
import Image from "next/image";
import { cloudImage } from "@/lib/cloudinary";

interface props {
  title: string;
  imageId: string;
  align?: "left" | "right";
  children: React.ReactNode;
}

export default function SectionAbout({
  title,
  imageId,
  align = "right",
  children,
}: props) {
  const imageUrl = cloudImage(imageId);
  const isRight = align === "right";

  return (
    <section className="relative w-full h-svh flex items-center py-20">
      <div className="absolute inset-0 -z-10">
        <Image src={imageUrl} alt={title} fill className="object-cover object-top" />
      </div>
      <div className="absolute inset-0 bg-black/50 -z-10" />
      <div
        className={`max-w-8xl w-full h-svh mx-auto px-8 md:px-24 flex flex-col justify-center  ${
          isRight ? "items-end" : "items-start"
        }`}
      >
        <div className="w-full h-svh xl:w-2/3 flex flex-col justify-center ">
        {children}
        </div>
      </div>
    </section>
  );
}
