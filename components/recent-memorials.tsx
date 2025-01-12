import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Eye, QrCode } from 'lucide-react'

const recentMemorials = [
  { id: 1, name: "John Doe", created: "2023-06-01", views: 123 },
  { id: 2, name: "Jane Smith", created: "2023-05-28", views: 89 },
  { id: 3, name: "Robert Johnson", created: "2023-05-25", views: 234 },
  { id: 4, name: "Emily Brown", created: "2023-05-22", views: 56 },
  { id: 5, name: "Michael Wilson", created: "2023-05-20", views: 178 },
]

export function RecentMemorials() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Memorials</CardTitle>
        <CardDescription>You have created {recentMemorials.length} memorials recently.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Created</TableHead>
              <TableHead>Views</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentMemorials.map((memorial) => (
              <TableRow key={memorial.id}>
                <TableCell className="font-medium">{memorial.name}</TableCell>
                <TableCell>{memorial.created}</TableCell>
                <TableCell>{memorial.views}</TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Eye className="mr-2 h-4 w-4" />
                      View
                    </Button>
                    <Button variant="outline" size="sm">
                      <QrCode className="mr-2 h-4 w-4" />
                      QR Code
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

