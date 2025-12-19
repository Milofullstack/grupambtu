import Image from "next/image";
import { cloudImage } from "@/lib/cloudinary";

type Props = {
  title: React.ReactNode;
  columns: [React.ReactNode, React.ReactNode];
  imageId: string;
  imageAlt?: string;
  bgColor?: string;
};

export default function EditorialIntro({
  title,
  columns,
  imageId,
  imageAlt = "",
  bgColor = "bg-transparent",
}: Props) {
  return (
    <section className={`w-full ${bgColor}`}>
      <div className="mx-auto max-w-6xl px-8 md:px-16 pt-32 md:pt-42">
        <div className="mb-12">
          {title}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-8 xl:mb-20">
          <div>{columns[0]}</div>
          <div>{columns[1]}</div>
        </div>

        <div className="relative w-full h-[50vh] md:h-[70vh]">
          <Image
            src={cloudImage(imageId)}
            alt={imageAlt}
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}