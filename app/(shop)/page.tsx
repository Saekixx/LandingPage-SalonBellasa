import React from "react";
import CarouselProducto from "@/components/producto/CarouselProducto";
import CarouselServicio from "@/components/servicio/CarouselServicio";

import { NuestraEsencia } from "@/components/esencia/NuestraEsencia";
import { Galeria } from "@/components/galeria/Galeria";
import { Contactanos } from "@/components/contacto/Contactanos";

import productos from "@/data/producto.json";
import servicios from "@/data/servicio.json";

function Home() {
  return (
    <div className="w-full bg-slate-50/30 min-h-screen scroll-smooth">
      <section className="w-full bg-linear-to-r from-purple-50 via-pink-50/30 to-purple-50 py-20 px-4 text-center border-b border-purple-100/40">
        <div className="max-w-4xl mx-auto space-y-4">
          <h1 className="text-5xl font-extrabold tracking-tight text-purple-950 sm:text-6xl md:text-7xl">
            Experiencia Aura
          </h1>
          <p className="text-base text-purple-900/80 font-medium max-w-2xl mx-auto sm:text-lg leading-relaxed">
            Realiza tu brillo natural con nuestros servicios premium y productos
            exclusivos diseñados para tu bienestar integral.
          </p>
        </div>
      </section>

      {/* Contenedor Principal */}
      <div className="container mx-auto px-4 py-16 max-w-7xl space-y-24">
        {/* SECCIÓN 1: Nuestros Servicios */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-3xl font-extrabold tracking-tight text-purple-950 whitespace-nowrap">
              Nuestro Servicios
            </h3>
            <div className="h-0.5 w-full bg-purple-200/80 rounded-full" />
          </div>

          <div className="w-full">
            <CarouselServicio servicios={servicios} />
          </div>
        </div>

        {/* SECCIÓN 2: Nuestra Boutique */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-3xl font-extrabold tracking-tight text-purple-950 whitespace-nowrap">
              Nuestra Boutique
            </h3>
            <div className="h-0.5 w-full bg-purple-200/80 rounded-full" />
          </div>

          <div className="w-full">
            <CarouselProducto productos={productos} />
          </div>
        </div>

        {/* SECCIÓN 3: Nuestra Esencia (Nosotros) */}
        <div id="nosotros" className="scroll-mt-24">
          <NuestraEsencia />
        </div>

        {/* SECCIÓN 4: Nuestra Galería */}
        <div id="galeria" className="scroll-mt-24">
          <Galeria />
        </div>

        {/* SECCIÓN 5: Contáctanos */}
        <div id="contactos" className="scroll-mt-24">
          <Contactanos />
        </div>
      </div>
    </div>
  );
}

export default Home;
