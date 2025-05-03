"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function HowItWorksSection() {
  return (
    <section id="como-funciona" className="py-16 bg-auto-skyblue/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-lg font-semibold uppercase tracking-wider text-auto-blue">Etapas</h2>
          <h3 className="text-3xl md:text-4xl font-bold mt-2">Como funciona</h3>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            A automação é complicada, mas implementá-la não precisa ser. Simplificaremos o processo para você em 3 etapas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {[
            {
              number: 1,
              title: "Consultoria gratuita",
              description:
                "Fale com um engenheiro de sistemas real (normalmente +R$500/hora) e discuta os requisitos e objetivos do seu projeto. Ouviremos atentamente para entender sua visão e objetivos.",
            },
            {
              number: 2,
              title: "Escopo e Proposta",
              description:
                "Com base na sua consulta, forneceremos um escopo detalhado, incluindo etapas detalhadas, cronograma, orçamento e algumas possíveis modificações ou extensões ao seu sistema.",
            },
            {
              number: 3,
              title: "Início do projeto",
              description:
                "Com a proposta acertada, agendaremos uma reunião inicial para apresentar nossa equipe e começarmos de verdade.",
            },
          ].map((step) => (
            <div key={step.number} className="relative">
              <div className="absolute -left-4 -top-4 bg-auto-blue text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
                {step.number}
              </div>
              <div className="bg-white p-8 pt-12 rounded-lg shadow-md h-full">
                <h4 className="text-xl font-bold mb-4">{step.title}</h4>
                <p className="text-gray-600 mb-6">{step.description}</p>
                <Link href="/#contato">
                  <Button variant="link" className="p-0 text-auto-blue">
                    Agendar uma chamada
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Transformamos o poder da automação inteligente em economia real para o seu negócio.
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Na Automatizando, unimos tecnologia de ponta e inteligência artificial para reduzir custos com mão de obra e aumentar a eficiência da sua empresa. Sem complicações, apenas resultados mensuráveis.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white p-8 rounded-lg shadow-md flex items-center justify-center h-64">
              <div className="w-32 h-32 bg-auto-blue rounded-full flex items-center justify-center">
                <p className="text-white font-bold">Seu projeto</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md flex items-center justify-center h-64 relative">
              <Image
                src="/images/automatizando-logo.png"
                alt="Automatização"
                width={64}
                height={64}
                className="absolute top-10 left-10"
              />
              <Image
                src="/images/automatizando-logo.png"
                alt="Automatização"
                width={64}
                height={64}
                className="absolute bottom-10 right-10"
              />
              <div className="border-4 border-dashed border-auto-blue/40 p-6 rounded-lg">
                <Image
                  src="/images/automatizando-logo.png"
                  alt="Automatização"
                  width={100}
                  height={100}
                />
              </div>
            </div>
          </div>
          <div className="mt-8 bg-auto-blue text-white py-3 px-4 rounded-md inline-block mx-auto">
            <p className="text-sm">Automatize seus processos e reduza até 70% dos custos com pessoal</p>
          </div>
        </div>
      </div>
    </section>
  );
}
