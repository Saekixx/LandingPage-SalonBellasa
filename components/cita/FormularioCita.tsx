"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { MessageSquare, Calendar as CalendarIcon, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

// Componentes estrictos de Shadcn UI
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Esquema de validación Zod unificado con nombres consistentes
const formSchema = z.object({
  servicio: z.string().min(1, "Por favor selecciona un servicio."),
  fecha: z.date(),
  hora: z.string().min(1, "Por favor selecciona un horario."),
  nombre: z.string().min(3, "El nombre debe tener al menos 3 caracteres."),
  telefono: z.string().min(9, "Introduce un número de teléfono válido."),
  correo: z
    .string()
    .email("Introduce un correo electrónico válido.")
    .optional()
    .or(z.literal("")),
  notas: z.string().optional(),
});

const SERVICIOS = [
  { id: "corte", nombre: "Corte de Cabello Premium", duracion: "1h 30min" },
  { id: "balayage", nombre: "Balayage Signature", duracion: "2h 00min" },
  { id: "manicura", nombre: "Manicura Spa", duracion: "45min" },
  { id: "facial", nombre: "Facial Revitalizante", duracion: "60min" },
];

const HORARIOS = [
  "09:00 AM",
  "10:30 AM",
  "12:00 PM",
  "01:30 PM",
  "03:00 PM",
  "04:30 PM",
  "06:00 PM",
  "07:30 PM",
];

type FormularioCitaValues = z.infer<typeof formSchema>;

export default function FormularioCita() {
  // Inicialización del Form de Shadcn con los tipos correctos
  const form = useForm<FormularioCitaValues>({
    resolver: zodResolver(formSchema as never),
    defaultValues: {
      servicio: "",
      fecha: new Date(),
      hora: "",
      nombre: "",
      telefono: "",
      correo: "",
      notas: "", // Ahora coincide perfectamente con el esquema
    },
  });

  // Watch para capturar la duración en tiempo real
  const servicioId = form.watch("servicio");
  const infoServicio = SERVICIOS.find((s) => s.id === servicioId);

  function onSubmit(valores: FormularioCitaValues) {
    console.log("Datos validados de Shadcn:", valores);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full max-w-4xl mx-auto space-y-8"
      >
        {/* 1️⃣ SECCIÓN: Elige tu Servicio */}
        <div className="bg-white rounded-3xl border border-purple-100/70 p-6 sm:p-8 shadow-xs space-y-4">
          <div className="flex items-center gap-3">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#800050] text-xs font-bold text-white">
              1
            </span>
            <h3 className="text-xl font-bold text-purple-950">
              Elige tu Servicio
            </h3>
          </div>

          <FormField
            control={form.control}
            name="servicio"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Servicio
                </FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger className="w-full h-12 rounded-xl bg-slate-50/50 border-purple-100/80 focus:ring-purple-600 font-medium text-slate-700">
                      <SelectValue placeholder="Selecciona un servicio para tu cita" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="rounded-xl border-purple-100">
                    {SERVICIOS.map((sub) => (
                      <SelectItem
                        key={sub.id}
                        value={sub.id}
                        className="rounded-lg focus:bg-purple-50 focus:text-purple-950 font-medium text-slate-700 cursor-pointer"
                      >
                        {sub.nombre} ({sub.duracion})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* 2️⃣ SECCIÓN: Fecha y Hora */}
        <div className="bg-white rounded-3xl border border-purple-100/70 p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex items-center gap-3">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#800050] text-xs font-bold text-white">
              2
            </span>
            <h3 className="text-xl font-bold text-purple-950">Fecha y Hora</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Calendario de Shadcn UI */}
            <div className="md:col-span-5 flex flex-col items-center">
              <FormField
                control={form.control}
                name="fecha"
                render={({ field }) => (
                  <FormItem className="w-full flex flex-col items-center">
                    <FormLabel className="text-xs font-bold text-slate-500 uppercase tracking-wider self-start md:pl-6 mb-2">
                      <CalendarIcon className="inline h-3.5 w-3.5 mr-1 -mt-0.5" />{" "}
                      Selecciona el día
                    </FormLabel>
                    <FormControl>
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        className="rounded-2xl border border-purple-100/60 p-4 bg-white shadow-xs"
                        modifiersClassNames={{
                          selected:
                            "bg-[#b4006e]! text-white! hover:bg-[#900058]! rounded-xl font-bold",
                          today:
                            "bg-purple-50 text-purple-950 rounded-xl font-bold",
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Horarios */}
            <div className="md:col-span-7 space-y-4">
              <FormField
                control={form.control}
                name="hora"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
                      <Clock className="inline h-3.5 w-3.5 mr-1 -mt-0.5" />{" "}
                      Horarios Disponibles
                    </FormLabel>
                    <FormControl>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {HORARIOS.map((hora) => {
                          const esActivo = field.value === hora;
                          return (
                            <Button
                              key={hora}
                              type="button"
                              variant="outline"
                              onClick={() => field.onChange(hora)}
                              className={cn(
                                "h-11 text-xs sm:text-sm font-semibold rounded-xl border transition-all duration-200 cursor-pointer shadow-none!",
                                esActivo
                                  ? "bg-pink-50 border-[#b4006e] text-[#b4006e] hover:bg-pink-50 hover:text-[#b4006e]"
                                  : "bg-white border-purple-100/80 text-slate-600 hover:bg-purple-50/50 hover:border-purple-200",
                              )}
                            >
                              {hora}
                            </Button>
                          );
                        })}
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {infoServicio && (
                <p className="text-xs italic text-slate-400 font-medium pt-2">
                  * Duración estimada:{" "}
                  <span className="font-semibold text-slate-500">
                    {infoServicio.duracion}
                  </span>
                </p>
              )}
            </div>
          </div>
        </div>

        {/* 3️⃣ SECCIÓN: Datos de Contacto */}
        <div className="bg-white rounded-3xl border border-purple-100/70 p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex items-center gap-3">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#800050] text-xs font-bold text-white">
              3
            </span>
            <h3 className="text-xl font-bold text-purple-950">
              Datos de Contacto
            </h3>
          </div>

          <div className="rounded-2xl bg-purple-50/60 border border-purple-100/40 p-4 flex gap-3 items-start text-purple-950">
            <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-purple-400 bg-white text-xs font-bold text-purple-700">
              i
            </div>
            <div className="space-y-0.5">
              <h5 className="text-sm font-bold">¿Tienes cuenta?</h5>
              <p className="text-xs text-purple-900/70 font-medium leading-relaxed">
                Si has iniciado sesión, tus datos de contacto se completarán
                automáticamente para agilizar tu reserva.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Nombre */}
            <FormField
              control={form.control}
              name="nombre"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Nombre Completo
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Ej: Maria García"
                      {...field}
                      className="h-11 rounded-xl bg-white border-purple-100 focus-visible:ring-purple-600 font-medium text-slate-700 text-sm"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Teléfono */}
            <FormField
              control={form.control}
              name="telefono"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Teléfono
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="+34 000 000 000"
                      {...field}
                      className="h-11 rounded-xl bg-white border-purple-100 focus-visible:ring-purple-600 font-medium text-slate-700 text-sm"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Correo */}
            <FormField
              control={form.control}
              name="correo"
              render={({ field }) => (
                <FormItem className="space-y-2 md:col-span-2">
                  <FormLabel className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Correo Electrónico
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="maria@ejemplo.com"
                      {...field}
                      className="h-11 rounded-xl bg-white border-purple-100 focus-visible:ring-purple-600 font-medium text-slate-700 text-sm"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Notas */}
            <FormField
              control={form.control}
              name="notas"
              render={({ field }) => (
                <FormItem className="space-y-2 md:col-span-2">
                  <FormLabel className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Notas Adicionales (Opcional)
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="¿Alguna petición especial o detalle?"
                      {...field}
                      className="min-h-[100px] rounded-xl bg-white border-purple-100 focus-visible:ring-purple-600 font-medium text-slate-700 text-sm resize-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="pt-4">
            <Button
              type="submit"
              className="w-full h-13 rounded-xl bg-gradient-to-r from-[#800050] to-[#b4006e] hover:from-[#660040] hover:to-[#96005c] text-white font-bold tracking-wide shadow-md transition-all active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer text-sm"
            >
              <MessageSquare className="h-4 w-4 fill-white text-[#b4006e]" />
              Agendar por WhatsApp
            </Button>
            <p className="text-center text-[11px] text-slate-400 font-medium mt-3">
              Te redirigiremos a WhatsApp para confirmar los detalles finales.
            </p>
          </div>
        </div>
      </form>
    </Form>
  );
}
