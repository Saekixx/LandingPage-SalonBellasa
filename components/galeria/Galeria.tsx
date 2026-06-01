import Image from "next/image";
import { Card } from "@/components/ui/card";

const imagenesGaleria = [
  {
    id: 1,
    src: "/images/pelo.jpg",
    alt: "Textura cabello",
    className: "col-span-1 row-span-2",
  },
  {
    id: 2,
    src: "/images/cuenco.jpg",
    alt: "Cuenco",
    className: "col-span-1 row-span-1",
  },
  {
    id: 3,
    src: "/images/mujer1.jpg",
    alt: "Mujer rubia",
    className: "col-span-1 row-span-2",
  },
  {
    id: 4,
    src: "/images/espejo.jpg",
    alt: "Espejo marco antiguo",
    className: "col-span-1 row-span-1",
  },
  {
    id: 5,
    src: "/images/mujer2.jpg",
    alt: "Mujer cabello corto",
    className: "col-span-1 row-span-2",
  },
  {
    id: 6,
    src: "/images/perro.jpg",
    alt: "Perro",
    className: "col-span-1 row-span-2",
  },
  {
    id: 7,
    src: "/images/mujer3.jpg",
    alt: "Mujer morena",
    className: "col-span-1 row-span-2",
  },
  {
    id: 8,
    src: "/images/auto.jpg",
    alt: "Auto miniatura",
    className: "col-span-1 row-span-2",
  },
];

export function Galeria() {
  return (
    <div className="mb-20">
      {/* Encabezado con línea decorativa */}
      <div className="flex items-center gap-4 mb-8">
        <h3 className="text-3xl font-extrabold tracking-tight text-purple-950 whitespace-nowrap">
          Nuestra Galería
        </h3>
        <div className="h-0.5 w-full bg-purple-200/80 rounded-full" />
      </div>

      {/* Grid Asimétrico */}
      <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[140px] gap-4 md:gap-5">
        {imagenesGaleria.map((img) => (
          <Card
            key={img.id}
            className={`relative overflow-hidden rounded-2xl border-none shadow-xs bg-purple-50/50 ${img.className}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              priority={img.id <= 4} // Optimiza la carga de las primeras imágenes visibles
              className="object-cover object-center transform hover:scale-[1.03] transition-transform duration-500"
            />
          </Card>
        ))}
      </div>
    </div>
  );
}
