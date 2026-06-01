"use client";

import Image from "next/image";
import { Minus, Plus, Trash2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Producto } from "@/types/producto";

interface CardProductoCarritoProps {
  producto: Producto;
  cantidad: number;
  onAumentar: (id: number) => void;
  onDisminuir: (id: number) => void;
  onEliminar: (id: number) => void;
  props?: React.HTMLAttributes<HTMLDivElement>;
}

function CardProductoCarrito({
  producto,
  cantidad,
  onAumentar,
  onDisminuir,
  onEliminar,
  props,
}: CardProductoCarritoProps) {
  return (
    <Card
      className="w-full rounded-2xl border border-gray-100 bg-white p-4 shadow-sm"
      {...props}
    >
      <CardContent className="flex items-center gap-4 p-0">
        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl">
          <Image
            src={producto.imagen}
            alt={producto.nombre}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-1 flex-col justify-between gap-2 sm:flex-row sm:items-center">
          <div className="space-y-1">
            <CardHeader className="p-0">
              <CardTitle className="text-lg font-bold text-[#5c1d5c]">
                {producto.nombre}
              </CardTitle>
              <CardDescription className="text-xs font-medium uppercase tracking-wider text-gray-400">
                {producto.categoria}
              </CardDescription>
            </CardHeader>

            <div className="flex items-center gap-4 pt-1">
              <div className="flex items-center gap-3 rounded-full bg-[#eef2ff] px-3 py-1 text-sm font-semibold text-gray-700">
                <button
                  onClick={() => onDisminuir(producto.id)}
                  className="cursor-pointer text-gray-500 hover:text-gray-800 transition-colors"
                >
                  <Minus className="h-3 w-3" />
                </button>
                <span className="w-4 text-center text-xs">{cantidad}</span>
                <button
                  onClick={() => onAumentar(producto.id)}
                  className="cursor-pointer text-gray-500 hover:text-gray-800 transition-colors"
                >
                  <Plus className="h-3 w-3" />
                </button>
              </div>

              <Button
                variant="ghost"
                className="h-auto p-0 text-sm font-medium text-red-500 hover:bg-transparent hover:text-red-600 cursor-pointer flex items-center gap-1"
                onClick={() => onEliminar(producto.id)}
              >
                <Trash2 className="h-4 w-4" />
                <span>Eliminar</span>
              </Button>
            </div>
          </div>

          <div className="text-right sm:ml-auto">
            <span className="text-2xl font-extrabold text-[#2d0b30]">
              ${producto.precio.toFixed(2)}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default CardProductoCarrito;