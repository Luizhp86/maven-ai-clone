"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function HowItWorksSection() {
  const steps = [
    {
      number: 1,
      title: "Consultoria gratuita",
      description: "Fale com um engenheiro de sistemas real (normalmente +R$500/hora) e discuta os requisitos e objetivos do seu projeto. Ouviremos atentamente para entender sua visão e objetivos.",
    },
    {
      number: 2,
      title: "Escopo e Proposta",
      description: "Com base na sua consulta, forneceremos um escopo detalhado, incluindo etapas detalhadas, cronograma, orçamento e algumas possíveis modificações ou extensões ao seu sistema.",
    },
    {
      number: 3,
      title: "Início do projeto",
      description: "Com a proposta acertada, agendaremos uma reunião inicial para apresentar nossa equipe e começarmos de verdade.",
    },
  ];

  return (
    <section id="como-funciona" className="py-16 bg-maven-skyblue/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-lg font-semibold uppercase tracking-wider text-maven-blue">Etapas</h2>
          <h3 className="text-3xl md:text-4xl font-bold mt-2">Como funciona</h3>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            A automação é complicada, mas implementá-la não precisa ser. Simplificaremos o processo para você em 3 etapas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <div className="absolute -left-4 -top-4 bg-maven-blue text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
                {step.number}
              </div>
              <div className="bg-white p-8 pt-12 rounded-lg shadow-md h-full">
                <h4 className="text-xl font-bold mb-4">{step.title}</h4>
                <p className="text-gray-600 mb-6">{step.description}</p>
                <Link href="/#contato">
                  <Button variant="link" className="p-0 text-maven-blue">
                    Agendar uma chamada
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Transformamos o poder da inteligência artificial em resultados reais para o seu negócio.</h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Na Maven AI, unimos tecnologia de ponta e soluções personalizadas para acelerar a inovação e aumentar a eficiência da sua empresa. Sem complicações, apenas resultados.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white p-8 rounded-lg shadow-md flex items-center justify-center h-64">
              <div className="w-32 h-32 bg-maven-blue rounded-full flex items-center justify-center">
                <p className="text-white font-bold">Seu projeto</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md flex items-center justify-center h-64">
              <Image
                src="https://ext.same-assets.com/1677406165/2375792309.svg"
                alt="Integrations"
                width={200}
                height={200}
              />
            </div>
          </div>

          <div className="mt-8 bg-maven-blue text-white py-3 px-4 rounded-md inline-block mx-auto">
            <p className="text-sm">Automatize suas ferramentas de trabalho favoritas</p>
          </div>
        </div>
      </div>
    </section>
  );
}
