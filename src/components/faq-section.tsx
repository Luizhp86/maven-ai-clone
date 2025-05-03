"use client";

import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CircleHelp } from "lucide-react";

export function FAQSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">
            <CircleHelp className="mr-2 h-8 w-8 text-auto-blue" />
            Perguntas frequentes
          </h2>
          <h3 className="text-xl font-medium text-gray-600">
            Tudo que você precisa saber
          </h3>
          <div className="mt-4">
            <Link href="/#contato" className="text-auto-blue hover:underline">
              Agende uma ligação com nossa equipe
            </Link>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {[
              {
                question: "Como a Automatizando pode ajudar meu negócio?",
                answer:
                  "Podemos economizar centenas de horas de trabalho manual para sua equipe, automatizando tarefas repetitivas e tediosas com o uso de inteligência artificial. Além de reduzir os custos com mão de obra em até 70%, aumentamos a precisão dos processos e eliminamos erros humanos, liberando sua equipe para se concentrar em atividades estratégicas que realmente agregam valor ao seu negócio.",
              },
              {
                question: "Quanto tempo leva para implementar uma solução?",
                answer:
                  "O tempo de implementação varia conforme a complexidade do projeto, mas normalmente conseguimos entregar resultados iniciais em 2-4 semanas. Nosso processo é estruturado em etapas claras, com entregas incrementais para que você veja valor desde o início da parceria, sem precisar esperar meses para obter resultados.",
              },
              {
                question: "Qual a garantia que vocês oferecem?",
                answer:
                  "Oferecemos garantia de resultados com métricas claras e mensuráveis. Se não conseguirmos atingir as metas de redução de custos e aumento de eficiência acordadas no contrato, revisamos a solução gratuitamente. Além disso, oferecemos suporte contínuo e manutenção preventiva para garantir que suas automações funcionem perfeitamente o tempo todo.",
              },
              {
                question: "Como vocês criam soluções de automação com IA?",
                answer:
                  "Nosso processo começa com uma análise detalhada dos seus processos atuais para identificar gargalos e oportunidades de automatização. Em seguida, desenvolvemos uma solução personalizada utilizando inteligência artificial e ferramentas de automação de ponta. Depois da implementação, realizamos treinamentos com sua equipe e fornecemos documentação completa, além de monitoramento contínuo para garantir o desempenho ideal.",
              },
              {
                question: "Como nos comunicamos durante o projeto?",
                answer:
                  "Mantemos uma comunicação clara e transparente durante todo o projeto. Você terá um gerente dedicado e reuniões semanais de acompanhamento. Utilizamos ferramentas colaborativas para compartilhar o progresso em tempo real e garantir que você esteja sempre informado sobre o status do seu projeto de automação.",
              },
              {
                question: "E se algo der errado com a automação?",
                answer:
                  "Todas as nossas soluções incluem monitoramento 24/7 e planos de contingência. Em caso de falhas, nosso sistema de alerta identifica o problema imediatamente e nossa equipe técnica atua rapidamente para resolver a situação. Também mantemos backups regulares e processos alternativos para garantir a continuidade do seu negócio em qualquer circunstância.",
              },
              {
                question: "Preciso de conhecimentos técnicos para usar os sistemas automatizados?",
                answer:
                  "Não. Nossas soluções são desenvolvidas com foco na usabilidade, e criamos interfaces intuitivas que não exigem conhecimentos técnicos para operação. Além disso, oferecemos treinamentos completos para sua equipe e suporte contínuo para garantir que todos possam aproveitar ao máximo os benefícios da automação, independentemente do nível técnico."
              },
            ].map((item, i) => (
              <AccordionItem key={item.question} value={`item-${i}`}>
                <AccordionTrigger className="text-left font-medium">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
