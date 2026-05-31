"use client";

import { Menu, ShoppingCart, UserPlus } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-tr from-purple-700 to-pink-600 text-white shadow-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="h-5 w-5"
            >
              <path d="M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4-3.9-3.8 5.4-.8z" />
            </svg>
          </div>
          <span className="text-xl font-extrabold tracking-tighter text-purple-900">
            Salon de Belleza
          </span>
        </Link>

        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="space-x-1">
            <NavigationMenuItem>
              <Link href="/servicios">
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} text-slate-900 font-extrabold tracking-tight hover:text-purple-700`}
                >
                  Servicios
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/productos">
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} text-slate-900 font-extrabold tracking-tight hover:text-purple-700`}
                >
                  Productos
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/galeria">
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} text-slate-900 font-extrabold tracking-tight hover:text-purple-700`}
                >
                  Galería
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/nosotros">
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} text-slate-900 font-extrabold tracking-tight hover:text-purple-700`}
                >
                  Nosotros
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contactos">
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} text-slate-900 font-extrabold tracking-tight hover:text-purple-700`}
                >
                  Contactos
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden lg:flex items-center space-x-4">
          <HoverCard openDelay={100} closeDelay={200}>
            <HoverCardTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="relative text-slate-700 hover:text-purple-700"
              >
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-pink-600 text-[10px] font-bold text-white">
                  0
                </span>
              </Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80 p-4" align="end">
              <div className="space-y-2">
                <h4 className="font-extrabold text-sm tracking-tight text-slate-900">
                  Tu Carrito
                </h4>
                <p className="text-xs text-muted-foreground">
                  No hay productos en el carrito todavía.
                </p>
                <hr className="my-2" />
                <Button
                  size="sm"
                  className="w-full bg-purple-700 hover:bg-purple-800 text-white font-extrabold tracking-tight"
                  asChild
                >
                  <Link href="/carrito">Ver mi bolsa</Link>
                </Button>
              </div>
            </HoverCardContent>
          </HoverCard>

          <Button
            variant="ghost"
            className="text-slate-700 hover:text-purple-700 flex items-center gap-2 font-extrabold tracking-tight"
            asChild
          >
            <Link href="/register">
              <UserPlus className="h-4 w-4" />
              <span>Registrarse</span>
            </Link>
          </Button>

          <Button
            className="rounded-full bg-linear-to-r from-purple-800 to-pink-600 px-6 py-2 font-extrabold tracking-tight text-white shadow-md transition-transform hover:opacity-95 active:scale-95"
            asChild
          >
            <Link href="/agendar">Agendar cita</Link>
          </Button>
        </div>

        <div className="lg:hidden flex items-center space-x-3">
          <Button
            variant="ghost"
            size="icon"
            className="relative text-slate-700"
            asChild
          >
            <Link href="/carrito">
              <ShoppingCart className="h-5 w-5" />
            </Link>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-slate-700">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-75">
              <nav className="flex flex-col space-y-4 mt-8">
                <span className="text-lg font-extrabold tracking-tighter text-purple-900 border-b pb-2">
                  Aura Beauty
                </span>
                <Link
                  href="/servicios"
                  className="text-base font-extrabold tracking-tight text-slate-700 hover:text-purple-700"
                >
                  Servicios
                </Link>
                <Link
                  href="/productos"
                  className="text-base font-extrabold tracking-tight text-slate-700 hover:text-purple-700"
                >
                  Productos
                </Link>
                <Link
                  href="/galeria"
                  className="text-base font-extrabold tracking-tight text-slate-700 hover:text-purple-700"
                >
                  Galería
                </Link>
                <Link
                  href="/nosotros"
                  className="text-base font-extrabold tracking-tight text-slate-700 hover:text-purple-700"
                >
                  Nosotros
                </Link>
                <Link
                  href="/contactos"
                  className="text-base font-extrabold tracking-tight text-slate-700 hover:text-purple-700"
                >
                  Contactos
                </Link>

                <hr className="my-2" />

                <Button
                  variant="outline"
                  className="w-full justify-start gap-2 font-extrabold tracking-tight"
                  asChild
                >
                  <Link href="/register">
                    <UserPlus className="h-4 w-4" />
                    Registrarse
                  </Link>
                </Button>

                <Button
                  className="w-full rounded-full bg-linear-to-r from-purple-800 to-pink-600 text-white font-extrabold tracking-tight"
                  asChild
                >
                  <Link href="/agendar">Agendar cita</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
