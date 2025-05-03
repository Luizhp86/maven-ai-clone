"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface ExampleSubmission {
  name: string;
  email: string;
  phone: string;
  company: string;
  date: string;
}

export default function AdminSubmissions() {
  const [submissions, setSubmissions] = useState<ExampleSubmission[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a static site, we would normally fetch this data from an external API
    // For demo purposes, we'll just show a message
    setLoading(false);
  }, []);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard - Form Submissions</h1>

      <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-md text-yellow-800">
        <p className="font-medium">Static Site Notice</p>
        <p className="text-sm mt-1">
          This is a static site export, so form submissions would normally be handled by Netlify Forms.
          In a real implementation, you would use Netlify functions or a separate backend to retrieve form submissions.
        </p>
      </div>

      {loading ? (
        <div className="text-center p-12">
          <p>Carregando submissões...</p>
        </div>
      ) : (
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Exemplo de Submissão</CardTitle>
              <CardDescription>Demonstração de como os dados seriam exibidos</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="grid grid-cols-2">
                  <span className="font-medium">Nome:</span>
                  <span>João Silva</span>
                </div>
                <div className="grid grid-cols-2">
                  <span className="font-medium">Email:</span>
                  <span>joao@exemplo.com</span>
                </div>
                <div className="grid grid-cols-2">
                  <span className="font-medium">Telefone:</span>
                  <span>(11) 98765-4321</span>
                </div>
                <div className="grid grid-cols-2">
                  <span className="font-medium">Empresa:</span>
                  <span>Empresa Exemplo Ltda</span>
                </div>
                <div className="grid grid-cols-2">
                  <span className="font-medium">Data:</span>
                  <span>03/05/2025 14:30</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" disabled>Ação Indisponível</Button>
            </CardFooter>
          </Card>

          <div className="text-center text-gray-500 text-sm mt-4">
            Em um site real, as submissões do formulário seriam armazenadas no Netlify Forms e poderiam ser acessadas através do painel de administração do Netlify.
          </div>
        </div>
      )}
    </div>
  );
}
