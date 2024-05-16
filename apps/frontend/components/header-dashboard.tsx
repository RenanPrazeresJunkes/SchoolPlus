import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AvatarImage, Avatar } from "@/components/ui/avatar"
import Image from "next/image"
import { Search } from "lucide-react"

export default function DashboardHeader() {
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
            <p className="font-medium hover:text-sky-500 transition duration-300">Catálogo</p>
          </Link>
          <Link className="text-gray-600 hover:text-gray-800" href="#">
          <p className="font-medium hover:text-sky-500 transition duration-300">Ensine na bridge</p>
          </Link>
          <Link className="text-gray-600 hover:text-gray-800" href="/dashboard">
          <p className="font-medium hover:text-sky-500 transition duration-300">Meus cursos</p>
          </Link>
          <Link href="/brigde-plus">
          <Button className="bg-[#0085FF] text-white px-4 py-2 rounded-md">Bridge +</Button>
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <BellIcon className="text-gray-600 w-6 h-6" />
          <Avatar>
            <AvatarImage alt="User profile" src="https://github.com/Renan-Rosa.png" />
          </Avatar>
        </div>
      </div>
    </header>
  )
}

function BellIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}


function MicroscopeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 18h8" />
      <path d="M3 22h18" />
      <path d="M14 22a7 7 0 1 0 0-14h-1" />
      <path d="M9 14h2" />
      <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
      <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
    </svg>
  )
}