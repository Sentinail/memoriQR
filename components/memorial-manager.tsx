import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Pencil, Eye, Trash2, Plus } from 'lucide-react'

const memorials = [
  {
    id: 1,
    name: 'Memorial 1',
    created: '2021-10-01',
    url: 'https://example.com/memorial-1',
    views: 100,
    status: 'ACTIVE',
  },
  {
    id: 2,
    name: 'Memorial 2',
    created: '2021-10-02',
    url: 'https://example.com/memorial-2',
    views: 200,
    status: 'ACTIVE',
  },
  {
    id: 3,
    name: 'Memorial 3',
    created: '2021-10-03',
    url: 'https://example.com/memorial-3',
    views: 300,
    status: 'ACTIVE',
  },
]

export default function MemorialManager() {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Memorials</CardTitle>
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
              <TableHead>URL</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {memorials.map((memorial) => (
              <TableRow key={memorial.id}>
                <TableCell>{memorial.name}</TableCell>
                <TableCell>{memorial.created}</TableCell>
                <TableCell>{memorial.views}</TableCell>
                <TableCell>{memorial.url}</TableCell>
                <TableCell>{memorial.status}</TableCell>
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