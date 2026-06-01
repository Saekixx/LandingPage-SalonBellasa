import React from "react";
import { Map } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// 🎨 SVG de Redes Sociales tipados correctamente con React.ComponentProps<"svg">
const SocialIcons = {
  Facebook: (props: React.ComponentProps<"svg">) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  ),
  Instagram: (props: React.ComponentProps<"svg">) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  ),
  Twitter: (props: React.ComponentProps<"svg">) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  ),
};

export function Contactanos() {
  const googleMapsUrl = "https://maps.google.com";

  return (
    <div className="mb-12">
      {/* Encabezado */}
      <div className="flex items-center gap-4 mb-8">
        <h3 className="text-3xl font-extrabold tracking-tight text-purple-950 whitespace-nowrap">
          Contáctanos
        </h3>
        <div className="h-0.5 w-full bg-purple-200/80 rounded-full" />
      </div>

      {/* Grid de Distribución */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {/* COLUMNA IZQUIERDA: Horarios y Redes con Shadcn Cards */}
        <div className="flex flex-col gap-6 justify-between">
          {/* Bloque Horarios */}
          <Card className="rounded-3xl border-purple-100/30 flex-1 shadow-xs">
            <CardHeader className="pb-2">
              <CardTitle className="text-xs font-bold tracking-widest text-pink-600 uppercase">
                Horarios
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 font-medium text-purple-950/90 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-purple-950/60">Lunes - Viernes</span>
                <span className="font-bold">09:00 - 20:00</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-purple-950/60">Sábado</span>
                <span className="font-bold">10:00 - 18:00</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-purple-300">Domingo</span>
                <span className="italic text-purple-400">Cerrado</span>
              </div>
            </CardContent>
          </Card>

          {/* Bloque Redes Sociales */}
          <Card className="rounded-3xl border-purple-100/30 shadow-xs">
            <CardHeader className="pb-2">
              <CardTitle className="text-xs font-bold tracking-widest text-pink-600 uppercase">
                Síguenos
              </CardTitle>
            </CardHeader>
            <CardContent className="flex gap-3 pt-2">
              <a
                href="#"
                className="p-2.5 bg-purple-900 text-white rounded-full hover:bg-purple-800 transition-colors flex items-center justify-center"
              >
                <SocialIcons.Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2.5 bg-purple-900 text-white rounded-full hover:bg-purple-800 transition-colors flex items-center justify-center"
              >
                <SocialIcons.Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2.5 bg-purple-900 text-white rounded-full hover:bg-purple-800 transition-colors flex items-center justify-center"
              >
                <SocialIcons.Twitter className="w-5 h-5" />
              </a>
            </CardContent>
          </Card>
        </div>

        {/* COLUMNA DERECHA: Mapa */}
        <Card className="md:col-span-2 rounded-[32px] p-4 border-purple-100/30 flex shadow-xs">
          <CardContent className="w-full min-h-[260px] bg-purple-50/50 rounded-[24px] border border-dashed border-purple-200/60 flex flex-col items-center justify-center text-center p-6">
            <div className="p-4 bg-purple-100/50 rounded-2xl text-purple-400 mb-4">
              <Map className="w-8 h-8" />
            </div>

            <h4 className="text-purple-950 font-bold text-base mb-1">
              Ubicación: Polanco, CDMX
            </h4>
            <p className="text-xs text-purple-950/40 font-medium mb-6">
              Haz clic para abrir en Google Maps
            </p>

            <Button
              asChild
              className="px-6 py-2.5 bg-gradient-to-r from-purple-900 to-pink-700 hover:from-purple-800 hover:to-pink-600 text-white font-semibold text-sm rounded-full shadow-md hover:shadow-lg transition-all duration-300 border-none"
            >
              <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                Ver indicaciones
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
