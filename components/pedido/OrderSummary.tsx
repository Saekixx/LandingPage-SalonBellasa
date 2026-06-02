import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PedidoDetalle } from "@/types/producto";
import Image from "next/image";

interface OrderSummaryProps {
  pedidoDetalle: PedidoDetalle;
}

export default function OrderSummary({ pedidoDetalle }: OrderSummaryProps) {
  // Calculamos el total de los productos
  const totalArticulos = pedidoDetalle.productos.reduce(
    (acc, prod) => acc + prod.cantidad,
    0,
  );

  return (
    <Card className="w-full max-w-3xl border border-slate-100 shadow-sm rounded-2xl overflow-hidden">
      {/* Cabecera: Título y Badge de cantidad de artículos */}
      <CardHeader className="p-6 flex flex-row items-center justify-between space-y-0">
        <h3 className="text-xl font-bold text-[#6B1D74]">
          Resumen de Productos
        </h3>
        <Badge
          variant="secondary"
          className="bg-[#FCE7F3] text-[#6B1D74] hover:bg-[#FCE7F3] px-3 py-1 rounded-full text-xs font-medium"
        >
          {totalArticulos} {totalArticulos === 1 ? "Artículo" : "Artículos"}
        </Badge>
      </CardHeader>

      <CardContent className="p-0">
        <div className="w-full overflow-x-auto">
          <Table>
            {/* Encabezado */}
            <TableHeader className="bg-[#F4F6FA] border-b border-slate-100">
              <TableRow className="hover:bg-transparent">
                <TableHead className="w-[45%] pl-6 font-semibold text-slate-700">
                  Producto
                </TableHead>
                <TableHead className="w-[15%] text-center font-semibold text-slate-700">
                  Cantidad
                </TableHead>
                <TableHead className="w-[20%] text-right font-semibold text-slate-700">
                  Precio Unitario
                </TableHead>
                <TableHead className="w-[20%] text-right pr-6 font-semibold text-slate-700">
                  Total
                </TableHead>
              </TableRow>
            </TableHeader>

            {/* Listado dinámico de productos */}
            <TableBody>
              {pedidoDetalle.productos.map((producto) => {
                const subtotal = producto.precio * producto.cantidad;

                return (
                  <TableRow
                    key={producto.id}
                    className="border-b border-slate-50 hover:bg-slate-50/50"
                  >
                    {/* Celda de Producto: Imagen + Textos */}
                    <TableCell className="pl-6 py-4">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-xl overflow-hidden bg-slate-100 shrink-0 border border-slate-100 relative">
                          <Image
                            src={producto.imagen}
                            alt={producto.nombre}
                            fill
                            sizes="64px"
                            className="object-cover"
                          />
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="font-semibold text-slate-800 text-sm sm:text-base truncate">
                            {producto.nombre}
                          </span>
                          <span className="text-xs text-slate-400 mt-0.5 truncate">
                            {producto.categoria}
                          </span>
                        </div>
                      </div>
                    </TableCell>

                    {/* Celda de Cantidad */}
                    <TableCell className="text-center font-medium text-slate-700">
                      {producto.cantidad}
                    </TableCell>

                    {/* Celda de Precio Unitario */}
                    <TableCell className="text-right font-medium text-slate-600">
                      €{producto.precio.toFixed(2)}
                    </TableCell>

                    {/* Celda del Total de la línea */}
                    <TableCell className="text-right pr-6 font-bold text-[#6B1D74]">
                      €{subtotal.toFixed(2)}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
