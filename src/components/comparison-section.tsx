"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

export function ComparisonSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  // Animation variants
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
      backgroundColor: "rgba(33, 135, 197, 0.1)",
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
            className="text-3xl font-bold inline-flex items-center px-4 py-2 bg-auto-blue/10 rounded-full text-auto-blue"
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
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1, delayChildren: 0.3 }
            }
          }}
        >
          <table className="w-full min-w-[1000px] border-collapse">
            <thead>
              <motion.tr
                className="border-b"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                }}
              >
                <th className="p-4 text-left"></th>
                <motion.th
                  className="p-4 text-center"
                  whileHover={cellVariants.highlight}
                >
                  <div className="font-bold text-auto-blue text-lg">Automatizando</div>
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
              {[
                {
                  category: "Tempo para contratar",
                  automatizando: "Poucas Horas",
                  freelancers: "2-3 Semanas",
                  inHouse: "Confie na Sorte",
                  agencies: "5-7 dias"
                },
                {
                  category: "Nível de Experiência",
                  automatizando: "Nível Sênior",
                  freelancers: "Iniciante ou Nível Junior",
                  inHouse: "Inexistente",
                  agencies: "Boa (Cruze os dedos)"
                },
                {
                  category: "Comunicação",
                  automatizando: "Diária",
                  freelancers: "Fantasma",
                  inHouse: "Muitas falhas",
                  agencies: "Vária Semanas"
                },
                {
                  category: "Primeira Entrega",
                  automatizando: "2-3 dias",
                  freelancers: "2-3 Meses",
                  inHouse: "6-7 Semanas",
                  agencies: "Demorada"
                },
                {
                  category: "Rescisão",
                  automatizando: "Um clique + 0 R$",
                  freelancers: "Demorada",
                  inHouse: "Pesadelo + Dores de Cabeça",
                  agencies: "Demorada"
                }
              ].map((row, index) => (
                <motion.tr
                  key={row.category}
                  className="border-b"
                  custom={index}
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
                        ${row.category === "Tempo para contratar" || row.category === "Nível de Experiência" || row.category === "Comunicação" ? "bg-blue-100 text-auto-blue" : ""}
                      `}
                      variants={badgeVariants}
                      custom={index}
                      whileHover="hover"
                    >
                      {row.automatizando}
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

      {/* Floating animation */}
      <motion.div
        className="absolute right-0 top-1/2 w-12 h-12 rounded-full bg-auto-blue/5 blur-xl hidden lg:block"
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
