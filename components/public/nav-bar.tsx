"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import {
  NavigationMenu, NavigationMenuItem, NavigationMenuLink,
  NavigationMenuList, navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/features", label: "Características" },
  { href: "/pricing",  label: "Precios"          },
  { href: "/contact",  label: "Contacto"          },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">

        <Link href="/" className="font-bold text-xl">MiLogo</Link>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {navLinks.map(({ href, label }) => (
              <NavigationMenuItem key={href}>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href={href}>{label}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden md:flex items-center space-x-2">
          <Button variant="ghost" asChild><Link href="/login">Iniciar sesión</Link></Button>
          <Button asChild><Link href="/register">Registrarse</Link></Button>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-6">
                {navLinks.map(({ href, label }) => (
                  <Link key={href} href={href} className="text-lg font-medium hover:underline">{label}</Link>
                ))}
                <hr className="my-2" />
                <Button variant="outline" asChild className="w-full"><Link href="/login">Iniciar sesión</Link></Button>
                <Button asChild className="w-full"><Link href="/register">Registrarse</Link></Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </header>
  );
}