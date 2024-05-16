import Link from "next/link"
import { CarouselItem, CarouselContent, CarouselPrevious, CarouselNext, Carousel } from "@/components/ui/carousel"
import Image from "next/image"

export default function Carrocel() {
  return (
    <Carousel className="w-full max-w-6xl mx-auto">
    <CarouselContent>
      <CarouselItem>
        <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden">
          <Image
            alt="Banner 1"
            className="w-full h-full object-cover"
            height={1080}
            src="/banners/banner2.jpg"
            style={{
              aspectRatio: "1920/1080",
              objectFit: "cover",
            }}
            width={1920}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-white">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Descubra os Melhores Conteudos</h2>
            <p className="text-lg sm:text-xl lg:text-2xl mb-8">
              Encontre sua profissão, explore novos mundos.
            </p>
            <Link
              className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              href="/catalog"
            >
              Explorar Instituições
            </Link>
          </div>
        </div>
      </CarouselItem>
      <CarouselItem>
        <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden">
          <Image
            alt="Banner 2"
            className="w-full h-full object-cover"
            height={1080}
            src="/banners/banner3.jpg"
            style={{
              aspectRatio: "1920/1080",
              objectFit: "cover",
            }}
            width={1920}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-white">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Destrave Seu Aprendizado</h2>
            <p className="text-lg sm:text-xl lg:text-2xl mb-8">
              Tenha acesso a um catálogo muito maior de instituições além de um contato direto com o tutor.
            </p>
            <Link
              className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              href="#"
            >
              <p>Descobrir <span className="text-sky-500">Bridge +</span></p>
            </Link>
          </div>
        </div>
      </CarouselItem>
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
  )
}