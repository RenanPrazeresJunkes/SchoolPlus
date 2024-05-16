import Catalog from "@/components/catalog";
import DashboardHeader from "@/components/header-dashboard";
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
