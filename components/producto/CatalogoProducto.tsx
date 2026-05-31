"use client";

import CardProducto from "./CardProducto";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface CatalogoProductosProps {
  context: ReturnType<typeof import("@/hooks/useProducto").useProducto>;
}

export default function CatalogoProductos({ context }: CatalogoProductosProps) {
  return (
    <div className="w-full space-y-8">
      {/* Encabezado */}
      <div className="flex items-center justify-between pb-2 border-b border-purple-50/60">
        <p className="text-sm font-medium text-slate-500">
          Mostrando{" "}
          <span className="text-[#4a0e4e] font-bold">
            {context.itemsMostrados}
          </span>{" "}
          de{" "}
          <span className="text-[#4a0e4e] font-bold">
            {context.totalProductos}
          </span>{" "}
          productos
        </p>
      </div>

      {context.totalProductos === 0 ? (
        <div className="text-center py-12 text-slate-400 font-medium">
          No se encontraron productos con los filtros seleccionados.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {context.productosPaginados.map((producto) => (
            <div key={producto.id} className="h-full flex flex-col">
              <CardProducto
                producto={producto}
                props={{ className: "w-full h-full flex flex-col" }}
              />
            </div>
          ))}
        </div>
      )}

      {/* Paginacion */}
      {context.totalPaginas > 1 && (
        <div className="pt-8 flex justify-center">
          <Pagination>
            <PaginationContent className="gap-1 sm:gap-2">
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (context.paginaActual > 1)
                      context.setPaginaActual(context.paginaActual - 1);
                  }}
                  className={`rounded-xl border-purple-100/70 text-slate-600 transition-colors ${
                    context.paginaActual === 1
                      ? "pointer-events-none opacity-40"
                      : "hover:bg-purple-50"
                  }`}
                />
              </PaginationItem>

              {Array.from({ length: context.totalPaginas }, (_, index) => {
                const pagina = index + 1;
                return (
                  <PaginationItem key={pagina}>
                    <PaginationLink
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        context.setPaginaActual(pagina);
                      }}
                      isActive={context.paginaActual === pagina}
                      className={`rounded-xl font-bold cursor-pointer transition-all ${
                        context.paginaActual === pagina
                          ? "bg-[#b4006e] hover:bg-[#900058] text-white border-none shadow-sm"
                          : "border-purple-100/50 hover:bg-purple-50 text-slate-600 font-semibold"
                      }`}
                    >
                      {pagina}
                    </PaginationLink>
                  </PaginationItem>
                );
              })}

              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (context.paginaActual < context.totalPaginas)
                      context.setPaginaActual(context.paginaActual + 1);
                  }}
                  className={`rounded-xl border-purple-100/70 text-slate-600 transition-colors ${
                    context.paginaActual === context.totalPaginas
                      ? "pointer-events-none opacity-40"
                      : "hover:bg-purple-50"
                  }`}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  );
}
