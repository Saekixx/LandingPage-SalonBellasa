import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Producto } from "@/types/producto";
import CardProducto from "./CardProducto";

interface CarouselProductoProps {
  productos: Producto[];
}

function CarouselProducto({ productos }: CarouselProductoProps) {
  return (
    <div className="relative w-full px-4 sm:px-12">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:ml-4">
          {productos.map((producto) => (
            <CarouselItem
              key={producto.id}
              className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
            >
              <div className="p-1 h-full flex flex-col">
                <CardProducto
                  producto={producto}
                  props={{ className: "w-full h-full flex flex-col" }}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:inline-flex -left-2 lg:-left-4" />
        <CarouselNext className="hidden sm:inline-flex -right-2 lg:-right-4" />
      </Carousel>
    </div>
  );
}

export default CarouselProducto;
