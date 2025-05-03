"use client";

import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="space-y-4 md:w-1/3">
            <div className="flex items-center space-x-2">
              <div className="relative h-8 w-8">
                <Image
                  src="/images/automatizando-logo.png"
                  alt="Automatizando Logo"
                  width={32}
                  height={32}
                  className="brightness-200 invert"
                />
              </div>
              <span className="text-xl font-bold">Automatizando</span>
            </div>
            <p className="text-gray-400">
              Soluções inteligentes para automatizar processos e aumentar a eficiência do seu negócio.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:w-2/3">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Empresa</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                    Serviços
                  </Link>
                </li>
                <li>
                  <Link href="/#cases" className="text-gray-400 hover:text-white transition-colors">
                    Casos de Sucesso
                  </Link>
                </li>
                <li>
                  <Link href="/privacidade" className="text-gray-400 hover:text-white transition-colors">
                    Política de Privacidade
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Casos de Sucesso</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/casewittel" className="text-gray-400 hover:text-white transition-colors">
                    Wittel
                  </Link>
                </li>
                <li>
                  <Link href="/casetecfil" className="text-gray-400 hover:text-white transition-colors">
                    Tecfil
                  </Link>
                </li>
                <li>
                  <Link href="/casenatacha" className="text-gray-400 hover:text-white transition-colors">
                    Natacha
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-3 col-span-2 md:col-span-1">
              <h3 className="text-lg font-semibold">Contato</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">
                  <span className="block">Email:</span>
                  <a href="mailto:luizhenrique.pinotti@gmail.com" className="hover:text-white transition-colors">
                    luizhenrique.pinotti@gmail.com
                  </a>
                </li>
                <li className="text-gray-400">
                  <span className="block">Telefone:</span>
                  <a href="tel:+5511988776655" className="hover:text-white transition-colors">
                    +55 (11) 98877-6655
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Automatizando. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
