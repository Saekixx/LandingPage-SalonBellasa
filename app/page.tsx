import CarouselProducto from "@/components/CarouselProducto";
import productos from "@/data/producto.json";

function Home() {
  return (
    <div className="w-full">
      {/* 🔮 NUEVA SECCIÓN: Experiencia Aura (Ancho Completo con Degradado) */}
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

      {/* Contenedor Principal de la Página */}
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        {/* Sección "Nuestros Servicios" */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-3xl font-extrabold tracking-tight text-purple-950 whitespace-nowrap">
              Nuestro Servicios
            </h3>
            {/* Línea decorativa horizontal */}
            <div className="h-0.5 w-full bg-purple-200/80 rounded-full" />
          </div>

          {/* Contenedor del Carrusel de Productos */}
          <div className="w-full">
            <CarouselProducto productos={productos} />
          </div>
        </div>

        {/* Sección "Nuestra Boutique" */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-3xl font-extrabold tracking-tight text-purple-950 whitespace-nowrap">
              Nuestra Boutique
            </h3>
            {/* Línea decorativa horizontal */}
            <div className="h-0.5 w-full bg-purple-200/80 rounded-full" />
          </div>

          {/* Contenedor del Carrusel de Productos */}
          <div className="w-full">
            <CarouselProducto productos={productos} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
