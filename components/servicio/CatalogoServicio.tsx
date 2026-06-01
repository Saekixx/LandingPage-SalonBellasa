"use client";

import CardServicio from "@/components/servicio/CardServicio";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { useServicio } from "@/hooks/useServicio";

interface Props {
  context: ReturnType<typeof useServicio>;
}

export default function CatalogoServicio({ context }: Props) {
  const { serviciosPaginados, totalServicios, itemsMostrados, paginaActual, totalPaginas, setPaginaActual } = context;

  return (
    <div className="w-full space-y-8">

      <div className="pb-2 border-b border-purple-50/60">
        <p className="text-sm font-medium text-slate-500">
          Mostrando <span className="text-[#4a0e4e] font-bold">{itemsMostrados}</span> de <span className="text-[#4a0e4e] font-bold">{totalServicios}</span> servicios
        </p>
      </div>

      {totalServicios === 0 ? (
        <p className="text-center py-12 text-slate-400 font-medium">
          No se encontraron servicios con los filtros seleccionados.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {serviciosPaginados.map((servicio) => (
            <CardServicio key={servicio.id} servicio={servicio} />
          ))}
        </div>
      )}

      {totalPaginas > 1 && (
        <div className="pt-8 flex justify-center">
          <Pagination>
            <PaginationContent className="gap-1 sm:gap-2">

              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={(e) => { e.preventDefault(); if (paginaActual > 1) setPaginaActual(paginaActual - 1); }}
                  className={`rounded-xl border-purple-100/70 text-slate-600 transition-colors ${paginaActual === 1 ? "pointer-events-none opacity-40" : "hover:bg-purple-50"}`}
                />
              </PaginationItem>

              {Array.from({ length: totalPaginas }, (_, i) => i + 1).map((pagina) => (
                <PaginationItem key={pagina}>
                  <PaginationLink
                    href="#"
                    onClick={(e) => { e.preventDefault(); setPaginaActual(pagina); }}
                    isActive={paginaActual === pagina}
                    className={`rounded-xl font-bold cursor-pointer transition-all ${
                      paginaActual === pagina
                        ? "bg-[#b4006e] hover:bg-[#900058] text-white border-none shadow-sm"
                        : "border-purple-100/50 hover:bg-purple-50 text-slate-600 font-semibold"
                    }`}
                  >
                    {pagina}
                  </PaginationLink>
                </PaginationItem>
              ))}

              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={(e) => { e.preventDefault(); if (paginaActual < totalPaginas) setPaginaActual(paginaActual + 1); }}
                  className={`rounded-xl border-purple-100/70 text-slate-600 transition-colors ${paginaActual === totalPaginas ? "pointer-events-none opacity-40" : "hover:bg-purple-50"}`}
                />
              </PaginationItem>

            </PaginationContent>
          </Pagination>
        </div>
      )}

    </div>
  );
}
