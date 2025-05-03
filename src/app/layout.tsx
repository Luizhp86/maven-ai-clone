import type { Metadata } from "next";
import { Inter } from "next/font/google";

import ClientBody from "./ClientBody";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maven AI - Soluções de Inteligência Artificial para Empresas",
  description:
    "Eleve seu patamar de eficiência com Agentes de IA. Convertendo leads no piloto automático para empresas.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="min-h-screen font-sans antialiased">
        <ClientBody>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ClientBody>
      </body>
    </html>
  );
}
