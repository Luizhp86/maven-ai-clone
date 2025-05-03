"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export function FeaturesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const features = [
    {
      id: 1,
      title: "Automação Inteligente de Processos",
      description: "Identifique e automatize processos repetitivos, eliminando etapas manuais e reduzindo o tempo de execução de tarefas.",
      icon: "/images/automatizando-logo.png"
    },
    {
      id: 2,
      title: "Integração entre Sistemas",
      description: "Conecte diferentes aplicativos e plataformas para garantir um fluxo de dados consistente e eliminar a duplicação de trabalho.",
      icon: "/images/automatizando-logo.png"
    },
    {
      id: 3,
      title: "Análise de Eficiência",
      description: "Monitore a performance dos processos automatizados com dashboards intuitivos que mostram o ganho real de produtividade.",
      icon: "/images/automatizando-logo.png"
    },
    {
      id: 4,
      title: "Redução de Erros",
      description: "Elimine falhas humanas em processos críticos, garantindo consistência e precisão nas operações do dia a dia.",
      icon: "/images/automatizando-logo.png"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    );

    const featureElements = document.querySelectorAll('.feature-card');
    featureElements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      featureElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simplifique, Otimize e <span className="text-auto-blue">Transforme</span>
          </h2>
          <p className="text-lg text-gray-600">
            Descubra como a automação inteligente pode impulsionar sua empresa para o próximo nível de eficiência.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="feature-card bg-white rounded-xl p-6 shadow-lg border border-gray-100 transition-all duration-500 opacity-0 translate-y-8"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="w-12 h-12 bg-auto-blue/10 rounded-lg p-2 mb-5 flex items-center justify-center">
                <Image
                  src={feature.icon}
                  alt={`${feature.title} icon`}
                  width={32}
                  height={32}
                  className="text-auto-blue"
                />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gray-50 p-8 rounded-xl shadow border border-gray-100">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Por que escolher a <span className="text-auto-blue">Automatizando</span>?
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-auto-blue/20 text-auto-blue flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                  <div>
                    <p className="text-gray-700 font-medium">Experiência comprovada</p>
                    <p className="text-gray-600 text-sm">Mais de 100 processos automatizados com sucesso em diversos segmentos.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-auto-blue/20 text-auto-blue flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                  <div>
                    <p className="text-gray-700 font-medium">Abordagem personalizada</p>
                    <p className="text-gray-600 text-sm">Soluções desenvolvidas sob medida para as necessidades específicas do seu negócio.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-auto-blue/20 text-auto-blue flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                  <div>
                    <p className="text-gray-700 font-medium">Suporte contínuo</p>
                    <p className="text-gray-600 text-sm">Equipe dedicada para garantir que suas automações funcionem perfeitamente o tempo todo.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="hidden md:block">
              <div className="relative h-64 bg-auto-blue/5 rounded-lg p-6 flex items-center justify-center">
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute -right-12 -top-12 w-48 h-48 bg-auto-blue/20 rounded-full"></div>
                  <div className="absolute -left-12 -bottom-12 w-48 h-48 bg-auto-blue/20 rounded-full"></div>
                </div>
                <div className="relative z-10 text-center">
                  <div className="text-5xl font-bold text-auto-blue mb-2">78%</div>
                  <p className="text-xl font-medium text-gray-800">Redução média de tempo</p>
                  <p className="text-gray-600">nos processos automatizados</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
