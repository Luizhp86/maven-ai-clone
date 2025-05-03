"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { HelpCircle } from "lucide-react";

export function FAQSection() {
  const faqs = [
    {
      question: "Como a maven ai pode ajudar o meu negócio?",
      answer: "Podemos economizar centenas de horas de trabalho manual para sua equipe, automatizando tarefas repetitivas e tediosas, como prospecção outbound, atendimento ao cliente e criação de conteúdo. Ao implementar essas soluções, não apenas aumentamos a eficiência, mas também liberamos sua equipe para se concentrar em atividades mais estratégicas e criativas, gerando resultados ainda mais impactantes para o seu negócio."
    },
    {
      question: "Quanto tempo leva para criar meu projeto?",
      answer: "Podemos economizar centenas de horas de trabalho manual para sua equipe, automatizando tarefas repetitivas e tediosas, como prospecção outbound, atendimento ao cliente e criação de conteúdo. Ao implementar essas soluções, não apenas aumentamos a eficiência, mas também liberamos sua equipe para se concentrar em atividades mais estratégicas e criativas, gerando resultados ainda mais impactantes para o seu negócio."
    },
    {
      question: "Qual a minha garantia?",
      answer: "Podemos economizar centenas de horas de trabalho manual para sua equipe, automatizando tarefas repetitivas e tediosas, como prospecção outbound, atendimento ao cliente e criação de conteúdo. Ao implementar essas soluções, não apenas aumentamos a eficiência, mas também liberamos sua equipe para se concentrar em atividades mais estratégicas e criativas, gerando resultados ainda mais impactantes para o seu negócio."
    },
    {
      question: "Como vocês criam suas Soluções?",
      answer: "Podemos economizar centenas de horas de trabalho manual para sua equipe, automatizando tarefas repetitivas e tediosas, como prospecção outbound, atendimento ao cliente e criação de conteúdo. Ao implementar essas soluções, não apenas aumentamos a eficiência, mas também liberamos sua equipe para se concentrar em atividades mais estratégicas e criativas, gerando resultados ainda mais impactantes para o seu negócio."
    },
    {
      question: "Como nos comunicamos?",
      answer: "Podemos economizar centenas de horas de trabalho manual para sua equipe, automatizando tarefas repetitivas e tediosas, como prospecção outbound, atendimento ao cliente e criação de conteúdo. Ao implementar essas soluções, não apenas aumentamos a eficiência, mas também liberamos sua equipe para se concentrar em atividades mais estratégicas e criativas, gerando resultados ainda mais impactantes para o seu negócio."
    },
    {
      question: "E se algo der errado com a automação?",
      answer: "Podemos economizar centenas de horas de trabalho manual para sua equipe, automatizando tarefas repetitivas e tediosas, como prospecção outbound, atendimento ao cliente e criação de conteúdo. Ao implementar essas soluções, não apenas aumentamos a eficiência, mas também liberamos sua equipe para se concentrar em atividades mais estratégicas e criativas, gerando resultados ainda mais impactantes para o seu negócio."
    },
    {
      question: "Preciso de conhecimentos técnicos para usar os sistemas automatizados?",
      answer: "Podemos economizar centenas de horas de trabalho manual para sua equipe, automatizando tarefas repetitivas e tediosas, como prospecção outbound, atendimento ao cliente e criação de conteúdo. Ao implementar essas soluções, não apenas aumentamos a eficiência, mas também liberamos sua equipe para se concentrar em atividades mais estratégicas e criativas, gerando resultados ainda mais impactantes para o seu negócio."
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">
            <HelpCircle className="mr-2 h-8 w-8 text-maven-blue" />
            Perguntas frequentes
          </h2>
          <h3 className="text-xl font-medium text-gray-600">Tudo que você precisa saber</h3>
          <div className="mt-4">
            <Link href="/#contato" className="text-maven-blue hover:underline">
              Agende uma ligação com nossa equipe
            </Link>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
