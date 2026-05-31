"use client";

import { useState, useMemo } from "react";
import { Producto } from "@/types/producto";
import productosData from "@/data/producto.json";

export const useProducto = () => {
  // Estados de Filtros
  const [busqueda, setBusqueda] = useState("");
  const [categoriasSeleccionadas, setCategoriasSeleccionadas] = useState<
    string[]
  >([]);
  const [rangoPrecio, setRangoPrecio] = useState<number[]>([0, 200]);
  const [precioMinInput, setPrecioMinInput] = useState("");
  const [precioMaxInput, setPrecioMaxInput] = useState("");

  // Estado de Paginación
  const [paginaActual, setPaginaActual] = useState(1);
  const itemsPorPagina = 12;

  // Lógica de Filtrado
  const productosFiltrados = useMemo(() => {
    return (productosData as Producto[]).filter((producto) => {
      // Filtro por Texto (Nombre o Categoría)
      const cumpleBusqueda =
        producto.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
        producto.categoria.toLowerCase().includes(busqueda.toLowerCase());

      // Filtro por Categorías Checkbox
      const mapeoCategorias: Record<string, string> = {
        capilar: "cuidado capilar",
        skincare: "skincare",
        maquillaje: "maquillaje",
        fragancias: "fragancias",
        accesorios: "accesorios",
      };

      const cumpleCategoria =
        categoriasSeleccionadas.length === 0 ||
        categoriasSeleccionadas.some(
          (catId) =>
            producto.categoria.toLowerCase() ===
            mapeoCategorias[catId]?.toLowerCase(),
        );

      // Filtro por Rango de Precios
      const cumplePrecio =
        producto.precio >= rangoPrecio[0] && producto.precio <= rangoPrecio[1];

      return cumpleBusqueda && cumpleCategoria && cumplePrecio;
    });
  }, [busqueda, categoriasSeleccionadas, rangoPrecio]);

  // Lógica de Paginación
  const totalProductos = productosFiltrados.length;
  const totalPaginas = Math.ceil(totalProductos / itemsPorPagina) || 1;

  const productosPaginados = useMemo(() => {
    const inicio = (paginaActual - 1) * itemsPorPagina;
    const fin = inicio + itemsPorPagina;
    return productosFiltrados.slice(inicio, fin);
  }, [productosFiltrados, paginaActual]);

  // Handlers para actualizar estados
  const handleToggleCategoria = (id: string) => {
    setPaginaActual(1); // Resetea a pág 1 al filtrar
    setCategoriasSeleccionadas((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const handleCambioPrecioSlider = (valores: number[]) => {
    setPaginaActual(1);
    setRangoPrecio([valores[0], rangoPrecio[1]]);
    setPrecioMinInput(valores[0].toString());
  };

  const handlePrecioMinChange = (val: string) => {
    setPrecioMinInput(val);
    const num = Number(val) || 0;
    setRangoPrecio([num, rangoPrecio[1]]);
    setPaginaActual(1);
  };

  const handlePrecioMaxChange = (val: string) => {
    setPrecioMaxInput(val);
    const num = Number(val) || 200;
    setRangoPrecio([rangoPrecio[0], num]);
    setPaginaActual(1);
  };

  return {
    // Filtros
    busqueda,
    setBusqueda: (val: string) => {
      setBusqueda(val);
      setPaginaActual(1);
    },
    categoriasSeleccionadas,
    handleToggleCategoria,
    rangoPrecio,
    handleCambioPrecioSlider,
    precioMinInput,
    precioMaxInput,
    handlePrecioMinChange,
    handlePrecioMaxChange,

    // Paginación y Data controlada
    productosPaginados,
    totalProductos,
    paginaActual,
    totalPaginas,
    setPaginaActual,
    itemsMostrados: productosPaginados.length,
  };
};
