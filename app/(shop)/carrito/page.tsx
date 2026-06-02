"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Wallet, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import CardCarritoProducto from "@/components/carrito/CardCarritoProducto";

// Interface local para simular los productos agregados
interface ItemCarrito {
  id: number;
  nombre: string;
  categoria: string;
  precio: number;
  imagen: string;
  cantidad: number;
}

// Icono minimalista de tarjeta para calcar exactamente el de tu imagen image_5122f8.png
function CardIconMinimal({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      className={className}
    >
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <line x1="2" y1="10" x2="22" y2="10" />
    </svg>
  );
}

export default function CarritoPage() {
  // Datos mock iniciales basados en tu imagen de referencia
  const [carrito, setCarrito] = useState<ItemCarrito[]>([
    {
      id: 1,
      nombre: "Serum Revitalizante",
      categoria: "TRATAMIENTO FACIAL",
      precio: 65.0,
      imagen: "/images/serum.png", 
      cantidad: 1,
    },
    {
      id: 2,
      nombre: "Mascarilla de Arcilla",
      categoria: "CUIDADO PROFUNDO",
      precio: 42.5,
      imagen: "/images/mascarilla.png",
      cantidad: 1,
    },
    {
      id: 3,
      nombre: "Óleo Esencial",
      categoria: "AROMATERAPIA",
      precio: 51.2,
      imagen: "/images/oleo.png",
      cantidad: 1,
    },
  ]);

  // Funciones controladoras para los componentes hijos
  const handleAumentar = (id: number) => {
    setCarrito((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
      )
    );
  };

  const handleDisminuir = (id: number) => {
    setCarrito((prev) =>
      prev.map((item) =>
        item.id === id && item.cantidad > 1
          ? { ...item, cantidad: item.cantidad - 1 }
          : item
      )
    );
  };

  const handleEliminar = (id: number) => {
    setCarrito((prev) => prev.filter((item) => item.id !== id));
  };

  // Cálculos dinámicos del resumen
  const subtotal = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
  const envio = 0; // Gratis
  const impuestos = 0;
  const total = subtotal + envio + impuestos;

  return (
    <div className="mx-auto min-h-screen w-full max-w-7xl bg-slate-50/50 p-6 md:p-12">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        
        {/* COLUMNA IZQUIERDA: Lista de Productos (Ocupa 2 de 3 columnas) */}
        <div className="space-y-6 lg:col-span-2">
          <h1 className="text-3xl font-bold text-[#2d0b30]">Tu Carrito</h1>
          
          <div className="space-y-4">
            {carrito.length > 0 ? (
              carrito.map((producto) => (
                <CardCarritoProducto
                  key={producto.id}
                  producto={producto}
                  cantidad={producto.cantidad}
                  onAumentar={handleAumentar}
                  onDisminuir={handleDisminuir}
                  onEliminar={handleEliminar}
                />
              ))
            ) : (
              <p className="py-8 text-center text-gray-500">Tu carrito está vacío.</p>
            )}
          </div>

          <Link
            href="/productos"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#5c1d5c] hover:underline pt-2"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Seguir comprando</span>
          </Link>
        </div>

        {/* COLUMNA DERECHA: Resumen del Pedido */}
        <div className="lg:pt-14">
          <Card className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
            <CardContent className="space-y-6 p-0">
              <h2 className="text-xl font-bold text-[#2d0b30]">
                Resumen del pedido
              </h2>

              {/* Desglose de precios */}
              <div className="space-y-3 text-sm font-medium text-gray-500">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-gray-800">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Envío</span>
                  <span className="font-semibold text-emerald-600">Gratis</span>
                </div>
                <div className="flex justify-between">
                  <span>Impuestos (IVA)</span>
                  <span className="text-gray-800">${impuestos.toFixed(2)}</span>
                </div>
              </div>


              <hr className="border-gray-100" />

              {/* Sección de Total */}
              <div className="space-y-1">
                <div className="flex items-baseline justify-between">
                  <span className="text-base font-bold text-gray-800">Total</span>
                  <span className="text-3xl font-extrabold text-[#2d0b30]">
                    ${total.toFixed(2)}
                  </span>
                </div>
                <p className="text-right text-[10px] text-gray-400">
                  Dólares Estadounidenses (USD)
                </p>
              </div>

              {/* Botón de Redirección Automática a /pasarela-pago */}
              <Link href="/pasarela-pago" passHref legacyBehavior>
                <Button className="w-full rounded-2xl bg-[#801a80] hover:bg-[#661466] py-6 text-sm font-semibold text-white shadow-sm transition-all active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2">
                  <span>Proceder al pago</span>
                  <CardIconMinimal className="h-4 w-4" />
                </Button>
              </Link>

              {/* Iconos inferiores de confianza */}
              <div className="flex justify-center gap-4 text-gray-300 pt-2">
                <CardIconMinimal className="h-5 w-5" />
                <Wallet className="h-5 w-5" />
                <Lock className="h-5 w-5" />
              </div>
            </CardContent>
          </Card>
        </div>

      </div>
    </div>
  );
}