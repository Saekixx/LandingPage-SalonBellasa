import FormularioCita from "@/components/cita/FormularioCita";

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-50/50 py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      {/* Encabezado Principal de la Vista */}
      <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#800050] tracking-tight">
          Reserva tu Experiencia
        </h1>
        <p className="text-sm sm:text-base text-slate-600 font-medium max-w-md mx-auto leading-relaxed">
          Personaliza tu momento de bienestar. Selecciona el servicio y el
          horario que mejor te convenga.
        </p>
      </div>

      {/* Contenedor del Formulario Inyectado */}
      <div className="w-full max-w-4xl">
        <FormularioCita />
      </div>
    </main>
  );
}
