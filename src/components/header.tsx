"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b">
      <div className="container flex items-center justify-between h-16 py-4">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-maven-blue">Maven AI</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/services" className="text-foreground hover:text-maven-blue transition-colors">
            Serviços
          </Link>
          <Link href="/#cases" className="text-foreground hover:text-maven-blue transition-colors">
            Cases
          </Link>
          <Link href="/#como-funciona" className="text-foreground hover:text-maven-blue transition-colors">
            Como Funciona?
          </Link>
          <Link href="/#contato">
            <Button className="bg-maven-blue hover:bg-maven-blue/90 text-white">
              Entrar em contato
            </Button>
          </Link>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Menu">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[250px] sm:w-[300px]">
            <nav className="flex flex-col gap-4 mt-8">
              <Link
                href="/services"
                className="text-lg font-medium hover:text-maven-blue transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Serviços
              </Link>
              <Link
                href="/#cases"
                className="text-lg font-medium hover:text-maven-blue transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Cases
              </Link>
              <Link
                href="/#como-funciona"
                className="text-lg font-medium hover:text-maven-blue transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Como Funciona?
              </Link>
              <Link
                href="/#contato"
                onClick={() => setIsOpen(false)}
              >
                <Button className="w-full bg-maven-blue hover:bg-maven-blue/90 text-white">
                  Entrar em contato
                </Button>
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
