"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useServicio } from "@/hooks/useServicio";

const CATEGORIAS = [
  { id: "cabello", label: "Cabello" },
  { id: "maquillaje", label: "Maquillaje" },
  { id: "unas", label: "Uñas" },
  { id: "rostro", label: "Rostro" },
  { id: "masajes", label: "Masajes" },
];

const DURACIONES = [
  { id: "30min", label: "30 min" },
  { id: "60min", label: "60 min" },
  { id: "90min", label: "90+ min" },
];

interface Props {
  context: ReturnType<typeof useServicio>;
}

export default function FiltroServicio({ context }: Props) {
  return (
    <div className="w-full max-w-xs space-y-8 p-1">

      <section className="space-y-3">
        <h3 className="text-sm font-extrabold tracking-wider text-purple-950 uppercase">Búsqueda</h3>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-purple-950/50" />
          <Input
            value={context.busqueda}
            onChange={(e) => context.setBusqueda(e.target.value)}
            placeholder="Buscar servicio..."
            className="pl-10 h-11 bg-white rounded-xl border-purple-100 focus-visible:ring-purple-600 font-medium text-slate-700 placeholder:text-slate-400"
          />
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="text-sm font-extrabold tracking-wider text-purple-950 uppercase">Categorías</h3>
        <div className="space-y-3">
          {CATEGORIAS.map(({ id, label }) => (
            <div key={id} className="flex items-center gap-3 group">
              <Checkbox
                id={id}
                checked={context.categoriasSeleccionadas.includes(id)}
                onCheckedChange={() => context.handleToggleCategoria(id)}
                className="h-5 w-5 rounded-md border-purple-200 data-[state=checked]:bg-[#b4006e] data-[state=checked]:border-[#b4006e]"
              />
              <label htmlFor={id} className="text-sm font-medium text-slate-600 group-hover:text-purple-950 cursor-pointer transition-colors select-none">
                {label}
              </label>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="text-sm font-extrabold tracking-wider text-purple-950 uppercase">Duración</h3>
        <div className="flex flex-wrap gap-2">
          {DURACIONES.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => context.handleToggleDuracion(id)}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-all cursor-pointer ${
                context.duracionSeleccionada === id
                  ? "bg-[#b4006e] text-white border-[#b4006e] shadow-sm"
                  : "bg-white text-slate-600 border-purple-100 hover:border-purple-300 hover:text-purple-950"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </section>

      <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-[#800050] to-[#b4006e] p-6 text-white shadow-sm">
        <span className="absolute right-3 bottom-3 opacity-10 text-9xl font-bold select-none">✦</span>
        <p className="text-xs font-bold tracking-widest text-pink-200 uppercase">Primera Visita</p>
        <h4 className="text-2xl font-black leading-tight mt-1 mb-4">15% OFF en tu primer servicio</h4>
        <Button variant="secondary" className="w-full rounded-full bg-white hover:bg-pink-50 text-[#800050] font-extrabold text-xs shadow-sm active:scale-95 cursor-pointer">
          Agendar ahora
        </Button>
      </div>

    </div>
  );
}
