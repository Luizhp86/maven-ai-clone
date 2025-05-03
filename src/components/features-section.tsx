"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import {
  MessageSquare,
  UserPlus,
  Megaphone,
  Phone,
  Users,
  BarChart
} from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function FeaturesSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const features = [
    {
      title: "Criação de CRM",
      description: "Rastreie a jornada do seu lead até a compra de maneira 100% automática, sem depender do seu Closer preencher a CRM.",
      icon: <UserPlus className="h-6 w-6 text-maven-blue" />,
    },
    {
      title: "Prospecção Ativa",
      description: "Agende chamadas diariamente com os seus clientes dos sonhos de maneira automática, sem investir em anúncios.",
      icon: <Users className="h-6 w-6 text-maven-blue" />,
    },
    {
      title: "Automações de Marketing",
      description: "Sistemas Plug & Play de Inbound Marketing para nutrir e engajar os seus leads de maneira autônoma.",
      icon: <Megaphone className="h-6 w-6 text-maven-blue" />,
    },
    {
      title: "Chatbots IA",
      description: "Crie um Agente lA conversacional para converter os seus inbound leads de maneira imediata, elevando a experiência do seu lead em qualquer canal de comunicação.",
      icon: <MessageSquare className="h-6 w-6 text-maven-blue" />,
    },
    {
      title: "IA de Ligação",
      description: "Crie Agentes IA realistas para engajar com os seus leads por chamadas telefônicas inbound ou outbound.",
      icon: <Phone className="h-6 w-6 text-maven-blue" />,
    },
    {
      title: "Consultoria",
      description: "Te ajudaremos a esclarecer melhor sua oferta e otimizar seu funil de vendas, mostrando o que empresas que faturam 8 dígitos estão fazendo.",
      icon: <BarChart className="h-6 w-6 text-maven-blue" />,
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const cardHoverVariants = {
    initial: { y: 0, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" },
    hover: {
      y: -8,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { duration: 0.2, ease: "easeInOut" }
    }
  };

  const iconVariants = {
    initial: { scale: 1, backgroundColor: "rgba(59, 159, 204, 0.1)" },
    hover: {
      scale: 1.1,
      backgroundColor: "rgba(59, 159, 204, 0.2)",
      transition: { duration: 0.2, type: "spring", stiffness: 300 }
    }
  };

  const featureImageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.2, type: "spring", stiffness: 300 }
    }
  };

  return (
    <section id="services" className="py-16 bg-gradient-to-b from-white to-maven-skyblue/10" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Cresça Exponencialmente</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              whileHover={{ y: -5 }}
            >
              <Card className="shadow-md border border-gray-100 h-full transition-all">
                <CardHeader>
                  <CardTitle className="text-xl">Sistemas Integrados</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Crie um sistema inteligente e preciso que conecte todos os aplicativos utilizados na sua operação para potencializar sua eficiência e visualização.
                  </p>
                  <motion.div
                    className="flex justify-center md:justify-start mt-6 space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
                  >
                    <motion.div
                      variants={featureImageVariants}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                      whileHover="hover"
                    >
                      <Image
                        src="https://ext.same-assets.com/1677406165/2330711574.svg"
                        alt="WhatsApp"
                        width={40}
                        height={40}
                      />
                    </motion.div>
                    <motion.div
                      variants={featureImageVariants}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                      transition={{ delay: 0.1 }}
                      whileHover="hover"
                    >
                      <Image
                        src="https://ext.same-assets.com/1677406165/2420184248.svg"
                        alt="Make"
                        width={40}
                        height={40}
                      />
                    </motion.div>
                    <motion.div
                      variants={featureImageVariants}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                      transition={{ delay: 0.2 }}
                      whileHover="hover"
                    >
                      <Image
                        src="https://ext.same-assets.com/1677406165/1203310267.svg"
                        alt="CRM"
                        width={40}
                        height={40}
                      />
                    </motion.div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
              whileHover={{ y: -5 }}
            >
              <Card className="shadow-md border border-gray-100 h-full transition-all">
                <CardHeader>
                  <CardTitle className="text-xl">Refinamento</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Nós criamos sistemas visuais e otimizados para constantes refinamentos e atualizações de maneira simples e intuitiva.
                  </p>
                  <motion.div
                    className="flex justify-center mt-6"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="bg-maven-blue/10 text-maven-blue font-bold rounded-full px-6 py-3 text-xl">
                      40+
                    </div>
                  </motion.div>
                  <p className="text-center text-sm text-maven-blue mt-2">
                    Integrações Disponíveis
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>

        <motion.h3
          className="text-2xl font-bold mb-8 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          O que os nossos clientes recebem
        </motion.h3>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              transition={{ delay: index * 0.1 }}
              whileHover={cardHoverVariants.hover}
              initial={cardHoverVariants.initial}
              className="h-full"
            >
              <Card className="shadow-sm border border-gray-100 h-full">
                <CardHeader className="flex flex-row items-start space-x-4 pb-2">
                  <motion.div
                    className="bg-maven-blue/10 p-2 rounded-full"
                    variants={iconVariants}
                    initial="initial"
                    whileHover="hover"
                  >
                    {feature.icon}
                  </motion.div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating elements (similar to hero section) */}
        <motion.div
          className="absolute left-2 bottom-20 w-6 h-6 rounded-full bg-maven-blue/10 hidden md:block"
          animate={{
            y: [0, -12, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute right-10 top-32 w-4 h-4 rounded-full bg-maven-blue/20 hidden md:block"
          animate={{
            y: [0, -8, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 2.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
      </div>
    </section>
  );
}
