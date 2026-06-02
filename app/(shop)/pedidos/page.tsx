"use client";

import { CardPedido } from "@/components/pedido/CardPedido";
import { useRouter } from "next/navigation";
import pedidosData from "@/data/pedido.json";

export default function PedidosPage() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-slate-50/50 selection:bg-purple-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* --- CABECERA DE LA PÁGINA --- */}
        <div className="mb-10">
          <h1 className="text-4xl font-black text-[#4a0e4e] tracking-tight">
            Mis Pedidos
          </h1>
          <p className="mt-2 text-slate-500 text-base max-w-xl">
            Gestiona tus compras recientes y haz seguimiento a tus productos
            favoritos de forma rápida y sencilla.
          </p>
        </div>

        {/* --- CONTENIDO PRINCIPAL --- */}
        <main className="max-w-5xl flex flex-col gap-4">
          {pedidosData.map((pedido) => (
            <CardPedido
              key={pedido.idPedido}
              pedidoDetalle={pedido}
              verDetalles={(pedidoDetalle) =>
                router.push(`/pedidos/detalle/${pedidoDetalle.idPedido}`)
              }
            />
          ))}
        </main>
      </div>
    </div>
  );
}
