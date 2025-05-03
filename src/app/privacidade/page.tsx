import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function PrivacyPolicy() {
  return (
    <div className="py-16">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Política de Privacidade</h1>

          <div className="prose prose-blue max-w-none">
            <p className="text-lg mb-6">
              Última atualização: 03 de maio de 2025
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">1. Introdução</h2>
            <p className="mb-4">
              A Maven AI Solutions Ltda. ("nós", "nos" ou "nosso") se compromete a proteger sua privacidade. Esta Política de Privacidade explica como coletamos, usamos, divulgamos e protegemos suas informações pessoais quando você visita nosso site ou utiliza nossos serviços.
            </p>
            <p className="mb-4">
              Por favor, leia esta política com atenção para entender nossas práticas em relação a seus dados pessoais.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">2. Informações que Coletamos</h2>
            <p className="mb-4">
              Podemos coletar os seguintes tipos de informações:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li className="mb-2">
                <strong>Informações Pessoais:</strong> Nome, email, número de telefone, empresa e outras informações que você nos fornece voluntariamente através de formulários de contato ou ao se inscrever em nossa newsletter.
              </li>
              <li className="mb-2">
                <strong>Informações de Uso:</strong> Dados sobre como você interage com nosso site, incluindo páginas visitadas, tempo gasto no site, links clicados e outras ações realizadas durante o uso de nossos serviços.
              </li>
              <li className="mb-2">
                <strong>Cookies e Tecnologias Similares:</strong> Usamos cookies e tecnologias similares para melhorar a experiência do usuário e coletar informações sobre como nosso site é utilizado.
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">3. Como Usamos Suas Informações</h2>
            <p className="mb-4">
              Utilizamos suas informações para os seguintes fins:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li className="mb-2">Fornecer, manter e melhorar nossos serviços;</li>
              <li className="mb-2">Processar e responder às suas solicitações e consultas;</li>
              <li className="mb-2">Enviar informações, atualizações e materiais de marketing sobre nossos serviços;</li>
              <li className="mb-2">Personalizar sua experiência em nosso site;</li>
              <li className="mb-2">Analisar tendências e estatísticas para melhorar nossos serviços;</li>
              <li className="mb-2">Cumprir obrigações legais e regulatórias.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">4. Compartilhamento de Informações</h2>
            <p className="mb-4">
              Não vendemos suas informações pessoais. Podemos compartilhar suas informações nas seguintes circunstâncias:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li className="mb-2">Com fornecedores de serviços que nos ajudam a operar nosso negócio;</li>
              <li className="mb-2">Quando exigido por lei ou para proteger nossos direitos legais;</li>
              <li className="mb-2">Com seu consentimento ou sob sua direção.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">5. Segurança de Dados</h2>
            <p className="mb-4">
              Implementamos medidas de segurança apropriadas para proteger suas informações contra acesso não autorizado, alteração, divulgação ou destruição. No entanto, nenhum método de transmissão pela internet ou de armazenamento eletrônico é 100% seguro.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">6. Seus Direitos</h2>
            <p className="mb-4">
              Você tem os seguintes direitos em relação aos seus dados pessoais:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li className="mb-2">Direito de acesso às suas informações pessoais;</li>
              <li className="mb-2">Direito de retificação de dados incorretos;</li>
              <li className="mb-2">Direito de exclusão de suas informações pessoais;</li>
              <li className="mb-2">Direito de solicitar limitação do processamento;</li>
              <li className="mb-2">Direito de se opor ao processamento;</li>
              <li className="mb-2">Direito à portabilidade de dados.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">7. Alterações a Esta Política</h2>
            <p className="mb-4">
              Podemos atualizar esta Política de Privacidade periodicamente. Recomendamos que você revise esta página regularmente para estar ciente de quaisquer alterações. A data da última atualização estará sempre indicada no início deste documento.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">8. Contato</h2>
            <p className="mb-4">
              Se você tiver dúvidas ou preocupações sobre esta Política de Privacidade ou sobre o tratamento de seus dados pessoais, entre em contato conosco através do e-mail: <a href="mailto:wellpires@mavenaisolutions.com" className="text-maven-blue hover:underline">wellpires@mavenaisolutions.com</a>.
            </p>
          </div>

          <div className="mt-12 text-center">
            <Link href="/">
              <Button className="bg-maven-blue hover:bg-maven-blue/90">
                Voltar para a página inicial
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
