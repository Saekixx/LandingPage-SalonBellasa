import CarouselProducto from "@/components/CarouselProducto";
import productos from "@/data/producto.json";

function Home() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      {/* Sección de Bienvenida Principal */}
      <div className="mb-16 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-purple-900 md:text-5xl">
          Bienvenido a Nuestro Salón de Belleza
        </h1>
        <p className="text-lg text-slate-600 mt-3 max-w-2xl mx-auto">
          Descubre nuestros servicios y productos de calidad diseñados
          especialmente para ti.
        </p>
      </div>

      {/* Sección "Nuestra Boutique" basada en la imagen */}
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-purple-950 whitespace-nowrap">
            Nuestra Boutique
          </h2>
          {/* Línea decorativa horizontal que se ve en el diseño */}
          <div className="h-0.5 w-full bg-purple-200/80 rounded-full" />
        </div>

        {/* Contenedor del Carrusel de Productos */}
        <div className="w-full">
          <CarouselProducto productos={productos} />
        </div>
      </div>
    </div>
  );
}

export default Home;
