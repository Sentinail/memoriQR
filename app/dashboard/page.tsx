import { Metadata } from "next"
import DashboardHeader from "@/components/dashboard-header"
import { Overview } from "@/components/overview"
import { RecentMemorials } from "@/components/recent-memorials"

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Manage your memorials and view statistics.",
}

export default function DashboardPage() {
  return (
    <>
      <DashboardHeader
        heading="Dashboard"
        text="Manage your memorials and view statistics."
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Overview />
      </div>
      <div className="mt-8">
        <RecentMemorials />
      </div>
    </>
  )
}

