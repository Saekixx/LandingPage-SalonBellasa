"use client";

import { useServicio } from "@/hooks/useServicio";
import FiltroServicio from "@/components/servicio/FiltroServicio";
import CatalogoServicio from "@/components/servicio/CatalogoServicio";

export default function ServiciosPage() {
  const context = useServicio();

  return (
    <div className="min-h-screen bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-10">
          <h1 className="text-4xl font-black text-[#4a0e4e] tracking-tight">
            Nuestros Servicios
          </h1>
          <p className="mt-2 text-slate-500 text-base max-w-xl">
            Descubre una experiencia de bienestar única diseñada para resaltar tu
            belleza natural. Combinamos técnicas profesionales con productos de
            alta gama.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          <aside className="w-full lg:w-72 shrink-0">
            <FiltroServicio context={context} />
          </aside>

          <main className="flex-1 min-w-0">
            <CatalogoServicio context={context} />
          </main>
        </div>
      </div>
    </div>
  );
}
