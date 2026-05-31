"use client";

import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Servicio } from "@/types/servicio";

interface CardServicioProps {
  servicio: Servicio;
  props?: React.HTMLAttributes<HTMLDivElement>;
}

function CardServicio({ servicio, props }: CardServicioProps) {
  const handleAgendar = (id: number) => {
    console.log("Agendar servicio ID:", id);
  };

  return (
    <Card
      // h-full y flex-col para mantener simetría de alturas si se usa en listas o carruseles
      className="group overflow-hidden rounded-3xl border border-gray-100/80 bg-white shadow-sm transition-all hover:border-gray-200 hover:shadow-lg h-full flex flex-col"
      {...props}
    >
      {/* Contenedor de la Imagen con Badge de tiempo flotante */}
      <CardContent className="p-0 shrink-0 relative">
        <div className="relative aspect-square w-full overflow-hidden">
          <Image
            src={servicio.imagen}
            alt={servicio.nombre}
            fill
            className="object-cover transition-transform group-hover:scale-105"
            sizes="(max-w-7xl) 25vw, 100vw"
          />
        </div>

        {/* Badge de Duración (Flotante arriba a la derecha) */}
        {servicio.duracion_minutos && (
          <div className="absolute top-4 right-4 rounded-full bg-white/90 backdrop-blur-xs px-3 py-1 text-xs font-semibold text-purple-900 shadow-xs">
            {servicio.duracion_minutos} min
          </div>
        )}
      </CardContent>

      {/* Cuerpo de la Tarjeta */}
      <div className="flex flex-col p-5 flex-1 justify-between">
        <CardHeader className="space-y-1.5 p-0">
          <CardTitle className="text-2xl font-bold text-slate-900 tracking-tight">
            {servicio.nombre}
          </CardTitle>
          {/* Ajustamos el line-clamp a 3 para descripciones un poco más detalladas */}
          <CardDescription className="line-clamp-3 text-sm text-slate-500 font-normal leading-relaxed">
            {servicio.descripcion}
          </CardDescription>
        </CardHeader>

        {/* Fila Inferior: Precio y Botón Agendar */}
        <div className="mt-6 flex items-center justify-between pt-2">
          <span className="text-3xl font-extrabold text-[#4a0e4e]">
            ${servicio.precio.toFixed(2)}
          </span>
          <Button
            className="rounded-full bg-gradient-to-r from-purple-800 to-pink-600 px-6 py-5 font-bold text-white shadow-md transition-all hover:opacity-95 active:scale-95 cursor-pointer"
            onClick={() => handleAgendar(servicio.id)}
          >
            Agendar
          </Button>
        </div>
      </div>
    </Card>
  );
}

export default CardServicio;
