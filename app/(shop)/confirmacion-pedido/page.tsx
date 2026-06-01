"use client";

import Link from "next/link";
import { Check, ShoppingBag, ReceiptText, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ConfirmacionPedidoPage() {
  const numeroOrden = "#AB-92834";
  const cantidadProductos = 3;
  const totalPago = "125.00 USD";

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gradient-to-tr from-[#f3e8ff] via-[#faf5ff] to-[#fff5f5] p-4">
      
      <Card className="w-full max-w-xl rounded-3xl border border-gray-100/50 bg-white p-8 shadow-xl md:p-12">
        <CardContent className="flex flex-col items-center p-0 text-center">
          
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#800f80] text-white shadow-md shadow-purple-200">
            <Check className="h-8 w-8 stroke-[3]" />
          </div>

          <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-[#2d0b30] md:text-4xl">
            ¡Gracias por tu compra!
          </h1>
          <p className="mt-3 max-w-sm text-sm font-medium leading-relaxed text-gray-500">
            Tu pedido ha sido procesado con éxito. Hemos enviado los detalles a tu correo electrónico.
          </p>

          <hr className="my-8 w-full border-gray-100" />

          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
            
            <div className="rounded-2xl bg-[#eff6ff] p-5 text-left">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#d91b5c]">
                Número de Orden
              </span>
              <p className="mt-1 text-xl font-extrabold text-[#2d0b30]">
                {numeroOrden}
              </p>
            </div>

            <div className="rounded-2xl bg-[#eff6ff] p-5 text-left">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#d91b5c]">
                Resumen del Pedido
              </span>
              <p className="mt-1 text-sm font-medium text-gray-500">
                <span className="font-bold text-[#2d0b30]">{cantidadProductos} productos</span> - <span className="font-extrabold text-[#2d0b30]">${totalPago}</span>
              </p>
            </div>

          </div>

          <div className="mt-8 grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
            
            <Link href="/productos" passHref legacyBehavior>
              <Button className="w-full rounded-xl bg-gradient-to-r from-[#7a096a] to-[#b30b77] py-6 text-sm font-bold text-white shadow-md transition-all hover:opacity-95 active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2">
                <ShoppingBag className="h-4 w-4" />
                <span>Volver a la tienda</span>
              </Button>
            </Link>

            <Link href="/pedidos" passHref legacyBehavior>
              <Button 
                variant="outline" 
                className="w-full rounded-xl border-[#b30b77] bg-white py-6 text-sm font-bold text-[#b30b77] shadow-sm transition-all hover:bg-purple-50/50 active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2"
              >
                <ReceiptText className="h-4 w-4" />
                <span>Ver mis pedidos</span>
              </Button>
            </Link>

          </div>

          <div className="mt-8 flex items-center justify-center gap-2 text-xs font-semibold text-gray-400">
            <Truck className="h-4 w-4 text-[#d91b5c]" />
            <span>Recibirás tu paquete en un plazo de 3 a 5 días hábiles.</span>
          </div>

        </CardContent>
      </Card>

    </div>
  );
}