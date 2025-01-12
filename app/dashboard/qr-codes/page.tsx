import { Metadata } from "next"
import DashboardHeader from "@/components/dashboard-header"
import QRCodeManager from "@/components/qr-code-manager"

export const metadata: Metadata = {
  title: "QR Codes",
  description: "Manage your QR codes",
}

export default function QRCodesPage() {
  return (
    <section>
      <DashboardHeader
        heading="QR Codes"
        text="Create and manage QR codes for your memorials."
      />
      <div className="mt-8">
        <QRCodeManager />
      </div>
    </section>
  )
}

