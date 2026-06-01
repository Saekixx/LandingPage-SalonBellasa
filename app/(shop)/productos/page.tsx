"use client";

import FiltroProducto from "@/components/producto/FiltroProducto";
import CatalogoProducto from "@/components/producto/CatalogoProducto";
import { useProducto } from "@/hooks/useProducto";

export default function ProductosPage() {
  const filterContext = useProducto();

  return (
    <div className="w-full">
      <section className="w-full bg-linear-to-r from-purple-50 via-pink-50/30 to-purple-50 py-16 px-4 border-b border-purple-100/40">
        <div className="max-w-7xl mx-auto space-y-3 px-4 sm:px-12">
          <h1 className="text-4xl font-extrabold tracking-tight text-purple-950 sm:text-5xl">
            Nuestra Boutique
          </h1>
          <p className="text-sm sm:text-base text-purple-900/70 font-medium max-w-2xl leading-relaxed">
            Descubre nuestra selección exclusiva de productos de alta gama
            diseñados para prolongar el cuidado y potenciar tu belleza natural
            desde casa.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-2xl font-extrabold tracking-tight text-purple-950 whitespace-nowrap">
              Catálogo de Productos
            </h3>
            <div className="h-0.5 w-full bg-purple-200/80 rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
            <aside className="lg:col-span-1 sticky top-6">
              <FiltroProducto context={filterContext} />
            </aside>

            <main className="lg:col-span-3 w-full">
              <CatalogoProducto context={filterContext} />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
