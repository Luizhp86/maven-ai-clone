import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function CaseWittel() {
  return (
    <div>
      <div className="relative">
        <div
          className="absolute inset-0 z-0 bg-black/60"
          style={{
            backgroundImage:
              "url('https://ext.same-assets.com/884131591/2122285897.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundBlendMode: "overlay",
          }}
        />
        <div className="container relative z-10 py-24 text-white">
          <div className="max-w-4xl">
            <div className="text-lg mb-4">Wittel</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Como a Wittel aumentou a taxa de comparecimento em reuniões de
              vendas em 70%
            </h1>
            <p className="text-lg opacity-90 mb-8">
              Com o uso de um Agente IA, a empresa melhorou o engajamento e
              capturou insights valiosos com uma taxa de resposta NPS de 85%.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-maven-blue hover:bg-maven-blue/90">
                Saber mais
              </Button>
              <Link href="#solucao">
                <Button
                  variant="outline"
                  className="text-white border-white hover:bg-white/10"
                >
                  A solução
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-maven-blue py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
            <div className="flex flex-col items-center text-center">
              <div className="text-5xl font-bold mb-2">-50%</div>
              <p className="text-lg opacity-90">
                Redução do tempo de agendamentos e reuniões
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="text-5xl font-bold mb-2">+10%</div>
              <p className="text-lg opacity-90">
                Melhoria na eficiência operacional e na experiência do cliente
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-bold mb-4">A empresa</h2>
              <p className="text-gray-700 mb-6">
                A Wittel Comunicações é uma empresa focada em Customer
                Experience (CX), oferecendo soluções tecnológicas para otimizar
                o relacionamento entre marcas e consumidores. Sempre à frente em
                inovações, a Wittel visa aprimorar a jornada do cliente e
                aumentar a eficiência operacional nas suas vendas.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">O desafio</h2>
              <p className="text-gray-700 mb-6">
                Com uma alta taxa de no-show em reuniões de vendas e um processo
                manual de coleta de feedback dos clientes, a Wittel enfrentava
                dificuldades para gerenciar leads inbound de forma eficiente. A
                falta de dados estratégicos limitava a capacidade da empresa de
                ajustar e melhorar sua abordagem de vendas.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="solucao" className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">A solução</h2>
            <p className="text-gray-700 mb-8">
              Três frentes foram implementadas usando um Agente IA integrado ao
              WhatsApp e ao site da Wittel:
            </p>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-maven-blue flex items-center justify-center text-white flex-shrink-0">
                  •
                </div>
                <div>
                  <strong className="font-bold">
                    Agendamento automatizado
                  </strong>{" "}
                  de reuniões de vendas, permitindo que os leads escolhessem
                  horários convenientes.
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-maven-blue flex items-center justify-center text-white flex-shrink-0">
                  •
                </div>
                <div>
                  <strong className="font-bold">
                    Envio automático de lembretes
                  </strong>{" "}
                  pré-chamada, reduzindo a taxa de no-show ao manter os leads
                  engajados e informados.
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-maven-blue flex items-center justify-center text-white flex-shrink-0">
                  •
                </div>
                <div>
                  <strong className="font-bold">
                    Pesquisas NPS automatizadas
                  </strong>{" "}
                  pós-reunião, facilitando a coleta de feedback valioso para
                  otimizar a experiência de vendas.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Os resultados</h2>
            <p className="text-gray-700 mb-8">
              A automação trouxe resultados impactantes para a Wittel:
            </p>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-maven-blue flex items-center justify-center text-white flex-shrink-0">
                  •
                </div>
                <div>
                  <strong className="font-bold">
                    Aumento de 70% na taxa de comparecimento
                  </strong>{" "}
                  às reuniões de vendas, impulsionado pelos lembretes
                  personalizados.
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-maven-blue flex items-center justify-center text-white flex-shrink-0">
                  •
                </div>
                <div>
                  <strong className="font-bold">
                    85% de taxa de resposta nas pesquisas NPS
                  </strong>
                  , permitindo insights valiosos que aprimoraram a abordagem de
                  vendas.
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-maven-blue flex items-center justify-center text-white flex-shrink-0">
                  •
                </div>
                <div>
                  <strong className="font-bold">
                    Redução de 50% no tempo de agendamento
                  </strong>
                  , tornando o processo mais ágil e eficiente.
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-maven-blue flex items-center justify-center text-white flex-shrink-0">
                  •
                </div>
                <div>
                  <strong className="font-bold">
                    Experiência do cliente aprimorada
                  </strong>
                  , com um fluxo mais autônomo e otimizado desde o agendamento
                  até o feedback final.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="py-16 bg-maven-blue/10">
        <div className="container text-center">
          <h2 className="text-2xl font-bold mb-6">
            Pronto para transformar seu negócio?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Converse com nossa equipe e descubra como podemos implementar
            soluções semelhantes para sua empresa.
          </p>
          <Link href="/#contato">
            <Button className="bg-maven-blue hover:bg-maven-blue/90">
              Entre em contato
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
