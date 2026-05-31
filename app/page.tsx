import React from 'react';
import CardServicio from '@/components/CardServicio';

export default function Home() {
  return (
    <>
      {/* Importación directa de Google Fonts para garantizar la tipografía limpia de tu diseño */}
      <link
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <main 
        className="min-h-screen bg-[#FDFBFC] p-6 md:p-12 flex flex-col items-center antialiased"
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
      >
        <div className="max-w-6xl w-full">
          
          {/* ENCABEZADO: Título de la sección con su línea morada lateral */}
          <div className="flex items-center gap-4 mb-12 w-full">
            <h2 className="text-[28px] md:text-[32px] font-bold text-[#5B0A63] whitespace-nowrap tracking-tight">
              Nuestros Servicios
            </h2>
            <div className="h-[1px] bg-[#5B0A63]/20 w-full mt-2" />
          </div>

          {/* CONTENEDOR GRID: Forzamos 3 columnas reales y limpias en pantallas medianas y grandes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center w-full">
            
            <CardServicio
              titulo="Balayage Signature"
              descripcion="Técnica de aclarado a mano alzada para un acabado natural y luminoso que resalta tus facciones."
              precio={120.00}
              duracionMinutos={60}
              imageUrl="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=600"
              url="/agenda/balayage"
            />

            <CardServicio
              titulo="Maquillaje de Gala"
              descripcion="Look sofisticado y duradero para eventos especiales, incluyendo aplicación de pestañas premium."
              precio={85.00}
              duracionMinutos={90}
              imageUrl="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=600"
              url="/agenda/maquillaje-gala"
            />

            <CardServicio
              titulo="Aura Gel Manicure"
              descripcion="Cuidado integral de uñas con esmaltado semipermanente y tratamiento de hidratación profunda."
              precio={45.00}
              duracionMinutos={45}
              imageUrl="https://images.unsplash.com/photo-1604654894610-df490688a50e?auto=format&fit=crop&q=80&w=600"
              url="/agenda/aura-gel"
            />

          </div>
        </div>
      </main>
    </>
  );
}