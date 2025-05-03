"use client";

import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="w-full bg-maven-blue text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex flex-col space-y-3">
              <div className="flex items-center space-x-2">
                <Image
                  src="https://ext.same-assets.com/1677406165/2517037618.png"
                  alt="Maven AI Logo"
                  width={40}
                  height={40}
                  className="rounded-md"
                />
              </div>
              <p className="text-sm md:text-base font-medium mt-4">
                Agentes de inteligência artificial avançados para empresas e corporações.
              </p>
              <p className="text-sm md:text-base font-medium mt-2">
                Envie-nos um e-mail: <a href="mailto:wellpires@mavenaisolutions.com" className="hover:underline">wellpires@mavenaisolutions.com</a>
              </p>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Navegação</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/#home" className="text-sm hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#cases" className="text-sm hover:underline">
                  Cases de sucesso
                </Link>
              </li>
              <li>
                <Link href="/#como-funciona" className="text-sm hover:underline">
                  Como funciona
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Cases</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/casewittel" className="text-sm hover:underline">
                  Wittel
                </Link>
              </li>
              <li>
                <Link href="/casetecfil" className="text-sm hover:underline">
                  Tecfil
                </Link>
              </li>
              <li>
                <Link href="/casenatacha" className="text-sm hover:underline">
                  Hiper Natacha
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Termos</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacidade" className="text-sm hover:underline">
                  Política de privacidade
                </Link>
              </li>
            </ul>

            <div className="flex space-x-4 mt-6">
              <a href="https://www.youtube.com/@WellPiresAI" target="_blank" rel="noopener noreferrer">
                <Image
                  src="https://ext.same-assets.com/1677406165/4252861238.svg"
                  alt="YouTube"
                  width={24}
                  height={24}
                />
              </a>
              <a href="https://www.linkedin.com/in/well-pires/" target="_blank" rel="noopener noreferrer">
                <Image
                  src="https://ext.same-assets.com/1677406165/3387613782.png"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                />
              </a>
              <a href="https://www.instagram.com/wellpires.ai/" target="_blank" rel="noopener noreferrer">
                <Image
                  src="https://ext.same-assets.com/1677406165/3301625649.svg"
                  alt="Instagram"
                  width={24}
                  height={24}
                />
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-6 bg-white/20" />

        <div className="text-center text-sm">
          © 2024 Todos os direitos reservados por MAVEN IA SOLUTIONS LTDA
        </div>
      </div>
    </footer>
  );
}
