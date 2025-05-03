"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useRef } from "react";

export function HeroSection() {
  const firstTextRef = useRef<HTMLHeadingElement>(null);
  const secondTextRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const firstText = firstTextRef.current;
    const secondText = secondTextRef.current;
    const cta = ctaRef.current;

    if (firstText && secondText && cta) {
      firstText.classList.add("animate-fadeInUp");

      setTimeout(() => {
        secondText.classList.add("animate-fadeInUp");
      }, 300);

      setTimeout(() => {
        cta.classList.add("animate-fadeInUp");
      }, 600);
    }
  }, []);

  return (
    <section className="relative bg-gradient-to-b from-white to-gray-100 overflow-hidden py-20 md:py-32">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1
              ref={firstTextRef}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight opacity-0"
            >
              Reduza custos e{" "}
              <span className="text-auto-blue">aumente a eficiência</span>
            </h1>

            <p
              ref={secondTextRef}
              className="text-lg md:text-xl text-gray-600 opacity-0"
            >
              Automatize processos repetitivos com inteligência artificial e
              reduza até 70% dos custos com mão de obra, eliminando erros e
              aumentando a produtividade da sua empresa.
            </p>

            <div
              ref={ctaRef}
              className="flex flex-col sm:flex-row gap-4 opacity-0"
            >
              <Button
                asChild
                size="lg"
                className="bg-auto-blue hover:bg-auto-blue/90 text-lg px-8"
              >
                <Link href="/#contato">Fale Conosco</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg px-8"
              >
                <Link href="/services">Nossos Serviços</Link>
              </Button>
            </div>
          </div>

          <div className="hidden md:block relative">
            <div className="absolute -left-4 -top-4 w-72 h-72 bg-auto-blue/10 rounded-full filter blur-3xl opacity-70" />
            <div className="absolute -right-4 -bottom-4 w-72 h-72 bg-auto-blue/10 rounded-full filter blur-3xl opacity-70" />
            <div className="relative bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <div className="flex justify-between items-center border-b border-gray-100 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-yellow-400" />
                  <div className="h-3 w-3 rounded-full bg-green-400" />
                </div>
                <div className="text-xs text-gray-500">Automatizando.exe</div>
              </div>

              <div className="space-y-4">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-700 font-mono">
                    <span className="text-auto-blue font-bold">IA</span> &gt;
                    Analisando processos manuais repetitivos...
                  </p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-700 font-mono">
                    <span className="text-auto-blue font-bold">IA</span> &gt;
                    Identificando gargalos de produtividade
                  </p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-700 font-mono">
                    <span className="text-auto-blue font-bold">IA</span> &gt;
                    Criando solução automatizada
                  </p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-700 font-mono">
                    <span className="text-auto-blue font-bold">IA</span> &gt;
                    Resultados:
                    <span className="ml-2 text-green-500">
                      Economia de 70% em custos com pessoal
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
