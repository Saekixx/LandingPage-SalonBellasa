"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

//Datos simulados
const FAKE_USER = { email: "demo@aura.com", password: "Demo1234" };
const INPUT_CLASS = "pl-9 h-11 rounded-xl border-gray-200 placeholder:text-gray-300 focus-visible:border-[#8B1A8B] focus-visible:ring-[#8B1A8B]/20";

type Errors = { email?: string; password?: string; general?: string };

function validate(email: string, password: string): Errors {
  const e: Errors = {};
  if (!email.trim()) e.email = "El correo es obligatorio.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Correo inválido.";
  if (!password) e.password = "La contraseña es obligatoria.";
  return e;
}

export function LoginForm() {
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [errors, setErrors]     = useState<Errors>({});
  const [loading, setLoading]   = useState(false);

  const clearError = (field: keyof Errors) =>
    setErrors(prev => ({ ...prev, [field]: "" }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(email, password);
    if (Object.keys(errs).length) return setErrors(errs);
    setLoading(true);
    await new Promise(r => setTimeout(r, 1200));
    setLoading(false);

    //Validacion simulada
    if (email !== FAKE_USER.email || password !== FAKE_USER.password)
      return setErrors({ general: "Correo o contraseña incorrectos :v" });
    alert("¡Bienvenida! (aquí irías al dashboard)");
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">

      {errors.general && (
        <div className="rounded-lg bg-red-50 border border-red-200 px-3 py-2 text-xs text-red-600 text-center">
          {errors.general}
        </div>
      )}

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="email" className="text-gray-700 font-medium text-sm">Correo electrónico</Label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
          <Input id="email" type="email" placeholder="ejemplo@aura.com" value={email}
            onChange={e => { setEmail(e.target.value); clearError("email"); }}
            aria-invalid={!!errors.email} className={INPUT_CLASS} />
        </div>
        {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
      </div>

      <div className="flex flex-col gap-1.5">
        <div className="flex items-center justify-between">
          <Label htmlFor="password" className="text-gray-700 font-medium text-sm">Contraseña</Label>
          <Link href="/forgot-password" className="text-xs text-[#8B1A8B] hover:underline font-medium">¿La olvidaste?</Link>
        </div>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
          <Input id="password" type={showPass ? "text" : "password"} placeholder="••••••••" value={password}
            onChange={e => { setPassword(e.target.value); clearError("password"); }}
            aria-invalid={!!errors.password} className={`${INPUT_CLASS} pr-10`} />
          <button type="button" onClick={() => setShowPass(v => !v)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
            {showPass ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
          </button>
        </div>
        {errors.password && <p className="text-xs text-red-500">{errors.password}</p>}
      </div>

      <Button type="submit" disabled={loading} size="lg"
        className="w-full h-11 rounded-xl bg-[#8B1A8B] hover:bg-[#7a167a] text-white font-semibold shadow-md shadow-[#8B1A8B]/25">
        {loading
          ? <span className="flex items-center gap-2"><span className="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Iniciando sesión…</span>
          : "Iniciar sesión"}
      </Button>

      <p className="text-center text-sm text-gray-500">
        ¿No tienes una cuenta?{" "}
        <Link href="/register" className="text-[#8B1A8B] font-semibold hover:underline">Regístrate ahora</Link>
      </p>

      <div className="flex items-center gap-3">
        <hr className="flex-1 border-gray-200" />
        <span className="text-[11px] uppercase tracking-widest text-gray-400">o continuar con</span>
        <hr className="flex-1 border-gray-200" />
      </div>

      <div className="grid grid-cols-2 gap-3">
        {[
          { label: "Google",   icon: <GoogleIcon />   },
          { label: "Facebook", icon: <FacebookIcon /> },
        ].map(({ label, icon }) => (
          <Button key={label} type="button" variant="outline"
            className="h-11 rounded-xl border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50">
            {icon} {label}
          </Button>
        ))}
      </div>

    </form>
  );
}

function GoogleIcon() {
  return (
    <svg className="size-4" viewBox="0 0 24 24">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg className="size-4" viewBox="0 0 24 24">
      <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}