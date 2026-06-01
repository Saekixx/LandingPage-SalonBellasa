"use client";

import { useState, useMemo } from "react";
import { Servicio } from "@/types/servicio";
import serviciosData from "@/data/servicio.json";

export const useServicio = () => {
  // Estados de Filtros
  const [busqueda, setBusqueda] = useState("");
  const [categoriasSeleccionadas, setCategoriasSeleccionadas] = useState<string[]>([]);
  const [duracionSeleccionada, setDuracionSeleccionada] = useState<string | null>(null);

  // Estado de Paginacion
  const [paginaActual, setPaginaActual] = useState(1);
  const itemsPorPagina = 6;

  // Logica de Filtrado
  const serviciosFiltrados = useMemo(() => {
    return (serviciosData as Servicio[]).filter((servicio) => {
      // Filtro por Texto (Nombre o Categoria)
      const cumpleBusqueda =
        servicio.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
        servicio.categoria.toLowerCase().includes(busqueda.toLowerCase());

      // Filtro por Categorias Checkbox
      const mapeoCategorias: Record<string, string> = {
        cabello: "Cabello",
        maquillaje: "Maquillaje",
        unas: "Uñas",
        rostro: "Rostro",
        masajes: "Masajes",
      };

      const cumpleCategoria =
        categoriasSeleccionadas.length === 0 ||
        categoriasSeleccionadas.some(
          (catId) =>
            servicio.categoria.toLowerCase() ===
            mapeoCategorias[catId]?.toLowerCase()
        );

      // Filtro por la duracion
      const cumpleDuracion = (() => {
        if (!duracionSeleccionada) return true;
        if (duracionSeleccionada === "30min") return servicio.duracion_minutos <= 30;
        if (duracionSeleccionada === "60min") return servicio.duracion_minutos > 30 && servicio.duracion_minutos <= 60;
        if (duracionSeleccionada === "90min") return servicio.duracion_minutos > 60;
        return true;
      })();

      return cumpleBusqueda && cumpleCategoria && cumpleDuracion;
    });
  }, [busqueda, categoriasSeleccionadas, duracionSeleccionada]);

  const totalServicios = serviciosFiltrados.length;
  const totalPaginas = Math.ceil(totalServicios / itemsPorPagina) || 1;

  const serviciosPaginados = useMemo(() => {
    const inicio = (paginaActual - 1) * itemsPorPagina;
    const fin = inicio + itemsPorPagina;
    return serviciosFiltrados.slice(inicio, fin);
  }, [serviciosFiltrados, paginaActual]);

  const handleToggleCategoria = (id: string) => {
    setPaginaActual(1);
    setCategoriasSeleccionadas((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleToggleDuracion = (valor: string) => {
    setPaginaActual(1);
    setDuracionSeleccionada((prev) => (prev === valor ? null : valor));
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
    duracionSeleccionada,
    handleToggleDuracion,

    // Paginacion y Data
    serviciosPaginados,
    totalServicios,
    paginaActual,
    totalPaginas,
    setPaginaActual,
    itemsMostrados: serviciosPaginados.length,
  };
};
