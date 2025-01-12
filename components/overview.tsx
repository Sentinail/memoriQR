import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { QrCode, Users, Eye, DollarSign } from 'lucide-react'

const stats = [
  {
    title: "Total Memorials",
    value: "254",
    icon: QrCode,
  },
  {
    title: "Total Views",
    value: "12,345",
    icon: Eye,
  },
  {
    title: "New Visitors",
    value: "+573",
    icon: Users,
  },
  {
    title: "Revenue",
    value: "$3,245",
    icon: DollarSign,
  },
]

export function Overview() {
  return (
    <>
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {stat.title}
            </CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
          </CardContent>
        </Card>
      ))}
    </>
  )
}

