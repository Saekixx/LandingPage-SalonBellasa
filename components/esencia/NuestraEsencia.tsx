import { Heart, ShieldCheck, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function NuestraEsencia() {
  return (
    <div className="mb-24 py-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* COLUMNA IZQUIERDA: Contenedor de Imagen con Tarjeta Superpuesta */}
        <div className="relative w-full max-w-md mx-auto lg:max-w-none aspect-square flex items-center justify-center">
          {/* Tarjeta de la Imagen Principal usando Shadcn Card */}
          <Card className="w-11/12 h-11/12 rounded-[32px] overflow-hidden bg-zinc-950 shadow-[0_20px_50px_rgba(0,0,0,0.12)] border-none mr-auto mb-auto">
            <img
              src="/images/esencia-principal.jpg" // Tu imagen del balón negro o similar
              alt="Nuestra Esencia"
              className="w-full h-full object-cover"
            />
          </Card>

          {/* Tarjeta Flotante Morada (Años de experiencia) */}
          <Card className="absolute bottom-0 right-0 w-7/12 bg-purple-800 text-white p-6 md:p-8 rounded-[24px] shadow-xl border-none transform translate-y-4 -translate-x-2">
            <CardContent className="p-0">
              <h4 className="text-3xl md:text-4xl font-black mb-1">15+</h4>
              <p className="text-xs md:text-sm text-purple-100 font-medium leading-snug">
                Años de experiencia transformando miradas.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* COLUMNA DERECHA: Textos y Características */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-4xl font-extrabold tracking-tight text-purple-950">
              Nuestra Esencia
            </h3>
            <p className="text-purple-900/80 font-medium text-base leading-relaxed">
              En Aura Beauty, creemos que la belleza es una extensión de tu
              bienestar interior. Nuestra misión es brindar un refugio de
              cuidado personal donde cada tratamiento sea una experiencia de
              renovación.
            </p>
          </div>

          {/* Lista de Características */}
          <div className="space-y-6">
            {/* Ítem 1 */}
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 p-3 bg-purple-50 rounded-2xl text-purple-800">
                <Heart className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h5 className="font-bold text-purple-950 text-base">
                  Pasión por el Detalle
                </h5>
                <p className="text-sm text-purple-900/70 font-medium leading-relaxed">
                  Cada servicio es ejecutado con precisión artesanal por
                  expertos certificados.
                </p>
              </div>
            </div>

            {/* Ítem 2 */}
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 p-3 bg-purple-50 rounded-2xl text-purple-800">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h5 className="font-bold text-purple-950 text-base">
                  Productos Premium
                </h5>
                <p className="text-sm text-purple-900/70 font-medium leading-relaxed">
                  Solo utilizamos las mejores marcas internacionales y nuestra
                  línea exclusiva Aura.
                </p>
              </div>
            </div>

            {/* Ítem 3 */}
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 p-3 bg-purple-50 rounded-2xl text-purple-800">
                <User className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h5 className="font-bold text-purple-950 text-base">
                  Cuidado Personalizado
                </h5>
                <p className="text-sm text-purple-900/70 font-medium leading-relaxed">
                  Entendemos que cada cliente es único, por eso adaptamos cada
                  tratamiento a tus necesidades.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
