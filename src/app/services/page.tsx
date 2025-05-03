"use client";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, X } from "lucide-react";
import Link from "next/link";

// Define types for our pricing plans
interface PricingFeature {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  notIncluded: string[];
  popular: boolean;
}

interface PricingPlans {
  [category: string]: PricingFeature[];
}

export default function ServicesPage() {
  // Define pricing plans for different types of services
  const pricingPlans: PricingPlans = {
    chatbots: [
      {
        name: "Básico",
        price: "R$ 1.990",
        period: "/mês",
        description: "Ideal para empresas iniciando com IA conversacional",
        features: [
          "Até 1.000 conversas por mês",
          "Integração com WhatsApp",
          "Integrações básicas (Leads para CRM)",
          "Suporte por email",
          "Treinamento inicial",
        ],
        notIncluded: [
          "Integrações avançadas",
          "Customização avançada de fluxos",
          "Análise de sentimento",
          "Suporte 24/7",
          "Gerenciamento de campanhas",
        ],
        popular: false,
      },
      {
        name: "Profissional",
        price: "R$ 3.990",
        period: "/mês",
        description: "Para empresas que buscam escalabilidade e personalização",
        features: [
          "Até 5.000 conversas por mês",
          "Integrações com WhatsApp, Telegram e Website",
          "Integrações com CRM e ferramentas de marketing",
          "Fluxos personalizados de conversação",
          "Relatórios detalhados de desempenho",
          "Suporte prioritário em horário comercial",
          "Treinamentos mensais",
        ],
        notIncluded: [
          "Customização completa de persona",
          "Suporte 24/7",
          "Gerenciamento de campanhas",
        ],
        popular: true,
      },
      {
        name: "Enterprise",
        price: "Sob consulta",
        period: "",
        description: "Soluções personalizadas para grandes corporações",
        features: [
          "Volume ilimitado de conversas",
          "Integração com todos os canais",
          "Fluxos avançados de conversação",
          "Customização completa de persona",
          "Análise avançada de sentimento",
          "Suporte 24/7 dedicado",
          "SLA garantido",
          "Gerenciamento completo da solução",
        ],
        notIncluded: [],
        popular: false,
      },
    ],
    crm: [
      {
        name: "Integração Básica",
        price: "R$ 4.990",
        period: "",
        description: "Setup inicial para empresas de pequeno porte",
        features: [
          "Configuração de CRM automatizado",
          "Integrações com até 2 plataformas",
          "Rastreamento de jornada do cliente",
          "Dashboards básicos",
          "Suporte por 30 dias",
        ],
        notIncluded: [
          "Integrações com mais de 2 plataformas",
          "Automações avançadas",
          "Treinamento da equipe",
          "Suporte contínuo",
        ],
        popular: false,
      },
      {
        name: "Profissional",
        price: "R$ 9.990",
        period: "",
        description: "Solução completa para empresas em crescimento",
        features: [
          "Configuração de CRM totalmente automatizado",
          "Integrações com até 5 plataformas",
          "Rastreamento avançado de jornada do cliente",
          "Automações personalizadas",
          "Dashboards personalizados",
          "Treinamento da equipe",
          "Suporte por 90 dias",
        ],
        notIncluded: [
          "Integrações com mais de 5 plataformas",
          "Suporte contínuo após 90 dias",
          "Desenvolvimento de funcionalidades específicas",
        ],
        popular: true,
      },
      {
        name: "Enterprise",
        price: "Sob consulta",
        period: "",
        description:
          "Para empresas que necessitam de soluções altamente personalizadas",
        features: [
          "Solução completamente customizada",
          "Integrações ilimitadas",
          "Automações complexas personalizadas",
          "Dashboards analíticos avançados",
          "Treinamento completo da equipe",
          "Suporte dedicado por 12 meses",
          "Manutenção e updates contínuos",
        ],
        notIncluded: [],
        popular: false,
      },
    ],
    marketing: [
      {
        name: "Básico",
        price: "R$ 2.990",
        period: "/mês",
        description: "Automações essenciais para marketing",
        features: [
          "Até 3 fluxos de automação",
          "Email marketing automatizado",
          "Segmentação básica de leads",
          "Relatórios mensais",
          "Suporte por email",
        ],
        notIncluded: [
          "Automações multi-canal",
          "Segmentação avançada",
          "Criação de conteúdo",
          "Integrações customizadas",
          "Estratégia de conteúdo",
        ],
        popular: false,
      },
      {
        name: "Profissional",
        price: "R$ 5.990",
        period: "/mês",
        description: "Marketing automation completo multi-canal",
        features: [
          "Até 10 fluxos de automação",
          "Email, SMS e WhatsApp automatizados",
          "Segmentação avançada de leads",
          "Nurturing personalizado",
          "Lead scoring automatizado",
          "Relatórios semanais",
          "Suporte prioritário",
        ],
        notIncluded: [
          "Criação de conteúdo completo",
          "Estratégia completa de marketing",
          "Gerenciamento de campanhas pagas",
        ],
        popular: true,
      },
      {
        name: "Enterprise",
        price: "Sob consulta",
        period: "",
        description: "Gestão completa de marketing automation",
        features: [
          "Fluxos ilimitados de automação",
          "Marketing omnichannel completo",
          "Integrações avançadas com CRM e vendas",
          "Análise de comportamento em tempo real",
          "Lead scoring avançado",
          "Relatórios personalizados em tempo real",
          "Criação de conteúdo incluída",
          "Estratégia completa de inbound marketing",
          "Suporte 24/7",
        ],
        notIncluded: [],
        popular: false,
      },
    ],
  };

  // Render a pricing plan card
  const PricingCard = ({
    plan,
    category,
  }: { plan: PricingFeature; category: string }) => (
    <div
      className={`relative flex flex-col rounded-lg shadow-lg ${
        plan.popular ? "border-2 border-maven-blue" : "border border-gray-200"
      } bg-white overflow-hidden`}
    >
      {plan.popular && (
        <div className="absolute top-0 right-0">
          <div className="bg-maven-blue text-white text-xs font-semibold py-1 px-3 rounded-bl-lg">
            Mais Popular
          </div>
        </div>
      )}

      <div className="p-6">
        <h3 className="text-xl font-bold">{plan.name}</h3>
        <div className="mt-4 flex items-baseline">
          <span className="text-3xl font-extrabold">{plan.price}</span>
          <span className="ml-1 text-gray-500">{plan.period}</span>
        </div>
        <p className="mt-2 text-gray-500">{plan.description}</p>
      </div>

      <div className="flex-1 bg-gray-50 p-6">
        <ul className="space-y-3">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>

        {plan.notIncluded.length > 0 && (
          <div className="mt-6 border-t border-gray-200 pt-6">
            <h4 className="text-sm font-medium text-gray-500 mb-2">
              Não incluído:
            </h4>
            <ul className="space-y-3">
              {plan.notIncluded.map((feature) => (
                <li key={feature} className="flex items-start text-gray-400">
                  <X className="h-5 w-5 text-red-400 mr-2 flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="p-6">
        <Link href="/#contato">
          <Button
            className={`w-full ${plan.popular ? "bg-maven-blue hover:bg-maven-blue/90" : "bg-gray-800 hover:bg-gray-700"}`}
          >
            Entre em contato
          </Button>
        </Link>
      </div>
    </div>
  );

  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Nossos Serviços e Planos
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Escolha a solução ideal para transformar seu negócio com
            inteligência artificial
          </p>
        </div>

        <Tabs defaultValue="chatbots" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="chatbots">Chatbots e Agentes IA</TabsTrigger>
            <TabsTrigger value="crm">Integração de CRM</TabsTrigger>
            <TabsTrigger value="marketing">Automação de Marketing</TabsTrigger>
          </TabsList>

          {Object.entries(pricingPlans).map(([category, plans]) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {plans.map((plan) => (
                  <PricingCard
                    key={plan.name}
                    plan={plan}
                    category={category}
                  />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-24">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Comparação Detalhada de Recursos
          </h2>

          <div className="relative overflow-x-auto shadow-md sm:rounded-lg border border-gray-200">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 text-gray-700">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    Recurso
                  </th>
                  <th scope="col" className="px-6 py-4 text-center">
                    Básico
                  </th>
                  <th scope="col" className="px-6 py-4 text-center bg-blue-50">
                    Profissional
                  </th>
                  <th scope="col" className="px-6 py-4 text-center">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b">
                  <th scope="row" className="px-6 py-4 font-medium">
                    Canais de Comunicação
                  </th>
                  <td className="px-6 py-4 text-center">1 canal</td>
                  <td className="px-6 py-4 text-center bg-blue-50">3 canais</td>
                  <td className="px-6 py-4 text-center">Ilimitado</td>
                </tr>
                <tr className="bg-gray-50 border-b">
                  <th scope="row" className="px-6 py-4 font-medium">
                    Volume de Mensagens
                  </th>
                  <td className="px-6 py-4 text-center">1.000/mês</td>
                  <td className="px-6 py-4 text-center bg-blue-50">
                    5.000/mês
                  </td>
                  <td className="px-6 py-4 text-center">Ilimitado</td>
                </tr>
                <tr className="bg-white border-b">
                  <th scope="row" className="px-6 py-4 font-medium">
                    Personalização de Fluxos
                  </th>
                  <td className="px-6 py-4 text-center">Básica</td>
                  <td className="px-6 py-4 text-center bg-blue-50">Avançada</td>
                  <td className="px-6 py-4 text-center">Completa</td>
                </tr>
                <tr className="bg-gray-50 border-b">
                  <th scope="row" className="px-6 py-4 font-medium">
                    Integrações
                  </th>
                  <td className="px-6 py-4 text-center">1-2</td>
                  <td className="px-6 py-4 text-center bg-blue-50">3-5</td>
                  <td className="px-6 py-4 text-center">Ilimitadas</td>
                </tr>
                <tr className="bg-white border-b">
                  <th scope="row" className="px-6 py-4 font-medium">
                    Suporte
                  </th>
                  <td className="px-6 py-4 text-center">Email</td>
                  <td className="px-6 py-4 text-center bg-blue-50">
                    Prioritário
                  </td>
                  <td className="px-6 py-4 text-center">Dedicado 24/7</td>
                </tr>
                <tr className="bg-gray-50 border-b">
                  <th scope="row" className="px-6 py-4 font-medium">
                    Análise de Dados
                  </th>
                  <td className="px-6 py-4 text-center">Relatórios Básicos</td>
                  <td className="px-6 py-4 text-center bg-blue-50">
                    Dashboards Personalizados
                  </td>
                  <td className="px-6 py-4 text-center">
                    Análise Avançada em Tempo Real
                  </td>
                </tr>
                <tr className="bg-white border-b">
                  <th scope="row" className="px-6 py-4 font-medium">
                    SLA Garantido
                  </th>
                  <td className="px-6 py-4 text-center">
                    <X className="h-5 w-5 text-red-400 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center bg-blue-50">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                </tr>
                <tr className="bg-gray-50 border-b">
                  <th scope="row" className="px-6 py-4 font-medium">
                    Treinamento e Onboarding
                  </th>
                  <td className="px-6 py-4 text-center">Básico (2h)</td>
                  <td className="px-6 py-4 text-center bg-blue-50">
                    Completo (8h)
                  </td>
                  <td className="px-6 py-4 text-center">
                    Premium (Sob demanda)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Pronto para transformar seu negócio?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Nossa equipe está pronta para entender suas necessidades e
            desenvolver a solução ideal para sua empresa.
          </p>
          <Link href="/#contato">
            <Button className="bg-maven-blue hover:bg-maven-blue/90 px-8 py-6 text-lg h-auto">
              Agende uma consultoria gratuita
            </Button>
          </Link>
        </div>

        <div className="mt-24 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">
            Perguntas Frequentes sobre Serviços
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold mb-2">
                Quanto tempo leva para implementar uma solução?
              </h3>
              <p className="text-gray-600">
                O tempo de implementação varia de acordo com a complexidade do
                projeto. Soluções básicas podem ser implementadas em 2-3
                semanas, enquanto projetos mais complexos podem levar de 4-8
                semanas. Durante a consultoria inicial, forneceremos um
                cronograma detalhado para o seu projeto específico.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2">
                Os preços incluem personalização para o meu negócio?
              </h3>
              <p className="text-gray-600">
                Sim! Todos os nossos planos incluem personalização para se
                adequar às necessidades específicas do seu negócio. O nível de
                personalização varia conforme o plano escolhido, com opções mais
                avançadas disponíveis nos planos Profissional e Enterprise.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2">
                Posso fazer upgrade do meu plano no futuro?
              </h3>
              <p className="text-gray-600">
                Absolutamente! À medida que seu negócio cresce, suas
                necessidades podem mudar. Oferecemos um processo simples de
                upgrade para que você possa evoluir sua solução conforme
                necessário, mantendo toda a configuração e dados existentes.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2">
                Oferecem suporte contínuo após a implementação?
              </h3>
              <p className="text-gray-600">
                Sim, todos os nossos planos incluem algum nível de suporte
                contínuo. O plano Enterprise oferece o suporte mais abrangente,
                com uma equipe dedicada disponível 24/7. Também oferecemos
                pacotes de suporte estendido que podem ser adicionados a
                qualquer plano.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
