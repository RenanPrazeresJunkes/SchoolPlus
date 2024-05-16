import SchoolCatalog from "@/components/catalog";
import DashboardHeader from "@/components/header-dashboard";
import Image from "next/image";

export default function Catalog() {
  return (
    <div>
      <DashboardHeader />
      <header className="bg-gray-900 text-white py-12 md:py-16 lg:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <Image alt="banner" className="w-full h-full object-cover" src="/banners/banner1.png" width={1000} height={1000} />
          </div>
        </div>
      </header>
      <SchoolCatalog />
    </div>
  )
}
