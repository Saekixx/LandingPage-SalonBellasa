"use client";

import { useState } from "react";
import { CreditCard, QrCode, Banknote, Info } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

type MetodoPago = "tarjeta" | "yape_plin" | "transferencia";

function FormularioCheckout() {
  const [metodoPago, setMetodoPago] = useState<MetodoPago>("tarjeta");

  return (
    <div className="w-full max-w-2xl space-y-8 p-4">
      
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-[#5c1d5c]">
          Información de Envío
        </h2>
        
        <Card className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <CardContent className="space-y-4 p-0">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="nombre" className="text-sm font-semibold text-gray-700">
                  Nombre Completo
                </Label>
                <Input
                  id="nombre"
                  placeholder="Ej: María García"
                  className="rounded-xl border-gray-200 bg-gray-50/50 p-5 focus-visible:ring-[#5c1d5c]"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-semibold text-gray-700">
                  Correo Electrónico
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="maria@ejemplo.com"
                  className="rounded-xl border-gray-200 bg-gray-50/50 p-5 focus-visible:ring-[#5c1d5c]"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="telefono" className="text-sm font-semibold text-gray-700">
                Teléfono
              </Label>
              <Input
                id="telefono"
                type="tel"
                placeholder="+51 999 999 999"
                className="w-full rounded-xl border-gray-200 bg-gray-50/50 p-5 focus-visible:ring-[#5c1d5c]"
              />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-[#5c1d5c]">
          Método de Pago
        </h2>

        <div className="space-y-3">
          
          <div
            onClick={() => setMetodoPago("tarjeta")}
            className={`flex cursor-pointer items-center justify-between rounded-xl border p-4 transition-all ${
              metodoPago === "tarjeta"
                ? "border-[#5c1d5c] bg-[#faedf7] ring-1 ring-[#5c1d5c]"
                : "border-gray-100 bg-white hover:border-gray-200"
            }`}
          >
            <div className="flex items-center gap-3">
              <CreditCard className={`h-5 w-5 ${metodoPago === "tarjeta" ? "text-[#5c1d5c]" : "text-gray-400"}`} />
              <span className={`text-sm font-semibold ${metodoPago === "tarjeta" ? "text-[#5c1d5c]" : "text-gray-700"}`}>
                Tarjeta de Crédito / Débito
              </span>
            </div>
            <div className="flex gap-1 opacity-70">
              <div className="h-4 w-6 rounded bg-slate-700" />
              <div className="h-4 w-6 rounded bg-red-400" />
            </div>
          </div>

          <div
            onClick={() => setMetodoPago("yape_plin")}
            className={`flex cursor-pointer items-center justify-between rounded-xl border p-4 transition-all ${
              metodoPago === "yape_plin"
                ? "border-[#5c1d5c] bg-[#faedf7] ring-1 ring-[#5c1d5c]"
                : "border-gray-100 bg-white hover:border-gray-200"
            }`}
          >
            <div className="flex items-center gap-3">
              <QrCode className={`h-5 w-5 ${metodoPago === "yape_plin" ? "text-[#5c1d5c]" : "text-gray-400"}`} />
              <span className={`text-sm font-semibold ${metodoPago === "yape_plin" ? "text-[#5c1d5c]" : "text-gray-700"}`}>
                Yape / Plin
              </span>
            </div>
            <span className="rounded-md bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-600">
              Instantáneo
            </span>
          </div>

          <div
            onClick={() => setMetodoPago("transferencia")}
            className={`flex cursor-pointer items-center justify-between rounded-xl border p-4 transition-all ${
              metodoPago === "transferencia"
                ? "border-[#5c1d5c] bg-[#faedf7] ring-1 ring-[#5c1d5c]"
                : "border-gray-100 bg-white hover:border-gray-200"
            }`}
          >
            <div className="flex items-center gap-3">
              <Banknote className={`h-5 w-5 ${metodoPago === "transferencia" ? "text-[#5c1d5c]" : "text-gray-400"}`} />
              <span className={`text-sm font-semibold ${metodoPago === "transferencia" ? "text-[#5c1d5c]" : "text-gray-700"}`}>
                Transferencia Bancaria
              </span>
            </div>
            <Info className="h-4 w-4 text-gray-300" />
          </div>

        </div>
      </div>

    </div>
  );
}

export default FormularioCheckout;