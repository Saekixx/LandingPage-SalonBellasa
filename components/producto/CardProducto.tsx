"use client";

import Image from "next/image";
import { Plus } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Producto } from "@/types/producto";

interface CardProductoProps {
  producto: Producto;
  props?: React.HTMLAttributes<HTMLDivElement>;
}

function CardProductoInteractive({ producto, props }: CardProductoProps) {
  const handleAddToCart = (id: number) => {
    console.log("Añadido al carrito:", id);
  };

  return (
    <Card
      className="group overflow-hidden rounded-3xl border border-gray-100 shadow-sm transition-all hover:border-gray-200 hover:shadow-lg"
      {...props}
    >
      <CardContent className="p-0">
        <div className="relative aspect-square w-full overflow-hidden">
          <Image
            src={producto.imagen}
            alt={producto.nombre}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>
      </CardContent>

      <div className="flex-col p-5">
        <CardHeader className="grow space-y-1 p-0">
          <CardTitle className="line-clamp-2 text-xl font-semibold text-gray-900">
            {producto.nombre}
          </CardTitle>
          <CardDescription className="text-sm text-gray-500">
            {producto.categoria}
          </CardDescription>
        </CardHeader>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-2xl font-extrabold text-[#4a0e4e]">
            S/{producto.precio.toFixed(2)}
          </span>
          <Button
            size="icon"
            className="h-10 w-10 rounded-full bg-[#4a0e4e] hover:bg-[#380a3b] text-white shadow-md transition-transform active:scale-95 cursor-pointer"
            onClick={() => handleAddToCart(producto.id)}
          >
            <Plus className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </Card>
  );
}

export default CardProductoInteractive;
