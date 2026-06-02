import { CreditCard } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

// Definimos la interfaz para que el componente sea 100% dinámico
interface BuyCardProps {
  infoPedido?: {
    fecha: string;
    metodoPago: string;
  };
  direccionEnvio?: {
    nombre: string;
    calle: string;
    codigoPostalCiudad: string;
    pais: string;
  };
  desglose?: {
    subtotal: number;
    envio: number | "Gratis";
    impuestos: number;
    total: number;
  };
}

export default function BuyCard({
  infoPedido = { fecha: "12 de Oct, 2023", metodoPago: "Visa **** 4242" },
  direccionEnvio = {
    nombre: "Elena Rodriguez",
    calle: "Calle de la Serenidad, 42",
    codigoPostalCiudad: "28001 Madrid",
    pais: "España",
  },
  desglose = {
    subtotal: 109.0,
    envio: "Gratis",
    impuestos: 22.89,
    total: 131.89,
  },
}: BuyCardProps) {
  return (
    <Card className="w-full max-w-sm border border-slate-100 shadow-sm rounded-2xl p-6 bg-white">
      <CardContent className="p-0 space-y-6">
        {/* SECCIÓN 1: INFORMACIÓN DEL PEDIDO */}
        <div className="space-y-4">
          <h4 className="text-sm font-bold text-[#6B1D74] tracking-wide uppercase">
            Información del Pedido
          </h4>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between items-center">
              <span className="text-slate-400">Fecha:</span>
              <span className="font-medium text-slate-800">
                {infoPedido.fecha}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-400">Método de Pago:</span>
              <div className="flex items-center gap-2 font-medium text-slate-800">
                <CreditCard className="w-4 h-4 text-[#6B1D74]" />
                <span>{infoPedido.metodoPago}</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-slate-100" />

        {/* SECCIÓN 2: DIRECCIÓN DE ENVÍO */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-[#6B1D74] tracking-wide uppercase">
            Dirección de Envío
          </h4>
          <div className="flex flex-col text-sm text-slate-700 leading-relaxed space-y-1">
            <span className="font-semibold text-slate-800">
              {direccionEnvio.nombre}
            </span>
            <span>{direccionEnvio.calle}</span>
            <span>{direccionEnvio.codigoPostalCiudad}</span>
            <span>{direccionEnvio.pais}</span>
          </div>
        </div>

        <Separator className="bg-slate-100" />

        {/* SECCIÓN 3: DESGLOSE DE COSTOS Y TOTAL */}
        <div className="space-y-4">
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-500">Subtotal</span>
              <span className="font-medium text-slate-800">
                €{desglose.subtotal.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Envío</span>
              <span className="font-semibold text-[#10B981]">
                {typeof desglose.envio === "number"
                  ? `€${desglose.envio.toFixed(2)}`
                  : desglose.envio}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Impuestos (IVA)</span>
              <span className="font-medium text-slate-800">
                €{desglose.impuestos.toFixed(2)}
              </span>
            </div>
          </div>

          <Separator className="bg-slate-100" />

          {/* TOTAL FINAL */}
          <div className="flex justify-between items-center pt-2">
            <span className="text-xl font-bold text-slate-900">Total</span>
            <span className="text-2xl font-bold text-[#6B1D74]">
              €{desglose.total.toFixed(2)}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
