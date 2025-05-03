"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function CaseStudiesSection() {
  const caseStudies = [
    {
      id: "wittel",
      title: "Wittel",
      logo: "https://ext.same-assets.com/1677406165/2330711574.svg",
      description: "A Wittel Comunicações é uma empresa especializada em Customer Experience (CX), oferecendo soluções que otimizam o relacionamento entre marcas e consumidores.",
      url: "/casewittel"
    },
    {
      id: "tecfil",
      title: "Tecfil",
      logo: "https://ext.same-assets.com/1677406165/2420184248.svg",
      description: "A TECFIL é uma fábrica que produz filtros de ar para automóveis, oferecendo uma vasta gama de produtos para atender às necessidades do mercado automotivo.",
      url: "/casetecfil"
    },
    {
      id: "natacha",
      title: "Hiper Natacha",
      logo: "https://ext.same-assets.com/1677406165/1203310267.svg",
      description: "O Hipermercado Natacha é um grande varejista que atende milhares de clientes diariamente. A empresa se destaca pela variedade de produtos e pelo compromisso com a satisfação dos clientes.",
      url: "/casenatacha"
    }
  ];

  return (
    <section id="cases" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Cases De Sucesso</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((caseStudy) => (
            <Card key={caseStudy.id} className="shadow-lg hover:shadow-xl transition-shadow overflow-hidden border border-gray-100">
              <div className="h-48 bg-maven-skyblue/20 flex items-center justify-center">
                <Image
                  src={caseStudy.logo}
                  alt={caseStudy.title}
                  width={150}
                  height={60}
                  className="max-h-20 object-contain"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">{caseStudy.title}</h3>
                <p className="text-muted-foreground mb-6">{caseStudy.description}</p>
                <Link href={caseStudy.url}>
                  <Button variant="outline" className="w-full">
                    Saiba Mais
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
