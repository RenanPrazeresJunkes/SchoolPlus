import Catalog from "@/components/catalog";
import DashboardHeader from "@/components/header-dashboard";
import { CarouselItem, CarouselContent, CarouselPrevious, CarouselNext, Carousel } from "@/components/ui/carousel"

import { Card } from "@/components/ui/card"
import Link from "next/link";
import InProgressCourses from "@/components/InProgressCourses";
import Carrocel from "@/components/carrocel";

export default function Dashboard() {
  return (
    <div>
      <DashboardHeader />
      <Carrocel />
      <InProgressCourses />
      <Catalog />
    </div>
  )
}
