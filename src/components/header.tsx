"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="border-b bg-white">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold">
          <div className="relative h-8 w-8">
            <Image
              src="/images/automatizando-logo.png"
              alt="Automatizando Logo"
              width={32}
              height={32}
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-auto-blue leading-tight">
              Automatizando
            </span>
            <span className="text-xs text-gray-600 -mt-1">
              sua empresa com IA
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex gap-6">
          <Link
            href="/services"
            className="text-foreground hover:text-auto-blue transition-colors"
          >
            Serviços
          </Link>
          <Link
            href="/#cases"
            className="text-foreground hover:text-auto-blue transition-colors"
          >
            Casos de Sucesso
          </Link>
          <Link
            href="/#contato"
            className="text-foreground hover:text-auto-blue transition-colors"
          >
            Contato
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button className="hidden md:flex" asChild>
            <Link href="/#contato">Fale Conosco</Link>
          </Button>

          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon" aria-label="Menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80%] sm:w-[385px]">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  href="/services"
                  className="hover:text-auto-blue"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Serviços
                </Link>
                <Link
                  href="/#cases"
                  className="hover:text-auto-blue"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Casos de Sucesso
                </Link>
                <Link
                  href="/#contato"
                  className="hover:text-auto-blue"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contato
                </Link>
                <Button className="w-full" asChild>
                  <Link
                    href="/#contato"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Fale Conosco
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
