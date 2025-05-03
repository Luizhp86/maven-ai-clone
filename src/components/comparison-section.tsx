"use client";

import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function ComparisonSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const comparisonData = [
    {
      category: "Tempo para contratar",
      mavenAI: "Poucas Horas",
      freelancers: "2-3 Semanas",
      inHouse: "Confie na Sorte",
      agencies: "5-7 dias",
    },
    {
      category: "Nível de Experiência",
      mavenAI: "Nível Sênior",
      freelancers: "Iniciante ou Nível Junior",
      inHouse: "Inexistente",
      agencies: "Boa (Cruze os dedos)",
    },
    {
      category: "Comunicação",
      mavenAI: "Diária",
      freelancers: "Fantasma",
      inHouse: "Muitas falhas",
      agencies: "Vária Semanas",
    },
    {
      category: "Primeira Entrega",
      mavenAI: "2-3 dias",
      freelancers: "2-3 Meses",
      inHouse: "6-7 Semanas",
      agencies: "Demorada",
    },
    {
      category: "Rescisão",
      mavenAI: "Um clique + 0 R$",
      freelancers: "Demorada",
      inHouse: "Pesadelo + Dores de Cabeça",
      agencies: "Demorada",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
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

  const rowVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (custom: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.1 * custom
      }
    })
  };

  const cellVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" }
    },
    highlight: {
      scale: 1.05,
      backgroundColor: "rgba(59, 159, 204, 0.1)",
      transition: { duration: 0.2 }
    }
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (custom: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.2 + (0.1 * custom),
        ease: "easeOut"
      }
    }),
    hover: {
      scale: 1.1,
      transition: { duration: 0.2, type: "spring", stiffness: 300 }
    }
  };

  return (
    <section className="py-16 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.h2
            className="text-3xl font-bold inline-flex items-center px-4 py-2 bg-maven-blue/10 rounded-full text-maven-blue"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ scale: 1.03 }}
          >
            Comparação
          </motion.h2>
          <motion.h3
            className="text-3xl font-bold mt-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          >
            Compare as suas Opções:
          </motion.h3>
        </motion.div>

        <motion.div
          className="overflow-x-auto"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <table className="w-full min-w-[1000px] border-collapse">
            <thead>
              <motion.tr
                className="border-b"
                variants={itemVariants}
              >
                <th className="p-4 text-left" />
                <motion.th
                  className="p-4 text-center"
                  whileHover={cellVariants.highlight}
                >
                  <div className="font-bold text-maven-blue text-lg">Maven AI</div>
                </motion.th>
                <motion.th
                  className="p-4 text-center"
                  whileHover={cellVariants.highlight}
                >
                  <div className="font-bold text-gray-700 text-lg">FREELANCERS</div>
                </motion.th>
                <motion.th
                  className="p-4 text-center"
                  whileHover={cellVariants.highlight}
                >
                  <div className="font-bold text-gray-700 text-lg">IN-HOUSE</div>
                </motion.th>
                <motion.th
                  className="p-4 text-center"
                  whileHover={cellVariants.highlight}
                >
                  <div className="font-bold text-gray-700 text-lg">OUTRAS AGÊNCIAS</div>
                </motion.th>
              </motion.tr>
            </thead>
            <tbody>
              {comparisonData.map((row, rowIndex) => (
                <motion.tr
                  key={row.category}
                  className="border-b"
                  custom={rowIndex}
                  variants={rowVariants}
                >
                  <td className="p-4 font-medium">{row.category}</td>
                  <motion.td
                    className="p-4 text-center"
                    variants={cellVariants}
                    whileHover={cellVariants.highlight}
                  >
                    <motion.div
                      className={`
                        inline-flex px-3 py-1 rounded-full font-medium
                        ${row.category === "Primeira Entrega" || row.category === "Rescisão" ? "bg-green-100 text-green-600" : ""}
                        ${row.category === "Tempo para contratar" || row.category === "Nível de Experiência" || row.category === "Comunicação" ? "bg-blue-100 text-maven-blue" : ""}
                      `}
                      variants={badgeVariants}
                      custom={rowIndex}
                      whileHover="hover"
                    >
                      {row.mavenAI}
                    </motion.div>
                  </motion.td>
                  <motion.td
                    className="p-4 text-center text-gray-700"
                    variants={cellVariants}
                    whileHover={cellVariants.highlight}
                  >
                    {row.freelancers}
                  </motion.td>
                  <motion.td
                    className="p-4 text-center text-gray-700"
                    variants={cellVariants}
                    whileHover={cellVariants.highlight}
                  >
                    {row.inHouse}
                  </motion.td>
                  <motion.td
                    className="p-4 text-center text-gray-700"
                    variants={cellVariants}
                    whileHover={cellVariants.highlight}
                  >
                    {row.agencies}
                  </motion.td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>

      {/* Floating elements for visual interest */}
      <motion.div
        className="absolute right-0 top-1/2 w-12 h-12 rounded-full bg-maven-blue/5 blur-xl hidden lg:block"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut"
        }}
      />
    </section>
  );
}
