import { PedidoDetalle } from "@/types/producto";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import Image from "next/image";
import { Badge } from "../ui/badge";

interface CardPedidoProps {
  pedidoDetalle: PedidoDetalle;
  verDetalles?: (data: PedidoDetalle) => void;
}

export function CardPedido({ pedidoDetalle, verDetalles }: CardPedidoProps) {
  // Función helper para pintar el badge correcto basado en la imagen
  const renderEstadoBadge = (est: string) => {
    switch (est.toLowerCase()) {
      case "entregado":
        return (
          <Badge className="bg-emerald-50 text-emerald-600 hover:bg-emerald-50 border-0 shadow-none font-bold px-3 py-1 rounded-full">
            Entregado
          </Badge>
        );
      case "en camino":
        return (
          <Badge className="bg-purple-900 text-white hover:bg-purple-900 border-0 shadow-none font-medium px-3 py-1 rounded-full flex items-center gap-1">
            🚚 En camino
          </Badge>
        );
      case "procesando":
        return (
          <Badge className="bg-slate-100 text-slate-600 hover:bg-slate-100 border-0 shadow-none font-medium px-3 py-1 rounded-full">
            Procesando
          </Badge>
        );
      default:
        return <Badge variant="outline">{est}</Badge>;
    }
  };

  return (
    <Card className="w-full max-w-5xl border-gray-100 rounded-2xl shadow-sm overflow-hidden font-sans mb-6">
      <CardHeader className="flex flex-col md:flex-row md:items-center justify-between p-6 gap-6 border-b border-gray-50 space-y-0">
        {/* Metadatos */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm">
          <div>
            <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
              ID del Pedido
            </span>
            <span className="font-bold text-purple-950">
              {pedidoDetalle.idPedido}
            </span>
          </div>
          <div>
            <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
              Fecha
            </span>
            <span className="font-semibold text-gray-800">
              {pedidoDetalle.fecha}
            </span>
          </div>
          <div>
            <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
              Total
            </span>
            <span className="font-bold text-pink-600">
              ${pedidoDetalle.total.toFixed(2)}
            </span>
          </div>
          <div>
            <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
              Estado
            </span>
            {renderEstadoBadge(pedidoDetalle.estado)}
          </div>
        </div>

        {/* Botones Dinámicos basados en el JSON */}
        <div className="flex items-center gap-3 self-end md:self-center">
          <Button
            variant="outline"
            className="px-5 py-2.5 text-sm font-medium text-gray-700 border-gray-200 rounded-xl h-auto"
            onClick={() => verDetalles?.(pedidoDetalle)}
          >
            Ver detalles
          </Button>
        </div>
      </CardHeader>

      <CardContent className="p-6 bg-slate-50/50 flex flex-wrap gap-8">
        {pedidoDetalle.productos.map((producto) => (
          <div key={producto.id} className="flex items-center gap-4 max-w-xs">
            <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-gray-100 shrink-0 border border-gray-100">
              <Image
                src={producto.imagen}
                alt={producto.nombre}
                fill
                sizes="80px"
                className="object-cover"
              />
            </div>
            <div className="text-sm">
              <h4 className="font-bold text-gray-900 leading-tight mb-0.5">
                {producto.nombre}
              </h4>
              <p className="text-xs text-gray-500 mb-1">
                Cantidad: {producto.cantidad}
              </p>
              <span className="font-semibold text-pink-600">
                ${producto.precio.toFixed(2)}
              </span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
