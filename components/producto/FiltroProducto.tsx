"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

interface FiltroProductoProps {
  context: ReturnType<typeof import("@/hooks/useProducto").useProducto>;
}

export default function FiltroProducto({ context }: FiltroProductoProps) {
  const categorias = [
    { id: "capilar", label: "Cuidado Capilar" },
    { id: "skincare", label: "Skincare" },
    { id: "maquillaje", label: "Maquillaje" },
    { id: "fragancias", label: "Fragancias" },
    { id: "accesorios", label: "Accesorios" },
  ];

  return (
    <div className="w-full max-w-xs space-y-8 p-1">
      {/* Busqueda */}
      <div className="space-y-3">
        <h3 className="text-sm font-extrabold tracking-wider text-purple-950 uppercase">
          Búsqueda
        </h3>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-purple-950/50" />
          <Input
            type="text"
            value={context.busqueda}
            onChange={(e) => context.setBusqueda(e.target.value)}
            placeholder="Buscar producto..."
            className="pl-10 h-11 bg-white rounded-xl border-purple-100 focus-visible:ring-purple-600 font-medium text-slate-700 placeholder:text-slate-400"
          />
        </div>
      </div>

      {/* Categorías */}
      <div className="space-y-4">
        <h3 className="text-sm font-extrabold tracking-wider text-purple-950 uppercase">
          Categorías
        </h3>
        <div className="space-y-3">
          {categorias.map((cat) => (
            <div key={cat.id} className="flex items-center space-x-3 group">
              <Checkbox
                id={cat.id}
                checked={context.categoriasSeleccionadas.includes(cat.id)}
                onCheckedChange={() => context.handleToggleCategoria(cat.id)}
                className="h-5 w-5 rounded-md border-purple-200 data-[state=checked]:bg-[#b4006e] data-[state=checked]:border-[#b4006e]"
              />
              <label
                htmlFor={cat.id}
                className="text-sm font-medium text-slate-600 group-hover:text-purple-950 cursor-pointer transition-colors select-none"
              >
                {cat.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Rango de Precio */}
      <div className="space-y-5">
        <h3 className="text-sm font-extrabold tracking-wider text-purple-950 uppercase">
          Rango de Precio
        </h3>

        <div className="px-1 pt-2">
          <Slider
            value={[context.rangoPrecio[0]]}
            onValueChange={context.handleCambioPrecioSlider}
            max={200}
            step={1}
            className="w-full cursor-pointer [&_[roles=slider]]:border-[#b4006e] [&_.bg-primary]:bg-[#b4006e]"
          />
        </div>

        <div className="flex justify-between text-xs font-semibold text-purple-200/90 -mt-2">
          <span>S/0</span>
          <span>S/200+</span>
        </div>

        <div className="flex items-center gap-3 pt-1">
          <div className="relative flex-1">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400">
              S/
            </span>
            <Input
              type="text"
              placeholder="Min"
              value={context.precioMinInput}
              onChange={(e) => context.handlePrecioMinChange(e.target.value)}
              className="pl-6 h-10 rounded-xl bg-white border-purple-100 font-medium text-slate-700 focus-visible:ring-purple-600 text-sm"
            />
          </div>
          <div className="relative flex-1">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400">
              S/
            </span>
            <Input
              type="text"
              placeholder="Max"
              value={context.precioMaxInput}
              onChange={(e) => context.handlePrecioMaxChange(e.target.value)}
              className="pl-6 h-10 rounded-xl bg-white border-purple-100 font-medium text-slate-700 focus-visible:ring-purple-600 text-sm"
            />
          </div>
        </div>
      </div>

      {/* Banner Promocional */}
      <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-[#800050] to-[#b4006e] p-6 text-white shadow-sm mt-4">
        <div className="absolute right-2.5 bottom-2.5 opacity-10 text-9xl font-bold select-none">
          ✦
        </div>
        <div className="space-y-4">
          <div className="space-y-1">
            <span className="text-xs font-bold tracking-widest text-pink-200 uppercase">
              Oferta Especial
            </span>
            <h4 className="text-2xl font-black leading-tight tracking-tight">
              20% OFF en Skincare
            </h4>
          </div>
          <Button
            variant="secondary"
            className="w-full rounded-full bg-white hover:bg-pink-50 text-[#800050] font-extrabold text-xs tracking-tight shadow-sm transition-transform active:scale-95 cursor-pointer"
          >
            Ver ahora
          </Button>
        </div>
      </div>
    </div>
  );
}
