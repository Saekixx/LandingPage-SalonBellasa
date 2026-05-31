"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export interface Servicio {
  id: number;
  categoria: string;
}

interface CardCatalogoServicioProps {
  servicio: Servicio;
  props?: React.HTMLAttributes<HTMLDivElement>;
}

function CardCatalogoServicio({ servicio, props }: CardCatalogoServicioProps) {
  const urlDinamica = `/agenda/${servicio.categoria.toLowerCase().replace(/\s+/g, "-")}`;
  
  const obtenerImagenPorCategoria = (cat: string) => {
    const categoriaLimpia = cat.toLowerCase();
    if (categoriaLimpia.includes("cabello") || categoriaLimpia.includes("balayage")) {
      return "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=600";
    }
    if (categoriaLimpia.includes("maquillaje") || categoriaLimpia.includes("gala")) {
      return "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=600";
    }
    return "https://images.unsplash.com/photo-1604654894610-df490688a50e?auto=format&fit=crop&q=80&w=600"; // Por defecto Manicure
  };

  return (
    <Card
      className="group w-full max-w-[380px] overflow-hidden rounded-[2.5rem] border border-transparent bg-transparent shadow-none transition-all duration-300 font-sans select-none"
      {...props}
    >
      <CardContent className="p-0">
        <Link href={urlDinamica} className="relative aspect-square w-full overflow-hidden block rounded-[2.5rem] shadow-sm">
          <Image
            src={obtenerImagenPorCategoria(servicio.categoria)}
            alt={servicio.categoria}
            fill
            sizes="(max-w-780px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 group-hover:brightness-95"
            priority
          />
          <span className="absolute top-4 right-5 bg-white/80 backdrop-blur-[2px] text-[#8A8A8A] text-[11px] font-medium px-3 py-1 rounded-full shadow-sm z-10">
            Disponible
          </span>
        </Link>
      </CardContent>

      <div className="flex-col mt-5 px-1">
        <CardHeader className="grow space-y-2 p-0">
          <CardTitle className="text-[22px] font-bold text-[#2D2D2D] tracking-tight leading-tight">
            {servicio.categoria}
          </CardTitle>
          <CardDescription className="text-[13px] text-[#757575] tracking-wide leading-relaxed">
            Servicio profesional especializado de nuestro catálogo (ID: {servicio.id}).
          </CardDescription>
        </CardHeader>

        <div className="mt-5 flex items-center justify-between">
          <span className="text-[14px] font-medium text-[#757575]">
            Ver detalles
          </span>

          <Button
            asChild
            className="bg-[#A0006D] hover:bg-[#800055] text-white text-[13px] font-semibold px-7 py-5 rounded-full transition-all duration-300 shadow-[0_4px_12px_rgba(160,0,109,0.2)] hover:shadow-[0_6px_16px_rgba(160,0,109,0.35)] hover:-translate-y-[1px] active:translate-y-0 cursor-pointer"
          >
            <Link href={urlDinamica}>
              Agendar
            </Link>
          </Button>
        </div>
      </div>
    </Card>
  );
}

export default CardCatalogoServicio;