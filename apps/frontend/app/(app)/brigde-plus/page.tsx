import Link from "next/link"
import { NavigationMenuLink, NavigationMenuList, NavigationMenu } from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MountainIcon, CheckIcon } from "lucide-react"
import Image from "next/image"
import DashboardHeader from "@/components/header-dashboard"
import CardPrices from "@/components/cards-prices"

export default function BrigePlus() {
  return (
    <>
      <DashboardHeader/>
      <main>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Contrua seu futuro com o Brigde+
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                O futuro profissional é a ponte entre os sonhos e a realidade - construa-a com determinação e paixão.
                </p>
              </div>
              <div className="space-x-4">
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md bg-[#0085FF] px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-indigo-950 disabled:pointer-events-none disabled:opacity-50"
                  href="#"
                >
                  Assine Agora Brigde+
                </Link>
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md border border-gray-300 bg-transparent px-4 py-2 text-sm font-medium text-gray-300 shadow-sm transition-colors hover:bg-gray-800 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                  href="#"
                >
                  Saiba Mais
                </Link>
              </div>
            </div>
          </div>
        </section>
        <CardPrices/>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container grid items-center gap-6 px-4 md:grid-cols-2 md:gap-12 lg:gap-16">
            <Image
              alt="Recursos"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              height="310"
              src="/banners/banner3.jpg"
              width="550"
            />
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm dark:bg-gray-700 dark:text-gray-300">
                  Recursos
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Tudo o que você precisa para escalar seu futuro
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Nossa plataforma oferece uma ampla gama de recursos para ajudar seu conhecimento a crescer, desde
                  ferramentas, colaboração até planos de carreira.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <CheckIcon className="h-6 w-6 text-green-500" />
                  <h4 className="text-lg font-semibold">Colaboração</h4>
                  <p className="text-gray-500 dark:text-gray-400">
                    Tutores universitários que estão transbordando de conhecimento, a prontidão somente para você.
                  </p>
                </div>
                <div className="space-y-2">
                  <CheckIcon className="h-6 w-6 text-green-500" />
                  <h4 className="text-lg font-semibold">Análises</h4>
                  <p className="text-gray-500 dark:text-gray-400">Conteúdos de valor que estão sendo passados tanto em faculdades quanto no mercado de trabalho.</p>
                </div>
                <div className="space-y-2">
                  <CheckIcon className="h-6 w-6 text-green-500" />
                  <h4 className="text-lg font-semibold">Certificação</h4>
                  <p className="text-gray-500 dark:text-gray-400">
                    Nossos conteúdos são validados e aprovados por professores e profissionais qualificados trabalhando em conjunto com universitários
                  </p>
                </div>
                <div className="space-y-2">
                  <CheckIcon className="h-6 w-6 text-green-500" />
                  <h4 className="text-lg font-semibold">Segurança</h4>
                  <p className="text-gray-500 dark:text-gray-400">
                    Nossa plataforma está adequada para menores de idade e seguindo os princípios da lei LGPD.                   
                  </p>
                  <span className="underline">Consulte nossos termos de condição e Políticas de privacidade</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Pronto para começar os estudos?</h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Entre em contato conosco para saber mais sobre nossos planos e como podemos ajudar seu negócio a
                  crescer.
                </p>
              </div>
              <form className="mx-auto w-full max-w-sm space-y-2">
                <div className="flex space-x-2">
                  <Input className="flex-1" placeholder="Seu email" type="email" />
                  <Button type="submit">Entrar em Contato</Button>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Seu email está seguro conosco. Nunca compartilharemos seus dados.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 p-6 md:py-12 w-full text-white">
        <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
          <div className="grid gap-1">
            <h3 className="font-semibold">Empresa</h3>
            <Link className="hover:underline" href="#">
              Sobre Nós
            </Link>
            <Link className="hover:underline" href="#">
              Equipe
            </Link>
            <Link className="hover:underline" href="#">
              Carreiras
            </Link>
            <Link className="hover:underline" href="#">
              Notícias
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Informações</h3>
            <Link className="hover:underline" href="#">
              Planos
            </Link>
            <Link className="hover:underline" href="#">
              Recursos
            </Link>
            <Link className="hover:underline" href="#">
              Preços
            </Link>
            <Link className="hover:underline" href="#">
              Suporte
            </Link>
          </div>
        </div>
      </footer>
    </>
  )
}