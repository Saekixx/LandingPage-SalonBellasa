import { CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface DeliveryStatusCardProps {
  statusText?: string;
  deliveryDate?: string;
}

export default function DeliveryStatusCard({
  statusText = "Entregado satisfactoriamente",
  deliveryDate = "14 Oct, 11:45",
}: DeliveryStatusCardProps) {
  return (
    <Card className="w-full max-w-3xl border border-slate-100 shadow-sm rounded-2xl">
      <CardContent className="p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        {/* Lado Izquierdo: Título y Estado */}
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-[#6B1D74]">Estado del Envío</h3>
          <div className="flex items-center gap-2 text-[#10B981] font-medium text-sm sm:text-base">
            <CheckCircle2 className="w-5 h-5 fill-[#10B981] text-white" />
            <span>{statusText}</span>
          </div>
        </div>

        {/* Lado Derecho: Fecha de entrega */}
        <div className="text-left sm:text-right flex flex-col justify-center">
          <span className="text-xs text-slate-400 font-normal">
            Fecha de entrega
          </span>
          <span className="text-lg font-semibold text-slate-800 mt-1">
            {deliveryDate}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
