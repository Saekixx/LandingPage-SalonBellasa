"use client";

import { useState } from "react";
import Link from "next/link";
import { User, Phone, Mail, Lock, Eye, EyeOff, ArrowRight, ShieldCheck, KeyRound, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

const PURPLE = "#8B1A8B";

type FormData = { name: string; whatsapp: string; email: string; password: string; terms: boolean };
type Errors = Partial<Record<keyof FormData, string>>;

const initialForm: FormData = { name: "", whatsapp: "", email: "", password: "", terms: false };

function validate(form: FormData): Errors {
  const e: Errors = {};
  if (!form.name.trim()) e.name = "El nombre es obligatorio.";
  if (!form.whatsapp.trim()) e.whatsapp = "El número es obligatorio.";
  else if (!/^\+?[0-9\s\-]{7,15}$/.test(form.whatsapp)) e.whatsapp = "Número inválido.";
  if (!form.email.trim()) e.email = "El correo es obligatorio.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Correo inválido.";
  if (!form.password) e.password = "La contraseña es obligatoria.";
  else if (form.password.length < 8) e.password = "Mínimo 8 caracteres.";
  else if (!/[A-Z]/.test(form.password) || !/[0-9]/.test(form.password)) e.password = "Incluye mayúscula y número.";
  if (!form.terms) e.terms = "Debes aceptar los términos.";
  return e;
}

const inputClass = `pl-9 h-11 rounded-xl border-gray-200 placeholder:text-gray-300
  focus-visible:border-[${PURPLE}] focus-visible:ring-[${PURPLE}]/20`;

const fields = [
  { id: "name",     label: "Nombre Completo",    type: "text",     icon: User,  placeholder: "Ej. María García"   },
  { id: "whatsapp", label: "WhatsApp",            type: "tel",      icon: Phone, placeholder: "+34 600 000 000"    },
  { id: "email",    label: "Correo Electrónico",  type: "email",    icon: Mail,  placeholder: "tu@email.com"       },
];

export function RegisterForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Errors>({});
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const set = (field: keyof FormData, value: string | boolean) => {
    setForm(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length) return setErrors(errs);
    setLoading(true);
    await new Promise(r => setTimeout(r, 1200));
    setLoading(false);
    setSuccess(true);
  };

  if (success) return (
    <div className="flex flex-col items-center gap-4 py-6 text-center">
      <div className="flex size-16 items-center justify-center rounded-full bg-[#8B1A8B]/10">
        <Sparkles className="size-8 text-[#8B1A8B]" />
      </div>
      <h2 className="text-xl font-semibold">¡Cuenta creada con éxito!</h2>
      <p className="text-sm text-gray-500">Bienvenida, <span className="font-medium text-gray-700">{form.name.split(" ")[0]}</span>.</p>
      <Button asChild size="lg" className="w-full bg-[#8B1A8B] hover:bg-[#7a167a] text-white rounded-xl h-11">
        <Link href="/login">Iniciar sesión →</Link>
      </Button>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">

      {fields.map(({ id, label, type, icon: Icon, placeholder }) => (
        <div key={id} className="flex flex-col gap-1.5">
          <Label htmlFor={id} className="text-gray-700 font-medium text-sm">{label}</Label>
          <div className="relative">
            <Icon className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
            <Input
              id={id}
              type={type}
              placeholder={placeholder}
              value={form[id as keyof FormData] as string}
              onChange={e => set(id as keyof FormData, e.target.value)}
              aria-invalid={!!errors[id as keyof FormData]}
              className={inputClass}
            />
          </div>
          {errors[id as keyof FormData] && (
            <p className="text-xs text-red-500">{errors[id as keyof FormData]}</p>
          )}
        </div>
      ))}

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="password" className="text-gray-700 font-medium text-sm">Contraseña</Label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            value={form.password}
            onChange={e => set("password", e.target.value)}
            aria-invalid={!!errors.password}
            className={`${inputClass} pr-10`}
          />
          <button type="button" onClick={() => setShowPassword(v => !v)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
            {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
          </button>
        </div>
        <p className="text-[11px] text-gray-400">Mínimo 8 caracteres, incluye una mayúscula y un número.</p>
        {errors.password && <p className="text-xs text-red-500">{errors.password}</p>}
      </div>

      <div className="flex flex-col gap-1">
        <div className="flex items-start gap-2.5">
          <Checkbox id="terms" checked={form.terms}
            onCheckedChange={v => set("terms", !!v)}
            className="mt-0.5 data-[state=checked]:bg-[#8B1A8B] data-[state=checked]:border-[#8B1A8B]" />
          <label htmlFor="terms" className="text-xs text-gray-500 leading-relaxed cursor-pointer">
            Acepto los{" "}
            <Link href="/terms" className="text-[#8B1A8B] hover:underline font-medium">Términos y Condiciones</Link>
            {" "}y la{" "}
            <Link href="/privacy" className="text-[#8B1A8B] hover:underline font-medium">Política de Privacidad</Link>
            {" "}de Aura Beauty.
          </label>
        </div>
        {errors.terms && <p className="text-xs text-red-500 ml-6">{errors.terms}</p>}
      </div>

      <Button type="submit" disabled={loading} size="lg"
        className="w-full h-11 rounded-xl bg-[#8B1A8B] hover:bg-[#7a167a] text-white font-semibold shadow-md shadow-[#8B1A8B]/25">
        {loading
          ? <span className="flex items-center gap-2"><span className="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Creando cuenta…</span>
          : <span className="flex items-center gap-2">Crear Cuenta <ArrowRight className="size-4" /></span>}
      </Button>

      <p className="text-center text-sm text-gray-500">
        ¿Ya tienes una cuenta?{" "}
        <Link href="/login" className="text-[#8B1A8B] font-semibold hover:underline">Inicia sesión aquí</Link>
      </p>

      <div className="flex flex-col items-center gap-2 pt-1 border-t border-gray-100">
        <p className="text-[10px] uppercase tracking-widest text-gray-400">Confianza Garantizada</p>
        <div className="flex items-center gap-5 text-gray-400">
          <span className="flex items-center gap-1.5 text-xs"><ShieldCheck className="size-3.5 text-[#8B1A8B]" />Pago Seguro</span>
          <span className="flex items-center gap-1.5 text-xs"><KeyRound className="size-3.5 text-[#8B1A8B]" />Datos Cifrados</span>
        </div>
      </div>

    </form>
  );
}