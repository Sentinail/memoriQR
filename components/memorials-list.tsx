'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { QrCode, Search, User, Calendar, Eye } from 'lucide-react'
import Link from 'next/link'

// This would typically come from an API or database
const memorials = [
  { id: 1, name: "John Doe", birth: "1950-01-01", death: "2022-12-31", views: 1234 },
  { id: 2, name: "Jane Smith", birth: "1960-06-15", death: "2023-03-20", views: 987 },
  { id: 3, name: "Robert Johnson", birth: "1945-12-10", death: "2023-01-05", views: 2345 },
  { id: 4, name: "Emily Brown", birth: "1970-09-22", death: "2023-05-17", views: 567 },
  { id: 5, name: "Michael Wilson", birth: "1955-03-30", death: "2022-11-11", views: 1789 },
  { id: 6, name: "Sarah Davis", birth: "1980-07-19", death: "2023-04-02", views: 890 },
]

export default function MemorialsList() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredMemorials = memorials.filter(memorial =>
    memorial.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="relative">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <Input
            type="text"
            placeholder="Search memorials..."
            className="pl-10 bg-gray-800 border-gray-700"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button>
          <QrCode className="mr-2 h-4 w-4" /> Create New Memorial
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMemorials.map((memorial) => (
          <Card key={memorial.id} className="bg-gray-800 border-gray-700 hover:border-blue-500 transition-colors">
            <CardHeader>
              <CardTitle>{memorial.name}</CardTitle>
              <CardDescription>Memorial ID: {memorial.id}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2 text-sm text-gray-400 mb-2">
                <Calendar className="h-4 w-4" />
                <span>{memorial.birth} - {memorial.death}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Eye className="h-4 w-4" />
                <span>{memorial.views} views</span>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button className="bg-white text-gray-900 hover:bg-gray-200 hover:text-gray-900 border border-gray-300" variant="outline" size="sm">
                <QrCode className="mr-2 h-4 w-4" /> View QR
              </Button>
              <Button className="bg-white text-gray-900 hover:bg-gray-200 hover:text-gray-900 border border-gray-300" variant="outline" size="sm" asChild>
                <Link href={`/memorial/${memorial.id}`}>
                  <User className="mr-2 h-4 w-4" /> View Memorial
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

