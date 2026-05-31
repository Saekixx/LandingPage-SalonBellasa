import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Servicio } from "@/types/servicio";
import CardServicio from "./CardServicio";

interface CarouselServicioProps {
  servicios: Servicio[];
}

function CarouselServicio({ servicios }: CarouselServicioProps) {
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
          {servicios.map((servicio) => (
            <CarouselItem
              key={servicio.id}
              // Mantenemos la distribución perfecta de anchuras:
              // 1 en móvil, 2 en tablets chicas, 3 en tablets grandes, 4 en desktop
              className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
            >
              <div className="p-1 h-full flex flex-col">
                <CardServicio
                  servicio={servicio}
                  props={{ className: "w-full h-full flex flex-col" }}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Flechas Previous y Next acopladas simétricamente */}
        <CarouselPrevious className="hidden sm:inline-flex -left-2 lg:-left-4" />
        <CarouselNext className="hidden sm:inline-flex -right-2 lg:-right-4" />
      </Carousel>
    </div>
  );
}

export default CarouselServicio;
