import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { QrCode, Pencil, Eye, Trash2, Plus } from 'lucide-react'

const qrCodes = [
  {
    id: 1,
    name: 'QR Code 1',
    created: '2021-10-01',
    value: 'https://example.com/qr-code-1',
    image: 'https://example.com/qr-code-1.png',
    views: 100,
    status: 'ACTIVE',
  },
  {
    id: 2,
    name: 'QR Code 2',
    created: '2021-10-02',
    value: 'https://example.com/qr-code-2',
    image: 'https://example.com/qr-code-1.png',
    views: 200,
    status: 'ACTIVE',
  },
  {
    id: 3,
    name: 'QR Code 3',
    created: '2021-10-03',
    value: 'https://example.com/qr-code-3',
    image: 'https://example.com/qr-code-1.png',
    views: 300,
    status: 'ACTIVE',
  },
]

export default function QRCodeManager() {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>QR Codes</CardTitle>
          <Button variant="outline" size="sm">
            <Plus className="mr-2 h-4 w-4" />
            Create
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Created</TableHead>
              <TableHead>Views</TableHead>
              <TableHead>Links to</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {qrCodes.map((qrCode) => (
              <TableRow key={qrCode.id}>
                <TableCell>{qrCode.name}</TableCell>
                <TableCell>{qrCode.created}</TableCell>
                <TableCell>{qrCode.views}</TableCell>
                <TableCell>{qrCode.value}</TableCell>
                <TableCell>{qrCode.status}</TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Eye className="mr-2 h-4 w-4" />
                      View
                    </Button>
                    <Button variant="outline" size="sm">
                      <Pencil className="mr-2 h-4 w-4" />
                      Update
                    </Button>
                    <Button variant="outline" size="sm">
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete
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