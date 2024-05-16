import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AvatarImage, Avatar } from "@/components/ui/avatar"
import Image from "next/image"
import { Search } from "lucide-react"

export default function VideoHeader() {
  return (
    <header className="bg-white py-4 shadow-sm">
      <div className="flex items-center justify-between max-w-6xl mx-auto px-4">
        <div className="flex items-center space-x-4">
          <Image
            alt="bridge educação logo"
            className="h-10"
            height="40"
            src="/logo.png"
            style={{
              aspectRatio: "120/40",
              objectFit: "cover",
            }}
            width="120"
          />
          <div className="relative w-96">
            <Input className="pl-10 pr-4 py-2 w-full" placeholder="pesquisar" />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </div>
        <nav className="hidden md:flex space-x-6 items-center">
          <Link className="text-gray-600 hover:text-gray-800" href="/catalog">
            <p className="font-medium hover:text-sky-500 transition duration-300">Catalogo</p>
          </Link>
          <Link className="text-gray-600 hover:text-gray-800" href="#">
          <p className="font-medium hover:text-sky-500 transition duration-300">Ensine na bridge</p>
          </Link>
          <Link className="text-gray-600 hover:text-gray-800" href="/dashboard">
          <p className="font-medium hover:text-sky-500 transition duration-300">Meus cursos</p>
          </Link>
          <Button className="bg-[#0085FF] text-white px-4 py-2 rounded-md">Bridge +</Button>
        </nav>
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage alt="User profile" src="https://github.com/Renan-Rosa.png" />
          </Avatar>
        </div>
      </div>
    </header>
  )
}