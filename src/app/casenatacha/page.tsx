import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function CaseNatacha() {
  return (
    <div>
      <div className="relative">
        <div
          className="absolute inset-0 z-0 bg-black/60"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1601598851547-4302969d0614?q=80&w=1064')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay'
          }}
        />
        <div className="container relative z-10 py-24 text-white">
          <div className="max-w-4xl">
            <div className="text-lg mb-4">Hiper Natacha</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Como o Hipermercado Natacha aumentou as vendas online em 43%
            </h1>
            <p className="text-lg opacity-90 mb-8">
              Implementando uma solução de chatbot IA para atendimento ao cliente e recomendações personalizadas de produtos.
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
              <div className="text-5xl font-bold mb-2">43%</div>
              <p className="text-lg opacity-90">Aumento em vendas online</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="text-5xl font-bold mb-2">92%</div>
              <p className="text-lg opacity-90">Satisfação dos clientes</p>
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
                O Hipermercado Natacha é um grande varejista que atende milhares de clientes diariamente. A empresa se destaca pela variedade de produtos e pelo compromisso com a satisfação dos clientes.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">O desafio</h2>
              <p className="text-gray-700 mb-6">
                Com o crescimento do e-commerce, o Hipermercado Natacha enfrentava desafios para manter um atendimento de qualidade em sua plataforma online. Os clientes tinham dificuldades para encontrar produtos específicos e muitas dúvidas ficavam sem resposta, resultando em carrinhos abandonados e vendas perdidas.
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
              Desenvolvemos um sistema integrado de IA para o Hipermercado Natacha:
            </p>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-maven-blue flex items-center justify-center text-white flex-shrink-0">•</div>
                <div>
                  <strong className="font-bold">Chatbot IA inteligente</strong> capaz de responder perguntas sobre produtos, disponibilidade, promoções e políticas de devolução em tempo real.
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-maven-blue flex items-center justify-center text-white flex-shrink-0">•</div>
                <div>
                  <strong className="font-bold">Sistema de recomendações personalizadas</strong> que analisa o comportamento de navegação e compras anteriores para sugerir produtos relevantes.
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-maven-blue flex items-center justify-center text-white flex-shrink-0">•</div>
                <div>
                  <strong className="font-bold">Integração com o sistema de estoque</strong> para fornecer informações precisas sobre disponibilidade de produtos e prazos de entrega.
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-maven-blue flex items-center justify-center text-white flex-shrink-0">•</div>
                <div>
                  <strong className="font-bold">Assistente de compras virtual</strong> que orienta os clientes durante todo o processo de compra, desde a busca até a finalização do pedido.
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
              A implementação da solução de IA trouxe resultados significativos para o Hipermercado Natacha:
            </p>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-maven-blue flex items-center justify-center text-white flex-shrink-0">•</div>
                <div>
                  <strong className="font-bold">Aumento de 43% nas vendas online</strong> em apenas 6 meses após a implementação.
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-maven-blue flex items-center justify-center text-white flex-shrink-0">•</div>
                <div>
                  <strong className="font-bold">Redução de 67% nas taxas de abandono de carrinho</strong>, graças ao suporte proativo durante o processo de compra.
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-maven-blue flex items-center justify-center text-white flex-shrink-0">•</div>
                <div>
                  <strong className="font-bold">Aumento de 28% no valor médio dos pedidos</strong> devido às recomendações personalizadas de produtos.
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-maven-blue flex items-center justify-center text-white flex-shrink-0">•</div>
                <div>
                  <strong className="font-bold">Taxa de satisfação do cliente de 92%</strong> nas interações com o chatbot, medida por meio de pesquisas pós-atendimento.
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
