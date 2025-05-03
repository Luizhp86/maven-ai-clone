import "@/app/globals.css";
import type { Metadata, Viewport } from "next";
import ClientBody from "./ClientBody";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Automatizando - Redução de custos com IA para sua empresa",
  description:
    "Reduza até 70% dos custos com mão de obra automatizando processos repetitivos com Inteligência Artificial. Conheça nossas soluções e maximize seus resultados.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
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
