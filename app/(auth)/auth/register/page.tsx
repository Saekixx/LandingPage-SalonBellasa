import { Leaf } from "lucide-react";
import { RegisterForm } from "@/components/public/register-form";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <main className="flex flex-1 items-center justify-center min-h-[calc(100vh-3.5rem)] bg-gradient-to-br from-[#fdf4ff] via-[#fce7f3] to-[#f3e8ff] px-4 py-12">
      <div className="w-full max-w-md">
        <div className="rounded-2xl bg-white shadow-xl shadow-purple-100/60 border border-purple-50 px-8 py-9">
          <Link href="/">
            <div className="flex flex-col items-center gap-3 mb-8">
              <div className="flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#8B1A8B] to-[#c026d3] shadow-lg shadow-purple-300/40">
                <Leaf className="size-7 text-white" strokeWidth={1.8} />
              </div>
              <div className="text-center">
                <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
                  Unete a Aura Beauty
                </h1>
                <p className="mt-1 text-sm text-gray-500 max-w-xs leading-relaxed">
                  Crea tu cuenta para gestionar tus citas y descubrir productos
                  exclusivos.
                </p>
              </div>
            </div>
          </Link>
          <RegisterForm />
        </div>
      </div>
    </main>
  );
}
