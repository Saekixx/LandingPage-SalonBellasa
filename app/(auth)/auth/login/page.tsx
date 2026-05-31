import { Leaf } from "lucide-react";
import { LoginForm } from "@/components/public/login-form";
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-linear-to-br from-[#fdf4ff] via-[#fce7f3] to-[#f3e8ff] px-4">
      <div className="w-full max-w-sm">
        <Link href="/">
          <div className="flex flex-col items-center gap-2 mb-8">
            <div className="flex size-14 items-center justify-center rounded-2xl bg-linear-to-br from-[#8B1A8B] to-[#c026d3] shadow-lg shadow-purple-300/40">
              <Leaf className="size-7 text-white" strokeWidth={1.8} />
            </div>
            <h1 className="text-lg font-bold text-gray-900 tracking-wide">
              Aura Beauty
            </h1>
            <p className="text-[11px] uppercase tracking-widest text-gray-400 font-medium -mt-1">
              Wellness & Salon
            </p>
          </div>
        </Link>

        <div className="rounded-2xl bg-white shadow-xl shadow-purple-100/60 border border-purple-50 px-7 py-8">
          <div className="mb-6 text-center">
            <h2 className="text-xl font-bold text-gray-900">
              Bienvenido de nuevo
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Ingresa tus credenciales para acceder
            </p>
          </div>
          <LoginForm />
        </div>

        <p className="text-center text-[11px] text-gray-400 mt-6">
          © 2024 Aura Beauty Salon. Todos los derechos reservados.
        </p>
      </div>
    </main>
  );
}
