import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function CaseTecfil() {
  return (
    <div>
      <div className="relative">
        <div
          className="absolute inset-0 z-0 bg-black/60"
          style={{
            backgroundImage: "url('https://ext.same-assets.com/3149565392/27000264.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay'
          }}
        />
        <div className="container relative z-10 py-24 text-white">
          <div className="max-w-4xl">
            <div className="text-lg mb-4">Tecfil</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Como a TECFIL reduziu o tempo de consulta de informações em 90%
            </h1>
            <p className="text-lg opacity-90 mb-8">
              Com o uso de um chatbot de recuperação de informações (RAG), a empresa otimizou o processo de vendas e melhorou a eficiência operacional em apenas 3 meses.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-maven-blue hover:bg-maven-blue/90">
                Saber mais
              </Button>
              <Link href="#solucao">
                <Button variant="outline" className="text-white border-white hover:bg-white/10">
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
              <div className="text-5xl font-bold mb-2">+200 horas</div>
              <p className="text-lg opacity-90">Economia mensal em trabalho manual</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="text-5xl font-bold mb-2">35%</div>
              <p className="text-lg opacity-90">Redução no tempo médio de atendimento</p>
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
                A TECFIL é uma fabricante líder no setor automotivo, especializada na produção de filtros de ar.
                Oferecendo uma ampla gama de produtos, a empresa busca constantemente melhorar sua eficiência e atendimento ao cliente.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">O desafio</h2>
              <p className="text-gray-700 mb-6">
                A TECFIL enfrentava uma situação desafiadora: seus agentes de vendas tinham que consultar múltiplas planilhas com até 15 mil linhas para encontrar informações sobre os produtos, como filtros de ar, seus preços e especificações técnicas. Esse processo lento e ineficiente impactava negativamente a produtividade e a satisfação dos clientes.
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
              Implementamos um chatbot de recuperação de informações (RAG), que:
            </p>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-maven-blue flex items-center justify-center text-white flex-shrink-0">•</div>
                <div>
                  <strong className="font-bold">Forneceu respostas instantâneas</strong> sobre disponibilidade de produtos, preços e especificações técnicas.
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-maven-blue flex items-center justify-center text-white flex-shrink-0">•</div>
                <div>
                  <strong className="font-bold">Eliminou a necessidade de buscas manuais</strong>, permitindo que os agentes de vendas encontrassem rapidamente as informações necessárias.
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-maven-blue flex items-center justify-center text-white flex-shrink-0">•</div>
                <div>
                  <strong className="font-bold">Aprimorou a experiência do cliente</strong> com um atendimento mais eficiente e ágil.
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-maven-blue flex items-center justify-center text-white flex-shrink-0">•</div>
                <div>
                  <strong className="font-bold">Centralizou todas as informações</strong> em uma base de dados unificada e acessível.
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
              Com a implementação do chatbot de recuperação de informações, a TECFIL obteve resultados impressionantes:
            </p>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-maven-blue flex items-center justify-center text-white flex-shrink-0">•</div>
                <div>
                  <strong className="font-bold">Aceleração na velocidade de resposta</strong>, que possibilitou uma interação mais dinâmica com os clientes, resultando em um atendimento ágil e eficaz.
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-maven-blue flex items-center justify-center text-white flex-shrink-0">•</div>
                <div>
                  <strong className="font-bold">Feedback positivo dos clientes</strong>, demonstrado em avaliações favoráveis e uma maior lealdade, consolidando ainda mais a reputação da empresa no mercado.
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-maven-blue flex items-center justify-center text-white flex-shrink-0">•</div>
                <div>
                  <strong className="font-bold">Ganho de centenas de horas mensais</strong>, permitindo que a equipe se direcionasse a projetos de maior impacto e inovação dentro da empresa.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="py-16 bg-maven-blue/10">
        <div className="container text-center">
          <h2 className="text-2xl font-bold mb-6">Pronto para transformar seu negócio?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Converse com nossa equipe e descubra como podemos implementar soluções semelhantes para sua empresa.
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
