"use client"

import { FormEvent, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from 'next/link';

export default function SignUp() {
  const [name, setName] = useState('');
  const [college, setCollege] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, college, email, password }),
      });

      if (response.ok) {
        console.log("Ir para a dasboard")
      } else {
        const data = await response.json();
        setError(data.message);
      }
    } catch (error) {
      console.error("Erro ao criar conta:", error);
    }
  };

  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <form onSubmit={handleSubmit}>
            <div className="grid gap-2 text-center">
              <h1 className="text-3xl font-bold">Criar conta</h1>
              <p className="text-balance text-muted-foreground">
                Crie seu cadastro aqui
              </p>
            </div>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Nome</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Fulano de Tal"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="college">Faculdade</Label>
                <Input
                  id="college"
                  type="text"
                  placeholder="CESUC, UNISUL, UFSC, ..."
                  required
                  value={college}
                  onChange={(e) => setCollege(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="email@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Senha</Label>
                </div>
                <Input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {error && <p className="text-red-500">{error}</p>}
              <Button type="submit" className="w-full">
                Criar conta
              </Button>
            </div>
          </form>
          <div className="mt-4 text-center text-sm">
            Já possui uma conta ?{" "}
            <Link href="/sign-in" className="underline">
              Login
            </Link>
          </div>
          <div className="mt-4 text-center">
            <Link href="/" className="underline">
              Voltar para a página inicial
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
    <h1>Imagem aqui</h1>
      </div>
    </div>
  );
}
