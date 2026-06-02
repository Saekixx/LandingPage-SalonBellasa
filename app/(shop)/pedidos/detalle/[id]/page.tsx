import pedidosData from "@/data/pedido.json";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import DeliveryStatusCard from "@/components/pedido/DeliveryStatusCard";
import OrderSummary from "@/components/pedido/OrderSummary";
import BuyCard from "@/components/pedido/BuyCard";
import { PedidoDetalle } from "@/types/producto";

// Interfaz para obtener el ID del pedido desde los parámetros de la URL
interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function OrderDetailPage({ params }: PageProps) {
  // Esperamos y obtenemos el ID desde la URL
  const { id } = await params;

  // Buscamos el pedido en el JSON que coincida con el ID obtenido de la URL
  const pedidoData = pedidosData.find(
    (pedido: PedidoDetalle) => pedido.idPedido.toString() === id.toString(),
  ) as PedidoDetalle | undefined;

  // Control de error por si el usuario escribe un ID que no existe en el JSON
  if (!pedidoData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC]">
        <div className="text-center space-y-2">
          <h2 className="text-xl font-bold text-slate-800">
            Pedido no encontrado
          </h2>
          <p className="text-sm text-slate-500">
            El pedido #{id} no existe en nuestros registros.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* BREADCRUMB */}
        <nav className="text-xs text-slate-400 space-x-2">
          <span>Mis Pedidos</span>
          <span>&gt;</span>
          <span className="text-[#6B1D74] font-medium">Detalle</span>
        </nav>

        {/* ENCABEZADO */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="space-y-1">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#6B1D74]">
              Detalle del Pedido #{pedidoData.idPedido}
            </h1>
            <p className="text-sm text-slate-500">
              Gracias por confiar en el cuidado de Aura Beauty.
            </p>
          </div>

          <Button className="bg-[#B9006E] hover:bg-[#940058] text-white rounded-xl px-5 py-6 font-semibold flex items-center gap-2 self-start md:self-auto shadow-md transition-all">
            <Download className="w-4 h-4" />
            Descargar Factura
          </Button>
        </div>

        {/* DISTRIBUCIÓN DEL LAYOUT EN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* COLUMNA IZQUIERDA (2 tercios) */}
          <div className="lg:col-span-2 space-y-6">
            <DeliveryStatusCard
              statusText={pedidoData.estado}
              deliveryDate={pedidoData.fecha} // Tomado dinámicamente del JSON
            />
            <OrderSummary pedidoDetalle={pedidoData} />
          </div>

          {/* COLUMNA DERECHA (1 tercio) */}
          <div className="space-y-6">
            <BuyCard
              infoPedido={{
                fecha: pedidoData.fecha,
                metodoPago: "Visa **** 4242",
              }}
              direccionEnvio={{
                nombre: "Elena Rodriguez",
                calle: "Calle de la Serenidad, 42",
                codigoPostalCiudad: "28001 Madrid",
                pais: "España",
              }}
              desglose={{
                subtotal: pedidoData.total - 22.89, // Cálculo estimado para el ejemplo
                envio: "Gratis",
                impuestos: 22.89,
                total: pedidoData.total,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
