import { CheckIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card";

export default function CardPrices() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid grid-cols-1 gap-8 px-4 md:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:gap-16">
            <Card>
              <CardHeader>
                <CardTitle>Plano Basic</CardTitle>
                <CardDescription>Ideal para alunos que estão iniciando seus conhecimentos na caminha rumo ao profissional</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-baseline justify-center space-x-2">
                  <span className="text-4xl font-bold">R$0</span>
                  <span className="text-gray-500">/mês</span>
                </div>
                <ul className="space-y-2 text-gray-500">
                  <li className="flex items-center">
                    <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                    5 GB de armazenamento driver Google
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                    Suporte
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                    Comunidade Discord
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                    Conteúdos Gratuitos
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#0085FF]">Assinar</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Plano Pro</CardTitle>
                <CardDescription>Ideal para alunos que desejam aprofundar seus conhecimentos.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-baseline justify-center space-x-2">
                  <span className="text-4xl font-bold">R$45</span>
                  <span className="text-gray-500">/mês</span>
                </div>
                <ul className="space-y-2 text-gray-500">
                  <li className="flex items-center">
                    <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                    20 GB de armazenamento driver Google
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                    Suporte
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                    Mentorias
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                    Repositório de Projetos
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#0085FF]">Assinar</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Plano Master</CardTitle>
                <CardDescription>Ideal para os que desejam se destacar no mercado de trabalho como profissionais de destaque.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-baseline justify-center space-x-2">
                  <span className="text-4xl font-bold">R$80</span>
                  <span className="text-gray-500">/mês</span>
                </div>
                <ul className="space-y-2 text-gray-500">
                  <li className="flex items-center">
                    <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                    25 GB de armazenamento driver google
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                    Suporte 
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                    Mentorias
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                    Planos Carreiras
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                    Softwares Licenciados - Jetbrains
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#0085FF]">Assinar</Button>
              </CardFooter>
            </Card>
          </div>
        </section>
    )
}