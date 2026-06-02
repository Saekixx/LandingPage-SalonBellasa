"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import CardFormulario from "@/components/carrito/CardFormulario";

interface ProductoResumen {
  id: number;
  nombre: string;
  precio: number;
  imagen: string;
  cantidad: number;
}

export default function PasarelaPagoPage() {
  const [itemsResumen] = useState<ProductoResumen[]>([
    {
      id: 1,
      nombre: "Suero Facial Rejuvenecedor",
      precio: 120.0,
      imagen: "/images/suero-facial.png",
      cantidad: 1,
    },
    {
      id: 2,
      nombre: "Crema Hidratante Día",
      precio: 85.0,
      imagen: "/images/crema-hidratante.png",
      cantidad: 1,
    },
  ]);

  const subtotal = itemsResumen.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0,
  );
  const envio = 0;
  const total = subtotal + envio;

  return (
    <div className="mx-auto min-h-screen w-full max-w-7xl bg-slate-50/50 p-6 md:p-12">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <CardFormulario />

          <div className="flex items-start gap-3 rounded-xl border border-blue-100 bg-blue-50/50 p-4 text-xs text-blue-600 max-w-2xl ml-4">
            <ShieldCheck className="h-5 w-5 shrink-0 text-blue-500 mt-0.5" />
            <p className="leading-relaxed">
              Tus datos están protegidos por encriptación SSL de 256 bits. Aura
              Beauty no almacena los datos completos de tu tarjeta.
            </p>
          </div>
        </div>

        <div className="lg:pt-12">
          <Card className="rounded-3xl border-none bg-white p-6 shadow-sm">
            <CardContent className="space-y-6 p-0">
              <h2 className="text-xl font-bold text-[#2d0b30]">
                Resumen del Pedido
              </h2>

              <div className="space-y-4 max-h-60 overflow-y-auto pr-1">
                {itemsResumen.map((item) => (
                  <div key={item.id} className="flex items-center gap-3">
                    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-gray-100">
                      <Image
                        src={item.imagen}
                        alt={item.nombre}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col min-w-0">
                      <span className="truncate text-sm font-bold text-gray-800">
                        {item.nombre}
                      </span>
                      <span className="text-xs text-gray-400">
                        {item.cantidad} unidad
                      </span>
                    </div>
                    <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">
                      S/ {item.precio.toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

              <hr className="border-gray-100" />

              <div className="space-y-3 text-sm font-medium text-gray-500">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-gray-800">
                    S/ {subtotal.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Envío</span>
                  <span className="font-semibold text-emerald-600">Gratis</span>
                </div>
              </div>

              <hr className="border-gray-100" />

              <div className="flex items-baseline justify-between">
                <span className="text-base font-bold text-gray-800">Total</span>
                <span className="text-2xl font-extrabold text-[#2d0b30]">
                  S/ {total.toFixed(2)}
                </span>
              </div>

              <Link href="/confirmacion-pedido">
                <Button className="w-full rounded-2xl bg-gradient-to-r from-[#4a0e4e] to-[#800f80] py-6 text-base font-bold text-white shadow-md transition-all hover:opacity-95 active:scale-[0.98] cursor-pointer">
                  Confirmar Pago
                </Button>
              </Link>

              <div className="flex justify-center pt-2">
                <Link
                  href="/carrito"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-gray-400 hover:text-[#5c1d5c] hover:underline transition-colors"
                >
                  <ArrowLeft className="h-3 w-3" />
                  <span>Volver a la tienda</span>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
