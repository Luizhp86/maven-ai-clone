"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const buttonHoverVariants = {
    hover: {
      scale: 1.03,
      transition: { duration: 0.2, ease: "easeInOut" }
    }
  };

  // Animation for the underline of "Agentes de IA"
  const underlineVariants = {
    hidden: { width: "0%" },
    visible: {
      width: "100%",
      transition: {
        delay: 1.2,
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  };

  // Animation for the gradient backgrounds
  const gradientVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="home" className="relative w-full py-24 md:py-32 overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-maven-blue/5 blur-3xl"
        initial="hidden"
        animate="visible"
        variants={gradientVariants}
        transition={{ delay: 0.2 }}
      />
      <motion.div
        className="absolute -bottom-48 -right-48 w-[600px] h-[600px] rounded-full bg-maven-blue/5 blur-3xl"
        initial="hidden"
        animate="visible"
        variants={gradientVariants}
        transition={{ delay: 0.5 }}
      />

      <div className="container mx-auto px-4 z-10 relative">
        <motion.div
          className="max-w-3xl mx-auto text-center space-y-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              Eleve seu patamar de eficiência com{" "}
              <span className="text-maven-blue relative inline-block">
                <span className="relative z-10">Agentes de IA</span>
                <motion.span
                  className="absolute bottom-2 h-3 bg-maven-blue/10 w-full left-0 z-0"
                  initial="hidden"
                  animate="visible"
                  variants={underlineVariants}
                />
              </span>
            </h1>
          </motion.div>

          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Converta os seus leads no piloto automático sem precisar contratar SDR's de alto custo ou Agências de Marketing que vão te deixar na mão.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
            variants={itemVariants}
          >
            <Link href="/#contato">
              <motion.div whileHover="hover" variants={buttonHoverVariants}>
                <Button className="bg-maven-blue hover:bg-maven-blue/90 text-white px-6 py-6 text-lg h-auto w-full sm:w-auto group">
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: -4 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    Fale Conosco
                  </motion.span>
                  <motion.div
                    className="ml-2 inline-block"
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <ArrowRight className="h-4 w-4 inline" />
                  </motion.div>
                </Button>
              </motion.div>
            </Link>
            <motion.div whileHover="hover" variants={buttonHoverVariants}>
              <Button variant="outline" className="px-6 py-6 text-lg h-auto w-full sm:w-auto group">
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: -4 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  Saber Mais
                </motion.span>
                <motion.div
                  className="ml-2 inline-block"
                  initial={{ x: -5 }}
                  whileHover={{ x: 2 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <ArrowRight className="h-4 w-4 inline" />
                </motion.div>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating elements animation */}
      <motion.div
        className="absolute top-1/2 left-8 w-8 h-8 rounded-full bg-maven-blue/20 hidden md:block"
        animate={{
          y: [0, -15, 0],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-16 right-20 w-4 h-4 rounded-full bg-maven-blue/30 hidden md:block"
        animate={{
          y: [0, -10, 0],
          opacity: [0.3, 0.7, 0.3]
        }}
        transition={{
          duration: 2.5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 0.5
        }}
      />
      <motion.div
        className="absolute top-32 right-32 w-6 h-6 rounded-full bg-maven-blue/20 hidden md:block"
        animate={{
          y: [0, -12, 0],
          opacity: [0.2, 0.6, 0.2]
        }}
        transition={{
          duration: 3.5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </section>
  );
}
